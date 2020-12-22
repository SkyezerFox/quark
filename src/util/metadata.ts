/**
 * Get all quark related metadata as a key.
 * @param target
 */
export const getAllMetadata = (target: unknown): Record<string, unknown> => {
    const quarkKeys = Reflect.getMetadataKeys(target).filter(k =>
        k.startsWith("quark:")
    );

    const out: Record<string, unknown> = {};
    quarkKeys.forEach(key => (out[key] = Reflect.getMetadata(target, key)));

    return out;
};

// /**
//  * Extract all metadata as a template object.
//  * @param template
//  * @param target
//  */
// export const getMetadataFromTemplate = (
//     template: Record<string, any>,
//     key: string,
//     target: unknown
// ) => {
//     Reflect.getMetadata();
// };
