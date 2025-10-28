/**
 * ObjectMeta is metadata that all persisted resources must have,
 * which includes all objects users must create.
 */
export interface ObjectMeta {
  /**
   * Name must be unique within a namespace. Is required when creating resources,
   * although some resources may allow a client to request the generation of an
   * appropriate name automatically. Name is primarily intended for creation
   * idempotence and configuration definition.
   */
  name?: string;

  /**
   * GenerateName is an optional prefix, used by the server, to generate a unique
   * name ONLY IF the Name field has not been provided.
   */
  generateName?: string;

  /**
   * Namespace defines the space within which each name must be unique. An empty
   * namespace is equivalent to the "default" namespace, but "default" is the
   * canonical representation.
   */
  namespace?: string;

  /**
   * UID is the unique in time and space value for this object.
   */
  uid?: string;

  /**
   * An opaque value that represents the internal version of this object that can
   * be used by clients to determine when objects have changed.
   */
  resourceVersion?: string;

  /**
   * A sequence number representing a specific generation of the desired state.
   */
  generation?: number;

  /**
   * CreationTimestamp is a timestamp representing the server time when this object
   * was created. It is represented in RFC3339 form and is in UTC.
   */
  creationTimestamp?: string;

  /**
   * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted.
   */
  deletionTimestamp?: string;

  /**
   * Number of seconds allowed for this object to gracefully terminate before it
   * will be removed from the system. Only set when deletionTimestamp is also set.
   */
  deletionGracePeriodSeconds?: number;

  /**
   * Map of string keys and values that can be used to organize and categorize objects.
   */
  labels?: { [key: string]: string };

  /**
   * Annotations is an unstructured key value map stored with a resource that may be
   * set by external tools to store and retrieve arbitrary metadata.
   */
  annotations?: { [key: string]: string };

  /**
   * List of objects depended by this object. If ALL objects in the list have been
   * deleted, this object will be garbage collected.
   */
  ownerReferences?: OwnerReference[];

  /**
   * Must be empty before the object is deleted from the registry. Each entry is an
   * identifier for the responsible component that will remove the entry from the list.
   */
  finalizers?: string[];

  /**
   * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow.
   */
  managedFields?: ManagedFieldsEntry[];
}

/**
 * OwnerReference contains enough information to let you identify an owning object.
 */
export interface OwnerReference {
  /**
   * API version of the referent.
   */
  apiVersion: string;

  /**
   * Kind of the referent.
   */
  kind: string;

  /**
   * Name of the referent.
   */
  name: string;

  /**
   * UID of the referent.
   */
  uid: string;

  /**
   * If true, this reference points to the managing controller.
   */
  controller?: boolean;

  /**
   * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner
   * cannot be deleted from the key-value store until this reference is removed.
   */
  blockOwnerDeletion?: boolean;
}

/**
 * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource
 * that the fieldset applies to.
 */
export interface ManagedFieldsEntry {
  /**
   * Manager is an identifier of the workflow managing these fields.
   */
  manager?: string;

  /**
   * Operation is the type of operation which lead to this ManagedFieldsEntry being created.
   */
  operation?: string;

  /**
   * APIVersion defines the version of this resource that this field set applies to.
   */
  apiVersion?: string;

  /**
   * Time is timestamp of when these fields were set.
   */
  time?: string;

  /**
   * FieldsType is the discriminator for the different fields format and version.
   */
  fieldsType?: string;

  /**
   * FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
   */
  fieldsV1?: any;

  /**
   * Subresource is the name of the subresource used to update that object, or empty
   * string if the object was updated through the main resource.
   */
  subresource?: string;
}

