import { Client, GatewayIntentBits, Collection } from "discord.js";
import { SlashCommand } from './types'
import { readdirSync } from 'fs'
import { join } from "path";
import dotenv from 'dotenv';
import dbInit from "./dbInit";

dotenv.config();

const client = new Client({intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages
]});

client.slashCommands = new Collection<string, SlashCommand>();

const handlersDir = join(__dirname, './handlers');

const init =async () => {
  readdirSync(handlersDir).map(handler => {
    require(`${handlersDir}/${handler}`)(client);
  });
  
  await dbInit();
  await client.login(process.env.DISCORD_TOKEN);
};

init();



