import { Client, ClientOptions } from "discord.js";

import { Module } from "../module/Module";
import { createLogger } from "../util/logging";
import { ModuleManager } from "./ModuleManager";

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
 * Generic type for the quark store. Allows storing of key/value pairs between modules.
 */
export type QuarkStore = { [K in string]: unknown };

/**
 * The base quark client.
 */
export class Quark<
    S extends QuarkStore = Record<string, never>
> extends Client {
    options: QuarkOptions;

    /**
     * The quark store.
     */
    readonly store: S = {} as S;

    /**
     * An array of modules on this client.
     */
    readonly modules: Module[] = [];

    /**
     * The quark module manager.
     */
    readonly moduleManager = new ModuleManager(this);

    /**
     * The quark logger.
     */
    readonly logger = createLogger("quark");

    constructor(options?: Partial<QuarkOptions>) {
        super(options);
        this.options = { ...DEFAULT_QUARK_OPTIONS, ...options };
    }

    /**
     * Add a module to this quark instance.
     * @param modules
     */
    public addModule(...modules: Module[]): this {
        return this;
    }

    /**
     * Initialize the bot and connect to Discord.
     * @param token
     */
    async login(token: string): Promise<string> {
        return token;
    }
}
