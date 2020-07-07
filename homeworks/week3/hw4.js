var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
});

var lines = [];

rl.on('line', function (line) {
  lines.push(line);
});

rl.on('close', function () {
  solve(lines);
});

function solve(lines) {
  // 遇到物件傳參考特性，要小心
  let strArr = lines[0].split('');
  let reverseStr = strArr.reverse().join('');
  console.log(lines[0] === reverseStr ? 'True' : 'False');
}
