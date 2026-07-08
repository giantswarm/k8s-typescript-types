/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * ModelConfig is the Schema for the modelconfigs API.
 */
export interface ModelConfig {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: 'kagent.dev/v1alpha2';
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: 'ModelConfig';
    metadata: metav1.ObjectMeta;
    /**
     * ModelConfigSpec defines the desired state of ModelConfig.
     */
    spec?: {
        /**
         * Anthropic-specific configuration
         */
        anthropic?: {
            /**
             * Base URL for the Anthropic API (overrides default)
             */
            baseUrl?: string;
            /**
             * Maximum tokens to generate
             */
            maxTokens?: number;
            /**
             * Temperature for sampling
             */
            temperature?: string;
            /**
             * Top-k sampling parameter
             */
            topK?: number;
            /**
             * Top-p sampling parameter
             */
            topP?: string;
        };
        /**
         * Anthropic-specific configuration
         */
        anthropicVertexAI?: {
            /**
             * The project location
             */
            location: string;
            /**
             * Maximum tokens to generate
             */
            maxTokens?: number;
            /**
             * The project ID
             */
            projectID: string;
            /**
             * Stop sequences
             */
            stopSequences?: string[];
            /**
             * Temperature
             */
            temperature?: string;
            /**
             * Top-k sampling parameter
             */
            topK?: string;
            /**
             * Top-p sampling parameter
             */
            topP?: string;
        };
        /**
         * APIKeyPassthrough enables forwarding the Bearer token from incoming A2A requests
         * directly to the LLM provider as the API key. This is useful for organizations
         * with federated identity that want to avoid separate secret management.
         * Mutually exclusive with apiKeySecret.
         */
        apiKeyPassthrough?: boolean;
        /**
         * The name of the secret that contains the API key. Must be a reference to the name of a secret in the same namespace as the referencing ModelConfig.
         * For the SAPAICore provider, the secret must contain two keys: "client_id" and "client_secret"
         * (the OAuth2 client credentials for SAP AI Core). The apiKeySecretKey field is not used for SAPAICore.
         */
        apiKeySecret?: string;
        /**
         * The key in the secret that contains the API key.
         * Not used for the SAPAICore provider (which always reads "client_id" and "client_secret" from the secret).
         */
        apiKeySecretKey?: string;
        /**
         * Azure OpenAI-specific configuration
         */
        azureOpenAI?: {
            /**
             * API version for the Azure OpenAI API
             */
            apiVersion: string;
            /**
             * Azure AD token for authentication
             */
            azureAdToken?: string;
            /**
             * Deployment name for the Azure OpenAI API
             */
            azureDeployment?: string;
            /**
             * Endpoint for the Azure OpenAI API
             */
            azureEndpoint: string;
            /**
             * Maximum tokens to generate
             */
            maxTokens?: number;
            /**
             * Temperature for sampling
             */
            temperature?: string;
            /**
             * Top-p sampling parameter
             */
            topP?: string;
        };
        /**
         * AWS Bedrock-specific configuration
         */
        bedrock?: {
            /**
             * AdditionalModelRequestFields passes model-specific parameters to Bedrock's
             * additionalModelRequestFields in the Converse API. Use this for provider-specific
             * options that are not part of the standard InferenceConfiguration block, such as
             * Claude extended thinking or top_k. Values are forwarded as-is to the API.
             * Example: {"top_k": 5, "thinking": {"type": "enabled", "budget_tokens": 16000}}
             */
            additionalModelRequestFields?: {
                [k: string]: unknown;
            };
            /**
             * CacheTTL controls how long Bedrock retains a cached prefix when
             * PromptCaching is enabled. Only meaningful when PromptCaching is true.
             *
             *   - "5m" (default): Bedrock's standard 5-minute sliding cache. Each cache
             *     hit refreshes the window. Supported by all prompt-caching models.
             *   - "1h": extended-TTL caching, useful for tasks whose Converse calls are
             *     spaced more than 5 minutes apart.
             *
             * NOTE: "1h" is NOT strictly better than "5m". Extended-TTL cache writes are
             * billed at a higher per-token rate than 5-minute writes, and 1h is supported
             * on a narrower set of models. Only choose "1h" when calls are spaced far
             * enough apart that a 5-minute cache would expire between them; otherwise the
             * higher write cost is wasted. See the AWS prompt-caching docs above.
             */
            cacheTTL?: '5m' | '1h';
            /**
             * PromptCaching enables Bedrock prompt caching by appending a CachePoint
             * block at the end of the Converse request's `system` content array and
             * the end of the `toolConfig.tools` array. Bedrock will cache the prefix up to and
             * including those cache points across requests in the same region for
             * roughly 5 minutes after first use, billing the cached portion at a
             * reduced rate on cache hits.
             *
             * Recommended for tool-using agents that make many Converse calls per
             * task with a stable system prompt and tool set — the per-call input
             * token count can drop by 70-90% on hit. Has no effect on models that
             * don't support caching; the marker is ignored by Bedrock for those.
             *
             * See https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html
             * for the current list of supported models and minimum prefix sizes.
             */
            promptCaching?: boolean;
            /**
             * AWS region where the Bedrock model is available (e.g., us-east-1, us-west-2)
             */
            region: string;
        };
        defaultHeaders?: {
            [k: string]: string;
        };
        /**
         * Gemini-specific configuration
         */
        gemini?: {};
        /**
         * Gemini Vertex AI-specific configuration
         */
        geminiVertexAI?: {
            /**
             * Candidate count
             */
            candidateCount?: number;
            /**
             * The project location
             */
            location: string;
            /**
             * Maximum output tokens
             */
            maxOutputTokens?: number;
            /**
             * The project ID
             */
            projectID: string;
            /**
             * Response mime type
             */
            responseMimeType?: string;
            /**
             * Stop sequences
             */
            stopSequences?: string[];
            /**
             * Temperature
             */
            temperature?: string;
            /**
             * Top-k sampling parameter
             */
            topK?: string;
            /**
             * Top-p sampling parameter
             */
            topP?: string;
        };
        model: string;
        /**
         * Ollama-specific configuration
         */
        ollama?: {
            /**
             * Host for the Ollama API
             */
            host?: string;
            /**
             * Options for the Ollama API
             */
            options?: {
                [k: string]: string;
            };
        };
        /**
         * OpenAI-specific configuration
         */
        openAI?: {
            /**
             * Base URL for the OpenAI API (overrides default)
             */
            baseUrl?: string;
            /**
             * Frequency penalty
             */
            frequencyPenalty?: string;
            /**
             * Maximum tokens to generate
             */
            maxTokens?: number;
            /**
             * N value
             */
            n?: number;
            /**
             * Organization ID for the OpenAI API
             */
            organization?: string;
            /**
             * Presence penalty
             */
            presencePenalty?: string;
            /**
             * Reasoning effort
             */
            reasoningEffort?: 'minimal' | 'low' | 'medium' | 'high';
            /**
             * Seed value
             */
            seed?: number;
            /**
             * Temperature for sampling
             */
            temperature?: string;
            /**
             * Timeout
             */
            timeout?: number;
            /**
             * TokenExchange configures dynamic bearer token acquisition via credential exchange.
             * Requires apiKeySecret (used as the service account secret) and is mutually exclusive with apiKeyPassthrough.
             */
            tokenExchange?: {
                /**
                 * GDCHServiceAccountConfig holds GDCH-specific token exchange parameters.
                 */
                gdchServiceAccount?: {
                    /**
                     * Audience is the token exchange audience URL (the GDC inference gateway base URL)
                     */
                    audience: string;
                };
                /**
                 * TokenExchangeType identifies the token exchange mechanism
                 */
                type: 'GDCHServiceAccount';
            };
            /**
             * Top-p sampling parameter
             */
            topP?: string;
        };
        /**
         * The provider of the model
         */
        provider?: 'Anthropic' | 'OpenAI' | 'AzureOpenAI' | 'Ollama' | 'Gemini' | 'GeminiVertexAI' | 'AnthropicVertexAI' | 'Bedrock' | 'SAPAICore';
        /**
         * SAP AI Core-specific configuration
         */
        sapAICore?: {
            /**
             * OAuth2 token endpoint URL (e.g., https://tenant.authentication.eu10.hana.ondemand.com)
             */
            authUrl?: string;
            /**
             * Base URL for the SAP AI Core API (e.g., https://api.ai.prod.eu-central-1.aws.ml.hana.ondemand.com)
             */
            baseUrl: string;
            /**
             * Resource group in SAP AI Core
             */
            resourceGroup?: string;
        };
        /**
         * TLS configuration for provider connections.
         * Enables agents to connect to internal LiteLLM gateways or other providers
         * that use self-signed certificates or custom certificate authorities.
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
    };
    /**
     * ModelConfigStatus defines the observed state of ModelConfig.
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
        observedGeneration?: number;
        /**
         * The secret hash stores a hash of any secrets required by the model config (i.e. api key, tls cert) to ensure agents referencing this model config detect changes to these secrets and restart if necessary.
         */
        secretHash?: string;
    };
}
//# sourceMappingURL=ModelConfig.d.ts.map