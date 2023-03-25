import { SlashCommandBuilder } from "discord.js";
import { scheduler } from "timers/promises";
import { SlashCommand } from '../types'

export const command: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName('editedpong')
    .setDescription('Returns a pong! But edited!'),
  execute: async (interaction) => {
    await interaction.reply('Pongs!');
    await scheduler.wait(2000);
    await interaction.editReply('Ehmm, I mean Pong!')
  }
}