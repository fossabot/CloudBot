// Wiki.js start
const embed = new Discord.RichEmbed()
  .setColor(#cc33ff)
  .setDescription("Require help? Check out our [documentation](https://github.com/Cloudbox/Cloudbox/wiki).")
  .setThumbnail("https://i.imgur.com/jLqqJPP.png")
  .addField("FAQ","[Frequently asked questions](https://github.com/Cloudbox/Cloudbox/wiki/FAQ).",
  "Updating Cloudbox", "[Errors during git pull](https://github.com/Cloudbox/Cloudbox/wiki/FAQ#updating-cloudbox).",
  "Error 502","[502](https://github.com/Cloudbox/Cloudbox/wiki/FAQ#error-502).")
  // Send message
  message.channel.send({embed});
