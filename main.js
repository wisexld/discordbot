// import {slash} from 'commands/'

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login('MTAxMTg0MDQyNTM2MDg5MjAwNA.GCdO_8.GHutJnLp2xH56PcoF0hJFL3V6cu6kMkAHkH5zw');