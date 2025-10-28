/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * AWSManagedCluster is the Schema for the awsmanagedclusters API
 */
export interface AWSManagedCluster {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: 'infrastructure.cluster.x-k8s.io/v1beta2';
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: 'AWSManagedCluster';
  metadata: metav1.ObjectMeta;
  /**
   * AWSManagedClusterSpec defines the desired state of AWSManagedCluster
   */
  spec?: {
    /**
     * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
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
  };
  /**
   * AWSManagedClusterStatus defines the observed state of AWSManagedCluster
   */
  status?: {
    /**
     * Conditions defines current service state of the AWSManagedCluster.
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
     * FailureDomains specifies a list fo available availability zones that can be used
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
     * Ready is when the AWSManagedControlPlane has a API server URL.
     */
    ready?: boolean;
  };
}
