import { readdirSync } from 'fs';
import { join } from 'path';
import { Client, REST, Routes } from 'discord.js';
import { SlashCommand } from '../types';
import { FILE_EXTENSION } from '../lib/constants';

module.exports = async (client: Client) => {
  const slashCommandDir = join(__dirname, '../commands');
  const body: any = [];

  readdirSync(slashCommandDir).map(file => {
    if (!file.endsWith(FILE_EXTENSION)) return;
    const command: SlashCommand = require(`${slashCommandDir}/${file}`).command;

    client.slashCommands.set(command.data.name, command);
    body.push(command.data.toJSON());
  });

  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

  try {
    await rest.put(
      Routes.applicationCommands(process.env.BOT_CLIENT_ID),
    { body: body }
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.log(error);
  };
};