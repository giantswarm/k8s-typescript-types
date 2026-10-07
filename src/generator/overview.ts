import fs from 'fs/promises';
import path from 'path';
import { getSourceTags } from './getResourcesList';
import { toCamelCase } from './templates';

export interface IGeneratedResource {
  name: string;
  types: string;
  /** API group of the CRD, e.g. `cluster.x-k8s.io`. */
  apiGroup: string;
  /** Whether the CRD the types come from serves this version. */
  served: boolean;
  /** URL of the CRD the types come from. */
  url: string;
}

export interface IGeneratedVersion {
  versionName: string;
  resources: IGeneratedResource[];
}

export interface IGeneratedGroup {
  group: string;
  versions: IGeneratedVersion[];
}

const readmePath = path.resolve(__dirname, '..', '..', 'README.md');
const startMarker = '<!-- generated:types-overview:start -->';
const endMarker = '<!-- generated:types-overview:end -->';

/**
 * Sorts API versions the way Kubernetes ranks them: GA before beta before
 * alpha, and within each, the higher major and then minor version first.
 */
function compareVersions(a: string, b: string): number {
  const rank = (version: string): number[] => {
    const match = /^v(\d+)(?:(alpha|beta)(\d+))?$/.exec(version);
    if (!match) {
      return [-1, 0, 0];
    }
    const stage = match[2] === 'alpha' ? 0 : match[2] === 'beta' ? 1 : 2;
    return [stage, Number(match[1]), Number(match[3] ?? 0)];
  };
  const [ra, rb] = [rank(a), rank(b)];
  for (let i = 0; i < ra.length; i++) {
    if (ra[i] !== rb[i]) {
      return rb[i] - ra[i];
    }
  }
  return a.localeCompare(b);
}

function formatSource(url: string, tags: Map<string, string>): string {
  const match =
    /^https:\/\/raw\.githubusercontent\.com\/([^/]+\/[^/]+)\/([0-9a-f]{40})\//.exec(
      url,
    );
  if (!match) {
    return url;
  }
  const [, repo, sha] = match;
  const ref = tags.get(url) ?? sha.slice(0, 7);
  return `[${repo}](https://github.com/${repo}/tree/${sha}) \`${ref}\``;
}

function formatServed(resources: IGeneratedResource[]): string {
  const unserved = resources.filter(r => !r.served).map(r => r.name);
  if (unserved.length === 0) {
    return 'yes';
  }
  if (unserved.length === resources.length) {
    return '**no**';
  }
  return `**partly**, not ${unserved.sort().join(', ')}`;
}

function distinct(values: string[]): string[] {
  return Array.from(new Set(values));
}

function formatTable(
  groups: IGeneratedGroup[],
  tags: Map<string, string>,
): string {
  const lines = [
    '| Import | API group | Kinds | Served | Source |',
    '|---|---|---|---|---|',
  ];

  for (const group of groups) {
    const versions = [...group.versions].sort((a, b) =>
      compareVersions(a.versionName, b.versionName),
    );

    for (const version of versions) {
      const { resources } = version;
      const importPath = `crds.${toCamelCase(group.group)}.${version.versionName}`;
      const apiGroups = distinct(resources.map(r => r.apiGroup))
        .sort()
        .map(g => `\`${g}\``)
        .join('<br>');
      const kinds = resources
        .map(r => r.name)
        .sort()
        .join('<br>');
      const sources = distinct(resources.map(r => formatSource(r.url, tags)))
        .sort()
        .join('<br>');

      lines.push(
        `| \`${importPath}\` | ${apiGroups} | ${kinds} | ${formatServed(resources)} | ${sources} |`,
      );
    }
  }

  return lines.join('\n');
}

/**
 * Rewrites the overview of the generated types between the markers in
 * README.md. The markers must already be there.
 */
export async function writeOverview(groups: IGeneratedGroup[]): Promise<void> {
  const readme = await fs.readFile(readmePath, 'utf8');
  const start = readme.indexOf(startMarker);
  const end = readme.indexOf(endMarker);
  if (start === -1 || end < start) {
    throw new Error(
      `README.md has no ${startMarker} ... ${endMarker} section to write the overview into.`,
    );
  }

  const table = formatTable(groups, await getSourceTags());
  const updated =
    readme.slice(0, start + startMarker.length) +
    '\n<!-- Written by `yarn generate`, do not edit by hand. -->\n\n' +
    table +
    '\n\n' +
    readme.slice(end);

  await fs.writeFile(readmePath, updated);
}
