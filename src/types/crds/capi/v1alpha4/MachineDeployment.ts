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
  apiVersion: 'cluster.x-k8s.io/v1alpha4';
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
         * deletePolicy defines the policy used by the MachineDeployment to identify nodes to delete when downscaling.
         * Valid values are "Random, "Newest", "Oldest"
         * When no value is supplied, the default DeletePolicy of MachineSet is used
         */
        deletePolicy?: 'Random' | 'Newest' | 'Oldest';
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
       * type of deployment.
       * Default is RollingUpdate.
       */
      type?: 'RollingUpdate' | 'OnDelete';
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
      spec?: {
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
     * conditions defines current service state of the MachineDeployment.
     */
    conditions?: {
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another.
       * This should be when the underlying condition changed. If that is not known, then using the time when
       * the API field changed is acceptable.
       */
      lastTransitionTime?: string;
      /**
       * message is a human readable message indicating details about the transition.
       * This field may be empty.
       */
      message?: string;
      /**
       * reason is the reason for the condition's last transition in CamelCase.
       * The specific API may choose whether or not this field is considered a guaranteed API.
       * This field may not be empty.
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
