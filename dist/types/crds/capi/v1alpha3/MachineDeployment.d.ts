/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * MachineDeployment is the Schema for the machinedeployments API.
 *
 * Deprecated: This type will be removed in one of the next releases.
 */
export interface MachineDeployment {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: 'cluster.x-k8s.io/v1alpha3';
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: 'MachineDeployment';
    metadata: metav1.ObjectMeta;
    /**
     * spec is the desired state of MachineDeployment.
     */
    spec?: {
        /**
         * clusterName is the name of the Cluster this object belongs to.
         */
        clusterName: string;
        /**
         * minReadySeconds is the minimum number of seconds for which a newly created machine should
         * be ready.
         * Defaults to 0 (machine will be considered available as soon as it
         * is ready)
         */
        minReadySeconds?: number;
        /**
         * paused indicates that the deployment is paused.
         */
        paused?: boolean;
        /**
         * progressDeadlineSeconds is the maximum time in seconds for a deployment to make progress before it
         * is considered to be failed. The deployment controller will continue to
         * process failed deployments and a condition with a ProgressDeadlineExceeded
         * reason will be surfaced in the deployment status. Note that progress will
         * not be estimated during the time a deployment is paused. Defaults to 600s.
         */
        progressDeadlineSeconds?: number;
        /**
         * replicas is the number of desired machines. Defaults to 1.
         * This is a pointer to distinguish between explicit zero and not specified.
         */
        replicas?: number;
        /**
         * revisionHistoryLimit is the number of old MachineSets to retain to allow rollback.
         * This is a pointer to distinguish between explicit zero and not specified.
         * Defaults to 1.
         */
        revisionHistoryLimit?: number;
        /**
         * selector is the label selector for machines. Existing MachineSets whose machines are
         * selected by this will be the ones affected by this deployment.
         * It must match the machine template's labels.
         */
        selector: {
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
         * strategy is the deployment strategy to use to replace existing machines with
         * new ones.
         */
        strategy?: {
            /**
             * rollingUpdate is the rolling update config params. Present only if
             * MachineDeploymentStrategyType = RollingUpdate.
             */
            rollingUpdate?: {
                /**
                 * maxSurge is the maximum number of machines that can be scheduled above the
                 * desired number of machines.
                 * Value can be an absolute number (ex: 5) or a percentage of
                 * desired machines (ex: 10%).
                 * This can not be 0 if MaxUnavailable is 0.
                 * Absolute number is calculated from percentage by rounding up.
                 * Defaults to 1.
                 * Example: when this is set to 30%, the new MachineSet can be scaled
                 * up immediately when the rolling update starts, such that the total
                 * number of old and new machines do not exceed 130% of desired
                 * machines. Once old machines have been killed, new MachineSet can
                 * be scaled up further, ensuring that total number of machines running
                 * at any time during the update is at most 130% of desired machines.
                 */
                maxSurge?: number | string;
                /**
                 * maxUnavailable is the maximum number of machines that can be unavailable during the update.
                 * Value can be an absolute number (ex: 5) or a percentage of desired
                 * machines (ex: 10%).
                 * Absolute number is calculated from percentage by rounding down.
                 * This can not be 0 if MaxSurge is 0.
                 * Defaults to 0.
                 * Example: when this is set to 30%, the old MachineSet can be scaled
                 * down to 70% of desired machines immediately when the rolling update
                 * starts. Once new machines are ready, old MachineSet can be scaled
                 * down further, followed by scaling up the new MachineSet, ensuring
                 * that the total number of machines available at all times
                 * during the update is at least 70% of desired machines.
                 */
                maxUnavailable?: number | string;
            };
            /**
             * type of deployment. Currently the only supported strategy is
             * "RollingUpdate".
             * Default is RollingUpdate.
             */
            type?: string;
        };
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
                 * generateName is an optional prefix, used by the server, to generate a unique
                 * name ONLY IF the Name field has not been provided.
                 * If this field is used, the name returned to the client will be different
                 * than the name passed. This value will also be combined with a unique suffix.
                 * The provided value has the same validation rules as the Name field,
                 * and may be truncated by the length of the suffix required to make the value
                 * unique on the server.
                 *
                 * If this field is specified and the generated name exists, the server will
                 * NOT return a 409 - instead, it will either return 201 Created or 500 with Reason
                 * ServerTimeout indicating a unique name could not be found in the time allotted, and the client
                 * should retry (optionally after the time indicated in the Retry-After header).
                 *
                 * Applied only if Name is not specified.
                 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
                 *
                 * Deprecated: This field has no function and is going to be removed in a next release.
                 */
                generateName?: string;
                /**
                 * labels is a map of string keys and values that can be used to organize and categorize
                 * (scope and select) objects. May match selectors of replication controllers
                 * and services.
                 * More info: http://kubernetes.io/docs/user-guide/labels
                 */
                labels?: {
                    [k: string]: string;
                };
                /**
                 * name must be unique within a namespace. Is required when creating resources, although
                 * some resources may allow a client to request the generation of an appropriate name
                 * automatically. Name is primarily intended for creation idempotence and configuration
                 * definition.
                 * Cannot be updated.
                 * More info: http://kubernetes.io/docs/user-guide/identifiers#names
                 *
                 * Deprecated: This field has no function and is going to be removed in a next release.
                 */
                name?: string;
                /**
                 * namespace defines the space within each name must be unique. An empty namespace is
                 * equivalent to the "default" namespace, but "default" is the canonical representation.
                 * Not all objects are required to be scoped to a namespace - the value of this field for
                 * those objects will be empty.
                 *
                 * Must be a DNS_LABEL.
                 * Cannot be updated.
                 * More info: http://kubernetes.io/docs/user-guide/namespaces
                 *
                 * Deprecated: This field has no function and is going to be removed in a next release.
                 */
                namespace?: string;
                /**
                 * ownerReferences is the list of objects depended by this object. If ALL objects in the list have
                 * been deleted, this object will be garbage collected. If this object is managed by a controller,
                 * then an entry in this list will point to this controller, with the controller field set to true.
                 * There cannot be more than one managing controller.
                 *
                 * Deprecated: This field has no function and is going to be removed in a next release.
                 */
                ownerReferences?: {
                    /**
                     * API version of the referent.
                     */
                    apiVersion: string;
                    /**
                     * If true, AND if the owner has the "foregroundDeletion" finalizer, then
                     * the owner cannot be deleted from the key-value store until this
                     * reference is removed.
                     * See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion
                     * for how the garbage collector interacts with this field and enforces the foreground deletion.
                     * Defaults to false.
                     * To set this field, a user needs "delete" permission of the owner,
                     * otherwise 422 (Unprocessable Entity) will be returned.
                     */
                    blockOwnerDeletion?: boolean;
                    /**
                     * If true, this reference points to the managing controller.
                     */
                    controller?: boolean;
                    /**
                     * Kind of the referent.
                     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
                     */
                    kind: string;
                    /**
                     * Name of the referent.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
                     */
                    name: string;
                    /**
                     * UID of the referent.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
                     */
                    uid: string;
                }[];
            };
            /**
             * spec is the specification of the desired behavior of the machine.
             * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
             */
            spec?: {
                /**
                 * bootstrap is a reference to a local struct which encapsulates
                 * fields to configure the Machine’s bootstrapping mechanism.
                 */
                bootstrap: {
                    /**
                     * configRef is a reference to a bootstrap provider-specific resource
                     * that holds configuration details. The reference is optional to
                     * allow users/operators to specify Bootstrap.Data without
                     * the need of a controller.
                     */
                    configRef?: {
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
                    };
                    /**
                     * data contains the bootstrap data, such as cloud-init details scripts.
                     * If nil, the Machine should remain in the Pending state.
                     *
                     * Deprecated: Switch to DataSecretName.
                     */
                    data?: string;
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
                 * failureDomain is the failure domain the machine will be created in.
                 * Must match a key in the FailureDomains map stored on the cluster object.
                 */
                failureDomain?: string;
                /**
                 * infrastructureRef is a required reference to a custom resource
                 * offered by an infrastructure provider.
                 */
                infrastructureRef: {
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
                };
                /**
                 * nodeDrainTimeout is the total amount of time that the controller will spend on draining a node.
                 * The default value is 0, meaning that the node can be drained without any time limitations.
                 * NOTE: NodeDrainTimeout is different from `kubectl drain --timeout`
                 */
                nodeDrainTimeout?: string;
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
                 * version defines the desired Kubernetes version.
                 * This field is meant to be optionally used by bootstrap providers.
                 */
                version?: string;
            };
        };
    };
    /**
     * status is the observed state of MachineDeployment.
     */
    status?: {
        /**
         * availableReplicas is the total number of available machines (ready for at least minReadySeconds)
         * targeted by this deployment.
         */
        availableReplicas?: number;
        /**
         * observedGeneration is the generation observed by the deployment controller.
         */
        observedGeneration?: number;
        /**
         * phase represents the current phase of a MachineDeployment (ScalingUp, ScalingDown, Running, Failed, or Unknown).
         */
        phase?: string;
        /**
         * readyReplicas is the total number of ready machines targeted by this deployment.
         */
        readyReplicas?: number;
        /**
         * replicas is the total number of non-terminated machines targeted by this deployment
         * (their labels match the selector).
         */
        replicas?: number;
        /**
         * selector is the same as the label selector but in the string format to avoid introspection
         * by clients. The string will be in the same format as the query-param syntax.
         * More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors
         */
        selector?: string;
        /**
         * unavailableReplicas is the total number of unavailable machines targeted by this deployment.
         * This is the total number of machines that are still required for
         * the deployment to have 100% available capacity. They may either
         * be machines that are running but not yet available or machines
         * that still have not been created.
         */
        unavailableReplicas?: number;
        /**
         * updatedReplicas is the total number of non-terminated machines targeted by this deployment
         * that have the desired template spec.
         */
        updatedReplicas?: number;
    };
}
//# sourceMappingURL=MachineDeployment.d.ts.map