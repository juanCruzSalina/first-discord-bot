import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../types';

export const command: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Returns a pong!'),
  execute: async (interaction) => {
    await interaction.reply('Pong!');
  }
};