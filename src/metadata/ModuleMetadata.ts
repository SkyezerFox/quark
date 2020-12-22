import { CommandMetadata } from "./CommandMetadata";

/**
 * Stores metadat for modules declared using the decorator syntax.
 */
export class ModuleMetadata {
    /**
     * The name of this module.
     */
    name: string;

    /**
     * An array of command metadata for commands attached to this module.
     */
    commands: CommandMetadata[] = [];
}
