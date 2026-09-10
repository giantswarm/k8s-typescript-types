/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * RemoteMCPServer is the Schema for the RemoteMCPServers API.
 */
export interface RemoteMCPServer {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: 'kagent.dev/v1alpha3';
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: 'RemoteMCPServer';
    metadata: metav1.ObjectMeta;
    /**
     * RemoteMCPServerSpec defines the desired state of RemoteMCPServer.
     */
    spec?: {
        /**
         * AllowedNamespaces defines which namespaces are allowed to reference this RemoteMCPServer.
         * This follows the Gateway API pattern for cross-namespace route attachments.
         * If not specified, only Agents in the same namespace can reference this RemoteMCPServer.
         * See: https://gateway-api.sigs.k8s.io/guides/multiple-ns/#cross-namespace-route-attachment
         *
         * A cross-namespace-permitting value (from: All or from: Selector) is
         * mutually exclusive with spec.tls.caCertSecretRef (enforced by a spec-level
         * XValidation rule): a pinned CA Secret is mounted onto the consuming agent's
         * pod by bare name and Kubernetes resolves it in the agent's namespace, not
         * this RemoteMCPServer's, so a CA-pinning RemoteMCPServer cannot be referenced
         * cross-namespace. from: Same (the default) is always allowed.
         */
        allowedNamespaces?: {
            /**
             * From indicates where references to this resource can originate.
             * Possible values are:
             * * All: References from all namespaces are allowed.
             * * Same: Only references from the same namespace are allowed (default).
             * * Selector: References from namespaces matching the selector are allowed.
             */
            from?: 'All' | 'Same' | 'Selector';
            /**
             * Selector is a label selector for namespaces that are allowed to reference this resource.
             * Only used when From is set to "Selector".
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
        description: string;
        headersFrom?: {
            name: string;
            value?: string;
            /**
             * ValueSource defines a source for configuration values from a Secret or ConfigMap
             */
            valueFrom?: {
                /**
                 * The key of the ConfigMap or Secret.
                 */
                key: string;
                /**
                 * The name of the ConfigMap or Secret.
                 */
                name: string;
                type: 'ConfigMap' | 'Secret';
            };
        }[];
        protocol?: 'SSE' | 'STREAMABLE_HTTP';
        sseReadTimeout?: string;
        terminateOnClose?: boolean;
        timeout?: string;
        /**
         * TLS configuration for the upstream MCP server connection.
         * Use this for HTTPS upstreams that present a certificate the agent's
         * system trust store does not include (corporate CA, self-signed cert
         * on a test fixture, internal MCP gateway). Reuses the same TLSConfig
         * type as ModelConfig.spec.tls — disableVerify turns off certificate
         * validation entirely, caCertSecretRef + caCertSecretKey point at a
         * PEM bundle Secret in the same namespace, and disableSystemCAs
         * trusts only the named bundle.
         *
         * Note one asymmetry with ModelConfig: a spec-level XValidation rule
         * on RemoteMCPServer rejects spec.tls when spec.url has the http://
         * scheme (a TLS opinion contradicts a plaintext URL). ModelConfig has
         * no equivalent rule, so a TLS block can sit alongside any baseUrl.
         */
        tls?: {
            /**
             * CACertSecretKey is the key within the Secret that contains the
             * CA certificate data (PEM-encoded). Required when CACertSecretRef
             * is set — admission rejects ref-without-key regardless of
             * DisableVerify (see the TLSConfig-level XValidation rules).
             */
            caCertSecretKey?: string;
            /**
             * CACertSecretRef is a reference to a Kubernetes Secret containing
             * CA certificate(s) in PEM format. The Secret must be in the same
             * namespace as the resource referencing it (ModelConfig,
             * RemoteMCPServer, or any future consumer of TLSConfig).
             * When set, the certificate will be used to verify the upstream's
             * SSL certificate.
             */
            caCertSecretRef?: string;
            /**
             * DisableSystemCAs disables the use of system CA certificates.
             * When false (default), system CA certificates are used for verification (safe behavior).
             * When true, only the custom CA from CACertSecretRef is trusted.
             * This allows strict security policies where only corporate CAs should be trusted.
             */
            disableSystemCAs?: boolean;
            /**
             * DisableVerify disables SSL certificate verification entirely.
             * When false (default), SSL certificates are verified.
             * When true, SSL certificate verification is disabled.
             * WARNING: This should ONLY be used in development/testing environments.
             * Production deployments MUST use proper certificates.
             */
            disableVerify?: boolean;
        };
        url: string;
    };
    /**
     * RemoteMCPServerStatus defines the observed state of RemoteMCPServer.
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
        discoveredTools?: {
            description: string;
            name: string;
        }[];
        /**
         * INSERT ADDITIONAL STATUS FIELD - define observed state of cluster
         * Important: Run "make" to regenerate code after modifying this file
         */
        observedGeneration?: number;
        /**
         * SecretHash stores a hash of the TLS Secret referenced by spec.tls so
         * agents that consume this RemoteMCPServer can detect cert rotation and
         * roll on the next reconcile. Empty when spec.tls.caCertSecretRef is unset.
         */
        secretHash?: string;
    };
}
//# sourceMappingURL=RemoteMCPServer.d.ts.map