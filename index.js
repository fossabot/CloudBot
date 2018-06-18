const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('CloudBot is Operational');
});

const prefix = "!";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "Test")) {
    message.channel.send("Test 1,2,3");
  } else
  if (message.content.startsWith(prefix + "Sample")) {
    message.channel.send("Sample 1,2,3");
  }
});

client.login(process.env.TOKEN);
