import { ModuleMetadata } from "./ModuleMetadata";

/**
 * Stores metadata for commands.
 */
export class CommandMetadata {
    /**
     * Metadata of the module this command belongs to.
     */
    module: ModuleMetadata;

    /**
     * The name of this command.
     */
    name: string;
}
