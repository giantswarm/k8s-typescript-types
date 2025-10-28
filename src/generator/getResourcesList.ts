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
   */
  crdURL: string;
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

export async function getResourcesList(): Promise<IGroupInfo[]> {
  const contents = await fs.readFile(filePath);
  const data = yaml.load(contents.toString()) as IGroupInfo[];

  return data;
}

