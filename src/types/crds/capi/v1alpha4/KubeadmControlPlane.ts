/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * KubeadmControlPlane is the Schema for the KubeadmControlPlane API.
 *
 * Deprecated: This type will be removed in one of the next releases.
 */
export interface KubeadmControlPlane {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: 'controlplane.cluster.x-k8s.io/v1alpha4';
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
       * clusterConfiguration along with InitConfiguration are the configurations necessary for the init command
       */
      clusterConfiguration?: {
        /**
         * apiServer contains extra settings for the API server control plane component
         */
        apiServer?: {
          /**
           * certSANs sets extra Subject Alternative Names for the API Server signing cert.
           */
          certSANs?: string[];
          /**
           * extraArgs is an extra set of flags to pass to the control plane component.
           */
          extraArgs?: {
            [k: string]: string;
          };
          /**
           * extraVolumes is an extra set of host volumes, mounted to the control plane component.
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
           * extraVolumes is an extra set of host volumes, mounted to the control plane component.
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
             */
            peerCertSANs?: string[];
            /**
             * serverCertSANs sets extra Subject Alternative Names for the etcd server signing cert.
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
         * If empty, `registry.k8s.io` will be used by default; in case of kubernetes version is a CI build (kubernetes version starts with `ci/` or `ci-cross/`)
         * `gcr.io/k8s-staging-ci-images` will be used as a default for control plane components and for kube-proxy, while `registry.k8s.io`
         * will be used for all the other images.
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
           * extraVolumes is an extra set of host volumes, mounted to the control plane component.
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
         */
        filesystems?: {
          /**
           * device specifies the device name
           */
          device: string;
          /**
           * extraOpts defined extra options to add to the command for creating the file system.
           */
          extraOpts?: string[];
          /**
           * filesystem specifies the file system type.
           */
          filesystem: string;
          /**
           * label specifies the file system label to be used. If set to None, no label is used.
           */
          label: string;
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
          tableType?: string;
        }[];
      };
      /**
       * files specifies extra files to be passed to user_data upon creation.
       */
      files?: {
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
      format?: 'cloud-config';
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
           */
          ignorePreflightErrors?: string[];
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
           * empty slice, i.e. `taints: {}` in the YAML file. This field is solely used for Node registration.
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
             */
            caCertHashes?: string[];
            /**
             * token is a token used to validate cluster information
             * fetched from the control-plane.
             */
            token: string;
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
           */
          ignorePreflightErrors?: string[];
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
           * empty slice, i.e. `taints: {}` in the YAML file. This field is solely used for Node registration.
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
      };
      /**
       * mounts specifies a list of mount points to be setup.
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
         */
        servers?: string[];
      };
      /**
       * postKubeadmCommands specifies extra commands to run after kubeadm runs
       */
      postKubeadmCommands?: string[];
      /**
       * preKubeadmCommands specifies extra commands to run before kubeadm runs
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
       */
      useExperimentalRetryJoin?: boolean;
      /**
       * users specifies extra users to add
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
         * primaryGroup specifies the primary group for the user
         */
        primaryGroup?: string;
        /**
         * shell specifies the user's shell
         */
        shell?: string;
        /**
         * sshAuthorizedKeys specifies a list of ssh authorized keys for the user
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
       * nodeDrainTimeout is the total amount of time that the controller will spend on draining a controlplane node
       * The default value is 0, meaning that the node can be drained without any time limitations.
       * NOTE: NodeDrainTimeout is different from `kubectl drain --timeout`
       */
      nodeDrainTimeout?: string;
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
     */
    rolloutAfter?: string;
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
      type?: string;
    };
    /**
     * version defines the desired Kubernetes version.
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
      lastTransitionTime?: string;
      /**
       * message is a human readable message indicating details about the transition.
       * This field may be empty.
       */
      message?: string;
      /**
       * reason is the reason for the condition's last transition in CamelCase.
       * The specific API may choose whether or not this field is considered a guaranteed API.
       * This field may not be empty.
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
     */
    failureMessage?: string;
    /**
     * failureReason indicates that there is a terminal problem reconciling the
     * state, and will be set to a token value suitable for
     * programmatic interpretation.
     */
    failureReason?: string;
    /**
     * initialized denotes whether or not the control plane has the
     * uploaded kubeadm-config configmap.
     */
    initialized?: boolean;
    /**
     * observedGeneration is the latest generation observed by the controller.
     */
    observedGeneration?: number;
    /**
     * ready denotes that the KubeadmControlPlane API Server is ready to
     * receive requests.
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
     */
    unavailableReplicas?: number;
    /**
     * updatedReplicas is the total number of non-terminated machines targeted by this control plane
     * that have the desired template spec.
     */
    updatedReplicas?: number;
    /**
     * version represents the minimum Kubernetes version for the control plane machines
     * in the cluster.
     */
    version?: string;
  };
}
