import { getMetadataContainer } from "../";
import { CommandMetadata } from "../metadata/CommandMetadata";
import { Constructor } from "../types/classes";

type CommandOptions = Exclude<CommandMetadata, "name">;

/**
 * Provides a way to decorate classes as representing a client module.
 */
export function Command(
    name: string,
    options?: Partial<CommandOptions>
): MethodDecorator {
    return (target: Constructor<unknown>) => {
        getMetadataContainer().commands.push({ target, name });
    };
}
