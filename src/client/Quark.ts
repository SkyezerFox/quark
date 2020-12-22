import { Client, ClientOptions } from "discord.js";

import { Module } from "../module/Module";

/**
 * Client options this instance will use.
 */
interface QuarkOptions extends ClientOptions {
    token: string;
}

/**
 * Default options assigned during instance construction.
 */
const DEFAULT_QUARK_OPTIONS: QuarkOptions = {
    token: "",
};

/**
 * The base quark client.
 */
export class Quark extends Client {
    options: QuarkOptions;

    /**
     * An array of modules on this client.
     */
    readonly modules: Module[] = [];

    constructor(options?: Partial<QuarkOptions>) {
        super(options);
        this.options = { ...DEFAULT_QUARK_OPTIONS, ...options };
    }

    /**
     * Add a module to this quark instance.
     * @param modules
     */
    public addModule(...modules: Module[]) {
        return this;
    }

    /**
     * Initialize the bot and connect to Discord.
     * @param token
     */
    async login(token: string) {
        return token;
    }
}
