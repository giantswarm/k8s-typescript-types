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
    versions: {
      name: string;
      served?: boolean;
      schema: { openAPIV3Schema: JSONSchema };
    }[];
    names: { kind: string; listKind: string; plural: string; singular: string };
    scope: 'Namespaced' | 'Cluster';
  };
}

export interface ICRD extends ICRDPartial {}

const FETCH_ATTEMPTS = 4;
const FETCH_TIMEOUT_MS = 30_000;

/**
 * GETs a URL and returns the body. Network errors, timeouts, 429 and 5xx are
 * retried with exponential backoff (1s, 2s, 4s): a run fetches about 70 files
 * from raw.githubusercontent.com, and one transient failure fails the run.
 */
async function fetchText(URL: string): Promise<string> {
  for (let attempt = 1; ; attempt++) {
    const isLastAttempt = attempt === FETCH_ATTEMPTS;
    const backoff = () =>
      new Promise(resolve => setTimeout(resolve, 1000 * 2 ** (attempt - 1)));

    let response;
    try {
      response = await fetch(URL, {
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
      if (response.ok) {
        return await response.text();
      }
    } catch (err) {
      if (isLastAttempt) {
        throw err;
      }
      await backoff();
      continue;
    }

    // A moved or renamed CRD path answers with a 404 page, which parses as a
    // plain string and yields no versions. Without this check the resource is
    // silently dropped from the generated types instead of reported as an error.
    // Read the body so its connection is released before the retry.
    await response.arrayBuffer().catch(() => {});

    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || isLastAttempt) {
      throw new Error(`GET ${URL} returned ${response.status}`);
    }
    await backoff();
  }
}

export async function fetchCRD(URL: string): Promise<ICRD> {
  const data = await fetchText(URL);
  const parsedData = yaml.load(data) as ICRD;

  if (parsedData?.kind !== 'CustomResourceDefinition') {
    throw new Error(`${URL} is not a CustomResourceDefinition`);
  }

  if (!parsedData.spec?.versions?.length) {
    throw new Error(`${URL} declares no versions`);
  }

  return parsedData;
}
