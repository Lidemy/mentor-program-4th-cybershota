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
  let str = '';
  for (let i = 1; i <= lines[0]; i++) {
    star(i);
    console.log(str);
    str = '';
  }

  function star(n) {
    for (let i = 1; i <= n; i++) {
      str += '*';
    }
  }
}
