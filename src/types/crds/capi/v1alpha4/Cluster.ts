/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * Cluster is the Schema for the clusters API.
 *
 * Deprecated: This type will be removed in one of the next releases.
 */
export interface Cluster {
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
  kind: 'Cluster';
  metadata: metav1.ObjectMeta;
  /**
   * spec is the desired state of Cluster.
   */
  spec?: {
    /**
     * clusterNetwork is the cluster network configuration.
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
      host: string;
      /**
       * port is the port on which the API server is serving.
       */
      port: number;
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
       * controlPlane describes the cluster control plane.
       */
      controlPlane?: {
        /**
         * metadata is the metadata applied to the machines of the ControlPlane.
         * At runtime this metadata is merged with the corresponding metadata from the ClusterClass.
         *
         * This field is supported if and only if the control plane provider template
         * referenced in the ClusterClass is Machine based.
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
         * replicas is the number of control plane nodes.
         * If the value is nil, the ControlPlane object is created without the number of Replicas
         * and it's assumed that the control plane controller does not implement support for this field.
         * When specified against a control plane provider that lacks support for this field, this value will be ignored.
         */
        replicas?: number;
      };
      /**
       * rolloutAfter performs a rollout of the entire cluster one component at a time,
       * control plane first and then machine deployments.
       */
      rolloutAfter?: string;
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
         */
        machineDeployments?: {
          /**
           * class is the name of the MachineDeploymentClass used to create the set of worker nodes.
           * This should match one of the deployment classes defined in the ClusterClass object
           * mentioned in the `Cluster.Spec.Class` field.
           */
          class: string;
          /**
           * metadata is the metadata applied to the machines of the MachineDeployment.
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
           * name is the unique identifier for this MachineDeploymentTopology.
           * The value is used with other unique identifiers to create a MachineDeployment's Name
           * (e.g. cluster's name, etc). In case the name is greater than the allowed maximum length,
           * the values are hashed together.
           */
          name: string;
          /**
           * replicas is the number of worker nodes belonging to this set.
           * If the value is nil, the MachineDeployment is created without the number of Replicas (defaulting to zero)
           * and it's assumed that an external entity (like cluster autoscaler) is responsible for the management
           * of this value.
           */
          replicas?: number;
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
     * controlPlaneReady defines if the control plane is ready.
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
     */
    failureMessage?: string;
    /**
     * failureReason indicates that there is a fatal problem reconciling the
     * state, and will be set to a token value suitable for
     * programmatic interpretation.
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
     * E.g. Pending, Running, Terminating, Failed etc.
     */
    phase?: string;
  };
}
