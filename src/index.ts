import 'dotenv/config';
import BotClient from './structures/BotClient.js'

BotClient.start(process.env.TOKEN);
