// Import discord.js
const Discord = require('discord.js');
// Create instance
const client = new Discord.Client();
// Config file
const config = require("./config.json");
// Debug
client.on('ready', () => {
    console.log('CloudBot is Operational');
});
// Commands
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Lower/Upper case fix
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Load command
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});
// Token
client.login(process.env.TOKEN);
