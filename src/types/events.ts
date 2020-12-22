import { EventEmitter } from "events";

/**
 * A generic event listener type.
 */
export type EventListener<T extends unknown[]> = (...args: T) => void;

/**
 * Utility type for extracting possible event types from classes extending EventEmitter.
 */
export type EventNames<T extends EventEmitter> = Parameters<T["on"]>[0];
