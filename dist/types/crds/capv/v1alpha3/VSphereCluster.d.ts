/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * VSphereCluster is the Schema for the vsphereclusters API
 *
 * Deprecated: This type will be removed in one of the next releases.
 */
export interface VSphereCluster {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: 'infrastructure.cluster.x-k8s.io/v1alpha3';
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: 'VSphereCluster';
    metadata: metav1.ObjectMeta;
    /**
     * VSphereClusterSpec defines the desired state of VSphereCluster.
     */
    spec?: {
        /**
         * CloudProviderConfiguration holds the cluster-wide configuration for the vSphere cloud provider.
         *
         * Deprecated: will be removed in v1alpha4.
         */
        cloudProviderConfiguration?: {
            /**
             * Disk is the vSphere cloud provider's disk configuration.
             */
            disk?: {
                /**
                 * SCSIControllerType defines SCSI controller to be used.
                 */
                scsiControllerType?: string;
            };
            /**
             * Global is the vSphere cloud provider's global configuration.
             */
            global?: {
                /**
                 * APIBindPort configures the vSphere cloud controller manager API port.
                 * Defaults to 43001.
                 */
                apiBindPort?: string;
                /**
                 * APIDisable disables the vSphere cloud controller manager API.
                 * Defaults to true.
                 */
                apiDisable?: boolean;
                /**
                 * CAFile Specifies the path to a CA certificate in PEM format.
                 * If not configured, the system's CA certificates will be used.
                 */
                caFile?: string;
                /**
                 * Datacenters is a CSV string of the datacenters in which VMs are located.
                 */
                datacenters?: string;
                /**
                 * Insecure is a flag that disables TLS peer verification.
                 */
                insecure?: boolean;
                /**
                 * Password is the password used to access a vSphere endpoint.
                 */
                password?: string;
                /**
                 * Port is the port on which the vSphere endpoint is listening.
                 * Defaults to 443.
                 */
                port?: string;
                /**
                 * RoundTripperCount specifies the SOAP round tripper count
                 * (retries = RoundTripper - 1)
                 */
                roundTripperCount?: number;
                /**
                 * SecretName is the name of the Kubernetes secret in which the vSphere
                 * credentials are located.
                 */
                secretName?: string;
                /**
                 * SecretNamespace is the namespace for SecretName.
                 */
                secretNamespace?: string;
                /**
                 * SecretsDirectory is a directory in which secrets may be found. This
                 * may used in the event that:
                 * 1. It is not desirable to use the K8s API to watch changes to secrets
                 * 2. The cloud controller manager is not running in a K8s environment,
                 *    such as DC/OS. For example, the container storage interface (CSI) is
                 *    container orcehstrator (CO) agnostic, and should support non-K8s COs.
                 * Defaults to /etc/cloud/credentials.
                 */
                secretsDirectory?: string;
                /**
                 * ServiceAccount is the Kubernetes service account used to launch the cloud
                 * controller manager.
                 * Defaults to cloud-controller-manager.
                 */
                serviceAccount?: string;
                /**
                 * Thumbprint is the cryptographic thumbprint of the vSphere endpoint's
                 * certificate.
                 */
                thumbprint?: string;
                /**
                 * Username is the username used to access a vSphere endpoint.
                 */
                username?: string;
            };
            /**
             * Labels is the vSphere cloud provider's zone and region configuration.
             */
            labels?: {
                /**
                 * Region is the region in which VMs are created/located.
                 */
                region?: string;
                /**
                 * Zone is the zone in which VMs are created/located.
                 */
                zone?: string;
            };
            /**
             * Network is the vSphere cloud provider's network configuration.
             */
            network?: {
                /**
                 * Name is the name of the network to which VMs are connected.
                 */
                name?: string;
            };
            /**
             * CPIProviderConfig contains extra information used to configure the
             * vSphere cloud provider.
             */
            providerConfig?: {
                cloud?: {
                    controllerImage?: string;
                    /**
                     * ExtraArgs passes through extra arguments to the cloud provider.
                     * The arguments here are passed to the cloud provider daemonset specification
                     */
                    extraArgs?: {
                        [k: string]: string;
                    };
                };
                storage?: {
                    attacherImage?: string;
                    controllerImage?: string;
                    livenessProbeImage?: string;
                    metadataSyncerImage?: string;
                    nodeDriverImage?: string;
                    provisionerImage?: string;
                    registrarImage?: string;
                };
            };
            /**
             * VCenter is a list of vCenter configurations.
             */
            virtualCenter?: {
                /**
                 * CPIVCenterConfig is a vSphere cloud provider's vCenter configuration.
                 */
                [k: string]: {
                    /**
                     * Datacenters is a CSV string of the datacenters in which VMs are located.
                     */
                    datacenters?: string;
                    /**
                     * Password is the password used to access a vSphere endpoint.
                     */
                    password?: string;
                    /**
                     * Port is the port on which the vSphere endpoint is listening.
                     * Defaults to 443.
                     */
                    port?: string;
                    /**
                     * RoundTripperCount specifies the SOAP round tripper count
                     * (retries = RoundTripper - 1)
                     */
                    roundTripperCount?: number;
                    /**
                     * Thumbprint is the cryptographic thumbprint of the vSphere endpoint's
                     * certificate.
                     */
                    thumbprint?: string;
                    /**
                     * Username is the username used to access a vSphere endpoint.
                     */
                    username?: string;
                };
            };
            /**
             * Workspace is the vSphere cloud provider's workspace configuration.
             */
            workspace?: {
                /**
                 * Datacenter is the datacenter in which VMs are created/located.
                 */
                datacenter?: string;
                /**
                 * Datastore is the datastore in which VMs are created/located.
                 */
                datastore?: string;
                /**
                 * Folder is the folder in which VMs are created/located.
                 */
                folder?: string;
                /**
                 * ResourcePool is the resource pool in which VMs are created/located.
                 */
                resourcePool?: string;
                /**
                 * Server is the IP address or FQDN of the vSphere endpoint.
                 */
                server?: string;
            };
        };
        /**
         * ControlPlaneEndpoint represents the endpoint used to communicate with the control plane.
         */
        controlPlaneEndpoint?: {
            /**
             * The hostname on which the API server is serving.
             */
            host: string;
            /**
             * The port on which the API server is serving.
             */
            port: number;
        };
        /**
         * IdentityRef is a reference to either a Secret or VSphereClusterIdentity that contains
         * the identity to use when reconciling the cluster.
         */
        identityRef?: {
            /**
             * Kind of the identity. Can either be VSphereClusterIdentity or Secret
             */
            kind: 'VSphereClusterIdentity' | 'Secret';
            /**
             * Name of the identity.
             */
            name: string;
        };
        /**
         * Insecure is a flag that controls whether to validate the
         * vSphere server's certificate.
         *
         * Deprecated: will be removed in v1alpha4.
         */
        insecure?: boolean;
        /**
         * LoadBalancerRef may be used to enable a control plane load balancer
         * for this cluster.
         * When a LoadBalancerRef is provided, the VSphereCluster.Status.Ready field
         * will not be true until the referenced resource is Status.Ready and has a
         * non-empty Status.Address value.
         *
         * Deprecated: will be removed in v1alpha4.
         */
        loadBalancerRef?: {
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
         * Server is the address of the vSphere endpoint.
         */
        server?: string;
        /**
         * Thumbprint is the colon-separated SHA-1 checksum of the given vCenter server's host certificate
         * When provided, Insecure should not be set to true
         */
        thumbprint?: string;
    };
    /**
     * VSphereClusterStatus defines the observed state of VSphereClusterSpec.
     */
    status?: {
        /**
         * Conditions defines current service state of the VSphereCluster.
         */
        conditions?: {
            /**
             * Last time the condition transitioned from one status to another.
             * This should be when the underlying condition changed. If that is not known, then using the time when
             * the API field changed is acceptable.
             */
            lastTransitionTime?: string;
            /**
             * A human readable message indicating details about the transition.
             * This field may be empty.
             */
            message?: string;
            /**
             * The reason for the condition's last transition in CamelCase.
             * The specific API may choose whether or not this field is considered a guaranteed API.
             * This field may not be empty.
             */
            reason?: string;
            /**
             * Severity provides an explicit classification of Reason code, so the users or machines can immediately
             * understand the current situation and act accordingly.
             * The Severity field MUST be set only when Status=False.
             */
            severity?: string;
            /**
             * Status of the condition, one of True, False, Unknown.
             */
            status: string;
            /**
             * Type of condition in CamelCase or in foo.example.com/CamelCase.
             * Many .condition.type values are consistent across resources like Available, but because arbitrary conditions
             * can be useful (see .node.status.conditions), the ability to deconflict is important.
             */
            type: string;
        }[];
        /**
         * FailureDomains is a list of failure domain objects synced from the infrastructure provider.
         */
        failureDomains?: {
            /**
             * FailureDomainSpec is the Schema for Cluster API failure domains.
             * It allows controllers to understand how many failure domains a cluster can optionally span across.
             */
            [k: string]: {
                /**
                 * Attributes is a free form map of attributes an infrastructure provider might use or require.
                 */
                attributes?: {
                    [k: string]: string;
                };
                /**
                 * ControlPlane determines if this failure domain is suitable for use by control plane machines.
                 */
                controlPlane?: boolean;
            };
        };
        ready?: boolean;
    };
}
//# sourceMappingURL=VSphereCluster.d.ts.map