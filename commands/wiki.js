// Wiki.js start
const embed = {
  // Description
  "description": "Require help? Check out our [documentation](https://github.com/Cloudbox/Cloudbox/wiki).",
  // Select color purple
  "color": 11141554,
  // Thumbnail for github
  "thumbnail": {
    "url": "https://i.imgur.com/jLqqJPP.png"
  },
  // Extra options fields
  "fields": [
    {
      // FAQ
      "name": "FAQ",
      "value": "[Frequently asked questions](https://github.com/Cloudbox/Cloudbox/wiki/FAQ)."
    },
    {
      // Updating cloudbox
      "name": "Updating Cloudbox",
      "value": "[Errors during git pull](https://github.com/Cloudbox/Cloudbox/wiki/FAQ#updating-cloudbox)."
    },
      // Error 502
      "name": "Error 502",
      "value": "[502](https://github.com/Cloudbox/Cloudbox/wiki/FAQ#error-502)."
    }
  ]
};
// Send message
channel.send({ embed });
