const { Client, Collection } = require("discord.js")
const { set, connect } = require("mongoose"); require("dotenv").config();
const configuration = require("../Validation/Config.json")
const customemojis = require("../Validation/Emojis.json")

class CustomClient extends Client {

    config = configuration; emoji = customemojis
    commands = new Collection(); slashData = new Collection()

    start() {
        const TOKEN = process.env.TOKEN
        const DATABASE = process.env.DATABASE_TOKEN

        this.login(TOKEN).then(() => {
            if (!DATABASE) return
            set('strictQuery', true); connect(DATABASE)
                .then(() => {
                    console.log("----------------------------------------".white.bold);
                    console.log("MONGODB CONNECTED!!".rainbow.bold);
                    console.log("----------------------------------------".white.bold);
                })
                .catch(err => console.log(err))
        })
    }
}

module.exports = { CustomClient }
/**
 * ======================================================
 * Developed by ASH Development | https://dsc.gg/ash_gaming
 * ======================================================
 * Mention ASH or ASH Development when you use this Handler
 * ======================================================
 * Give a wonderfull start to this repositories
 * ======================================================
 */