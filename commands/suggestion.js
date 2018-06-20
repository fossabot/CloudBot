// Suggestion.js start
const embed = {
  // Description
  "description": "Have something to suggest to the Cloudbox team?",
  // Select color purple
  "color": 11141554,
  //  Thumbnail for suggestions (have none)
  //  "thumbnail": {
  //  "url": ""
  //  },
  // Fields for links
  "fields": [
    {
    // Cloudbox suggestions
      "name": "Cloudbox",
      "value": "Cloudbox [suggestions](https://feathub.com/Cloudbox/Cloudbox)."
    },
    {
    // Plex Autoscan suggestions
      "name": "Plex Autoscan",
      "value": "Plex Autoscan [suggestions](https://feathub.com/l3uddz/plex_autoscan)."
    },
    {
    // Traktrr suggestions
      "name": "Traktarr",
      "value": "Traktrr [suggestions](https://feathub.com/l3uddz/traktarr)."
    },
    {
    // Plex Dupefinder suggestions
      "name": "Plex Dupefinder",
      "value": "Plex Dupefinder [suggestions](https://feathub.com/l3uddz/plex_dupefinder)."
    },
    {
    // Cloudplow suggestions
      "name": "Cloudplow",
      "value": "Cloudplow [suggestions](https://feathub.com/l3uddz/cloudplow)."
    }
  ]
};
// Send message
channel.send({ embed });
