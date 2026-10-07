import { error, log } from './utils';
import { fetchCRD, ICRD } from './getCRD';
import {
  getResourceURLs,
  getResourcesList,
  IGroupInfo,
  IResourceInfo,
} from './getResourcesList';
import { getTypesForResource } from './getTypes';
import {
  writeResourceTypes,
  writeVersionIndex,
  writeGroupIndex,
  writeMainIndex,
  prepareOutput,
  commitOutput,
} from './write';

interface IResourceWithCRD {
  resource: IResourceInfo;
  crd: ICRD;
}

interface IVersionResources {
  versionName: string;
  resources: IResourceWithCRD[];
}

interface IGeneratedVersion {
  versionName: string;
  resources: { name: string; types: string }[];
}

interface IGeneratedGroup {
  group: string;
  versions: IGeneratedVersion[];
}

async function fetchCRDs(
  group: IGroupInfo,
  errors: string[],
): Promise<IResourceWithCRD[]> {
  // A resource may be configured with several CRD URLs, in which case types
  // are generated for the union of the versions they define. Keep them in
  // configured order, so a version defined by more than one CRD ends up
  // resolving to the last of them.
  const sources = group.resources.flatMap(resource =>
    getResourceURLs(resource).map(url => ({ resource, url })),
  );

  const responses = await Promise.allSettled(
    sources.map(source => fetchCRD(source.url)),
  );

  const resourcesWithCRDs: IResourceWithCRD[] = [];
  for (let i = 0; i < responses.length; i++) {
    const { resource, url } = sources[i];
    const response = responses[i];

    if (response.status === 'rejected') {
      errors.push(
        `${group.group}: could not fetch CRD for resource ${resource.name} from ${url}: ${response.reason}`,
      );
      continue;
    }

    resourcesWithCRDs.push({ resource: resource, crd: response.value });
  }

  return resourcesWithCRDs;
}

function organizeByVersion(
  resourcesWithCRDs: IResourceWithCRD[],
): IVersionResources[] {
  // version name -> resource name -> CRD to generate that version from.
  // Keyed by resource name so that a resource configured with several CRD URLs
  // contributes each version once, taking the last CRD that defines it.
  const versionMap = new Map<string, Map<string, IResourceWithCRD>>();

  for (const resourceWithCRD of resourcesWithCRDs) {
    const { resource, crd } = resourceWithCRD;

    // Extract all versions from the CRD
    const versions = crd.spec?.versions || [];

    for (const version of versions) {
      const versionName = version.name;

      if (!versionMap.has(versionName)) {
        versionMap.set(versionName, new Map());
      }

      versionMap.get(versionName)!.set(resource.name, resourceWithCRD);
    }
  }

  return Array.from(versionMap.entries()).map(([versionName, resources]) => ({
    versionName,
    resources: Array.from(resources.values()),
  }));
}

async function generateTypesForVersion(
  groupName: string,
  versionData: IVersionResources,
  errors: string[],
): Promise<IGeneratedVersion> {
  const responses = await Promise.allSettled(
    versionData.resources.map(r =>
      getTypesForResource(versionData.versionName, r.resource.name, r.crd),
    ),
  );

  const resources: IGeneratedVersion['resources'] = [];

  for (let i = 0; i < responses.length; i++) {
    const name = versionData.resources[i].resource.name;
    const response = responses[i];

    if (response.status === 'rejected') {
      errors.push(
        `${groupName}/${versionData.versionName}: could not generate types for resource ${name}: ${response.reason}`,
      );
      continue;
    }

    resources.push({ name, types: response.value });
  }

  return { versionName: versionData.versionName, resources };
}

async function generateGroup(
  group: IGroupInfo,
  errors: string[],
): Promise<IGeneratedGroup> {
  const resourcesWithCRDs = await fetchCRDs(group, errors);
  const versionData = organizeByVersion(resourcesWithCRDs);

  const versions: IGeneratedVersion[] = [];
  for (const versionResources of versionData) {
    versions.push(
      await generateTypesForVersion(group.group, versionResources, errors),
    );
  }

  return { group: group.group, versions };
}

async function writeGroup(group: IGeneratedGroup): Promise<void> {
  for (const version of group.versions) {
    for (const resource of version.resources) {
      await writeResourceTypes(
        group.group,
        version.versionName,
        resource.name,
        resource.types,
      );
    }

    await writeVersionIndex(
      group.group,
      version.versionName,
      version.resources.map(r => r.name),
    );
  }

  await writeGroupIndex(
    group.group,
    group.versions.map(v => v.versionName),
  );
}

async function main() {
  try {
    log('Reading resources list from config... ', false);
    const groups = await getResourcesList();
    log('done.');
    log('');

    // Generate everything before writing anything: a CRD that fails to fetch
    // or compile would otherwise be left out of the indexes, removing its types.
    // Groups are independent, so they are fetched in parallel.
    const errors: string[] = [];
    const generated = await Promise.all(
      groups.map(group => generateGroup(group, errors)),
    );

    for (const group of generated) {
      const versions = group.versions
        .map(v => `${v.versionName} (${v.resources.length})`)
        .join(', ');
      log(`${group.group}: ${versions}`);
    }
    log('');

    if (errors.length > 0) {
      for (const message of errors) {
        error(message);
      }
      error('');
      error('❌ Type generation failed, nothing was written.');
      process.exit(1);
    }

    log('Writing types... ', false);
    await prepareOutput();
    for (const group of generated) {
      await writeGroup(group);
    }
    await writeMainIndex(generated.map(g => g.group));
    await commitOutput();
    log('done.');
    log('');
    log('✅ Type generation completed successfully!');
  } catch (err) {
    error((err as Error).toString());
    process.exit(1);
  }
}

main();
