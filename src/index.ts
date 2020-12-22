import { MetadataContainer } from "./metadata/MetadataContainer";

/**
 * Returns the metadata container.
 */
export function getMetadataContainer(): MetadataContainer {
    if (!global.quarkMetadataContainer) {
        global.quarkMetadataContainer = new MetadataContainer();
    }

    return global.quarkMetadataContainer;
}
