import { getMetadataContainer } from "../";
import { CommandMetadata } from "../metadata/CommandMetadata";

type CommandOptions = Exclude<CommandMetadata, "name">;

/**
 * Provides a way to decorate classes as representing a client module.
 */
export function Command(
    name: string,
    options?: Partial<CommandOptions>
): MethodDecorator {
    return (target, key) => {
        getMetadataContainer().commands.push({ module, name });
    };
}
