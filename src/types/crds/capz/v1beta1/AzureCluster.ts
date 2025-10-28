/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * AzureCluster is the Schema for the azureclusters API.
 */
export interface AzureCluster {
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
  kind: 'AzureCluster';
  metadata: metav1.ObjectMeta;
  /**
   * AzureClusterSpec defines the desired state of AzureCluster.
   */
  spec?: {
    /**
     * AdditionalTags is an optional set of tags to add to Azure resources managed by the Azure provider, in addition to the
     * ones added by default.
     */
    additionalTags?: {
      [k: string]: string;
    };
    /**
     * AzureEnvironment is the name of the AzureCloud to be used.
     * The default value that would be used by most users is "AzurePublicCloud", other values are:
     * - ChinaCloud: "AzureChinaCloud"
     * - GermanCloud: "AzureGermanCloud"
     * - PublicCloud: "AzurePublicCloud"
     * - USGovernmentCloud: "AzureUSGovernmentCloud"
     *
     * Note that values other than the default must also be accompanied by corresponding changes to the
     * aso-controller-settings Secret to configure ASO to refer to the non-Public cloud. ASO currently does
     * not support referring to multiple different clouds in a single installation. The following fields must
     * be defined in the Secret:
     * - AZURE_AUTHORITY_HOST
     * - AZURE_RESOURCE_MANAGER_ENDPOINT
     * - AZURE_RESOURCE_MANAGER_AUDIENCE
     *
     * See the [ASO docs] for more details.
     *
     * [ASO docs]: https://azure.github.io/azure-service-operator/guide/aso-controller-settings-options/
     */
    azureEnvironment?: string;
    /**
     * BastionSpec encapsulates all things related to the Bastions in the cluster.
     */
    bastionSpec?: {
      /**
       * AzureBastion specifies how the Azure Bastion cloud component should be configured.
       */
      azureBastion?: {
        /**
         * EnableTunneling enables the native client support feature for the Azure Bastion Host. Defaults to false.
         */
        enableTunneling?: boolean;
        name?: string;
        /**
         * PublicIPSpec defines the inputs to create an Azure public IP address.
         */
        publicIP?: {
          dnsName?: string;
          ipTags?: {
            /**
             * Tag specifies the value of the IP tag associated with the public IP. Example: SQL.
             */
            tag: string;
            /**
             * Type specifies the IP tag type. Example: FirstPartyUsage.
             */
            type: string;
          }[];
          name: string;
        };
        /**
         * BastionHostSkuName configures the tier of the Azure Bastion Host. Can be either Basic or Standard. Defaults to Basic.
         */
        sku?: 'Basic' | 'Standard';
        /**
         * SubnetSpec configures an Azure subnet.
         */
        subnet?: {
          /**
           * CIDRBlocks defines the subnet's address space, specified as one or more address prefixes in CIDR notation.
           */
          cidrBlocks?: string[];
          /**
           * ID is the Azure resource ID of the subnet.
           * READ-ONLY
           */
          id?: string;
          /**
           * Name defines a name for the subnet resource.
           */
          name: string;
          /**
           * NatGateway associated with this subnet.
           */
          natGateway?: {
            /**
             * ID is the Azure resource ID of the NAT gateway.
             * READ-ONLY
             */
            id?: string;
            /**
             * PublicIPSpec defines the inputs to create an Azure public IP address.
             */
            ip?: {
              dnsName?: string;
              ipTags?: {
                /**
                 * Tag specifies the value of the IP tag associated with the public IP. Example: SQL.
                 */
                tag: string;
                /**
                 * Type specifies the IP tag type. Example: FirstPartyUsage.
                 */
                type: string;
              }[];
              name: string;
            };
            name: string;
            /**
             * Zones mentions the list of zones the NAT gateway should be a part of.
             */
            zones?: string[];
          };
          /**
           * PrivateEndpoints defines a list of private endpoints that should be attached to this subnet.
           */
          privateEndpoints?: {
            /**
             * ApplicationSecurityGroups specifies the Application security group in which the private endpoint IP configuration is included.
             */
            applicationSecurityGroups?: string[];
            /**
             * CustomNetworkInterfaceName specifies the network interface name associated with the private endpoint.
             */
            customNetworkInterfaceName?: string;
            /**
             * Location specifies the region to create the private endpoint.
             */
            location?: string;
            /**
             * ManualApproval specifies if the connection approval needs to be done manually or not.
             * Set it true when the network admin does not have access to approve connections to the remote resource.
             * Defaults to false.
             */
            manualApproval?: boolean;
            /**
             * Name specifies the name of the private endpoint.
             */
            name: string;
            /**
             * PrivateIPAddresses specifies the IP addresses for the network interface associated with the private endpoint.
             * They have to be part of the subnet where the private endpoint is linked.
             */
            privateIPAddresses?: string[];
            /**
             * PrivateLinkServiceConnections specifies Private Link Service Connections of the private endpoint.
             */
            privateLinkServiceConnections?: {
              /**
               * GroupIDs specifies the ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
               */
              groupIDs?: string[];
              /**
               * Name specifies the name of the private link service.
               */
              name?: string;
              /**
               * PrivateLinkServiceID specifies the resource ID of the private link service.
               */
              privateLinkServiceID?: string;
              /**
               * RequestMessage specifies a message passed to the owner of the remote resource with the private endpoint connection request.
               */
              requestMessage?: string;
            }[];
          }[];
          /**
           * Role defines the subnet role (eg. Node, ControlPlane)
           */
          role: 'node' | 'control-plane' | 'bastion' | 'cluster';
          /**
           * RouteTable defines the route table that should be attached to this subnet.
           */
          routeTable?: {
            /**
             * ID is the Azure resource ID of the route table.
             * READ-ONLY
             */
            id?: string;
            name: string;
          };
          /**
           * SecurityGroup defines the NSG (network security group) that should be attached to this subnet.
           */
          securityGroup?: {
            /**
             * ID is the Azure resource ID of the security group.
             * READ-ONLY
             */
            id?: string;
            name: string;
            /**
             * SecurityRules is a slice of Azure security rules for security groups.
             */
            securityRules?: {
              /**
               * Action specifies whether network traffic is allowed or denied. Can either be "Allow" or "Deny". Defaults to "Allow".
               */
              action?: 'Allow' | 'Deny';
              /**
               * A description for this rule. Restricted to 140 chars.
               */
              description: string;
              /**
               * Destination is the destination address prefix. CIDR or destination IP range. Asterix '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
               */
              destination?: string;
              /**
               * DestinationPorts specifies the destination port or range. Integer or range between 0 and 65535. Asterix '*' can also be used to match all ports.
               */
              destinationPorts?: string;
              /**
               * Direction indicates whether the rule applies to inbound, or outbound traffic. "Inbound" or "Outbound".
               */
              direction: 'Inbound' | 'Outbound';
              /**
               * Name is a unique name within the network security group.
               */
              name: string;
              /**
               * Priority is a number between 100 and 4096. Each rule should have a unique value for priority. Rules are processed in priority order, with lower numbers processed before higher numbers. Once traffic matches a rule, processing stops.
               */
              priority?: number;
              /**
               * Protocol specifies the protocol type. "Tcp", "Udp", "Icmp", or "*".
               */
              protocol: 'Tcp' | 'Udp' | 'Icmp' | '*';
              /**
               * Source specifies the CIDR or source IP range. Asterix '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
               */
              source?: string;
              /**
               * SourcePorts specifies source port or range. Integer or range between 0 and 65535. Asterix '*' can also be used to match all ports.
               */
              sourcePorts?: string;
              /**
               * Sources specifies The CIDR or source IP ranges.
               */
              sources?: string[];
            }[];
            /**
             * Tags defines a map of tags.
             */
            tags?: {
              [k: string]: string;
            };
          };
          /**
           * ServiceEndpoints is a slice of Virtual Network service endpoints to enable for the subnets.
           */
          serviceEndpoints?: {
            locations: string[];
            service: string;
          }[];
        };
      };
    };
    /**
     * CloudProviderConfigOverrides is an optional set of configuration values that can be overridden in azure cloud provider config.
     * This is only a subset of options that are available in azure cloud provider config.
     * Some values for the cloud provider config are inferred from other parts of cluster api provider azure spec, and may not be available for overrides.
     * See: https://cloud-provider-azure.sigs.k8s.io/install/configs
     * Note: All cloud provider config values can be customized by creating the secret beforehand. CloudProviderConfigOverrides is only used when the secret is managed by the Azure Provider.
     */
    cloudProviderConfigOverrides?: {
      /**
       * BackOffConfig indicates the back-off config options.
       */
      backOffs?: {
        cloudProviderBackoff?: boolean;
        cloudProviderBackoffDuration?: number;
        cloudProviderBackoffExponent?: number | string;
        cloudProviderBackoffJitter?: number | string;
        cloudProviderBackoffRetries?: number;
      };
      rateLimits?: {
        /**
         * RateLimitConfig indicates the rate limit config options.
         */
        config?: {
          cloudProviderRateLimit?: boolean;
          cloudProviderRateLimitBucket?: number;
          cloudProviderRateLimitBucketWrite?: number;
          cloudProviderRateLimitQPS?: number | string;
          cloudProviderRateLimitQPSWrite?: number | string;
        };
        /**
         * Name is the name of the rate limit spec.
         */
        name:
          | 'defaultRateLimit'
          | 'routeRateLimit'
          | 'subnetsRateLimit'
          | 'interfaceRateLimit'
          | 'routeTableRateLimit'
          | 'loadBalancerRateLimit'
          | 'publicIPAddressRateLimit'
          | 'securityGroupRateLimit'
          | 'virtualMachineRateLimit'
          | 'storageAccountRateLimit'
          | 'diskRateLimit'
          | 'snapshotRateLimit'
          | 'virtualMachineScaleSetRateLimit'
          | 'virtualMachineSizesRateLimit'
          | 'availabilitySetRateLimit';
      }[];
    };
    /**
     * ControlPlaneEnabled enables control plane components in the cluster.
     */
    controlPlaneEnabled?: boolean;
    /**
     * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane. It is not recommended to set
     * this when creating an AzureCluster as CAPZ will set this for you. However, if it is set, CAPZ will not change it.
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
     * ExtendedLocation is an optional set of ExtendedLocation properties for clusters on Azure public MEC.
     */
    extendedLocation?: {
      /**
       * Name defines the name for the extended location.
       */
      name: string;
      /**
       * Type defines the type for the extended location.
       */
      type: 'EdgeZone';
    };
    /**
     * FailureDomains is a list of failure domains in the cluster's region, used to restrict
     * eligibility to host the control plane. A FailureDomain maps to an availability zone,
     * which is a separated group of datacenters within a region.
     * See: https://learn.microsoft.com/azure/reliability/availability-zones-overview
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
     * IdentityRef is a reference to an AzureIdentity to be used when reconciling this cluster
     */
    identityRef?: {
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
    location: string;
    /**
     * NetworkSpec encapsulates all things related to Azure network.
     */
    networkSpec?: {
      /**
       * AdditionalAPIServerLBPorts specifies extra inbound ports for the APIServer load balancer.
       * Each port specified (e.g., 9345) creates an inbound rule where the frontend port and the backend port are the same.
       */
      additionalAPIServerLBPorts?: {
        /**
         * Name for the additional port within LB definition
         */
        name: string;
        /**
         * Port for the LB definition
         */
        port: number;
      }[];
      /**
       * APIServerLB is the configuration for the control-plane load balancer.
       */
      apiServerLB?: {
        /**
         * BackendPool describes the backend pool of the load balancer.
         */
        backendPool?: {
          /**
           * Name specifies the name of backend pool for the load balancer. If not specified, the default name will
           * be set, depending on the load balancer role.
           */
          name?: string;
        };
        frontendIPs?: {
          name: string;
          privateIP?: string;
          /**
           * PublicIPSpec defines the inputs to create an Azure public IP address.
           */
          publicIP?: {
            dnsName?: string;
            ipTags?: {
              /**
               * Tag specifies the value of the IP tag associated with the public IP. Example: SQL.
               */
              tag: string;
              /**
               * Type specifies the IP tag type. Example: FirstPartyUsage.
               */
              type: string;
            }[];
            name: string;
          };
        }[];
        /**
         * FrontendIPsCount specifies the number of frontend IP addresses for the load balancer.
         */
        frontendIPsCount?: number;
        /**
         * ID is the Azure resource ID of the load balancer.
         * READ-ONLY
         */
        id?: string;
        /**
         * IdleTimeoutInMinutes specifies the timeout for the TCP idle connection.
         */
        idleTimeoutInMinutes?: number;
        name?: string;
        /**
         * SKU defines an Azure load balancer SKU.
         */
        sku?: string;
        /**
         * LBType defines an Azure load balancer Type.
         */
        type?: string;
      };
      /**
       * ControlPlaneOutboundLB is the configuration for the control-plane outbound load balancer.
       * This is different from APIServerLB, and is used only in private clusters (optionally) for enabling outbound traffic.
       */
      controlPlaneOutboundLB?: {
        /**
         * BackendPool describes the backend pool of the load balancer.
         */
        backendPool?: {
          /**
           * Name specifies the name of backend pool for the load balancer. If not specified, the default name will
           * be set, depending on the load balancer role.
           */
          name?: string;
        };
        frontendIPs?: {
          name: string;
          privateIP?: string;
          /**
           * PublicIPSpec defines the inputs to create an Azure public IP address.
           */
          publicIP?: {
            dnsName?: string;
            ipTags?: {
              /**
               * Tag specifies the value of the IP tag associated with the public IP. Example: SQL.
               */
              tag: string;
              /**
               * Type specifies the IP tag type. Example: FirstPartyUsage.
               */
              type: string;
            }[];
            name: string;
          };
        }[];
        /**
         * FrontendIPsCount specifies the number of frontend IP addresses for the load balancer.
         */
        frontendIPsCount?: number;
        /**
         * ID is the Azure resource ID of the load balancer.
         * READ-ONLY
         */
        id?: string;
        /**
         * IdleTimeoutInMinutes specifies the timeout for the TCP idle connection.
         */
        idleTimeoutInMinutes?: number;
        name?: string;
        /**
         * SKU defines an Azure load balancer SKU.
         */
        sku?: string;
        /**
         * LBType defines an Azure load balancer Type.
         */
        type?: string;
      };
      /**
       * NodeOutboundLB is the configuration for the node outbound load balancer.
       */
      nodeOutboundLB?: {
        /**
         * BackendPool describes the backend pool of the load balancer.
         */
        backendPool?: {
          /**
           * Name specifies the name of backend pool for the load balancer. If not specified, the default name will
           * be set, depending on the load balancer role.
           */
          name?: string;
        };
        frontendIPs?: {
          name: string;
          privateIP?: string;
          /**
           * PublicIPSpec defines the inputs to create an Azure public IP address.
           */
          publicIP?: {
            dnsName?: string;
            ipTags?: {
              /**
               * Tag specifies the value of the IP tag associated with the public IP. Example: SQL.
               */
              tag: string;
              /**
               * Type specifies the IP tag type. Example: FirstPartyUsage.
               */
              type: string;
            }[];
            name: string;
          };
        }[];
        /**
         * FrontendIPsCount specifies the number of frontend IP addresses for the load balancer.
         */
        frontendIPsCount?: number;
        /**
         * ID is the Azure resource ID of the load balancer.
         * READ-ONLY
         */
        id?: string;
        /**
         * IdleTimeoutInMinutes specifies the timeout for the TCP idle connection.
         */
        idleTimeoutInMinutes?: number;
        name?: string;
        /**
         * SKU defines an Azure load balancer SKU.
         */
        sku?: string;
        /**
         * LBType defines an Azure load balancer Type.
         */
        type?: string;
      };
      /**
       * PrivateDNSZone enables private dns zone creation modes for a private cluster.
       * When unspecified, it defaults to PrivateDNSZoneModeSystem which creates a private DNS zone.
       */
      privateDNSZone?: 'System' | 'None';
      /**
       * PrivateDNSZoneName defines the zone name for the Azure Private DNS.
       */
      privateDNSZoneName?: string;
      /**
       * PrivateDNSZoneResourceGroup defines the resource group to be used for Azure Private DNS Zone.
       * If not specified, the resource group of the cluster will be used to create the Azure Private DNS Zone.
       */
      privateDNSZoneResourceGroup?: string;
      /**
       * Subnets is the configuration for the control-plane subnet and the node subnet.
       */
      subnets?: {
        /**
         * CIDRBlocks defines the subnet's address space, specified as one or more address prefixes in CIDR notation.
         */
        cidrBlocks?: string[];
        /**
         * ID is the Azure resource ID of the subnet.
         * READ-ONLY
         */
        id?: string;
        /**
         * Name defines a name for the subnet resource.
         */
        name: string;
        /**
         * NatGateway associated with this subnet.
         */
        natGateway?: {
          /**
           * ID is the Azure resource ID of the NAT gateway.
           * READ-ONLY
           */
          id?: string;
          /**
           * PublicIPSpec defines the inputs to create an Azure public IP address.
           */
          ip?: {
            dnsName?: string;
            ipTags?: {
              /**
               * Tag specifies the value of the IP tag associated with the public IP. Example: SQL.
               */
              tag: string;
              /**
               * Type specifies the IP tag type. Example: FirstPartyUsage.
               */
              type: string;
            }[];
            name: string;
          };
          name: string;
          /**
           * Zones mentions the list of zones the NAT gateway should be a part of.
           */
          zones?: string[];
        };
        /**
         * PrivateEndpoints defines a list of private endpoints that should be attached to this subnet.
         */
        privateEndpoints?: {
          /**
           * ApplicationSecurityGroups specifies the Application security group in which the private endpoint IP configuration is included.
           */
          applicationSecurityGroups?: string[];
          /**
           * CustomNetworkInterfaceName specifies the network interface name associated with the private endpoint.
           */
          customNetworkInterfaceName?: string;
          /**
           * Location specifies the region to create the private endpoint.
           */
          location?: string;
          /**
           * ManualApproval specifies if the connection approval needs to be done manually or not.
           * Set it true when the network admin does not have access to approve connections to the remote resource.
           * Defaults to false.
           */
          manualApproval?: boolean;
          /**
           * Name specifies the name of the private endpoint.
           */
          name: string;
          /**
           * PrivateIPAddresses specifies the IP addresses for the network interface associated with the private endpoint.
           * They have to be part of the subnet where the private endpoint is linked.
           */
          privateIPAddresses?: string[];
          /**
           * PrivateLinkServiceConnections specifies Private Link Service Connections of the private endpoint.
           */
          privateLinkServiceConnections?: {
            /**
             * GroupIDs specifies the ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
             */
            groupIDs?: string[];
            /**
             * Name specifies the name of the private link service.
             */
            name?: string;
            /**
             * PrivateLinkServiceID specifies the resource ID of the private link service.
             */
            privateLinkServiceID?: string;
            /**
             * RequestMessage specifies a message passed to the owner of the remote resource with the private endpoint connection request.
             */
            requestMessage?: string;
          }[];
        }[];
        /**
         * Role defines the subnet role (eg. Node, ControlPlane)
         */
        role: 'node' | 'control-plane' | 'bastion' | 'cluster';
        /**
         * RouteTable defines the route table that should be attached to this subnet.
         */
        routeTable?: {
          /**
           * ID is the Azure resource ID of the route table.
           * READ-ONLY
           */
          id?: string;
          name: string;
        };
        /**
         * SecurityGroup defines the NSG (network security group) that should be attached to this subnet.
         */
        securityGroup?: {
          /**
           * ID is the Azure resource ID of the security group.
           * READ-ONLY
           */
          id?: string;
          name: string;
          /**
           * SecurityRules is a slice of Azure security rules for security groups.
           */
          securityRules?: {
            /**
             * Action specifies whether network traffic is allowed or denied. Can either be "Allow" or "Deny". Defaults to "Allow".
             */
            action?: 'Allow' | 'Deny';
            /**
             * A description for this rule. Restricted to 140 chars.
             */
            description: string;
            /**
             * Destination is the destination address prefix. CIDR or destination IP range. Asterix '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
             */
            destination?: string;
            /**
             * DestinationPorts specifies the destination port or range. Integer or range between 0 and 65535. Asterix '*' can also be used to match all ports.
             */
            destinationPorts?: string;
            /**
             * Direction indicates whether the rule applies to inbound, or outbound traffic. "Inbound" or "Outbound".
             */
            direction: 'Inbound' | 'Outbound';
            /**
             * Name is a unique name within the network security group.
             */
            name: string;
            /**
             * Priority is a number between 100 and 4096. Each rule should have a unique value for priority. Rules are processed in priority order, with lower numbers processed before higher numbers. Once traffic matches a rule, processing stops.
             */
            priority?: number;
            /**
             * Protocol specifies the protocol type. "Tcp", "Udp", "Icmp", or "*".
             */
            protocol: 'Tcp' | 'Udp' | 'Icmp' | '*';
            /**
             * Source specifies the CIDR or source IP range. Asterix '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
             */
            source?: string;
            /**
             * SourcePorts specifies source port or range. Integer or range between 0 and 65535. Asterix '*' can also be used to match all ports.
             */
            sourcePorts?: string;
            /**
             * Sources specifies The CIDR or source IP ranges.
             */
            sources?: string[];
          }[];
          /**
           * Tags defines a map of tags.
           */
          tags?: {
            [k: string]: string;
          };
        };
        /**
         * ServiceEndpoints is a slice of Virtual Network service endpoints to enable for the subnets.
         */
        serviceEndpoints?: {
          locations: string[];
          service: string;
        }[];
      }[];
      /**
       * Vnet is the configuration for the Azure virtual network.
       */
      vnet?: {
        /**
         * CIDRBlocks defines the virtual network's address space, specified as one or more address prefixes in CIDR notation.
         */
        cidrBlocks?: string[];
        /**
         * ID is the Azure resource ID of the virtual network.
         * READ-ONLY
         */
        id?: string;
        /**
         * Name defines a name for the virtual network resource.
         */
        name: string;
        /**
         * Peerings defines a list of peerings of the newly created virtual network with existing virtual networks.
         */
        peerings?: {
          /**
           * ForwardPeeringProperties specifies VnetPeeringProperties for peering from the cluster's virtual network to the
           * remote virtual network.
           */
          forwardPeeringProperties?: {
            /**
             * AllowForwardedTraffic specifies whether the forwarded traffic from the VMs in the local virtual network will be
             * allowed/disallowed in remote virtual network.
             */
            allowForwardedTraffic?: boolean;
            /**
             * AllowGatewayTransit specifies if gateway links can be used in remote virtual networking to link to this virtual
             * network.
             */
            allowGatewayTransit?: boolean;
            /**
             * AllowVirtualNetworkAccess specifies whether the VMs in the local virtual network space would be able to access
             * the VMs in remote virtual network space.
             */
            allowVirtualNetworkAccess?: boolean;
            /**
             * UseRemoteGateways specifies if remote gateways can be used on this virtual network.
             * If the flag is set to true, and allowGatewayTransit on remote peering is also set to true, the virtual network
             * will use the gateways of the remote virtual network for transit. Only one peering can have this flag set to true.
             * This flag cannot be set if virtual network already has a gateway.
             */
            useRemoteGateways?: boolean;
          };
          /**
           * RemoteVnetName defines name of the remote virtual network.
           */
          remoteVnetName: string;
          /**
           * ResourceGroup is the resource group name of the remote virtual network.
           */
          resourceGroup?: string;
          /**
           * ReversePeeringProperties specifies VnetPeeringProperties for peering from the remote virtual network to the
           * cluster's virtual network.
           */
          reversePeeringProperties?: {
            /**
             * AllowForwardedTraffic specifies whether the forwarded traffic from the VMs in the local virtual network will be
             * allowed/disallowed in remote virtual network.
             */
            allowForwardedTraffic?: boolean;
            /**
             * AllowGatewayTransit specifies if gateway links can be used in remote virtual networking to link to this virtual
             * network.
             */
            allowGatewayTransit?: boolean;
            /**
             * AllowVirtualNetworkAccess specifies whether the VMs in the local virtual network space would be able to access
             * the VMs in remote virtual network space.
             */
            allowVirtualNetworkAccess?: boolean;
            /**
             * UseRemoteGateways specifies if remote gateways can be used on this virtual network.
             * If the flag is set to true, and allowGatewayTransit on remote peering is also set to true, the virtual network
             * will use the gateways of the remote virtual network for transit. Only one peering can have this flag set to true.
             * This flag cannot be set if virtual network already has a gateway.
             */
            useRemoteGateways?: boolean;
          };
        }[];
        /**
         * ResourceGroup is the name of the resource group of the existing virtual network
         * or the resource group where a managed virtual network should be created.
         */
        resourceGroup?: string;
        /**
         * Tags is a collection of tags describing the resource.
         */
        tags?: {
          [k: string]: string;
        };
      };
    };
    resourceGroup?: string;
    subscriptionID?: string;
  };
  /**
   * AzureClusterStatus defines the observed state of AzureCluster.
   */
  status?: {
    /**
     * Conditions defines current service state of the AzureCluster.
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
     * FailureDomains specifies the list of unique failure domains for the location/region of the cluster.
     * A FailureDomain maps to Availability Zone with an Azure Region (if the region support them). An
     * Availability Zone is a separate data center within a region and they can be used to ensure
     * the cluster is more resilient to failure.
     * See: https://learn.microsoft.com/azure/reliability/availability-zones-overview
     * This list will be used by Cluster API to try and spread the machines across the failure domains.
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
     * LongRunningOperationStates saves the states for Azure long-running operations so they can be continued on the
     * next reconciliation loop.
     */
    longRunningOperationStates?: {
      /**
       * Data is the base64 url encoded json Azure AutoRest Future.
       */
      data: string;
      /**
       * Name is the name of the Azure resource.
       * Together with the service name, this forms the unique identifier for the future.
       */
      name: string;
      /**
       * ResourceGroup is the Azure resource group for the resource.
       */
      resourceGroup?: string;
      /**
       * ServiceName is the name of the Azure service.
       * Together with the name of the resource, this forms the unique identifier for the future.
       */
      serviceName: string;
      /**
       * Type describes the type of future, such as update, create, delete, etc.
       */
      type: string;
    }[];
    /**
     * Ready is true when the provider resource is ready.
     */
    ready?: boolean;
  };
}
