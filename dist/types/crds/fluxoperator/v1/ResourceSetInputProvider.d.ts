/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * ResourceSetInputProvider is the Schema for the ResourceSetInputProviders API.
 */
export interface ResourceSetInputProvider {
    /**
     * APIVersion defines the versioned schema of this representation of an object.
     * Servers should convert recognized schemas to the latest internal value, and
     * may reject unrecognized values.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: 'fluxcd.controlplane.io/v1';
    /**
     * Kind is a string value representing the REST resource this object represents.
     * Servers may infer this from the endpoint the client submits requests to.
     * Cannot be updated.
     * In CamelCase.
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: 'ResourceSetInputProvider';
    metadata: metav1.ObjectMeta;
    /**
     * ResourceSetInputProviderSpec defines the desired state of ResourceSetInputProvider
     */
    spec?: {
        /**
         * CertSecretRef specifies the Kubernetes Secret containing either or both of
         *
         * - a PEM-encoded CA certificate (`ca.crt`)
         * - a PEM-encoded client certificate (`tls.crt`) and private key (`tls.key`)
         *
         * When connecting to a Git, OCI, or ExternalService provider that uses self-signed certificates,
         * the CA certificate must be set in the Secret under the 'ca.crt' key to establish the trust relationship.
         * When connecting to a provider that supports client certificates (mTLS), the client certificate
         * and private key must be set in the Secret under the 'tls.crt' and 'tls.key' keys, respectively.
         */
        certSecretRef?: {
            /**
             * Name of the referent.
             */
            name: string;
        };
        /**
         * DefaultValues contains the default values for the inputs.
         * These values are used to populate the inputs when the provider
         * response does not contain them.
         */
        defaultValues?: {
            [k: string]: {
                [k: string]: unknown;
            };
        };
        /**
         * Filter defines the filter to apply to the input provider response.
         */
        filter?: {
            /**
             * ExcludeBranch specifies the regular expression to filter the branches
             * that the input provider should exclude.
             */
            excludeBranch?: string;
            /**
             * ExcludeEnvironment specifies the regular expression to filter the environments
             * that the input provider should exclude.
             */
            excludeEnvironment?: string;
            /**
             * ExcludeTag specifies the regular expression to filter the tags
             * that the input provider should exclude.
             */
            excludeTag?: string;
            /**
             * IncludeBranch specifies the regular expression to filter the branches
             * that the input provider should include.
             */
            includeBranch?: string;
            /**
             * IncludeEnvironment specifies the regular expression to filter the environments
             * that the input provider should include.
             */
            includeEnvironment?: string;
            /**
             * IncludeTag specifies the regular expression to filter the tags
             * that the input provider should include.
             */
            includeTag?: string;
            /**
             * Labels specifies the list of labels to filter the input provider response.
             */
            labels?: string[];
            /**
             * Limit specifies the maximum number of input sets to return.
             * When not set, the default limit is 100.
             */
            limit?: number;
            /**
             * Semver specifies a semantic version range to filter and sort the tags.
             * If this field is not specified, the tags will be sorted in reverse
             * alphabetical order.
             * Supported only for tags at the moment.
             */
            semver?: string;
        };
        /**
         * Insecure allows connecting to an ExternalService or OCIArtifactTag provider
         * over plain HTTP without TLS. When not set, the URL must use HTTPS.
         */
        insecure?: boolean;
        /**
         * Schedule defines the schedules for the input provider to run.
         *
         * Items: Schedule defines a schedule for something to run.
         */
        schedule?: {
            /**
             * Cron specifies the cron expression for the schedule.
             */
            cron: string;
            /**
             * TimeZone specifies the time zone for the cron schedule. Defaults to UTC.
             */
            timeZone?: string;
            /**
             * Window defines the time window during which the execution is allowed.
             * Defaults to 0s, meaning no window is applied.
             */
            window?: string;
        }[];
        /**
         * SecretRef specifies the Kubernetes Secret containing the credentials
         * to access the input provider.
         * When connecting to a Git provider, the secret must contain the keys
         * 'username' and 'password', and the password should be a personal access token
         * that grants read-only access to the repository.
         * When connecting to an OCI provider, the secret must contain a Kubernetes
         * Image Pull Secret, as if created by `kubectl create secret docker-registry`.
         * When connecting to an ExternalService provider, the secret must contain either
         * a 'token' key for bearer token authentication, or 'username' and 'password'
         * keys for basic authentication.
         */
        secretRef?: {
            /**
             * Name of the referent.
             */
            name: string;
        };
        /**
         * Selectors specifies label selectors used to discover ExternalArtifact objects.
         * Required when spec.type is 'ExternalArtifact' and must not be set otherwise.
         *
         * Items: ExternalArtifactSelector defines a selector for discovering ExternalArtifact objects.
         */
        selectors?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             *
             * Items: A label selector requirement is a selector that contains values, a key, and an operator that
             * relates the key and values.
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
            /**
             * Name selects a single ExternalArtifact by metadata.name.
             * This field is mutually exclusive with matchLabels and matchExpressions.
             */
            name?: string;
            /**
             * Namespace scopes ExternalArtifact discovery.
             * When empty, ExternalArtifacts are listed in the ResourceSetInputProvider namespace.
             * When set to "*", ExternalArtifacts are listed across all namespaces by
             * omitting the namespace option from List().
             * Otherwise, ExternalArtifacts are listed only in the specified namespace.
             */
            namespace?: string;
        }[];
        /**
         * ServiceAccountName specifies the name of the Kubernetes ServiceAccount
         * used for authentication with AWS, Azure or GCP services through
         * workload identity federation features. If not specified, the
         * authentication for these cloud providers will use the ServiceAccount
         * of the operator (or any other environment authentication configuration).
         */
        serviceAccountName?: string;
        /**
         * Skip defines whether we need to skip input provider response updates.
         */
        skip?: {
            /**
             * Labels specifies list of labels to skip input provider response when any of the label conditions matched.
             * When prefixed with !, input provider response will be skipped if it does not have this label.
             */
            labels?: string[];
        };
        /**
         * Type specifies the type of the input provider.
         */
        type: 'Static' | 'GitHubBranch' | 'GitHubTag' | 'GitHubPullRequest' | 'GitLabBranch' | 'GitLabTag' | 'GitLabMergeRequest' | 'GitLabEnvironment' | 'AzureDevOpsBranch' | 'AzureDevOpsTag' | 'AzureDevOpsPullRequest' | 'AWSCodeCommitBranch' | 'AWSCodeCommitTag' | 'AWSCodeCommitPullRequest' | 'GiteaBranch' | 'GiteaTag' | 'GiteaPullRequest' | 'OCIArtifactTag' | 'ACRArtifactTag' | 'ECRArtifactTag' | 'GARArtifactTag' | 'ExternalService' | 'ExternalArtifact';
        /**
         * URL specifies the HTTP/S or OCI address of the input provider API.
         * When connecting to a Git provider, the URL should point to the repository address.
         * When connecting to an OCI provider, the URL should point to the OCI repository address.
         */
        url?: string;
    };
    /**
     * ResourceSetInputProviderStatus defines the observed state of ResourceSetInputProvider.
     */
    status?: {
        /**
         * Conditions contains the readiness conditions of the object.
         *
         * Items: Condition contains details for one aspect of the current state of this API Resource.
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
         * ExportedInputs contains the list of inputs exported by the provider.
         *
         * Items: ResourceSetInput defines the key-value pairs of the ResourceSet input.
         */
        exportedInputs?: {
            [k: string]: {
                [k: string]: unknown;
            };
        }[];
        /**
         * LastExportedRevision is the digest of the
         * inputs that were last reconcile.
         */
        lastExportedRevision?: string;
        /**
         * LastHandledForceAt holds the value of the most recent
         * force request value, so a change of the annotation value
         * can be detected.
         */
        lastHandledForceAt?: string;
        /**
         * LastHandledReconcileAt holds the value of the most recent
         * reconcile request value, so a change of the annotation value
         * can be detected.
         */
        lastHandledReconcileAt?: string;
        /**
         * NextSchedule is the next schedule when the input provider will run.
         */
        nextSchedule?: {
            /**
             * Cron specifies the cron expression for the schedule.
             */
            cron: string;
            /**
             * TimeZone specifies the time zone for the cron schedule. Defaults to UTC.
             */
            timeZone?: string;
            /**
             * When is the next time the schedule will run.
             */
            when: string;
            /**
             * Window defines the time window during which the execution is allowed.
             * Defaults to 0s, meaning no window is applied.
             */
            window?: string;
        };
    };
}
//# sourceMappingURL=ResourceSetInputProvider.d.ts.map