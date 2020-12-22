/**
 * Returns type T with all fields required.
 */
export type Required<T> = T &
    {
        [P in keyof T]: T[P];
    };

/**
 * Returns T as an optional type.
 */
export type Optional<T> = T | undefined;

/**
 * Represents a modifier function that takes a value and applies a modification to it.
 */
export type Modifier<T> = (value: T) => T;

/**
 * Represents a generic constructor type.
 */
export type Constructor<T> = new (...args: unknown[]) => T;
