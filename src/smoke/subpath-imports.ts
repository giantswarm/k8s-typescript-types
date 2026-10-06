/**
 * Consumer smoke for the package's subpath imports (`exports` in package.json).
 *
 * The README's "Direct Imports" examples, type-checked against the built
 * `dist/` declarations through the package's own `exports` map (a self-reference,
 * resolved as a consumer with `node16` or `bundler` module resolution resolves
 * it), so an entry point the README promises cannot go missing unnoticed.
 */
import type { Cluster } from '@giantswarm/k8s-types/crds/capi/v1beta1';
import type { HelmRelease } from '@giantswarm/k8s-types/crds/fluxcd/v2';
import type { ObjectMeta } from '@giantswarm/k8s-types/core/meta/v1';
import type { crds } from '@giantswarm/k8s-types';

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
type Expect<T extends true> = T;

// A subpath import is the same type as its path through the root namespace.
export type ClusterIsRootType = Expect<
  Equal<Cluster, crds.capi.v1beta1.Cluster>
>;
export type HelmReleaseIsRootType = Expect<
  Equal<HelmRelease, crds.fluxcd.v2.HelmRelease>
>;

export const metadata: ObjectMeta = { name: 'my-cluster', namespace: 'default' };
