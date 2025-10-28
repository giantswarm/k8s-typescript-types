/**
 * This file was automatically generated, PLEASE DO NOT MODIFY IT BY HAND.
 */
import * as metav1 from '../../../core/meta/v1';
export interface GitHubRepo {
    spec?: {
        /**
         * Backstage catalog entity configuration
         */
        backstageCatalogEntity: {
            /**
             * A reference of the owning Backstage entity.
             */
            owner: string;
            /**
             * A lifecycle of the Backstage entity.
             */
            lifecycle: string;
        };
        /**
         * New repository configuration.
         */
        repository: {
            /**
             * A name of the owning GitHub organization or user.
             */
            owner: string;
            /**
             * A name for the new repository.
             */
            name: string;
            /**
             * A description of the new repository.
             */
            description: string;
            /**
             * A full name (`user/repository`) of a GitHub template repository to use.
             */
            templateSource: string;
            /**
             * Visibility of the created repo.
             */
            visibility: 'public' | 'internal' | 'private';
        };
        /**
         * The name and namespace of a Secret that has a key named "gh_token" with value if a GitHub authentication token used to create a new repository.
         */
        githubTokenSecretRef?: {
            /**
             * Object name.
             */
            name: string;
            /**
             * Object's namespace.
             */
            namespace?: string;
        };
        /**
         * The name and namespace of a ConfigMap that has keys named "registry_domain", "registry_username" and "registry_cicd_secret_ref" that configure access to  the image registry in the CICD GitHib Action.
         */
        registryInfoConfigMapRef: {
            /**
             * Object name.
             */
            name: string;
            /**
             * Object's namespace.
             */
            namespace?: string;
        };
    };
    apiVersion: 'promise.platform.giantswarm.io/v1beta1';
    metadata: metav1.ObjectMeta;
    kind: 'GitHubRepo';
}
//# sourceMappingURL=GitHubRepo.d.ts.map