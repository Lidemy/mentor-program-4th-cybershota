// 串接 Twitch API，接收一個參數是遊戲名稱，輸出那個遊戲底下最受歡迎的前 200 個實況的名稱與 id。

const request = require('request');
const process = require('process');

const searchGame = process.argv[2];
let offset = 0;
require('dotenv').config();

const twitchClientID = process.env.TWITCH_CLIENT_ID;

function reqTwitch(search, set) {
  request(
    {
      url: `https://api.twitch.tv/kraken/search/streams?query=${search}&limit=100&offset=${set}`,
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
      return output.streams.forEach((item) => {
        console.log(
          // eslint-disable-next-line no-underscore-dangle
          `ID: ${item.channel._id} | 頻道名稱：${item.channel.display_name} | 觀看人次: ${item.viewers}`,
        );
      });
    },
  );
}

while (offset < 2) {
  reqTwitch(searchGame, offset);
  offset += 1;
}
