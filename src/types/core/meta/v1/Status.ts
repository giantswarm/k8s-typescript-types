/**
 * Status is a return value for calls that don't return other objects.
 */
export interface Status {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   */
  apiVersion?: 'v1';

  /**
   * Kind is a string value representing the REST resource this object represents.
   */
  kind?: 'Status';

  /**
   * Standard list metadata.
   */
  metadata?: StatusMetadata;

  /**
   * Status of the operation. One of: "Success" or "Failure".
   */
  status?: string;

  /**
   * A human-readable description of the status of this operation.
   */
  message?: string;

  /**
   * A machine-readable description of why this operation is in the "Failure" status.
   */
  reason?: string;

  /**
   * Extended data associated with the reason.
   */
  details?: StatusDetails;

  /**
   * Suggested HTTP return code for this status, 0 if not set.
   */
  code?: number;
}

/**
 * StatusMetadata is metadata about the Status object.
 */
export interface StatusMetadata {
  /**
   * Continue may be set if the user set a limit on the number of items returned.
   */
  continue?: string;

  /**
   * remainingItemCount is the number of subsequent items in the list which are not
   * included in this list response.
   */
  remainingItemCount?: number;

  /**
   * String that identifies the server's internal version of this object.
   */
  resourceVersion?: string;
}

/**
 * StatusDetails is a set of additional properties that MAY be set by the server
 * to provide additional information about a response.
 */
export interface StatusDetails {
  /**
   * The name attribute of the resource associated with the status StatusReason.
   */
  name?: string;

  /**
   * The group attribute of the resource associated with the status StatusReason.
   */
  group?: string;

  /**
   * The kind attribute of the resource associated with the status StatusReason.
   */
  kind?: string;

  /**
   * UID of the resource.
   */
  uid?: string;

  /**
   * The Causes array includes more details associated with the StatusReason failure.
   */
  causes?: StatusCause[];

  /**
   * If specified, the time in seconds before the operation should be retried.
   */
  retryAfterSeconds?: number;
}

/**
 * StatusCause provides more information about an api.Status failure, including
 * cases when multiple errors are encountered.
 */
export interface StatusCause {
  /**
   * A machine-readable description of the cause of the error.
   */
  reason?: string;

  /**
   * A human-readable description of the cause of the error.
   */
  message?: string;

  /**
   * The field of the resource that has caused this error, as named by its JSON
   * serialization.
   */
  field?: string;
}

