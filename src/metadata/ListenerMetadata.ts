import { ModuleMetadata } from "./ModuleMetadata";

/**
 * Stores metadata for module listeners.
 */
export class ListenerMetadata {
    /**
     * Stores metadata for the module this listener belongs to.
     */
    module: ModuleMetadata;

    /**
     * The event name this listener is listening for.
     */
    eventName: string;
}
