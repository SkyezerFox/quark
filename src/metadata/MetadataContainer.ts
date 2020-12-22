import { Command } from "../module/Command";
import { Constructor } from "../types/classes";
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

    /**
     * Filter loaded modules with the given target.
     * @param target
     */
    filterModules(target: Constructor<unknown>): ModuleMetadata[] {
        return this.filterByTarget(this.modules, target);
    }

    /**
     * Filter loaded commands by the given target.
     * @param target
     */
    filterCommands(target: Constructor<unknown>): CommandMetadata[] {
        return this.filterByTarget(this.commands, target);
    }

    /**
     * Filter loaded listeners by the given target.
     * @param target
     */
    filterListeners(target: Constructor<unknown>) {}

    /**
     * Filters given array by a given target or targets.
     */
    protected filterByTarget<T extends { target: Constructor<unknown> }>(
        array: T[],
        target: Constructor<unknown>
    ): T[] {
        return array.filter(v => {
            return Array.isArray(target)
                ? target.indexOf(v.target) !== -1
                : v.target === target;
        });
    }
}
