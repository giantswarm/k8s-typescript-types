# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- The README lists every published CRD API version in an "Available Types"
  table: import path, API group, kinds, whether the pinned CRD serves it, and
  the source repository and tag. `yarn generate` writes it, so CI's
  generated-output check keeps it current.

## [0.12.0] - 2026-10-07

**Breaking:** the CRD types now follow the versions deployed on Giant Swarm
management clusters instead of commits on upstream `main`. Fields that only
`main` had are removed, and a few fields are renamed or become required; see
Removed and Changed. Code that uses them no longer compiles.

### Added

- `capv.v1alpha3` and `capv.v1alpha4`, which the deployed CAPV release defines
  (as not served).
- `capi` Cluster, KubeadmControlPlane, MachineDeployment and MachinePool gain
  the `upgradePlan`/`versions` fields, and Machine gains
  `waitForPreDrainHookStartTime`/`waitForPreTerminateHookStartTime`.
- `capz` AzureCluster's private links gain `natIpConfigurations`.
- On Renovate pull requests that bump the generator's npm dependencies, the
  `Regenerate types` workflow pushes the regenerated types onto the branch.
  Those pull requests are no longer automerged.

### Changed

- CRD sources and the deployed versions they follow:
  - `capi`: Giant Swarm fork `v1.14.2-gs-df613140e` (was upstream v1.13.4).
  - `capa`: Giant Swarm fork `v2.11.1-gs-6d635ed37`.
  - `capz`: Giant Swarm fork `v1.27.0-gs-99647669a`.
  - `capv`: v1.15.3, plus v1.17.0 for `v1beta2`, which v1.15.3 does not serve.
  - `capvcd`: Giant Swarm fork commit `06f9f9c8`.
  - `crossplane`: provider-family-aws v1.21.0.
  - `giantswarm`: App and Catalog from apiextensions-application v0.6.2,
    Release from the releases SDK `sdk/v0.13.0` (same CRD as before).
- `capvcd.v1beta3.VCDCluster`: `spec.ovdc` and `spec.ovdcNetwork` are required,
  and a zone's `ovdc` is renamed to `ovdcName`.
- `capz.v1beta1.AzureCluster`: a security rule's `description` is required.
- Every CRD URL is pinned to the commit its release tag points to, with the tag
  in an inline comment, so a moved tag cannot change the generated types.
- The generator fails without writing anything when a CRD cannot be fetched or
  turned into types, instead of leaving that resource out of the generated
  indexes. Fetches time out after 30s and are retried on network errors, 429
  and 5xx. Groups are fetched in parallel, and a group without resources is a
  configuration error.
- `yarn generate` replaces `src/types/crds/`, so a type that is no longer
  generated is removed. `yarn clean` only removes `dist/`, and `yarn build`
  runs it first. `yarn regenerate` is `yarn generate && yarn build`.

### Removed

- `capa.v1beta2.AWSCluster`: the S3 bucket's `additionalIAMRoles`.
- `capa.v1beta2.AWSMachinePool` and `AWSManagedMachinePool`: `enclaveOptions`.
- `capa.v1beta2.AWSManagedControlPlane`: `podIdentityAssociations` and
  `controlPlaneScalingConfig`.
- `capa.v1beta1`/`v1beta2.AWSManagedControlPlane`: `status.observedGeneration`.
- `capv.v1beta1.VSphereMachine` and `VSphereMachineTemplate`: `cryptoKeyID`,
  `cryptoProfile`, `ftEncryptionMode`, `migrateEncryption` and `nestedHV`.
- `crossplane.v1beta1.ProviderConfig`: `reconciliationPolicy`.
- `giantswarm.v1alpha1.Catalog`: `status`. The Catalog CRD management clusters
  install (apiextensions-application v0.6.2) does not define it.

## [0.11.0] - 2026-10-06

### Added

