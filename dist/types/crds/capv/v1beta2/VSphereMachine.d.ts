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
    apiVersion: 'infrastructure.cluster.x-k8s.io/v1beta2';
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
     * spec is the desired state of VSphereMachine.
     */
    spec?: {
        /**
         * additionalDisksGiB holds the sizes of additional disks of the virtual machine, in GiB
         * Defaults to the eponymous property value in the template from which the
         * virtual machine is cloned.
         *
         * @maxItems 128
         */
        additionalDisksGiB?: number[];
        /**
         * cloneMode specifies the type of clone operation.
         * The LinkedClone mode is only support for templates that have at least
         * one snapshot. If the template has no snapshots, then CloneMode defaults
         * to FullClone.
         * When LinkedClone mode is enabled the DiskGiB field is ignored as it is
         * not possible to expand disks of linked clones.
         * Defaults to LinkedClone, but fails gracefully to FullClone if the source
         * of the clone operation has no snapshots.
         */
        cloneMode?: 'fullClone' | 'linkedClone';
        /**
         * customVMXKeys is a dictionary of advanced VMX options that can be set on VM
         * Defaults to empty map
         */
        customVMXKeys?: {
            [k: string]: string;
        };
        /**
         * dataDisks are additional disks to add to the VM that are not part of the VM's OVA template.
         *
         * @maxItems 29
         */
        dataDisks?: {
            /**
             * name is used to identify the disk definition. Name is required and needs to be unique so that it can be used to
             * clearly identify purpose of the disk.
             */
            name: string;
            /**
             * provisioningMode specifies the provisioning type to be used by this vSphere data disk.
             * If not set, the setting will be provided by the default storage policy.
             */
            provisioningMode?: 'Thin' | 'Thick' | 'EagerlyZeroed';
            /**
             * sizeGiB is the size of the disk in GiB.
             */
            sizeGiB: number;
        }[];
        /**
         * datacenter is the name, inventory path, managed object reference or the managed
         * object ID of the datacenter in which the virtual machine is created/located.
         * Defaults to * which selects the default datacenter.
         */
        datacenter?: string;
        /**
         * datastore is the name, inventory path, managed object reference or the managed
         * object ID of the datastore in which the virtual machine is created/located.
         */
        datastore?: string;
        /**
         * diskGiB is the size of a virtual machine's disk, in GiB.
         * Defaults to the eponymous property value in the template from which the
         * virtual machine is cloned.
         */
        diskGiB?: number;
        /**
         * folder is the name, inventory path, managed object reference or the managed
         * object ID of the folder in which the virtual machine is created/located.
         */
        folder?: string;
        /**
         * guestSoftPowerOffTimeoutSeconds sets the wait timeout for shutdown in the VM guest.
         * The VM will be powered off forcibly after the timeout if the VM is still
         * up and running when the PowerOffMode is set to trySoft.
         *
         * This parameter only applies when the PowerOffMode is set to trySoft.
         *
         * If omitted, the timeout defaults to 5 minutes.
         */
        guestSoftPowerOffTimeoutSeconds?: number;
        /**
         * hardwareVersion is the hardware version of the virtual machine.
         * Defaults to the eponymous property value in the template from which the
         * virtual machine is cloned.
         * Check the compatibility with the ESXi version before setting the value.
         */
        hardwareVersion?: string;
        /**
         * memoryMiB is the size of a virtual machine's memory, in MiB.
         * Defaults to the eponymous property value in the template from which the
         * virtual machine is cloned.
         */
        memoryMiB?: number;
        /**
         * naming allows configuring the naming strategy used when calculating the name of the VSphereVM.
         */
        naming?: {
            /**
             * template defines the template to use for generating the name of the VSphereVM object.
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
         * network is the network configuration for this machine's VM.
         */
        network: {
            /**
             * devices is the list of network devices used by the virtual machine.
             *
             *
             * @maxItems 128
             */
            devices: {
                /**
                 * addressesFromPools is a list of IPAddressPools that should be assigned
                 * to IPAddressClaims. The machine's cloud-init metadata will be populated
                 * with IPAddresses fulfilled by an IPAM provider.
                 *
                 * @maxItems 128
                 */
                addressesFromPools?: {
                    /**
                     * apiGroup of the IPPool.
                     * apiGroup must be fully qualified domain name.
                     */
                    apiGroup: string;
                    /**
                     * kind of the IPPool.
                     * kind must consist of alphanumeric characters or '-', start with an alphabetic character, and end with an alphanumeric character.
                     */
                    kind: string;
                    /**
                     * name of the IPPool.
                     * name must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character.
                     */
                    name: string;
                }[];
                /**
                 * deviceName may be used to explicitly assign a name to the network device
                 * as it exists in the guest operating system.
                 */
                deviceName?: string;
                /**
                 * dhcp4 is a flag that indicates whether or not to use DHCP for IPv4
                 * on this device.
                 * If true then IPAddrs should not contain any IPv4 addresses.
                 */
                dhcp4?: boolean;
                /**
                 * dhcp4Overrides allows for the control over several DHCP behaviors.
                 * Overrides will only be applied when the corresponding DHCP flag is set.
                 * Only configured values will be sent, omitted values will default to
                 * distribution defaults.
                 * Dependent on support in the network stack for your distribution.
                 * For more information see the netplan reference (https://netplan.io/reference#dhcp-overrides)
                 */
                dhcp4Overrides?: {
                    /**
                     * hostname is the name which will be sent to the DHCP server instead of
                     * the machine's hostname.
                     */
                    hostname?: string;
                    /**
                     * routeMetric is used to prioritize routes for devices. A lower metric for
                     * an interface will have a higher priority.
                     */
                    routeMetric?: number;
                    /**
                     * sendHostname when `true`, the hostname of the machine will be sent to the
                     * DHCP server.
                     */
                    sendHostname?: boolean;
                    /**
                     * useDNS when `true`, the DNS servers in the DHCP server will be used and
                     * take precedence.
                     */
                    useDNS?: boolean;
                    /**
                     * useDomains can take the values `true`, `false`, or `route`. When `true`,
                     * the domain name from the DHCP server will be used as the DNS search
                     * domain for this device. When `route`, the domain name from the DHCP
                     * response will be used for routing DNS only, not for searching.
                     */
                    useDomains?: string;
                    /**
                     * useHostname when `true`, the hostname from the DHCP server will be set
                     * as the transient hostname of the machine.
                     */
                    useHostname?: boolean;
                    /**
                     * useMTU when `true`, the MTU from the DHCP server will be set as the
                     * MTU of the device.
                     */
                    useMTU?: boolean;
                    /**
                     * useNTP when `true`, the NTP servers from the DHCP server will be used
                     * by systemd-timesyncd and take precedence.
                     */
                    useNTP?: boolean;
                    /**
                     * useRoutes when `true`, the routes from the DHCP server will be installed
                     * in the routing table.
                     */
                    useRoutes?: string;
                };
                /**
                 * dhcp6 is a flag that indicates whether or not to use DHCP for IPv6
                 * on this device.
                 * If true then IPAddrs should not contain any IPv6 addresses.
                 */
                dhcp6?: boolean;
                /**
                 * dhcp6Overrides allows for the control over several DHCP behaviors.
                 * Overrides will only be applied when the corresponding DHCP flag is set.
                 * Only configured values will be sent, omitted values will default to
                 * distribution defaults.
                 * Dependent on support in the network stack for your distribution.
                 * For more information see the netplan reference (https://netplan.io/reference#dhcp-overrides)
                 */
                dhcp6Overrides?: {
                    /**
                     * hostname is the name which will be sent to the DHCP server instead of
                     * the machine's hostname.
                     */
                    hostname?: string;
                    /**
                     * routeMetric is used to prioritize routes for devices. A lower metric for
                     * an interface will have a higher priority.
                     */
                    routeMetric?: number;
                    /**
                     * sendHostname when `true`, the hostname of the machine will be sent to the
                     * DHCP server.
                     */
                    sendHostname?: boolean;
                    /**
                     * useDNS when `true`, the DNS servers in the DHCP server will be used and
                     * take precedence.
                     */
                    useDNS?: boolean;
                    /**
                     * useDomains can take the values `true`, `false`, or `route`. When `true`,
                     * the domain name from the DHCP server will be used as the DNS search
                     * domain for this device. When `route`, the domain name from the DHCP
                     * response will be used for routing DNS only, not for searching.
                     */
                    useDomains?: string;
                    /**
                     * useHostname when `true`, the hostname from the DHCP server will be set
                     * as the transient hostname of the machine.
                     */
                    useHostname?: boolean;
                    /**
                     * useMTU when `true`, the MTU from the DHCP server will be set as the
                     * MTU of the device.
                     */
                    useMTU?: boolean;
                    /**
                     * useNTP when `true`, the NTP servers from the DHCP server will be used
                     * by systemd-timesyncd and take precedence.
                     */
                    useNTP?: boolean;
                    /**
                     * useRoutes when `true`, the routes from the DHCP server will be installed
                     * in the routing table.
                     */
                    useRoutes?: string;
                };
                /**
                 * gateway4 is the IPv4 gateway used by this device.
                 * Required when DHCP4 is false.
                 */
                gateway4?: string;
                /**
                 * gateway6 is the IPv6 gateway used by this device.
                 */
                gateway6?: string;
                /**
                 * ipAddrs is a list of one or more IPv4 and/or IPv6 addresses to assign
                 * to this device. IP addresses must also specify the segment length in
                 * CIDR notation.
                 * Required when DHCP4, DHCP6 and SkipIPAllocation are false.
                 *
                 * @maxItems 128
                 */
                ipAddrs?: string[];
                /**
                 * macAddr is the MAC address used by this device.
                 * It is generally a good idea to omit this field and allow a MAC address
                 * to be generated.
                 * Please note that this value must use the VMware OUI to work with the
                 * in-tree vSphere cloud provider.
                 */
                macAddr?: string;
                /**
                 * mtu is the device’s Maximum Transmission Unit size in bytes.
                 */
                mtu?: number;
                /**
                 * nameservers is a list of IPv4 and/or IPv6 addresses used as DNS
                 * nameservers.
                 * Please note that Linux allows only three nameservers (https://linux.die.net/man/5/resolv.conf).
                 *
                 * @maxItems 128
                 */
                nameservers?: string[];
                /**
                 * networkName is the name, managed object reference or the managed
                 * object ID of the vSphere network to which the device will be connected.
                 */
                networkName: string;
                /**
                 * routes is a list of optional, static routes applied to the device.
                 *
                 * @maxItems 512
                 */
                routes?: {
                    /**
                     * metric is the weight/priority of the route.
                     */
                    metric: number;
                    /**
                     * to is an IPv4 or IPv6 address.
                     */
                    to: string;
                    /**
                     * via is an IPv4 or IPv6 address.
                     */
                    via: string;
                }[];
                /**
                 * searchDomains is a list of search domains used when resolving IP
                 * addresses with DNS.
                 *
                 * @maxItems 128
                 */
                searchDomains?: string[];
                /**
                 * skipIPAllocation allows the device to not have IP address or DHCP configured.
                 * This is suitable for devices for which IP allocation is handled externally, eg. using Multus CNI.
                 * If true, CAPV will not verify IP address allocation.
                 */
                skipIPAllocation?: boolean;
            }[];
            /**
             * routes is a list of optional, static routes applied to the virtual
             * machine.
             *
             * @maxItems 512
             */
            routes?: {
                /**
                 * metric is the weight/priority of the route.
                 */
                metric: number;
                /**
                 * to is an IPv4 or IPv6 address.
                 */
                to: string;
                /**
                 * via is an IPv4 or IPv6 address.
                 */
                via: string;
            }[];
        };
        /**
         * numCPUs is the number of virtual processors in a virtual machine.
         * Defaults to the eponymous property value in the template from which the
         * virtual machine is cloned.
         */
        numCPUs?: number;
        /**
         * numCoresPerSocket is the number of cores among which to distribute CPUs in this
         * virtual machine.
         * Defaults to the eponymous property value in the template from which the
         * virtual machine is cloned.
         * Note: Starting with vSphere 8 numCoresPerSocket can be set to 0 to enable "Assigned at power on".
         */
        numCoresPerSocket?: number;
        /**
         * os is the Operating System of the virtual machine
         * Defaults to Linux
         */
        os?: string;
        /**
         * pciDevices is the list of pci devices used by the virtual machine.
         *
         * @maxItems 128
         */
        pciDevices?: {
            /**
             * customLabel is the hardware label of a virtual machine's PCI device.
             * Defaults to the eponymous property value in the template from which the
             * virtual machine is cloned.
             */
            customLabel?: string;
            /**
             * deviceId is the device ID of a virtual machine's PCI, in integer.
             * Defaults to the eponymous property value in the template from which the
             * virtual machine is cloned.
             * Mutually exclusive with VGPUProfile as VGPUProfile and DeviceID + VendorID
             * are two independent ways to define PCI devices.
             */
            deviceId?: number;
            /**
             * vGPUProfile is the profile name of a virtual machine's vGPU, in string.
             * Defaults to the eponymous property value in the template from which the
             * virtual machine is cloned.
             * Mutually exclusive with DeviceID and VendorID as VGPUProfile and DeviceID + VendorID
             * are two independent ways to define PCI devices.
             */
            vGPUProfile?: string;
            /**
             * vendorId is the vendor ID of a virtual machine's PCI, in integer.
             * Defaults to the eponymous property value in the template from which the
             * virtual machine is cloned.
             * Mutually exclusive with VGPUProfile as VGPUProfile and DeviceID + VendorID
             * are two independent ways to define PCI devices.
             */
            vendorId?: number;
        }[];
        /**
         * powerOffMode describes the desired behavior when powering off a VM.
         *
         * There are three, supported power off modes: hard, soft, and
         * trySoft. The first mode, hard, is the equivalent of a physical
         * system's power cord being ripped from the wall. The soft mode
         * requires the VM's guest to have VM Tools installed and attempts to
         * gracefully shut down the VM. Its variant, trySoft, first attempts
         * a graceful shutdown, and if that fails or the VM is not in a powered off
         * state after reaching the GuestSoftPowerOffTimeoutSeconds, the VM is halted.
         *
         * If omitted, the mode defaults to hard.
         */
        powerOffMode?: 'hard' | 'soft' | 'trySoft';
        /**
         * providerID is the virtual machine's BIOS UUID formatted as
         * vsphere://12345678-1234-1234-1234-123456789abc
         */
        providerID?: string;
        /**
         * resourcePool is the name, inventory path, managed object reference or the managed
         * object ID in which the virtual machine is created/located.
         */
        resourcePool?: string;
        /**
         * resources is the definition of the VM's cpu and memory
         * reservations, limits and shares.
         */
        resources?: {
            /**
             * limits is the definition of the VM's cpu (in hertz, rounded up to the nearest MHz)
             * and memory (in bytes, rounded up to the nearest MiB) limits
             */
            limits?: {
                /**
                 * cpu is the definition of the cpu quantity for the given VM hardware policy
                 */
                cpu?: number | string;
                /**
                 * memory is the definition of the memory quantity for the given VM hardware policy
                 */
                memory?: number | string;
            };
            /**
             * requests is the definition of the VM's cpu (in hertz, rounded up to the nearest MHz)
             * and memory (in bytes, rounded up to the nearest MiB) reservations
             */
            requests?: {
                /**
                 * cpu is the definition of the cpu quantity for the given VM hardware policy
                 */
                cpu?: number | string;
                /**
                 * memory is the definition of the memory quantity for the given VM hardware policy
                 */
                memory?: number | string;
            };
            /**
             * shares is the definition of the VM's cpu and memory shares
             */
            shares?: {
                /**
                 * cpu is the number of spu shares to assign to the VM
                 */
                cpu?: number;
                /**
                 * memory is the number of memory shares to assign to the VM
                 */
                memory?: number;
            };
        };
        /**
         * server is the IP address or FQDN of the vSphere server on which
         * the virtual machine is created/located.
         */
        server?: string;
        /**
         * snapshot is the name of the snapshot from which to create a linked clone.
         * This field is ignored if LinkedClone is not enabled.
         * Defaults to the source's current snapshot.
         */
        snapshot?: string;
        /**
         * storagePolicyName of the storage policy to use with this
         * Virtual Machine
         */
        storagePolicyName?: string;
        /**
         * tagIDs is an optional set of tags to add to an instance. Specified tagIDs
         * must use URN-notation instead of display names.
         *
         * @maxItems 128
         */
        tagIDs?: string[];
        /**
         * template is the name, inventory path, managed object reference or the managed
         * object ID of the template used to clone the virtual machine.
         */
        template: string;
        /**
         * thumbprint is the colon-separated SHA-1 checksum of the given vCenter server's host certificate
         * When this is set to empty, this VirtualMachine would be created
         * without TLS certificate validation of the communication between Cluster API Provider vSphere
         * and the VMware vCenter server.
         */
        thumbprint?: string;
    };
    /**
     * status is the observed state of VSphereMachine.
     */
    status?: {
        /**
         * addresses contains the VSphere instance associated addresses.
         *
         * @maxItems 128
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
        /**
         * deprecated groups all the status fields that are deprecated and will be removed when all the nested field are removed.
         */
        deprecated?: {
            /**
             * v1beta1 groups all the status fields that are deprecated and will be removed when support for v1beta1 will be dropped.
             *
             * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
             */
            v1beta1?: {
                /**
                 * conditions defines current service state of the VSphereMachine.
                 *
                 * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
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
            };
        };
        /**
         * initialization provides observations of the VSphereMachine initialization process.
         * NOTE: Fields in this struct are part of the Cluster API contract and are used to orchestrate initial Machine provisioning.
         */
        initialization?: {
            /**
             * provisioned is true when the infrastructure provider reports that the Machine's infrastructure is fully provisioned.
             * NOTE: this field is part of the Cluster API contract, and it is used to orchestrate initial Machine provisioning.
             */
            provisioned?: boolean;
        };
        /**
         * network returns the network status for each of the machine's configured
         * network interfaces.
         *
         * @maxItems 128
         */
        network?: {
            /**
             * connected is a flag that indicates whether this network is currently
             * connected to the VM.
             */
            connected?: boolean;
            /**
             * ipAddrs is one or more IP addresses reported by vm-tools.
             *
             * @maxItems 128
             */
            ipAddrs?: string[];
            /**
             * macAddr is the MAC address of the network device.
             */
            macAddr: string;
            /**
             * networkName is the name of the network.
             */
            networkName?: string;
        }[];
    };
}
//# sourceMappingURL=VSphereMachine.d.ts.map