import { Client, ClientOptions } from "discord.js";

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

    constructor(options?: Partial<QuarkOptions>) {
        super(options);
        this.options = { ...DEFAULT_QUARK_OPTIONS, ...options };
    }
}
