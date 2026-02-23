/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * KarpenterMachinePool is the Schema for the karpentermachinepools API.
 */
export interface KarpenterMachinePool {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: 'infrastructure.cluster.x-k8s.io/v1alpha1';
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: 'KarpenterMachinePool';
  metadata: metav1.ObjectMeta;
  /**
   * KarpenterMachinePoolSpec defines the desired state of KarpenterMachinePool.
   */
  spec?: {
    /**
     * EC2NodeClass specifies the configuration for the Karpenter EC2NodeClass
     */
    ec2NodeClass?: {
      /**
       * AMIFamily dictates the UserData format and default BlockDeviceMappings used when generating launch templates.
       * This field is optional when using an alias amiSelectorTerm, and the value will be inferred from the alias'
       * family. When an alias is specified, this field may only be set to its corresponding family or 'Custom'. If no
       * alias is specified, this field is required.
       * NOTE: We ignore the AMIFamily for hashing here because we hash the AMIFamily dynamically by using the alias using
       * the AMIFamily() helper function
       */
      amiFamily?: 'AL2' | 'AL2023' | 'Bottlerocket' | 'Custom' | 'Windows2019' | 'Windows2022';
      /**
       * AMISelectorTerms is a list of or ami selector terms. The terms are ORed.
       *
       * @minItems 1
       * @maxItems 30
       */
      amiSelectorTerms: [
        {
          /**
           * Alias specifies which EKS optimized AMI to select.
           * Each alias consists of a family and an AMI version, specified as "family@version".
           * Valid families include: al2, al2023, bottlerocket, windows2019, and windows2022.
           * The version can either be pinned to a specific AMI release, with that AMIs version format (ex: "al2023@v20240625" or "bottlerocket@v1.10.0").
           * The version can also be set to "latest" for any family. Setting the version to latest will result in drift when a new AMI is released. This is **not** recommended for production environments.
           * Note: The Windows families do **not** support version pinning, and only latest may be used.
           */
          alias?: string;
          /**
           * ID is the ami id in EC2
           */
          id?: string;
          /**
           * Name is the ami name in EC2.
           * This value is the name field, which is different from the name tag.
           */
          name?: string;
          /**
           * Owner is the owner for the ami.
           * You can specify a combination of AWS account IDs, "self", "amazon", and "aws-marketplace"
           */
          owner?: string;
          /**
           * SSMParameter is the name (or ARN) of the SSM parameter containing the Image ID.
           */
          ssmParameter?: string;
          /**
           * Tags is a map of key/value tags used to select amis.
           * Specifying '*' for a value selects all values for a given tag key.
           */
          tags?: {
            [k: string]: string;
          };
        },
        ...{
          /**
           * Alias specifies which EKS optimized AMI to select.
           * Each alias consists of a family and an AMI version, specified as "family@version".
           * Valid families include: al2, al2023, bottlerocket, windows2019, and windows2022.
           * The version can either be pinned to a specific AMI release, with that AMIs version format (ex: "al2023@v20240625" or "bottlerocket@v1.10.0").
           * The version can also be set to "latest" for any family. Setting the version to latest will result in drift when a new AMI is released. This is **not** recommended for production environments.
           * Note: The Windows families do **not** support version pinning, and only latest may be used.
           */
          alias?: string;
          /**
           * ID is the ami id in EC2
           */
          id?: string;
          /**
           * Name is the ami name in EC2.
           * This value is the name field, which is different from the name tag.
           */
          name?: string;
          /**
           * Owner is the owner for the ami.
           * You can specify a combination of AWS account IDs, "self", "amazon", and "aws-marketplace"
           */
          owner?: string;
          /**
           * SSMParameter is the name (or ARN) of the SSM parameter containing the Image ID.
           */
          ssmParameter?: string;
          /**
           * Tags is a map of key/value tags used to select amis.
           * Specifying '*' for a value selects all values for a given tag key.
           */
          tags?: {
            [k: string]: string;
          };
        }[]
      ];
      /**
       * AssociatePublicIPAddress controls if public IP addresses are assigned to instances that are launched with the nodeclass.
       */
      associatePublicIPAddress?: boolean;
      /**
       * BlockDeviceMappings to be applied to provisioned nodes.
       *
       * @maxItems 50
       */
      blockDeviceMappings?: {
        /**
         * The device name (for example, /dev/sdh or xvdh).
         */
        deviceName?: string;
        /**
         * EBS contains parameters used to automatically set up EBS volumes when an instance is launched.
         */
        ebs?: {
          /**
           * DeleteOnTermination indicates whether the EBS volume is deleted on instance termination.
           */
          deleteOnTermination?: boolean;
          /**
           * Encrypted indicates whether the EBS volume is encrypted. Encrypted volumes can only
           * be attached to instances that support Amazon EBS encryption. If you are creating
           * a volume from a snapshot, you can't specify an encryption value.
           */
          encrypted?: boolean;
          /**
           * IOPS is the number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes,
           * this represents the number of IOPS that are provisioned for the volume. For
           * gp2 volumes, this represents the baseline performance of the volume and the
           * rate at which the volume accumulates I/O credits for bursting.
           *
           * The following are the supported values for each volume type:
           *
           *    * gp3: 3,000-16,000 IOPS
           *
           *    * io1: 100-64,000 IOPS
           *
           *    * io2: 100-64,000 IOPS
           *
           * For io1 and io2 volumes, we guarantee 64,000 IOPS only for Instances built
           * on the Nitro System (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances).
           * Other instance families guarantee performance up to 32,000 IOPS.
           *
           * This parameter is supported for io1, io2, and gp3 volumes only. This parameter
           * is not supported for gp2, st1, sc1, or standard volumes.
           */
          iops?: number;
          /**
           * Identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for EBS encryption.
           */
          kmsKeyID?: string;
          /**
           * SnapshotID is the ID of an EBS snapshot
           */
          snapshotID?: string;
          /**
           * Throughput to provision for a gp3 volume, with a maximum of 1,000 MiB/s.
           * Valid Range: Minimum value of 125. Maximum value of 1000.
           */
          throughput?: number;
          /**
           * VolumeInitializationRate specifies the Amazon EBS Provisioned Rate for Volume Initialization,
           * in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as volume
           * initialization. Specifying a volume initialization rate ensures that the volume is initialized at a
           * predictable and consistent rate after creation. Only allowed if SnapshotID is set.
           * Valid Range: Minimum value of 100. Maximum value of 300.
           */
          volumeInitializationRate?: number;
          /**
           * VolumeSize in `Gi`, `G`, `Ti`, or `T`. You must specify either a snapshot ID or
           * a volume size. The following are the supported volumes sizes for each volume
           * type:
           *
           *    * gp2 and gp3: 1-16,384
           *
           *    * io1 and io2: 4-16,384
           *
           *    * st1 and sc1: 125-16,384
           *
           *    * standard: 1-1,024
           */
          volumeSize?: string;
          /**
           * VolumeType of the block device.
           * For more information, see Amazon EBS volume types (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html)
           * in the Amazon Elastic Compute Cloud User Guide.
           */
          volumeType?: 'standard' | 'io1' | 'io2' | 'gp2' | 'sc1' | 'st1' | 'gp3';
        };
        /**
         * RootVolume is a flag indicating if this device is mounted as kubelet root dir. You can
         * configure at most one root volume in BlockDeviceMappings.
         */
        rootVolume?: boolean;
      }[];
      /**
       * CapacityReservationSelectorTerms is a list of capacity reservation selector terms. Each term is ORed together to
       * determine the set of eligible capacity reservations.
       *
       * @maxItems 30
       */
      capacityReservationSelectorTerms?: {
        /**
         * ID is the capacity reservation id in EC2
         */
        id?: string;
        /**
         * Owner is the owner id for the ami.
         */
        ownerID?: string;
        /**
         * Tags is a map of key/value tags used to select capacity reservations.
         * Specifying '*' for a value selects all values for a given tag key.
         */
        tags?: {
          [k: string]: string;
        };
      }[];
      /**
       * Context is a Reserved field in EC2 APIs
       * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet.html
       */
      context?: string;
      /**
       * DetailedMonitoring controls if detailed monitoring is enabled for instances that are launched
       */
      detailedMonitoring?: boolean;
      /**
       * InstanceProfile is the AWS entity that instances use.
       * This field is mutually exclusive from role.
       * The instance profile should already have a role assigned to it that Karpenter
       *  has PassRole permission on for instance launch using this instanceProfile to succeed.
       */
      instanceProfile?: string;
      /**
       * InstanceStorePolicy specifies how to handle instance-store disks.
       */
      instanceStorePolicy?: 'RAID0';
      /**
       * Kubelet defines args to be used when configuring kubelet on provisioned nodes.
       * They are a subset of the upstream types, recognizing not all options may be supported.
       * Wherever possible, the types and names should reflect the upstream kubelet types.
       */
      kubelet?: {
        /**
         * clusterDNS is a list of IP addresses for the cluster DNS server.
         * Note that not all providers may use all addresses.
         */
        clusterDNS?: string[];
        /**
         * CPUCFSQuota enables CPU CFS quota enforcement for containers that specify CPU limits.
         */
        cpuCFSQuota?: boolean;
        /**
         * EvictionHard is the map of signal names to quantities that define hard eviction thresholds
         */
        evictionHard?: {
          [k: string]: string;
        };
        /**
         * EvictionMaxPodGracePeriod is the maximum allowed grace period (in seconds) to use when terminating pods in
         * response to soft eviction thresholds being met.
         */
        evictionMaxPodGracePeriod?: number;
        /**
         * EvictionSoft is the map of signal names to quantities that define soft eviction thresholds
         */
        evictionSoft?: {
          [k: string]: string;
        };
        /**
         * EvictionSoftGracePeriod is the map of signal names to quantities that define grace periods for each eviction signal
         */
        evictionSoftGracePeriod?: {
          [k: string]: string;
        };
        /**
         * ImageGCHighThresholdPercent is the percent of disk usage after which image
         * garbage collection is always run. The percent is calculated by dividing this
         * field value by 100, so this field must be between 0 and 100, inclusive.
         * When specified, the value must be greater than ImageGCLowThresholdPercent.
         */
        imageGCHighThresholdPercent?: number;
        /**
         * ImageGCLowThresholdPercent is the percent of disk usage before which image
         * garbage collection is never run. Lowest disk usage to garbage collect to.
         * The percent is calculated by dividing this field value by 100,
         * so the field value must be between 0 and 100, inclusive.
         * When specified, the value must be less than imageGCHighThresholdPercent
         */
        imageGCLowThresholdPercent?: number;
        /**
         * KubeReserved contains resources reserved for Kubernetes system components.
         */
        kubeReserved?: {
          [k: string]: string;
        };
        /**
         * MaxPods is an override for the maximum number of pods that can run on
         * a worker node instance.
         */
        maxPods?: number;
        /**
         * PodsPerCore is an override for the number of pods that can run on a worker node
         * instance based on the number of cpu cores. This value cannot exceed MaxPods, so, if
         * MaxPods is a lower value, that value will be used.
         */
        podsPerCore?: number;
        /**
         * SystemReserved contains resources reserved for OS system daemons and kernel memory.
         */
        systemReserved?: {
          [k: string]: string;
        };
      };
      /**
       * MetadataOptions for the generated launch template of provisioned nodes.
       *
       * This specifies the exposure of the Instance Metadata Service to
       * provisioned EC2 nodes. For more information,
       * see Instance Metadata and User Data
       * (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html)
       * in the Amazon Elastic Compute Cloud User Guide.
       *
       * Refer to recommended, security best practices
       * (https://aws.github.io/aws-eks-best-practices/security/docs/iam/#restrict-access-to-the-instance-profile-assigned-to-the-worker-node)
       * for limiting exposure of Instance Metadata and User Data to pods.
       * If omitted, defaults to httpEndpoint enabled, with httpProtocolIPv6
       * disabled, with httpPutResponseLimit of 1, and with httpTokens
       * required.
       */
      metadataOptions?: {
        /**
         * HTTPEndpoint enables or disables the HTTP metadata endpoint on provisioned
         * nodes. If metadata options is non-nil, but this parameter is not specified,
         * the default state is "enabled".
         *
         * If you specify a value of "disabled", instance metadata will not be accessible
         * on the node.
         */
        httpEndpoint?: 'enabled' | 'disabled';
        /**
         * HTTPProtocolIPv6 enables or disables the IPv6 endpoint for the instance metadata
         * service on provisioned nodes. If metadata options is non-nil, but this parameter
         * is not specified, the default state is "disabled".
         */
        httpProtocolIPv6?: 'enabled' | 'disabled';
        /**
         * HTTPPutResponseHopLimit is the desired HTTP PUT response hop limit for
         * instance metadata requests. The larger the number, the further instance
         * metadata requests can travel. Possible values are integers from 1 to 64.
         * If metadata options is non-nil, but this parameter is not specified, the
         * default value is 1.
         */
        httpPutResponseHopLimit?: number;
        /**
         * HTTPTokens determines the state of token usage for instance metadata
         * requests. If metadata options is non-nil, but this parameter is not
         * specified, the default state is "required".
         *
         * If the state is optional, one can choose to retrieve instance metadata with
         * or without a signed token header on the request. If one retrieves the IAM
         * role credentials without a token, the version 1.0 role credentials are
         * returned. If one retrieves the IAM role credentials using a valid signed
         * token, the version 2.0 role credentials are returned.
         *
         * If the state is "required", one must send a signed token header with any
         * instance metadata retrieval requests. In this state, retrieving the IAM
         * role credentials always returns the version 2.0 credentials; the version
         * 1.0 credentials are not available.
         */
        httpTokens?: 'required' | 'optional';
      };
      /**
       * Role is the AWS identity that nodes use.
       * This field is mutually exclusive from instanceProfile.
       */
      role?: string;
      /**
       * SecurityGroupSelectorTerms is a list of security group selector terms. The terms are ORed.
       *
       * @maxItems 30
       */
      securityGroupSelectorTerms: {
        /**
         * ID is the security group id in EC2
         */
        id?: string;
        /**
         * Name is the security group name in EC2.
         * This value is the name field, which is different from the name tag.
         */
        name?: string;
        /**
         * Tags is a map of key/value tags used to select security groups.
         * Specifying '*' for a value selects all values for a given tag key.
         */
        tags?: {
          [k: string]: string;
        };
      }[];
      /**
       * SubnetSelectorTerms is a list of subnet selector terms. The terms are ORed.
       *
       * @maxItems 30
       */
      subnetSelectorTerms: {
        /**
         * ID is the subnet id in EC2
         */
        id?: string;
        /**
         * Tags is a map of key/value tags used to select subnets
         * Specifying '*' for a value selects all values for a given tag key.
         */
        tags?: {
          [k: string]: string;
        };
      }[];
      /**
       * Tags to be applied on ec2 resources like instances and launch templates.
       */
      tags?: {
        [k: string]: string;
      };
      /**
       * UserData to be applied to the provisioned nodes.
       * It must be in the appropriate format based on the AMIFamily in use. Karpenter will merge certain fields into
       * this UserData to ensure nodes are being provisioned with the correct configuration.
       */
      userData?: string;
    };
    /**
     * NodePool specifies the configuration for the Karpenter NodePool
     */
    nodePool?: {
      /**
       * Disruption contains the parameters that relate to Karpenter's disruption logic
       */
      disruption?: {
        /**
         * Budgets is a list of Budgets.
         * If there are multiple active budgets, Karpenter uses
         * the most restrictive value. If left undefined,
         * this will default to one budget with a value to 10%.
         *
         * @maxItems 50
         */
        budgets?: {
          /**
           * Duration determines how long a Budget is active since each Schedule hit.
           * Only minutes and hours are accepted, as cron does not work in seconds.
           * If omitted, the budget is always active.
           * This is required if Schedule is set.
           * This regex has an optional 0s at the end since the duration.String() always adds
           * a 0s at the end.
           */
          duration?: string;
          /**
           * Nodes dictates the maximum number of NodeClaims owned by this NodePool
           * that can be terminating at once. This is calculated by counting nodes that
           * have a deletion timestamp set, or are actively being deleted by Karpenter.
           * This field is required when specifying a budget.
           * This cannot be of type intstr.IntOrString since kubebuilder doesn't support pattern
           * checking for int nodes for IntOrString nodes.
           * Ref: https://github.com/kubernetes-sigs/controller-tools/blob/55efe4be40394a288216dab63156b0a64fb82929/pkg/crd/markers/validation.go#L379-L388
           */
          nodes: string;
          /**
           * Reasons is a list of disruption methods that this budget applies to. If Reasons is not set, this budget applies to all methods.
           * Otherwise, this will apply to each reason defined.
           * allowed reasons are Underutilized, Empty, and Drifted.
           */
          reasons?: ('Underutilized' | 'Empty' | 'Drifted')[];
          /**
           * Schedule specifies when a budget begins being active, following
           * the upstream cronjob syntax. If omitted, the budget is always active.
           * Timezones are not supported.
           * This field is required if Duration is set.
           */
          schedule?: string;
        }[];
        /**
         * ConsolidateAfter is the duration the controller will wait
         * before attempting to terminate nodes that are underutilized.
         * Refer to ConsolidationPolicy for how underutilization is considered.
         */
        consolidateAfter: string;
        /**
         * ConsolidationPolicy describes which nodes Karpenter can disrupt through its consolidation
         * algorithm. This policy defaults to "WhenEmptyOrUnderutilized" if not specified
         */
        consolidationPolicy?: 'WhenEmpty' | 'WhenEmptyOrUnderutilized';
      };
      /**
       * Limits define a set of bounds for provisioning capacity.
       */
      limits?: {
        [k: string]: number | string;
      };
      /**
       * Template contains the template of possibilities for the provisioning logic to launch a NodeClaim with.
       * NodeClaims launched from this NodePool will often be further constrained than the template specifies.
       */
      template: {
        metadata?: {
          /**
           * Annotations is an unstructured key value map stored with a resource that may be
           * set by external tools to store and retrieve arbitrary metadata. They are not
           * queryable and should be preserved when modifying objects.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
           */
          annotations?: {
            [k: string]: string;
          };
          /**
           * Map of string keys and values that can be used to organize and categorize
           * (scope and select) objects. May match selectors of replication controllers
           * and services.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
           */
          labels?: {
            [k: string]: string;
          };
        };
        /**
         * NodeClaimTemplateSpec describes the desired state of the NodeClaim in the Nodepool
         * NodeClaimTemplateSpec is used in the NodePool's NodeClaimTemplate, with the resource requests omitted since
         * users are not able to set resource requests in the NodePool.
         */
        spec: {
          /**
           * ExpireAfter is the duration the controller will wait
           * before terminating a node, measured from when the node is created. This
           * is useful to implement features like eventually consistent node upgrade,
           * memory leak protection, and disruption testing.
           */
          expireAfter?: string;
          /**
           * Requirements are layered with GetLabels and applied to every node.
           *
           * @maxItems 100
           */
          requirements: {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * This field is ALPHA and can be dropped or replaced at any time
             * MinValues is the minimum number of unique values required to define the flexibility of the specific requirement.
             */
            minValues?: number;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: string[];
          }[];
          /**
           * StartupTaints are taints that are applied to nodes upon startup which are expected to be removed automatically
           * within a short period of time, typically by a DaemonSet that tolerates the taint. These are commonly used by
           * daemonsets to allow initialization and enforce startup ordering.  StartupTaints are ignored for provisioning
           * purposes in that pods are not required to tolerate a StartupTaint in order to have nodes provisioned for them.
           */
          startupTaints?: {
            /**
             * Required. The effect of the taint on pods
             * that do not tolerate the taint.
             * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Required. The taint key to be applied to a node.
             */
            key: string;
            /**
             * TimeAdded represents the time at which the taint was added.
             * It is only written for NoExecute taints.
             */
            timeAdded?: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value?: string;
          }[];
          /**
           * Taints will be applied to the NodeClaim's node.
           */
          taints?: {
            /**
             * Required. The effect of the taint on pods
             * that do not tolerate the taint.
             * Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
             */
            effect: string;
            /**
             * Required. The taint key to be applied to a node.
             */
            key: string;
            /**
             * TimeAdded represents the time at which the taint was added.
             * It is only written for NoExecute taints.
             */
            timeAdded?: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value?: string;
          }[];
          /**
           * TerminationGracePeriod is the maximum duration the controller will wait before forcefully deleting the pods on a node, measured from when deletion is first initiated.
           *
           * Warning: this feature takes precedence over a Pod's terminationGracePeriodSeconds value, and bypasses any blocked PDBs or the karpenter.sh/do-not-disrupt annotation.
           *
           * This field is intended to be used by cluster administrators to enforce that nodes can be cycled within a given time period.
           * When set, drifted nodes will begin draining even if there are pods blocking eviction. Draining will respect PDBs and the do-not-disrupt annotation until the TGP is reached.
           *
           * Karpenter will preemptively delete pods so their terminationGracePeriodSeconds align with the node's terminationGracePeriod.
           * If a pod would be terminated without being granted its full terminationGracePeriodSeconds prior to the node timeout,
           * that pod will be deleted at T = node timeout - pod terminationGracePeriodSeconds.
           *
           * The feature can also be used to allow maximum time limits for long-running jobs which can delay node termination with preStop hooks.
           * If left undefined, the controller will wait indefinitely for pods to be drained.
           */
          terminationGracePeriod?: string;
        };
      };
      /**
       * Weight is the priority given to the nodepool during scheduling. A higher
       * numerical weight indicates that this nodepool will be ordered
       * ahead of other nodepools with lower weights. A nodepool with no weight
       * will be treated as if it is a nodepool with a weight of 0.
       */
      weight?: number;
    };
    /**
     * ProviderIDList are the identification IDs of machine instances provided by the provider.
     * This field must match the provider IDs as seen on the node objects corresponding to a machine pool's machine instances.
     */
    providerIDList?: string[];
  };
  /**
   * KarpenterMachinePoolStatus defines the observed state of KarpenterMachinePool.
   */
  status?: {
    /**
     * Conditions defines current service state of the KarpenterMachinePool.
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
     * Ready denotes that the KarpenterMachinePool is ready and fulfilling the infrastructure contract.
     */
    ready?: boolean;
    /**
     * Replicas is the most recently observed number of replicas
     */
    replicas?: number;
  };
}
