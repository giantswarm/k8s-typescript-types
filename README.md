# @giantswarm/k8s-types

TypeScript type definitions for Kubernetes core objects and custom resource definitions (CRDs).

## Installation

The package is not published on npm. It is consumed straight from this
repository's release tags; `dist/` is committed, so nothing is built on install.

```bash
yarn add @giantswarm/k8s-types@github:giantswarm/k8s-typescript-types#v0.10.0
```

Or pin the tag in `package.json` directly:

```json
"dependencies": {
  "@giantswarm/k8s-types": "github:giantswarm/k8s-typescript-types#v0.10.0"
}
```

Move the tag to pick up a new release; see the [CHANGELOG](CHANGELOG.md) for
what each one adds.

## Usage

```typescript
import { crds } from '@giantswarm/k8s-types';

// Access types by group and version
const cluster: crds.capi.v1beta1.Cluster = {
  apiVersion: 'cluster.x-k8s.io/v1beta1',
  kind: 'Cluster',
  metadata: {
    name: 'my-cluster',
    namespace: 'default'
  },
  spec: {
    // ... cluster spec
  }
};

const helmRelease: crds.fluxcd.v2.HelmRelease = {
  apiVersion: 'helm.toolkit.fluxcd.io/v2',
  kind: 'HelmRelease',
  metadata: {
    name: 'my-release',
    namespace: 'default'
  },
  spec: {
    // ... helm release spec
  }
};
```

### Direct Imports

Every API group version and the core types are also entry points of their own
(the `exports` map in `package.json`); a consumer resolves them with TypeScript's
`node16`, `nodenext` or `bundler` module resolution:

```typescript
// Import specific types directly
import { Cluster } from '@giantswarm/k8s-types/crds/capi/v1beta1';
import { HelmRelease } from '@giantswarm/k8s-types/crds/fluxcd/v2';
import { ObjectMeta } from '@giantswarm/k8s-types/core/meta/v1';
```

## Development

### Generate Types

To regenerate CRD types from upstream sources:

```bash
yarn generate
```

This will:
1. Read the resource configuration from `src/generator/config/resources.yaml`
2. Fetch CRD definitions from remote URLs
3. Auto-discover all available versions
4. Generate TypeScript interfaces
5. Create organized output in `src/types/crds/`

If any CRD cannot be fetched or turned into types, the generator reports it and
exits non-zero instead of leaving that resource out.

### Build

```bash
yarn build
```

This compiles `src/types` into `dist/` and then runs the consumer smoke
(`yarn smoke`): `src/smoke/` is type-checked against the built `dist/`
declarations exactly as a consumer would import them, so a regeneration that
drops or reshapes a type consumers depend on fails the build instead of
shipping. Nothing under `src/smoke/` is emitted.

### Clean Generated Types

```bash
yarn clean
```

### Regenerate and Build

```bash
yarn regenerate
```

## Adding New CRDs

To add new CRD types:

1. Edit `src/generator/config/resources.yaml`
2. Add your resource definition:

```yaml
- group: my_group
  resources:
    - name: MyResource
      crdURL: https://raw.githubusercontent.com/example/repo/refs/tags/v1.2.3/config/crd/my-resource.yaml
```

3. Run `yarn generate`

The generator will automatically discover all versions from the CRD and generate types for each.

### Pinning CRD sources

Pin every `crdURL` to a release tag (`refs/tags/<tag>`), never a branch such as
`main`. A branch is ahead of what any cluster serves, and a change upstream
fails CI's generated-output check on every pull request. Pin to the version
deployed on Giant Swarm management clusters, and name what it follows (the app
and its version) in a comment. Pin to a commit only where no tag matches the
deployed version.

Pins are bumped by hand, in step with the app they follow: change the URLs,
run `yarn regenerate` and commit the result, so the pull request's diff shows
every field and API version the bump adds or removes. Renovate does not manage
them, because upstream releases run ahead of what management clusters deploy.

Renovate does bump the generator's npm dependencies, which can change the
emitted types too. On those pull requests the `Regenerate types` workflow
pushes the regenerated types onto the branch, and they are never automerged.

### Covering several API versions

When no single CRD release serves every API version you need, list one release
per version under `crdURLs` instead:

```yaml
- group: my_group
  resources:
    - name: MyResource
      crdURLs:
        # v1beta1
        - https://raw.githubusercontent.com/example/repo/refs/tags/v1.0.0/config/crd/my-resource.yaml
        # v1
        - https://raw.githubusercontent.com/example/repo/refs/tags/v2.0.0/config/crd/my-resource.yaml
```

Types are generated for the union of the versions the listed CRDs define,
whether or not a CRD marks a version as served. List them oldest first: where
several CRDs define the same version, the last one wins, so the newest schema
is the one generated. The most complete schema for a given version is the
newest release that still serves it.

To keep an API version the deployed release does not serve yet, while
following the deployed release for every other version, list the deployed
release last (as `capv` does): it then wins for every version it defines, and
the newer release only fills in the rest.

## Configuration Format

The `resources.yaml` configuration has a simple structure:

```yaml
- group: {group-name}        # Used as directory name
  resources:
    - name: {ResourceName}   # PascalCase resource name
      crdURL: {url}          # URL to CRD YAML file
    - name: {ResourceName}   # Alternatively, several CRD releases for one
      crdURLs:               # resource, oldest first (last wins per version)
        - {url}
        - {url}
```

`crdURL` and `crdURLs` are mutually exclusive; each resource must set exactly
one of them.
