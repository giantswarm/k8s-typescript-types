/**
 * ListMeta describes metadata that synthetic resources must have, including lists and
 * various status objects.
 */
export interface ListMeta {
    /**
     * Continue may be set if the user set a limit on the number of items returned, and
     * indicates that the server has more data available.
     */
    continue?: string;
    /**
     * remainingItemCount is the number of subsequent items in the list which are not
     * included in this list response.
     */
    remainingItemCount?: number;
    /**
     * String that identifies the server's internal version of this object that can be
     * used by clients to determine when objects have changed.
     */
    resourceVersion?: string;
    /**
     * selfLink is a URL representing this object. DEPRECATED: selfLink is a legacy
     * read-only field that is no longer populated by the system.
     */
    selfLink?: string;
}
//# sourceMappingURL=ListMeta.d.ts.map