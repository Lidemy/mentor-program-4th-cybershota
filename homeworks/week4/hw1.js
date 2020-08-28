const request = require('request');
const process = require('process');

const baseUrl = 'https://lidemy-book-store.herokuapp.com';

const options = {
  limit: process.argv[2],
};

let data;

// eslint-disable-next-line consistent-return
request.get(`${baseUrl}/books?_limit=${options.limit}`, (error, response, body) => {
  if (error) {
    return console.log('error: ', error);
  }
  if (response.statusCode >= 200 && response.statusCode <= 299) {
    try {
      data = JSON.parse(body);
      return data.forEach((item, index) => {
        console.log(`${index + 1}. id: ${item.id}: 書名:《${item.name}》`);
      });
    } catch (err) {
      return console.log('error: ', err);
    }
  }
});
