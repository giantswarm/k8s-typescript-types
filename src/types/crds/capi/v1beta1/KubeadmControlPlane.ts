/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * KubeadmControlPlane is the Schema for the KubeadmControlPlane API.
 */
export interface KubeadmControlPlane {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: 'controlplane.cluster.x-k8s.io/v1beta1';
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: 'KubeadmControlPlane';
  metadata: metav1.ObjectMeta;
  /**
   * spec is the desired state of KubeadmControlPlane.
   */
  spec?: {
    /**
     * kubeadmConfigSpec is a KubeadmConfigSpec
     * to use for initializing and joining machines to the control plane.
     */
    kubeadmConfigSpec: {
      /**
       * bootCommands specifies extra commands to run very early in the boot process via the cloud-init bootcmd
       * module. bootcmd will run on every boot, 'cloud-init-per' command can be used to make bootcmd run exactly
       * once. This is typically run in the cloud-init.service systemd unit. This has no effect in Ignition.
       *
       * @maxItems 1000
       */
      bootCommands?: string[];
      /**
       * clusterConfiguration along with InitConfiguration are the configurations necessary for the init command
       */
      clusterConfiguration?: {
        /**
         * apiServer contains extra settings for the API server control plane component
         */
        apiServer?: {
          /**
           * certSANs sets extra Subject Alternative Names for the API Server signing cert.
           *
           * @maxItems 100
           */
          certSANs?: string[];
          /**
           * extraArgs is an extra set of flags to pass to the control plane component.
           */
          extraArgs?: {
            [k: string]: string;
          };
          /**
           * extraEnvs is an extra set of environment variables to pass to the control plane component.
           * Environment variables passed using ExtraEnvs will override any existing environment variables, or *_proxy environment variables that kubeadm adds by default.
           * This option takes effect only on Kubernetes >=1.31.0.
           *
           * @maxItems 100
           */
          extraEnvs?: {
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
          /**
           * extraVolumes is an extra set of host volumes, mounted to the control plane component.
           *
           * @maxItems 100
           */
          extraVolumes?: {
            /**
             * hostPath is the path in the host that will be mounted inside
             * the pod.
             */
            hostPath: string;
            /**
             * mountPath is the path inside the pod where hostPath will be mounted.
             */
            mountPath: string;
            /**
             * name of the volume inside the pod template.
             */
            name: string;
            /**
             * pathType is the type of the HostPath.
             */
            pathType?: string;
            /**
             * readOnly controls write access to the volume
             */
            readOnly?: boolean;
          }[];
          /**
           * timeoutForControlPlane controls the timeout that we use for API server to appear
           */
          timeoutForControlPlane?: string;
        };
        /**
         * APIVersion defines the versioned schema of this representation of an object.
         * Servers should convert recognized schemas to the latest internal value, and
         * may reject unrecognized values.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
         */
        apiVersion?: string;
        /**
         * certificatesDir specifies where to store or look for all required certificates.
         * NB: if not provided, this will default to `/etc/kubernetes/pki`
         */
        certificatesDir?: string;
        /**
         * clusterName is the cluster name
         */
        clusterName?: string;
        /**
         * controlPlaneEndpoint sets a stable IP address or DNS name for the control plane; it
         * can be a valid IP address or a RFC-1123 DNS subdomain, both with optional TCP port.
         * In case the ControlPlaneEndpoint is not specified, the AdvertiseAddress + BindPort
         * are used; in case the ControlPlaneEndpoint is specified but without a TCP port,
         * the BindPort is used.
         * Possible usages are:
         * e.g. In a cluster with more than one control plane instances, this field should be
         * assigned the address of the external load balancer in front of the
         * control plane instances.
         * e.g.  in environments with enforced node recycling, the ControlPlaneEndpoint
         * could be used for assigning a stable DNS to the control plane.
         * NB: This value defaults to the first value in the Cluster object status.apiEndpoints array.
         */
        controlPlaneEndpoint?: string;
        /**
         * controllerManager contains extra settings for the controller manager control plane component
         */
        controllerManager?: {
          /**
           * extraArgs is an extra set of flags to pass to the control plane component.
           */
          extraArgs?: {
            [k: string]: string;
          };
          /**
           * extraEnvs is an extra set of environment variables to pass to the control plane component.
           * Environment variables passed using ExtraEnvs will override any existing environment variables, or *_proxy environment variables that kubeadm adds by default.
           * This option takes effect only on Kubernetes >=1.31.0.
           *
           * @maxItems 100
           */
          extraEnvs?: {
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
          /**
           * extraVolumes is an extra set of host volumes, mounted to the control plane component.
           *
           * @maxItems 100
           */
          extraVolumes?: {
            /**
             * hostPath is the path in the host that will be mounted inside
             * the pod.
             */
            hostPath: string;
            /**
             * mountPath is the path inside the pod where hostPath will be mounted.
             */
            mountPath: string;
            /**
             * name of the volume inside the pod template.
             */
            name: string;
            /**
             * pathType is the type of the HostPath.
             */
            pathType?: string;
            /**
             * readOnly controls write access to the volume
             */
            readOnly?: boolean;
          }[];
        };
        /**
         * dns defines the options for the DNS add-on installed in the cluster.
         */
        dns?: {
          /**
           * imageRepository sets the container registry to pull images from.
           * if not set, the ImageRepository defined in ClusterConfiguration will be used instead.
           */
          imageRepository?: string;
          /**
           * imageTag allows to specify a tag for the image.
           * In case this value is set, kubeadm does not change automatically the version of the above components during upgrades.
           */
          imageTag?: string;
        };
        /**
         * etcd holds configuration for etcd.
         * NB: This value defaults to a Local (stacked) etcd
         */
        etcd?: {
          /**
           * external describes how to connect to an external etcd cluster
           * Local and External are mutually exclusive
           */
          external?: {
            /**
             * caFile is an SSL Certificate Authority file used to secure etcd communication.
             * Required if using a TLS connection.
             */
            caFile: string;
            /**
             * certFile is an SSL certification file used to secure etcd communication.
             * Required if using a TLS connection.
             */
            certFile: string;
            /**
             * endpoints of etcd members. Required for ExternalEtcd.
             *
             * @maxItems 50
             */
            endpoints: string[];
            /**
             * keyFile is an SSL key file used to secure etcd communication.
             * Required if using a TLS connection.
             */
            keyFile: string;
          };
          /**
           * local provides configuration knobs for configuring the local etcd instance
           * Local and External are mutually exclusive
           */
          local?: {
            /**
             * dataDir is the directory etcd will place its data.
             * Defaults to "/var/lib/etcd".
             */
            dataDir?: string;
            /**
             * extraArgs are extra arguments provided to the etcd binary
             * when run inside a static pod.
             */
            extraArgs?: {
              [k: string]: string;
            };
            /**
             * extraEnvs is an extra set of environment variables to pass to the control plane component.
             * Environment variables passed using ExtraEnvs will override any existing environment variables, or *_proxy environment variables that kubeadm adds by default.
             * This option takes effect only on Kubernetes >=1.31.0.
             *
             * @maxItems 100
             */
            extraEnvs?: {
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
            /**
             * imageRepository sets the container registry to pull images from.
             * if not set, the ImageRepository defined in ClusterConfiguration will be used instead.
             */
            imageRepository?: string;
            /**
             * imageTag allows to specify a tag for the image.
             * In case this value is set, kubeadm does not change automatically the version of the above components during upgrades.
             */
            imageTag?: string;
            /**
             * peerCertSANs sets extra Subject Alternative Names for the etcd peer signing cert.
             *
             * @maxItems 100
             */
            peerCertSANs?: string[];
            /**
             * serverCertSANs sets extra Subject Alternative Names for the etcd server signing cert.
             *
             * @maxItems 100
             */
            serverCertSANs?: string[];
          };
        };
        /**
         * featureGates enabled by the user.
         */
        featureGates?: {
          [k: string]: boolean;
        };
        /**
         * imageRepository sets the container registry to pull images from.
         * * If not set, the default registry of kubeadm will be used, i.e.
         *   * registry.k8s.io (new registry): >= v1.22.17, >= v1.23.15, >= v1.24.9, >= v1.25.0
         *   * k8s.gcr.io (old registry): all older versions
         *   Please note that when imageRepository is not set we don't allow upgrades to
         *   versions >= v1.22.0 which use the old registry (k8s.gcr.io). Please use
         *   a newer patch version with the new registry instead (i.e. >= v1.22.17,
         *   >= v1.23.15, >= v1.24.9, >= v1.25.0).
         * * If the version is a CI build (kubernetes version starts with `ci/` or `ci-cross/`)
         *  `gcr.io/k8s-staging-ci-images` will be used as a default for control plane components
         *   and for kube-proxy, while `registry.k8s.io` will be used for all the other images.
         */
        imageRepository?: string;
        /**
         * Kind is a string value representing the REST resource this object represents.
         * Servers may infer this from the endpoint the client submits requests to.
         * Cannot be updated.
         * In CamelCase.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        kind?: string;
        /**
         * kubernetesVersion is the target version of the control plane.
         * NB: This value defaults to the Machine object spec.version
         */
        kubernetesVersion?: string;
        /**
         * networking holds configuration for the networking topology of the cluster.
         * NB: This value defaults to the Cluster object spec.clusterNetwork.
         */
        networking?: {
          /**
           * dnsDomain is the dns domain used by k8s services. Defaults to "cluster.local".
           */
          dnsDomain?: string;
          /**
           * podSubnet is the subnet used by pods.
           * If unset, the API server will not allocate CIDR ranges for every node.
           * Defaults to a comma-delimited string of the Cluster object's spec.clusterNetwork.services.cidrBlocks if that is set
           */
          podSubnet?: string;
          /**
           * serviceSubnet is the subnet used by k8s services.
           * Defaults to a comma-delimited string of the Cluster object's spec.clusterNetwork.pods.cidrBlocks, or
           * to "10.96.0.0/12" if that's unset.
           */
          serviceSubnet?: string;
        };
        /**
         * scheduler contains extra settings for the scheduler control plane component
         */
        scheduler?: {
          /**
           * extraArgs is an extra set of flags to pass to the control plane component.
           */
          extraArgs?: {
            [k: string]: string;
          };
          /**
           * extraEnvs is an extra set of environment variables to pass to the control plane component.
           * Environment variables passed using ExtraEnvs will override any existing environment variables, or *_proxy environment variables that kubeadm adds by default.
           * This option takes effect only on Kubernetes >=1.31.0.
           *
           * @maxItems 100
           */
          extraEnvs?: {
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
          /**
           * extraVolumes is an extra set of host volumes, mounted to the control plane component.
           *
           * @maxItems 100
           */
          extraVolumes?: {
            /**
             * hostPath is the path in the host that will be mounted inside
             * the pod.
             */
            hostPath: string;
            /**
             * mountPath is the path inside the pod where hostPath will be mounted.
             */
            mountPath: string;
            /**
             * name of the volume inside the pod template.
             */
            name: string;
            /**
             * pathType is the type of the HostPath.
             */
            pathType?: string;
            /**
             * readOnly controls write access to the volume
             */
            readOnly?: boolean;
          }[];
        };
      };
      /**
       * diskSetup specifies options for the creation of partition tables and file systems on devices.
       */
      diskSetup?: {
        /**
         * filesystems specifies the list of file systems to setup.
         *
         * @maxItems 100
         */
        filesystems?: {
          /**
           * device specifies the device name
           */
          device: string;
          /**
           * extraOpts defined extra options to add to the command for creating the file system.
           *
           * @maxItems 100
           */
          extraOpts?: string[];
          /**
           * filesystem specifies the file system type.
           */
          filesystem: string;
          /**
           * label specifies the file system label to be used. If set to None, no label is used.
           */
          label?: string;
          /**
           * overwrite defines whether or not to overwrite any existing filesystem.
           * If true, any pre-existing file system will be destroyed. Use with Caution.
           */
          overwrite?: boolean;
          /**
           * partition specifies the partition to use. The valid options are: "auto|any", "auto", "any", "none", and <NUM>, where NUM is the actual partition number.
           */
          partition?: string;
          /**
           * replaceFS is a special directive, used for Microsoft Azure that instructs cloud-init to replace a file system of <FS_TYPE>.
           * NOTE: unless you define a label, this requires the use of the 'any' partition directive.
           */
          replaceFS?: string;
        }[];
        /**
         * partitions specifies the list of the partitions to setup.
         *
         * @maxItems 100
         */
        partitions?: {
          /**
           * device is the name of the device.
           */
          device: string;
          /**
           * layout specifies the device layout.
           * If it is true, a single partition will be created for the entire device.
           * When layout is false, it means don't partition or ignore existing partitioning.
           */
          layout: boolean;
          /**
           * overwrite describes whether to skip checks and create the partition if a partition or filesystem is found on the device.
           * Use with caution. Default is 'false'.
           */
          overwrite?: boolean;
          /**
           * tableType specifies the tupe of partition table. The following are supported:
           * 'mbr': default and setups a MS-DOS partition table
           * 'gpt': setups a GPT partition table
           */
          tableType?: 'mbr' | 'gpt';
        }[];
      };
      /**
       * files specifies extra files to be passed to user_data upon creation.
       *
       * @maxItems 200
       */
      files?: {
        /**
         * append specifies whether to append Content to existing file if Path exists.
         */
        append?: boolean;
        /**
         * content is the actual content of the file.
         */
        content?: string;
        /**
         * contentFrom is a referenced source of content to populate the file.
         */
        contentFrom?: {
          /**
           * secret represents a secret that should populate this file.
           */
          secret: {
            /**
             * key is the key in the secret's data map for this value.
             */
            key: string;
            /**
             * name of the secret in the KubeadmBootstrapConfig's namespace to use.
             */
            name: string;
          };
        };
        /**
         * encoding specifies the encoding of the file contents.
         */
        encoding?: 'base64' | 'gzip' | 'gzip+base64';
        /**
         * owner specifies the ownership of the file, e.g. "root:root".
         */
        owner?: string;
        /**
         * path specifies the full path on disk where to store the file.
         */
        path: string;
        /**
         * permissions specifies the permissions to assign to the file, e.g. "0640".
         */
        permissions?: string;
      }[];
      /**
       * format specifies the output format of the bootstrap data
       */
      format?: 'cloud-config' | 'ignition';
      /**
       * ignition contains Ignition specific configuration.
       */
      ignition?: {
        /**
         * containerLinuxConfig contains CLC specific configuration.
         */
        containerLinuxConfig?: {
          /**
           * additionalConfig contains additional configuration to be merged with the Ignition
           * configuration generated by the bootstrapper controller. More info: https://coreos.github.io/ignition/operator-notes/#config-merging
           *
           * The data format is documented here: https://kinvolk.io/docs/flatcar-container-linux/latest/provisioning/cl-config/
           */
          additionalConfig?: string;
          /**
           * strict controls if AdditionalConfig should be strictly parsed. If so, warnings are treated as errors.
           */
          strict?: boolean;
        };
      };
      /**
       * initConfiguration along with ClusterConfiguration are the configurations necessary for the init command
       */
      initConfiguration?: {
        /**
         * APIVersion defines the versioned schema of this representation of an object.
         * Servers should convert recognized schemas to the latest internal value, and
         * may reject unrecognized values.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
         */
        apiVersion?: string;
        /**
         * bootstrapTokens is respected at `kubeadm init` time and describes a set of Bootstrap Tokens to create.
         * This information IS NOT uploaded to the kubeadm cluster configmap, partly because of its sensitive nature
         *
         * @maxItems 100
         */
        bootstrapTokens?: {
          /**
           * description sets a human-friendly message why this token exists and what it's used
           * for, so other administrators can know its purpose.
           */
          description?: string;
          /**
           * expires specifies the timestamp when this token expires. Defaults to being set
           * dynamically at runtime based on the TTL. Expires and TTL are mutually exclusive.
           */
          expires?: string;
          /**
           * groups specifies the extra groups that this token will authenticate as when/if
           * used for authentication
           *
           * @maxItems 100
           */
          groups?: string[];
          /**
           * token is used for establishing bidirectional trust between nodes and control-planes.
           * Used for joining nodes in the cluster.
           */
          token: string;
          /**
           * ttl defines the time to live for this token. Defaults to 24h.
           * Expires and TTL are mutually exclusive.
           */
          ttl?: string;
          /**
           * usages describes the ways in which this token can be used. Can by default be used
           * for establishing bidirectional trust, but that can be changed here.
           *
           * @maxItems 100
           */
          usages?: string[];
        }[];
        /**
         * Kind is a string value representing the REST resource this object represents.
         * Servers may infer this from the endpoint the client submits requests to.
         * Cannot be updated.
         * In CamelCase.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        kind?: string;
        /**
         * localAPIEndpoint represents the endpoint of the API server instance that's deployed on this control plane node
         * In HA setups, this differs from ClusterConfiguration.ControlPlaneEndpoint in the sense that ControlPlaneEndpoint
         * is the global endpoint for the cluster, which then loadbalances the requests to each individual API server. This
         * configuration object lets you customize what IP/DNS name and port the local API server advertises it's accessible
         * on. By default, kubeadm tries to auto-detect the IP of the default interface and use that, but in case that process
         * fails you may set the desired value here.
         */
        localAPIEndpoint?: {
          /**
           * advertiseAddress sets the IP address for the API server to advertise.
           */
          advertiseAddress?: string;
          /**
           * bindPort sets the secure port for the API Server to bind to.
           * Defaults to 6443.
           */
          bindPort?: number;
        };
        /**
         * nodeRegistration holds fields that relate to registering the new control-plane node to the cluster.
         * When used in the context of control plane nodes, NodeRegistration should remain consistent
         * across both InitConfiguration and JoinConfiguration
         */
        nodeRegistration?: {
          /**
           * criSocket is used to retrieve container runtime info. This information will be annotated to the Node API object, for later re-use
           */
          criSocket?: string;
          /**
           * ignorePreflightErrors provides a slice of pre-flight errors to be ignored when the current node is registered.
           *
           * @maxItems 50
           */
          ignorePreflightErrors?: string[];
          /**
           * imagePullPolicy specifies the policy for image pulling
           * during kubeadm "init" and "join" operations. The value of
           * this field must be one of "Always", "IfNotPresent" or
           * "Never". Defaults to "IfNotPresent". This can be used only
           * with Kubernetes version equal to 1.22 and later.
           */
          imagePullPolicy?: 'Always' | 'IfNotPresent' | 'Never';
          /**
           * imagePullSerial specifies if image pulling performed by kubeadm must be done serially or in parallel.
           * This option takes effect only on Kubernetes >=1.31.0.
           * Default: true (defaulted in kubeadm)
           */
          imagePullSerial?: boolean;
          /**
           * kubeletExtraArgs passes through extra arguments to the kubelet. The arguments here are passed to the kubelet command line via the environment file
           * kubeadm writes at runtime for the kubelet to source. This overrides the generic base-level configuration in the kubelet-config-1.X ConfigMap
           * Flags have higher priority when parsing. These values are local and specific to the node kubeadm is executing on.
           */
          kubeletExtraArgs?: {
            [k: string]: string;
          };
          /**
           * name is the `.Metadata.Name` field of the Node API object that will be created in this `kubeadm init` or `kubeadm join` operation.
           * This field is also used in the CommonName field of the kubelet's client certificate to the API server.
           * Defaults to the hostname of the node if not provided.
           */
          name?: string;
          /**
           * taints specifies the taints the Node API object should be registered with. If this field is unset, i.e. nil, in the `kubeadm init` process
           * it will be defaulted to []v1.Taint{'node-role.kubernetes.io/master=""'}. If you don't want to taint your control-plane node, set this field to an
           * empty slice, i.e. `taints: []` in the YAML file. This field is solely used for Node registration.
           *
           * @maxItems 100
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
             */
            timeAdded?: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value?: string;
          }[];
        };
        /**
         * patches contains options related to applying patches to components deployed by kubeadm during
         * "kubeadm init". The minimum kubernetes version needed to support Patches is v1.22
         */
        patches?: {
          /**
           * directory is a path to a directory that contains files named "target[suffix][+patchtype].extension".
           * For example, "kube-apiserver0+merge.yaml" or just "etcd.json". "target" can be one of
           * "kube-apiserver", "kube-controller-manager", "kube-scheduler", "etcd". "patchtype" can be one
           * of "strategic" "merge" or "json" and they match the patch formats supported by kubectl.
           * The default "patchtype" is "strategic". "extension" must be either "json" or "yaml".
           * "suffix" is an optional string that can be used to determine which patches are applied
           * first alpha-numerically.
           * These files can be written into the target directory via KubeadmConfig.Files which
           * specifies additional files to be created on the machine, either with content inline or
           * by referencing a secret.
           */
          directory?: string;
        };
        /**
         * skipPhases is a list of phases to skip during command execution.
         * The list of phases can be obtained with the "kubeadm init --help" command.
         * This option takes effect only on Kubernetes >=1.22.0.
         *
         * @maxItems 50
         */
        skipPhases?: string[];
      };
      /**
       * joinConfiguration is the kubeadm configuration for the join command
       */
      joinConfiguration?: {
        /**
         * APIVersion defines the versioned schema of this representation of an object.
         * Servers should convert recognized schemas to the latest internal value, and
         * may reject unrecognized values.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
         */
        apiVersion?: string;
        /**
         * caCertPath is the path to the SSL certificate authority used to
         * secure comunications between node and control-plane.
         * Defaults to "/etc/kubernetes/pki/ca.crt".
         */
        caCertPath?: string;
        /**
         * controlPlane defines the additional control plane instance to be deployed on the joining node.
         * If nil, no additional control plane instance will be deployed.
         */
        controlPlane?: {
          /**
           * localAPIEndpoint represents the endpoint of the API server instance to be deployed on this node.
           */
          localAPIEndpoint?: {
            /**
             * advertiseAddress sets the IP address for the API server to advertise.
             */
            advertiseAddress?: string;
            /**
             * bindPort sets the secure port for the API Server to bind to.
             * Defaults to 6443.
             */
            bindPort?: number;
          };
        };
        /**
         * discovery specifies the options for the kubelet to use during the TLS Bootstrap process
         */
        discovery?: {
          /**
           * bootstrapToken is used to set the options for bootstrap token based discovery
           * BootstrapToken and File are mutually exclusive
           */
          bootstrapToken?: {
            /**
             * apiServerEndpoint is an IP or domain name to the API server from which info will be fetched.
             */
            apiServerEndpoint?: string;
            /**
             * caCertHashes specifies a set of public key pins to verify
             * when token-based discovery is used. The root CA found during discovery
             * must match one of these values. Specifying an empty set disables root CA
             * pinning, which can be unsafe. Each hash is specified as "<type>:<value>",
             * where the only currently supported type is "sha256". This is a hex-encoded
             * SHA-256 hash of the Subject Public Key Info (SPKI) object in DER-encoded
             * ASN.1. These hashes can be calculated using, for example, OpenSSL:
             * openssl x509 -pubkey -in ca.crt openssl rsa -pubin -outform der 2>&/dev/null | openssl dgst -sha256 -hex
             *
             * @maxItems 100
             */
            caCertHashes?: string[];
            /**
             * token is a token used to validate cluster information
             * fetched from the control-plane.
             */
            token?: string;
            /**
             * unsafeSkipCAVerification allows token-based discovery
             * without CA verification via CACertHashes. This can weaken
             * the security of kubeadm since other nodes can impersonate the control-plane.
             */
            unsafeSkipCAVerification?: boolean;
          };
          /**
           * file is used to specify a file or URL to a kubeconfig file from which to load cluster information
           * BootstrapToken and File are mutually exclusive
           */
          file?: {
            /**
             * kubeConfig is used (optionally) to generate a KubeConfig based on the KubeadmConfig's information.
             * The file is generated at the path specified in KubeConfigPath.
             *
             * Host address (server field) information is automatically populated based on the Cluster's ControlPlaneEndpoint.
             * Certificate Authority (certificate-authority-data field) is gathered from the cluster's CA secret.
             */
            kubeConfig?: {
              /**
               * cluster contains information about how to communicate with the kubernetes cluster.
               *
               * By default the following fields are automatically populated:
               * - Server with the Cluster's ControlPlaneEndpoint.
               * - CertificateAuthorityData with the Cluster's CA certificate.
               */
              cluster?: {
                /**
                 * certificateAuthorityData contains PEM-encoded certificate authority certificates.
                 *
                 * Defaults to the Cluster's CA certificate if empty.
                 */
                certificateAuthorityData?: string;
                /**
                 * insecureSkipTLSVerify skips the validity check for the server's certificate. This will make your HTTPS connections insecure.
                 */
                insecureSkipTLSVerify?: boolean;
                /**
                 * proxyURL is the URL to the proxy to be used for all requests made by this
                 * client. URLs with "http", "https", and "socks5" schemes are supported.  If
                 * this configuration is not provided or the empty string, the client
                 * attempts to construct a proxy configuration from http_proxy and
                 * https_proxy environment variables. If these environment variables are not
                 * set, the client does not attempt to proxy requests.
                 *
                 * socks5 proxying does not currently support spdy streaming endpoints (exec,
                 * attach, port forward).
                 */
                proxyURL?: string;
                /**
                 * server is the address of the kubernetes cluster (https://hostname:port).
                 *
                 * Defaults to https:// + Cluster.Spec.ControlPlaneEndpoint.
                 */
                server?: string;
                /**
                 * tlsServerName is used to check server certificate. If TLSServerName is empty, the hostname used to contact the server is used.
                 */
                tlsServerName?: string;
              };
              /**
               * user contains information that describes identity information.
               * This is used to tell the kubernetes cluster who you are.
               */
              user: {
                /**
                 * authProvider specifies a custom authentication plugin for the kubernetes cluster.
                 */
                authProvider?: {
                  /**
                   * config holds the parameters for the authentication plugin.
                   */
                  config?: {
                    [k: string]: string;
                  };
                  /**
                   * name is the name of the authentication plugin.
                   */
                  name: string;
                };
                /**
                 * exec specifies a custom exec-based authentication plugin for the kubernetes cluster.
                 */
                exec?: {
                  /**
                   * apiVersion is preferred input version of the ExecInfo. The returned ExecCredentials MUST use
                   * the same encoding version as the input.
                   * Defaults to client.authentication.k8s.io/v1 if not set.
                   */
                  apiVersion?: string;
                  /**
                   * args is the arguments to pass to the command when executing it.
                   *
                   * @maxItems 100
                   */
                  args?: string[];
                  /**
                   * command to execute.
                   */
                  command: string;
                  /**
                   * env defines additional environment variables to expose to the process. These
                   * are unioned with the host's environment, as well as variables client-go uses
                   * to pass argument to the plugin.
                   *
                   * @maxItems 100
                   */
                  env?: {
                    /**
                     * name of the environment variable
                     */
                    name: string;
                    /**
                     * value of the environment variable
                     */
                    value: string;
                  }[];
                  /**
                   * provideClusterInfo determines whether or not to provide cluster information,
                   * which could potentially contain very large CA data, to this exec plugin as a
                   * part of the KUBERNETES_EXEC_INFO environment variable. By default, it is set
                   * to false. Package k8s.io/client-go/tools/auth/exec provides helper methods for
                   * reading this environment variable.
                   */
                  provideClusterInfo?: boolean;
                };
              };
            };
            /**
             * kubeConfigPath is used to specify the actual file path or URL to the kubeconfig file from which to load cluster information
             */
            kubeConfigPath: string;
          };
          /**
           * timeout modifies the discovery timeout
           */
          timeout?: string;
          /**
           * tlsBootstrapToken is a token used for TLS bootstrapping.
           * If .BootstrapToken is set, this field is defaulted to .BootstrapToken.Token, but can be overridden.
           * If .File is set, this field **must be set** in case the KubeConfigFile does not contain any other authentication information
           */
          tlsBootstrapToken?: string;
        };
        /**
         * Kind is a string value representing the REST resource this object represents.
         * Servers may infer this from the endpoint the client submits requests to.
         * Cannot be updated.
         * In CamelCase.
         * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
         */
        kind?: string;
        /**
         * nodeRegistration holds fields that relate to registering the new control-plane node to the cluster.
         * When used in the context of control plane nodes, NodeRegistration should remain consistent
         * across both InitConfiguration and JoinConfiguration
         */
        nodeRegistration?: {
          /**
           * criSocket is used to retrieve container runtime info. This information will be annotated to the Node API object, for later re-use
           */
          criSocket?: string;
          /**
           * ignorePreflightErrors provides a slice of pre-flight errors to be ignored when the current node is registered.
           *
           * @maxItems 50
           */
          ignorePreflightErrors?: string[];
          /**
           * imagePullPolicy specifies the policy for image pulling
           * during kubeadm "init" and "join" operations. The value of
           * this field must be one of "Always", "IfNotPresent" or
           * "Never". Defaults to "IfNotPresent". This can be used only
           * with Kubernetes version equal to 1.22 and later.
           */
          imagePullPolicy?: 'Always' | 'IfNotPresent' | 'Never';
          /**
           * imagePullSerial specifies if image pulling performed by kubeadm must be done serially or in parallel.
           * This option takes effect only on Kubernetes >=1.31.0.
           * Default: true (defaulted in kubeadm)
           */
          imagePullSerial?: boolean;
          /**
           * kubeletExtraArgs passes through extra arguments to the kubelet. The arguments here are passed to the kubelet command line via the environment file
           * kubeadm writes at runtime for the kubelet to source. This overrides the generic base-level configuration in the kubelet-config-1.X ConfigMap
           * Flags have higher priority when parsing. These values are local and specific to the node kubeadm is executing on.
           */
          kubeletExtraArgs?: {
            [k: string]: string;
          };
          /**
           * name is the `.Metadata.Name` field of the Node API object that will be created in this `kubeadm init` or `kubeadm join` operation.
           * This field is also used in the CommonName field of the kubelet's client certificate to the API server.
           * Defaults to the hostname of the node if not provided.
           */
          name?: string;
          /**
           * taints specifies the taints the Node API object should be registered with. If this field is unset, i.e. nil, in the `kubeadm init` process
           * it will be defaulted to []v1.Taint{'node-role.kubernetes.io/master=""'}. If you don't want to taint your control-plane node, set this field to an
           * empty slice, i.e. `taints: []` in the YAML file. This field is solely used for Node registration.
           *
           * @maxItems 100
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
             */
            timeAdded?: string;
            /**
             * The taint value corresponding to the taint key.
             */
            value?: string;
          }[];
        };
        /**
         * patches contains options related to applying patches to components deployed by kubeadm during
         * "kubeadm join". The minimum kubernetes version needed to support Patches is v1.22
         */
        patches?: {
          /**
           * directory is a path to a directory that contains files named "target[suffix][+patchtype].extension".
           * For example, "kube-apiserver0+merge.yaml" or just "etcd.json". "target" can be one of
           * "kube-apiserver", "kube-controller-manager", "kube-scheduler", "etcd". "patchtype" can be one
           * of "strategic" "merge" or "json" and they match the patch formats supported by kubectl.
           * The default "patchtype" is "strategic". "extension" must be either "json" or "yaml".
           * "suffix" is an optional string that can be used to determine which patches are applied
           * first alpha-numerically.
           * These files can be written into the target directory via KubeadmConfig.Files which
           * specifies additional files to be created on the machine, either with content inline or
           * by referencing a secret.
           */
          directory?: string;
        };
        /**
         * skipPhases is a list of phases to skip during command execution.
         * The list of phases can be obtained with the "kubeadm init --help" command.
         * This option takes effect only on Kubernetes >=1.22.0.
         *
         * @maxItems 50
         */
        skipPhases?: string[];
      };
      /**
       * mounts specifies a list of mount points to be setup.
       *
       * @maxItems 100
       */
      mounts?: string[][];
      /**
       * ntp specifies NTP configuration
       */
      ntp?: {
        /**
         * enabled specifies whether NTP should be enabled
         */
        enabled?: boolean;
        /**
         * servers specifies which NTP servers to use
         *
         * @maxItems 100
         */
        servers?: string[];
      };
      /**
       * postKubeadmCommands specifies extra commands to run after kubeadm runs.
       * With cloud-init, this is appended to the runcmd module configuration, and is typically executed in
       * the cloud-final.service systemd unit. In Ignition, this is appended to /etc/kubeadm.sh.
       *
       * @maxItems 1000
       */
      postKubeadmCommands?: string[];
      /**
       * preKubeadmCommands specifies extra commands to run before kubeadm runs.
       * With cloud-init, this is prepended to the runcmd module configuration, and is typically executed in
       * the cloud-final.service systemd unit. In Ignition, this is prepended to /etc/kubeadm.sh.
       *
       * @maxItems 1000
       */
      preKubeadmCommands?: string[];
      /**
       * useExperimentalRetryJoin replaces a basic kubeadm command with a shell
       * script with retries for joins.
       *
       * This is meant to be an experimental temporary workaround on some environments
       * where joins fail due to timing (and other issues). The long term goal is to add retries to
       * kubeadm proper and use that functionality.
       *
       * This will add about 40KB to userdata
       *
       * For more information, refer to https://github.com/kubernetes-sigs/cluster-api/pull/2763#discussion_r397306055.
       *
       * Deprecated: This experimental fix is no longer needed and this field will be removed in a future release.
       * When removing also remove from staticcheck exclude-rules for SA1019 in golangci.yml
       */
      useExperimentalRetryJoin?: boolean;
      /**
       * users specifies extra users to add
       *
       * @maxItems 100
       */
      users?: {
        /**
         * gecos specifies the gecos to use for the user
         */
        gecos?: string;
        /**
         * groups specifies the additional groups for the user
         */
        groups?: string;
        /**
         * homeDir specifies the home directory to use for the user
         */
        homeDir?: string;
        /**
         * inactive specifies whether to mark the user as inactive
         */
        inactive?: boolean;
        /**
         * lockPassword specifies if password login should be disabled
         */
        lockPassword?: boolean;
        /**
         * name specifies the user name
         */
        name: string;
        /**
         * passwd specifies a hashed password for the user
         */
        passwd?: string;
        /**
         * passwdFrom is a referenced source of passwd to populate the passwd.
         */
        passwdFrom?: {
          /**
           * secret represents a secret that should populate this password.
           */
          secret: {
            /**
             * key is the key in the secret's data map for this value.
             */
            key: string;
            /**
             * name of the secret in the KubeadmBootstrapConfig's namespace to use.
             */
            name: string;
          };
        };
        /**
         * primaryGroup specifies the primary group for the user
         */
        primaryGroup?: string;
        /**
         * shell specifies the user's shell
         */
        shell?: string;
        /**
         * sshAuthorizedKeys specifies a list of ssh authorized keys for the user
         *
         * @maxItems 100
         */
        sshAuthorizedKeys?: string[];
        /**
         * sudo specifies a sudo role for the user
         */
        sudo?: string;
      }[];
      /**
       * verbosity is the number for the kubeadm log level verbosity.
       * It overrides the `--v` flag in kubeadm commands.
       */
      verbosity?: number;
    };
    /**
     * machineNamingStrategy allows changing the naming pattern used when creating Machines.
     * InfraMachines & KubeadmConfigs will use the same name as the corresponding Machines.
     */
    machineNamingStrategy?: {
      /**
       * template defines the template to use for generating the names of the Machine objects.
       * If not defined, it will fallback to `{{ .kubeadmControlPlane.name }}-{{ .random }}`.
       * If the generated name string exceeds 63 characters, it will be trimmed to 58 characters and will
       * get concatenated with a random suffix of length 5.
       * Length of the template string must not exceed 256 characters.
       * The template allows the following variables `.cluster.name`, `.kubeadmControlPlane.name` and `.random`.
       * The variable `.cluster.name` retrieves the name of the cluster object that owns the Machines being created.
       * The variable `.kubeadmControlPlane.name` retrieves the name of the KubeadmControlPlane object that owns the Machines being created.
       * The variable `.random` is substituted with random alphanumeric string, without vowels, of length 5. This variable is required
       * part of the template. If not provided, validation will fail.
       */
      template?: string;
    };
    /**
     * machineTemplate contains information about how machines
     * should be shaped when creating or updating a control plane.
     */
    machineTemplate: {
      /**
       * infrastructureRef is a required reference to a custom resource
       * offered by an infrastructure provider.
       */
      infrastructureRef: {
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
      /**
       * metadata is the standard object's metadata.
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
       * nodeDeletionTimeout defines how long the machine controller will attempt to delete the Node that the Machine
       * hosts after the Machine is marked for deletion. A duration of 0 will retry deletion indefinitely.
       * If no value is provided, the default value for this property of the Machine resource will be used.
       */
      nodeDeletionTimeout?: string;
      /**
       * nodeDrainTimeout is the total amount of time that the controller will spend on draining a controlplane node
       * The default value is 0, meaning that the node can be drained without any time limitations.
       * NOTE: NodeDrainTimeout is different from `kubectl drain --timeout`
       */
      nodeDrainTimeout?: string;
      /**
       * nodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes
       * to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations.
       */
      nodeVolumeDetachTimeout?: string;
      /**
       * readinessGates specifies additional conditions to include when evaluating Machine Ready condition;
       * KubeadmControlPlane will always add readinessGates for the condition it is setting on the Machine:
       * APIServerPodHealthy, SchedulerPodHealthy, ControllerManagerPodHealthy, and if etcd is managed by CKP also
       * EtcdPodHealthy, EtcdMemberHealthy.
       *
       * This field can be used e.g. to instruct the machine controller to include in the computation for Machine's ready
       * computation a condition, managed by an external controllers, reporting the status of special software/hardware installed on the Machine.
       *
       * NOTE: This field is considered only for computing v1beta2 conditions.
       *
       * @maxItems 32
       */
      readinessGates?: {
        /**
         * conditionType refers to a condition with matching type in the Machine's condition list.
         * If the conditions doesn't exist, it will be treated as unknown.
         * Note: Both Cluster API conditions or conditions added by 3rd party controllers can be used as readiness gates.
         */
        conditionType: string;
        /**
         * polarity of the conditionType specified in this readinessGate.
         * Valid values are Positive, Negative and omitted.
         * When omitted, the default behaviour will be Positive.
         * A positive polarity means that the condition should report a true status under normal conditions.
         * A negative polarity means that the condition should report a false status under normal conditions.
         */
        polarity?: 'Positive' | 'Negative';
      }[];
    };
    /**
     * remediationStrategy is the RemediationStrategy that controls how control plane machine remediation happens.
     */
    remediationStrategy?: {
      /**
       * maxRetry is the Max number of retries while attempting to remediate an unhealthy machine.
       * A retry happens when a machine that was created as a replacement for an unhealthy machine also fails.
       * For example, given a control plane with three machines M1, M2, M3:
       *
       * 	M1 become unhealthy; remediation happens, and M1-1 is created as a replacement.
       * 	If M1-1 (replacement of M1) has problems while bootstrapping it will become unhealthy, and then be
       * 	remediated; such operation is considered a retry, remediation-retry #1.
       * 	If M1-2 (replacement of M1-1) becomes unhealthy, remediation-retry #2 will happen, etc.
       *
       * A retry could happen only after RetryPeriod from the previous retry.
       * If a machine is marked as unhealthy after MinHealthyPeriod from the previous remediation expired,
       * this is not considered a retry anymore because the new issue is assumed unrelated from the previous one.
       *
       * If not set, the remedation will be retried infinitely.
       */
      maxRetry?: number;
      /**
       * minHealthyPeriod defines the duration after which KCP will consider any failure to a machine unrelated
       * from the previous one. In this case the remediation is not considered a retry anymore, and thus the retry
       * counter restarts from 0. For example, assuming MinHealthyPeriod is set to 1h (default)
       *
       * 	M1 become unhealthy; remediation happens, and M1-1 is created as a replacement.
       * 	If M1-1 (replacement of M1) has problems within the 1hr after the creation, also
       * 	this machine will be remediated and this operation is considered a retry - a problem related
       * 	to the original issue happened to M1 -.
       *
       * 	If instead the problem on M1-1 is happening after MinHealthyPeriod expired, e.g. four days after
       * 	m1-1 has been created as a remediation of M1, the problem on M1-1 is considered unrelated to
       * 	the original issue happened to M1.
       *
       * If not set, this value is defaulted to 1h.
       */
      minHealthyPeriod?: string;
      /**
       * retryPeriod is the duration that KCP should wait before remediating a machine being created as a replacement
       * for an unhealthy machine (a retry).
       *
       * If not set, a retry will happen immediately.
       */
      retryPeriod?: string;
    };
    /**
     * replicas is the number of desired machines. Defaults to 1. When stacked etcd is used only
     * odd numbers are permitted, as per [etcd best practice](https://etcd.io/docs/v3.3.12/faq/#why-an-odd-number-of-cluster-members).
     * This is a pointer to distinguish between explicit zero and not specified.
     */
    replicas?: number;
    /**
     * rolloutAfter is a field to indicate a rollout should be performed
     * after the specified time even if no changes have been made to the
     * KubeadmControlPlane.
     * Example: In the YAML the time can be specified in the RFC3339 format.
     * To specify the rolloutAfter target as March 9, 2023, at 9 am UTC
     * use "2023-03-09T09:00:00Z".
     */
    rolloutAfter?: string;
    /**
     * rolloutBefore is a field to indicate a rollout should be performed
     * if the specified criteria is met.
     */
    rolloutBefore?: {
      /**
       * certificatesExpiryDays indicates a rollout needs to be performed if the
       * certificates of the machine will expire within the specified days.
       */
      certificatesExpiryDays?: number;
    };
    /**
     * rolloutStrategy is the RolloutStrategy to use to replace control plane machines with
     * new ones.
     */
    rolloutStrategy?: {
      /**
       * rollingUpdate is the rolling update config params. Present only if
       * RolloutStrategyType = RollingUpdate.
       */
      rollingUpdate?: {
        /**
         * maxSurge is the maximum number of control planes that can be scheduled above or under the
         * desired number of control planes.
         * Value can be an absolute number 1 or 0.
         * Defaults to 1.
         * Example: when this is set to 1, the control plane can be scaled
         * up immediately when the rolling update starts.
         */
        maxSurge?: number | string;
      };
      /**
       * type of rollout. Currently the only supported strategy is
       * "RollingUpdate".
       * Default is RollingUpdate.
       */
      type?: 'RollingUpdate';
    };
    /**
     * version defines the desired Kubernetes version.
     * Please note that if kubeadmConfigSpec.ClusterConfiguration.imageRepository is not set
     * we don't allow upgrades to versions >= v1.22.0 for which kubeadm uses the old registry (k8s.gcr.io).
     * Please use a newer patch version with the new registry instead. The default registries of kubeadm are:
     *   * registry.k8s.io (new registry): >= v1.22.17, >= v1.23.15, >= v1.24.9, >= v1.25.0
     *   * k8s.gcr.io (old registry): all older versions
     */
    version: string;
  };
  /**
   * status is the observed state of KubeadmControlPlane.
   */
  status?: {
    /**
     * conditions defines current service state of the KubeadmControlPlane.
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
     * failureMessage indicates that there is a terminal problem reconciling the
     * state, and will be set to a descriptive error message.
     *
     * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
     */
    failureMessage?: string;
    /**
     * failureReason indicates that there is a terminal problem reconciling the
     * state, and will be set to a token value suitable for
     * programmatic interpretation.
     *
     * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
     */
    failureReason?: string;
    /**
     * initialized denotes that the KubeadmControlPlane API Server is initialized and thus
     * it can accept requests.
     * NOTE: this field is part of the Cluster API contract and it is used to orchestrate provisioning.
     * The value of this field is never updated after provisioning is completed. Please use conditions
     * to check the operational state of the control plane.
     */
    initialized?: boolean;
    /**
     * lastRemediation stores info about last remediation performed.
     */
    lastRemediation?: {
      /**
       * machine is the machine name of the latest machine being remediated.
       */
      machine: string;
      /**
       * retryCount used to keep track of remediation retry for the last remediated machine.
       * A retry happens when a machine that was created as a replacement for an unhealthy machine also fails.
       */
      retryCount: number;
      /**
       * timestamp is when last remediation happened. It is represented in RFC3339 form and is in UTC.
       */
      timestamp: string;
    };
    /**
     * observedGeneration is the latest generation observed by the controller.
     */
    observedGeneration?: number;
    /**
     * ready denotes that the KubeadmControlPlane API Server became ready during initial provisioning
     * to receive requests.
     * NOTE: this field is part of the Cluster API contract and it is used to orchestrate provisioning.
     * The value of this field is never updated after provisioning is completed. Please use conditions
     * to check the operational state of the control plane.
     */
    ready?: boolean;
    /**
     * readyReplicas is the total number of fully running and ready control plane machines.
     */
    readyReplicas?: number;
    /**
     * replicas is the total number of non-terminated machines targeted by this control plane
     * (their labels match the selector).
     */
    replicas?: number;
    /**
     * selector is the label selector in string format to avoid introspection
     * by clients, and is used to provide the CRD-based integration for the
     * scale subresource and additional integrations for things like kubectl
     * describe.. The string will be in the same format as the query-param syntax.
     * More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors
     */
    selector?: string;
    /**
     * unavailableReplicas is the total number of unavailable machines targeted by this control plane.
     * This is the total number of machines that are still required for
     * the deployment to have 100% available capacity. They may either
     * be machines that are running but not yet ready or machines
     * that still have not been created.
     *
     * Deprecated: This field is deprecated and is going to be removed when support for v1beta1 will be dropped. Please see https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20240916-improve-status-in-CAPI-resources.md for more details.
     */
    unavailableReplicas?: number;
    /**
     * updatedReplicas is the total number of non-terminated machines targeted by this control plane
     * that have the desired template spec.
     */
    updatedReplicas?: number;
    /**
     * v1beta2 groups all the fields that will be added or modified in KubeadmControlPlane's status with the V1Beta2 version.
     */
    v1beta2?: {
      /**
       * availableReplicas is the number of available replicas targeted by this KubeadmControlPlane. A machine is considered available when Machine's Available condition is true.
       */
      availableReplicas?: number;
      /**
       * conditions represents the observations of a KubeadmControlPlane's current state.
       * Known condition types are Available, CertificatesAvailable, EtcdClusterAvailable, MachinesReady, MachinesUpToDate,
       * ScalingUp, ScalingDown, Remediating, Deleting, Paused.
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
       * readyReplicas is the number of ready replicas for this KubeadmControlPlane. A machine is considered ready when Machine's Ready condition is true.
       */
      readyReplicas?: number;
      /**
       * upToDateReplicas is the number of up-to-date replicas targeted by this KubeadmControlPlane. A machine is considered up-to-date when Machine's UpToDate condition is true.
       */
      upToDateReplicas?: number;
    };
    /**
     * version represents the minimum Kubernetes version for the control plane machines
     * in the cluster.
     */
    version?: string;
  };
}
