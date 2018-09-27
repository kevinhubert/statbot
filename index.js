const slackBot = require('slackbots');
const axios = require('axios');

const bot = new slackBot({
  token: 'xoxb-399967657059-443886822562-OmS3i5gP2zedZxbLu5lqP8qb',
  name: 'statbot'
});

// Start Handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':eyes:'
  };

  // bot.postMessageToChannel('devtesting', 'Get ready for NFLstats!', params);
});

// Error Handling
bot.on('error', err => {
  console.log(err);
});

// Message Handler
bot.on('message', data => {
  if (data.type !== 'message') {
    return;
  }
  handleMessage(data.text);
});

const handleMessage = function(message) {
  if (message) {
    giveStats();
  }
};

// Define Stats Function
const giveStats = function() {
  bot.postMessageToChannel('devtesting', 'you are talking to the bot');
};
