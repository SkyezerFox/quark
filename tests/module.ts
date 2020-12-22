import { Command } from "../src/decorator/Command";
import { Module } from "../src/decorator/Module";
import { Context } from "../src/module/Context";

@Module("bonk")
class Bonk {
    @Command("test")
    async test(ctx: Context) {
        ctx.reply("uwu");
    }
}
