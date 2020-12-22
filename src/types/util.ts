/**
 * Returns type T with all fields required.
 */
export type Required<T> = T &
    {
        [P in keyof T]: T[P];
    };
