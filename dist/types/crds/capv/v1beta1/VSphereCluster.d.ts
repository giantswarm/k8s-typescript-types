/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * VSphereCluster is the Schema for the vsphereclusters API.
 */
export interface VSphereCluster {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: 'infrastructure.cluster.x-k8s.io/v1beta1';
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: 'VSphereCluster';
    metadata: metav1.ObjectMeta;
    /**
     * VSphereClusterSpec defines the desired state of VSphereCluster.
     */
    spec?: {
        /**
         * ClusterModules hosts information regarding the anti-affinity vSphere constructs
         * for each of the objects responsible for creation of VM objects belonging to the cluster.
         */
        clusterModules?: {
            /**
             * ControlPlane indicates whether the referred object is responsible for control plane nodes.
             * Currently, only the KubeadmControlPlane objects have this flag set to true.
             * Only a single object in the slice can have this value set to true.
             */
            controlPlane: boolean;
            /**
             * ModuleUUID is the unique identifier of the `ClusterModule` used by the object.
             */
            moduleUUID: string;
            /**
             * TargetObjectName points to the object that uses the Cluster Module information to enforce
             * anti-affinity amongst its descendant VM objects.
             */
            targetObjectName: string;
        }[];
        /**
         * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
         */
        controlPlaneEndpoint?: {
            /**
             * The hostname on which the API server is serving.
             */
            host?: string;
            /**
             * The port on which the API server is serving.
             */
            port?: number;
        };
        /**
         * DisableClusterModule is used to explicitly turn off the ClusterModule feature.
         * This should work along side NodeAntiAffinity feature flag.
         * If the NodeAntiAffinity feature flag is turned off, this will be disregarded.
         */
        disableClusterModule?: boolean;
        /**
         * FailureDomainSelector is the label selector to use for failure domain selection
         * for the control plane nodes of the cluster.
         * If not set (`nil`), selecting failure domains will be disabled.
         * An empty value (`{}`) selects all existing failure domains.
         * A valid selector will select all failure domains which match the selector.
         */
        failureDomainSelector?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
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
        /**
         * IdentityRef is a reference to either a Secret or VSphereClusterIdentity that contains
         * the identity to use when reconciling the cluster.
         */
        identityRef?: {
            /**
             * Kind of the identity. Can either be VSphereClusterIdentity or Secret
             */
            kind: 'VSphereClusterIdentity' | 'Secret';
            /**
             * Name of the identity.
             */
            name: string;
        };
        /**
         * Server is the address of the vSphere endpoint.
         */
        server?: string;
        /**
         * Thumbprint is the colon-separated SHA-1 checksum of the given vCenter server's host certificate
         */
        thumbprint?: string;
    };
    /**
     * VSphereClusterStatus defines the observed state of VSphereClusterSpec.
     */
    status?: {
        /**
         * Conditions defines current service state of the VSphereCluster.
         */
        conditions?: {
            /**
             * lastTransitionTime is the last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed. If that is not known, then using the time when
             * the API field changed is acceptable.
             */
            lastTransitionTime: string;
            /**
             * message is a human readable message indicating details about the transition.
             * This field may be empty.
             */
            message?: string;
            /**
             * reason is the reason for the condition's last transition in CamelCase.
             * The specific API may choose whether or not this field is considered a guaranteed API.
             * This field may be empty.
             */
            reason?: string;
            /**
             * severity provides an explicit classification of Reason code, so the users or machines can immediately
             * understand the current situation and act accordingly.
             * The Severity field MUST be set only when Status=False.
             */
            severity?: string;
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status: string;
            /**
             * type of condition in CamelCase or in foo.example.com/CamelCase.
             * Many .condition.type values are consistent across resources like Available, but because arbitrary conditions
             * can be useful (see .node.status.conditions), the ability to deconflict is important.
             */
            type: string;
        }[];
        /**
         * FailureDomains is a list of failure domain objects synced from the infrastructure provider.
         */
        failureDomains?: {
            /**
             * FailureDomainSpec is the Schema for Cluster API failure domains.
             * It allows controllers to understand how many failure domains a cluster can optionally span across.
             */
            [k: string]: {
                /**
                 * attributes is a free form map of attributes an infrastructure provider might use or require.
                 */
                attributes?: {
                    [k: string]: string;
                };
                /**
                 * controlPlane determines if this failure domain is suitable for use by control plane machines.
                 */
                controlPlane?: boolean;
            };
        };
        ready?: boolean;
        /**
         * v1beta2 groups all the fields that will be added or modified in VSphereCluster's status with the V1Beta2 version.
         */
        v1beta2?: {
            /**
             * conditions represents the observations of a VSphereCluster's current state.
             * Known condition types are Ready, FailureDomainsReady, VCenterAvailable, ClusterModulesReady and Paused.
             *
             * @maxItems 32
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
        };
        /**
         * VCenterVersion defines the version of the vCenter server defined in the spec.
         */
        vCenterVersion?: string;
    };
}
//# sourceMappingURL=VSphereCluster.d.ts.map