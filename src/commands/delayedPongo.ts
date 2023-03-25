import { SlashCommandBuilder } from "discord.js";
import { scheduler } from "timers/promises";
import { SlashCommand } from '../types';

export const command: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName('delayedpong')
    .setDescription('Returns a pong after 10 seconds!'),
  execute: async (interaction) => {
    await interaction.deferReply();
    await scheduler.wait(10000);
    await interaction.editReply('Pong!')
  },
}