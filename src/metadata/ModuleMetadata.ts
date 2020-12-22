/**
 * Stores metadat for modules declared using the decorator syntax.
 */
export interface ModuleMetadata {
    /**
     * Target class where the decorator is used.
     */
    // @eslint-disable-next-line
    target: Function;

    /**
     * The name of this module.
     */
    name: string;
}
