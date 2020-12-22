import { Module } from "./Module";

/**
 * Represents a command handler.
 */

/**
 * Provides a way to decorate classes as representing a client module.
 */
export function Command(): MethodDecorator {
    return (object, key, descriptor) => {};
}

@Module()
class A {
    @Command()
    test() {
        console.log("boop");
    }
}
