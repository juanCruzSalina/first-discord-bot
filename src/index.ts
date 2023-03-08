import { Client, GatewayIntentBits, Collection } from "discord.js";
import { SlashCommand } from './types'
import { readdirSync } from 'fs'
import { join } from "path";
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.slashCommands = new Collection<string, SlashCommand>();

const handlersDir = join(__dirname, './handlers');

readdirSync(handlersDir).map(handler => {
  require(`${handlersDir}/${handler}`)(client);
})

client.login(process.env.DISCORD_TOKEN);