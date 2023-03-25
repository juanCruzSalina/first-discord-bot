import { SlashCommandBuilder } from "discord.js";
import { SlashCommand } from '../types';

export const command: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName('bucket')
    .setDescription('This is a bucket.'),
  execute: async (interaction) => {
    await interaction.reply('Dear God...');
    await interaction.followUp('There is more.');
    await interaction.followUp('No...')
  }
}
