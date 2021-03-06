import { getMetadataContainer } from "../";
import { ClientEventNames, ClientEvents } from "../types/discord";
import { Constructor } from "../types/util";

/**
 * Tpe for the generic arguments of a module listener.
 */
type DecoratedListener = (...args: ClientEvents[keyof ClientEvents]) => void;

/**
 * Provides a way to decorate classes as representing a client module.
 */
export function Listener(eventName: ClientEventNames): MethodDecorator {
    return (target: Constructor<unknown>) => {
        getMetadataContainer().listeners.push({ target, eventName });
    };
}
