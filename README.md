# quark

Lightweight, decorator-powered Discord bot framework

```ts
// modules/utilities.ts
import { Module, Command, Context } from "quark";

@Module()
export class Utilities {
    @Command()
    async ping(ctx: Context) {
        return ctx.reply("Pong!");
    }
}

// index.ts
import { Quark } from "quark";

const quark = new Quark();
quark.loadModules(resolve(__filename, "modules"));

quark.login("your token here");
```
