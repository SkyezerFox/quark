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
