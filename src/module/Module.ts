import { Quark } from "../client/Quark";
import { Constructor } from "../types/util";
import { Command } from "./Command";
import { Listener } from "./Listener";

export interface ModuleOptions {
    loadBefore: string[];
    loadAfter: string[];
}

/**
 * Represents a quark module.
 */
export abstract class Module {
    readonly commands: Command[] = [];
    readonly listeners: Listener[] = [];

    constructor(
        readonly quark: Quark,
        readonly name: string,
        readonly options: ModuleOptions
    ) {}

    /**
     * Add a command to this module.
     * @param command
     */
    addCommand(command: Constructor<Command>) {}

    /**
     * Add a listener to this module.
     * @param listener
     */
    addListener(listener: Constructor<Listener>) {}
}
