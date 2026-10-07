import fs from 'fs/promises';
import path from 'path';
import { ICRDSource, parseSourceURL } from './getResourcesList';
import { toCamelCase } from './templates';
import { IGeneratedGroup, IGeneratedResource } from './types';

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
  return a < b ? -1 : a > b ? 1 : 0;
}

function formatSource(source: ICRDSource): string {
  const { repo, sha } = parseSourceURL(source.url);
  const ref = source.tag ?? sha.slice(0, 7);
  return `[${repo}](https://github.com/${repo}/tree/${sha}) \`${ref}\``;
}

function formatServed(resources: IGeneratedResource[]): string {
  const unserved = resources.filter(r => !r.served).map(r => r.kind);
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

function formatTable(groups: IGeneratedGroup[]): string {
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
        .map(r => r.kind)
        .sort()
        .join('<br>');
      const sources = distinct(resources.map(r => formatSource(r.source)))
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
 * Returns README.md with the overview of the generated types written between
 * the markers, which must already be there. Nothing is written yet, so a
 * README without markers fails the run before any types are replaced.
 */
export async function renderReadme(groups: IGeneratedGroup[]): Promise<string> {
  const readme = await fs.readFile(readmePath, 'utf8');
  const start = readme.indexOf(startMarker);
  const end = readme.indexOf(endMarker);
  if (start === -1 || end < start) {
    throw new Error(
      `README.md has no ${startMarker} ... ${endMarker} section to write the overview into.`,
    );
  }

  return (
    readme.slice(0, start + startMarker.length) +
    '\n<!-- Written by `yarn generate`, do not edit by hand. -->\n\n' +
    formatTable(groups) +
    '\n\n' +
    readme.slice(end)
  );
}

export async function writeReadme(contents: string): Promise<void> {
  await fs.writeFile(readmePath, contents);
}
