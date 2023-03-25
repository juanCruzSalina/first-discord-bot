import { SlashCommandBuilder } from "discord.js";
import { SlashCommand } from '../types'

export const command: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName('secertpong')
    .setDescription('Returns a secret pong!'),
  execute: async (interaction) => {
    await interaction.reply({ content: 'Secret Pong!', ephemeral: true })
  }
}