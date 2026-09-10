/**
 * Consumer smoke for the kagent API v2 types (`crds.kagent.v1alpha3`).
 *
 * `yarn smoke` type-checks this file against the built `dist/` declarations,
 * resolved the way a consumer resolves `@giantswarm/k8s-types` (see
 * `tsconfig.smoke.json`). It asserts the shapes the Dev Portal's
 * kubernetes-react plugin reads, so a regeneration that drops or reshapes them
 * fails the build here instead of in the consumer. Nothing here is emitted.
 */
import type { crds } from '@giantswarm/k8s-types';

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
type Expect<T extends true> = T;

// On API v2 an agent is an AgentTemplate admitted by a Harness. Readiness lives
// in AgentTemplate.status.harnesses[], keyed by harness and carrying
// metav1-style conditions; Harness.status is never written.
export type AgentTemplate = crds.kagent.v1alpha3.AgentTemplate;
export type HarnessStatus = NonNullable<
  NonNullable<AgentTemplate['status']>['harnesses']
>[number];
export type HarnessCondition = NonNullable<HarnessStatus['conditions']>[number];

export const readyCondition: HarnessCondition = {
  type: 'Ready',
  status: 'True',
  reason: 'Ready',
  message: '',
  lastTransitionTime: '2026-01-01T00:00:00Z',
};

export const harnessStatus: HarnessStatus = {
  harness: 'kagent',
  desiredRevision: 'agenttemplate-1',
  latestSuccessfulRevision: 'agenttemplate-1',
  conditions: [readyCondition],
  warnings: [],
};

export type _agentTemplateIdentity = Expect<
  Equal<
    [AgentTemplate['apiVersion'], AgentTemplate['kind']],
    ['kagent.dev/v1alpha3', 'AgentTemplate']
  >
>;

// Tools are RemoteMCPServer bindings; the toolset is selected through a header
// the portal reads from spec.headersFrom (a literal value or a Secret/ConfigMap
// reference).
export type RemoteMCPServer = crds.kagent.v1alpha3.RemoteMCPServer;
export type HeaderFrom = NonNullable<
  NonNullable<RemoteMCPServer['spec']>['headersFrom']
>[number];

export const toolsetHeader: HeaderFrom = {
  name: 'X-Muster-Toolset',
  value: 'my-agent',
};

export const secretHeader: HeaderFrom = {
  name: 'Authorization',
  valueFrom: { type: 'Secret', name: 'my-agent-token', key: 'token' },
};

export type _remoteMcpServerProtocol = Expect<
  Equal<
    NonNullable<NonNullable<RemoteMCPServer['spec']>['protocol']>,
    'SSE' | 'STREAMABLE_HTTP'
  >
>;

// The remaining v1alpha3 kinds exist with spec and status.
export type _v1alpha3Kinds = Expect<
  Equal<
    | crds.kagent.v1alpha3.Harness['kind']
    | crds.kagent.v1alpha3.ModelProviderConfig['kind']
    | crds.kagent.v1alpha3.ModelConfig['kind'],
    'Harness' | 'ModelProviderConfig' | 'ModelConfig'
  >
>;
export type _v1alpha3Status = [
  NonNullable<crds.kagent.v1alpha3.Harness['status']>,
  NonNullable<crds.kagent.v1alpha3.ModelProviderConfig['status']>,
  NonNullable<crds.kagent.v1alpha3.ModelConfig['status']>,
];

// The v1alpha1/v1alpha2 types stay for the consumers of the 3.x platform.
export type _v1alpha2Identity = Expect<
  Equal<
    | crds.kagent.v1alpha2.Agent['apiVersion']
    | crds.kagent.v1alpha2.ModelConfig['apiVersion'],
    'kagent.dev/v1alpha2'
  >
>;
export type _v1alpha1Identity = Expect<
  Equal<
    | crds.kagent.v1alpha1.Agent['apiVersion']
    | crds.kagent.v1alpha1.ModelConfig['apiVersion'],
    'kagent.dev/v1alpha1'
  >
>;
