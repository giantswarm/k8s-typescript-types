import yaml from 'js-yaml';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve(__dirname, 'config', 'resources.yaml');

export interface ICRDSource {
  /**
   * url is the raw.githubusercontent.com URL of the CRD's .yaml file, pinned
   * to a commit SHA.
   */
  url: string;
  /**
   * tag is the release tag that points to the commit, shown in the README.
   * Leave it out only for a commit no tag points to.
   */
  tag?: string;
}

export interface IResourceInfo {
  /**
   * name of the resource - this will be used as the name
   * for the generated TS interface.
   * Important: this should be given in PascalCase, e.g. `MachinePool`.
   */
  name: string;
  /**
   * crdURL is the URL at which the .yaml file of the CRD can be found, pinned
   * to a commit SHA. Mutually exclusive with `crdURLs`.
   */
  crdURL?: string;
  /**
   * tag is the release tag `crdURL` is pinned to. Only used with `crdURL`.
   */
  tag?: string;
  /**
   * crdURLs lists several sources of the same CRD, to generate types for the
   * union of the API versions they define. Use this when no single CRD release
   * serves every version we need to support: an older release for the
   * versions our clusters run today, a newer one for the versions they will
   * run after an upgrade.
   *
   * When the same version is defined by more than one CRD, the last entry
   * wins. Usually that means oldest first, so the newest schema is generated.
   * To follow a deployed release for every version it defines and take only
   * the missing versions from a newer one, list the deployed release last
   * (see capv in resources.yaml).
   *
   * Mutually exclusive with `crdURL`.
   */
  crdURLs?: ICRDSource[];
  /**
   * excludeVersions lists API versions the CRDs define that are not
   * published, e.g. `[v1alpha3, v1alpha4]`. Each one must be defined by one of
   * the resource's CRDs; once none defines it any more, generation fails until
   * the entry is removed. See "Removing unused types" in the README.
   */
  excludeVersions?: string[];
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

const sourceURLPattern =
  /^https:\/\/raw\.githubusercontent\.com\/([^/]+\/[^/]+)\/([0-9a-f]{40})\/\S+\.ya?ml$/;

/**
 * Splits a CRD source URL into the GitHub repository and the commit SHA.
 */
export function parseSourceURL(url: string): { repo: string; sha: string } {
  const match = sourceURLPattern.exec(url);
  if (!match) {
    throw new Error(
      `${url} is not a raw.githubusercontent.com URL of a .yaml file pinned to a commit SHA.`,
    );
  }
  return { repo: match[1], sha: match[2] };
}

function validateSource(name: string, source: ICRDSource): ICRDSource {
  if (typeof source?.url !== 'string') {
    throw new Error(`Resource ${name} has a CRD source without a url.`);
  }
  if (source.tag !== undefined && typeof source.tag !== 'string') {
    throw new Error(`Resource ${name} has a non-string tag for ${source.url}.`);
  }
  parseSourceURL(source.url);
  return source;
}

/**
 * Returns the CRD sources configured for a resource, in configured order.
 */
export function getResourceSources(resource: IResourceInfo): ICRDSource[] {
  const { name, crdURL, tag, crdURLs } = resource;

  if (crdURL && crdURLs) {
    throw new Error(
      `Resource ${name} sets both crdURL and crdURLs, please use only one of them.`,
    );
  }

  if (crdURLs) {
    if (crdURLs.length === 0) {
      throw new Error(`Resource ${name} has an empty crdURLs list.`);
    }
    if (tag !== undefined) {
      throw new Error(
        `Resource ${name} sets tag next to crdURLs; set it on each crdURLs entry instead.`,
      );
    }

    return crdURLs.map(source => validateSource(name, source));
  }

  if (!crdURL) {
    throw new Error(`Resource ${name} has neither crdURL nor crdURLs set.`);
  }

  return [validateSource(name, { url: crdURL, tag })];
}

export async function getResourcesList(): Promise<IGroupInfo[]> {
  const contents = await fs.readFile(filePath);
  const data = yaml.load(contents.toString()) as IGroupInfo[];

  // Fail on a malformed config before anything gets generated from it.
  for (const group of data) {
    if (!group.resources?.length) {
      throw new Error(`Group ${group.group} has no resources.`);
    }

    for (const resource of group.resources) {
      getResourceSources(resource);

      const { name, excludeVersions } = resource;
      if (excludeVersions !== undefined) {
        if (
          !Array.isArray(excludeVersions) ||
          excludeVersions.length === 0 ||
          excludeVersions.some(v => typeof v !== 'string') ||
          new Set(excludeVersions).size !== excludeVersions.length
        ) {
          throw new Error(
            `Resource ${name} has an invalid excludeVersions: it must be a non-empty list of distinct version names.`,
          );
        }
      }
    }
  }

  return data;
}
