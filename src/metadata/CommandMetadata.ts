import { Constructor } from "../types/util";
import { ModuleMetadata } from "./ModuleMetadata";

/**
 * Stores metadata for commands.
 */
export interface CommandMetadata {
    /**
     * Target class where the decorator is used.
     */
    target: Constructor<unknown>;

    /**
     * Metadata of the module this command belongs to.
     */
    moduleMetadata?: ModuleMetadata;

    /**
     * The name of this command.
     */
    name: string;
}
