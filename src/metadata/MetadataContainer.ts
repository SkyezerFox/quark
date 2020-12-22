import { CommandMetadata } from "./CommandMetadata";
import { ListenerMetadata } from "./ListenerMetadata";
import { ModuleMetadata } from "./ModuleMetadata";

/**
 * Stores global bot metadata.
 */
export class MetadataContainer {
    readonly modules: ModuleMetadata[] = [];
    readonly commands: CommandMetadata[] = [];
    readonly listeners: ListenerMetadata[] = [];
}
