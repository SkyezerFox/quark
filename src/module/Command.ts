export interface CommandOptions {
    permissionLevel: number;
}

export abstract class Command {
    constructor(readonly name: string, readonly options: CommandOptions) {}
}
