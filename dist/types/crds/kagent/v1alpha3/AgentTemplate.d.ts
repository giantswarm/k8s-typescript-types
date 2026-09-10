/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * AgentTemplate defines portable agent behavior.
 */
export interface AgentTemplate {
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
    kind: 'AgentTemplate';
    metadata: metav1.ObjectMeta;
    /**
     * AgentTemplateSpec defines portable agent behavior.
     */
    spec?: {
        description?: string;
        /**
         * ModelConfig is required by managed harnesses and optional for BYO harnesses.
         */
        modelConfig?: {
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name?: string;
        };
        /**
         * @maxItems 20
         */
        plugins?: [] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ] | [
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            },
            {
                /**
                 * An empty selection enables nothing.
                 *
                 * @maxItems 50
                 */
                skills?: string[];
                /**
                 * ArtifactSource selects exactly one immutable artifact.
                 */
                source: {
                    /**
                     * BucketArtifact selects the supported object-store provider.
                     */
                    bucket?: {
                        /**
                         * S3Object identifies one immutable S3 object version.
                         */
                        s3: {
                            bucket: string;
                            /**
                             * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                             */
                            endpoint: string;
                            key: string;
                            /**
                             * Region is used for request signing when required by the service.
                             */
                            region?: string;
                            versionId: string;
                        };
                    };
                    /**
                     * GitArtifact identifies immutable content at a full Git commit ID.
                     */
                    git?: {
                        commit: string;
                        url: string;
                    };
                    /**
                     * OCI is a digest-pinned image reference.
                     */
                    oci?: string;
                    /**
                     * Path selects a directory within the immutable artifact.
                     */
                    path?: string;
                };
            }
        ];
        /**
         * AgentTemplatePromptTemplateSpec enables Go template rendering and ConfigMap includes.
         */
        promptTemplate?: {
            /**
             * DataSources are same-namespace ConfigMaps available to include("source/key").
             *
             * @maxItems 20
             */
            dataSources?: [] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ] | [
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                },
                {
                    /**
                     * Alias is the name used by include. The ConfigMap name is used when omitted.
                     */
                    alias?: string;
                    name: string;
                }
            ];
        };
        /**
         * @maxItems 50
         */
        skills?: {
            name: string;
            /**
             * ArtifactSource selects exactly one immutable artifact.
             */
            source: {
                /**
                 * BucketArtifact selects the supported object-store provider.
                 */
                bucket?: {
                    /**
                     * S3Object identifies one immutable S3 object version.
                     */
                    s3: {
                        bucket: string;
                        /**
                         * Endpoint is the HTTP(S) endpoint of an AWS or S3-compatible service.
                         */
                        endpoint: string;
                        key: string;
                        /**
                         * Region is used for request signing when required by the service.
                         */
                        region?: string;
                        versionId: string;
                    };
                };
                /**
                 * GitArtifact identifies immutable content at a full Git commit ID.
                 */
                git?: {
                    commit: string;
                    url: string;
                };
                /**
                 * OCI is a digest-pinned image reference.
                 */
                oci?: string;
                /**
                 * Path selects a directory within the immutable artifact.
                 */
                path?: string;
            };
        }[];
        systemPrompt?: string;
        /**
         * SystemPromptFrom references prompt text in a same-namespace ConfigMap.
         */
        systemPromptFrom?: {
            key: string;
            name: string;
        };
        /**
         * @maxItems 50
         */
        tools?: {
            /**
             * AgentToolBinding exposes another same-namespace AgentTemplate as a logical tool.
             */
            agent?: {
                /**
                 * Description tells the parent when to route work to this binding.
                 */
                description: string;
                /**
                 * AgentToolIsolation controls whether a referenced template shares its parent's runtime boundary.
                 */
                isolation?: 'Shared' | 'Dedicated';
                name: string;
                /**
                 * LocalObjectReference contains enough information to let you locate the
                 * referenced object inside the same namespace.
                 */
                templateRef: {
                    /**
                     * Name of the referent.
                     * This field is effectively required, but due to backwards compatibility is
                     * allowed to be empty. Instances of this type with an empty value here are
                     * almost certainly wrong.
                     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
                     */
                    name?: string;
                };
            };
            /**
             * MCPToolBinding binds tools from a same-namespace MCP server.
             */
            mcp?: {
                /**
                 * RequireApproval pauses before each invocation of a tool exposed by this
                 * binding. It applies to the selected tools, or to every server tool when
                 * Tools is omitted or empty.
                 */
                requireApproval?: boolean;
                /**
                 * TypedLocalObjectReference contains enough information to let you locate the
                 * typed referenced object inside the same namespace.
                 */
                server: {
                    /**
                     * APIGroup is the group for the resource being referenced.
                     * If APIGroup is not specified, the specified Kind must be in the core API group.
                     * For any other third-party types, APIGroup is required.
                     */
                    apiGroup?: string;
                    /**
                     * Kind is the type of resource being referenced
                     */
                    kind: string;
                    /**
                     * Name is the name of resource being referenced
                     */
                    name: string;
                };
                /**
                 * Tools optionally limits which server tools are exposed. An omitted or empty
                 * list exposes every tool. Harnesses that cannot enforce a partial selection
                 * may expose the whole server and report a warning.
                 *
                 * @maxItems 50
                 */
                tools?: string[];
            };
        }[];
    };
    /**
     * AgentTemplateStatus is the controller-observed state for each admitting Harness.
     */
    status?: {
        /**
         * Harnesses has at most one entry for each admitting Harness.
         */
        harnesses?: {
            /**
             * @maxItems 4
             */
            conditions?: [] | [
                {
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
                }
            ] | [
                {
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
                },
                {
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
                }
            ] | [
                {
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
                },
                {
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
                },
                {
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
                }
            ] | [
                {
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
                },
                {
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
                },
                {
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
                },
                {
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
                }
            ];
            desiredRevision: string;
            /**
             * Harness names a same-namespace Harness whose admission selector matches
             * this AgentTemplate.
             */
            harness: string;
            latestSuccessfulRevision?: string;
            /**
             * Warnings reports non-blocking compatibility decisions made while compiling
             * this AgentTemplate for the Harness.
             *
             * @maxItems 100
             */
            warnings?: string[];
        }[];
        observedGeneration?: number;
    };
}
//# sourceMappingURL=AgentTemplate.d.ts.map