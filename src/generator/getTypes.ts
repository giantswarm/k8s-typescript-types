import type { JSONSchema } from 'json-schema-to-typescript';
import { compile } from 'json-schema-to-typescript';
import { merge } from 'lodash';

import { formatInterfaceName } from './templates';
import { ICRD } from './getCRD';

/**
 * Provide custom TS types for specified fields
 * @param config
 */
function getTsTypesConfig(config: {
  kind: string;
  apiVersion: string;
}): JSONSchema {
  return {
    properties: {
      apiVersion: {
        tsType: `'${config.apiVersion}'`,
      },
      metadata: {
        tsType: 'metav1.ObjectMeta',
      },
      kind: {
        tsType: `'${config.kind}'`,
      },
    },
    required: ['apiVersion', 'metadata', 'kind'],
  };
}

function getCRDSchemaForVersion(
  resourceVersion: string,
  resourceName: string,
  CRD: ICRD,
): JSONSchema {
  // try and get schema definition from CRD file contents
  const crdVersion = CRD.spec?.versions?.find(v => v?.name === resourceVersion);
  if (!crdVersion) {
    throw new Error(
      `Could not find schema version ${resourceVersion} for resource ${resourceName}`,
    );
  }

  // "With apiextensions.k8s.io/v1 the definition of a structural schema is mandatory for CustomResourceDefinitions."
  // https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#specifying-a-structural-schema
  const schema = crdVersion?.schema?.openAPIV3Schema;
  if (!schema) {
    throw new Error(
      `Resource ${resourceName} does not have an Open API v3 schema for version ${resourceVersion}`,
    );
  }

  return schema;
}

export async function getTypesForResource(
  version: string,
  resourceName: string,
  CRD: ICRD,
): Promise<string> {
  try {
    const schema = getCRDSchemaForVersion(version, resourceName, CRD);

    // Build full apiVersion as group/version
    const fullApiVersion = `${CRD.spec.group}/${version}`;

    const config = getTsTypesConfig({
      kind: resourceName,
      apiVersion: fullApiVersion,
    });

    const output = await compile(
      merge(schema, config),
      formatInterfaceName(resourceName),
      {
        additionalProperties: false,
        bannerComment: '',
        style: { singleQuote: true },
      },
    );

    return output;
  } catch (err) {
    throw err;
  }
}

