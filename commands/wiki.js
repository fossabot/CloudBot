// Wiki.js start
const embed = new Discord.RichEmbed()
  // Description
  .setDescription("Require help? Check out our [documentation](https://github.com/Cloudbox/Cloudbox/wiki).")
  // Select color purple
  .setcolor(11141554)
  // Thumbnail for github
  .setThumbnail("https://i.imgur.com/jLqqJPP.png")
  // Extra options fields
  // FAQ
  .addField("FAQ","[Frequently asked questions](https://github.com/Cloudbox/Cloudbox/wiki/FAQ).")
  // Updating cloudbox
  .addfield("Updating Cloudbox", "[Errors during git pull](https://github.com/Cloudbox/Cloudbox/wiki/FAQ#updating-cloudbox).")
  // Error 502
  .addfield("Error 502","[502](https://github.com/Cloudbox/Cloudbox/wiki/FAQ#error-502).");
// Send message
channel.send({ embed });
