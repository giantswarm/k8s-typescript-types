/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * Cluster is the Schema for the clusters API.
 */
export interface Cluster {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: 'cluster.x-k8s.io/v1beta1';
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: 'Cluster';
  metadata: metav1.ObjectMeta;
  /**
   * spec is the desired state of Cluster.
   */
  spec?: {
    /**
     * availabilityGates specifies additional conditions to include when evaluating Cluster Available condition.
     *
     * If this field is not defined and the Cluster implements a managed topology, availabilityGates
     * from the corresponding ClusterClass will be used, if any.
     *
     * NOTE: this field is considered only for computing v1beta2 conditions.
     *
     * @maxItems 32
     */
    availabilityGates?: {
      /**
       * conditionType refers to a condition with matching type in the Cluster's condition list.
       * If the conditions doesn't exist, it will be treated as unknown.
       * Note: Both Cluster API conditions or conditions added by 3rd party controllers can be used as availability gates.
       */
      conditionType: string;
      /**
       * polarity of the conditionType specified in this availabilityGate.
       * Valid values are Positive, Negative and omitted.
       * When omitted, the default behaviour will be Positive.
       * A positive polarity means that the condition should report a true status under normal conditions.
       * A negative polarity means that the condition should report a false status under normal conditions.
       */
      polarity?: 'Positive' | 'Negative';
    }[];
    /**
     * clusterNetwork represents the cluster network configuration.
     */
    clusterNetwork?: {
      /**
       * apiServerPort specifies the port the API Server should bind to.
       * Defaults to 6443.
       */
      apiServerPort?: number;
      /**
       * pods is the network ranges from which Pod networks are allocated.
       */
      pods?: {
        /**
         * cidrBlocks is a list of CIDR blocks.
         *
         * @maxItems 100
         */
        cidrBlocks: string[];
      };
      /**
       * serviceDomain is the domain name for services.
       */
      serviceDomain?: string;
      /**
       * services is the network ranges from which service VIPs are allocated.
       */
      services?: {
        /**
         * cidrBlocks is a list of CIDR blocks.
         *
         * @maxItems 100
         */
        cidrBlocks: string[];
      };
    };
    /**
     * controlPlaneEndpoint represents the endpoint used to communicate with the control plane.
     */
    controlPlaneEndpoint?: {
      /**
       * host is the hostname on which the API server is serving.
       */
      host?: string;
      /**
       * port is the port on which the API server is serving.
       */
      port?: number;
    };
    /**
     * controlPlaneRef is an optional reference to a provider-specific resource that holds
     * the details for provisioning the Control Plane for a Cluster.
     */
    controlPlaneRef?: {
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
     * infrastructureRef is a reference to a provider-specific resource that holds the details
     * for provisioning infrastructure for a cluster in said provider.
     */
    infrastructureRef?: {
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
     * paused can be used to prevent controllers from processing the Cluster and all its associated objects.
     */
    paused?: boolean;
    /**
     * topology encapsulates the topology for the cluster.
     * NOTE: It is required to enable the ClusterTopology
     * feature gate flag to activate managed topologies support;
     * this feature is highly experimental, and parts of it might still be not implemented.
     */
    topology?: {
      /**
       * class is the name of the ClusterClass object to create the topology.
       */
      class: string;
      /**
       * classNamespace is the namespace of the ClusterClass that should be used for the topology.
       * If classNamespace is empty or not set, it is defaulted to the namespace of the Cluster object.
       * classNamespace must be a valid namespace name and because of that be at most 63 characters in length
       * and it must consist only of lower case alphanumeric characters or hyphens (-), and must start
       * and end with an alphanumeric character.
       */
      classNamespace?: string;
      /**
       * controlPlane describes the cluster control plane.
       */
      controlPlane?: {
        /**
         * machineHealthCheck allows to enable, disable and override
         * the MachineHealthCheck configuration in the ClusterClass for this control plane.
         */
        machineHealthCheck?: {
          /**
           * enable controls if a MachineHealthCheck should be created for the target machines.
           *
           * If false: No MachineHealthCheck will be created.
           *
           * If not set(default): A MachineHealthCheck will be created if it is defined here or
           *  in the associated ClusterClass. If no MachineHealthCheck is defined then none will be created.
           *
           * If true: A MachineHealthCheck is guaranteed to be created. Cluster validation will
           * block if `enable` is true and no MachineHealthCheck definition is available.
           */
          enable?: boolean;
          /**
           * maxUnhealthy specifies the maximum number of unhealthy machines allowed.
           * Any further remediation is only allowed if at most "maxUnhealthy" machines selected by
           * "selector" are not healthy.
           */
          maxUnhealthy?: number | string;
          /**
           * nodeStartupTimeout allows to set the maximum time for MachineHealthCheck
           * to consider a Machine unhealthy if a corresponding Node isn't associated
           * through a `Spec.ProviderID` field.
           *
           * The duration set in this field is compared to the greatest of:
           * - Cluster's infrastructure ready condition timestamp (if and when available)
           * - Control Plane's initialized condition timestamp (if and when available)
           * - Machine's infrastructure ready condition timestamp (if and when available)
           * - Machine's metadata creation timestamp
           *
           * Defaults to 10 minutes.
           * If you wish to disable this feature, set the value explicitly to 0.
           */
          nodeStartupTimeout?: string;
          /**
           * remediationTemplate is a reference to a remediation template
           * provided by an infrastructure provider.
           *
           * This field is completely optional, when filled, the MachineHealthCheck controller
           * creates a new object from the template referenced and hands off remediation of the machine to
           * a controller that lives outside of Cluster API.
           */
          remediationTemplate?: {
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
           * unhealthyConditions contains a list of the conditions that determine
           * whether a node is considered unhealthy. The conditions are combined in a
           * logical OR, i.e. if any of the conditions is met, the node is unhealthy.
           *
           * @maxItems 100
           */
          unhealthyConditions?: {
            /**
             * status of the condition, one of True, False, Unknown.
             */
            status: string;
            /**
             * timeout is the duration that a node must be in a given status for,
             * after which the node is considered unhealthy.
             * For example, with a value of "1h", the node must match the status
             * for at least 1 hour before being considered unhealthy.
             */
            timeout: string;
            /**
             * type of Node condition
             */
            type: string;
          }[];
          /**
           * unhealthyRange specifies the range of unhealthy machines allowed.
           * Any further remediation is only allowed if the number of machines selected by "selector" as not healthy
           * is within the range of "unhealthyRange". Takes precedence over maxUnhealthy.
           * Eg. "[3-5]" - This means that remediation will be allowed only when:
           * (a) there are at least 3 unhealthy machines (and)
           * (b) there are at most 5 unhealthy machines
           */
          unhealthyRange?: string;
        };
        /**
         * metadata is the metadata applied to the ControlPlane and the Machines of the ControlPlane
         * if the ControlPlaneTemplate referenced by the ClusterClass is machine based. If not, it
         * is applied only to the ControlPlane.
         * At runtime this metadata is merged with the corresponding metadata from the ClusterClass.
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
         * nodeDeletionTimeout defines how long the controller will attempt to delete the Node that the Machine
         * hosts after the Machine is marked for deletion. A duration of 0 will retry deletion indefinitely.
         * Defaults to 10 seconds.
         */
        nodeDeletionTimeout?: string;
        /**
         * nodeDrainTimeout is the total amount of time that the controller will spend on draining a node.
         * The default value is 0, meaning that the node can be drained without any time limitations.
         * NOTE: NodeDrainTimeout is different from `kubectl drain --timeout`
         */
        nodeDrainTimeout?: string;
        /**
         * nodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes
         * to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations.
         */
        nodeVolumeDetachTimeout?: string;
        /**
         * readinessGates specifies additional conditions to include when evaluating Machine Ready condition.
         *
         * This field can be used e.g. to instruct the machine controller to include in the computation for Machine's ready
         * computation a condition, managed by an external controllers, reporting the status of special software/hardware installed on the Machine.
         *
         * If this field is not defined, readinessGates from the corresponding ControlPlaneClass will be used, if any.
         *
         * NOTE: This field is considered only for computing v1beta2 conditions.
         * NOTE: Specific control plane provider implementations might automatically extend the list of readinessGates;
         * e.g. the kubeadm control provider adds ReadinessGates for the APIServerPodHealthy, SchedulerPodHealthy conditions, etc.
         *
         * @maxItems 32
         */
        readinessGates?: {
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
        }[];
        /**
         * replicas is the number of control plane nodes.
         * If the value is nil, the ControlPlane object is created without the number of Replicas
         * and it's assumed that the control plane controller does not implement support for this field.
         * When specified against a control plane provider that lacks support for this field, this value will be ignored.
         */
        replicas?: number;
        /**
         * variables can be used to customize the ControlPlane through patches.
         */
        variables?: {
          /**
           * overrides can be used to override Cluster level variables.
           *
           * @maxItems 1000
           */
          overrides?: {
            /**
             * definitionFrom specifies where the definition of this Variable is from.
             *
             * Deprecated: This field is deprecated, must not be set anymore and is going to be removed in the next apiVersion.
             */
            definitionFrom?: string;
            /**
             * name of the variable.
             */
            name: string;
            /**
             * value of the variable.
             * Note: the value will be validated against the schema of the corresponding ClusterClassVariable
             * from the ClusterClass.
             * Note: We have to use apiextensionsv1.JSON instead of a custom JSON type, because controller-tools has a
             * hard-coded schema for apiextensionsv1.JSON which cannot be produced by another type via controller-tools,
             * i.e. it is not possible to have no type field.
             * Ref: https://github.com/kubernetes-sigs/controller-tools/blob/d0e03a142d0ecdd5491593e941ee1d6b5d91dba6/pkg/crd/known_types.go#L106-L111
             */
            value: {
              [k: string]: unknown;
            };
          }[];
        };
      };
      /**
       * rolloutAfter performs a rollout of the entire cluster one component at a time,
       * control plane first and then machine deployments.
       *
       * Deprecated: This field has no function and is going to be removed in the next apiVersion.
       */
      rolloutAfter?: string;
      /**
       * variables can be used to customize the Cluster through
       * patches. They must comply to the corresponding
       * VariableClasses defined in the ClusterClass.
       *
       * @maxItems 1000
       */
      variables?: {
        /**
         * definitionFrom specifies where the definition of this Variable is from.
         *
         * Deprecated: This field is deprecated, must not be set anymore and is going to be removed in the next apiVersion.
         */
        definitionFrom?: string;
        /**
         * name of the variable.
         */
        name: string;
        /**
         * value of the variable.
         * Note: the value will be validated against the schema of the corresponding ClusterClassVariable
         * from the ClusterClass.
         * Note: We have to use apiextensionsv1.JSON instead of a custom JSON type, because controller-tools has a
         * hard-coded schema for apiextensionsv1.JSON which cannot be produced by another type via controller-tools,
         * i.e. it is not possible to have no type field.
         * Ref: https://github.com/kubernetes-sigs/controller-tools/blob/d0e03a142d0ecdd5491593e941ee1d6b5d91dba6/pkg/crd/known_types.go#L106-L111
         */
        value: {
          [k: string]: unknown;
        };
      }[];
      /**
       * version is the Kubernetes version of the cluster.
       */
      version: string;
      /**
       * workers encapsulates the different constructs that form the worker nodes
       * for the cluster.
       */
      workers?: {
        /**
         * machineDeployments is a list of machine deployments in the cluster.
         *
         * @maxItems 2000
         */
        machineDeployments?: {
          /**
           * class is the name of the MachineDeploymentClass used to create the set of worker nodes.
           * This should match one of the deployment classes defined in the ClusterClass object
           * mentioned in the `Cluster.Spec.Class` field.
           */
          class: string;
          /**
           * failureDomain is the failure domain the machines will be created in.
           * Must match a key in the FailureDomains map stored on the cluster object.
           */
          failureDomain?: string;
          /**
           * machineHealthCheck allows to enable, disable and override
           * the MachineHealthCheck configuration in the ClusterClass for this MachineDeployment.
           */
          machineHealthCheck?: {
            /**
             * enable controls if a MachineHealthCheck should be created for the target machines.
             *
             * If false: No MachineHealthCheck will be created.
             *
             * If not set(default): A MachineHealthCheck will be created if it is defined here or
             *  in the associated ClusterClass. If no MachineHealthCheck is defined then none will be created.
             *
             * If true: A MachineHealthCheck is guaranteed to be created. Cluster validation will
             * block if `enable` is true and no MachineHealthCheck definition is available.
             */
            enable?: boolean;
            /**
             * maxUnhealthy specifies the maximum number of unhealthy machines allowed.
             * Any further remediation is only allowed if at most "maxUnhealthy" machines selected by
             * "selector" are not healthy.
             */
            maxUnhealthy?: number | string;
            /**
             * nodeStartupTimeout allows to set the maximum time for MachineHealthCheck
             * to consider a Machine unhealthy if a corresponding Node isn't associated
             * through a `Spec.ProviderID` field.
             *
             * The duration set in this field is compared to the greatest of:
             * - Cluster's infrastructure ready condition timestamp (if and when available)
             * - Control Plane's initialized condition timestamp (if and when available)
             * - Machine's infrastructure ready condition timestamp (if and when available)
             * - Machine's metadata creation timestamp
             *
             * Defaults to 10 minutes.
             * If you wish to disable this feature, set the value explicitly to 0.
             */
            nodeStartupTimeout?: string;
            /**
             * remediationTemplate is a reference to a remediation template
             * provided by an infrastructure provider.
             *
             * This field is completely optional, when filled, the MachineHealthCheck controller
             * creates a new object from the template referenced and hands off remediation of the machine to
             * a controller that lives outside of Cluster API.
             */
            remediationTemplate?: {
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
             * unhealthyConditions contains a list of the conditions that determine
             * whether a node is considered unhealthy. The conditions are combined in a
             * logical OR, i.e. if any of the conditions is met, the node is unhealthy.
             *
             * @maxItems 100
             */
            unhealthyConditions?: {
              /**
               * status of the condition, one of True, False, Unknown.
               */
              status: string;
              /**
               * timeout is the duration that a node must be in a given status for,
               * after which the node is considered unhealthy.
               * For example, with a value of "1h", the node must match the status
               * for at least 1 hour before being considered unhealthy.
               */
              timeout: string;
              /**
               * type of Node condition
               */
              type: string;
            }[];
            /**
             * unhealthyRange specifies the range of unhealthy machines allowed.
             * Any further remediation is only allowed if the number of machines selected by "selector" as not healthy
             * is within the range of "unhealthyRange". Takes precedence over maxUnhealthy.
             * Eg. "[3-5]" - This means that remediation will be allowed only when:
             * (a) there are at least 3 unhealthy machines (and)
             * (b) there are at most 5 unhealthy machines
             */
            unhealthyRange?: string;
          };
          /**
           * metadata is the metadata applied to the MachineDeployment and the machines of the MachineDeployment.
           * At runtime this metadata is merged with the corresponding metadata from the ClusterClass.
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
           * minReadySeconds is the minimum number of seconds for which a newly created machine should
           * be ready.
           * Defaults to 0 (machine will be considered available as soon as it
           * is ready)
           */
          minReadySeconds?: number;
          /**
           * name is the unique identifier for this MachineDeploymentTopology.
           * The value is used with other unique identifiers to create a MachineDeployment's Name
           * (e.g. cluster's name, etc). In case the name is greater than the allowed maximum length,
           * the values are hashed together.
           */
          name: string;
          /**
           * nodeDeletionTimeout defines how long the controller will attempt to delete the Node that the Machine
           * hosts after the Machine is marked for deletion. A duration of 0 will retry deletion indefinitely.
           * Defaults to 10 seconds.
           */
          nodeDeletionTimeout?: string;
          /**
           * nodeDrainTimeout is the total amount of time that the controller will spend on draining a node.
           * The default value is 0, meaning that the node can be drained without any time limitations.
           * NOTE: NodeDrainTimeout is different from `kubectl drain --timeout`
           */
          nodeDrainTimeout?: string;
          /**
           * nodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes
           * to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations.
           */
          nodeVolumeDetachTimeout?: string;
          /**
           * readinessGates specifies additional conditions to include when evaluating Machine Ready condition.
           *
           * This field can be used e.g. to instruct the machine controller to include in the computation for Machine's ready
           * computation a condition, managed by an external controllers, reporting the status of special software/hardware installed on the Machine.
           *
           * If this field is not defined, readinessGates from the corresponding MachineDeploymentClass will be used, if any.
           *
           * NOTE: This field is considered only for computing v1beta2 conditions.
           *
           * @maxItems 32
           */
          readinessGates?: {
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
          }[];
          /**
           * replicas is the number of worker nodes belonging to this set.
           * If the value is nil, the MachineDeployment is created without the number of Replicas (defaulting to 1)
           * and it's assumed that an external entity (like cluster autoscaler) is responsible for the management
           * of this value.
           */
          replicas?: number;
          /**
           * strategy is the deployment strategy to use to replace existing machines with
           * new ones.
           */
          strategy?: {
            /**
             * remediation controls the strategy of remediating unhealthy machines
             * and how remediating operations should occur during the lifecycle of the dependant MachineSets.
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
             * type of deployment. Allowed values are RollingUpdate and OnDelete.
             * The default is RollingUpdate.
             */
            type?: 'RollingUpdate' | 'OnDelete';
          };
          /**
           * variables can be used to customize the MachineDeployment through patches.
           */
          variables?: {
            /**
             * overrides can be used to override Cluster level variables.
             *
             * @maxItems 1000
             */
            overrides?: {
              /**
               * definitionFrom specifies where the definition of this Variable is from.
               *
               * Deprecated: This field is deprecated, must not be set anymore and is going to be removed in the next apiVersion.
               */
              definitionFrom?: string;
              /**
               * name of the variable.
               */
              name: string;
              /**
               * value of the variable.
               * Note: the value will be validated against the schema of the corresponding ClusterClassVariable
               * from the ClusterClass.
               * Note: We have to use apiextensionsv1.JSON instead of a custom JSON type, because controller-tools has a
               * hard-coded schema for apiextensionsv1.JSON which cannot be produced by another type via controller-tools,
               * i.e. it is not possible to have no type field.
               * Ref: https://github.com/kubernetes-sigs/controller-tools/blob/d0e03a142d0ecdd5491593e941ee1d6b5d91dba6/pkg/crd/known_types.go#L106-L111
               */
              value: {
                [k: string]: unknown;
              };
            }[];
          };
        }[];
        /**
         * machinePools is a list of machine pools in the cluster.
         *
         * @maxItems 2000
         */
        machinePools?: {
          /**
           * class is the name of the MachinePoolClass used to create the pool of worker nodes.
           * This should match one of the deployment classes defined in the ClusterClass object
           * mentioned in the `Cluster.Spec.Class` field.
           */
          class: string;
          /**
           * failureDomains is the list of failure domains the machine pool will be created in.
           * Must match a key in the FailureDomains map stored on the cluster object.
           *
           * @maxItems 100
           */
          failureDomains?: string[];
          /**
           * metadata is the metadata applied to the MachinePool.
           * At runtime this metadata is merged with the corresponding metadata from the ClusterClass.
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
           * minReadySeconds is the minimum number of seconds for which a newly created machine pool should
           * be ready.
           * Defaults to 0 (machine will be considered available as soon as it
           * is ready)
           */
          minReadySeconds?: number;
          /**
           * name is the unique identifier for this MachinePoolTopology.
           * The value is used with other unique identifiers to create a MachinePool's Name
           * (e.g. cluster's name, etc). In case the name is greater than the allowed maximum length,
           * the values are hashed together.
           */
          name: string;
          /**
           * nodeDeletionTimeout defines how long the controller will attempt to delete the Node that the MachinePool
           * hosts after the MachinePool is marked for deletion. A duration of 0 will retry deletion indefinitely.
           * Defaults to 10 seconds.
           */
          nodeDeletionTimeout?: string;
          /**
           * nodeDrainTimeout is the total amount of time that the controller will spend on draining a node.
           * The default value is 0, meaning that the node can be drained without any time limitations.
           * NOTE: NodeDrainTimeout is different from `kubectl drain --timeout`
           */
          nodeDrainTimeout?: string;
          /**
           * nodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes
           * to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations.
           */
          nodeVolumeDetachTimeout?: string;
          /**
           * replicas is the number of nodes belonging to this pool.
           * If the value is nil, the MachinePool is created without the number of Replicas (defaulting to 1)
           * and it's assumed that an external entity (like cluster autoscaler) is responsible for the management
           * of this value.
           */
          replicas?: number;
          /**
           * variables can be used to customize the MachinePool through patches.
           */
          variables?: {
            /**
             * overrides can be used to override Cluster level variables.
             *
             * @maxItems 1000
             */
            overrides?: {
              /**
               * definitionFrom specifies where the definition of this Variable is from.
               *
               * Deprecated: This field is deprecated, must not be set anymore and is going to be removed in the next apiVersion.
               */
              definitionFrom?: string;
              /**
               * name of the variable.
               */
              name: string;
              /**
               * value of the variable.
               * Note: the value will be validated against the schema of the corresponding ClusterClassVariable
               * from the ClusterClass.
               * Note: We have to use apiextensionsv1.JSON instead of a custom JSON type, because controller-tools has a
               * hard-coded schema for apiextensionsv1.JSON which cannot be produced by another type via controller-tools,
               * i.e. it is not possible to have no type field.
               * Ref: https://github.com/kubernetes-sigs/controller-tools/blob/d0e03a142d0ecdd5491593e941ee1d6b5d91dba6/pkg/crd/known_types.go#L106-L111
               */
              value: {
                [k: string]: unknown;
              };
            }[];
          };
        }[];
      };
    };
  };
  /**
   * status is the observed state of Cluster.
   */
  status?: {
    /**
     * conditions defines current service state of the cluster.
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
     * controlPlaneReady denotes if the control plane became ready during initial provisioning
     * to receive requests.
     * NOTE: this field is part of the Cluster API contract and it is used to orchestrate provisioning.
     * The value of this field is never updated after provisioning is completed. Please use conditions
     * to check the operational state of the control plane.
     */
    controlPlaneReady?: boolean;
    /**
     * failureDomains is a slice of failure domain objects synced from the infrastructure provider.
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
    /**
     * failureMessage indicates that there is a fatal problem reconciling the
     * state, and will be set to a descriptive error message.
     *
     * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
     */
    failureMessage?: string;
    /**
     * failureReason indicates that there is a fatal problem reconciling the
     * state, and will be set to a token value suitable for
     * programmatic interpretation.
     *
     * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
     */
    failureReason?: string;
    /**
     * infrastructureReady is the state of the infrastructure provider.
     */
    infrastructureReady?: boolean;
    /**
     * observedGeneration is the latest generation observed by the controller.
     */
    observedGeneration?: number;
    /**
     * phase represents the current phase of cluster actuation.
     */
    phase?: 'Pending' | 'Provisioning' | 'Provisioned' | 'Deleting' | 'Failed' | 'Unknown';
    /**
     * v1beta2 groups all the fields that will be added or modified in Cluster's status with the V1Beta2 version.
     */
    v1beta2?: {
      /**
       * conditions represents the observations of a Cluster's current state.
       * Known condition types are Available, InfrastructureReady, ControlPlaneInitialized, ControlPlaneAvailable, WorkersAvailable, MachinesReady
       * MachinesUpToDate, RemoteConnectionProbe, ScalingUp, ScalingDown, Remediating, Deleting, Paused.
       * Additionally, a TopologyReconciled condition will be added in case the Cluster is referencing a ClusterClass / defining a managed Topology.
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
       * controlPlane groups all the observations about Cluster's ControlPlane current state.
       */
      controlPlane?: {
        /**
         * availableReplicas is the total number of available control plane machines in this cluster. A machine is considered available when Machine's Available condition is true.
         */
        availableReplicas?: number;
        /**
         * desiredReplicas is the total number of desired control plane machines in this cluster.
         */
        desiredReplicas?: number;
        /**
         * readyReplicas is the total number of ready control plane machines in this cluster. A machine is considered ready when Machine's Ready condition is true.
         */
        readyReplicas?: number;
        /**
         * replicas is the total number of control plane machines in this cluster.
         * NOTE: replicas also includes machines still being provisioned or being deleted.
         */
        replicas?: number;
        /**
         * upToDateReplicas is the number of up-to-date control plane machines in this cluster. A machine is considered up-to-date when Machine's UpToDate condition is true.
         */
        upToDateReplicas?: number;
      };
      /**
       * workers groups all the observations about Cluster's Workers current state.
       */
      workers?: {
        /**
         * availableReplicas is the total number of available worker machines in this cluster. A machine is considered available when Machine's Available condition is true.
         */
        availableReplicas?: number;
        /**
         * desiredReplicas is the total number of desired worker machines in this cluster.
         */
        desiredReplicas?: number;
        /**
         * readyReplicas is the total number of ready worker machines in this cluster. A machine is considered ready when Machine's Ready condition is true.
         */
        readyReplicas?: number;
        /**
         * replicas is the total number of worker machines in this cluster.
         * NOTE: replicas also includes machines still being provisioned or being deleted.
         */
        replicas?: number;
        /**
         * upToDateReplicas is the number of up-to-date worker machines in this cluster. A machine is considered up-to-date when Machine's UpToDate condition is true.
         */
        upToDateReplicas?: number;
      };
    };
  };
}
