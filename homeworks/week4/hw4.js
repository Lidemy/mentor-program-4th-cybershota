const request = require('request');
const process = require('process');

require('dotenv').config();

const twitchClientID = process.env.TWITCH_CLIENT_ID;

request(
  {
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': twitchClientID,
    },
  },
  (error, response, body) => {
    let output;
    if (error) {
      return console.log('error: ', error);
    }
    if (response.statusCode >= 200 && response.statusCode < 300) {
      try {
        const data = JSON.parse(body);
        output = data;
      } catch (err) {
        console.log('error: ', err);
      }
    }
    return output.top.forEach((item, index) => {
      console.log(`排名: ${index + 1} / 觀看人數: ${item.viewers} / 遊戲: ${item.game.name}`);
    });
  },
);
