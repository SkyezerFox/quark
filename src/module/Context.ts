import { GuildMember, Message, User } from "discord.js";

import { Quark } from "../client/Quark";
import { Optional } from "../types/util";

/**
 * Represents the context in which a command was executed.
 */
export class Context {
    constructor(readonly quark: Quark, readonly message: Message) {}

    /**
     * The author who sent this message.
     */
    get author(): User {
        return this.message.author;
    }

    /**
     * The guild member who sent this message.
     */
    get member(): Optional<GuildMember> {
        return this.message.member;
    }

    /**
     * Reply to this message.
     */
    reply = this.message.reply;
}
