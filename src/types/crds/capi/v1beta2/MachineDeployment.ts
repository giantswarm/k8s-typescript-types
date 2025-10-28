/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * MachineDeployment is the Schema for the machinedeployments API.
 */
export interface MachineDeployment {
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
     * deletion contains configuration options for MachineDeployment deletion.
     */
    deletion?: {
      /**
       * order defines the order in which Machines are deleted when downscaling.
       * Defaults to "Random".  Valid values are "Random, "Newest", "Oldest"
       */
      order?: 'Random' | 'Newest' | 'Oldest';
    };
    /**
     * machineNaming allows changing the naming pattern used when creating Machines.
     * Note: InfraMachines & BootstrapConfigs will use the same name as the corresponding Machines.
     */
    machineNaming?: {
      /**
       * template defines the template to use for generating the names of the
       * Machine objects.
       * If not defined, it will fallback to `{{ .machineSet.name }}-{{ .random }}`.
       * If the generated name string exceeds 63 characters, it will be trimmed to
       * 58 characters and will
       * get concatenated with a random suffix of length 5.
       * Length of the template string must not exceed 256 characters.
       * The template allows the following variables `.cluster.name`,
       * `.machineSet.name` and `.random`.
       * The variable `.cluster.name` retrieves the name of the cluster object
       * that owns the Machines being created.
       * The variable `.machineSet.name` retrieves the name of the MachineSet
       * object that owns the Machines being created.
       * The variable `.random` is substituted with random alphanumeric string,
       * without vowels, of length 5. This variable is required part of the
       * template. If not provided, validation will fail.
       */
      template?: string;
    };
    /**
     * paused indicates that the deployment is paused.
     */
    paused?: boolean;
    /**
     * remediation controls how unhealthy Machines are remediated.
     */
    remediation?: {
      /**
       * maxInFlight determines how many in flight remediations should happen at the same time.
       *
       * Remediation only happens on the MachineSet with the most current revision, while
       * older MachineSets (usually present during rollout operations) aren't allowed to remediate.
       *
       * Note: In general (independent of remediations), unhealthy machines are always
       * prioritized during scale down operations over healthy ones.
       *
       * MaxInFlight can be set to a fixed number or a percentage.
       * Example: when this is set to 20%, the MachineSet controller deletes at most 20% of
       * the desired replicas.
       *
       * If not set, remediation is limited to all machines (bounded by replicas)
       * under the active MachineSet's management.
       */
      maxInFlight?: number | string;
    };
    /**
     * replicas is the number of desired machines.
     * This is a pointer to distinguish between explicit zero and not specified.
     *
     * Defaults to:
     * * if the Kubernetes autoscaler min size and max size annotations are set:
     *   - if it's a new MachineDeployment, use min size
     *   - if the replicas field of the old MachineDeployment is < min size, use min size
     *   - if the replicas field of the old MachineDeployment is > max size, use max size
     *   - if the replicas field of the old MachineDeployment is in the (min size, max size) range, keep the value from the oldMD
     * * otherwise use 1
     * Note: Defaulting will be run whenever the replicas field is not set:
     * * A new MachineDeployment is created with replicas not set.
     * * On an existing MachineDeployment the replicas field was first set and is now unset.
     * Those cases are especially relevant for the following Kubernetes autoscaler use cases:
     * * A new MachineDeployment is created and replicas should be managed by the autoscaler
     * * An existing MachineDeployment which initially wasn't controlled by the autoscaler
     *   should be later controlled by the autoscaler
     */
    replicas?: number;
    /**
     * rollout allows you to configure the behaviour of rolling updates to the MachineDeployment Machines.
     * It allows you to require that all Machines are replaced after a certain time,
     * and allows you to define the strategy used during rolling replacements.
     */
    rollout?: {
      /**
       * after is a field to indicate a rollout should be performed
       * after the specified time even if no changes have been made to the
       * MachineDeployment.
       * Example: In the YAML the time can be specified in the RFC3339 format.
       * To specify the rolloutAfter target as March 9, 2023, at 9 am UTC
       * use "2023-03-09T09:00:00Z".
       */
      after?: string;
      /**
       * strategy specifies how to roll out control plane Machines.
       */
      strategy?: {
        /**
         * rollingUpdate is the rolling update config params. Present only if
         * type = RollingUpdate.
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
         * type of rollout. Allowed values are RollingUpdate and OnDelete.
         * Default is RollingUpdate.
         */
        type: 'RollingUpdate' | 'OnDelete';
      };
    };
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
     * availableReplicas is the number of available replicas for this MachineDeployment. A machine is considered available when Machine's Available condition is true.
     */
    availableReplicas?: number;
    /**
     * conditions represents the observations of a MachineDeployment's current state.
     * Known condition types are Available, MachinesReady, MachinesUpToDate, ScalingUp, ScalingDown, Remediating, Deleting, Paused.
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
         * availableReplicas is the total number of available machines (ready for at least minReadySeconds)
         * targeted by this deployment.
         *
         * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
         */
        availableReplicas?: number;
        /**
         * conditions defines current service state of the MachineDeployment.
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
         * readyReplicas is the total number of ready machines targeted by this deployment.
         *
         * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
         */
        readyReplicas?: number;
        /**
         * unavailableReplicas is the total number of unavailable machines targeted by this deployment.
         * This is the total number of machines that are still required for
         * the deployment to have 100% available capacity. They may either
         * be machines that are running but not yet available or machines
         * that still have not been created.
         *
         * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
         */
        unavailableReplicas?: number;
        /**
         * updatedReplicas is the total number of non-terminated machines targeted by this deployment
         * that have the desired template spec.
         *
         * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
         */
        updatedReplicas?: number;
      };
    };
    /**
     * observedGeneration is the generation observed by the deployment controller.
     */
    observedGeneration?: number;
    /**
     * phase represents the current phase of a MachineDeployment (ScalingUp, ScalingDown, Running, Failed, or Unknown).
     */
    phase?: 'ScalingUp' | 'ScalingDown' | 'Running' | 'Failed' | 'Unknown';
    /**
     * readyReplicas is the number of ready replicas for this MachineDeployment. A machine is considered ready when Machine's Ready condition is true.
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
     * upToDateReplicas is the number of up-to-date replicas targeted by this deployment. A machine is considered up-to-date when Machine's UpToDate condition is true.
     */
    upToDateReplicas?: number;
  };
}
