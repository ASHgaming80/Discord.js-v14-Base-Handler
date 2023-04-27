require('./Functions/Console')
const { GatewayIntentBits, Partials } = require("discord.js");
const { loadEvents } = require("./Functions/EventLoader");
const { protectError } = require("../Systems/Error");
const { CustomClient } = require("./Classes/CustomClient");

const client = new CustomClient({

    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],

})

loadEvents(client); protectError(client); client.start()

/**
 * ======================================================
 * Developed by ASH Development | https://dsc.gg/ash_gaming
 * ======================================================
 * Mention ASH or ASH Development when you use this Handler
 * ======================================================
 * Give a wonderfull start to this repositories
 * ======================================================
 */