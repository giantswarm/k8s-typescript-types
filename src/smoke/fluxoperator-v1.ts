/**
 * Consumer smoke for the Flux Operator types (`crds.fluxoperator.v1`).
 *
 * `yarn smoke` type-checks this file against the built `dist/` declarations,
 * resolved the way a consumer resolves `@giantswarm/k8s-types` (see
 * `tsconfig.smoke.json`). It asserts the shapes the Dev Portal's Flux UI reads,
 * so a regeneration that drops or reshapes them fails the build here instead
 * of in the consumer. Nothing here is emitted.
 */
import type { crds } from '@giantswarm/k8s-types';

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
type Expect<T extends true> = T;

export type _kinds = Expect<
  Equal<
    | crds.fluxoperator.v1.FluxInstance['kind']
    | crds.fluxoperator.v1.FluxReport['kind']
    | crds.fluxoperator.v1.ResourceSet['kind']
    | crds.fluxoperator.v1.ResourceSetInputProvider['kind'],
    'FluxInstance' | 'FluxReport' | 'ResourceSet' | 'ResourceSetInputProvider'
  >
>;

// FluxInstance and ResourceSet publish an inventory in the same format as a
// Kustomization, which the portal's tree view descends into.
export type ResourceSetStatus = NonNullable<
  crds.fluxoperator.v1.ResourceSet['status']
>;
export type FluxInstanceStatus = NonNullable<
  crds.fluxoperator.v1.FluxInstance['status']
>;

export const inventory: NonNullable<ResourceSetStatus['inventory']> &
  NonNullable<FluxInstanceStatus['inventory']> = {
  entries: [{ id: 'default_podinfo_helm.toolkit.fluxcd.io_HelmRelease', v: 'v2' }],
};

export const lastReconciliation: NonNullable<
  ResourceSetStatus['history']
>[number] &
  NonNullable<FluxInstanceStatus['history']>[number] = {
  digest: 'sha256:0000',
  firstReconciled: '2026-01-01T00:00:00Z',
  lastReconciled: '2026-01-01T00:00:00Z',
  lastReconciledDuration: '1.2s',
  lastReconciledStatus: 'ReconciliationSucceeded',
  totalReconciliations: 1,
};

// A ResourceSet names its input providers either directly or by label
// selector.
export const inputsFrom: NonNullable<
  NonNullable<crds.fluxoperator.v1.ResourceSet['spec']>['inputsFrom']
> = [
  { kind: 'ResourceSetInputProvider', name: 'branches' },
  { kind: 'ResourceSetInputProvider', selector: { matchLabels: { a: 'b' } } },
];

export type _instanceVersion = Expect<
  Equal<
    NonNullable<
      crds.fluxoperator.v1.FluxInstance['spec']
    >['distribution']['version'],
    string
  >
>;

export const reconciler: NonNullable<
  NonNullable<crds.fluxoperator.v1.FluxReport['spec']>['reconcilers']
>[number] = {
  apiVersion: 'kustomize.toolkit.fluxcd.io/v1',
  kind: 'Kustomization',
  stats: { running: 1, failing: 0, suspended: 0 },
};

// The schema leaves input values free-form, so the portal only counts them.
export const exportedInputCount = (
  provider: crds.fluxoperator.v1.ResourceSetInputProvider,
): number => provider.status?.exportedInputs?.length ?? 0;
