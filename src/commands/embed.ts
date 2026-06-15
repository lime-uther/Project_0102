import { CommandInteraction, EmbedBuilder } from 'discord.js'

export default {
  name: 'embed',
  description: 'Generates an Embed within the channel',
  execute: async (interaction: CommandInteraction) => {
    const embed = new EmbedBuilder()
      .setColor("Aqua")
      .setTitle("Test title")
      .setDescription('Test Descriptino here lmao uhhhhhhh')


    await interaction.reply({ embeds: [embed] });
  }
}
