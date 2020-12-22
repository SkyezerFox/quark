import { getMetadataContainer } from "../";

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
