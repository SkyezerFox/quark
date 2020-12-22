import { ClientEventNames } from "../types/discord";

export interface ListenerOptions {
    destroyAfter: number;
}

/**
 * Represents a module listener.
 */
export abstract class Listener {
    constructor(
        readonly eventName: ClientEventNames,
        readonly options: ListenerOptions
    ) {}
}
