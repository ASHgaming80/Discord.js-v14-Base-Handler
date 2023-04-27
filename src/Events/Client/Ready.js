const { Events, ActivityType } = require("discord.js"); const ms = require("ms")
const { CustomClient } = require("../../../src/Structures/Classes/CustomClient")
const { loadCommands } = require("../../../src/Structures/Functions/CommandLoader")
const { colors } = require('colors')

module.exports = {
    name: Events.ClientReady,

    /**
     * @param {CustomClient} client 
     * @loadCommands load all commands 
     * @asyncLockdown check lockdown end time and delete data
     * @asynclang Multiguild language System 
     */

    async execute(client) {
        const { user } = client; {
            console.log("----------------------------------------".white.bold);
            console.log(`${user.tag} BOT ONLINE`.rainbow.bold);
            console.log("----------------------------------------".white.bold);
        }
        loadCommands(client);
        setInterval(() => { user.setActivity({ name: `Bot Developed by ASH#0765`, type: ActivityType.Playing }) }, ms("5s"))

    }
}
/**
 * ======================================================
 * Developed by ASH Development | https://dsc.gg/ash_gaming
 * ======================================================
 * Mention ASH or ASH Development when you use this Handler
 * ======================================================
 * Give a wonderfull start to this repositories
 * ======================================================
 */