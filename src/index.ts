import { REST, Routes, Client, Events, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!'
  }
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

  console.log('Successfully reloaded apllication (/) commands')
} catch (e) {
  console.error(e)
}

client.on(Events.ClientReady, rc => {
  console.log(`Logged in as ${rc.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!')
  }
});

client.login(process.env.TOKEN)
