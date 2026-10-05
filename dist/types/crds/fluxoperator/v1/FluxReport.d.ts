/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * FluxReport is the Schema for the fluxreports API.
 */
export interface FluxReport {
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
    kind: 'FluxReport';
    metadata: metav1.ObjectMeta;
    /**
     * FluxReportSpec defines the observed state of a Flux installation.
     */
    spec?: {
        /**
         * Cluster is the version information of the Kubernetes cluster.
         */
        cluster?: {
            /**
             * Nodes is the number of nodes in the Kubernetes cluster.
             */
            nodes?: number;
            /**
             * Platform is the os/arch of the Kubernetes control plane.
             */
            platform: string;
            /**
             * ServerVersion is the version of the Kubernetes API server.
             */
            serverVersion: string;
        };
        /**
         * ComponentsStatus is the status of the Flux controller deployments.
         *
         * Items: FluxComponentStatus defines the observed state of a Flux component.
         */
        components?: {
            /**
             * Image is the container image of the Flux component.
             */
            image: string;
            /**
             * Name is the name of the Flux component.
             */
            name: string;
            /**
             * Ready is the readiness status of the Flux component.
             */
            ready: boolean;
            /**
             * Status is a human-readable message indicating details
             * about the Flux component observed state.
             */
            status: string;
        }[];
        /**
         * Distribution is the version information of the Flux installation.
         */
        distribution: {
            /**
             * Entitlement is the entitlement verification status.
             */
            entitlement: string;
            /**
             * ManagedBy is the name of the operator managing the Flux instance.
             */
            managedBy?: string;
            /**
             * Status is a human-readable message indicating details
             * about the distribution observed state.
             */
            status: string;
            /**
             * Version is the version of the Flux instance.
             */
            version?: string;
        };
        /**
         * Operator is the version information of the Flux Operator.
         */
        operator?: {
            /**
             * APIVersion is the API version of the Flux Operator.
             */
            apiVersion: string;
            /**
             * Platform is the os/arch of Flux Operator.
             */
            platform: string;
            /**
             * Version is the version number of Flux Operator.
             */
            version: string;
        };
        /**
         * ReconcilersStatus is the list of Flux reconcilers and
         * their statistics grouped by API kind.
         *
         * Items: FluxReconcilerStatus defines the observed state of a Flux reconciler.
         */
        reconcilers?: {
            /**
             * APIVersion is the API version of the Flux resource.
             */
            apiVersion: string;
            /**
             * Kind is the kind of the Flux resource.
             */
            kind: string;
            /**
             * Stats is the reconcile statics of the Flux resource kind.
             */
            stats?: {
                /**
                 * Failing is the number of reconciled
                 * resources in the Failing state and not Suspended.
                 */
                failing: number;
                /**
                 * Running is the number of reconciled
                 * resources in the Running state.
                 */
                running: number;
                /**
                 * Suspended is the number of reconciled
                 * resources in the Suspended state.
                 */
                suspended: number;
                /**
                 * TotalSize is the total size of the artifacts in storage.
                 */
                totalSize?: string;
            };
        }[];
        /**
         * SyncStatus is the status of the cluster sync
         * Source and Kustomization resources.
         */
        sync?: {
            /**
             * ID is the identifier of the sync.
             */
            id: string;
            /**
             * Path is the kustomize path of the sync.
             */
            path?: string;
            /**
             * Ready is the readiness status of the sync.
             */
            ready: boolean;
            /**
             * Source is the URL of the source repository.
             */
            source?: string;
            /**
             * Status is a human-readable message indicating details
             * about the sync observed state.
             */
            status: string;
        };
    };
    /**
     * FluxReportStatus defines the readiness of a FluxReport.
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
         * LastHandledReconcileAt holds the value of the most recent
         * reconcile request value, so a change of the annotation value
         * can be detected.
         */
        lastHandledReconcileAt?: string;
    };
}
//# sourceMappingURL=FluxReport.d.ts.map