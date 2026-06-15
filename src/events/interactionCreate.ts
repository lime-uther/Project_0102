import { BaseInteraction, Events } from 'discord.js'
import bot from '../structures/BotClient.js'

export default {
  name: Events.InteractionCreate,
  execute: async (interaction: BaseInteraction) => {
    if (!interaction.isChatInputCommand()) return;

    if (bot.commands.has(interaction.commandName)) {
      bot.commands.get(interaction.commandName).execute(interaction);
    } else {
      interaction.reply(`${interaction.commandName} currently does nothing!`)
    }
  }
}

