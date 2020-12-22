import { MetadataContainer } from "./metadata/MetadataContainer";

declare global {
    namespace NodeJS {
        interface Global {
            quarkMetadataContainer: MetadataContainer;
        }
    }
}

export {};
