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

  // A moved or renamed CRD path answers with a 404 page, which parses as a
  // plain string and yields no versions. Without this check the resource is
  // silently dropped from the generated types instead of reported as an error.
  if (!response.ok) {
    throw new Error(`GET ${URL} returned ${response.status}`);
  }

  const data = await response.text();
  const parsedData = yaml.load(data) as ICRD;

  if (parsedData?.kind !== 'CustomResourceDefinition') {
    throw new Error(`${URL} is not a CustomResourceDefinition`);
  }

  if (!parsedData.spec?.versions?.length) {
    throw new Error(`${URL} declares no versions`);
  }

  return parsedData;
}
