/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * MachinePool is the Schema for the machinepools API.
 * NOTE: This CRD can only be used if the MachinePool feature gate is enabled.
 */
export interface MachinePool {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: 'cluster.x-k8s.io/v1beta2';
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: 'MachinePool';
    metadata: metav1.ObjectMeta;
    /**
     * spec is the desired state of MachinePool.
     */
    spec?: {
        /**
         * clusterName is the name of the Cluster this object belongs to.
         */
        clusterName: string;
        /**
         * failureDomains is the list of failure domains this MachinePool should be attached to.
         *
         * @maxItems 100
         */
        failureDomains?: string[];
        /**
         * providerIDList are the identification IDs of machine instances provided by the provider.
         * This field must match the provider IDs as seen on the node objects corresponding to a machine pool's machine instances.
         *
         * @maxItems 10000
         */
        providerIDList?: string[];
        /**
         * replicas is the number of desired machines. Defaults to 1.
         * This is a pointer to distinguish between explicit zero and not specified.
         */
        replicas?: number;
        /**
         * template describes the machines that will be created.
         */
        template: {
            /**
             * metadata is the standard object's metadata.
             * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: {
                /**
                 * annotations is an unstructured key value map stored with a resource that may be
                 * set by external tools to store and retrieve arbitrary metadata. They are not
                 * queryable and should be preserved when modifying objects.
                 * More info: http://kubernetes.io/docs/user-guide/annotations
                 */
                annotations?: {
                    [k: string]: string;
                };
                /**
                 * labels is a map of string keys and values that can be used to organize and categorize
                 * (scope and select) objects. May match selectors of replication controllers
                 * and services.
                 * More info: http://kubernetes.io/docs/user-guide/labels
                 */
                labels?: {
                    [k: string]: string;
                };
            };
            /**
             * spec is the specification of the desired behavior of the machine.
             * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
             */
            spec: {
                /**
                 * bootstrap is a reference to a local struct which encapsulates
                 * fields to configure the Machine’s bootstrapping mechanism.
                 */
                bootstrap: {
                    /**
                     * configRef is a reference to a bootstrap provider-specific resource
                     * that holds configuration details. The reference is optional to
                     * allow users/operators to specify Bootstrap.DataSecretName without
                     * the need of a controller.
                     */
                    configRef?: {
                        /**
                         * apiGroup is the group of the resource being referenced.
                         * apiGroup must be fully qualified domain name.
                         * The corresponding version for this reference will be looked up from the contract
                         * labels of the corresponding CRD of the resource being referenced.
                         */
                        apiGroup: string;
                        /**
                         * kind of the resource being referenced.
                         * kind must consist of alphanumeric characters or '-', start with an alphabetic character, and end with an alphanumeric character.
                         */
                        kind: string;
                        /**
                         * name of the resource being referenced.
                         * name must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character.
                         */
                        name: string;
                    };
                    /**
                     * dataSecretName is the name of the secret that stores the bootstrap data script.
                     * If nil, the Machine should remain in the Pending state.
                     */
                    dataSecretName?: string;
                };
                /**
                 * clusterName is the name of the Cluster this object belongs to.
                 */
                clusterName: string;
                /**
                 * deletion contains configuration options for Machine deletion.
                 */
                deletion?: {
                    /**
                     * nodeDeletionTimeoutSeconds defines how long the controller will attempt to delete the Node that the Machine
                     * hosts after the Machine is marked for deletion. A duration of 0 will retry deletion indefinitely.
                     * Defaults to 10 seconds.
                     */
                    nodeDeletionTimeoutSeconds?: number;
                    /**
                     * nodeDrainTimeoutSeconds is the total amount of time that the controller will spend on draining a node.
                     * The default value is 0, meaning that the node can be drained without any time limitations.
                     * NOTE: nodeDrainTimeoutSeconds is different from `kubectl drain --timeout`
                     */
                    nodeDrainTimeoutSeconds?: number;
                    /**
                     * nodeVolumeDetachTimeoutSeconds is the total amount of time that the controller will spend on waiting for all volumes
                     * to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations.
                     */
                    nodeVolumeDetachTimeoutSeconds?: number;
                };
                /**
                 * failureDomain is the failure domain the machine will be created in.
                 * Must match the name of a FailureDomain from the Cluster status.
                 */
                failureDomain?: string;
                /**
                 * infrastructureRef is a required reference to a custom resource
                 * offered by an infrastructure provider.
                 */
                infrastructureRef: {
                    /**
                     * apiGroup is the group of the resource being referenced.
                     * apiGroup must be fully qualified domain name.
                     * The corresponding version for this reference will be looked up from the contract
                     * labels of the corresponding CRD of the resource being referenced.
                     */
                    apiGroup: string;
                    /**
                     * kind of the resource being referenced.
                     * kind must consist of alphanumeric characters or '-', start with an alphabetic character, and end with an alphanumeric character.
                     */
                    kind: string;
                    /**
                     * name of the resource being referenced.
                     * name must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character.
                     */
                    name: string;
                };
                /**
                 * minReadySeconds is the minimum number of seconds for which a Machine should be ready before considering it available.
                 * Defaults to 0 (Machine will be considered available as soon as the Machine is ready)
                 */
                minReadySeconds?: number;
                /**
                 * providerID is the identification ID of the machine provided by the provider.
                 * This field must match the provider ID as seen on the node object corresponding to this machine.
                 * This field is required by higher level consumers of cluster-api. Example use case is cluster autoscaler
                 * with cluster-api as provider. Clean-up logic in the autoscaler compares machines to nodes to find out
                 * machines at provider which could not get registered as Kubernetes nodes. With cluster-api as a
                 * generic out-of-tree provider for autoscaler, this field is required by autoscaler to be
                 * able to have a provider view of the list of machines. Another list of nodes is queried from the k8s apiserver
                 * and then a comparison is done to find out unregistered machines and are marked for delete.
                 * This field will be set by the actuators and consumed by higher level entities like autoscaler that will
                 * be interfacing with cluster-api as generic provider.
                 */
                providerID?: string;
                /**
                 * readinessGates specifies additional conditions to include when evaluating Machine Ready condition.
                 *
                 * This field can be used e.g. by Cluster API control plane providers to extend the semantic of the
                 * Ready condition for the Machine they control, like the kubeadm control provider adding ReadinessGates
                 * for the APIServerPodHealthy, SchedulerPodHealthy conditions, etc.
                 *
                 * Another example are external controllers, e.g. responsible to install special software/hardware on the Machines;
                 * they can include the status of those components with a new condition and add this condition to ReadinessGates.
                 *
                 * NOTE: In case readinessGates conditions start with the APIServer, ControllerManager, Scheduler prefix, and all those
                 * readiness gates condition are reporting the same message, when computing the Machine's Ready condition those
                 * readinessGates will be replaced by a single entry reporting "Control plane components: " + message.
                 * This helps to improve readability of conditions bubbling up to the Machine's owner resource / to the Cluster).
                 *
                 * @minItems 1
                 * @maxItems 32
                 */
                readinessGates?: [
                    {
                        /**
                         * conditionType refers to a condition with matching type in the Machine's condition list.
                         * If the conditions doesn't exist, it will be treated as unknown.
                         * Note: Both Cluster API conditions or conditions added by 3rd party controllers can be used as readiness gates.
                         */
                        conditionType: string;
                        /**
                         * polarity of the conditionType specified in this readinessGate.
                         * Valid values are Positive, Negative and omitted.
                         * When omitted, the default behaviour will be Positive.
                         * A positive polarity means that the condition should report a true status under normal conditions.
                         * A negative polarity means that the condition should report a false status under normal conditions.
                         */
                        polarity?: 'Positive' | 'Negative';
                    },
                    ...{
                        /**
                         * conditionType refers to a condition with matching type in the Machine's condition list.
                         * If the conditions doesn't exist, it will be treated as unknown.
                         * Note: Both Cluster API conditions or conditions added by 3rd party controllers can be used as readiness gates.
                         */
                        conditionType: string;
                        /**
                         * polarity of the conditionType specified in this readinessGate.
                         * Valid values are Positive, Negative and omitted.
                         * When omitted, the default behaviour will be Positive.
                         * A positive polarity means that the condition should report a true status under normal conditions.
                         * A negative polarity means that the condition should report a false status under normal conditions.
                         */
                        polarity?: 'Positive' | 'Negative';
                    }[]
                ];
                /**
                 * taints are the node taints that Cluster API will manage.
                 * This list is not necessarily complete: other Kubernetes components may add or remove other taints from nodes,
                 * e.g. the node controller might add the node.kubernetes.io/not-ready taint.
                 * Only those taints defined in this list will be added or removed by core Cluster API controllers.
                 *
                 * There can be at most 64 taints.
                 * A pod would have to tolerate all existing taints to run on the corresponding node.
                 *
                 * NOTE: This list is implemented as a "map" type, meaning that individual elements can be managed by different owners.
                 *
                 * @minItems 1
                 * @maxItems 64
                 */
                taints?: [
                    {
                        /**
                         * effect is the effect for the taint. Valid values are NoSchedule, PreferNoSchedule and NoExecute.
                         */
                        effect: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute';
                        /**
                         * key is the taint key to be applied to a node.
                         * Must be a valid qualified name of maximum size 63 characters
                         * with an optional subdomain prefix of maximum size 253 characters,
                         * separated by a `/`.
                         */
                        key: string;
                        /**
                         * propagation defines how this taint should be propagated to nodes.
                         * Valid values are 'Always' and 'OnInitialization'.
                         * Always: The taint will be continuously reconciled. If it is not set for a node, it will be added during reconciliation.
                         * OnInitialization: The taint will be added during node initialization. If it gets removed from the node later on it will not get added again.
                         */
                        propagation: 'Always' | 'OnInitialization';
                        /**
                         * value is the taint value corresponding to the taint key.
                         * It must be a valid label value of maximum size 63 characters.
                         */
                        value?: string;
                    },
                    ...{
                        /**
                         * effect is the effect for the taint. Valid values are NoSchedule, PreferNoSchedule and NoExecute.
                         */
                        effect: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute';
                        /**
                         * key is the taint key to be applied to a node.
                         * Must be a valid qualified name of maximum size 63 characters
                         * with an optional subdomain prefix of maximum size 253 characters,
                         * separated by a `/`.
                         */
                        key: string;
                        /**
                         * propagation defines how this taint should be propagated to nodes.
                         * Valid values are 'Always' and 'OnInitialization'.
                         * Always: The taint will be continuously reconciled. If it is not set for a node, it will be added during reconciliation.
                         * OnInitialization: The taint will be added during node initialization. If it gets removed from the node later on it will not get added again.
                         */
                        propagation: 'Always' | 'OnInitialization';
                        /**
                         * value is the taint value corresponding to the taint key.
                         * It must be a valid label value of maximum size 63 characters.
                         */
                        value?: string;
                    }[]
                ];
                /**
                 * version defines the desired Kubernetes version.
                 * This field is meant to be optionally used by bootstrap providers.
                 */
                version?: string;
            };
        };
    };
    /**
     * status is the observed state of MachinePool.
     */
    status?: {
        /**
         * availableReplicas is the number of available replicas for this MachinePool. A machine is considered available when Machine's Available condition is true.
         */
        availableReplicas?: number;
        /**
         * conditions represents the observations of a MachinePool's current state.
         * Known condition types are Available, BootstrapConfigReady, InfrastructureReady, MachinesReady, MachinesUpToDate,
         * ScalingUp, ScalingDown, Remediating, Deleting, Paused.
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
        /**
         * deprecated groups all the status fields that are deprecated and will be removed when all the nested field are removed.
         */
        deprecated?: {
            /**
             * v1beta1 groups all the status fields that are deprecated and will be removed when support for v1beta1 will be dropped.
             */
            v1beta1?: {
                /**
                 * availableReplicas is the number of available replicas (ready for at least minReadySeconds) for this MachinePool.
                 *
                 * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
                 */
                availableReplicas?: number;
                /**
                 * conditions define the current service state of the MachinePool.
                 *
                 * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
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
                 * failureMessage indicates that there is a problem reconciling the state,
                 * and will be set to a descriptive error message.
                 *
                 * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
                 */
                failureMessage?: string;
                /**
                 * failureReason indicates that there is a problem reconciling the state, and
                 * will be set to a token value suitable for programmatic interpretation.
                 *
                 * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
                 */
                failureReason?: string;
                /**
                 * readyReplicas is the number of ready replicas for this MachinePool. A machine is considered ready when the node has been created and is "Ready".
                 *
                 * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
                 */
                readyReplicas?: number;
                /**
                 * unavailableReplicas is the total number of unavailable machine instances targeted by this machine pool.
                 * This is the total number of machine instances that are still required for
                 * the machine pool to have 100% available capacity. They may either
                 * be machine instances that are running but not yet available or machine instances
                 * that still have not been created.
                 *
                 * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
                 */
                unavailableReplicas?: number;
            };
        };
        /**
         * initialization provides observations of the MachinePool initialization process.
         * NOTE: Fields in this struct are part of the Cluster API contract and are used to orchestrate initial MachinePool provisioning.
         */
        initialization?: {
            /**
             * bootstrapDataSecretCreated is true when the bootstrap provider reports that the MachinePool's boostrap secret is created.
             * NOTE: this field is part of the Cluster API contract, and it is used to orchestrate provisioning.
             * The value of this field is never updated after provisioning is completed.
             */
            bootstrapDataSecretCreated?: boolean;
            /**
             * infrastructureProvisioned is true when the infrastructure provider reports that MachinePool's infrastructure is fully provisioned.
             * NOTE: this field is part of the Cluster API contract, and it is used to orchestrate provisioning.
             * The value of this field is never updated after provisioning is completed.
             */
            infrastructureProvisioned?: boolean;
        };
        /**
         * nodeRefs will point to the corresponding Nodes if it they exist.
         *
         * @maxItems 10000
         */
        nodeRefs?: {
            /**
             * API version of the referent.
             */
            apiVersion?: string;
            /**
             * If referring to a piece of an object instead of an entire object, this string
             * should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2].
             * For example, if the object reference is to a container within a pod, this would take on a value like:
             * "spec.containers{name}" (where "name" refers to the name of the container that triggered
             * the event) or if no container name is specified "spec.containers[2]" (container with
             * index 2 in this pod). This syntax is chosen only to have some well-defined way of
             * referencing a part of an object.
             */
            fieldPath?: string;
            /**
             * Kind of the referent.
             * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
             */
            kind?: string;
            /**
             * Name of the referent.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name?: string;
            /**
             * Namespace of the referent.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
             */
            namespace?: string;
            /**
             * Specific resourceVersion to which this reference is made, if any.
             * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
             */
            resourceVersion?: string;
            /**
             * UID of the referent.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
             */
            uid?: string;
        }[];
        /**
         * observedGeneration is the latest generation observed by the controller.
         */
        observedGeneration?: number;
        /**
         * phase represents the current phase of cluster actuation.
         */
        phase?: 'Pending' | 'Provisioning' | 'Provisioned' | 'Running' | 'ScalingUp' | 'ScalingDown' | 'Scaling' | 'Deleting' | 'Failed' | 'Unknown';
        /**
         * readyReplicas is the number of ready replicas for this MachinePool. A machine is considered ready when Machine's Ready condition is true.
         */
        readyReplicas?: number;
        /**
         * replicas is the most recently observed number of replicas.
         */
        replicas?: number;
        /**
         * upToDateReplicas is the number of up-to-date replicas targeted by this MachinePool. A machine is considered up-to-date when Machine's UpToDate condition is true.
         */
        upToDateReplicas?: number;
    };
}
//# sourceMappingURL=MachinePool.d.ts.map