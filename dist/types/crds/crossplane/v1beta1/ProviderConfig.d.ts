/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * A ProviderConfig configures the AWS provider.
 */
export interface ProviderConfig {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: 'aws.upbound.io/v1beta1';
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: 'ProviderConfig';
    metadata: metav1.ObjectMeta;
    /**
     * A ProviderConfigSpec defines the desired state of a ProviderConfig.
     */
    spec?: {
        /**
         * AssumeRoleChain defines the options for assuming an IAM role
         */
        assumeRoleChain?: {
            /**
             * ExternalID is the external ID used when assuming role.
             */
            externalID?: string;
            /**
             * AssumeRoleARN to assume with provider credentials
             */
            roleARN?: string;
            /**
             * Tags is list of session tags that you want to pass. Each session tag consists of a key
             * name and an associated value. For more information about session tags, see
             * Tagging STS Sessions
             * (https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html).
             */
            tags?: {
                /**
                 * Name of the tag.
                 * Key is a required field
                 */
                key: string;
                /**
                 * Value of the tag.
                 * Value is a required field
                 */
                value: string;
            }[];
            /**
             * TransitiveTagKeys is a list of keys for session tags that you want to set as transitive. If you set a
             * tag key as transitive, the corresponding key and value passes to subsequent
             * sessions in a role chain. For more information, see Chaining Roles with Session Tags
             * (https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining).
             */
            transitiveTagKeys?: string[];
        }[];
        /**
         * Credentials required to authenticate to this provider.
         */
        credentials: {
            /**
             * Env is a reference to an environment variable that contains credentials
             * that must be used to connect to the provider.
             */
            env?: {
                /**
                 * Name is the name of an environment variable.
                 */
                name: string;
            };
            /**
             * Fs is a reference to a filesystem location that contains credentials that
             * must be used to connect to the provider.
             */
            fs?: {
                /**
                 * Path is a filesystem path.
                 */
                path: string;
            };
            /**
             * A SecretRef is a reference to a secret key that contains the credentials
             * that must be used to connect to the provider.
             */
            secretRef?: {
                /**
                 * The key to select.
                 */
                key: string;
                /**
                 * Name of the secret.
                 */
                name: string;
                /**
                 * Namespace of the secret.
                 */
                namespace: string;
            };
            /**
             * Source of the provider credentials.
             */
            source: 'None' | 'Secret' | 'IRSA' | 'WebIdentity' | 'PodIdentity' | 'Upbound';
            /**
             * Upbound defines the options for authenticating using Upbound as an identity provider.
             */
            upbound?: {
                /**
                 * WebIdentity defines the options for assuming an IAM role with a Web
                 * Identity.
                 */
                webIdentity?: {
                    /**
                     * AssumeRoleARN to assume with provider credentials
                     */
                    roleARN?: string;
                    /**
                     * RoleSessionName is the session name, if you wish to uniquely identify this session.
                     */
                    roleSessionName?: string;
                    /**
                     * TokenConfig is the Web Identity Token config to assume the role.
                     */
                    tokenConfig?: {
                        /**
                         * Fs is a reference to a filesystem location that contains credentials that
                         * must be used to obtain the web identity token.
                         */
                        fs?: {
                            /**
                             * Path is a filesystem path.
                             */
                            path: string;
                        };
                        /**
                         * A SecretRef is a reference to a secret key that contains the credentials
                         * that must be used to obtain the web identity token.
                         */
                        secretRef?: {
                            /**
                             * The key to select.
                             */
                            key: string;
                            /**
                             * Name of the secret.
                             */
                            name: string;
                            /**
                             * Namespace of the secret.
                             */
                            namespace: string;
                        };
                        /**
                         * Source is the source of the web identity token.
                         */
                        source: 'Secret' | 'Filesystem';
                    };
                };
            };
            /**
             * WebIdentity defines the options for assuming an IAM role with a Web Identity.
             */
            webIdentity?: {
                /**
                 * AssumeRoleARN to assume with provider credentials
                 */
                roleARN?: string;
                /**
                 * RoleSessionName is the session name, if you wish to uniquely identify this session.
                 */
                roleSessionName?: string;
                /**
                 * TokenConfig is the Web Identity Token config to assume the role.
                 */
                tokenConfig?: {
                    /**
                     * Fs is a reference to a filesystem location that contains credentials that
                     * must be used to obtain the web identity token.
                     */
                    fs?: {
                        /**
                         * Path is a filesystem path.
                         */
                        path: string;
                    };
                    /**
                     * A SecretRef is a reference to a secret key that contains the credentials
                     * that must be used to obtain the web identity token.
                     */
                    secretRef?: {
                        /**
                         * The key to select.
                         */
                        key: string;
                        /**
                         * Name of the secret.
                         */
                        name: string;
                        /**
                         * Namespace of the secret.
                         */
                        namespace: string;
                    };
                    /**
                     * Source is the source of the web identity token.
                     */
                    source: 'Secret' | 'Filesystem';
                };
            };
        };
        /**
         * Endpoint is where you can override the default endpoint configuration
         * of AWS calls made by the provider.
         */
        endpoint?: {
            /**
             * Specifies if the endpoint's hostname can be modified by the SDK's API
             * client.
             *
             * If the hostname is mutable the SDK API clients may modify any part of
             * the hostname based on the requirements of the API, (e.g. adding, or
             * removing content in the hostname). Such as, Amazon S3 API client
             * prefixing "bucketname" to the hostname, or changing the
             * hostname service name component from "s3." to "s3-accesspoint.dualstack."
             * for the dualstack endpoint of an S3 Accesspoint resource.
             *
             * Care should be taken when providing a custom endpoint for an API. If the
             * endpoint hostname is mutable, and the client cannot modify the endpoint
             * correctly, the operation call will most likely fail, or have undefined
             * behavior.
             *
             * If hostname is immutable, the SDK API clients will not modify the
             * hostname of the URL. This may cause the API client not to function
             * correctly if the API requires the operation specific hostname values
             * to be used by the client.
             *
             * This flag does not modify the API client's behavior if this endpoint
             * will be used instead of Endpoint Discovery, or if the endpoint will be
             * used to perform Endpoint Discovery. That behavior is configured via the
             * API Client's Options.
             * Note that this is effective only for resources that use AWS SDK v2.
             */
            hostnameImmutable?: boolean;
            /**
             * The AWS partition the endpoint belongs to.
             */
            partitionId?: string;
            /**
             * Specifies the list of services you want endpoint to be used for
             */
            services?: string[];
            /**
             * The signing method that should be used for signing the requests to the
             * endpoint.
             */
            signingMethod?: string;
            /**
             * The service name that should be used for signing the requests to the
             * endpoint.
             */
            signingName?: string;
            /**
             * The region that should be used for signing the request to the endpoint.
             * For IAM, which doesn't have any region, us-east-1 is used to sign the
             * requests, which is the only signing region of IAM.
             */
            signingRegion?: string;
            /**
             * The source of the Endpoint. By default, this will be ServiceMetadata.
             * When providing a custom endpoint, you should set the source as Custom.
             * If source is not provided when providing a custom endpoint, the SDK may not
             * perform required host mutations correctly. Source should be used along with
             * HostnameImmutable property as per the usage requirement.
             * Note that this is effective only for resources that use AWS SDK v2.
             */
            source?: 'ServiceMetadata' | 'Custom';
            /**
             * URL lets you configure the endpoint URL to be used in SDK calls.
             */
            url: {
                /**
                 * Dynamic lets you configure the behavior of endpoint URL resolver.
                 */
                dynamic?: {
                    /**
                     * Host is the address of the main host that the resolver will use to
                     * prepend protocol, service and region configurations.
                     * For example, the final URL for EC2 in us-east-1 looks like https://ec2.us-east-1.amazonaws.com
                     * You would need to use "amazonaws.com" as Host and "https" as protocol
                     * to have the resolver construct it.
                     */
                    host: string;
                    /**
                     * Protocol is the HTTP protocol that will be used in the URL. Currently,
                     * only http and https are supported.
                     */
                    protocol: 'http' | 'https';
                };
                /**
                 * Static is the full URL you'd like the AWS SDK to use.
                 * Recommended for using tools like localstack where a single host is exposed
                 * for all services and regions.
                 */
                static?: string;
                /**
                 * You can provide a static URL that will be used regardless of the service
                 * and region by choosing Static type. Alternatively, you can provide
                 * configuration for dynamically resolving the URL with the config you provide
                 * once you set the type as Dynamic.
                 */
                type: 'Static' | 'Dynamic' | 'Auto';
            };
        };
        /**
         * Whether to enable the request to use path-style addressing, i.e., https://s3.amazonaws.com/BUCKET/KEY.
         */
        s3_use_path_style?: boolean;
        /**
         * Whether to skip credentials validation via the STS API.
         * This can be useful for testing and for AWS API implementations that do not have STS available.
         */
        skip_credentials_validation?: boolean;
        /**
         * Whether to skip the AWS Metadata API check
         * Useful for AWS API implementations that do not have a metadata API endpoint.
         */
        skip_metadata_api_check?: boolean;
        /**
         * Whether to skip validation of provided region name.
         * Useful for AWS-like implementations that use their own region names or to bypass the validation for
         * regions that aren't publicly available yet.
         */
        skip_region_validation?: boolean;
        /**
         * Whether to skip requesting the account ID.
         * Useful for AWS API implementations that do not have the IAM, STS API, or metadata API
         */
        skip_requesting_account_id?: boolean;
    };
    /**
     * A ProviderConfigStatus reflects the observed state of a ProviderConfig.
     */
    status?: {
        /**
         * Conditions of the resource.
         */
        conditions?: {
            /**
             * LastTransitionTime is the last time this condition transitioned from one
             * status to another.
             */
            lastTransitionTime: string;
            /**
             * A Message containing details about this condition's last transition from
             * one status to another, if any.
             */
            message?: string;
            /**
             * ObservedGeneration represents the .metadata.generation that the condition was set based upon.
             * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
             * with respect to the current state of the instance.
             */
            observedGeneration?: number;
            /**
             * A Reason for this condition's last transition from one status to another.
             */
            reason: string;
            /**
             * Status of this condition; is it currently True, False, or Unknown?
             */
            status: string;
            /**
             * Type of this condition. At most one of each condition type may apply to
             * a resource at any point in time.
             */
            type: string;
        }[];
        /**
         * Users of this provider configuration.
         */
        users?: number;
    };
}
//# sourceMappingURL=ProviderConfig.d.ts.map