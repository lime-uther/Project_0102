import 'dotenv/config';
import express, { Request, Response } from 'express';
import BotClient from './structures/BotClient.js'

const app = express();
const PORT = 3000;

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK');
})

app.listen(PORT, () => {
  console.log(`Health check server listening on port ${PORT}`);
});

BotClient.start(process.env.TOKEN);
