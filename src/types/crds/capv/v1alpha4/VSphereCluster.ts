/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * VSphereCluster is the Schema for the vsphereclusters API
 *
 * Deprecated: This type will be removed in one of the next releases.
 */
export interface VSphereCluster {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: 'infrastructure.cluster.x-k8s.io/v1alpha4';
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
   * VSphereClusterSpec defines the desired state of VSphereCluster
   */
  spec?: {
    /**
     * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
     */
    controlPlaneEndpoint?: {
      /**
       * The hostname on which the API server is serving.
       */
      host: string;
      /**
       * The port on which the API server is serving.
       */
      port: number;
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
   * VSphereClusterStatus defines the observed state of VSphereClusterSpec
   */
  status?: {
    /**
     * Conditions defines current service state of the VSphereCluster.
     */
    conditions?: {
      /**
       * Last time the condition transitioned from one status to another.
       * This should be when the underlying condition changed. If that is not known, then using the time when
       * the API field changed is acceptable.
       */
      lastTransitionTime?: string;
      /**
       * A human readable message indicating details about the transition.
       * This field may be empty.
       */
      message?: string;
      /**
       * The reason for the condition's last transition in CamelCase.
       * The specific API may choose whether or not this field is considered a guaranteed API.
       * This field may not be empty.
       */
      reason?: string;
      /**
       * Severity provides an explicit classification of Reason code, so the users or machines can immediately
       * understand the current situation and act accordingly.
       * The Severity field MUST be set only when Status=False.
       */
      severity?: string;
      /**
       * Status of the condition, one of True, False, Unknown.
       */
      status: string;
      /**
       * Type of condition in CamelCase or in foo.example.com/CamelCase.
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
         * Attributes is a free form map of attributes an infrastructure provider might use or require.
         */
        attributes?: {
          [k: string]: string;
        };
        /**
         * ControlPlane determines if this failure domain is suitable for use by control plane machines.
         */
        controlPlane?: boolean;
      };
    };
    ready?: boolean;
  };
}
