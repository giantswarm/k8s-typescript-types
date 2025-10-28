/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */

import * as metav1 from '../../../core/meta/v1';
/**
 * AzureClusterIdentity is the Schema for the azureclustersidentities API.
 */
export interface AzureClusterIdentity {
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
  kind: 'AzureClusterIdentity';
  metadata: metav1.ObjectMeta;
  /**
   * AzureClusterIdentitySpec defines the parameters that are used to create an AzureIdentity.
   */
  spec?: {
    /**
     * AllowedNamespaces is used to identify the namespaces the clusters are allowed to use the identity from.
     * Namespaces can be selected either using an array of namespaces or with label selector.
     * An empty allowedNamespaces object indicates that AzureClusters can use this identity from any namespace.
     * If this object is nil, no namespaces will be allowed (default behaviour, if this field is not provided)
     * A namespace should be either in the NamespaceList or match with Selector to use the identity.
     */
    allowedNamespaces?: {
      /**
       * A nil or empty list indicates that AzureCluster cannot use the identity from any namespace.
       */
      list?: string[];
      /**
       * Selector is a selector of namespaces that AzureCluster can
       * use this Identity from. This is a standard Kubernetes LabelSelector,
       * a label query over a set of resources. The result of matchLabels and
       * matchExpressions are ANDed.
       *
       * A nil or empty selector indicates that AzureCluster cannot use this
       * AzureClusterIdentity from any namespace.
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
     * CertPath is the path where certificates exist. When set, it takes precedence over ClientSecret for types that use certs like ServicePrincipalCertificate.
     */
    certPath?: string;
    /**
     * ClientID is the service principal client ID.
     * Both User Assigned MSI and SP can use this field.
     */
    clientID: string;
    /**
     * ClientSecret is a secret reference which should contain either a Service Principal password or certificate secret.
     */
    clientSecret?: {
      /**
       * name is unique within a namespace to reference a secret resource.
       */
      name?: string;
      /**
       * namespace defines the space within which the secret name must be unique.
       */
      namespace?: string;
    };
    /**
     * ResourceID is the Azure resource ID for the User Assigned MSI resource.
     * Only applicable when type is UserAssignedMSI.
     *
     * Deprecated: This field no longer has any effect.
     */
    resourceID?: string;
    /**
     * TenantID is the service principal primary tenant id.
     */
    tenantID: string;
    /**
     * Type is the type of Azure Identity used.
     * ServicePrincipal, ServicePrincipalCertificate, UserAssignedMSI, ManualServicePrincipal, UserAssignedIdentityCredential, or WorkloadIdentity.
     */
    type:
      | 'ServicePrincipal'
      | 'UserAssignedMSI'
      | 'ManualServicePrincipal'
      | 'ServicePrincipalCertificate'
      | 'WorkloadIdentity'
      | 'UserAssignedIdentityCredential';
    /**
     * UserAssignedIdentityCredentialsCloudType is used with UserAssignedIdentityCredentialsPath to specify the Cloud
     * type. Can only be one of the following values: public, china, or usgovernment
     * If a value is not specified, defaults to public
     */
    userAssignedIdentityCredentialsCloudType?: string;
    /**
     * UserAssignedIdentityCredentialsPath is the path where an existing JSON file exists containing the JSON format of
     * a UserAssignedIdentityCredentials struct.
     * See the msi-dataplane for more details on UserAssignedIdentityCredentials - https://github.com/Azure/msi-dataplane/blob/main/pkg/dataplane/internal/client/models.go#L125
     */
    userAssignedIdentityCredentialsPath?: string;
  };
  /**
   * AzureClusterIdentityStatus defines the observed state of AzureClusterIdentity.
   */
  status?: {
    /**
     * Conditions defines current service state of the AzureClusterIdentity.
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
  };
}
