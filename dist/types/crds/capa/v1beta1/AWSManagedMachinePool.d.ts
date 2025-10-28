/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * AWSManagedMachinePool is the Schema for the awsmanagedmachinepools API.
 */
export interface AWSManagedMachinePool {
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
    kind: 'AWSManagedMachinePool';
    metadata: metav1.ObjectMeta;
    /**
     * AWSManagedMachinePoolSpec defines the desired state of AWSManagedMachinePool.
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
         * AMIType defines the AMI type
         */
        amiType?: 'AL2_x86_64' | 'AL2_x86_64_GPU' | 'AL2_ARM_64' | 'AL2023_x86_64_STANDARD' | 'AL2023_ARM_64_STANDARD' | 'CUSTOM';
        /**
         * AMIVersion defines the desired AMI release version. If no version number
         * is supplied then the latest version for the Kubernetes version
         * will be used
         */
        amiVersion?: string;
        /**
         * AvailabilityZones is an array of availability zones instances can run in
         */
        availabilityZones?: string[];
        /**
         * AWSLaunchTemplate specifies the launch template to use to create the managed node group.
         * If AWSLaunchTemplate is specified, certain node group configuraions outside of launch template
         * are prohibited (https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html).
         */
        awsLaunchTemplate?: {
            /**
             * AdditionalSecurityGroups is an array of references to security groups that should be applied to the
             * instances. These security groups would be set in addition to any security groups defined
             * at the cluster level or in the actuator.
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
             * The name or the Amazon Resource Name (ARN) of the instance profile associated
             * with the IAM role for the instance. The instance profile contains the IAM
             * role.
             */
            iamInstanceProfile?: string;
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
             * InstanceType is the type of instance to create. Example: m4.xlarge
             */
            instanceType?: string;
            /**
             * The name of the launch template.
             */
            name?: string;
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
             * SpotMarketOptions are options for configuring AWSMachinePool instances to be run using AWS Spot instances.
             */
            spotMarketOptions?: {
                /**
                 * MaxPrice defines the maximum price the user is willing to pay for Spot VM instances
                 */
                maxPrice?: string;
            };
            /**
             * SSHKeyName is the name of the ssh key to attach to the instance. Valid values are empty string
             * (do not use SSH keys), a valid SSH key name, or omitted (use the default SSH key name)
             */
            sshKeyName?: string;
            /**
             * VersionNumber is the version of the launch template that is applied.
             * Typically a new version is created when at least one of the following happens:
             * 1) A new launch template spec is applied.
             * 2) One or more parameters in an existing template is changed.
             * 3) A new AMI is discovered.
             */
            versionNumber?: number;
        };
        /**
         * CapacityType specifies the capacity type for the ASG behind this pool
         */
        capacityType?: 'onDemand' | 'spot';
        /**
         * DiskSize specifies the root disk size
         */
        diskSize?: number;
        /**
         * EKSNodegroupName specifies the name of the nodegroup in AWS
         * corresponding to this MachinePool. If you don't specify a name
         * then a default name will be created based on the namespace and
         * name of the managed machine pool.
         */
        eksNodegroupName?: string;
        /**
         * InstanceType specifies the AWS instance type
         */
        instanceType?: string;
        /**
         * Labels specifies labels for the Kubernetes node objects
         */
        labels?: {
            [k: string]: string;
        };
        /**
         * ProviderIDList are the provider IDs of instances in the
         * autoscaling group corresponding to the nodegroup represented by this
         * machine pool
         */
        providerIDList?: string[];
        /**
         * RemoteAccess specifies how machines can be accessed remotely
         */
        remoteAccess?: {
            /**
             * Public specifies whether to open port 22 to the public internet
             */
            public?: boolean;
            /**
             * SourceSecurityGroups specifies which security groups are allowed access
             */
            sourceSecurityGroups?: string[];
            /**
             * SSHKeyName specifies which EC2 SSH key can be used to access machines.
             * If left empty, the key from the control plane is used.
             */
            sshKeyName?: string;
        };
        /**
         * RoleAdditionalPolicies allows you to attach additional polices to
         * the node group role. You must enable the EKSAllowAddRoles
         * feature flag to incorporate these into the created role.
         */
        roleAdditionalPolicies?: string[];
        /**
         * RoleName specifies the name of IAM role for the node group.
         * If the role is pre-existing we will treat it as unmanaged
         * and not delete it on deletion. If the EKSEnableIAM feature
         * flag is true and no name is supplied then a role is created.
         */
        roleName?: string;
        /**
         * Scaling specifies scaling for the ASG behind this pool
         */
        scaling?: {
            maxSize?: number;
            minSize?: number;
        };
        /**
         * SubnetIDs specifies which subnets are used for the
         * auto scaling group of this nodegroup
         */
        subnetIDs?: string[];
        /**
         * Taints specifies the taints to apply to the nodes of the machine pool
         */
        taints?: {
            /**
             * Effect specifies the effect for the taint
             */
            effect: 'no-schedule' | 'no-execute' | 'prefer-no-schedule';
            /**
             * Key is the key of the taint
             */
            key: string;
            /**
             * Value is the value of the taint
             */
            value: string;
        }[];
        /**
         * UpdateConfig holds the optional config to control the behaviour of the update
         * to the nodegroup.
         */
        updateConfig?: {
            /**
             * MaxUnavailable is the maximum number of nodes unavailable at once during a version update.
             * Nodes will be updated in parallel. The maximum number is 100.
             */
            maxUnavailable?: number;
            /**
             * MaxUnavailablePercentage is the maximum percentage of nodes unavailable during a version update. This
             * percentage of nodes will be updated in parallel, up to 100 nodes at once.
             */
            maxUnavailablePrecentage?: number;
        };
    };
    /**
     * AWSManagedMachinePoolStatus defines the observed state of AWSManagedMachinePool.
     */
    status?: {
        /**
         * Conditions defines current service state of the managed machine pool
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
         * reconciling the MachinePool and will contain a more verbose string suitable
         * for logging and human consumption.
         *
         * This field should not be set for transitive errors that a controller
         * faces that are expected to be fixed automatically over
         * time (like service outages), but instead indicate that something is
         * fundamentally wrong with the MachinePool's spec or the configuration of
         * the controller, and that manual intervention is required. Examples
         * of terminal errors would be invalid combinations of settings in the
         * spec, values that are unsupported by the controller, or the
         * responsible controller itself being critically misconfigured.
         *
         * Any transient errors that occur during the reconciliation of MachinePools
         * can be added as events to the MachinePool object and/or logged in the
         * controller's output.
         */
        failureMessage?: string;
        /**
         * FailureReason will be set in the event that there is a terminal problem
         * reconciling the MachinePool and will contain a succinct value suitable
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
         * Any transient errors that occur during the reconciliation of MachinePools
         * can be added as events to the MachinePool object and/or logged in the
         * controller's output.
         */
        failureReason?: string;
        /**
         * The ID of the launch template
         */
        launchTemplateID?: string;
        /**
         * The version of the launch template
         */
        launchTemplateVersion?: string;
        /**
         * Ready denotes that the AWSManagedMachinePool nodegroup has joined
         * the cluster
         */
        ready: boolean;
        /**
         * Replicas is the most recently observed number of replicas.
         */
        replicas?: number;
    };
}
//# sourceMappingURL=AWSManagedMachinePool.d.ts.map