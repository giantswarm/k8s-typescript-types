# @giantswarm/k8s-types

TypeScript type definitions for Kubernetes core objects and custom resource definitions (CRDs).

## Installation

```bash
yarn add @giantswarm/k8s-types
```

Or with npm:
```bash
npm install @giantswarm/k8s-types
```

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
5. Create organized output in `src/crds/`

### Build

```bash
yarn build
```

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
      crdURL: https://raw.githubusercontent.com/example/repo/main/config/crd/my-resource.yaml
```

3. Run `yarn generate`

The generator will automatically discover all versions from the CRD and generate types for each.

## Configuration Format

The `resources.yaml` configuration has a simple structure:

```yaml
- group: {group-name}        # Used as directory name
  resources:
    - name: {ResourceName}   # PascalCase resource name
      crdURL: {url}          # URL to CRD YAML file
```
