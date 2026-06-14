import { CommandInteraction } from 'discord.js'

export default {
  name: 'ping',
  description: 'Replies with pong!',
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply('Pong!');
  }
}
