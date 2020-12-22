import "reflect-metadata";

import { readdir, stat } from "fs/promises";
import { join } from "path";

import { Module } from "../module/Module";
import { Constructor } from "../types/classes";
import { Quark } from "./Quark";

type ModuleImport = { [K in string]: Constructor<Module> };

/**
 * Manages the loading and initialization of modules.
 */
export class ModuleManager {
    constructor(readonly quark: Quark) {}

    /**
     * Looks for decorated modules in the given path.
     */
    async fetchDecoratedModules(
        path: string,
        recursive = false
    ): Promise<Constructor<Module>[]> {
        const files = await readdir(path);
        for (const file of files) {
            // check if target is a directory. if recursive mode enabled,
            // then load modules in here too.
            if ((await stat(file)).isDirectory()) {
                if (recursive) {
                    this.fetchDecoratedModules(join(path, file), true);
                }
                continue;
            }

            // skip non-typescript files as they don't support decorators.
            if (!file.endsWith(".ts")) {
                continue;
            }

            (await import(file)) as ModuleImport;
        }
    }
}
