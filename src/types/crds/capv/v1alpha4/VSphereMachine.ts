/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * VSphereMachine is the Schema for the vspheremachines API
 *
 * Deprecated: This type will be removed in one of the next releases.
 */
export interface VSphereMachine {
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
  kind: 'VSphereMachine';
  metadata: metav1.ObjectMeta;
  /**
   * VSphereMachineSpec defines the desired state of VSphereMachine
   */
  spec?: {
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
  /**
   * VSphereMachineStatus defines the observed state of VSphereMachine
   */
  status?: {
    /**
     * Addresses contains the VSphere instance associated addresses.
     */
    addresses?: {
      /**
       * The machine address.
       */
      address: string;
      /**
       * Machine address type, one of Hostname, ExternalIP or InternalIP.
       */
      type: string;
    }[];
    /**
     * Conditions defines current service state of the VSphereMachine.
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
     * FailureMessage will be set in the event that there is a terminal problem
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
     */
    failureMessage?: string;
    /**
     * FailureReason will be set in the event that there is a terminal problem
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
     */
    failureReason?: string;
    /**
     * Network returns the network status for each of the machine's configured
     * network interfaces.
     */
    network?: {
      /**
       * Connected is a flag that indicates whether this network is currently
       * connected to the VM.
       */
      connected?: boolean;
      /**
       * IPAddrs is one or more IP addresses reported by vm-tools.
       */
      ipAddrs?: string[];
      /**
       * MACAddr is the MAC address of the network device.
       */
      macAddr: string;
      /**
       * NetworkName is the name of the network.
       */
      networkName?: string;
    }[];
    /**
     * Ready is true when the provider resource is ready.
     */
    ready?: boolean;
  };
}
