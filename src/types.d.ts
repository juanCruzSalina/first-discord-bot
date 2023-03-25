import { Collection, SlashCommandBuilder, CommandInteraction } from 'discord.js'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DISCORD_TOKEN: string;
      BOT_CLIENT_ID: string;
      DEV_SERVER_ID: string;
      NODE_ENV: string;
      MONGO_URL: string;
    };
  };
};

declare module 'discord.js' {
  export interface Client {
    slashCommands: Collection<string, SlashCommand>;
  };
};

export interface BotEvent {
  name: string;
  once?: boolean | false;
  async execute: (...args?) => void;
}

export interface SlashCommand {
  data: SlashCommandBuilder;
  async execute: (interaction: CommandInteraction) => Promise<void>
};