import { ICRDSource } from './getResourcesList';

export interface IGeneratedResource {
  /** Name of the generated TypeScript interface, from the config. */
  name: string;
  /** Kind of the CRD, from its `spec.names.kind`. */
  kind: string;
  types: string;
  /** API group of the CRD, e.g. `cluster.x-k8s.io`. */
  apiGroup: string;
  /** Whether the CRD the types come from serves this version. */
  served: boolean;
  /** The CRD the types come from. */
  source: ICRDSource;
}

export interface IGeneratedVersion {
  versionName: string;
  resources: IGeneratedResource[];
}

export interface IGeneratedGroup {
  group: string;
  versions: IGeneratedVersion[];
}
