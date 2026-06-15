import { joinVoiceChannel } from '@discordjs/voice';
import {
  ChatInputCommandInteraction,
  GuildMember,
  VoiceChannel
} from 'discord.js'

export default {
  name: 'join',
  description: 'Joins voice chat.',
  execute: async (interaction: ChatInputCommandInteraction) => {

    const member = interaction.member as GuildMember
    const vc = member.voice.channel as VoiceChannel

    if (!vc) return interaction.reply('no voice channel');

    const connection = joinVoiceChannel({
      channelId: vc.id,
      guildId: vc.guild.id,
      adapterCreator: vc.guild.voiceAdapterCreator
    });

    interaction.reply(`Joined <#${vc.id}>`);
  }
}
