/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * ResourceSet is the Schema for the ResourceSets API.
 */
export interface ResourceSet {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: 'fluxcd.controlplane.io/v1';
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: 'ResourceSet';
    metadata: metav1.ObjectMeta;
    /**
     * ResourceSetSpec defines the desired state of ResourceSet
     */
    spec?: {
        /**
         * CommonMetadata specifies the common labels and annotations that are
         * applied to all resources. Any existing label or annotation will be
         * overridden if its key matches a common one.
         */
        commonMetadata?: {
            /**
             * Annotations to be added to the object's metadata.
             */
            annotations?: {
                [k: string]: string;
            };
            /**
             * Labels to be added to the object's metadata.
             */
            labels?: {
                [k: string]: string;
            };
        };
        /**
         * DependsOn specifies the list of Kubernetes resources that must
         * exist on the cluster before the reconciliation process starts.
         *
         * Items: Dependency defines a ResourceSet dependency on a Kubernetes resource.
         */
        dependsOn?: {
            /**
             * APIVersion of the resource to depend on.
             */
            apiVersion: string;
            /**
             * Kind of the resource to depend on.
             */
            kind: string;
            /**
             * Name of the resource to depend on.
             */
            name: string;
            /**
             * Namespace of the resource to depend on.
             */
            namespace?: string;
            /**
             * Ready checks if the resource Ready status condition is true.
             */
            ready?: boolean;
            /**
             * ReadyExpr checks if the resource satisfies the given CEL expression.
             * The expression replaces the default readiness check and
             * is only evaluated if Ready is set to 'true'.
             */
            readyExpr?: string;
        }[];
        /**
         * InputStrategy defines how the inputs are combined when multiple
         * input provider objects are used. Defaults to flattening all inputs
         * from all providers into a single list of input sets.
         */
        inputStrategy?: {
            /**
             * IncludeEmptyProviders controls how input providers that export no
             * inputs are treated. Only applies when Name is Permute. When true, if
             * any provider has zero inputs the resulting permutation set is empty
             * (mathematically correct Cartesian product behavior). When false or
             * unset (default), providers with zero inputs are silently skipped and
             * the remaining providers still permute among themselves.
             */
            includeEmptyProviders?: boolean;
            /**
             * Name defines how the inputs are combined when multiple
             * input provider objects are used. Supported values are:
             * - Flatten: all inputs sets from all input provider objects are
             *   flattened into a single list of input sets.
             * - Permute: all inputs sets from all input provider objects are
             *   combined using a Cartesian product, resulting in a list of input sets
             *   that contains every possible combination of input values.
             *   For example, if provider A has inputs [{x: 1}, {x: 2}] and provider B has
             *   inputs [{y: "a"}, {y: "b"}], the resulting input sets will be:
             *   [{x: 1, y: "a"}, {x: 1, y: "b"}, {x: 2, y: "a"}, {x: 2, y: "b"}].
             *   This strategy can lead to a large number of input sets and should be
             *   used with caution. Users should use filtering features from
             *   ResourceSetInputProvider to limit the amount of exported inputs.
             */
            name: 'Flatten' | 'Permute';
        };
        /**
         * Inputs contains the list of ResourceSet inputs.
         *
         * Items: ResourceSetInput defines the key-value pairs of the ResourceSet input.
         */
        inputs?: {
            [k: string]: {
                [k: string]: unknown;
            };
        }[];
        /**
         * InputsFrom contains the list of references to input providers.
         * When set, the inputs are fetched from the providers and concatenated
         * with the in-line inputs defined in the ResourceSet.
         *
         * Items: InputProviderReference defines a reference to an input provider resource
         * in the same namespace as the ResourceSet.
         */
        inputsFrom?: {
            /**
             * APIVersion of the input provider resource.
             * When not set, the APIVersion of the ResourceSet is used.
             */
            apiVersion?: 'fluxcd.controlplane.io/v1';
            /**
             * Kind of the input provider resource.
             */
            kind?: 'ResourceSetInputProvider';
            /**
             * Name of the input provider resource. Cannot be set
             * when the Selector field is set.
             */
            name?: string;
            /**
             * Selector is a label selector to filter the input provider resources
             * as an alternative to the Name field.
             */
            selector?: {
                /**
                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                 *
                 * Items: A label selector requirement is a selector that contains values, a key, and an operator that
                 * relates the key and values.
                 */
                matchExpressions?: {
                    /**
                     * key is the label key that the selector applies to.
                     */
                    key: string;
                    /**
                     * operator represents a key's relationship to a set of values.
                     * Valid operators are In, NotIn, Exists and DoesNotExist.
                     */
                    operator: string;
                    /**
                     * values is an array of string values. If the operator is In or NotIn,
                     * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                     * the values array must be empty. This array is replaced during a strategic
                     * merge patch.
                     */
                    values?: string[];
                }[];
                /**
                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                 * map is equivalent to an element of matchExpressions, whose key field is "key", the
                 * operator is "In", and the values array contains only "value". The requirements are ANDed.
                 */
                matchLabels?: {
                    [k: string]: string;
                };
            };
        }[];
        /**
         * Resources contains the list of Kubernetes resources to reconcile.
         */
        resources?: {}[];
        /**
         * ResourcesTemplate is a Go template that generates the list of
         * Kubernetes resources to reconcile. The template is rendered
         * as multi-document YAML, the resources should be separated by '---'.
         * When both Resources and ResourcesTemplate are set, the resulting
         * objects are merged and deduplicated, with the ones from Resources taking precedence.
         */
        resourcesTemplate?: string;
        /**
         * The name of the Kubernetes service account to impersonate
         * when reconciling the generated resources.
         */
        serviceAccountName?: string;
        /**
         * Steps contains an ordered list of named steps to reconcile in sequence.
         * Each step's resources are applied and health-checked before the next
         * step starts. Mutually exclusive with Resources and ResourcesTemplate.
         *
         * @minItems 1
         * @maxItems 20
         *
         * Items: ResourceSetStep defines a named step in the ResourceSet reconciliation
         * sequence. The step's resources are applied and health-checked before
         * the next step starts.
         */
        steps?: {
            /**
             * Name of the step, must be unique within the ResourceSet.
             */
            name: string;
            /**
             * Resources contains the list of Kubernetes resources to reconcile.
             */
            resources?: {}[];
            /**
             * ResourcesTemplate is a Go template that generates the list of
             * Kubernetes resources to reconcile. The template is rendered
             * as multi-document YAML, the resources should be separated by '---'.
             * When both Resources and ResourcesTemplate are set, the resulting
             * objects are merged and deduplicated, with the ones from Resources taking precedence.
             */
            resourcesTemplate?: string;
            /**
             * Timeout is the maximum time to wait for the step's resources to
             * become ready. When not set, the ResourceSet reconciliation
             * timeout is used.
             */
            timeout?: string;
        }[];
        /**
         * Wait instructs the controller to check the health
         * of all the reconciled resources.
         */
        wait?: boolean;
    };
    /**
     * ResourceSetStatus defines the observed state of ResourceSet.
     */
    status?: {
        /**
         * Conditions contains the readiness conditions of the object.
         *
         * Items: Condition contains details for one aspect of the current state of this API Resource.
         */
        conditions?: {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
             */
            lastTransitionTime: string;
            /**
             * message is a human readable message indicating details about the transition.
             * This may be an empty string.
             */
            message: string;
            /**
             * observedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration?: number;
            /**
             * reason contains a programmatic identifier indicating the reason for the condition's last transition.
             * Producers of specific condition types may define expected values and meanings for this field,
             * and whether the values are considered a guaranteed API.
             * The value should be a CamelCase string.
             * This field may not be empty.
             */
            reason: string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status: 'True' | 'False' | 'Unknown';
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             */
            type: string;
        }[];
        /**
         * ExternalChecksumRefs lists the ConfigMap and Secret references
         * discovered in checksumFrom annotations on the last reconciliation
         * that point to objects not rendered by this ResourceSet. Each entry
         * has the form "Kind/namespace/name". It is used to trigger a
         * reconciliation when one of the referenced objects changes.
         */
        externalChecksumRefs?: string[];
        /**
         * History contains the reconciliation history of the ResourceSet
         * as a list of snapshots ordered by the last reconciled time.
         *
         * Items: Snapshot represents a point-in-time record of a group of resources reconciliation,
         * including timing information, status, and a unique digest identifier.
         */
        history?: {
            /**
             * Digest is the checksum in the format `<algo>:<hex>` of the resources in this snapshot.
             */
            digest: string;
            /**
             * FirstReconciled is the time when this revision was first reconciled to the cluster.
             */
            firstReconciled: string;
            /**
             * LastReconciled is the time when this revision was last reconciled to the cluster.
             */
            lastReconciled: string;
            /**
             * LastReconciledDuration is time it took to reconcile the resources in this revision.
             */
            lastReconciledDuration: string;
            /**
             * LastReconciledStatus is the status of the last reconciliation.
             */
            lastReconciledStatus: string;
            /**
             * Metadata contains additional information about the snapshot.
             */
            metadata?: {
                [k: string]: string;
            };
            /**
             * TotalReconciliations is the total number of reconciliations that have occurred for this snapshot.
             */
            totalReconciliations: number;
        }[];
        /**
         * Inventory contains a list of Kubernetes resource object references
         * last applied on the cluster.
         */
        inventory?: {
            /**
             * Entries of Kubernetes resource object references.
             *
             * Items: ResourceRef contains the information necessary to locate a resource within a cluster.
             */
            entries: {
                /**
                 * ID is the string representation of the Kubernetes resource object's metadata,
                 * in the format '<namespace>_<name>_<group>_<kind>'.
                 */
                id: string;
                /**
                 * Version is the API version of the Kubernetes resource object's kind.
                 */
                v: string;
            }[];
        };
        /**
         * LastAppliedRevision is the digest of the
         * generated resources that were last reconcile.
         */
        lastAppliedRevision?: string;
        /**
         * LastHandledReconcileAt holds the value of the most recent
         * reconcile request value, so a change of the annotation value
         * can be detected.
         */
        lastHandledReconcileAt?: string;
    };
}
//# sourceMappingURL=ResourceSet.d.ts.map