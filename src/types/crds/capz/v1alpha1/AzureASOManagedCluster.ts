/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * AzureASOManagedCluster is the Schema for the azureasomanagedclusters API.
 */
export interface AzureASOManagedCluster {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: 'infrastructure.cluster.x-k8s.io/v1alpha1';
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: 'AzureASOManagedCluster';
  metadata: metav1.ObjectMeta;
  /**
   * AzureASOManagedClusterSpec defines the desired state of AzureASOManagedCluster.
   */
  spec?: {
    /**
     * ControlPlaneEndpoint is the location of the API server within the control plane. CAPZ manages this field
     * and it should not be set by the user. It fulfills Cluster API's cluster infrastructure provider contract.
     * Because this field is programmatically set by CAPZ after resource creation, we define it as +optional
     * in the API schema to permit resource admission.
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
     * Resources are embedded ASO resources to be managed by this resource.
     */
    resources?: {}[];
  };
  /**
   * AzureASOManagedClusterStatus defines the observed state of AzureASOManagedCluster.
   */
  status?: {
    /**
     * Ready represents whether or not the cluster has been provisioned and is ready. It fulfills Cluster
     * API's cluster infrastructure provider contract.
     */
    ready?: boolean;
    /**
     * Items: ResourceStatus represents the status of a resource.
     */
    resources?: {
      ready: boolean;
      /**
       * StatusResource is a handle to a resource.
       */
      resource: {
        group: string;
        kind: string;
        name: string;
        version: string;
      };
    }[];
  };
}
