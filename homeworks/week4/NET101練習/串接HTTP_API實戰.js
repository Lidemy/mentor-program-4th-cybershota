const request = require('request');
const process = require('process');

request(`https://reqres.in/api/${process.argv[2]}`, (error, response, body) => {
  console.log(body);
});
