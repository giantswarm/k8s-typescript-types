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

## Available Types

Every CRD API version the package publishes, as configured in
`src/generator/config/resources.yaml`. **Source** is the repository and tag
the types are generated from. **Served** says whether the CRD of that release
serves the version, i.e. whether a cluster running that release answers
requests for it. Where a resource combines several releases (see "Covering
several API versions"), the Source release is not necessarily the one deployed
on management clusters; `resources.yaml` says which one is.

<!-- generated:types-overview:start -->
<!-- Written by `yarn generate`, do not edit by hand. -->

| Import | API group | Kinds | Served | Source |
|---|---|---|---|---|
| `crds.capi.v1beta2` | `cluster.x-k8s.io`<br>`controlplane.cluster.x-k8s.io` | Cluster<br>KubeadmControlPlane<br>Machine<br>MachineDeployment<br>MachinePool | yes | [giantswarm/cluster-api](https://github.com/giantswarm/cluster-api/tree/df613140e6cd6023c749d4208a4ba1ab4128a362) `v1.14.2-gs-df613140e` |
| `crds.capi.v1beta1` | `cluster.x-k8s.io`<br>`controlplane.cluster.x-k8s.io` | Cluster<br>KubeadmControlPlane<br>Machine<br>MachineDeployment<br>MachinePool | yes | [giantswarm/cluster-api](https://github.com/giantswarm/cluster-api/tree/df613140e6cd6023c749d4208a4ba1ab4128a362) `v1.14.2-gs-df613140e` |
| `crds.capa.v1beta2` | `controlplane.cluster.x-k8s.io`<br>`infrastructure.cluster.x-k8s.io` | AWSCluster<br>AWSClusterRoleIdentity<br>AWSMachinePool<br>AWSMachineTemplate<br>AWSManagedCluster<br>AWSManagedControlPlane<br>AWSManagedMachinePool | yes | [giantswarm/cluster-api-provider-aws](https://github.com/giantswarm/cluster-api-provider-aws/tree/6d635ed377b1a36afb1f69cd20f684e466c47dd2) `v2.11.1-gs-6d635ed37` |
| `crds.capa.v1beta1` | `controlplane.cluster.x-k8s.io`<br>`infrastructure.cluster.x-k8s.io` | AWSCluster<br>AWSClusterRoleIdentity<br>AWSMachinePool<br>AWSMachineTemplate<br>AWSManagedControlPlane<br>AWSManagedMachinePool | **no** | [giantswarm/cluster-api-provider-aws](https://github.com/giantswarm/cluster-api-provider-aws/tree/6d635ed377b1a36afb1f69cd20f684e466c47dd2) `v2.11.1-gs-6d635ed37` |
| `crds.capz.v1beta1` | `infrastructure.cluster.x-k8s.io` | AzureASOManagedCluster<br>AzureASOManagedMachinePool<br>AzureCluster<br>AzureClusterIdentity<br>AzureMachine<br>AzureMachinePool<br>AzureMachineTemplate | yes | [giantswarm/cluster-api-provider-azure](https://github.com/giantswarm/cluster-api-provider-azure/tree/99647669a79b6764cf543a3aeaa669798964f52f) `v1.27.0-gs-99647669a` |
| `crds.capz.v1alpha1` | `infrastructure.cluster.x-k8s.io` | AzureASOManagedCluster<br>AzureASOManagedMachinePool | yes | [giantswarm/cluster-api-provider-azure](https://github.com/giantswarm/cluster-api-provider-azure/tree/99647669a79b6764cf543a3aeaa669798964f52f) `v1.27.0-gs-99647669a` |
| `crds.capv.v1beta2` | `infrastructure.cluster.x-k8s.io` | VSphereCluster<br>VSphereClusterIdentity<br>VSphereMachine<br>VSphereMachineTemplate | yes | [kubernetes-sigs/cluster-api-provider-vsphere](https://github.com/kubernetes-sigs/cluster-api-provider-vsphere/tree/2509b8e28d079f023921cb3ae60ff40bade92e35) `v1.17.0` |
| `crds.capv.v1beta1` | `infrastructure.cluster.x-k8s.io` | VSphereCluster<br>VSphereClusterIdentity<br>VSphereMachine<br>VSphereMachineTemplate | yes | [kubernetes-sigs/cluster-api-provider-vsphere](https://github.com/kubernetes-sigs/cluster-api-provider-vsphere/tree/e917f8e362ddf5ebc3f227894b7746fdf7b5f9f3) `v1.15.3` |
| `crds.capv.v1alpha4` | `infrastructure.cluster.x-k8s.io` | VSphereCluster<br>VSphereClusterIdentity<br>VSphereMachine<br>VSphereMachineTemplate | **no** | [kubernetes-sigs/cluster-api-provider-vsphere](https://github.com/kubernetes-sigs/cluster-api-provider-vsphere/tree/e917f8e362ddf5ebc3f227894b7746fdf7b5f9f3) `v1.15.3` |
| `crds.capv.v1alpha3` | `infrastructure.cluster.x-k8s.io` | VSphereCluster<br>VSphereClusterIdentity<br>VSphereMachine<br>VSphereMachineTemplate | **no** | [kubernetes-sigs/cluster-api-provider-vsphere](https://github.com/kubernetes-sigs/cluster-api-provider-vsphere/tree/e917f8e362ddf5ebc3f227894b7746fdf7b5f9f3) `v1.15.3` |
| `crds.capvcd.v1beta3` | `infrastructure.cluster.x-k8s.io` | VCDCluster | yes | [giantswarm/cluster-api-provider-cloud-director](https://github.com/giantswarm/cluster-api-provider-cloud-director/tree/06f9f9c8fb663d0c72adb86cc7a6f5efb11a6fd3) `06f9f9c` |
| `crds.capvcd.v1beta2` | `infrastructure.cluster.x-k8s.io` | VCDCluster | yes | [giantswarm/cluster-api-provider-cloud-director](https://github.com/giantswarm/cluster-api-provider-cloud-director/tree/06f9f9c8fb663d0c72adb86cc7a6f5efb11a6fd3) `06f9f9c` |
| `crds.capvcd.v1beta1` | `infrastructure.cluster.x-k8s.io` | VCDCluster | yes | [giantswarm/cluster-api-provider-cloud-director](https://github.com/giantswarm/cluster-api-provider-cloud-director/tree/06f9f9c8fb663d0c72adb86cc7a6f5efb11a6fd3) `06f9f9c` |
| `crds.capvcd.v1alpha4` | `infrastructure.cluster.x-k8s.io` | VCDCluster | yes | [giantswarm/cluster-api-provider-cloud-director](https://github.com/giantswarm/cluster-api-provider-cloud-director/tree/06f9f9c8fb663d0c72adb86cc7a6f5efb11a6fd3) `06f9f9c` |
| `crds.crossplane.v1beta1` | `aws.upbound.io` | ProviderConfig | yes | [crossplane-contrib/provider-upjet-aws](https://github.com/crossplane-contrib/provider-upjet-aws/tree/45ec02187ac6371229b719fc3eb277914a666552) `v1.21.0` |
| `crds.externalSecrets.v1` | `external-secrets.io` | ClusterSecretStore<br>SecretStore | yes | [external-secrets/external-secrets](https://github.com/external-secrets/external-secrets/tree/e8f12e1f1646e0ad47966458023ff10c9577f2b0) `v2.11.0` |
| `crds.externalSecrets.v1beta1` | `external-secrets.io` | ClusterSecretStore<br>SecretStore | **no** | [external-secrets/external-secrets](https://github.com/external-secrets/external-secrets/tree/e8f12e1f1646e0ad47966458023ff10c9577f2b0) `v2.11.0` |
| `crds.fluxcd.v2` | `helm.toolkit.fluxcd.io` | HelmRelease | yes | [fluxcd/helm-controller](https://github.com/fluxcd/helm-controller/tree/372c34e2b4a455d24ef6cbb8321c82c4533dbbd8) `v1.6.3` |
| `crds.fluxcd.v1` | `image.toolkit.fluxcd.io`<br>`kustomize.toolkit.fluxcd.io`<br>`source.toolkit.fluxcd.io` | GitRepository<br>HelmRepository<br>ImagePolicy<br>ImageRepository<br>ImageUpdateAutomation<br>Kustomization<br>OCIRepository | yes | [fluxcd/image-automation-controller](https://github.com/fluxcd/image-automation-controller/tree/ab81d588d3969e544abad8746a3088d833506341) `v1.2.3`<br>[fluxcd/image-reflector-controller](https://github.com/fluxcd/image-reflector-controller/tree/1c67450e57ea5a3fb19aa8c132d791baffa64fd9) `v1.2.3`<br>[fluxcd/kustomize-controller](https://github.com/fluxcd/kustomize-controller/tree/1324b615da01038e2859cbcde604bd5434f21933) `v1.9.4`<br>[fluxcd/source-controller](https://github.com/fluxcd/source-controller/tree/ed61ebda88cd70159b24df1c8df50b1e6be4cc3d) `v1.9.3` |
| `crds.fluxcd.v2beta2` | `helm.toolkit.fluxcd.io` | HelmRelease | yes | [fluxcd/helm-controller](https://github.com/fluxcd/helm-controller/tree/3ebc2f57b7323371bf0d067bfb4e411592124bdf) `v1.4.5` |
| `crds.fluxcd.v2beta1` | `helm.toolkit.fluxcd.io` | HelmRelease | yes | [fluxcd/helm-controller](https://github.com/fluxcd/helm-controller/tree/e47f47f1282d1c66b180be7a386f5afbe3f5ae26) `v1.3.0` |
| `crds.fluxcd.v1beta2` | `image.toolkit.fluxcd.io`<br>`kustomize.toolkit.fluxcd.io`<br>`source.toolkit.fluxcd.io` | GitRepository<br>HelmRepository<br>ImagePolicy<br>ImageRepository<br>ImageUpdateAutomation<br>Kustomization<br>OCIRepository | yes | [fluxcd/image-automation-controller](https://github.com/fluxcd/image-automation-controller/tree/6ffb95aa2ad6344f3d721e211d2c5b9c43d968dd) `v1.1.4`<br>[fluxcd/image-reflector-controller](https://github.com/fluxcd/image-reflector-controller/tree/5556b250956d21d0d3c53488a62ab336f40775d5) `v1.1.2`<br>[fluxcd/kustomize-controller](https://github.com/fluxcd/kustomize-controller/tree/090c49bdb679f827353d1658a7ab60a168dbb3a5) `v1.7.3`<br>[fluxcd/source-controller](https://github.com/fluxcd/source-controller/tree/2eb5a81a22b414215f25d7981fd3ab7b078ad6ca) `v1.7.4` |
| `crds.fluxcd.v1beta1` | `image.toolkit.fluxcd.io`<br>`kustomize.toolkit.fluxcd.io`<br>`source.toolkit.fluxcd.io` | GitRepository<br>HelmRepository<br>ImagePolicy<br>ImageRepository<br>ImageUpdateAutomation<br>Kustomization | yes | [fluxcd/image-automation-controller](https://github.com/fluxcd/image-automation-controller/tree/f80db5841c25bcbcb2a8f58e77a070326845d3d5) `v0.41.2`<br>[fluxcd/image-reflector-controller](https://github.com/fluxcd/image-reflector-controller/tree/b65e8a04938b13850193b1ddc9ff89c2b68c1a9c) `v0.35.2`<br>[fluxcd/kustomize-controller](https://github.com/fluxcd/kustomize-controller/tree/8ec4a6e91f5bb7c0e2faaee4eafde2e25e8c4778) `v1.6.1`<br>[fluxcd/source-controller](https://github.com/fluxcd/source-controller/tree/254ef2ec92b4855d2a09bf61a1a6e8b1ac34d4a5) `v1.6.2` |
| `crds.fluxoperator.v1` | `fluxcd.controlplane.io` | FluxInstance<br>FluxReport<br>ResourceSet<br>ResourceSetInputProvider | yes | [controlplaneio-fluxcd/flux-operator](https://github.com/controlplaneio-fluxcd/flux-operator/tree/483d170eabe66118fa9959730396b634a9268717) `v0.60.0` |
| `crds.giantswarm.v1alpha1` | `application.giantswarm.io`<br>`infrastructure.cluster.x-k8s.io`<br>`release.giantswarm.io`<br>`security.giantswarm.io` | App<br>Catalog<br>KarpenterMachinePool<br>Organization<br>Release | yes | [giantswarm/apiextensions-application](https://github.com/giantswarm/apiextensions-application/tree/d4c07c35184dfd337deda5e50d3c60529394a684) `v0.6.2`<br>[giantswarm/aws-resolver-rules-operator](https://github.com/giantswarm/aws-resolver-rules-operator/tree/2f6dc4f8e67ce4f68cb09ace8387bdc0121e7965) `v0.28.1`<br>[giantswarm/organization-operator](https://github.com/giantswarm/organization-operator/tree/64676aa66d238d39434087cce18e5c9ebd1402d6) `v2.1.3`<br>[giantswarm/releases](https://github.com/giantswarm/releases/tree/83eb2a80348af605b4c76dadfdfa647c50530537) `sdk/v0.13.0` |
| `crds.kagent.v1alpha3` | `kagent.dev` | AgentTemplate<br>Harness<br>ModelConfig<br>ModelProviderConfig<br>RemoteMCPServer | yes | [giantswarm/kagent-upstream](https://github.com/giantswarm/kagent-upstream/tree/6f23597fe29a390ab74ea70e4f2c829b0061d2f1) `v1.2.5` |
| `crds.kagent.v1alpha2` | `kagent.dev` | Agent<br>ModelConfig | yes | [kagent-dev/kagent](https://github.com/kagent-dev/kagent/tree/e9e4e34d6bd2d5950e81fefbcfd0bab70ea1eaaa) `v0.9.9` |
| `crds.kagent.v1alpha1` | `kagent.dev` | Agent<br>ModelConfig | yes | [kagent-dev/kagent](https://github.com/kagent-dev/kagent/tree/e9e4e34d6bd2d5950e81fefbcfd0bab70ea1eaaa) `v0.9.9` |

<!-- generated:types-overview:end -->

The core Kubernetes types are written by hand: `core.v1`, `core.apps.v1` and
`core.metav1`.

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
5. Replace `src/types/crds/` with the result
6. Rewrite the "Available Types" table in this README

`src/types/crds/` and the table are entirely generated: a version or resource
that is no longer generated disappears from both. If any CRD cannot be fetched
or turned into types, the generator reports it, exits non-zero and leaves both
as they were.

### Build

```bash
yarn build
```

This empties `dist/`, compiles `src/types` into it and then runs the consumer
smoke (`yarn smoke`): `src/smoke/` is type-checked against the built `dist/`
declarations exactly as a consumer would import them, so a regeneration that
drops or reshapes a type consumers depend on fails the build instead of
shipping. Nothing under `src/smoke/` is emitted.

### Clean Build Output

```bash
yarn clean
```

Removes `dist/`. `yarn build` does this first, so no stale output survives.

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
      crdURL: https://raw.githubusercontent.com/example/repo/<commit-sha>/config/crd/my-resource.yaml
      tag: v1.2.3
```

3. Run `yarn generate`

The generator will automatically discover all versions from the CRD and generate types for each.

### Pinning CRD sources

Pin every URL to the commit a release tag points to and name the tag in `tag`,
never to a branch such as `main` or to the tag itself; the generator only
accepts URLs pinned to a commit SHA. A branch is
ahead of what any cluster serves, and a tag can be moved: either way a change
upstream fails CI's generated-output check on every pull request. Pin to the
version deployed on Giant Swarm management clusters, and name what it follows
(the app and its version) in a comment. Where no tag matches the deployed
version, pin the deployed commit and leave `tag` out.

`git ls-remote https://github.com/<owner>/<repo> 'refs/tags/<tag>^{}' 'refs/tags/<tag>'`
gives a tag's commit (the `^{}` line, if present, for an annotated tag).

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
        - url: https://raw.githubusercontent.com/example/repo/<commit-sha>/config/crd/my-resource.yaml
          tag: v1.0.0
        # v1
        - url: https://raw.githubusercontent.com/example/repo/<commit-sha>/config/crd/my-resource.yaml
          tag: v2.0.0
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
      crdURL: {url}          # CRD YAML on raw.githubusercontent.com, pinned to a commit SHA
      tag: {tag}             # Release tag of that commit (omit only if none)
    - name: {ResourceName}   # Alternatively, several CRD releases for one
      crdURLs:               # resource, oldest first (last wins per version)
        - url: {url}
          tag: {tag}
        - url: {url}
          tag: {tag}
```

`crdURL` and `crdURLs` are mutually exclusive; each resource must set exactly
one of them.
