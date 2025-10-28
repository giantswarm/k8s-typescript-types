import * as metav1 from '../meta/v1';

/**
 * Namespace provides a scope for Names.
 * Use of multiple namespaces is optional.
 */
export interface Namespace {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: 'v1';

  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: 'Namespace';

  /**
   * Standard object's metadata.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata: metav1.ObjectMeta;

  /**
   * Spec defines the behavior of the Namespace.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  spec?: NamespaceSpec;

  /**
   * Status describes the current status of a Namespace.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  status?: NamespaceStatus;
}

/**
 * NamespaceSpec describes the attributes on a Namespace.
 */
export interface NamespaceSpec {
  /**
   * Finalizers is an opaque list of values that must be empty to permanently remove object from storage.
   * More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
   */
  finalizers?: NamespaceFinalizerName[];
}

/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export interface NamespaceStatus {
  /**
   * Phase is the current lifecycle phase of the namespace.
   * More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
   */
  phase?: NamespacePhase;

  /**
   * Represents the latest available observations of a namespace's current state.
   */
  conditions?: NamespaceCondition[];
}

/**
 * NamespacePhase defines the phase in which the namespace is.
 */
export type NamespacePhase = 'Active' | 'Terminating';

/**
 * NamespaceCondition contains details about state of namespace.
 */
export interface NamespaceCondition {
  /**
   * Type of namespace controller condition.
   */
  type: NamespaceConditionType;

  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: ConditionStatus;

  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.
   */
  lastTransitionTime?: string;

  /**
   * Reason is a brief description of why the condition is in this state.
   */
  reason?: string;

  /**
   * Message is a human-readable description of the details about the last transition.
   */
  message?: string;
}

/**
 * NamespaceConditionType defines constants reporting on status during namespace lifetime and deletion progress
 */
export type NamespaceConditionType =
  | 'NamespaceDeletionDiscoveryFailure'
  | 'NamespaceDeletionContentFailure'
  | 'NamespaceDeletionGVParsingFailure'
  | 'NamespaceContentRemaining'
  | 'NamespaceFinalizersRemaining';

/**
 * ConditionStatus defines conditions of resources
 */
export type ConditionStatus = 'True' | 'False' | 'Unknown';

/**
 * NamespaceFinalizerName is the name identifying a finalizer during namespace lifecycle.
 */
export type NamespaceFinalizerName = 'kubernetes';
