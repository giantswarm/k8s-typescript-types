/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * VSphereClusterIdentity defines the account to be used for reconciling clusters.
 */
export interface VSphereClusterIdentity {
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
  kind: 'VSphereClusterIdentity';
  metadata: metav1.ObjectMeta;
  /**
   * VSphereClusterIdentitySpec contains a secret reference and a group of allowed namespaces.
   */
  spec?: {
    /**
     * AllowedNamespaces is used to identify which namespaces are allowed to use this account.
     * Namespaces can be selected with a label selector.
     * If this object is nil, no namespaces will be allowed
     */
    allowedNamespaces?: {
      /**
       * Selector is a standard Kubernetes LabelSelector. A label query over a set of resources.
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
     * SecretName references a Secret inside the controller namespace with the credentials to use
     */
    secretName?: string;
  };
  /**
   * VSphereClusterIdentityStatus contains the status of the VSphereClusterIdentity.
   */
  status?: {
    /**
     * Conditions defines current service state of the VSphereCluster.
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
    ready?: boolean;
    /**
     * v1beta2 groups all the fields that will be added or modified in VSphereClusterIdentity's status with the V1Beta2 version.
     */
    v1beta2?: {
      /**
       * conditions represents the observations of a VSphereClusterIdentity's current state.
       * Known condition types are Available and Paused.
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
    };
  };
}
