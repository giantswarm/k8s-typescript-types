---
name: remove-unused-types
description: Use when asked to clean up, prune or remove outdated or unused types, or after bumping a CRD pin to a newer deployed release.
---

# Remove unused types

The criteria and the manual steps are in the README, section "Removing Unused
Types". Read it first; this skill follows it. Do not remove anything a person
has not decided to remove.

## 1. Collect the inventory

Run `yarn generate` so the "Available Types" table in `README.md` is current.
Every row is a published API version: import path, kinds, served flag, source.

Candidates are:

- rows whose **Served** is **no** or **partly**;
- rows of resources with several `crdURLs`: Served refers to the Source
  release, so check the release `resources.yaml` names as deployed. Fetch that
  release's CRD and read `spec.versions[].served` for the version;
- anything the person asked about by name.

## 2. Check what clusters serve

`resources.yaml` names the release each group follows on management clusters
(the app and its version). Check that this is still what management clusters
run: the `-app` chart in its repository, or giantswarm/management-cluster-bases.
If the pin is behind what is deployed, say so and recommend bumping the pin
before removing anything, since the newer release may serve a different set of
versions.

Some apps also run on workload clusters (for example external-secrets, Flux,
kagent). Do not guess which releases are supported there; ask.

## 3. Check what consumers use

Find the consumers, the repositories that depend on the package:

```bash
gh search code --owner giantswarm '"@giantswarm/k8s-types"' --filename package.json \
  --limit 1000 --json repository,path -q '.[] | "\(.repository.nameWithOwner) \(.path)"' | sort -u
```

Leave out giantswarm/k8s-typescript-types itself. Clone each consumer's default
branch (`gh repo clone <repo> <scratch-dir>/<name> -- --depth 1`) and search
for every candidate. With `<g>` the import name of the group (`externalSecrets`),
`<dir>` its directory (`external-secrets`), `<v>` the version and `<api>` the
API group (`external-secrets.io`):

```bash
git -C <clone> grep -n -I -P \
  '\b<g>\.<v>\b|k8s-types/crds/<dir>/<v>\b|<api>/<v>\b' -- ':!*.md'
```

That misses code that reaches the version through the group: an import from
the group subpath (`import { <v> } from '@giantswarm/k8s-types/crds/<dir>'`),
an alias (`const vsphere = crds.<g>`, then `vsphere.<v>`) or destructuring
(`const { <g> } = crds`). List the files that refer to the group without a
version and read each one for `<v>`:

```bash
git -C <clone> grep -l -I -P \
  "k8s-types/crds/<dir>['\"]|\b<g>\b(?!\.v\d)" -- '*.ts' '*.tsx'
```

Short group names also match unrelated words (`capa` as a provider name), so
judge each file; don't count a file as usage just because it is listed.

- Use `-P`: the default regex of git on macOS does not understand `\b`.
- In zsh, a loop over `"a b c"` strings needs `${=var}` to split them.
- A hit on `<g>.<v>`, the version subpath, or `<v>` reached through the
  group is **type usage** and blocks removal.
- A hit on `<api>/<v>` is only a hint. Several groups share an API group
  (`infrastructure.cluster.x-k8s.io` is used by capa, capv, capz and capvcd),
  so check the kind next to it. Requesting that version at runtime (an
  `apiVersion` in code, a `supportedVersions` entry) blocks removal. A test
  fixture alone does not, but mention it.

## 4. Report and wait for a decision

Present one row per candidate:

| Candidate | Served (deployed release) | Consumer usage | Recommendation |
|---|---|---|---|

Give the evidence for each cell: the release and its served flag, the file and
line of each consumer hit. Recommend:

- **remove**: not served anywhere we run it and not used;
- **keep**: still served, even if unused;
- **fix the consumer first**: used, but not served; propose an issue in the
  consumer's repository.

Stop here until the person decides.

## 5. Apply the decision

Follow "How" in the README section:

1. In `src/generator/config/resources.yaml`, add each removed version to the
   resource's `excludeVersions`, with a comment saying why (not served by which
   release, no consumer uses it, as of when). Delete the entry of a removed
   resource or group.
2. Update `src/smoke/` if it refers to a removed type.
3. Run `yarn regenerate` and check that the types, `dist/` and the Available
   Types table lost exactly the removed entries.
4. In `CHANGELOG.md` under `[Unreleased]`, list every removed type under
   `### Removed` and add a `**Breaking:**` note.
5. Open a pull request titled `feat!: remove unused <...> types`. List the
   evidence from step 4 in its description.
