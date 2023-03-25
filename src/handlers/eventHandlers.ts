import { readdirSync } from 'fs';
import { join } from 'path';
import { Client } from 'discord.js';
import { FILE_EXTENSION } from '../lib/constants';
import { BotEvent } from '../types';

module.exports = (client: Client) => {
  let eventDir = join(__dirname, '../events');

  readdirSync(eventDir).map(file => {
    if (!file.endsWith(FILE_EXTENSION)) return;
    const event: BotEvent = require(`${eventDir}/${file}`).default;

    event.once 
      ? client.once(event.name, (...args) => event.execute(...args)) 
      : client.on(event.name, (...args) => event.execute(...args));

    console.log(`Successfully loaded event ${event.name}`);
  })
}