import fs from 'fs/promises';
import path from 'path';
import {
  formatGeneratedFileExport,
  formatFileHeader,
  formatTypesFileHeader,
  toCamelCase,
} from './templates';

const outputDirectory = path.resolve(__dirname, '..', 'types', 'crds');

// Everything is written here first and moved into place by commitOutput(), so
// a failed or interrupted run leaves the committed types as they were. It sits
// outside src/types so that a leftover copy is never compiled.
const baseDirectory = path.resolve(__dirname, '..', '..', '.crds-staging');

export async function prepareOutput(): Promise<void> {
  await fs.rm(baseDirectory, { recursive: true, force: true });
  await fs.mkdir(baseDirectory, { recursive: true });
}

/**
 * Replaces src/types/crds with what was written, so a version or resource that
 * is no longer generated disappears instead of staying behind as a stale file.
 */
export async function commitOutput(): Promise<void> {
  await fs.rm(outputDirectory, { recursive: true, force: true });
  await fs.rename(baseDirectory, outputDirectory);
}

function getDirPath(pathSegments: string[]) {
  return path.resolve(baseDirectory, ...pathSegments);
}

export async function ensureFolder(pathSegments: string[]): Promise<string> {
  const dirPath = getDirPath(pathSegments);

  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch {
    return dirPath;
  }

  return dirPath;
}

export async function writeResourceTypes(
  groupName: string,
  versionName: string,
  resourceName: string,
  data: string,
) {
  const versionDirPath = await ensureFolder([groupName, versionName]);
  const header = formatTypesFileHeader();

  return fs.writeFile(
    path.resolve(versionDirPath, `${resourceName}.ts`),
    header + data,
  );
}

export async function writeVersionIndex(
  groupName: string,
  versionName: string,
  resourceNames: string[],
) {
  const versionDirPath = getDirPath([groupName, versionName]);
  const header = formatFileHeader();
  let fileContents = '';

  // Export each resource type
  for (const resourceName of resourceNames) {
    fileContents += formatGeneratedFileExport(resourceName);
  }

  await fs.writeFile(
    path.resolve(versionDirPath, 'index.ts'),
    header + fileContents,
  );
}

export async function writeGroupIndex(
  groupName: string,
  versionNames: string[],
) {
  const groupDirPath = getDirPath([groupName]);
  const header = formatFileHeader();
  let fileContents = '';

  // Export each version
  for (const versionName of versionNames) {
    fileContents += `export * as ${versionName} from './${versionName}';\n`;
  }

  await fs.writeFile(
    path.resolve(groupDirPath, 'index.ts'),
    header + fileContents,
  );
}

export async function writeMainIndex(groupNames: string[]) {
  const mainIndexPath = path.resolve(baseDirectory, 'index.ts');
  const header = formatFileHeader();
  let fileContents = '';

  // Export each group with camelCase export names
  for (const groupName of groupNames) {
    const exportName = toCamelCase(groupName);
    fileContents += `export * as ${exportName} from './${groupName}';\n`;
  }

  await fs.writeFile(mainIndexPath, header + fileContents);
}

