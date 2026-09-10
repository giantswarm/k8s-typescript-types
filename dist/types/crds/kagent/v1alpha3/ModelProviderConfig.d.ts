/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * ModelProviderConfig is the Schema for the modelproviderconfigs API.
 * It represents a model provider configuration with automatic model discovery.
 */
export interface ModelProviderConfig {
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
    kind: 'ModelProviderConfig';
    metadata: metav1.ObjectMeta;
    /**
     * ModelProviderConfigSpec defines the desired state of ModelProviderConfig.
     */
    spec?: {
        /**
         * Endpoint is the API endpoint URL for the provider.
         * If not specified, the default endpoint for the provider type will be used.
         */
        endpoint?: string;
        /**
         * SecretRef references the Kubernetes Secret containing the API key.
         * Optional for providers that don't require authentication (e.g., local Ollama).
         */
        secretRef?: {
            /**
             * Name is the name of the secret in the same namespace as the ModelProviderConfig.
             */
            name: string;
        };
        /**
         * Type is the model provider type (OpenAI, Anthropic, etc.)
         */
        type: 'Anthropic' | 'OpenAI' | 'AzureOpenAI' | 'Ollama' | 'Gemini' | 'GeminiVertexAI' | 'AnthropicVertexAI' | 'Bedrock' | 'SAPAICore' | 'Foundry';
    };
    /**
     * ModelProviderConfigStatus defines the observed state of ModelProviderConfig.
     */
    status?: {
        /**
         * Conditions represent the latest available observations of the ModelProviderConfig's state
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
         * DiscoveredModels is the cached list of model IDs available from this model provider
         */
        discoveredModels?: string[];
        /**
         * LastDiscoveryTime is the timestamp of the last successful model discovery
         */
        lastDiscoveryTime?: string;
        /**
         * ModelCount is the number of discovered models (for kubectl display)
         */
        modelCount?: number;
        /**
         * ObservedGeneration reflects the generation of the most recently observed ModelProviderConfig spec
         */
        observedGeneration?: number;
        /**
         * SecretHash is a hash of the referenced secret data, used to detect secret changes
         */
        secretHash?: string;
    };
}
//# sourceMappingURL=ModelProviderConfig.d.ts.map