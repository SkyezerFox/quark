import { Constructor } from "../types/classes";

/**
 * Stores metadat for modules declared using the decorator syntax.
 */
export interface ModuleMetadata {
    /**
     * Target class where the decorator is used.
     */
    // @eslint-disable-next-line
    target: Constructor<unknown>;

    /**
     * The name of this module.
     */
    name: string;
}
