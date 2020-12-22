export interface ListenerOptions {
    destroyAfter: number;
}

/**
 * Represents a module listener.
 */
export abstract class Listener {
    constructor(
        readonly eventName: string,
        readonly options: ListenerOptions
    ) {}
}

export type ListenerConstructor = (
    eventName: string,
    options: ListenerOptions
) => Listener;
