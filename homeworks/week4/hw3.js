const request = require('request');
const process = require('process');

const args = process.argv;

const str = args[2];

const baseUrl = 'https://restcountries.eu/rest/v2';

request.get(`${baseUrl}/name/${str}`, (error, response, body) => {
  let output;
  if (error) {
    return console.log('error: ', error);
  }
  if (response.statusCode >= 200 && response.statusCode < 300) {
    const data = JSON.parse(body);
    output = data;
  }
  return output.forEach((item, index) => {
    console.log(`${index + 1}.============`);
    console.log(
      `國家: ${item.name}\n首都: ${item.capital}\n貨幣: ${item.currencies[0].code}\n國碼: ${item.callingCodes}`,
    );
  });
});
