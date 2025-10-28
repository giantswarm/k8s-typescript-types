/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * Machine is the Schema for the machines API.
 */
export interface Machine {
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
  kind: 'Machine';
  metadata: metav1.ObjectMeta;
  /**
   * spec is the desired state of Machine.
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
     * NOTE: This field is considered only for computing v1beta2 conditions.
     * NOTE: In case readinessGates conditions start with the APIServer, ControllerManager, Scheduler prefix, and all those
     * readiness gates condition are reporting the same message, when computing the Machine's Ready condition those
     * readinessGates will be replaced by a single entry reporting "Control plane components: " + message.
     * This helps to improve readability of conditions bubbling up to the Machine's owner resource / to the Cluster).
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
     * version defines the desired Kubernetes version.
     * This field is meant to be optionally used by bootstrap providers.
     */
    version?: string;
  };
  /**
   * status is the observed state of Machine.
   */
  status?: {
    /**
     * addresses is a list of addresses assigned to the machine.
     * This field is copied from the infrastructure provider reference.
     */
    addresses?: {
      /**
       * address is the machine address.
       */
      address: string;
      /**
       * type is the machine address type, one of Hostname, ExternalIP, InternalIP, ExternalDNS or InternalDNS.
       */
      type: 'Hostname' | 'ExternalIP' | 'InternalIP' | 'ExternalDNS' | 'InternalDNS';
    }[];
    /**
     * bootstrapReady is the state of the bootstrap provider.
     */
    bootstrapReady?: boolean;
    /**
     * certificatesExpiryDate is the expiry date of the machine certificates.
     * This value is only set for control plane machines.
     */
    certificatesExpiryDate?: string;
    /**
     * conditions defines current service state of the Machine.
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
     * deletion contains information relating to removal of the Machine.
     * Only present when the Machine has a deletionTimestamp and drain or wait for volume detach started.
     */
    deletion?: {
      /**
       * nodeDrainStartTime is the time when the drain of the node started and is used to determine
       * if the NodeDrainTimeout is exceeded.
       * Only present when the Machine has a deletionTimestamp and draining the node had been started.
       */
      nodeDrainStartTime?: string;
      /**
       * waitForNodeVolumeDetachStartTime is the time when waiting for volume detachment started
       * and is used to determine if the NodeVolumeDetachTimeout is exceeded.
       * Detaching volumes from nodes is usually done by CSI implementations and the current state
       * is observed from the node's `.Status.VolumesAttached` field.
       * Only present when the Machine has a deletionTimestamp and waiting for volume detachments had been started.
       */
      waitForNodeVolumeDetachStartTime?: string;
    };
    /**
     * failureMessage will be set in the event that there is a terminal problem
     * reconciling the Machine and will contain a more verbose string suitable
     * for logging and human consumption.
     *
     * This field should not be set for transitive errors that a controller
     * faces that are expected to be fixed automatically over
     * time (like service outages), but instead indicate that something is
     * fundamentally wrong with the Machine's spec or the configuration of
     * the controller, and that manual intervention is required. Examples
     * of terminal errors would be invalid combinations of settings in the
     * spec, values that are unsupported by the controller, or the
     * responsible controller itself being critically misconfigured.
     *
     * Any transient errors that occur during the reconciliation of Machines
     * can be added as events to the Machine object and/or logged in the
     * controller's output.
     *
     * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
     */
    failureMessage?: string;
    /**
     * failureReason will be set in the event that there is a terminal problem
     * reconciling the Machine and will contain a succinct value suitable
     * for machine interpretation.
     *
     * This field should not be set for transitive errors that a controller
     * faces that are expected to be fixed automatically over
     * time (like service outages), but instead indicate that something is
     * fundamentally wrong with the Machine's spec or the configuration of
     * the controller, and that manual intervention is required. Examples
     * of terminal errors would be invalid combinations of settings in the
     * spec, values that are unsupported by the controller, or the
     * responsible controller itself being critically misconfigured.
     *
     * Any transient errors that occur during the reconciliation of Machines
     * can be added as events to the Machine object and/or logged in the
     * controller's output.
     *
     * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
     */
    failureReason?: string;
    /**
     * infrastructureReady is the state of the infrastructure provider.
     */
    infrastructureReady?: boolean;
    /**
     * lastUpdated identifies when the phase of the Machine last transitioned.
     */
    lastUpdated?: string;
    /**
     * nodeInfo is a set of ids/uuids to uniquely identify the node.
     * More info: https://kubernetes.io/docs/concepts/nodes/node/#info
     */
    nodeInfo?: {
      /**
       * The Architecture reported by the node
       */
      architecture: string;
      /**
       * Boot ID reported by the node.
       */
      bootID: string;
      /**
       * ContainerRuntime Version reported by the node through runtime remote API (e.g. containerd://1.4.2).
       */
      containerRuntimeVersion: string;
      /**
       * Kernel Version reported by the node from 'uname -r' (e.g. 3.16.0-0.bpo.4-amd64).
       */
      kernelVersion: string;
      /**
       * Deprecated: KubeProxy Version reported by the node.
       */
      kubeProxyVersion: string;
      /**
       * Kubelet Version reported by the node.
       */
      kubeletVersion: string;
      /**
       * MachineID reported by the node. For unique machine identification
       * in the cluster this field is preferred. Learn more from man(5)
       * machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html
       */
      machineID: string;
      /**
       * The Operating System reported by the node
       */
      operatingSystem: string;
      /**
       * OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)).
       */
      osImage: string;
      /**
       * Swap Info reported by the node.
       */
      swap?: {
        /**
         * Total amount of swap memory in bytes.
         */
        capacity?: number;
      };
      /**
       * SystemUUID reported by the node. For unique machine identification
       * MachineID is preferred. This field is specific to Red Hat hosts
       * https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/rhsm/uuid
       */
      systemUUID: string;
    };
    /**
     * nodeRef will point to the corresponding Node if it exists.
     */
    nodeRef?: {
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
     * observedGeneration is the latest generation observed by the controller.
     */
    observedGeneration?: number;
    /**
     * phase represents the current phase of machine actuation.
     */
    phase?: 'Pending' | 'Provisioning' | 'Provisioned' | 'Running' | 'Deleting' | 'Deleted' | 'Failed' | 'Unknown';
    /**
     * v1beta2 groups all the fields that will be added or modified in Machine's status with the V1Beta2 version.
     */
    v1beta2?: {
      /**
       * conditions represents the observations of a Machine's current state.
       * Known condition types are Available, Ready, UpToDate, BootstrapConfigReady, InfrastructureReady, NodeReady,
       * NodeHealthy, Deleting, Paused.
       * If a MachineHealthCheck is targeting this machine, also HealthCheckSucceeded, OwnerRemediated conditions are added.
       * Additionally control plane Machines controlled by KubeadmControlPlane will have following additional conditions:
       * APIServerPodHealthy, ControllerManagerPodHealthy, SchedulerPodHealthy, EtcdPodHealthy, EtcdMemberHealthy.
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
  };
}
