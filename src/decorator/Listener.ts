import { getMetadataContainer } from "../";
import { Constructor } from "../types/classes";
import { ClientEventNames, ClientEvents } from "../types/discord";

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
