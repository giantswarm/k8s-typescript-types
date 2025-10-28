/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * AWSMachinePool is the Schema for the awsmachinepools API.
 */
export interface AWSMachinePool {
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
  kind: 'AWSMachinePool';
  metadata: metav1.ObjectMeta;
  /**
   * AWSMachinePoolSpec defines the desired state of AWSMachinePool.
   */
  spec?: {
    /**
     * AdditionalTags is an optional set of tags to add to an instance, in addition to the ones added by default by the
     * AWS provider.
     */
    additionalTags?: {
      [k: string]: string;
    };
    /**
     * AvailabilityZones is an array of availability zones instances can run in
     */
    availabilityZones?: string[];
    /**
     * AWSLaunchTemplate specifies the launch template and version to use when an instance is launched.
     */
    awsLaunchTemplate: {
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
     * Enable or disable the capacity rebalance autoscaling group feature
     */
    capacityRebalance?: boolean;
    /**
     * The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
     * If no value is supplied by user a default value of 300 seconds is set
     */
    defaultCoolDown?: string;
    /**
     * MaxSize defines the maximum size of the group.
     */
    maxSize: number;
    /**
     * MinSize defines the minimum size of the group.
     */
    minSize: number;
    /**
     * MixedInstancesPolicy describes how multiple instance types will be used by the ASG.
     */
    mixedInstancesPolicy?: {
      /**
       * InstancesDistribution to configure distribution of On-Demand Instances and Spot Instances.
       */
      instancesDistribution?: {
        /**
         * OnDemandAllocationStrategy indicates how to allocate instance types to fulfill On-Demand capacity.
         */
        onDemandAllocationStrategy?: 'prioritized';
        onDemandBaseCapacity?: number;
        onDemandPercentageAboveBaseCapacity?: number;
        /**
         * SpotAllocationStrategy indicates how to allocate instances across Spot Instance pools.
         */
        spotAllocationStrategy?: 'lowest-price' | 'capacity-optimized';
      };
      overrides?: {
        instanceType: string;
      }[];
    };
    /**
     * ProviderID is the ARN of the associated ASG
     */
    providerID?: string;
    /**
     * ProviderIDList are the identification IDs of machine instances provided by the provider.
     * This field must match the provider IDs as seen on the node objects corresponding to a machine pool's machine instances.
     */
    providerIDList?: string[];
    /**
     * RefreshPreferences describes set of preferences associated with the instance refresh request.
     */
    refreshPreferences?: {
      /**
       * The number of seconds until a newly launched instance is configured and ready
       * to use. During this time, the next replacement will not be initiated.
       * The default is to use the value for the health check grace period defined for the group.
       */
      instanceWarmup?: number;
      /**
       * The amount of capacity as a percentage in ASG that must remain healthy
       * during an instance refresh. The default is 90.
       */
      minHealthyPercentage?: number;
      /**
       * The strategy to use for the instance refresh. The only valid value is Rolling.
       * A rolling update is an update that is applied to all instances in an Auto
       * Scaling group until all instances have been updated.
       */
      strategy?: string;
    };
    /**
     * Subnets is an array of subnet configurations
     */
    subnets?: {
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
  };
  /**
   * AWSMachinePoolStatus defines the observed state of AWSMachinePool.
   */
  status?: {
    /**
     * ASGStatus is a status string returned by the autoscaling API.
     */
    asgStatus?: string;
    /**
     * Conditions defines current service state of the AWSMachinePool.
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
     * Instances contains the status for each instance in the pool
     */
    instances?: {
      /**
       * InstanceID is the identification of the Machine Instance within ASG
       */
      instanceID?: string;
      /**
       * Version defines the Kubernetes version for the Machine Instance
       */
      version?: string;
    }[];
    /**
     * The ID of the launch template
     */
    launchTemplateID?: string;
    /**
     * The version of the launch template
     */
    launchTemplateVersion?: string;
    /**
     * Ready is true when the provider resource is ready.
     */
    ready?: boolean;
    /**
     * Replicas is the most recently observed number of replicas
     */
    replicas?: number;
  };
}
