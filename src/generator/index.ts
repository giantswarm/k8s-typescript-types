import { error, log } from './utils';
import { fetchCRD, ICRD } from './getCRD';
import {
  getResourceSources,
  getResourcesList,
  ICRDSource,
  IGroupInfo,
  IResourceInfo,
} from './getResourcesList';
import { getTypesForResource } from './getTypes';
import { renderReadme, writeReadme } from './overview';
import { IGeneratedGroup, IGeneratedVersion } from './types';
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
  source: ICRDSource;
  crd: ICRD;
}

interface IVersionResources {
  versionName: string;
  resources: IResourceWithCRD[];
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
    getResourceSources(resource).map(source => ({ resource, source })),
  );

  const responses = await Promise.allSettled(
    sources.map(({ source }) => fetchCRD(source.url)),
  );

  const resourcesWithCRDs: IResourceWithCRD[] = [];
  for (let i = 0; i < responses.length; i++) {
    const { resource, source } = sources[i];
    const response = responses[i];

    if (response.status === 'rejected') {
      errors.push(
        `${group.group}: could not fetch CRD for resource ${resource.name} from ${source.url}: ${response.reason}`,
      );
      continue;
    }

    resourcesWithCRDs.push({ resource, source, crd: response.value });
  }

  return resourcesWithCRDs;
}

function organizeByVersion(
  groupName: string,
  resourcesWithCRDs: IResourceWithCRD[],
  errors: string[],
): IVersionResources[] {
  // version name -> resource name -> CRD to generate that version from.
  // Keyed by resource name so that a resource configured with several CRD URLs
  // contributes each version once, taking the last CRD that defines it.
  const versionMap = new Map<string, Map<string, IResourceWithCRD>>();
  // resource name -> every version its CRDs define, to check excludeVersions.
  const definedVersions = new Map<string, Set<string>>();

  for (const resourceWithCRD of resourcesWithCRDs) {
    const { resource, crd } = resourceWithCRD;

    // Extract all versions from the CRD
    const versions = crd.spec?.versions || [];

    for (const version of versions) {
      const versionName = version.name;

      if (!definedVersions.has(resource.name)) {
        definedVersions.set(resource.name, new Set());
      }
      definedVersions.get(resource.name)!.add(versionName);

      if (resource.excludeVersions?.includes(versionName)) {
        continue;
      }

      if (!versionMap.has(versionName)) {
        versionMap.set(versionName, new Map());
      }

      versionMap.get(versionName)!.set(resource.name, resourceWithCRD);
    }
  }

  // An exclusion of a version no CRD defines any more has no effect; fail so
  // that it gets removed instead of lingering in the config.
  for (const resource of new Set(resourcesWithCRDs.map(r => r.resource))) {
    for (const excluded of resource.excludeVersions ?? []) {
      if (!definedVersions.get(resource.name)?.has(excluded)) {
        errors.push(
          `${groupName}: resource ${resource.name} excludes ${excluded}, which none of its CRDs defines; remove it from excludeVersions.`,
        );
      }
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
    const { resource, source, crd } = versionData.resources[i];
    const name = resource.name;
    const response = responses[i];

    if (response.status === 'rejected') {
      errors.push(
        `${groupName}/${versionData.versionName}: could not generate types for resource ${name}: ${response.reason}`,
      );
      continue;
    }

    const version = crd.spec.versions.find(
      v => v.name === versionData.versionName,
    );

    resources.push({
      name,
      kind: crd.spec.names.kind,
      types: response.value,
      apiGroup: crd.spec.group,
      served: version?.served !== false,
      source,
    });
  }

  return { versionName: versionData.versionName, resources };
}

async function generateGroup(
  group: IGroupInfo,
  errors: string[],
): Promise<IGeneratedGroup> {
  const resourcesWithCRDs = await fetchCRDs(group, errors);
  const versionData = organizeByVersion(group.group, resourcesWithCRDs, errors);

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
    const readme = await renderReadme(generated);
    await prepareOutput();
    for (const group of generated) {
      await writeGroup(group);
    }
    await writeMainIndex(generated.map(g => g.group));
    await commitOutput();
    await writeReadme(readme);
    log('done.');
    log('');
    log('✅ Type generation completed successfully!');
  } catch (err) {
    error((err as Error).toString());
    process.exit(1);
  }
}

main();
