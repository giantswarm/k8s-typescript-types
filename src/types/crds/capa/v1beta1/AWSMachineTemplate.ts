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
  apiVersion: 'infrastructure.cluster.x-k8s.io/v1beta1';
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
           * ARN of resource.
           * Deprecated: This field has no function and is going to be removed in the next release.
           */
          arn?: string;
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
          eksLookupType?: 'AmazonLinux' | 'AmazonLinuxGPU';
          /**
           * ID of resource
           */
          id?: string;
        };
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
         * FailureDomain is the failure domain unique identifier this Machine should be attached to, as defined in Cluster API.
         * For this infrastructure provider, the ID is equivalent to an AWS Availability Zone.
         * If multiple subnets are matched for the availability zone, the first one returned is picked.
         */
        failureDomain?: string;
        /**
         * IAMInstanceProfile is a name of an IAM instance profile to assign to the instance
         */
        iamInstanceProfile?: string;
        /**
         * Ignition defined options related to the bootstrapping systems where Ignition is used.
         */
        ignition?: {
          /**
           * Version defines which version of Ignition will be used to generate bootstrap data.
           */
          version?: '2.3';
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
         * InstanceType is the type of instance to create. Example: m4.xlarge
         */
        instanceType: string;
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
           * ARN of resource.
           * Deprecated: This field has no function and is going to be removed in the next release.
           */
          arn?: string;
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
  };
}
