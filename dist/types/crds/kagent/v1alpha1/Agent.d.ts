/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * Agent is the Schema for the agents API.
 */
export interface Agent {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: 'kagent.dev/v1alpha1';
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: 'Agent';
    metadata: metav1.ObjectMeta;
    /**
     * AgentSpec defines the desired state of Agent.
     */
    spec?: {
        /**
         * A2AConfig instantiates an A2A server for this agent,
         * served on the HTTP port of the kagent kubernetes
         * controller (default 8083).
         * The A2A server URL will be served at
         * <kagent-controller-ip>:8083/api/a2a/<agent-namespace>/<agent-name>
         * Read more about the A2A protocol here: https://github.com/a2aproject/A2A
         */
        a2aConfig?: {
            /**
             * @minItems 1
             */
            skills?: [
                {
                    /**
                     * Description is an optional detailed description of the skill.
                     */
                    description?: string;
                    /**
                     * Examples are optional usage examples.
                     */
                    examples?: string[];
                    /**
                     * ID is the unique identifier for the skill.
                     */
                    id: string;
                    /**
                     * InputModes are the supported input data modes/types.
                     */
                    inputModes?: string[];
                    /**
                     * Name is the human-readable name of the skill.
                     */
                    name: string;
                    /**
                     * OutputModes are the supported output data modes/types.
                     */
                    outputModes?: string[];
                    /**
                     * Tags are optional tags for categorization.
                     */
                    tags: string[];
                },
                ...{
                    /**
                     * Description is an optional detailed description of the skill.
                     */
                    description?: string;
                    /**
                     * Examples are optional usage examples.
                     */
                    examples?: string[];
                    /**
                     * ID is the unique identifier for the skill.
                     */
                    id: string;
                    /**
                     * InputModes are the supported input data modes/types.
                     */
                    inputModes?: string[];
                    /**
                     * Name is the human-readable name of the skill.
                     */
                    name: string;
                    /**
                     * OutputModes are the supported output data modes/types.
                     */
                    outputModes?: string[];
                    /**
                     * Tags are optional tags for categorization.
                     */
                    tags: string[];
                }[]
            ];
        };
        deployment?: {
            annotations?: {
                [k: string]: string;
            };
            env?: {
                /**
                 * Name of the environment variable.
                 * May consist of any printable ASCII characters except '='.
                 */
                name: string;
                /**
                 * Variable references $(VAR_NAME) are expanded
                 * using the previously defined environment variables in the container and
                 * any service environment variables. If a variable cannot be resolved,
                 * the reference in the input string will be unchanged. Double $$ are reduced
                 * to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
                 * "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
                 * Escaped references will never be expanded, regardless of whether the variable
                 * exists or not.
                 * Defaults to "".
                 */
                value?: string;
                /**
                 * Source for the environment variable's value. Cannot be used if value is not empty.
                 */
                valueFrom?: {
                    /**
                     * Selects a key of a ConfigMap.
                     */
                    configMapKeyRef?: {
                        /**
                         * The key to select.
                         */
                        key: string;
                        /**
                         * Name of the referent.
                         * This field is effectively required, but due to backwards compatibility is
                         * allowed to be empty. Instances of this type with an empty value here are
                         * almost certainly wrong.
                         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        name?: string;
                        /**
                         * Specify whether the ConfigMap or its key must be defined
                         */
                        optional?: boolean;
                    };
                    /**
                     * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`,
                     * spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
                     */
                    fieldRef?: {
                        /**
                         * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                         */
                        apiVersion?: string;
                        /**
                         * Path of the field to select in the specified API version.
                         */
                        fieldPath: string;
                    };
                    /**
                     * FileKeyRef selects a key of the env file.
                     * Requires the EnvFiles feature gate to be enabled.
                     */
                    fileKeyRef?: {
                        /**
                         * The key within the env file. An invalid key will prevent the pod from starting.
                         * The keys defined within a source may consist of any printable ASCII characters except '='.
                         * During Alpha stage of the EnvFiles feature gate, the key size is limited to 128 characters.
                         */
                        key: string;
                        /**
                         * Specify whether the file or its key must be defined. If the file or key
                         * does not exist, then the env var is not published.
                         * If optional is set to true and the specified key does not exist,
                         * the environment variable will not be set in the Pod's containers.
                         *
                         * If optional is set to false and the specified key does not exist,
                         * an error will be returned during Pod creation.
                         */
                        optional?: boolean;
                        /**
                         * The path within the volume from which to select the file.
                         * Must be relative and may not contain the '..' path or start with '..'.
                         */
                        path: string;
                        /**
                         * The name of the volume mount containing the env file.
                         */
                        volumeName: string;
                    };
                    /**
                     * Selects a resource of the container: only resources limits and requests
                     * (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
                     */
                    resourceFieldRef?: {
                        /**
                         * Container name: required for volumes, optional for env vars
                         */
                        containerName?: string;
                        /**
                         * Specifies the output format of the exposed resources, defaults to "1"
                         */
                        divisor?: number | string;
                        /**
                         * Required: resource to select
                         */
                        resource: string;
                    };
                    /**
                     * Selects a key of a secret in the pod's namespace
                     */
                    secretKeyRef?: {
                        /**
                         * The key of the secret to select from.  Must be a valid secret key.
                         */
                        key: string;
                        /**
                         * Name of the referent.
                         * This field is effectively required, but due to backwards compatibility is
                         * allowed to be empty. Instances of this type with an empty value here are
                         * almost certainly wrong.
                         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        name?: string;
                        /**
                         * Specify whether the Secret or its key must be defined
                         */
                        optional?: boolean;
                    };
                };
            }[];
            imagePullSecrets?: {
                /**
                 * Name of the referent.
                 * This field is effectively required, but due to backwards compatibility is
                 * allowed to be empty. Instances of this type with an empty value here are
                 * almost certainly wrong.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                name?: string;
            }[];
            labels?: {
                [k: string]: string;
            };
            /**
             * If not specified, the default value is 1.
             */
            replicas?: number;
            volumes?: {
                /**
                 * awsElasticBlockStore represents an AWS Disk resource that is attached to a
                 * kubelet's host machine and then exposed to the pod.
                 * Deprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree
                 * awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver.
                 * More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                 */
                awsElasticBlockStore?: {
                    /**
                     * fsType is the filesystem type of the volume that you want to mount.
                     * Tip: Ensure that the filesystem type is supported by the host operating system.
                     * Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                     */
                    fsType?: string;
                    /**
                     * partition is the partition in the volume that you want to mount.
                     * If omitted, the default is to mount by volume name.
                     * Examples: For volume /dev/sda1, you specify the partition as "1".
                     * Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
                     */
                    partition?: number;
                    /**
                     * readOnly value true will force the readOnly setting in VolumeMounts.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                     */
                    readOnly?: boolean;
                    /**
                     * volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume).
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
                     */
                    volumeID: string;
                };
                /**
                 * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
                 * Deprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type
                 * are redirected to the disk.csi.azure.com CSI driver.
                 */
                azureDisk?: {
                    /**
                     * cachingMode is the Host Caching mode: None, Read Only, Read Write.
                     */
                    cachingMode?: string;
                    /**
                     * diskName is the Name of the data disk in the blob storage
                     */
                    diskName: string;
                    /**
                     * diskURI is the URI of data disk in the blob storage
                     */
                    diskURI: string;
                    /**
                     * fsType is Filesystem type to mount.
                     * Must be a filesystem type supported by the host operating system.
                     * Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     */
                    fsType?: string;
                    /**
                     * kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
                     */
                    kind?: string;
                    /**
                     * readOnly Defaults to false (read/write). ReadOnly here will force
                     * the ReadOnly setting in VolumeMounts.
                     */
                    readOnly?: boolean;
                };
                /**
                 * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
                 * Deprecated: AzureFile is deprecated. All operations for the in-tree azureFile type
                 * are redirected to the file.csi.azure.com CSI driver.
                 */
                azureFile?: {
                    /**
                     * readOnly defaults to false (read/write). ReadOnly here will force
                     * the ReadOnly setting in VolumeMounts.
                     */
                    readOnly?: boolean;
                    /**
                     * secretName is the  name of secret that contains Azure Storage Account Name and Key
                     */
                    secretName: string;
                    /**
                     * shareName is the azure share Name
                     */
                    shareName: string;
                };
                /**
                 * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime.
                 * Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported.
                 */
                cephfs?: {
                    /**
                     * monitors is Required: Monitors is a collection of Ceph monitors
                     * More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                     */
                    monitors: string[];
                    /**
                     * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
                     */
                    path?: string;
                    /**
                     * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force
                     * the ReadOnly setting in VolumeMounts.
                     * More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                     */
                    readOnly?: boolean;
                    /**
                     * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret
                     * More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                     */
                    secretFile?: string;
                    /**
                     * secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty.
                     * More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                     */
                    secretRef?: {
                        /**
                         * Name of the referent.
                         * This field is effectively required, but due to backwards compatibility is
                         * allowed to be empty. Instances of this type with an empty value here are
                         * almost certainly wrong.
                         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        name?: string;
                    };
                    /**
                     * user is optional: User is the rados user name, default is admin
                     * More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
                     */
                    user?: string;
                };
                /**
                 * cinder represents a cinder volume attached and mounted on kubelets host machine.
                 * Deprecated: Cinder is deprecated. All operations for the in-tree cinder type
                 * are redirected to the cinder.csi.openstack.org CSI driver.
                 * More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                 */
                cinder?: {
                    /**
                     * fsType is the filesystem type to mount.
                     * Must be a filesystem type supported by the host operating system.
                     * Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     * More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                     */
                    fsType?: string;
                    /**
                     * readOnly defaults to false (read/write). ReadOnly here will force
                     * the ReadOnly setting in VolumeMounts.
                     * More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                     */
                    readOnly?: boolean;
                    /**
                     * secretRef is optional: points to a secret object containing parameters used to connect
                     * to OpenStack.
                     */
                    secretRef?: {
                        /**
                         * Name of the referent.
                         * This field is effectively required, but due to backwards compatibility is
                         * allowed to be empty. Instances of this type with an empty value here are
                         * almost certainly wrong.
                         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        name?: string;
                    };
                    /**
                     * volumeID used to identify the volume in cinder.
                     * More info: https://examples.k8s.io/mysql-cinder-pd/README.md
                     */
                    volumeID: string;
                };
                /**
                 * configMap represents a configMap that should populate this volume
                 */
                configMap?: {
                    /**
                     * defaultMode is optional: mode bits used to set permissions on created files by default.
                     * Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                     * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                     * Defaults to 0644.
                     * Directories within the path are not affected by this setting.
                     * This might be in conflict with other options that affect the file
                     * mode, like fsGroup, and the result can be other mode bits set.
                     */
                    defaultMode?: number;
                    /**
                     * items if unspecified, each key-value pair in the Data field of the referenced
                     * ConfigMap will be projected into the volume as a file whose name is the
                     * key and content is the value. If specified, the listed keys will be
                     * projected into the specified paths, and unlisted keys will not be
                     * present. If a key is specified which is not present in the ConfigMap,
                     * the volume setup will error unless it is marked optional. Paths must be
                     * relative and may not contain the '..' path or start with '..'.
                     */
                    items?: {
                        /**
                         * key is the key to project.
                         */
                        key: string;
                        /**
                         * mode is Optional: mode bits used to set permissions on this file.
                         * Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                         * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         * If not specified, the volume defaultMode will be used.
                         * This might be in conflict with other options that affect the file
                         * mode, like fsGroup, and the result can be other mode bits set.
                         */
                        mode?: number;
                        /**
                         * path is the relative path of the file to map the key to.
                         * May not be an absolute path.
                         * May not contain the path element '..'.
                         * May not start with the string '..'.
                         */
                        path: string;
                    }[];
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    name?: string;
                    /**
                     * optional specify whether the ConfigMap or its keys must be defined
                     */
                    optional?: boolean;
                };
                /**
                 * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers.
                 */
                csi?: {
                    /**
                     * driver is the name of the CSI driver that handles this volume.
                     * Consult with your admin for the correct name as registered in the cluster.
                     */
                    driver: string;
                    /**
                     * fsType to mount. Ex. "ext4", "xfs", "ntfs".
                     * If not provided, the empty value is passed to the associated CSI driver
                     * which will determine the default filesystem to apply.
                     */
                    fsType?: string;
                    /**
                     * nodePublishSecretRef is a reference to the secret object containing
                     * sensitive information to pass to the CSI driver to complete the CSI
                     * NodePublishVolume and NodeUnpublishVolume calls.
                     * This field is optional, and  may be empty if no secret is required. If the
                     * secret object contains more than one secret, all secret references are passed.
                     */
                    nodePublishSecretRef?: {
                        /**
                         * Name of the referent.
                         * This field is effectively required, but due to backwards compatibility is
                         * allowed to be empty. Instances of this type with an empty value here are
                         * almost certainly wrong.
                         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        name?: string;
                    };
                    /**
                     * readOnly specifies a read-only configuration for the volume.
                     * Defaults to false (read/write).
                     */
                    readOnly?: boolean;
                    /**
                     * volumeAttributes stores driver-specific properties that are passed to the CSI
                     * driver. Consult your driver's documentation for supported values.
                     */
                    volumeAttributes?: {
                        [k: string]: string;
                    };
                };
                /**
                 * downwardAPI represents downward API about the pod that should populate this volume
                 */
                downwardAPI?: {
                    /**
                     * Optional: mode bits to use on created files by default. Must be a
                     * Optional: mode bits used to set permissions on created files by default.
                     * Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                     * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                     * Defaults to 0644.
                     * Directories within the path are not affected by this setting.
                     * This might be in conflict with other options that affect the file
                     * mode, like fsGroup, and the result can be other mode bits set.
                     */
                    defaultMode?: number;
                    /**
                     * Items is a list of downward API volume file
                     */
                    items?: {
                        /**
                         * Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
                         */
                        fieldRef?: {
                            /**
                             * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                             */
                            apiVersion?: string;
                            /**
                             * Path of the field to select in the specified API version.
                             */
                            fieldPath: string;
                        };
                        /**
                         * Optional: mode bits used to set permissions on this file, must be an octal value
                         * between 0000 and 0777 or a decimal value between 0 and 511.
                         * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         * If not specified, the volume defaultMode will be used.
                         * This might be in conflict with other options that affect the file
                         * mode, like fsGroup, and the result can be other mode bits set.
                         */
                        mode?: number;
                        /**
                         * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                         */
                        path: string;
                        /**
                         * Selects a resource of the container: only resources limits and requests
                         * (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                         */
                        resourceFieldRef?: {
                            /**
                             * Container name: required for volumes, optional for env vars
                             */
                            containerName?: string;
                            /**
                             * Specifies the output format of the exposed resources, defaults to "1"
                             */
                            divisor?: number | string;
                            /**
                             * Required: resource to select
                             */
                            resource: string;
                        };
                    }[];
                };
                /**
                 * emptyDir represents a temporary directory that shares a pod's lifetime.
                 * More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
                 */
                emptyDir?: {
                    /**
                     * medium represents what type of storage medium should back this directory.
                     * The default is "" which means to use the node's default medium.
                     * Must be an empty string (default) or Memory.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
                     */
                    medium?: string;
                    /**
                     * sizeLimit is the total amount of local storage required for this EmptyDir volume.
                     * The size limit is also applicable for memory medium.
                     * The maximum usage on memory medium EmptyDir would be the minimum value between
                     * the SizeLimit specified here and the sum of memory limits of all containers in a pod.
                     * The default is nil which means that the limit is undefined.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
                     */
                    sizeLimit?: number | string;
                };
                /**
                 * ephemeral represents a volume that is handled by a cluster storage driver.
                 * The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts,
                 * and deleted when the pod is removed.
                 *
                 * Use this if:
                 * a) the volume is only needed while the pod runs,
                 * b) features of normal volumes like restoring from snapshot or capacity
                 *    tracking are needed,
                 * c) the storage driver is specified through a storage class, and
                 * d) the storage driver supports dynamic volume provisioning through
                 *    a PersistentVolumeClaim (see EphemeralVolumeSource for more
                 *    information on the connection between this volume type
                 *    and PersistentVolumeClaim).
                 *
                 * Use PersistentVolumeClaim or one of the vendor-specific
                 * APIs for volumes that persist for longer than the lifecycle
                 * of an individual pod.
                 *
                 * Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to
                 * be used that way - see the documentation of the driver for
                 * more information.
                 *
                 * A pod can use both types of ephemeral volumes and
                 * persistent volumes at the same time.
                 */
                ephemeral?: {
                    /**
                     * Will be used to create a stand-alone PVC to provision the volume.
                     * The pod in which this EphemeralVolumeSource is embedded will be the
                     * owner of the PVC, i.e. the PVC will be deleted together with the
                     * pod.  The name of the PVC will be `<pod name>-<volume name>` where
                     * `<volume name>` is the name from the `PodSpec.Volumes` array
                     * entry. Pod validation will reject the pod if the concatenated name
                     * is not valid for a PVC (for example, too long).
                     *
                     * An existing PVC with that name that is not owned by the pod
                     * will *not* be used for the pod to avoid using an unrelated
                     * volume by mistake. Starting the pod is then blocked until
                     * the unrelated PVC is removed. If such a pre-created PVC is
                     * meant to be used by the pod, the PVC has to updated with an
                     * owner reference to the pod once the pod exists. Normally
                     * this should not be necessary, but it may be useful when
                     * manually reconstructing a broken cluster.
                     *
                     * This field is read-only and no changes will be made by Kubernetes
                     * to the PVC after it has been created.
                     *
                     * Required, must not be nil.
                     */
                    volumeClaimTemplate?: {
                        /**
                         * May contain labels and annotations that will be copied into the PVC
                         * when creating it. No other fields are allowed and will be rejected during
                         * validation.
                         */
                        metadata?: {};
                        /**
                         * The specification for the PersistentVolumeClaim. The entire content is
                         * copied unchanged into the PVC that gets created from this
                         * template. The same fields as in a PersistentVolumeClaim
                         * are also valid here.
                         */
                        spec: {
                            /**
                             * accessModes contains the desired access modes the volume should have.
                             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
                             */
                            accessModes?: string[];
                            /**
                             * dataSource field can be used to specify either:
                             * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
                             * * An existing PVC (PersistentVolumeClaim)
                             * If the provisioner or an external controller can support the specified data source,
                             * it will create a new volume based on the contents of the specified data source.
                             * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
                             * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
                             * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
                             */
                            dataSource?: {
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
                            };
                            /**
                             * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
                             * volume is desired. This may be any object from a non-empty API group (non
                             * core object) or a PersistentVolumeClaim object.
                             * When this field is specified, volume binding will only succeed if the type of
                             * the specified object matches some installed volume populator or dynamic
                             * provisioner.
                             * This field will replace the functionality of the dataSource field and as such
                             * if both fields are non-empty, they must have the same value. For backwards
                             * compatibility, when namespace isn't specified in dataSourceRef,
                             * both fields (dataSource and dataSourceRef) will be set to the same
                             * value automatically if one of them is empty and the other is non-empty.
                             * When namespace is specified in dataSourceRef,
                             * dataSource isn't set to the same value and must be empty.
                             * There are three important differences between dataSource and dataSourceRef:
                             * * While dataSource only allows two specific types of objects, dataSourceRef
                             *   allows any non-core object, as well as PersistentVolumeClaim objects.
                             * * While dataSource ignores disallowed values (dropping them), dataSourceRef
                             *   preserves all values, and generates an error if a disallowed value is
                             *   specified.
                             * * While dataSource only allows local objects, dataSourceRef allows objects
                             *   in any namespaces.
                             * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
                             * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                             */
                            dataSourceRef?: {
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
                                /**
                                 * Namespace is the namespace of resource being referenced
                                 * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
                                 * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
                                 */
                                namespace?: string;
                            };
                            /**
                             * resources represents the minimum resources the volume should have.
                             * Users are allowed to specify resource requirements
                             * that are lower than previous value but must still be higher than capacity recorded in the
                             * status field of the claim.
                             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
                             */
                            resources?: {
                                /**
                                 * Limits describes the maximum amount of compute resources allowed.
                                 * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                                 */
                                limits?: {
                                    [k: string]: number | string;
                                };
                                /**
                                 * Requests describes the minimum amount of compute resources required.
                                 * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
                                 * otherwise to an implementation-defined value. Requests cannot exceed Limits.
                                 * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
                                 */
                                requests?: {
                                    [k: string]: number | string;
                                };
                            };
                            /**
                             * selector is a label query over volumes to consider for binding.
                             */
                            selector?: {
                                /**
                                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                                 */
                                matchExpressions?: {
                                    /**
                                     * key is the label key that the selector applies to.
                                     */
                                    key: string;
                                    /**
                                     * operator represents a key's relationship to a set of values.
                                     * Valid operators are In, NotIn, Exists and DoesNotExist.
                                     */
                                    operator: string;
                                    /**
                                     * values is an array of string values. If the operator is In or NotIn,
                                     * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                                     * the values array must be empty. This array is replaced during a strategic
                                     * merge patch.
                                     */
                                    values?: string[];
                                }[];
                                /**
                                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                                 * map is equivalent to an element of matchExpressions, whose key field is "key", the
                                 * operator is "In", and the values array contains only "value". The requirements are ANDed.
                                 */
                                matchLabels?: {
                                    [k: string]: string;
                                };
                            };
                            /**
                             * storageClassName is the name of the StorageClass required by the claim.
                             * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
                             */
                            storageClassName?: string;
                            /**
                             * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
                             * If specified, the CSI driver will create or update the volume with the attributes defined
                             * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
                             * it can be changed after the claim is created. An empty string or nil value indicates that no
                             * VolumeAttributesClass will be applied to the claim. If the claim enters an Infeasible error state,
                             * this field can be reset to its previous value (including nil) to cancel the modification.
                             * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
                             * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
                             * exists.
                             * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
                             */
                            volumeAttributesClassName?: string;
                            /**
                             * volumeMode defines what type of volume is required by the claim.
                             * Value of Filesystem is implied when not included in claim spec.
                             */
                            volumeMode?: string;
                            /**
                             * volumeName is the binding reference to the PersistentVolume backing this claim.
                             */
                            volumeName?: string;
                        };
                    };
                };
                /**
                 * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
                 */
                fc?: {
                    /**
                     * fsType is the filesystem type to mount.
                     * Must be a filesystem type supported by the host operating system.
                     * Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     */
                    fsType?: string;
                    /**
                     * lun is Optional: FC target lun number
                     */
                    lun?: number;
                    /**
                     * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force
                     * the ReadOnly setting in VolumeMounts.
                     */
                    readOnly?: boolean;
                    /**
                     * targetWWNs is Optional: FC target worldwide names (WWNs)
                     */
                    targetWWNs?: string[];
                    /**
                     * wwids Optional: FC volume world wide identifiers (wwids)
                     * Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
                     */
                    wwids?: string[];
                };
                /**
                 * flexVolume represents a generic volume resource that is
                 * provisioned/attached using an exec based plugin.
                 * Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead.
                 */
                flexVolume?: {
                    /**
                     * driver is the name of the driver to use for this volume.
                     */
                    driver: string;
                    /**
                     * fsType is the filesystem type to mount.
                     * Must be a filesystem type supported by the host operating system.
                     * Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
                     */
                    fsType?: string;
                    /**
                     * options is Optional: this field holds extra command options if any.
                     */
                    options?: {
                        [k: string]: string;
                    };
                    /**
                     * readOnly is Optional: defaults to false (read/write). ReadOnly here will force
                     * the ReadOnly setting in VolumeMounts.
                     */
                    readOnly?: boolean;
                    /**
                     * secretRef is Optional: secretRef is reference to the secret object containing
                     * sensitive information to pass to the plugin scripts. This may be
                     * empty if no secret object is specified. If the secret object
                     * contains more than one secret, all secrets are passed to the plugin
                     * scripts.
                     */
                    secretRef?: {
                        /**
                         * Name of the referent.
                         * This field is effectively required, but due to backwards compatibility is
                         * allowed to be empty. Instances of this type with an empty value here are
                         * almost certainly wrong.
                         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        name?: string;
                    };
                };
                /**
                 * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running.
                 * Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported.
                 */
                flocker?: {
                    /**
                     * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker
                     * should be considered as deprecated
                     */
                    datasetName?: string;
                    /**
                     * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
                     */
                    datasetUUID?: string;
                };
                /**
                 * gcePersistentDisk represents a GCE Disk resource that is attached to a
                 * kubelet's host machine and then exposed to the pod.
                 * Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree
                 * gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver.
                 * More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                 */
                gcePersistentDisk?: {
                    /**
                     * fsType is filesystem type of the volume that you want to mount.
                     * Tip: Ensure that the filesystem type is supported by the host operating system.
                     * Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                     */
                    fsType?: string;
                    /**
                     * partition is the partition in the volume that you want to mount.
                     * If omitted, the default is to mount by volume name.
                     * Examples: For volume /dev/sda1, you specify the partition as "1".
                     * Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                     */
                    partition?: number;
                    /**
                     * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                     */
                    pdName: string;
                    /**
                     * readOnly here will force the ReadOnly setting in VolumeMounts.
                     * Defaults to false.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
                     */
                    readOnly?: boolean;
                };
                /**
                 * gitRepo represents a git repository at a particular revision.
                 * Deprecated: GitRepo is deprecated. To provision a container with a git repo, mount an
                 * EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir
                 * into the Pod's container.
                 */
                gitRepo?: {
                    /**
                     * directory is the target directory name.
                     * Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the
                     * git repository.  Otherwise, if specified, the volume will contain the git repository in
                     * the subdirectory with the given name.
                     */
                    directory?: string;
                    /**
                     * repository is the URL
                     */
                    repository: string;
                    /**
                     * revision is the commit hash for the specified revision.
                     */
                    revision?: string;
                };
                /**
                 * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime.
                 * Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported.
                 */
                glusterfs?: {
                    /**
                     * endpoints is the endpoint name that details Glusterfs topology.
                     */
                    endpoints: string;
                    /**
                     * path is the Glusterfs volume path.
                     * More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
                     */
                    path: string;
                    /**
                     * readOnly here will force the Glusterfs volume to be mounted with read-only permissions.
                     * Defaults to false.
                     * More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
                     */
                    readOnly?: boolean;
                };
                /**
                 * hostPath represents a pre-existing file or directory on the host
                 * machine that is directly exposed to the container. This is generally
                 * used for system agents or other privileged things that are allowed
                 * to see the host machine. Most containers will NOT need this.
                 * More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
                 */
                hostPath?: {
                    /**
                     * path of the directory on the host.
                     * If the path is a symlink, it will follow the link to the real path.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
                     */
                    path: string;
                    /**
                     * type for HostPath Volume
                     * Defaults to ""
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
                     */
                    type?: string;
                };
                /**
                 * image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine.
                 * The volume is resolved at pod startup depending on which PullPolicy value is provided:
                 *
                 * - Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails.
                 * - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present.
                 * - IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.
                 *
                 * The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation.
                 * A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message.
                 * The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field.
                 * The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images.
                 * The volume will be mounted read-only (ro).
                 * Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath) before 1.33.
                 * The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
                 */
                image?: {
                    /**
                     * Policy for pulling OCI objects. Possible values are:
                     * Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails.
                     * Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present.
                     * IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.
                     * Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
                     */
                    pullPolicy?: string;
                    /**
                     * Required: Image or artifact reference to be used.
                     * Behaves in the same way as pod.spec.containers[*].image.
                     * Pull secrets will be assembled in the same way as for the container image by looking up node credentials, SA image pull secrets, and pod spec image pull secrets.
                     * More info: https://kubernetes.io/docs/concepts/containers/images
                     * This field is optional to allow higher level config management to default or override
                     * container images in workload controllers like Deployments and StatefulSets.
                     */
                    reference?: string;
                };
                /**
                 * iscsi represents an ISCSI Disk resource that is attached to a
                 * kubelet's host machine and then exposed to the pod.
                 * More info: https://kubernetes.io/docs/concepts/storage/volumes/#iscsi
                 */
                iscsi?: {
                    /**
                     * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
                     */
                    chapAuthDiscovery?: boolean;
                    /**
                     * chapAuthSession defines whether support iSCSI Session CHAP authentication
                     */
                    chapAuthSession?: boolean;
                    /**
                     * fsType is the filesystem type of the volume that you want to mount.
                     * Tip: Ensure that the filesystem type is supported by the host operating system.
                     * Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
                     */
                    fsType?: string;
                    /**
                     * initiatorName is the custom iSCSI Initiator Name.
                     * If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface
                     * <target portal>:<volume name> will be created for the connection.
                     */
                    initiatorName?: string;
                    /**
                     * iqn is the target iSCSI Qualified Name.
                     */
                    iqn: string;
                    /**
                     * iscsiInterface is the interface Name that uses an iSCSI transport.
                     * Defaults to 'default' (tcp).
                     */
                    iscsiInterface?: string;
                    /**
                     * lun represents iSCSI Target Lun number.
                     */
                    lun: number;
                    /**
                     * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port
                     * is other than default (typically TCP ports 860 and 3260).
                     */
                    portals?: string[];
                    /**
                     * readOnly here will force the ReadOnly setting in VolumeMounts.
                     * Defaults to false.
                     */
                    readOnly?: boolean;
                    /**
                     * secretRef is the CHAP Secret for iSCSI target and initiator authentication
                     */
                    secretRef?: {
                        /**
                         * Name of the referent.
                         * This field is effectively required, but due to backwards compatibility is
                         * allowed to be empty. Instances of this type with an empty value here are
                         * almost certainly wrong.
                         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        name?: string;
                    };
                    /**
                     * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port
                     * is other than default (typically TCP ports 860 and 3260).
                     */
                    targetPortal: string;
                };
                /**
                 * name of the volume.
                 * Must be a DNS_LABEL and unique within the pod.
                 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                 */
                name: string;
                /**
                 * nfs represents an NFS mount on the host that shares a pod's lifetime
                 * More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                 */
                nfs?: {
                    /**
                     * path that is exported by the NFS server.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                     */
                    path: string;
                    /**
                     * readOnly here will force the NFS export to be mounted with read-only permissions.
                     * Defaults to false.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                     */
                    readOnly?: boolean;
                    /**
                     * server is the hostname or IP address of the NFS server.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
                     */
                    server: string;
                };
                /**
                 * persistentVolumeClaimVolumeSource represents a reference to a
                 * PersistentVolumeClaim in the same namespace.
                 * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                 */
                persistentVolumeClaim?: {
                    /**
                     * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume.
                     * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
                     */
                    claimName: string;
                    /**
                     * readOnly Will force the ReadOnly setting in VolumeMounts.
                     * Default false.
                     */
                    readOnly?: boolean;
                };
                /**
                 * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine.
                 * Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported.
                 */
                photonPersistentDisk?: {
                    /**
                     * fsType is the filesystem type to mount.
                     * Must be a filesystem type supported by the host operating system.
                     * Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     */
                    fsType?: string;
                    /**
                     * pdID is the ID that identifies Photon Controller persistent disk
                     */
                    pdID: string;
                };
                /**
                 * portworxVolume represents a portworx volume attached and mounted on kubelets host machine.
                 * Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type
                 * are redirected to the pxd.portworx.com CSI driver.
                 */
                portworxVolume?: {
                    /**
                     * fSType represents the filesystem type to mount
                     * Must be a filesystem type supported by the host operating system.
                     * Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
                     */
                    fsType?: string;
                    /**
                     * readOnly defaults to false (read/write). ReadOnly here will force
                     * the ReadOnly setting in VolumeMounts.
                     */
                    readOnly?: boolean;
                    /**
                     * volumeID uniquely identifies a Portworx volume
                     */
                    volumeID: string;
                };
                /**
                 * projected items for all in one resources secrets, configmaps, and downward API
                 */
                projected?: {
                    /**
                     * defaultMode are the mode bits used to set permissions on created files by default.
                     * Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                     * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                     * Directories within the path are not affected by this setting.
                     * This might be in conflict with other options that affect the file
                     * mode, like fsGroup, and the result can be other mode bits set.
                     */
                    defaultMode?: number;
                    /**
                     * sources is the list of volume projections. Each entry in this list
                     * handles one source.
                     */
                    sources?: {
                        /**
                         * ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field
                         * of ClusterTrustBundle objects in an auto-updating file.
                         *
                         * Alpha, gated by the ClusterTrustBundleProjection feature gate.
                         *
                         * ClusterTrustBundle objects can either be selected by name, or by the
                         * combination of signer name and a label selector.
                         *
                         * Kubelet performs aggressive normalization of the PEM contents written
                         * into the pod filesystem.  Esoteric PEM features such as inter-block
                         * comments and block headers are stripped.  Certificates are deduplicated.
                         * The ordering of certificates within the file is arbitrary, and Kubelet
                         * may change the order over time.
                         */
                        clusterTrustBundle?: {
                            /**
                             * Select all ClusterTrustBundles that match this label selector.  Only has
                             * effect if signerName is set.  Mutually-exclusive with name.  If unset,
                             * interpreted as "match nothing".  If set but empty, interpreted as "match
                             * everything".
                             */
                            labelSelector?: {
                                /**
                                 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
                                 */
                                matchExpressions?: {
                                    /**
                                     * key is the label key that the selector applies to.
                                     */
                                    key: string;
                                    /**
                                     * operator represents a key's relationship to a set of values.
                                     * Valid operators are In, NotIn, Exists and DoesNotExist.
                                     */
                                    operator: string;
                                    /**
                                     * values is an array of string values. If the operator is In or NotIn,
                                     * the values array must be non-empty. If the operator is Exists or DoesNotExist,
                                     * the values array must be empty. This array is replaced during a strategic
                                     * merge patch.
                                     */
                                    values?: string[];
                                }[];
                                /**
                                 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
                                 * map is equivalent to an element of matchExpressions, whose key field is "key", the
                                 * operator is "In", and the values array contains only "value". The requirements are ANDed.
                                 */
                                matchLabels?: {
                                    [k: string]: string;
                                };
                            };
                            /**
                             * Select a single ClusterTrustBundle by object name.  Mutually-exclusive
                             * with signerName and labelSelector.
                             */
                            name?: string;
                            /**
                             * If true, don't block pod startup if the referenced ClusterTrustBundle(s)
                             * aren't available.  If using name, then the named ClusterTrustBundle is
                             * allowed not to exist.  If using signerName, then the combination of
                             * signerName and labelSelector is allowed to match zero
                             * ClusterTrustBundles.
                             */
                            optional?: boolean;
                            /**
                             * Relative path from the volume root to write the bundle.
                             */
                            path: string;
                            /**
                             * Select all ClusterTrustBundles that match this signer name.
                             * Mutually-exclusive with name.  The contents of all selected
                             * ClusterTrustBundles will be unified and deduplicated.
                             */
                            signerName?: string;
                        };
                        /**
                         * configMap information about the configMap data to project
                         */
                        configMap?: {
                            /**
                             * items if unspecified, each key-value pair in the Data field of the referenced
                             * ConfigMap will be projected into the volume as a file whose name is the
                             * key and content is the value. If specified, the listed keys will be
                             * projected into the specified paths, and unlisted keys will not be
                             * present. If a key is specified which is not present in the ConfigMap,
                             * the volume setup will error unless it is marked optional. Paths must be
                             * relative and may not contain the '..' path or start with '..'.
                             */
                            items?: {
                                /**
                                 * key is the key to project.
                                 */
                                key: string;
                                /**
                                 * mode is Optional: mode bits used to set permissions on this file.
                                 * Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                                 * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                                 * If not specified, the volume defaultMode will be used.
                                 * This might be in conflict with other options that affect the file
                                 * mode, like fsGroup, and the result can be other mode bits set.
                                 */
                                mode?: number;
                                /**
                                 * path is the relative path of the file to map the key to.
                                 * May not be an absolute path.
                                 * May not contain the path element '..'.
                                 * May not start with the string '..'.
                                 */
                                path: string;
                            }[];
                            /**
                             * Name of the referent.
                             * This field is effectively required, but due to backwards compatibility is
                             * allowed to be empty. Instances of this type with an empty value here are
                             * almost certainly wrong.
                             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                             */
                            name?: string;
                            /**
                             * optional specify whether the ConfigMap or its keys must be defined
                             */
                            optional?: boolean;
                        };
                        /**
                         * downwardAPI information about the downwardAPI data to project
                         */
                        downwardAPI?: {
                            /**
                             * Items is a list of DownwardAPIVolume file
                             */
                            items?: {
                                /**
                                 * Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
                                 */
                                fieldRef?: {
                                    /**
                                     * Version of the schema the FieldPath is written in terms of, defaults to "v1".
                                     */
                                    apiVersion?: string;
                                    /**
                                     * Path of the field to select in the specified API version.
                                     */
                                    fieldPath: string;
                                };
                                /**
                                 * Optional: mode bits used to set permissions on this file, must be an octal value
                                 * between 0000 and 0777 or a decimal value between 0 and 511.
                                 * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                                 * If not specified, the volume defaultMode will be used.
                                 * This might be in conflict with other options that affect the file
                                 * mode, like fsGroup, and the result can be other mode bits set.
                                 */
                                mode?: number;
                                /**
                                 * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
                                 */
                                path: string;
                                /**
                                 * Selects a resource of the container: only resources limits and requests
                                 * (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
                                 */
                                resourceFieldRef?: {
                                    /**
                                     * Container name: required for volumes, optional for env vars
                                     */
                                    containerName?: string;
                                    /**
                                     * Specifies the output format of the exposed resources, defaults to "1"
                                     */
                                    divisor?: number | string;
                                    /**
                                     * Required: resource to select
                                     */
                                    resource: string;
                                };
                            }[];
                        };
                        /**
                         * Projects an auto-rotating credential bundle (private key and certificate
                         * chain) that the pod can use either as a TLS client or server.
                         *
                         * Kubelet generates a private key and uses it to send a
                         * PodCertificateRequest to the named signer.  Once the signer approves the
                         * request and issues a certificate chain, Kubelet writes the key and
                         * certificate chain to the pod filesystem.  The pod does not start until
                         * certificates have been issued for each podCertificate projected volume
                         * source in its spec.
                         *
                         * Kubelet will begin trying to rotate the certificate at the time indicated
                         * by the signer using the PodCertificateRequest.Status.BeginRefreshAt
                         * timestamp.
                         *
                         * Kubelet can write a single file, indicated by the credentialBundlePath
                         * field, or separate files, indicated by the keyPath and
                         * certificateChainPath fields.
                         *
                         * The credential bundle is a single file in PEM format.  The first PEM
                         * entry is the private key (in PKCS#8 format), and the remaining PEM
                         * entries are the certificate chain issued by the signer (typically,
                         * signers will return their certificate chain in leaf-to-root order).
                         *
                         * Prefer using the credential bundle format, since your application code
                         * can read it atomically.  If you use keyPath and certificateChainPath,
                         * your application must make two separate file reads. If these coincide
                         * with a certificate rotation, it is possible that the private key and leaf
                         * certificate you read may not correspond to each other.  Your application
                         * will need to check for this condition, and re-read until they are
                         * consistent.
                         *
                         * The named signer controls chooses the format of the certificate it
                         * issues; consult the signer implementation's documentation to learn how to
                         * use the certificates it issues.
                         */
                        podCertificate?: {
                            /**
                             * Write the certificate chain at this path in the projected volume.
                             *
                             * Most applications should use credentialBundlePath.  When using keyPath
                             * and certificateChainPath, your application needs to check that the key
                             * and leaf certificate are consistent, because it is possible to read the
                             * files mid-rotation.
                             */
                            certificateChainPath?: string;
                            /**
                             * Write the credential bundle at this path in the projected volume.
                             *
                             * The credential bundle is a single file that contains multiple PEM blocks.
                             * The first PEM block is a PRIVATE KEY block, containing a PKCS#8 private
                             * key.
                             *
                             * The remaining blocks are CERTIFICATE blocks, containing the issued
                             * certificate chain from the signer (leaf and any intermediates).
                             *
                             * Using credentialBundlePath lets your Pod's application code make a single
                             * atomic read that retrieves a consistent key and certificate chain.  If you
                             * project them to separate files, your application code will need to
                             * additionally check that the leaf certificate was issued to the key.
                             */
                            credentialBundlePath?: string;
                            /**
                             * Write the key at this path in the projected volume.
                             *
                             * Most applications should use credentialBundlePath.  When using keyPath
                             * and certificateChainPath, your application needs to check that the key
                             * and leaf certificate are consistent, because it is possible to read the
                             * files mid-rotation.
                             */
                            keyPath?: string;
                            /**
                             * The type of keypair Kubelet will generate for the pod.
                             *
                             * Valid values are "RSA3072", "RSA4096", "ECDSAP256", "ECDSAP384",
                             * "ECDSAP521", and "ED25519".
                             */
                            keyType: string;
                            /**
                             * maxExpirationSeconds is the maximum lifetime permitted for the
                             * certificate.
                             *
                             * Kubelet copies this value verbatim into the PodCertificateRequests it
                             * generates for this projection.
                             *
                             * If omitted, kube-apiserver will set it to 86400(24 hours). kube-apiserver
                             * will reject values shorter than 3600 (1 hour).  The maximum allowable
                             * value is 7862400 (91 days).
                             *
                             * The signer implementation is then free to issue a certificate with any
                             * lifetime *shorter* than MaxExpirationSeconds, but no shorter than 3600
                             * seconds (1 hour).  This constraint is enforced by kube-apiserver.
                             * `kubernetes.io` signers will never issue certificates with a lifetime
                             * longer than 24 hours.
                             */
                            maxExpirationSeconds?: number;
                            /**
                             * Kubelet's generated CSRs will be addressed to this signer.
                             */
                            signerName: string;
                            /**
                             * userAnnotations allow pod authors to pass additional information to
                             * the signer implementation.  Kubernetes does not restrict or validate this
                             * metadata in any way.
                             *
                             * These values are copied verbatim into the `spec.unverifiedUserAnnotations` field of
                             * the PodCertificateRequest objects that Kubelet creates.
                             *
                             * Entries are subject to the same validation as object metadata annotations,
                             * with the addition that all keys must be domain-prefixed. No restrictions
                             * are placed on values, except an overall size limitation on the entire field.
                             *
                             * Signers should document the keys and values they support. Signers should
                             * deny requests that contain keys they do not recognize.
                             */
                            userAnnotations?: {
                                [k: string]: string;
                            };
                        };
                        /**
                         * secret information about the secret data to project
                         */
                        secret?: {
                            /**
                             * items if unspecified, each key-value pair in the Data field of the referenced
                             * Secret will be projected into the volume as a file whose name is the
                             * key and content is the value. If specified, the listed keys will be
                             * projected into the specified paths, and unlisted keys will not be
                             * present. If a key is specified which is not present in the Secret,
                             * the volume setup will error unless it is marked optional. Paths must be
                             * relative and may not contain the '..' path or start with '..'.
                             */
                            items?: {
                                /**
                                 * key is the key to project.
                                 */
                                key: string;
                                /**
                                 * mode is Optional: mode bits used to set permissions on this file.
                                 * Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                                 * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                                 * If not specified, the volume defaultMode will be used.
                                 * This might be in conflict with other options that affect the file
                                 * mode, like fsGroup, and the result can be other mode bits set.
                                 */
                                mode?: number;
                                /**
                                 * path is the relative path of the file to map the key to.
                                 * May not be an absolute path.
                                 * May not contain the path element '..'.
                                 * May not start with the string '..'.
                                 */
                                path: string;
                            }[];
                            /**
                             * Name of the referent.
                             * This field is effectively required, but due to backwards compatibility is
                             * allowed to be empty. Instances of this type with an empty value here are
                             * almost certainly wrong.
                             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                             */
                            name?: string;
                            /**
                             * optional field specify whether the Secret or its key must be defined
                             */
                            optional?: boolean;
                        };
                        /**
                         * serviceAccountToken is information about the serviceAccountToken data to project
                         */
                        serviceAccountToken?: {
                            /**
                             * audience is the intended audience of the token. A recipient of a token
                             * must identify itself with an identifier specified in the audience of the
                             * token, and otherwise should reject the token. The audience defaults to the
                             * identifier of the apiserver.
                             */
                            audience?: string;
                            /**
                             * expirationSeconds is the requested duration of validity of the service
                             * account token. As the token approaches expiration, the kubelet volume
                             * plugin will proactively rotate the service account token. The kubelet will
                             * start trying to rotate the token if the token is older than 80 percent of
                             * its time to live or if the token is older than 24 hours.Defaults to 1 hour
                             * and must be at least 10 minutes.
                             */
                            expirationSeconds?: number;
                            /**
                             * path is the path relative to the mount point of the file to project the
                             * token into.
                             */
                            path: string;
                        };
                    }[];
                };
                /**
                 * quobyte represents a Quobyte mount on the host that shares a pod's lifetime.
                 * Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported.
                 */
                quobyte?: {
                    /**
                     * group to map volume access to
                     * Default is no group
                     */
                    group?: string;
                    /**
                     * readOnly here will force the Quobyte volume to be mounted with read-only permissions.
                     * Defaults to false.
                     */
                    readOnly?: boolean;
                    /**
                     * registry represents a single or multiple Quobyte Registry services
                     * specified as a string as host:port pair (multiple entries are separated with commas)
                     * which acts as the central registry for volumes
                     */
                    registry: string;
                    /**
                     * tenant owning the given Quobyte volume in the Backend
                     * Used with dynamically provisioned Quobyte volumes, value is set by the plugin
                     */
                    tenant?: string;
                    /**
                     * user to map volume access to
                     * Defaults to serivceaccount user
                     */
                    user?: string;
                    /**
                     * volume is a string that references an already created Quobyte volume by name.
                     */
                    volume: string;
                };
                /**
                 * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime.
                 * Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported.
                 */
                rbd?: {
                    /**
                     * fsType is the filesystem type of the volume that you want to mount.
                     * Tip: Ensure that the filesystem type is supported by the host operating system.
                     * Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
                     */
                    fsType?: string;
                    /**
                     * image is the rados image name.
                     * More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    image: string;
                    /**
                     * keyring is the path to key ring for RBDUser.
                     * Default is /etc/ceph/keyring.
                     * More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    keyring?: string;
                    /**
                     * monitors is a collection of Ceph monitors.
                     * More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    monitors: string[];
                    /**
                     * pool is the rados pool name.
                     * Default is rbd.
                     * More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    pool?: string;
                    /**
                     * readOnly here will force the ReadOnly setting in VolumeMounts.
                     * Defaults to false.
                     * More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    readOnly?: boolean;
                    /**
                     * secretRef is name of the authentication secret for RBDUser. If provided
                     * overrides keyring.
                     * Default is nil.
                     * More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    secretRef?: {
                        /**
                         * Name of the referent.
                         * This field is effectively required, but due to backwards compatibility is
                         * allowed to be empty. Instances of this type with an empty value here are
                         * almost certainly wrong.
                         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        name?: string;
                    };
                    /**
                     * user is the rados user name.
                     * Default is admin.
                     * More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
                     */
                    user?: string;
                };
                /**
                 * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
                 * Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported.
                 */
                scaleIO?: {
                    /**
                     * fsType is the filesystem type to mount.
                     * Must be a filesystem type supported by the host operating system.
                     * Ex. "ext4", "xfs", "ntfs".
                     * Default is "xfs".
                     */
                    fsType?: string;
                    /**
                     * gateway is the host address of the ScaleIO API Gateway.
                     */
                    gateway: string;
                    /**
                     * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
                     */
                    protectionDomain?: string;
                    /**
                     * readOnly Defaults to false (read/write). ReadOnly here will force
                     * the ReadOnly setting in VolumeMounts.
                     */
                    readOnly?: boolean;
                    /**
                     * secretRef references to the secret for ScaleIO user and other
                     * sensitive information. If this is not provided, Login operation will fail.
                     */
                    secretRef: {
                        /**
                         * Name of the referent.
                         * This field is effectively required, but due to backwards compatibility is
                         * allowed to be empty. Instances of this type with an empty value here are
                         * almost certainly wrong.
                         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        name?: string;
                    };
                    /**
                     * sslEnabled Flag enable/disable SSL communication with Gateway, default false
                     */
                    sslEnabled?: boolean;
                    /**
                     * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned.
                     * Default is ThinProvisioned.
                     */
                    storageMode?: string;
                    /**
                     * storagePool is the ScaleIO Storage Pool associated with the protection domain.
                     */
                    storagePool?: string;
                    /**
                     * system is the name of the storage system as configured in ScaleIO.
                     */
                    system: string;
                    /**
                     * volumeName is the name of a volume already created in the ScaleIO system
                     * that is associated with this volume source.
                     */
                    volumeName?: string;
                };
                /**
                 * secret represents a secret that should populate this volume.
                 * More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
                 */
                secret?: {
                    /**
                     * defaultMode is Optional: mode bits used to set permissions on created files by default.
                     * Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                     * YAML accepts both octal and decimal values, JSON requires decimal values
                     * for mode bits. Defaults to 0644.
                     * Directories within the path are not affected by this setting.
                     * This might be in conflict with other options that affect the file
                     * mode, like fsGroup, and the result can be other mode bits set.
                     */
                    defaultMode?: number;
                    /**
                     * items If unspecified, each key-value pair in the Data field of the referenced
                     * Secret will be projected into the volume as a file whose name is the
                     * key and content is the value. If specified, the listed keys will be
                     * projected into the specified paths, and unlisted keys will not be
                     * present. If a key is specified which is not present in the Secret,
                     * the volume setup will error unless it is marked optional. Paths must be
                     * relative and may not contain the '..' path or start with '..'.
                     */
                    items?: {
                        /**
                         * key is the key to project.
                         */
                        key: string;
                        /**
                         * mode is Optional: mode bits used to set permissions on this file.
                         * Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511.
                         * YAML accepts both octal and decimal values, JSON requires decimal values for mode bits.
                         * If not specified, the volume defaultMode will be used.
                         * This might be in conflict with other options that affect the file
                         * mode, like fsGroup, and the result can be other mode bits set.
                         */
                        mode?: number;
                        /**
                         * path is the relative path of the file to map the key to.
                         * May not be an absolute path.
                         * May not contain the path element '..'.
                         * May not start with the string '..'.
                         */
                        path: string;
                    }[];
                    /**
                     * optional field specify whether the Secret or its keys must be defined
                     */
                    optional?: boolean;
                    /**
                     * secretName is the name of the secret in the pod's namespace to use.
                     * More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
                     */
                    secretName?: string;
                };
                /**
                 * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
                 * Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported.
                 */
                storageos?: {
                    /**
                     * fsType is the filesystem type to mount.
                     * Must be a filesystem type supported by the host operating system.
                     * Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     */
                    fsType?: string;
                    /**
                     * readOnly defaults to false (read/write). ReadOnly here will force
                     * the ReadOnly setting in VolumeMounts.
                     */
                    readOnly?: boolean;
                    /**
                     * secretRef specifies the secret to use for obtaining the StorageOS API
                     * credentials.  If not specified, default values will be attempted.
                     */
                    secretRef?: {
                        /**
                         * Name of the referent.
                         * This field is effectively required, but due to backwards compatibility is
                         * allowed to be empty. Instances of this type with an empty value here are
                         * almost certainly wrong.
                         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                         */
                        name?: string;
                    };
                    /**
                     * volumeName is the human-readable name of the StorageOS volume.  Volume
                     * names are only unique within a namespace.
                     */
                    volumeName?: string;
                    /**
                     * volumeNamespace specifies the scope of the volume within StorageOS.  If no
                     * namespace is specified then the Pod's namespace will be used.  This allows the
                     * Kubernetes name scoping to be mirrored within StorageOS for tighter integration.
                     * Set VolumeName to any name to override the default behaviour.
                     * Set to "default" if you are not using namespaces within StorageOS.
                     * Namespaces that do not pre-exist within StorageOS will be created.
                     */
                    volumeNamespace?: string;
                };
                /**
                 * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine.
                 * Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type
                 * are redirected to the csi.vsphere.vmware.com CSI driver.
                 */
                vsphereVolume?: {
                    /**
                     * fsType is filesystem type to mount.
                     * Must be a filesystem type supported by the host operating system.
                     * Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
                     */
                    fsType?: string;
                    /**
                     * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
                     */
                    storagePolicyID?: string;
                    /**
                     * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
                     */
                    storagePolicyName?: string;
                    /**
                     * volumePath is the path that identifies vSphere volume vmdk
                     */
                    volumePath: string;
                };
            }[];
        };
        description?: string;
        /**
         * Can either be a reference to the name of a Memory in the same namespace as the referencing Agent, or a reference to the name of a Memory in a different namespace in the form <namespace>/<name>
         */
        memory?: string[];
        /**
         * Can either be a reference to the name of a ModelConfig in the same namespace as the referencing Agent, or a reference to the name of a ModelConfig in a different namespace in the form <namespace>/<name>
         */
        modelConfig?: string;
        /**
         * Whether to stream the response from the model.
         * If not specified, the default value is true.
         */
        stream?: boolean;
        systemMessage?: string;
        /**
         * @maxItems 20
         */
        tools?: [] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ] | [
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            },
            {
                agent?: {
                    /**
                     * Reference to the Agent resource to use as a tool.
                     * Can either be a reference to the name of an Agent in the same namespace as the referencing Agent, or a reference to the name of an Agent in a different namespace in the form <namespace>/<name>
                     */
                    ref?: string;
                };
                mcpServer?: {
                    /**
                     * The names of the tools to be provided by the ToolServer
                     * For a list of all the tools provided by the server,
                     * the client can query the status of the ToolServer object after it has been created
                     */
                    toolNames?: string[];
                    /**
                     * the name of the ToolServer that provides the tool. can either be a reference to the name of a ToolServer in the same namespace as the referencing Agent, or a reference to the name of an ToolServer in a different namespace in the form <namespace>/<name>
                     */
                    toolServer?: string;
                };
                /**
                 * ToolProviderType represents the tool provider type
                 */
                type?: 'McpServer' | 'Agent';
            }
        ];
    };
    /**
     * AgentStatus defines the observed state of Agent.
     */
    status?: {
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
         * This is used to determine if the agent config has changed.
         * If it has changed, the agent will be restarted.
         */
        configHash?: string;
        observedGeneration?: number;
    };
}
//# sourceMappingURL=Agent.d.ts.map