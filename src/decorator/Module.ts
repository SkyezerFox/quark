import { getMetadataContainer } from "../";
import { Module as ModuleClass } from "../module/Module";

class DecoratedModule extends ModuleClass {}

export function Module(): ClassDecorator;

/**
 * Provides a way to decorate classes as representing a client module.
 */
export function Module(name?: string): ClassDecorator {
    return target => {
        getMetadataContainer().modules.push({
            target,
            name: name || target.name,
        });
    };
}
