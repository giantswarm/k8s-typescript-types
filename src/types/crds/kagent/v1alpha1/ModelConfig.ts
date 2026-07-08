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
  apiVersion: 'kagent.dev/v1alpha1';
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
     * The key in the secret that contains the API key
     */
    apiKeySecretKey?: string;
    /**
     * The reference to the secret that contains the API key. Must be a reference to the name of a secret in the same namespace as the referencing ModelConfig
     */
    apiKeySecretRef?: string;
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
     * ModelInfo contains information about the model.
     * This field is required if the model is not one of the
     * pre-defined autogen models. That list can be found here:
     */
    modelInfo?: {
      family?: string;
      functionCalling?: boolean;
      jsonOutput?: boolean;
      multipleSystemMessages?: boolean;
      structuredOutput?: boolean;
      vision?: boolean;
    };
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
       * Top-p sampling parameter
       */
      topP?: string;
    };
    /**
     * The provider of the model
     */
    provider?: 'Anthropic' | 'OpenAI' | 'AzureOpenAI' | 'Ollama' | 'Gemini' | 'GeminiVertexAI' | 'AnthropicVertexAI';
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
  };
}
