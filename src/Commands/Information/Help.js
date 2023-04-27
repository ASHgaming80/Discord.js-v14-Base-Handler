const { ChatInputCommandInteraction, ChannelSelectMenuBuilder, ActionRowBuilder, ChannelType } = require("discord.js")
const { CustomClient } = require("../../Structures/Classes/CustomClient")

module.exports = {
    name: "help",
    description: "✨ Shows the information about the Bot",

    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {CustomClient} client
     */

    async execute(interaction, client) {
        const Help = new EmbedBuilder()
            .setTitle("HELP MENU 🔰")
            .setColor(`#4013C6`)
        interaction.reply({ embeds: [Help] })
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
