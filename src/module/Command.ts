export interface CommandOptions {
    permissionLevel: number;
}

export abstract class Command {
    constructor(readonly name: string, readonly options: CommandOptions) {}
}

/**
 * Static type for the command constructor.
 */
export type CommandConstructor = (
    name: string,
    options: CommandOptions
) => Command;
