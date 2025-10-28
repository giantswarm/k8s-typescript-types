/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * VSphereMachine is the Schema for the vspheremachines API.
 */
export interface VSphereMachine {
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
  kind: 'VSphereMachine';
  metadata: metav1.ObjectMeta;
  /**
   * VSphereMachineSpec defines the desired state of VSphereMachine.
   */
  spec?: {
    /**
     * AdditionalDisksGiB holds the sizes of additional disks of the virtual machine, in GiB
     * Defaults to the eponymous property value in the template from which the
     * virtual machine is cloned.
     */
    additionalDisksGiB?: number[];
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
     * DataDisks are additional disks to add to the VM that are not part of the VM's OVA template.
     *
     * @maxItems 29
     */
    dataDisks?: {
      /**
       * Name is used to identify the disk definition. Name is required and needs to be unique so that it can be used to
       * clearly identify purpose of the disk.
       */
      name: string;
      /**
       * ProvisioningMode specifies the provisioning type to be used by this vSphere data disk.
       * If not set, the setting will be provided by the default storage policy.
       */
      provisioningMode?: 'Thin' | 'Thick' | 'EagerlyZeroed';
      /**
       * SizeGiB is the size of the disk in GiB.
       */
      sizeGiB: number;
    }[];
    /**
     * Datacenter is the name, inventory path, managed object reference or the managed
     * object ID of the datacenter in which the virtual machine is created/located.
     * Defaults to * which selects the default datacenter.
     */
    datacenter?: string;
    /**
     * Datastore is the name, inventory path, managed object reference or the managed
     * object ID of the datastore in which the virtual machine is created/located.
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
     * Folder is the name, inventory path, managed object reference or the managed
     * object ID of the folder in which the virtual machine is created/located.
     */
    folder?: string;
    /**
     * GuestSoftPowerOffTimeout sets the wait timeout for shutdown in the VM guest.
     * The VM will be powered off forcibly after the timeout if the VM is still
     * up and running when the PowerOffMode is set to trySoft.
     *
     * This parameter only applies when the PowerOffMode is set to trySoft.
     *
     * If omitted, the timeout defaults to 5 minutes.
     */
    guestSoftPowerOffTimeout?: string;
    /**
     * HardwareVersion is the hardware version of the virtual machine.
     * Defaults to the eponymous property value in the template from which the
     * virtual machine is cloned.
     * Check the compatibility with the ESXi version before setting the value.
     */
    hardwareVersion?: string;
    /**
     * MemoryMiB is the size of a virtual machine's memory, in MiB.
     * Defaults to the eponymous property value in the template from which the
     * virtual machine is cloned.
     */
    memoryMiB?: number;
    /**
     * NamingStrategy allows configuring the naming strategy used when calculating the name of the VSphereVM.
     */
    namingStrategy?: {
      /**
       * Template defines the template to use for generating the name of the VSphereVM object.
       * If not defined, it will fall back to `{{ .machine.name }}`.
       * The templating has the following data available:
       * * `.machine.name`: The name of the Machine object.
       * The templating also has the following funcs available:
       * * `trimSuffix`: same as strings.TrimSuffix
       * * `trunc`: truncates a string, e.g. `trunc 2 "hello"` or `trunc -2 "hello"`
       * Notes:
       * * While the template offers some flexibility, we would like the name to link to the Machine name
       *   to ensure better user experience when troubleshooting
       * * Generated names must be valid Kubernetes names as they are used to create a VSphereVM object
       *   and usually also as the name of the Node object.
       * * Names are automatically truncated at 63 characters. Please note that this can lead to name conflicts,
       *   so we highly recommend to use a template which leads to a name shorter than 63 characters.
       */
      template?: string;
    };
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
         * AddressesFromPools is a list of IPAddressPools that should be assigned
         * to IPAddressClaims. The machine's cloud-init metadata will be populated
         * with IPAddresses fulfilled by an IPAM provider.
         */
        addressesFromPools?: {
          /**
           * APIGroup is the group for the resource being referenced.
           * If APIGroup is not specified, the specified Kind must be in the core API group.
           * For any other third-party types, APIGroup is required.
           */
          apiGroup?: string;
          /**
           * Kind is the type of resource being referenced
           */
          kind: string;
          /**
           * Name is the name of resource being referenced
           */
          name: string;
        }[];
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
         * DHCP4Overrides allows for the control over several DHCP behaviors.
         * Overrides will only be applied when the corresponding DHCP flag is set.
         * Only configured values will be sent, omitted values will default to
         * distribution defaults.
         * Dependent on support in the network stack for your distribution.
         * For more information see the netplan reference (https://netplan.io/reference#dhcp-overrides)
         */
        dhcp4Overrides?: {
          /**
           * Hostname is the name which will be sent to the DHCP server instead of
           * the machine's hostname.
           */
          hostname?: string;
          /**
           * RouteMetric is used to prioritize routes for devices. A lower metric for
           * an interface will have a higher priority.
           */
          routeMetric?: number;
          /**
           * SendHostname when `true`, the hostname of the machine will be sent to the
           * DHCP server.
           */
          sendHostname?: boolean;
          /**
           * UseDNS when `true`, the DNS servers in the DHCP server will be used and
           * take precedence.
           */
          useDNS?: boolean;
          /**
           * UseDomains can take the values `true`, `false`, or `route`. When `true`,
           * the domain name from the DHCP server will be used as the DNS search
           * domain for this device. When `route`, the domain name from the DHCP
           * response will be used for routing DNS only, not for searching.
           */
          useDomains?: string;
          /**
           * UseHostname when `true`, the hostname from the DHCP server will be set
           * as the transient hostname of the machine.
           */
          useHostname?: boolean;
          /**
           * UseMTU when `true`, the MTU from the DHCP server will be set as the
           * MTU of the device.
           */
          useMTU?: boolean;
          /**
           * UseNTP when `true`, the NTP servers from the DHCP server will be used
           * by systemd-timesyncd and take precedence.
           */
          useNTP?: boolean;
          /**
           * UseRoutes when `true`, the routes from the DHCP server will be installed
           * in the routing table.
           */
          useRoutes?: string;
        };
        /**
         * DHCP6 is a flag that indicates whether or not to use DHCP for IPv6
         * on this device.
         * If true then IPAddrs should not contain any IPv6 addresses.
         */
        dhcp6?: boolean;
        /**
         * DHCP6Overrides allows for the control over several DHCP behaviors.
         * Overrides will only be applied when the corresponding DHCP flag is set.
         * Only configured values will be sent, omitted values will default to
         * distribution defaults.
         * Dependent on support in the network stack for your distribution.
         * For more information see the netplan reference (https://netplan.io/reference#dhcp-overrides)
         */
        dhcp6Overrides?: {
          /**
           * Hostname is the name which will be sent to the DHCP server instead of
           * the machine's hostname.
           */
          hostname?: string;
          /**
           * RouteMetric is used to prioritize routes for devices. A lower metric for
           * an interface will have a higher priority.
           */
          routeMetric?: number;
          /**
           * SendHostname when `true`, the hostname of the machine will be sent to the
           * DHCP server.
           */
          sendHostname?: boolean;
          /**
           * UseDNS when `true`, the DNS servers in the DHCP server will be used and
           * take precedence.
           */
          useDNS?: boolean;
          /**
           * UseDomains can take the values `true`, `false`, or `route`. When `true`,
           * the domain name from the DHCP server will be used as the DNS search
           * domain for this device. When `route`, the domain name from the DHCP
           * response will be used for routing DNS only, not for searching.
           */
          useDomains?: string;
          /**
           * UseHostname when `true`, the hostname from the DHCP server will be set
           * as the transient hostname of the machine.
           */
          useHostname?: boolean;
          /**
           * UseMTU when `true`, the MTU from the DHCP server will be set as the
           * MTU of the device.
           */
          useMTU?: boolean;
          /**
           * UseNTP when `true`, the NTP servers from the DHCP server will be used
           * by systemd-timesyncd and take precedence.
           */
          useNTP?: boolean;
          /**
           * UseRoutes when `true`, the routes from the DHCP server will be installed
           * in the routing table.
           */
          useRoutes?: string;
        };
        /**
         * Gateway4 is the IPv4 gateway used by this device.
         * Required when DHCP4 is false.
         */
        gateway4?: string;
        /**
         * Gateway4 is the IPv4 gateway used by this device.
         */
        gateway6?: string;
        /**
         * IPAddrs is a list of one or more IPv4 and/or IPv6 addresses to assign
         * to this device. IP addresses must also specify the segment length in
         * CIDR notation.
         * Required when DHCP4, DHCP6 and SkipIPAllocation are false.
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
         * NetworkName is the name, managed object reference or the managed
         * object ID of the vSphere network to which the device will be connected.
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
        /**
         * SkipIPAllocation allows the device to not have IP address or DHCP configured.
         * This is suitable for devices for which IP allocation is handled externally, eg. using Multus CNI.
         * If true, CAPV will not verify IP address allocation.
         */
        skipIPAllocation?: boolean;
      }[];
      /**
       * PreferredAPIServeCIDR is the preferred CIDR for the Kubernetes API
       * server endpoint on this machine
       *
       * Deprecated: This field is going to be removed in a future release.
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
     * NumCoresPerSocket is the number of cores among which to distribute CPUs in this
     * virtual machine.
     * Defaults to the eponymous property value in the template from which the
     * virtual machine is cloned.
     */
    numCoresPerSocket?: number;
    /**
     * OS is the Operating System of the virtual machine
     * Defaults to Linux
     */
    os?: string;
    /**
     * PciDevices is the list of pci devices used by the virtual machine.
     */
    pciDevices?: {
      /**
       * CustomLabel is the hardware label of a virtual machine's PCI device.
       * Defaults to the eponymous property value in the template from which the
       * virtual machine is cloned.
       */
      customLabel?: string;
      /**
       * DeviceID is the device ID of a virtual machine's PCI, in integer.
       * Defaults to the eponymous property value in the template from which the
       * virtual machine is cloned.
       * Mutually exclusive with VGPUProfile as VGPUProfile and DeviceID + VendorID
       * are two independent ways to define PCI devices.
       */
      deviceId?: number;
      /**
       * VGPUProfile is the profile name of a virtual machine's vGPU, in string.
       * Defaults to the eponymous property value in the template from which the
       * virtual machine is cloned.
       * Mutually exclusive with DeviceID and VendorID as VGPUProfile and DeviceID + VendorID
       * are two independent ways to define PCI devices.
       */
      vGPUProfile?: string;
      /**
       * VendorId is the vendor ID of a virtual machine's PCI, in integer.
       * Defaults to the eponymous property value in the template from which the
       * virtual machine is cloned.
       * Mutually exclusive with VGPUProfile as VGPUProfile and DeviceID + VendorID
       * are two independent ways to define PCI devices.
       */
      vendorId?: number;
    }[];
    /**
     * PowerOffMode describes the desired behavior when powering off a VM.
     *
     * There are three, supported power off modes: hard, soft, and
     * trySoft. The first mode, hard, is the equivalent of a physical
     * system's power cord being ripped from the wall. The soft mode
     * requires the VM's guest to have VM Tools installed and attempts to
     * gracefully shut down the VM. Its variant, trySoft, first attempts
     * a graceful shutdown, and if that fails or the VM is not in a powered off
     * state after reaching the GuestSoftPowerOffTimeout, the VM is halted.
     *
     * If omitted, the mode defaults to hard.
     */
    powerOffMode?: 'hard' | 'soft' | 'trySoft';
    /**
     * ProviderID is the virtual machine's BIOS UUID formated as
     * vsphere://12345678-1234-1234-1234-123456789abc
     */
    providerID?: string;
    /**
     * ResourcePool is the name, inventory path, managed object reference or the managed
     * object ID in which the virtual machine is created/located.
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
     * TagIDs is an optional set of tags to add to an instance. Specified tagIDs
     * must use URN-notation instead of display names.
     */
    tagIDs?: string[];
    /**
     * Template is the name, inventory path, managed object reference or the managed
     * object ID of the template used to clone the virtual machine.
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
   * VSphereMachineStatus defines the observed state of VSphereMachine.
   */
  status?: {
    /**
     * Addresses contains the VSphere instance associated addresses.
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
     * Conditions defines current service state of the VSphereMachine.
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
    /**
     * v1beta2 groups all the fields that will be added or modified in VSphereMachine's status with the V1Beta2 version.
     */
    v1beta2?: {
      /**
       * conditions represents the observations of a VSphereMachine's current state.
       * Known condition types are Ready, VirtualMachineProvisioned and Paused.
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
