/**
 * Provides a way to decorate classes as representing a client module.
 */
export function Module(): ClassDecorator {
    return () => {
        console.log("boop");
    };
}
