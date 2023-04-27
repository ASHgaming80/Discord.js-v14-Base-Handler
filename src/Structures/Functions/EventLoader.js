const { loadFiles } = require("../Classes/FileLoader");
const { CustomClient } = require("../Classes/CustomClient")
const Ascii = require("ascii-table"); const Table = new Ascii("EVENTS STATUS")


/**
 * @param {CustomClient} client 
 */

async function loadEvents(client) {

    const files = await loadFiles("Events")

    files.forEach((file) => {

        const event = require(file)
        if (!event.name) {
            Table.addRow(`${event.name || "MISSING"}`, "⛔ Event Name is either invalid or missing")
            return
        }

        if (event.once) client.once(event.name, (...args) => event.execute(...args, client))
        else client.on(event.name, (...args) => event.execute(...args, client))

        Table.addRow(event.name, `🟢 SUCCESSFULLY LOADED`)

    })

    return console.log(Table.toString())
}

module.exports = { loadEvents }
/**
 * ======================================================
 * Developed by ASH Development | https://dsc.gg/ash_gaming
 * ======================================================
 * Mention ASH or ASH Development when you use this Handler
 * ======================================================
 * Give a wonderfull start to this repositories
 * ======================================================
 */