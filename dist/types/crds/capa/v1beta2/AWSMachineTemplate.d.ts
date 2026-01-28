/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * AWSMachineTemplate is the schema for the Amazon EC2 Machine Templates API.
 */
export interface AWSMachineTemplate {
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
    kind: 'AWSMachineTemplate';
    metadata: metav1.ObjectMeta;
    /**
     * AWSMachineTemplateSpec defines the desired state of AWSMachineTemplate.
     */
    spec?: {
        /**
         * AWSMachineTemplateResource describes the data needed to create am AWSMachine from a template.
         */
        template: {
            /**
             * Standard object's metadata.
             * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
             */
            metadata?: {
                /**
                 * annotations is an unstructured key value map stored with a resource that may be
                 * set by external tools to store and retrieve arbitrary metadata. They are not
                 * queryable and should be preserved when modifying objects.
                 * More info: http://kubernetes.io/docs/user-guide/annotations
                 */
                annotations?: {
                    [k: string]: string;
                };
                /**
                 * labels is a map of string keys and values that can be used to organize and categorize
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
                 * AdditionalSecurityGroups is an array of references to security groups that should be applied to the
                 * instance. These security groups would be set in addition to any security groups defined
                 * at the cluster level or in the actuator. It is possible to specify either IDs of Filters. Using Filters
                 * will cause additional requests to AWS API and if tags change the attached security groups might change too.
                 */
                additionalSecurityGroups?: {
                    /**
                     * Filters is a set of key/value pairs used to identify a resource
                     * They are applied according to the rules defined by the AWS API:
                     * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Filtering.html
                     */
                    filters?: {
                        /**
                         * Name of the filter. Filter names are case-sensitive.
                         */
                        name: string;
                        /**
                         * Values includes one or more filter values. Filter values are case-sensitive.
                         */
                        values: string[];
                    }[];
                    /**
                     * ID of resource
                     */
                    id?: string;
                }[];
                /**
                 * AdditionalTags is an optional set of tags to add to an instance, in addition to the ones added by default by the
                 * AWS provider. If both the AWSCluster and the AWSMachine specify the same tag name with different values, the
                 * AWSMachine's value takes precedence.
                 */
                additionalTags?: {
                    [k: string]: string;
                };
                /**
                 * AMI is the reference to the AMI from which to create the machine instance.
                 */
                ami?: {
                    /**
                     * EKSOptimizedLookupType If specified, will look up an EKS Optimized image in SSM Parameter store
                     */
                    eksLookupType?: 'AmazonLinux' | 'AmazonLinuxGPU' | 'AmazonLinux2023' | 'AmazonLinux2023GPU';
                    /**
                     * ID of resource
                     */
                    id?: string;
                };
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
                 * CloudInit defines options related to the bootstrapping systems where
                 * CloudInit is used.
                 */
                cloudInit?: {
                    /**
                     * InsecureSkipSecretsManager, when set to true will not use AWS Secrets Manager
                     * or AWS Systems Manager Parameter Store to ensure privacy of userdata.
                     * By default, a cloud-init boothook shell script is prepended to download
                     * the userdata from Secrets Manager and additionally delete the secret.
                     */
                    insecureSkipSecretsManager?: boolean;
                    /**
                     * SecretCount is the number of secrets used to form the complete secret
                     */
                    secretCount?: number;
                    /**
                     * SecretPrefix is the prefix for the secret name. This is stored
                     * temporarily, and deleted when the machine registers as a node against
                     * the workload cluster.
                     */
                    secretPrefix?: string;
                    /**
                     * SecureSecretsBackend, when set to parameter-store will utilize the AWS Systems Manager
                     * Parameter Storage to distribute secrets. By default or with the value of secrets-manager,
                     * will use AWS Secrets Manager instead.
                     */
                    secureSecretsBackend?: 'secrets-manager' | 'ssm-parameter-store';
                };
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
                 * DynamicHostAllocation enables automatic allocation of a single dedicated host.
                 * Cost effectiveness of allocating a single instance on a dedicated host may vary
                 * depending on the instance type and the region.
                 * This field is mutually exclusive with HostID and always allocates exactly one host.
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
                 * ElasticIPPool is the configuration to allocate Public IPv4 address (Elastic IP/EIP) from user-defined pool.
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
                 * HostAffinity specifies the dedicated host affinity setting for the instance.
                 * When HostAffinity is set to "host", an instance started onto a specific host always restarts on the same host if stopped:
                 * - If HostID is set, the instance launches on the specific host and must return to that same host after any stop/start (Targeted & Pinned).
                 * - If HostID is not set, the instance gets launched on any available and must returns to the same host after any stop/start (Auto-placed & Pinned).
                 * When HostAffinity is set to "default" (the default value), the instance (when restarted) can return on any available host:
                 * - If HostID is set, the instance launches on the specified host now, but (when restarted) can return to any available hosts (Targeted & Flexible).
                 * - If HostID is not set, the instance launches on any available host now, and (when restarted) can return to any available hosts (Auto-placed & Flexible).
                 * If HostAffinity is not specified, it defaults to "default".
                 */
                hostAffinity?: 'default' | 'host';
                /**
                 * HostID specifies the Dedicated Host on which the instance must be started.
                 * This field is mutually exclusive with DynamicHostAllocation.
                 */
                hostID?: string;
                /**
                 * IAMInstanceProfile is a name of an IAM instance profile to assign to the instance
                 */
                iamInstanceProfile?: string;
                /**
                 * Ignition defined options related to the bootstrapping systems where Ignition is used.
                 */
                ignition?: {
                    /**
                     * Proxy defines proxy settings for Ignition.
                     * Only valid for Ignition versions 3.1 and above.
                     */
                    proxy?: {
                        /**
                         * HTTPProxy is the HTTP proxy to use for Ignition.
                         * A single URL that specifies the proxy server to use for HTTP and HTTPS requests,
                         * unless overridden by the HTTPSProxy or NoProxy options.
                         */
                        httpProxy?: string;
                        /**
                         * HTTPSProxy is the HTTPS proxy to use for Ignition.
                         * A single URL that specifies the proxy server to use for HTTPS requests,
                         * unless overridden by the NoProxy option.
                         */
                        httpsProxy?: string;
                        /**
                         * NoProxy is the list of domains to not proxy for Ignition.
                         * Specifies a list of strings to hosts that should be excluded from proxying.
                         *
                         * Each value is represented by:
                         * - An IP address prefix (1.2.3.4)
                         * - An IP address prefix in CIDR notation (1.2.3.4/8)
                         * - A domain name
                         *   - A domain name matches that name and all subdomains
                         *   - A domain name with a leading . matches subdomains only
                         * - A special DNS label (*), indicates that no proxying should be done
                         *
                         * An IP address prefix and domain name can also include a literal port number (1.2.3.4:80).
                         *
                         * @maxItems 64
                         */
                        noProxy?: string[];
                    };
                    /**
                     * StorageType defines how to store the boostrap user data for Ignition.
                     * This can be used to instruct Ignition from where to fetch the user data to bootstrap an instance.
                     *
                     * When omitted, the storage option will default to ClusterObjectStore.
                     *
                     * When set to "ClusterObjectStore", if the capability is available and a Cluster ObjectStore configuration
                     * is correctly provided in the Cluster object (under .spec.s3Bucket),
                     * an object store will be used to store bootstrap user data.
                     *
                     * When set to "UnencryptedUserData", EC2 Instance User Data will be used to store the machine bootstrap user data, unencrypted.
                     * This option is considered less secure than others as user data may contain sensitive informations (keys, certificates, etc.)
                     * and users with ec2:DescribeInstances permission or users running pods
                     * that can access the ec2 metadata service have access to this sensitive information.
                     * So this is only to be used at ones own risk, and only when other more secure options are not viable.
                     */
                    storageType?: 'ClusterObjectStore' | 'UnencryptedUserData';
                    /**
                     * TLS defines TLS settings for Ignition.
                     * Only valid for Ignition versions 3.1 and above.
                     */
                    tls?: {
                        /**
                         * CASources defines the list of certificate authorities to use for Ignition.
                         * The value is the certificate bundle (in PEM format). The bundle can contain multiple concatenated certificates.
                         * Supported schemes are http, https, tftp, s3, arn, gs, and `data` (RFC 2397) URL scheme.
                         *
                         * @maxItems 64
                         */
                        certificateAuthorities?: string[];
                    };
                    /**
                     * Version defines which version of Ignition will be used to generate bootstrap data.
                     * Defaults to `2.3` if storageType is set to `ClusterObjectStore`.
                     * It will be ignored if storageType is set to `UnencryptedUserData`, as the userdata defines its own version.
                     */
                    version?: '2.3' | '3.0' | '3.1' | '3.2' | '3.3' | '3.4';
                };
                /**
                 * ImageLookupBaseOS is the name of the base operating system to use for
                 * image lookup the AMI is not set.
                 */
                imageLookupBaseOS?: string;
                /**
                 * ImageLookupFormat is the AMI naming format to look up the image for this
                 * machine It will be ignored if an explicit AMI is set. Supports
                 * substitutions for {{.BaseOS}} and {{.K8sVersion}} with the base OS and
                 * kubernetes version, respectively. The BaseOS will be the value in
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
                 * ImageLookupOrg is the AWS Organization ID to use for image lookup if AMI is not set.
                 */
                imageLookupOrg?: string;
                /**
                 * InstanceID is the EC2 instance ID for this machine.
                 */
                instanceID?: string;
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
                 * InstanceType is the type of instance to create. Example: m4.xlarge
                 */
                instanceType: string;
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
                 * If not specified, AWS applies a default value.
                 */
                networkInterfaceType?: 'interface' | 'efa';
                /**
                 * NetworkInterfaces is a list of ENIs to associate with the instance.
                 * A maximum of 2 may be specified.
                 *
                 * @maxItems 2
                 */
                networkInterfaces?: [] | [string] | [string, string];
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
                 * ProviderID is the unique identifier as specified by the cloud provider.
                 */
                providerID?: string;
                /**
                 * PublicIP specifies whether the instance should get a public IP.
                 * Precedence for this setting is as follows:
                 * 1. This field if set
                 * 2. Cluster/flavor setting
                 * 3. Subnet default
                 */
                publicIP?: boolean;
                /**
                 * RootVolume encapsulates the configuration options for the root volume
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
                 * SecurityGroupOverrides is an optional set of security groups to use for the node.
                 * This is optional - if not provided security groups from the cluster will be used.
                 */
                securityGroupOverrides?: {
                    [k: string]: string;
                };
                /**
                 * SpotMarketOptions allows users to configure instances to be run using AWS Spot instances.
                 */
                spotMarketOptions?: {
                    /**
                     * MaxPrice defines the maximum price the user is willing to pay for Spot VM instances
                     */
                    maxPrice?: string;
                };
                /**
                 * SSHKeyName is the name of the ssh key to attach to the instance. Valid values are empty string (do not use SSH keys), a valid SSH key name, or omitted (use the default SSH key name)
                 */
                sshKeyName?: string;
                /**
                 * Subnet is a reference to the subnet to use for this instance. If not specified,
                 * the cluster subnet will be used.
                 */
                subnet?: {
                    /**
                     * Filters is a set of key/value pairs used to identify a resource
                     * They are applied according to the rules defined by the AWS API:
                     * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Filtering.html
                     */
                    filters?: {
                        /**
                         * Name of the filter. Filter names are case-sensitive.
                         */
                        name: string;
                        /**
                         * Values includes one or more filter values. Filter values are case-sensitive.
                         */
                        values: string[];
                    }[];
                    /**
                     * ID of resource
                     */
                    id?: string;
                };
                /**
                 * Tenancy indicates if instance should run on shared or single-tenant hardware.
                 * When Tenancy=host, AWS will attempt to find a suitable host from:
                 * - Preexisting allocated hosts that have auto-placement enabled
                 * - A specific host ID, if configured
                 * - Allocating a new dedicated host if DynamicHostAllocation is configured
                 */
                tenancy?: 'default' | 'dedicated' | 'host';
                /**
                 * UncompressedUserData specify whether the user data is gzip-compressed before it is sent to ec2 instance.
                 * cloud-init has built-in support for gzip-compressed user data
                 * user data stored in aws secret manager is always gzip-compressed.
                 */
                uncompressedUserData?: boolean;
            };
        };
    };
    /**
     * AWSMachineTemplateStatus defines a status for an AWSMachineTemplate.
     */
    status?: {
        /**
         * Capacity defines the resource capacity for this machine.
         * This value is used for autoscaling from zero operations as defined in:
         * https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20210310-opt-in-autoscaling-from-zero.md
         */
        capacity?: {
            [k: string]: number | string;
        };
        /**
         * Conditions defines current service state of the AWSMachineTemplate.
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
         * NodeInfo contains information about the node's architecture and operating system.
         * This value is used for autoscaling from zero operations as defined in:
         * https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20210310-opt-in-autoscaling-from-zero.md
         */
        nodeInfo?: {
            /**
             * Architecture is the CPU architecture of the node.
             * Its underlying type is a string and its value can be any of amd64, arm64.
             */
            architecture?: 'amd64' | 'arm64';
            /**
             * OperatingSystem is the operating system of the node.
             * Its underlying type is a string and its value can be any of linux, windows.
             */
            operatingSystem?: 'linux' | 'windows';
        };
    };
}
//# sourceMappingURL=AWSMachineTemplate.d.ts.map