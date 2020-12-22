import { getMetadataContainer } from "../";
import { Constructor } from "../types/classes";

class DecoratedModule {}

export function Module(): ClassDecorator;
export function Module(name: string): ClassDecorator;

/**
 * Provides a way to decorate classes as representing a client module.
 */
export function Module(name?: string): ClassDecorator {
    return target => {
        getMetadataContainer().modules.push({
            target: target as Constructor<unknown>,
            name: name || target.name,
        });
    };
}
