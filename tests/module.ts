import { Quark } from "../src/client/Quark";
import { Command } from "../src/decorator/Command";
import { Module } from "../src/decorator/Module";

@Module("bonk")
class Bonk {
    @Command("test")
    test(quark: Quark) {
        console.log("test ran");
    }
}
