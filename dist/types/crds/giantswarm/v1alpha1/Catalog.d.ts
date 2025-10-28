/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
/**
 * Catalog represents a catalog of managed apps. It stores general information for potential apps to install. It is reconciled by app-operator.
 */
export interface Catalog {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion: 'application.giantswarm.io/v1alpha1';
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind: 'Catalog';
    metadata: metav1.ObjectMeta;
    spec?: {
        /**
         * Config is the config to be applied when apps belonging to this catalog are deployed.
         */
        config?: {
            /**
             * ConfigMap references a config map containing catalog values that should be applied to apps in this catalog.
             */
            configMap?: {
                /**
                 * Name is the name of the config map containing catalog values to apply, e.g. app-catalog-values.
                 */
                name: string;
                /**
                 * Namespace is the namespace of the catalog values config map, e.g. giantswarm.
                 */
                namespace: string;
            };
            /**
             * Secret references a secret containing catalog values that should be applied to apps in this catalog.
             */
            secret?: {
                /**
                 * Name is the name of the secret containing catalog values to apply, e.g. app-catalog-secret.
                 */
                name: string;
                /**
                 * Namespace is the namespace of the secret, e.g. giantswarm.
                 */
                namespace: string;
            };
        };
        description: string;
        /**
         * LogoURL contains the links for logo image file for this catalog
         */
        logoURL: string;
        /**
         * Repositories is an array of objects defining catalog repositories.
         *
         * @minItems 1
         */
        repositories: [
            {
                /**
                 * URL is the link to where this Catalog's repository is located e.g. https://example.com/app-catalog/
                 */
                URL: string;
                /**
                 * Type indicates which repository type would be used for this Catalog. e.g. helm
                 */
                type: string;
            },
            ...{
                /**
                 * URL is the link to where this Catalog's repository is located e.g. https://example.com/app-catalog/
                 */
                URL: string;
                /**
                 * Type indicates which repository type would be used for this Catalog. e.g. helm
                 */
                type: string;
            }[]
        ];
        /**
         * Storage references an object defining catalog repository. This field is deprecated and replaced by Repositories.
         */
        storage: {
            /**
             * URL is the link to where this Catalog's repository is located e.g. https://example.com/app-catalog/
             */
            URL: string;
            /**
             * Type indicates which repository type would be used for this Catalog. e.g. helm
             */
            type: string;
        };
        /**
         * Title is the name of the catalog for this CR e.g. Catalog of Apps by Giant Swarm
         */
        title: string;
    };
    /**
     * CatalogStatus represents the current state of the catalog.
     */
    status?: {
        /**
         * HelmRepositoryList contains the list of Flux HelmRepository custom resources that have been successfully created from the Catalog object.
         */
        helmRepositoryList?: {
            /**
             * Entries of HelmRepository custom resources.
             */
            entries: {
                name: string;
                namespace: string;
            }[];
        };
    };
}
//# sourceMappingURL=Catalog.d.ts.map