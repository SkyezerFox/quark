import { ModuleMetadata } from "./ModuleMetadata";

/**
 * Stores metadata for module listeners.
 */
export interface ListenerMetadata {
    /**
     * Target class where the decorator is used.
     */
    target: Function | string;

    /**
     * Metadata of the module this command belongs to.
     */
    moduleMetadata: ModuleMetadata;

    /**
     * The name of the event this listener is listening for.
     */
    eventName: string;
}