- `capz.v1beta1.AzureASOManagedCluster` and `capz.v1beta1.AzureASOManagedMachinePool`
  (and their `capz.v1alpha1` versions), the CAPZ AKS kinds, from the same pinned
  `cluster-api-provider-azure` commit as the other `capz` types.

## [0.10.0] - 2026-10-06

### Added

- An `exports` map: `@giantswarm/k8s-types/crds/<group>/<version>` and
  `@giantswarm/k8s-types/core/...` are entry points, as the README's "Direct
  Imports" examples promise. A consumer smoke (`src/smoke/subpath-imports.ts`)
  type-checks those examples through the map.

### Changed

- Update tsx to v4.23.15 (giantswarm/k8s-typescript-types#95)
- `kagent.v1alpha3` types regenerated from the Giant Swarm kagent line's
  release `v1.2.5` (commit `6f23597f`), the line the Agent Platform runs, instead
  of the pinned commit `0ac52403`.
- A bounded array (`minItems`/`maxItems`) is generated as a plain array instead
  of a union of every tuple length up to its bound; the bound stays in the
  JSDoc. `kagent.v1alpha3.AgentTemplate` shrinks from 395 KB to 13 KB and
  `kagent.v1alpha2.Agent` from 1.5 MB to 0.5 MB; the affected types of
  `capa`, `capi`, `capv`, `capz`, `fluxoperator`, `giantswarm` and `kagent`
  accept any array length.
- Pinned the `capa`, `capv`, `capvcd`, `crossplane` and `giantswarm` CRD
  sources, which tracked upstream `main`, to the release or commit that
  reproduces the committed types, so `yarn regenerate` on a clean checkout
  produces no diff. The pins alone change no type.

## [0.9.0] - 2026-10-05

### Added

- `fluxoperator.v1` types for the Flux Operator (`fluxcd.controlplane.io`):
  `FluxInstance`, `FluxReport`, `ResourceSet` and `ResourceSetInputProvider`,
  generated from the CRDs of flux-operator `v0.60.0`, the release
  flux-operator-app deploys on Giant Swarm management clusters. A consumer
  smoke (`src/smoke/fluxoperator-v1.ts`) asserts the shapes the Dev Portal's
  Flux UI reads.

### Changed

- Update @types/node to v24.13.4 (giantswarm/k8s-typescript-types#90)
- Pinned the `capz` and `external-secrets` CRD sources, which tracked upstream
  `main`, to the commit and release that reproduce the committed types. Their
  upstream changes since then failed the generated-output check on every pull
  request. The types do not change.

## [0.8.0] - 2026-09-10

### Added

- `kagent.v1alpha3` types for the kagent API v2 the Agent Platform 4.x releases
  run: `AgentTemplate`, `Harness`, `RemoteMCPServer`, `ModelProviderConfig` and
  `ModelConfig`, spec and status, generated from the Giant Swarm kagent line
  (`giantswarm/kagent-upstream`) at its pinned commit `0ac52403` (upstream
  kagent `main` `4a91c273` plus the line's carried patches). `ModelConfig`
  keeps its `v1alpha1`/`v1alpha2` types from kagent v0.9.9 next to the new
  version through the `crdURLs` union; `Agent` stays at `v1alpha1`/`v1alpha2`.
- A consumer smoke (`yarn smoke`, run by `yarn build`): `src/smoke/` is
  type-checked against the built `dist/` declarations the way a consumer
  imports them, and asserts the shapes the Dev Portal reads
  (`AgentTemplate['status']['harnesses'][number]['conditions']`,
  `RemoteMCPServer['spec']['headersFrom']`, the `v1alpha2` types).

### Changed

- The README's install instructions now show how the package is actually
  consumed: from this repository's git tags
  (`github:giantswarm/k8s-typescript-types#v0.8.0`), not from npm.

## [0.7.1] - 2026-08-31

### Changed

- Dependency updates

## [0.7.0] - 2026-08-04

### Added

- Resources can now be generated from several CRD releases at once, via a new
  `crdURLs` list in the generator config (the existing single `crdURL` keeps
  working). Types are generated for the union of the API versions the listed
  CRDs serve; where several serve the same version, the last one listed wins.
- Flux types for the API versions that current releases no longer serve, so the
  library covers both the versions our clusters run today and the ones they will
  run after a Flux upgrade: `fluxcd.v1beta1` (`GitRepository`, `HelmRepository`,
  `Kustomization`, `ImagePolicy`, `ImageRepository`, `ImageUpdateAutomation`),
  `fluxcd.v2beta1` and `fluxcd.v2beta2` (`HelmRelease`), and
  `fluxcd.v1beta2.Kustomization`.

### Changed

- Every Flux CRD URL is now pinned, with one source per API version: the newest
  release that still serves it. `HelmRelease` and `Kustomization` were the last
  two tracking a controller's `main` branch, which is how 0.6.1 lost the
  `v1beta2` image types.
- The `fluxcd.v1` types for `GitRepository`, `OCIRepository`, `ImageRepository`
  and `ImageUpdateAutomation` now come from the newest controller releases
  (Flux 2.9.3), adding fields such as `GitRepository.spec.serviceAccountName`.

### Fixed

- A CRD URL that answers with a 404, or with something that is not a
  CustomResourceDefinition, is now reported as an error instead of silently
  dropping the resource from the generated types.
- Pinned the `capi` CRD URLs to cluster-api `v1.13.4`. They pointed at
  `main`, where the CRDs have since moved to `core/config/crd/bases/`
  ([cluster-api#13894](https://github.com/kubernetes-sigs/cluster-api/pull/13894)),
  so all five URLs answered with a 404 and a regeneration would have dropped the
  `Cluster`, `Machine`, `MachineDeployment` and `MachinePool` types. No release
  shipped without them, because nothing has regenerated since 0.6.1.

## [0.6.3] - 2026-08-04

### Fixed

- Restored the `image.toolkit.fluxcd.io/v1beta2` types for `ImagePolicy`,
  `ImageRepository` and `ImageUpdateAutomation`, which 0.6.1 dropped. Their CRD
  URLs pointed at the controllers' `main` branch, where `v1beta2` has already
  been removed, while the Flux versions in use still serve it. The three URLs
  are now pinned to `v1.1.0`, the last release serving both `v1beta2` and `v1`.

## [0.6.2] - 2026-07-28

### Changed

- Dependency updates

## [0.6.1] - 2026-07-08

### Changed

- Regenerated all CRD types from the latest upstream sources.

## [0.6.0] - 2026-07-08

### Added

- Added `kagent` types (`Agent` and `ModelConfig`, versions `v1alpha1` and `v1alpha2`), generated from the kagent CRDs pinned to `v0.9.9` — the version deployed by the `agentic-platform` chart on Giant Swarm management clusters. `v1alpha2` is the storage version.

### Removed

- Removed the Kratix-derived `AppDeployment`, `GitHubApp`, and `GitHubRepo` types (generated from the `dev-platform-kratix-promises` Promises) as part of the org-wide Kratix removal.

## [0.5.0] - 2026-03-24

### Changed

- Update Typescript to v6

## [0.4.0] - 2026-02-24

### Changed

- Pinned Flux CD source-controller CRD URLs to v1.7.4 instead of main branch

## [0.3.0] - 2026-02-23

### Added

- Added NodePool types

## [0.2.0] - 2026-02-05

### Added

- Added Flux CD types for ImageRepository, ImagePolicy, and ImageUpdateAutomation

## [0.1.1] - 2026-01-28

### Changed

- Update types.

## [0.1.0] - 2025-10-28

### Added

- Added initial generator code.
- Added core and auto generated types.

[Unreleased]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.12.0...HEAD
[0.12.0]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.7.1...v0.8.0
[0.7.1]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.6.3...v0.7.0
[0.6.3]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.6.2...v0.6.3
[0.6.2]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/giantswarm/k8s-typescript-types/releases/tag/v0.1.0
