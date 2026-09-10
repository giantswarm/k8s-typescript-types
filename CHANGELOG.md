# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/giantswarm/k8s-typescript-types/compare/v0.8.0...HEAD
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
