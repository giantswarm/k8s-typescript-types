import { error, log } from './utils';
import { fetchCRD, ICRD } from './getCRD';
import { getResourcesList, IGroupInfo, IResourceInfo } from './getResourcesList';
import { getTypesForResource } from './getTypes';
import {
  writeResourceTypes,
  writeVersionIndex,
  writeGroupIndex,
  writeMainIndex,
} from './write';

interface IResourceWithCRD {
  resource: IResourceInfo;
  crd: ICRD;
}

interface IVersionResources {
  versionName: string;
  resources: IResourceWithCRD[];
}

async function fetchCRDs(group: IGroupInfo): Promise<IResourceWithCRD[]> {
  log(`  Fetching CRDs...`, false);

  const responses = await Promise.allSettled(
    group.resources.map(r => fetchCRD(r.crdURL)),
  );

  const resourcesWithCRDs: IResourceWithCRD[] = [];
  for (let i = 0; i < responses.length; i++) {
    const resource = group.resources[i];
    const response = responses[i];

    if (response.status === 'rejected') {
      error(
        `Could not fetch CRD for resource ${resource.name}: ${response.reason}`,
      );
      continue;
    }

    resourcesWithCRDs.push({ resource: resource, crd: response.value });
  }

  log(` done.`);

  return resourcesWithCRDs;
}

function organizeByVersion(
  resourcesWithCRDs: IResourceWithCRD[],
): IVersionResources[] {
  const versionMap = new Map<string, IResourceWithCRD[]>();

  for (const resourceWithCRD of resourcesWithCRDs) {
    const { crd } = resourceWithCRD;

    // Extract all versions from the CRD
    const versions = crd.spec?.versions || [];

    for (const version of versions) {
      const versionName = version.name;

      if (!versionMap.has(versionName)) {
        versionMap.set(versionName, []);
      }

      versionMap.get(versionName)!.push(resourceWithCRD);
    }
  }

  return Array.from(versionMap.entries()).map(([versionName, resources]) => ({
    versionName,
    resources,
  }));
}

async function generateTypesForVersion(
  groupName: string,
  versionData: IVersionResources,
): Promise<void> {
  log(`  Version ${versionData.versionName}:`);
  log(`    Generating TS types...`, false);

  const responses = await Promise.allSettled(
    versionData.resources.map(r =>
      getTypesForResource(versionData.versionName, r.resource.name, r.crd),
    ),
  );

  const successfulResources: string[] = [];

  for (let i = 0; i < responses.length; i++) {
    const resourceWithCRD = versionData.resources[i];
    const response = responses[i];

    if (response.status === 'rejected') {
      error(
        `      Could not generate types for resource ${resourceWithCRD.resource.name}: ${response.reason}`,
      );
      continue;
    }

    // Write individual resource type file
    await writeResourceTypes(
      groupName,
      versionData.versionName,
      resourceWithCRD.resource.name,
      response.value,
    );

    successfulResources.push(resourceWithCRD.resource.name);
  }

  log(` done.`);

  // Write version index
  log(`    Writing version index...`, false);
  await writeVersionIndex(
    groupName,
    versionData.versionName,
    successfulResources,
  );
  log(` done.`);
}

async function generateGroup(group: IGroupInfo): Promise<string[]> {
  try {
    log(`${group.group}:`);

    const resourcesWithCRDs = await fetchCRDs(group);

    if (resourcesWithCRDs.length === 0) {
      log(`  No CRDs fetched successfully, skipping group.`);
      return [];
    }

    // Organize resources by version
    const versionData = organizeByVersion(resourcesWithCRDs);

    log(`  Found ${versionData.length} version(s): ${versionData.map(v => v.versionName).join(', ')}`);

    // Generate types for each version
    for (const versionResources of versionData) {
      await generateTypesForVersion(group.group, versionResources);
    }

    // Write group index
    log(`  Writing group index...`, false);
    await writeGroupIndex(
      group.group,
      versionData.map(v => v.versionName),
    );
    log(` done.`);

    return versionData.map(v => v.versionName);
  } catch (err) {
    error((err as Error).toString());
    return [];
  }
}

async function main() {
  try {
    log('Reading resources list from config... ', false);
    const groups = await getResourcesList();
    log('done.');
    log('');

    const processedGroups: string[] = [];

    // Generate types for each group sequentially
    for (const group of groups) {
      const versions = await generateGroup(group);
      if (versions.length > 0) {
        processedGroups.push(group.group);
      }
      log('');
    }

    // Write main index
    log('Writing main index... ', false);
    await writeMainIndex(processedGroups);
    log('done.');
    log('');
    log('✅ Type generation completed successfully!');
  } catch (err) {
    error((err as Error).toString());
    process.exit(1);
  }
}

main();

