/**
 * Represents a generic constructor type.
 */
export type Constructor<T> = new (...args: unknown[]) => T;
