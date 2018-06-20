// Donate.js start
const embed = {
  // Description
  "description": "If you find this project helpful, feel free to make a small donation via [Paypal](https://paypal.me/l3uddz).",
  // Select color purple
  "color": 11141554,
  // Thumbnail for paypal
  "thumbnail": {
    "url": "https://i.imgur.com/5jP7HAH.png"
  },
  // Extra donate fields
  "fields": [
    {
      // Bitcoin
      "name": "Bitcoin",
      "value": "3CiHME1HZQsNNcDL6BArG7PbZLa8zUUgjL"
    },
    {
      // Litecoin
      "name": "Litecoin",
      "value": "LRx1Z4AvKUJWa9pKnHrcsMemhG8S5w7uLp"
    }
  ]
};
// Send message
channel.send({ embed });
