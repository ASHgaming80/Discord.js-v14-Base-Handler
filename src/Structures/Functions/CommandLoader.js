const { loadFiles } = require("../Classes/FileLoader");
const { CustomClient } = require("../Classes/CustomClient")
const Ascii = require("ascii-table"); const Table = new Ascii("COMMANDS STATUS")

/**
 * @param {CustomClient} client 
 */

async function loadCommands(client) {

    const { commands, application } = client
 
    commands.clear()
    let CommandsArray = []
    const files = await loadFiles("Commands")

    files.forEach(file => {

        const command = require(file)
        if (!command.name) return Table.addRow(`${command.name || "MISSING"}`, "⛔ Missing a name")
        if (!command.context && !command.description) return Table.addRow(command.name, "⛔ Missing a description")

        commands.set(command.name, command)
        CommandsArray.push(command)

        Table.addRow(command.name, `🟢 SUCCESSFULLY LOADED`)

    })

    application.commands.set(CommandsArray).then(cmds => {
        cmds.toJSON().forEach(cmd => client.slashData.set(cmd.name, cmd))
    })
    return console.log(Table.toString())

}

module.exports = { loadCommands }
/**
 * ======================================================
 * Developed by ASH Development | https://dsc.gg/ash_gaming
 * ======================================================
 * Mention ASH or ASH Development when you use this Handler
 * ======================================================
 * Give a wonderfull start to this repositories
 * ======================================================
 */