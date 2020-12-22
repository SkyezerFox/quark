import { getMetadataContainer } from "../";
import { CommandMetadata } from "../metadata/CommandMetadata";
import { ClientEventNames } from "../types/discord";

/**
 * Provides a way to decorate classes as representing a client module.
 */
export function Listener(eventName: ClientEventNames): MethodDecorator {
    return (target, key) => {
        getMetadataContainer().listeners.push({ name });
    };
}
