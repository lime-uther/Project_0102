import { REST, Routes } from 'discord.js';
import bot from './structures/BotClient.js';
import 'dotenv/config';

const commands: { name: string, description: "string"}[] = [];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

bot.handleFiles('./src/commands', (file) => {
  commands.push({ name: file.name, description: file.description })
})

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
