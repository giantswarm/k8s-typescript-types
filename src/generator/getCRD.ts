import yaml from 'js-yaml';
import fetch from 'node-fetch';
import type { JSONSchema } from 'json-schema-to-typescript';

/**
 * Partial interface of CustomResourceDefinition
 */
interface ICRDPartial {
  kind: 'CustomResourceDefinition';
  spec: {
    group: string;
    versions: { name: string; schema: { openAPIV3Schema: JSONSchema } }[];
    names: { kind: string; listKind: string; plural: string; singular: string };
    scope: 'Namespaced' | 'Cluster';
  };
}

export interface ICRD extends ICRDPartial {}

export async function fetchCRD(URL: string): Promise<ICRD> {
  const response = await fetch(URL);
  const data = await response.text();
  const parsedData = yaml.load(data) as ICRD;

  return parsedData;
}
