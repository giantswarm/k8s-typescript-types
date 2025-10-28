/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * AWSClusterRoleIdentity is the Schema for the awsclusterroleidentities API
 * It is used to assume a role using the provided sourceRef.
 */
export interface AWSClusterRoleIdentity {
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
    kind: 'AWSClusterRoleIdentity';
    metadata: metav1.ObjectMeta;
    /**
     * Spec for this AWSClusterRoleIdentity.
     */
    spec?: {
        /**
         * AllowedNamespaces is used to identify which namespaces are allowed to use the identity from.
         * Namespaces can be selected either using an array of namespaces or with label selector.
         * An empty allowedNamespaces object indicates that AWSClusters can use this identity from any namespace.
         * If this object is nil, no namespaces will be allowed (default behaviour, if this field is not provided)
         * A namespace should be either in the NamespaceList or match with Selector to use the identity.
         */
        allowedNamespaces?: {
            /**
             * An nil or empty list indicates that AWSClusters cannot use the identity from any namespace.
             */
            list?: string[];
            /**
             * An empty selector indicates that AWSClusters cannot use this
             * AWSClusterIdentity from any namespace.
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
        };
        /**
         * The duration, in seconds, of the role session before it is renewed.
         */
        durationSeconds?: number;
        /**
         * A unique identifier that might be required when you assume a role in another account.
         * If the administrator of the account to which the role belongs provided you with an
         * external ID, then provide that value in the ExternalId parameter. This value can be
         * any string, such as a passphrase or account number. A cross-account role is usually
         * set up to trust everyone in an account. Therefore, the administrator of the trusting
         * account might send an external ID to the administrator of the trusted account. That
         * way, only someone with the ID can assume the role, rather than everyone in the
         * account. For more information about the external ID, see How to Use an External ID
         * When Granting Access to Your AWS Resources to a Third Party in the IAM User Guide.
         */
        externalID?: string;
        /**
         * An IAM policy as a JSON-encoded string that you want to use as an inline session policy.
         */
        inlinePolicy?: string;
        /**
         * The Amazon Resource Names (ARNs) of the IAM managed policies that you want
         * to use as managed session policies.
         * The policies must exist in the same account as the role.
         */
        policyARNs?: string[];
        /**
         * The Amazon Resource Name (ARN) of the role to assume.
         */
        roleARN: string;
        /**
         * An identifier for the assumed role session
         */
        sessionName?: string;
        /**
         * SourceIdentityRef is a reference to another identity which will be chained to do
         * role assumption. All identity types are accepted.
         */
        sourceIdentityRef?: {
            /**
             * Kind of the identity.
             */
            kind: 'AWSClusterControllerIdentity' | 'AWSClusterRoleIdentity' | 'AWSClusterStaticIdentity';
            /**
             * Name of the identity.
             */
            name: string;
        };
    };
}
//# sourceMappingURL=AWSClusterRoleIdentity.d.ts.map