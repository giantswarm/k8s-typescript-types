/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * AzureASOManagedMachinePool is the Schema for the azureasomanagedmachinepools API.
 */
export interface AzureASOManagedMachinePool {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: 'infrastructure.cluster.x-k8s.io/v1beta1';
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: 'AzureASOManagedMachinePool';
  metadata: metav1.ObjectMeta;
  /**
   * AzureASOManagedMachinePoolSpec defines the desired state of AzureASOManagedMachinePool.
   */
  spec?: {
    /**
     * ProviderIDList is the list of cloud provider IDs for the instances. It fulfills Cluster API's machine
     * pool infrastructure provider contract.
     */
    providerIDList?: string[];
    /**
     * Resources are embedded ASO resources to be managed by this resource.
     */
    resources?: {}[];
  };
  /**
   * AzureASOManagedMachinePoolStatus defines the observed state of AzureASOManagedMachinePool.
   */
  status?: {
    /**
     * Ready represents whether or not the infrastructure is ready to be used. It fulfills Cluster API's
     * machine pool infrastructure provider contract.
     */
    ready?: boolean;
    /**
     * Replicas is the current number of provisioned replicas. It fulfills Cluster API's machine pool
     * infrastructure provider contract.
     */
    replicas?: number;
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
