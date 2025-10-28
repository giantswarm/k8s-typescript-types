import fs from 'fs/promises';
import path from 'path';
import {
  formatGeneratedFileExport,
  formatFileHeader,
  formatTypesFileHeader,
  toCamelCase,
} from './templates';

const baseDirectory = path.resolve(__dirname, '..', 'types', 'crds');

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

