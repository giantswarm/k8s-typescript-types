import yaml from 'js-yaml';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve(__dirname, 'config', 'resources.yaml');

export interface IResourceInfo {
  /**
   * name of the resource - this will be used as the name
   * for the generated TS interface.
   * Important: this should be given in PascalCase, e.g. `MachinePool`.
   */
  name: string;
  /**
   * crdURL is the URL at which the .yaml file of the CRD can be found.
   * Mutually exclusive with `crdURLs`.
   */
  crdURL?: string;
  /**
   * crdURLs lists several URLs of the same CRD, to generate types for the
   * union of the API versions they serve. Use this when no single CRD release
   * still serves every version we need to support: an older release for the
   * versions our clusters run today, a newer one for the versions they will
   * run after an upgrade.
   *
   * Order the list oldest first: when the same version appears in more than
   * one CRD, the last entry wins, so the newest schema is the one generated.
   *
   * Mutually exclusive with `crdURL`.
   */
  crdURLs?: string[];
}

export interface IGroupInfo {
  /**
   * group is the folder name for the api group, e.g. `capi`, `capa`.
   */
  group: string;
  /**
   * resources specifies a list of resources for this API group.
   */
  resources: IResourceInfo[];
}

/**
 * Returns the CRD URLs configured for a resource, oldest first.
 */
export function getResourceURLs(resource: IResourceInfo): string[] {
  const { name, crdURL, crdURLs } = resource;

  if (crdURL && crdURLs) {
    throw new Error(
      `Resource ${name} sets both crdURL and crdURLs, please use only one of them.`,
    );
  }

  if (crdURLs) {
    if (crdURLs.length === 0) {
      throw new Error(`Resource ${name} has an empty crdURLs list.`);
    }

    return crdURLs;
  }

  if (!crdURL) {
    throw new Error(`Resource ${name} has neither crdURL nor crdURLs set.`);
  }

  return [crdURL];
}

export async function getResourcesList(): Promise<IGroupInfo[]> {
  const contents = await fs.readFile(filePath);
  const data = yaml.load(contents.toString()) as IGroupInfo[];

  // Fail on a malformed config before anything gets generated from it.
  for (const group of data) {
    for (const resource of group.resources) {
      getResourceURLs(resource);
    }
  }

  return data;
}

