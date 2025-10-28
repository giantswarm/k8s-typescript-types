/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * VSphereMachineTemplate is the Schema for the vspheremachinetemplates API
 *
 * Deprecated: This type will be removed in one of the next releases.
 */
export interface VSphereMachineTemplate {
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
  kind: 'VSphereMachineTemplate';
  metadata: metav1.ObjectMeta;
  /**
   * VSphereMachineTemplateSpec defines the desired state of VSphereMachineTemplate
   */
  spec?: {
    /**
     * VSphereMachineTemplateResource describes the data needed to create a VSphereMachine from a template
     */
    template: {
      /**
       * Standard object's metadata.
       * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       */
      metadata?: {
        /**
         * Annotations is an unstructured key value map stored with a resource that may be
         * set by external tools to store and retrieve arbitrary metadata. They are not
         * queryable and should be preserved when modifying objects.
         * More info: http://kubernetes.io/docs/user-guide/annotations
         */
        annotations?: {
          [k: string]: string;
        };
        /**
         * Map of string keys and values that can be used to organize and categorize
         * (scope and select) objects. May match selectors of replication controllers
         * and services.
         * More info: http://kubernetes.io/docs/user-guide/labels
         */
        labels?: {
          [k: string]: string;
        };
      };
      /**
       * Spec is the specification of the desired behavior of the machine.
       */
      spec: {
        /**
         * CloneMode specifies the type of clone operation.
         * The LinkedClone mode is only support for templates that have at least
         * one snapshot. If the template has no snapshots, then CloneMode defaults
         * to FullClone.
         * When LinkedClone mode is enabled the DiskGiB field is ignored as it is
         * not possible to expand disks of linked clones.
         * Defaults to LinkedClone, but fails gracefully to FullClone if the source
         * of the clone operation has no snapshots.
         */
        cloneMode?: string;
        /**
         * CustomVMXKeys is a dictionary of advanced VMX options that can be set on VM
         * Defaults to empty map
         */
        customVMXKeys?: {
          [k: string]: string;
        };
        /**
         * Datacenter is the name or inventory path of the datacenter in which the
         * virtual machine is created/located.
         */
        datacenter?: string;
        /**
         * Datastore is the name or inventory path of the datastore in which the
         * virtual machine is created/located.
         */
        datastore?: string;
        /**
         * DiskGiB is the size of a virtual machine's disk, in GiB.
         * Defaults to the eponymous property value in the template from which the
         * virtual machine is cloned.
         */
        diskGiB?: number;
        /**
         * FailureDomain is the failure domain unique identifier this Machine should be attached to, as defined in Cluster API.
         * For this infrastructure provider, the name is equivalent to the name of the VSphereDeploymentZone.
         */
        failureDomain?: string;
        /**
         * Folder is the name or inventory path of the folder in which the
         * virtual machine is created/located.
         */
        folder?: string;
        /**
         * MemoryMiB is the size of a virtual machine's memory, in MiB.
         * Defaults to the eponymous property value in the template from which the
         * virtual machine is cloned.
         */
        memoryMiB?: number;
        /**
         * Network is the network configuration for this machine's VM.
         */
        network: {
          /**
           * Devices is the list of network devices used by the virtual machine.
           *
           */
          devices: {
            /**
             * DeviceName may be used to explicitly assign a name to the network device
             * as it exists in the guest operating system.
             */
            deviceName?: string;
            /**
             * DHCP4 is a flag that indicates whether or not to use DHCP for IPv4
             * on this device.
             * If true then IPAddrs should not contain any IPv4 addresses.
             */
            dhcp4?: boolean;
            /**
             * DHCP6 is a flag that indicates whether or not to use DHCP for IPv6
             * on this device.
             * If true then IPAddrs should not contain any IPv6 addresses.
             */
            dhcp6?: boolean;
            /**
             * Gateway4 is the IPv4 gateway used by this device.
             * Required when DHCP4 is false.
             */
            gateway4?: string;
            /**
             * Gateway4 is the IPv4 gateway used by this device.
             * Required when DHCP6 is false.
             */
            gateway6?: string;
            /**
             * IPAddrs is a list of one or more IPv4 and/or IPv6 addresses to assign
             * to this device. IP addresses must also specify the segment length in
             * CIDR notation.
             * Required when DHCP4 and DHCP6 are both false.
             */
            ipAddrs?: string[];
            /**
             * MACAddr is the MAC address used by this device.
             * It is generally a good idea to omit this field and allow a MAC address
             * to be generated.
             * Please note that this value must use the VMware OUI to work with the
             * in-tree vSphere cloud provider.
             */
            macAddr?: string;
            /**
             * MTU is the device’s Maximum Transmission Unit size in bytes.
             */
            mtu?: number;
            /**
             * Nameservers is a list of IPv4 and/or IPv6 addresses used as DNS
             * nameservers.
             * Please note that Linux allows only three nameservers (https://linux.die.net/man/5/resolv.conf).
             */
            nameservers?: string[];
            /**
             * NetworkName is the name of the vSphere network to which the device
             * will be connected.
             */
            networkName: string;
            /**
             * Routes is a list of optional, static routes applied to the device.
             */
            routes?: {
              /**
               * Metric is the weight/priority of the route.
               */
              metric: number;
              /**
               * To is an IPv4 or IPv6 address.
               */
              to: string;
              /**
               * Via is an IPv4 or IPv6 address.
               */
              via: string;
            }[];
            /**
             * SearchDomains is a list of search domains used when resolving IP
             * addresses with DNS.
             */
            searchDomains?: string[];
          }[];
          /**
           * PreferredAPIServeCIDR is the preferred CIDR for the Kubernetes API
           * server endpoint on this machine
           */
          preferredAPIServerCidr?: string;
          /**
           * Routes is a list of optional, static routes applied to the virtual
           * machine.
           */
          routes?: {
            /**
             * Metric is the weight/priority of the route.
             */
            metric: number;
            /**
             * To is an IPv4 or IPv6 address.
             */
            to: string;
            /**
             * Via is an IPv4 or IPv6 address.
             */
            via: string;
          }[];
        };
        /**
         * NumCPUs is the number of virtual processors in a virtual machine.
         * Defaults to the eponymous property value in the template from which the
         * virtual machine is cloned.
         */
        numCPUs?: number;
        /**
         * NumCPUs is the number of cores among which to distribute CPUs in this
         * virtual machine.
         * Defaults to the eponymous property value in the template from which the
         * virtual machine is cloned.
         */
        numCoresPerSocket?: number;
        /**
         * ProviderID is the virtual machine's BIOS UUID formated as
         * vsphere://12345678-1234-1234-1234-123456789abc
         */
        providerID?: string;
        /**
         * ResourcePool is the name or inventory path of the resource pool in which
         * the virtual machine is created/located.
         */
        resourcePool?: string;
        /**
         * Server is the IP address or FQDN of the vSphere server on which
         * the virtual machine is created/located.
         */
        server?: string;
        /**
         * Snapshot is the name of the snapshot from which to create a linked clone.
         * This field is ignored if LinkedClone is not enabled.
         * Defaults to the source's current snapshot.
         */
        snapshot?: string;
        /**
         * StoragePolicyName of the storage policy to use with this
         * Virtual Machine
         */
        storagePolicyName?: string;
        /**
         * Template is the name or inventory path of the template used to clone
         * the virtual machine.
         */
        template: string;
        /**
         * Thumbprint is the colon-separated SHA-1 checksum of the given vCenter server's host certificate
         * When this is set to empty, this VirtualMachine would be created
         * without TLS certificate validation of the communication between Cluster API Provider vSphere
         * and the VMware vCenter server.
         */
        thumbprint?: string;
      };
    };
  };
}
