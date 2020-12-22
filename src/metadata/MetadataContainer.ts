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
    filterModules(target: Constructor<unknown>) {
        return this.filterByTarget(this.modules, target);
    }

    /**
     * Filters given array by a given target or targets.
     */
    protected filterByTarget<T extends { target: Function }>(
        array: T[],
        target: Function
    ): T[] {
        return array.filter(v => {
            return Array.isArray(target)
                ? target.indexOf(v.target) !== -1
                : v.target === target;
        });
    }
}
