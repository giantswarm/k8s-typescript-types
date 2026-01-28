/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * AWSCluster is the schema for Amazon EC2 based Kubernetes Cluster API.
 */
export interface AWSCluster {
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
    kind: 'AWSCluster';
    metadata: metav1.ObjectMeta;
    /**
     * AWSClusterSpec defines the desired state of an EC2-based Kubernetes cluster.
     */
    spec?: {
        /**
         * AdditionalTags is an optional set of tags to add to AWS resources managed by the AWS provider, in addition to the
         * ones added by default.
         */
        additionalTags?: {
            [k: string]: string;
        };
        /**
         * Bastion contains options to configure the bastion host.
         */
        bastion?: {
            /**
             * AllowedCIDRBlocks is a list of CIDR blocks allowed to access the bastion host.
             * They are set as ingress rules for the Bastion host's Security Group (defaults to 0.0.0.0/0).
             */
            allowedCIDRBlocks?: string[];
            /**
             * AMI will use the specified AMI to boot the bastion. If not specified,
             * the AMI will default to one picked out in public space.
             */
            ami?: string;
            /**
             * DisableIngressRules will ensure there are no Ingress rules in the bastion host's security group.
             * Requires AllowedCIDRBlocks to be empty.
             */
            disableIngressRules?: boolean;
            /**
             * Enabled allows this provider to create a bastion host instance
             * with a public ip to access the VPC private network.
             */
            enabled?: boolean;
            /**
             * InstanceType will use the specified instance type for the bastion. If not specified,
             * Cluster API Provider AWS will use t3.micro for all regions except us-east-1, where t2.micro
             * will be the default.
             */
            instanceType?: string;
        };
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
        /**
         * ControlPlaneLoadBalancer is optional configuration for customizing control plane behavior.
         */
        controlPlaneLoadBalancer?: {
            /**
             * AdditionalListeners sets the additional listeners for the control plane load balancer.
             * This is only applicable to Network Load Balancer (NLB) types for the time being.
             */
            additionalListeners?: {
                /**
                 * HealthCheck sets the optional custom health check configuration to the API target group.
                 */
                healthCheck?: {
                    /**
                     * The approximate amount of time, in seconds, between health checks of an individual
                     * target.
                     */
                    intervalSeconds?: number;
                    /**
                     * The destination for health checks on the targets when using the protocol HTTP or HTTPS,
                     * otherwise the path will be ignored.
                     */
                    path?: string;
                    /**
                     * The port the load balancer uses when performing health checks for additional target groups. When
                     * not specified this value will be set for the same of listener port.
                     */
                    port?: string;
                    /**
                     * The protocol to use to health check connect with the target. When not specified the Protocol
                     * will be the same of the listener.
                     */
                    protocol?: 'TCP' | 'HTTP' | 'HTTPS';
                    /**
                     * The number of consecutive health check successes required before considering
                     * a target healthy.
                     */
                    thresholdCount?: number;
                    /**
                     * The amount of time, in seconds, during which no response from a target means
                     * a failed health check.
                     */
                    timeoutSeconds?: number;
                    /**
                     * The number of consecutive health check failures required before considering
                     * a target unhealthy.
                     */
                    unhealthyThresholdCount?: number;
                };
                /**
                 * Port sets the port for the additional listener.
                 */
                port: number;
                /**
                 * Protocol sets the protocol for the additional listener.
                 * Currently only TCP is supported.
                 */
                protocol?: 'TCP';
            }[];
            /**
             * AdditionalSecurityGroups sets the security groups used by the load balancer. Expected to be security group IDs
             * This is optional - if not provided new security groups will be created for the load balancer
             */
            additionalSecurityGroups?: string[];
            /**
             * CrossZoneLoadBalancing enables the classic ELB cross availability zone balancing.
             *
             * With cross-zone load balancing, each load balancer node for your Classic Load Balancer
             * distributes requests evenly across the registered instances in all enabled Availability Zones.
             * If cross-zone load balancing is disabled, each load balancer node distributes requests evenly across
             * the registered instances in its Availability Zone only.
             *
             * Defaults to false.
             */
            crossZoneLoadBalancing?: boolean;
            /**
             * DisableHostsRewrite disabled the hair pinning issue solution that adds the NLB's address as 127.0.0.1 to the hosts
             * file of each instance. This is by default, false.
             */
            disableHostsRewrite?: boolean;
            /**
             * HealthCheck sets custom health check configuration to the API target group.
             */
            healthCheck?: {
                /**
                 * The approximate amount of time, in seconds, between health checks of an individual
                 * target.
                 */
                intervalSeconds?: number;
                /**
                 * The number of consecutive health check successes required before considering
                 * a target healthy.
                 */
                thresholdCount?: number;
                /**
                 * The amount of time, in seconds, during which no response from a target means
                 * a failed health check.
                 */
                timeoutSeconds?: number;
                /**
                 * The number of consecutive health check failures required before considering
                 * a target unhealthy.
                 */
                unhealthyThresholdCount?: number;
            };
            /**
             * HealthCheckProtocol sets the protocol type for ELB health check target
             * default value is ELBProtocolSSL
             */
            healthCheckProtocol?: 'TCP' | 'SSL' | 'HTTP' | 'HTTPS' | 'TLS' | 'UDP';
            /**
             * IngressRules sets the ingress rules for the control plane load balancer.
             */
            ingressRules?: {
                /**
                 * List of CIDR blocks to allow access from. Cannot be specified with SourceSecurityGroupID.
                 */
                cidrBlocks?: string[];
                /**
                 * Description provides extended information about the ingress rule.
                 */
                description: string;
                /**
                 * FromPort is the start of port range.
                 */
                fromPort: number;
                /**
                 * List of IPv6 CIDR blocks to allow access from. Cannot be specified with SourceSecurityGroupID.
                 */
                ipv6CidrBlocks?: string[];
                /**
                 * NatGatewaysIPsSource use the NAT gateways IPs as the source for the ingress rule.
                 */
                natGatewaysIPsSource?: boolean;
                /**
                 * Protocol is the protocol for the ingress rule. Accepted values are "-1" (all), "4" (IP in IP),"tcp", "udp", "icmp", and "58" (ICMPv6), "50" (ESP).
                 */
                protocol: '-1' | '4' | 'tcp' | 'udp' | 'icmp' | '58' | '50';
                /**
                 * The security group id to allow access from. Cannot be specified with CidrBlocks.
                 */
                sourceSecurityGroupIds?: string[];
                /**
                 * The security group role to allow access from. Cannot be specified with CidrBlocks.
                 * The field will be combined with source security group IDs if specified.
                 */
                sourceSecurityGroupRoles?: ('bastion' | 'node' | 'controlplane' | 'apiserver-lb' | 'lb' | 'node-eks-additional')[];
                /**
                 * ToPort is the end of port range.
                 */
                toPort: number;
            }[];
            /**
             * LoadBalancerType sets the type for a load balancer. The default type is classic.
             */
            loadBalancerType?: 'classic' | 'elb' | 'alb' | 'nlb' | 'disabled';
            /**
             * Name sets the name of the classic ELB load balancer. As per AWS, the name must be unique
             * within your set of load balancers for the region, must have a maximum of 32 characters, must
             * contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen. Once
             * set, the value cannot be changed.
             */
            name?: string;
            /**
             * PreserveClientIP lets the user control if preservation of client ips must be retained or not.
             * If this is enabled 6443 will be opened to 0.0.0.0/0.
             */
            preserveClientIP?: boolean;
            /**
             * Scheme sets the scheme of the load balancer (defaults to internet-facing)
             */
            scheme?: 'internet-facing' | 'internal';
            /**
             * Subnets sets the subnets that should be applied to the control plane load balancer (defaults to discovered subnets for managed VPCs or an empty set for unmanaged VPCs)
             */
            subnets?: string[];
        };
        /**
         * IdentityRef is a reference to an identity to be used when reconciling the managed control plane.
         * If no identity is specified, the default identity for this controller will be used.
         */
        identityRef?: {
            /**
             * Kind of the identity.
             */
            kind: 'AWSClusterControllerIdentity' | 'AWSClusterRoleIdentity' | 'AWSClusterStaticIdentity';
            /**
             * Name of the identity.
             */
            name: string;
        };
        /**
         * ImageLookupBaseOS is the name of the base operating system used to look
         * up machine images when a machine does not specify an AMI. When set, this
         * will be used for all cluster machines unless a machine specifies a
         * different ImageLookupBaseOS.
         */
        imageLookupBaseOS?: string;
        /**
         * ImageLookupFormat is the AMI naming format to look up machine images when
         * a machine does not specify an AMI. When set, this will be used for all
         * cluster machines unless a machine specifies a different ImageLookupOrg.
         * Supports substitutions for {{.BaseOS}} and {{.K8sVersion}} with the base
         * OS and kubernetes version, respectively. The BaseOS will be the value in
         * ImageLookupBaseOS or ubuntu (the default), and the kubernetes version as
         * defined by the packages produced by kubernetes/release without v as a
         * prefix: 1.13.0, 1.12.5-mybuild.1, or 1.17.3. For example, the default
         * image format of capa-ami-{{.BaseOS}}-?{{.K8sVersion}}-* will end up
         * searching for AMIs that match the pattern capa-ami-ubuntu-?1.18.0-* for a
         * Machine that is targeting kubernetes v1.18.0 and the ubuntu base OS. See
         * also: https://golang.org/pkg/text/template/
         */
        imageLookupFormat?: string;
        /**
         * ImageLookupOrg is the AWS Organization ID to look up machine images when a
         * machine does not specify an AMI. When set, this will be used for all
         * cluster machines unless a machine specifies a different ImageLookupOrg.
         */
        imageLookupOrg?: string;
        /**
         * NetworkSpec encapsulates all things related to AWS network.
         */
        network?: {
            /**
             * AdditionalControlPlaneIngressRules is an optional set of ingress rules to add to the control plane
             */
            additionalControlPlaneIngressRules?: {
                /**
                 * List of CIDR blocks to allow access from. Cannot be specified with SourceSecurityGroupID.
                 */
                cidrBlocks?: string[];
                /**
                 * Description provides extended information about the ingress rule.
                 */
                description: string;
                /**
                 * FromPort is the start of port range.
                 */
                fromPort: number;
                /**
                 * List of IPv6 CIDR blocks to allow access from. Cannot be specified with SourceSecurityGroupID.
                 */
                ipv6CidrBlocks?: string[];
                /**
                 * NatGatewaysIPsSource use the NAT gateways IPs as the source for the ingress rule.
                 */
                natGatewaysIPsSource?: boolean;
                /**
                 * Protocol is the protocol for the ingress rule. Accepted values are "-1" (all), "4" (IP in IP),"tcp", "udp", "icmp", and "58" (ICMPv6), "50" (ESP).
                 */
                protocol: '-1' | '4' | 'tcp' | 'udp' | 'icmp' | '58' | '50';
                /**
                 * The security group id to allow access from. Cannot be specified with CidrBlocks.
                 */
                sourceSecurityGroupIds?: string[];
                /**
                 * The security group role to allow access from. Cannot be specified with CidrBlocks.
                 * The field will be combined with source security group IDs if specified.
                 */
                sourceSecurityGroupRoles?: ('bastion' | 'node' | 'controlplane' | 'apiserver-lb' | 'lb' | 'node-eks-additional')[];
                /**
                 * ToPort is the end of port range.
                 */
                toPort: number;
            }[];
            /**
             * AdditionalNodeIngressRules is an optional set of ingress rules to add to every node
             */
            additionalNodeIngressRules?: {
                /**
                 * List of CIDR blocks to allow access from. Cannot be specified with SourceSecurityGroupID.
                 */
                cidrBlocks?: string[];
                /**
                 * Description provides extended information about the ingress rule.
                 */
                description: string;
                /**
                 * FromPort is the start of port range.
                 */
                fromPort: number;
                /**
                 * List of IPv6 CIDR blocks to allow access from. Cannot be specified with SourceSecurityGroupID.
                 */
                ipv6CidrBlocks?: string[];
                /**
                 * NatGatewaysIPsSource use the NAT gateways IPs as the source for the ingress rule.
                 */
                natGatewaysIPsSource?: boolean;
                /**
                 * Protocol is the protocol for the ingress rule. Accepted values are "-1" (all), "4" (IP in IP),"tcp", "udp", "icmp", and "58" (ICMPv6), "50" (ESP).
                 */
                protocol: '-1' | '4' | 'tcp' | 'udp' | 'icmp' | '58' | '50';
                /**
                 * The security group id to allow access from. Cannot be specified with CidrBlocks.
                 */
                sourceSecurityGroupIds?: string[];
                /**
                 * The security group role to allow access from. Cannot be specified with CidrBlocks.
                 * The field will be combined with source security group IDs if specified.
                 */
                sourceSecurityGroupRoles?: ('bastion' | 'node' | 'controlplane' | 'apiserver-lb' | 'lb' | 'node-eks-additional')[];
                /**
                 * ToPort is the end of port range.
                 */
                toPort: number;
            }[];
            /**
             * CNI configuration
             */
            cni?: {
                /**
                 * CNIIngressRules specify rules to apply to control plane and worker node security groups.
                 * The source for the rule will be set to control plane and worker security group IDs.
                 */
                cniIngressRules?: {
                    description: string;
                    fromPort: number;
                    /**
                     * SecurityGroupProtocol defines the protocol type for a security group rule.
                     */
                    protocol: string;
                    toPort: number;
                }[];
            };
            /**
             * NodePortIngressRuleCidrBlocks is an optional set of CIDR blocks to allow traffic to nodes' NodePort services.
             * If none are specified here, all IPs are allowed to connect.
             */
            nodePortIngressRuleCidrBlocks?: string[];
            /**
             * SecurityGroupOverrides is an optional set of security groups to use for cluster instances
             * This is optional - if not provided new security groups will be created for the cluster
             */
            securityGroupOverrides?: {
                [k: string]: string;
            };
            /**
             * Subnets configuration.
             */
            subnets?: {
                /**
                 * AvailabilityZone defines the availability zone to use for this subnet in the cluster's region.
                 */
                availabilityZone?: string;
                /**
                 * CidrBlock is the CIDR block to be used when the provider creates a managed VPC.
                 */
                cidrBlock?: string;
                /**
                 * ID defines a unique identifier to reference this resource.
                 * If you're bringing your subnet, set the AWS subnet-id here, it must start with `subnet-`.
                 *
                 * When the VPC is managed by CAPA, and you'd like the provider to create a subnet for you,
                 * the id can be set to any placeholder value that does not start with `subnet-`;
                 * upon creation, the subnet AWS identifier will be populated in the `ResourceID` field and
                 * the `id` field is going to be used as the subnet name. If you specify a tag
                 * called `Name`, it takes precedence.
                 */
                id: string;
                /**
                 * IPv6CidrBlock is the IPv6 CIDR block to be used when the provider creates a managed VPC.
                 * A subnet can have an IPv4 and an IPv6 address.
                 * IPv6 is only supported in managed clusters, this field cannot be set on AWSCluster object.
                 */
                ipv6CidrBlock?: string;
                /**
                 * IsIPv6 defines the subnet as an IPv6 subnet. A subnet is IPv6 when it is associated with a VPC that has IPv6 enabled.
                 * IPv6 is only supported in managed clusters, this field cannot be set on AWSCluster object.
                 */
                isIpv6?: boolean;
                /**
                 * IsPublic defines the subnet as a public subnet. A subnet is public when it is associated with a route table that has a route to an internet gateway.
                 */
                isPublic?: boolean;
                /**
                 * NatGatewayID is the NAT gateway id associated with the subnet.
                 * Ignored unless the subnet is managed by the provider, in which case this is set on the public subnet where the NAT gateway resides. It is then used to determine routes for private subnets in the same AZ as the public subnet.
                 */
                natGatewayId?: string;
                /**
                 * ParentZoneName is the zone name where the current subnet's zone is tied when
                 * the zone is a Local Zone.
                 *
                 * The subnets in Local Zone or Wavelength Zone locations consume the ParentZoneName
                 * to select the correct private route table to egress traffic to the internet.
                 */
                parentZoneName?: string;
                /**
                 * ResourceID is the subnet identifier from AWS, READ ONLY.
                 * This field is populated when the provider manages the subnet.
                 */
                resourceID?: string;
                /**
                 * RouteTableID is the routing table id associated with the subnet.
                 */
                routeTableId?: string;
                /**
                 * Tags is a collection of tags describing the resource.
                 */
                tags?: {
                    [k: string]: string;
                };
                /**
                 * ZoneType defines the type of the zone where the subnet is created.
                 *
                 * The valid values are availability-zone, local-zone, and wavelength-zone.
                 *
                 * Subnet with zone type availability-zone (regular) is always selected to create cluster
                 * resources, like Load Balancers, NAT Gateways, Contol Plane nodes, etc.
                 *
                 * Subnet with zone type local-zone or wavelength-zone is not eligible to automatically create
                 * regular cluster resources.
                 *
                 * The public subnet in availability-zone or local-zone is associated with regular public
                 * route table with default route entry to a Internet Gateway.
                 *
                 * The public subnet in wavelength-zone is associated with a carrier public
                 * route table with default route entry to a Carrier Gateway.
                 *
                 * The private subnet in the availability-zone is associated with a private route table with
                 * the default route entry to a NAT Gateway created in that zone.
                 *
                 * The private subnet in the local-zone or wavelength-zone is associated with a private route table with
                 * the default route entry re-using the NAT Gateway in the Region (preferred from the
                 * parent zone, the zone type availability-zone in the region, or first table available).
                 */
                zoneType?: 'availability-zone' | 'local-zone' | 'wavelength-zone';
            }[];
            /**
             * VPC configuration.
             */
            vpc?: {
                /**
                 * AvailabilityZoneSelection specifies how AZs should be selected if there are more AZs
                 * in a region than specified by AvailabilityZoneUsageLimit. There are 2 selection schemes:
                 * Ordered - selects based on alphabetical order
                 * Random - selects AZs randomly in a region
                 * Defaults to Ordered
                 */
                availabilityZoneSelection?: 'Ordered' | 'Random';
                /**
                 * AvailabilityZoneUsageLimit specifies the maximum number of availability zones (AZ) that
                 * should be used in a region when automatically creating subnets. If a region has more
                 * than this number of AZs then this number of AZs will be picked randomly when creating
                 * default subnets. Defaults to 3
                 */
                availabilityZoneUsageLimit?: number;
                /**
                 * CarrierGatewayID is the id of the internet gateway associated with the VPC,
                 * for carrier network (Wavelength Zones).
                 */
                carrierGatewayId?: string;
                /**
                 * CidrBlock is the CIDR block to be used when the provider creates a managed VPC.
                 * Defaults to 10.0.0.0/16.
                 * Mutually exclusive with IPAMPool.
                 */
                cidrBlock?: string;
                /**
                 * ElasticIPPool contains specific configuration to allocate Public IPv4 address (Elastic IP) from user-defined pool
                 * brought to AWS for core infrastructure resources, like NAT Gateways and Public Network Load Balancers for
                 * the API Server.
                 */
                elasticIpPool?: {
                    /**
                     * PublicIpv4Pool sets a custom Public IPv4 Pool used to create Elastic IP address for resources
                     * created in public IPv4 subnets. Every IPv4 address, Elastic IP, will be allocated from the custom
                     * Public IPv4 pool that you brought to AWS, instead of Amazon-provided pool. The public IPv4 pool
                     * resource ID starts with 'ipv4pool-ec2'.
                     */
                    publicIpv4Pool?: string;
                    /**
                     * PublicIpv4PoolFallBackOrder defines the fallback action when the Public IPv4 Pool has been exhausted,
                     * no more IPv4 address available in the pool.
                     *
                     * When set to 'amazon-pool', the controller check if the pool has available IPv4 address, when pool has reached the
                     * IPv4 limit, the address will be claimed from Amazon-pool (default).
                     *
                     * When set to 'none', the controller will fail the Elastic IP allocation when the publicIpv4Pool is exhausted.
                     */
                    publicIpv4PoolFallbackOrder?: 'amazon-pool' | 'none';
                };
                /**
                 * EmptyRoutesDefaultVPCSecurityGroup specifies whether the default VPC security group ingress
                 * and egress rules should be removed.
                 *
                 * By default, when creating a VPC, AWS creates a security group called `default` with ingress and egress
                 * rules that allow traffic from anywhere. The group could be used as a potential surface attack and
                 * it's generally suggested that the group rules are removed or modified appropriately.
                 *
                 * NOTE: This only applies when the VPC is managed by the Cluster API AWS controller.
                 */
                emptyRoutesDefaultVPCSecurityGroup?: boolean;
                /**
                 * ID is the vpc-id of the VPC this provider should use to create resources.
                 */
                id?: string;
                /**
                 * InternetGatewayID is the id of the internet gateway associated with the VPC.
                 */
                internetGatewayId?: string;
                /**
                 * IPAMPool defines the IPAMv4 pool to be used for VPC.
                 * Mutually exclusive with CidrBlock.
                 */
                ipamPool?: {
                    /**
                     * ID is the ID of the IPAM pool this provider should use to create VPC.
                     */
                    id?: string;
                    /**
                     * Name is the name of the IPAM pool this provider should use to create VPC.
                     */
                    name?: string;
                    /**
                     * The netmask length of the IPv4 CIDR you want to allocate to VPC from
                     * an Amazon VPC IP Address Manager (IPAM) pool.
                     * Defaults to /16 for IPv4 if not specified.
                     */
                    netmaskLength?: number;
                };
                /**
                 * IPv6 contains ipv6 specific settings for the network. Supported only in managed clusters.
                 * This field cannot be set on AWSCluster object.
                 */
                ipv6?: {
                    /**
                     * CidrBlock is the CIDR block provided by Amazon when VPC has enabled IPv6.
                     * Mutually exclusive with IPAMPool.
                     */
                    cidrBlock?: string;
                    /**
                     * EgressOnlyInternetGatewayID is the id of the egress only internet gateway associated with an IPv6 enabled VPC.
                     */
                    egressOnlyInternetGatewayId?: string;
                    /**
                     * IPAMPool defines the IPAMv6 pool to be used for VPC.
                     * Mutually exclusive with CidrBlock.
                     */
                    ipamPool?: {
                        /**
                         * ID is the ID of the IPAM pool this provider should use to create VPC.
                         */
                        id?: string;
                        /**
                         * Name is the name of the IPAM pool this provider should use to create VPC.
                         */
                        name?: string;
                        /**
                         * The netmask length of the IPv4 CIDR you want to allocate to VPC from
                         * an Amazon VPC IP Address Manager (IPAM) pool.
                         * Defaults to /16 for IPv4 if not specified.
                         */
                        netmaskLength?: number;
                    };
                    /**
                     * PoolID is the IP pool which must be defined in case of BYO IP is defined.
                     * Must be specified if CidrBlock is set.
                     * Mutually exclusive with IPAMPool.
                     */
                    poolId?: string;
                };
                /**
                 * PrivateDNSHostnameTypeOnLaunch is the type of hostname to assign to instances in the subnet at launch.
                 * For IPv4-only and dual-stack (IPv4 and IPv6) subnets, an instance DNS name can be based on the instance IPv4 address (ip-name)
                 * or the instance ID (resource-name). For IPv6 only subnets, an instance DNS name must be based on the instance ID (resource-name).
                 */
                privateDnsHostnameTypeOnLaunch?: 'ip-name' | 'resource-name';
                /**
                 * SecondaryCidrBlocks are additional CIDR blocks to be associated when the provider creates a managed VPC.
                 * Defaults to none. Mutually exclusive with IPAMPool. This makes sense to use if, for example, you want to use
                 * a separate IP range for pods (e.g. Cilium ENI mode).
                 */
                secondaryCidrBlocks?: {
                    /**
                     * IPv4CidrBlock is the IPv4 CIDR block to associate with the managed VPC.
                     */
                    ipv4CidrBlock: string;
                }[];
                /**
                 * SubnetSchema specifies how CidrBlock should be divided on subnets in the VPC depending on the number of AZs.
                 * PreferPrivate - one private subnet for each AZ plus one other subnet that will be further sub-divided for the public subnets.
                 * PreferPublic - have the reverse logic of PreferPrivate, one public subnet for each AZ plus one other subnet
                 * that will be further sub-divided for the private subnets.
                 * Defaults to PreferPrivate
                 */
                subnetSchema?: 'PreferPrivate' | 'PreferPublic';
                /**
                 * Tags is a collection of tags describing the resource.
                 */
                tags?: {
                    [k: string]: string;
                };
            };
        };
        /**
         * Partition is the AWS security partition being used. Defaults to "aws"
         */
        partition?: string;
        /**
         * The AWS Region the cluster lives in.
         */
        region?: string;
        /**
         * S3Bucket contains options to configure a supporting S3 bucket for this
         * cluster - currently used for nodes requiring Ignition
         * (https://coreos.github.io/ignition/) for bootstrapping (requires
         * BootstrapFormatIgnition feature flag to be enabled).
         */
        s3Bucket?: {
            /**
             * BestEffortDeleteObjects defines whether access/permission errors during object deletion should be ignored.
             */
            bestEffortDeleteObjects?: boolean;
            /**
             * ControlPlaneIAMInstanceProfile is a name of the IAMInstanceProfile, which will be allowed
             * to read control-plane node bootstrap data from S3 Bucket.
             */
            controlPlaneIAMInstanceProfile?: string;
            /**
             * Name defines name of S3 Bucket to be created.
             */
            name: string;
            /**
             * NodesIAMInstanceProfiles is a list of IAM instance profiles, which will be allowed to read
             * worker nodes bootstrap data from S3 Bucket.
             */
            nodesIAMInstanceProfiles?: string[];
            /**
             * PresignedURLDuration defines the duration for which presigned URLs are valid.
             *
             * This is used to generate presigned URLs for S3 Bucket objects, which are used by
             * control-plane and worker nodes to fetch bootstrap data.
             *
             * When enabled, the IAM instance profiles specified are not used.
             */
            presignedURLDuration?: string;
        };
        /**
         * SecondaryControlPlaneLoadBalancer is an additional load balancer that can be used for the control plane.
         *
         * An example use case is to have a separate internal load balancer for internal traffic,
         * and a separate external load balancer for external traffic.
         */
        secondaryControlPlaneLoadBalancer?: {
            /**
             * AdditionalListeners sets the additional listeners for the control plane load balancer.
             * This is only applicable to Network Load Balancer (NLB) types for the time being.
             */
            additionalListeners?: {
                /**
                 * HealthCheck sets the optional custom health check configuration to the API target group.
                 */
                healthCheck?: {
                    /**
                     * The approximate amount of time, in seconds, between health checks of an individual
                     * target.
                     */
                    intervalSeconds?: number;
                    /**
                     * The destination for health checks on the targets when using the protocol HTTP or HTTPS,
                     * otherwise the path will be ignored.
                     */
                    path?: string;
                    /**
                     * The port the load balancer uses when performing health checks for additional target groups. When
                     * not specified this value will be set for the same of listener port.
                     */
                    port?: string;
                    /**
                     * The protocol to use to health check connect with the target. When not specified the Protocol
                     * will be the same of the listener.
                     */
                    protocol?: 'TCP' | 'HTTP' | 'HTTPS';
                    /**
                     * The number of consecutive health check successes required before considering
                     * a target healthy.
                     */
                    thresholdCount?: number;
                    /**
                     * The amount of time, in seconds, during which no response from a target means
                     * a failed health check.
                     */
                    timeoutSeconds?: number;
                    /**
                     * The number of consecutive health check failures required before considering
                     * a target unhealthy.
                     */
                    unhealthyThresholdCount?: number;
                };
                /**
                 * Port sets the port for the additional listener.
                 */
                port: number;
                /**
                 * Protocol sets the protocol for the additional listener.
                 * Currently only TCP is supported.
                 */
                protocol?: 'TCP';
            }[];
            /**
             * AdditionalSecurityGroups sets the security groups used by the load balancer. Expected to be security group IDs
             * This is optional - if not provided new security groups will be created for the load balancer
             */
            additionalSecurityGroups?: string[];
            /**
             * CrossZoneLoadBalancing enables the classic ELB cross availability zone balancing.
             *
             * With cross-zone load balancing, each load balancer node for your Classic Load Balancer
             * distributes requests evenly across the registered instances in all enabled Availability Zones.
             * If cross-zone load balancing is disabled, each load balancer node distributes requests evenly across
             * the registered instances in its Availability Zone only.
             *
             * Defaults to false.
             */
            crossZoneLoadBalancing?: boolean;
            /**
             * DisableHostsRewrite disabled the hair pinning issue solution that adds the NLB's address as 127.0.0.1 to the hosts
             * file of each instance. This is by default, false.
             */
            disableHostsRewrite?: boolean;
            /**
             * HealthCheck sets custom health check configuration to the API target group.
             */
            healthCheck?: {
                /**
                 * The approximate amount of time, in seconds, between health checks of an individual
                 * target.
                 */
                intervalSeconds?: number;
                /**
                 * The number of consecutive health check successes required before considering
                 * a target healthy.
                 */
                thresholdCount?: number;
                /**
                 * The amount of time, in seconds, during which no response from a target means
                 * a failed health check.
                 */
                timeoutSeconds?: number;
                /**
                 * The number of consecutive health check failures required before considering
                 * a target unhealthy.
                 */
                unhealthyThresholdCount?: number;
            };
            /**
             * HealthCheckProtocol sets the protocol type for ELB health check target
             * default value is ELBProtocolSSL
             */
            healthCheckProtocol?: 'TCP' | 'SSL' | 'HTTP' | 'HTTPS' | 'TLS' | 'UDP';
            /**
             * IngressRules sets the ingress rules for the control plane load balancer.
             */
            ingressRules?: {
                /**
                 * List of CIDR blocks to allow access from. Cannot be specified with SourceSecurityGroupID.
                 */
                cidrBlocks?: string[];
                /**
                 * Description provides extended information about the ingress rule.
                 */
                description: string;
                /**
                 * FromPort is the start of port range.
                 */
                fromPort: number;
                /**
                 * List of IPv6 CIDR blocks to allow access from. Cannot be specified with SourceSecurityGroupID.
                 */
                ipv6CidrBlocks?: string[];
                /**
                 * NatGatewaysIPsSource use the NAT gateways IPs as the source for the ingress rule.
                 */
                natGatewaysIPsSource?: boolean;
                /**
                 * Protocol is the protocol for the ingress rule. Accepted values are "-1" (all), "4" (IP in IP),"tcp", "udp", "icmp", and "58" (ICMPv6), "50" (ESP).
                 */
                protocol: '-1' | '4' | 'tcp' | 'udp' | 'icmp' | '58' | '50';
                /**
                 * The security group id to allow access from. Cannot be specified with CidrBlocks.
                 */
                sourceSecurityGroupIds?: string[];
                /**
                 * The security group role to allow access from. Cannot be specified with CidrBlocks.
                 * The field will be combined with source security group IDs if specified.
                 */
                sourceSecurityGroupRoles?: ('bastion' | 'node' | 'controlplane' | 'apiserver-lb' | 'lb' | 'node-eks-additional')[];
                /**
                 * ToPort is the end of port range.
                 */
                toPort: number;
            }[];
            /**
             * LoadBalancerType sets the type for a load balancer. The default type is classic.
             */
            loadBalancerType?: 'classic' | 'elb' | 'alb' | 'nlb' | 'disabled';
            /**
             * Name sets the name of the classic ELB load balancer. As per AWS, the name must be unique
             * within your set of load balancers for the region, must have a maximum of 32 characters, must
             * contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen. Once
             * set, the value cannot be changed.
             */
            name?: string;
            /**
             * PreserveClientIP lets the user control if preservation of client ips must be retained or not.
             * If this is enabled 6443 will be opened to 0.0.0.0/0.
             */
            preserveClientIP?: boolean;
            /**
             * Scheme sets the scheme of the load balancer (defaults to internet-facing)
             */
            scheme?: 'internet-facing' | 'internal';
            /**
             * Subnets sets the subnets that should be applied to the control plane load balancer (defaults to discovered subnets for managed VPCs or an empty set for unmanaged VPCs)
             */
            subnets?: string[];
        };
        /**
         * SSHKeyName is the name of the ssh key to attach to the bastion host. Valid values are empty string (do not use SSH keys), a valid SSH key name, or omitted (use the default SSH key name)
         */
        sshKeyName?: string;
    };
    /**
     * AWSClusterStatus defines the observed state of AWSCluster.
     */
    status?: {
        /**
         * Instance describes an AWS instance.
         */
        bastion?: {
            /**
             * Addresses contains the AWS instance associated addresses.
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
             * Availability zone of instance
             */
            availabilityZone?: string;
            /**
             * CapacityReservationID specifies the target Capacity Reservation into which the instance should be launched.
             */
            capacityReservationId?: string;
            /**
             * CapacityReservationPreference specifies the preference for use of Capacity Reservations by the instance. Valid values include:
             * "Open": The instance may make use of open Capacity Reservations that match its AZ and InstanceType
             * "None": The instance may not make use of any Capacity Reservations. This is to conserve open reservations for desired workloads
             * "CapacityReservationsOnly": The instance will only run if matched or targeted to a Capacity Reservation. Note that this is incompatible with a MarketType of `Spot`
             */
            capacityReservationPreference?: ('' | 'None' | 'CapacityReservationsOnly' | 'Open') & string;
            /**
             * CPUOptions defines CPU-related settings for the instance, including the confidential computing policy.
             * When omitted, this means no opinion and the AWS platform is left to choose a reasonable default.
             */
            cpuOptions?: {
                /**
                 * ConfidentialCompute specifies whether confidential computing should be enabled for the instance,
                 * and, if so, which confidential computing technology to use.
                 * Valid values are: Disabled, AMDEncryptedVirtualizationNestedPaging
                 * When set to Disabled, confidential computing will be disabled for the instance.
                 * When set to AMDEncryptedVirtualizationNestedPaging, AMD SEV-SNP will be used as the confidential computing technology for the instance.
                 * In this case, ensure the following conditions are met:
                 * 1) The selected instance type supports AMD SEV-SNP.
                 * 2) The selected AWS region supports AMD SEV-SNP.
                 * 3) The selected AMI supports AMD SEV-SNP.
                 * More details can be checked at https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html
                 * When omitted, this means no opinion and the AWS platform is left to choose a reasonable default,
                 * which is subject to change without notice. The current default is Disabled.
                 */
                confidentialCompute?: 'Disabled' | 'AMDEncryptedVirtualizationNestedPaging';
            };
            /**
             * DynamicHostAllocation enables automatic allocation of dedicated hosts.
             * This field is mutually exclusive with HostID.
             */
            dynamicHostAllocation?: {
                /**
                 * Tags to apply to the allocated dedicated host.
                 */
                tags?: {
                    [k: string]: string;
                };
            };
            /**
             * Indicates whether the instance is optimized for Amazon EBS I/O.
             */
            ebsOptimized?: boolean;
            /**
             * Specifies whether enhanced networking with ENA is enabled.
             */
            enaSupport?: boolean;
            /**
             * HostAffinity specifies the dedicated host affinity setting for the instance.
             * When HostAffinity is set to "host", an instance started onto a specific host always restarts on the same host if stopped:
             * - If HostID is set, the instance launches on the specific host and must return to that same host after any stop/start (Targeted & Pinned).
             * - If HostID is not set, the instance gets launched on any available and must returns to the same host after any stop/start (Auto-placed & Pinned).
             * When HostAffinity is set to "default" (the default value), the instance (when restarted) can return on any available host:
             * - If HostID is set, the instance launches on the specified host now, but (when restarted) can return to any available hosts (Targeted & Flexible).
             * - If HostID is not set, the instance launches on any available host now, and (when restarted) can return to any available hosts (Auto-placed & Flexible).
             */
            hostAffinity?: 'default' | 'host';
            /**
             * HostID specifies the dedicated host on which the instance should be started.
             */
            hostID?: string;
            /**
             * The name of the IAM instance profile associated with the instance, if applicable.
             */
            iamProfile?: string;
            id: string;
            /**
             * The ID of the AMI used to launch the instance.
             */
            imageId?: string;
            /**
             * InstanceMetadataOptions is the metadata options for the EC2 instance.
             */
            instanceMetadataOptions?: {
                /**
                 * Enables or disables the HTTP metadata endpoint on your instances.
                 *
                 * If you specify a value of disabled, you cannot access your instance metadata.
                 *
                 * Default: enabled
                 */
                httpEndpoint?: 'enabled' | 'disabled';
                /**
                 * The desired HTTP PUT response hop limit for instance metadata requests. The
                 * larger the number, the further instance metadata requests can travel.
                 *
                 * Default: 1
                 */
                httpPutResponseHopLimit?: number;
                /**
                 * The state of token usage for your instance metadata requests.
                 *
                 * If the state is optional, you can choose to retrieve instance metadata with
                 * or without a session token on your request. If you retrieve the IAM role
                 * credentials without a token, the version 1.0 role credentials are returned.
                 * If you retrieve the IAM role credentials using a valid session token, the
                 * version 2.0 role credentials are returned.
                 *
                 * If the state is required, you must send a session token with any instance
                 * metadata retrieval requests. In this state, retrieving the IAM role credentials
                 * always returns the version 2.0 credentials; the version 1.0 credentials are
                 * not available.
                 *
                 * Default: optional
                 */
                httpTokens?: 'optional' | 'required';
                /**
                 * Set to enabled to allow access to instance tags from the instance metadata.
                 * Set to disabled to turn off access to instance tags from the instance metadata.
                 * For more information, see Work with instance tags using the instance metadata
                 * (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS).
                 *
                 * Default: disabled
                 */
                instanceMetadataTags?: 'enabled' | 'disabled';
            };
            /**
             * The current state of the instance.
             */
            instanceState?: string;
            /**
             * MarketType specifies the type of market for the EC2 instance. Valid values include:
             * "OnDemand" (default): The instance runs as a standard OnDemand instance.
             * "Spot": The instance runs as a Spot instance. When SpotMarketOptions is provided, the marketType defaults to "Spot".
             * "CapacityBlock": The instance utilizes pre-purchased compute capacity (capacity blocks) with AWS Capacity Reservations.
             *  If this value is selected, CapacityReservationID must be specified to identify the target reservation.
             * If marketType is not specified and spotMarketOptions is provided, the marketType defaults to "Spot".
             */
            marketType?: 'OnDemand' | 'Spot' | 'CapacityBlock';
            /**
             * NetworkInterfaceType is the interface type of the primary network Interface.
             */
            networkInterfaceType?: string;
            /**
             * Specifies ENIs attached to instance
             */
            networkInterfaces?: string[];
            /**
             * Configuration options for the non root storage volumes.
             */
            nonRootVolumes?: {
                /**
                 * Device name
                 */
                deviceName?: string;
                /**
                 * Encrypted is whether the volume should be encrypted or not.
                 */
                encrypted?: boolean;
                /**
                 * EncryptionKey is the KMS key to use to encrypt the volume. Can be either a KMS key ID or ARN.
                 * If Encrypted is set and this is omitted, the default AWS key will be used.
                 * The key must already exist and be accessible by the controller.
                 */
                encryptionKey?: string;
                /**
                 * IOPS is the number of IOPS requested for the disk. Not applicable to all types.
                 */
                iops?: number;
                /**
                 * Size specifies size (in Gi) of the storage device.
                 * Must be greater than the image snapshot size or 8 (whichever is greater).
                 */
                size: number;
                /**
                 * Throughput to provision in MiB/s supported for the volume type. Not applicable to all types.
                 */
                throughput?: number;
                /**
                 * Type is the type of the volume (e.g. gp2, io1, etc...).
                 */
                type?: string;
            }[];
            /**
             * PlacementGroupName specifies the name of the placement group in which to launch the instance.
             */
            placementGroupName?: string;
            /**
             * PlacementGroupPartition is the partition number within the placement group in which to launch the instance.
             * This value is only valid if the placement group, referred in `PlacementGroupName`, was created with
             * strategy set to partition.
             */
            placementGroupPartition?: number;
            /**
             * PrivateDNSName is the options for the instance hostname.
             */
            privateDnsName?: {
                /**
                 * EnableResourceNameDNSAAAARecord indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
                 */
                enableResourceNameDnsAAAARecord?: boolean;
                /**
                 * EnableResourceNameDNSARecord indicates whether to respond to DNS queries for instance hostnames with DNS A records.
                 */
                enableResourceNameDnsARecord?: boolean;
                /**
                 * The type of hostname to assign to an instance.
                 */
                hostnameType?: 'ip-name' | 'resource-name';
            };
            /**
             * The private IPv4 address assigned to the instance.
             */
            privateIp?: string;
            /**
             * PublicIPOnLaunch is the option to associate a public IP on instance launch
             */
            publicIPOnLaunch?: boolean;
            /**
             * The public IPv4 address assigned to the instance, if applicable.
             */
            publicIp?: string;
            /**
             * Configuration options for the root storage volume.
             */
            rootVolume?: {
                /**
                 * Device name
                 */
                deviceName?: string;
                /**
                 * Encrypted is whether the volume should be encrypted or not.
                 */
                encrypted?: boolean;
                /**
                 * EncryptionKey is the KMS key to use to encrypt the volume. Can be either a KMS key ID or ARN.
                 * If Encrypted is set and this is omitted, the default AWS key will be used.
                 * The key must already exist and be accessible by the controller.
                 */
                encryptionKey?: string;
                /**
                 * IOPS is the number of IOPS requested for the disk. Not applicable to all types.
                 */
                iops?: number;
                /**
                 * Size specifies size (in Gi) of the storage device.
                 * Must be greater than the image snapshot size or 8 (whichever is greater).
                 */
                size: number;
                /**
                 * Throughput to provision in MiB/s supported for the volume type. Not applicable to all types.
                 */
                throughput?: number;
                /**
                 * Type is the type of the volume (e.g. gp2, io1, etc...).
                 */
                type?: string;
            };
            /**
             * SecurityGroupIDs are one or more security group IDs this instance belongs to.
             */
            securityGroupIds?: string[];
            /**
             * SpotMarketOptions option for configuring instances to be run using AWS Spot instances.
             */
            spotMarketOptions?: {
                /**
                 * MaxPrice defines the maximum price the user is willing to pay for Spot VM instances
                 */
                maxPrice?: string;
            };
            /**
             * The name of the SSH key pair.
             */
            sshKeyName?: string;
            /**
             * The ID of the subnet of the instance.
             */
            subnetId?: string;
            /**
             * The tags associated with the instance.
             */
            tags?: {
                [k: string]: string;
            };
            /**
             * Tenancy indicates if instance should run on shared or single-tenant hardware.
             */
            tenancy?: string;
            /**
             * The instance type.
             */
            type?: string;
            /**
             * UserData is the raw data script passed to the instance which is run upon bootstrap.
             * This field must not be base64 encoded and should only be used when running a new instance.
             */
            userData?: string;
            /**
             * IDs of the instance's volumes
             */
            volumeIDs?: string[];
        };
        /**
         * Conditions provide observations of the operational state of a Cluster API resource.
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
         * FailureDomains is a slice of FailureDomains.
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
         * NetworkStatus encapsulates AWS networking resources.
         */
        networkStatus?: {
            /**
             * APIServerELB is the Kubernetes api server load balancer.
             */
            apiServerElb?: {
                /**
                 * ARN of the load balancer. Unlike the ClassicLB, ARN is used mostly
                 * to define and get it.
                 */
                arn?: string;
                /**
                 * ClassicElbAttributes defines extra attributes associated with the load balancer.
                 */
                attributes?: {
                    /**
                     * CrossZoneLoadBalancing enables the classic load balancer load balancing.
                     */
                    crossZoneLoadBalancing?: boolean;
                    /**
                     * IdleTimeout is time that the connection is allowed to be idle (no data
                     * has been sent over the connection) before it is closed by the load balancer.
                     */
                    idleTimeout?: number;
                };
                /**
                 * AvailabilityZones is an array of availability zones in the VPC attached to the load balancer.
                 */
                availabilityZones?: string[];
                /**
                 * DNSName is the dns name of the load balancer.
                 */
                dnsName?: string;
                /**
                 * ELBAttributes defines extra attributes associated with v2 load balancers.
                 */
                elbAttributes?: {
                    [k: string]: string;
                };
                /**
                 * ELBListeners is an array of listeners associated with the load balancer. There must be at least one.
                 */
                elbListeners?: {
                    port: number;
                    /**
                     * ELBProtocol defines listener protocols for a load balancer.
                     */
                    protocol: string;
                    /**
                     * TargetGroupSpec specifies target group settings for a given listener.
                     * This is created first, and the ARN is then passed to the listener.
                     */
                    targetGroup: {
                        /**
                         * Name of the TargetGroup. Must be unique over the same group of listeners.
                         */
                        name: string;
                        /**
                         * Port is the exposed port
                         */
                        port: number;
                        /**
                         * ELBProtocol defines listener protocols for a load balancer.
                         */
                        protocol: 'tcp' | 'tls' | 'udp' | 'TCP' | 'TLS' | 'UDP';
                        /**
                         * HealthCheck is the elb health check associated with the load balancer.
                         */
                        targetGroupHealthCheck?: {
                            intervalSeconds?: number;
                            path?: string;
                            port?: string;
                            protocol?: string;
                            thresholdCount?: number;
                            timeoutSeconds?: number;
                            unhealthyThresholdCount?: number;
                        };
                        vpcId: string;
                    };
                }[];
                /**
                 * HealthCheck is the classic elb health check associated with the load balancer.
                 */
                healthChecks?: {
                    healthyThreshold: number;
                    /**
                     * A Duration represents the elapsed time between two instants
                     * as an int64 nanosecond count. The representation limits the
                     * largest representable duration to approximately 290 years.
                     */
                    interval: number;
                    target: string;
                    /**
                     * A Duration represents the elapsed time between two instants
                     * as an int64 nanosecond count. The representation limits the
                     * largest representable duration to approximately 290 years.
                     */
                    timeout: number;
                    unhealthyThreshold: number;
                };
                /**
                 * ClassicELBListeners is an array of classic elb listeners associated with the load balancer. There must be at least one.
                 */
                listeners?: {
                    instancePort: number;
                    /**
                     * ELBProtocol defines listener protocols for a load balancer.
                     */
                    instanceProtocol: string;
                    port: number;
                    /**
                     * ELBProtocol defines listener protocols for a load balancer.
                     */
                    protocol: string;
                }[];
                /**
                 * LoadBalancerType sets the type for a load balancer. The default type is classic.
                 */
                loadBalancerType?: 'classic' | 'elb' | 'alb' | 'nlb';
                /**
                 * The name of the load balancer. It must be unique within the set of load balancers
                 * defined in the region. It also serves as identifier.
                 */
                name?: string;
                /**
                 * Scheme is the load balancer scheme, either internet-facing or private.
                 */
                scheme?: string;
                /**
                 * SecurityGroupIDs is an array of security groups assigned to the load balancer.
                 */
                securityGroupIds?: string[];
                /**
                 * SubnetIDs is an array of subnets in the VPC attached to the load balancer.
                 */
                subnetIds?: string[];
                /**
                 * Tags is a map of tags associated with the load balancer.
                 */
                tags?: {
                    [k: string]: string;
                };
            };
            /**
             * NatGatewaysIPs contains the public IPs of the NAT Gateways
             */
            natGatewaysIPs?: string[];
            /**
             * SecondaryAPIServerELB is the secondary Kubernetes api server load balancer.
             */
            secondaryAPIServerELB?: {
                /**
                 * ARN of the load balancer. Unlike the ClassicLB, ARN is used mostly
                 * to define and get it.
                 */
                arn?: string;
                /**
                 * ClassicElbAttributes defines extra attributes associated with the load balancer.
                 */
                attributes?: {
                    /**
                     * CrossZoneLoadBalancing enables the classic load balancer load balancing.
                     */
                    crossZoneLoadBalancing?: boolean;
                    /**
                     * IdleTimeout is time that the connection is allowed to be idle (no data
                     * has been sent over the connection) before it is closed by the load balancer.
                     */
                    idleTimeout?: number;
                };
                /**
                 * AvailabilityZones is an array of availability zones in the VPC attached to the load balancer.
                 */
                availabilityZones?: string[];
                /**
                 * DNSName is the dns name of the load balancer.
                 */
                dnsName?: string;
                /**
                 * ELBAttributes defines extra attributes associated with v2 load balancers.
                 */
                elbAttributes?: {
                    [k: string]: string;
                };
                /**
                 * ELBListeners is an array of listeners associated with the load balancer. There must be at least one.
                 */
                elbListeners?: {
                    port: number;
                    /**
                     * ELBProtocol defines listener protocols for a load balancer.
                     */
                    protocol: string;
                    /**
                     * TargetGroupSpec specifies target group settings for a given listener.
                     * This is created first, and the ARN is then passed to the listener.
                     */
                    targetGroup: {
                        /**
                         * Name of the TargetGroup. Must be unique over the same group of listeners.
                         */
                        name: string;
                        /**
                         * Port is the exposed port
                         */
                        port: number;
                        /**
                         * ELBProtocol defines listener protocols for a load balancer.
                         */
                        protocol: 'tcp' | 'tls' | 'udp' | 'TCP' | 'TLS' | 'UDP';
                        /**
                         * HealthCheck is the elb health check associated with the load balancer.
                         */
                        targetGroupHealthCheck?: {
                            intervalSeconds?: number;
                            path?: string;
                            port?: string;
                            protocol?: string;
                            thresholdCount?: number;
                            timeoutSeconds?: number;
                            unhealthyThresholdCount?: number;
                        };
                        vpcId: string;
                    };
                }[];
                /**
                 * HealthCheck is the classic elb health check associated with the load balancer.
                 */
                healthChecks?: {
                    healthyThreshold: number;
                    /**
                     * A Duration represents the elapsed time between two instants
                     * as an int64 nanosecond count. The representation limits the
                     * largest representable duration to approximately 290 years.
                     */
                    interval: number;
                    target: string;
                    /**
                     * A Duration represents the elapsed time between two instants
                     * as an int64 nanosecond count. The representation limits the
                     * largest representable duration to approximately 290 years.
                     */
                    timeout: number;
                    unhealthyThreshold: number;
                };
                /**
                 * ClassicELBListeners is an array of classic elb listeners associated with the load balancer. There must be at least one.
                 */
                listeners?: {
                    instancePort: number;
                    /**
                     * ELBProtocol defines listener protocols for a load balancer.
                     */
                    instanceProtocol: string;
                    port: number;
                    /**
                     * ELBProtocol defines listener protocols for a load balancer.
                     */
                    protocol: string;
                }[];
                /**
                 * LoadBalancerType sets the type for a load balancer. The default type is classic.
                 */
                loadBalancerType?: 'classic' | 'elb' | 'alb' | 'nlb';
                /**
                 * The name of the load balancer. It must be unique within the set of load balancers
                 * defined in the region. It also serves as identifier.
                 */
                name?: string;
                /**
                 * Scheme is the load balancer scheme, either internet-facing or private.
                 */
                scheme?: string;
                /**
                 * SecurityGroupIDs is an array of security groups assigned to the load balancer.
                 */
                securityGroupIds?: string[];
                /**
                 * SubnetIDs is an array of subnets in the VPC attached to the load balancer.
                 */
                subnetIds?: string[];
                /**
                 * Tags is a map of tags associated with the load balancer.
                 */
                tags?: {
                    [k: string]: string;
                };
            };
            /**
             * SecurityGroups is a map from the role/kind of the security group to its unique name, if any.
             */
            securityGroups?: {
                /**
                 * SecurityGroup defines an AWS security group.
                 */
                [k: string]: {
                    /**
                     * ID is a unique identifier.
                     */
                    id: string;
                    /**
                     * IngressRules is the inbound rules associated with the security group.
                     */
                    ingressRule?: {
                        /**
                         * List of CIDR blocks to allow access from. Cannot be specified with SourceSecurityGroupID.
                         */
                        cidrBlocks?: string[];
                        /**
                         * Description provides extended information about the ingress rule.
                         */
                        description: string;
                        /**
                         * FromPort is the start of port range.
                         */
                        fromPort: number;
                        /**
                         * List of IPv6 CIDR blocks to allow access from. Cannot be specified with SourceSecurityGroupID.
                         */
                        ipv6CidrBlocks?: string[];
                        /**
                         * NatGatewaysIPsSource use the NAT gateways IPs as the source for the ingress rule.
                         */
                        natGatewaysIPsSource?: boolean;
                        /**
                         * Protocol is the protocol for the ingress rule. Accepted values are "-1" (all), "4" (IP in IP),"tcp", "udp", "icmp", and "58" (ICMPv6), "50" (ESP).
                         */
                        protocol: '-1' | '4' | 'tcp' | 'udp' | 'icmp' | '58' | '50';
                        /**
                         * The security group id to allow access from. Cannot be specified with CidrBlocks.
                         */
                        sourceSecurityGroupIds?: string[];
                        /**
                         * The security group role to allow access from. Cannot be specified with CidrBlocks.
                         * The field will be combined with source security group IDs if specified.
                         */
                        sourceSecurityGroupRoles?: ('bastion' | 'node' | 'controlplane' | 'apiserver-lb' | 'lb' | 'node-eks-additional')[];
                        /**
                         * ToPort is the end of port range.
                         */
                        toPort: number;
                    }[];
                    /**
                     * Name is the security group name.
                     */
                    name: string;
                    /**
                     * Tags is a map of tags associated with the security group.
                     */
                    tags?: {
                        [k: string]: string;
                    };
                };
            };
        };
        ready: boolean;
    };
}
//# sourceMappingURL=AWSCluster.d.ts.map