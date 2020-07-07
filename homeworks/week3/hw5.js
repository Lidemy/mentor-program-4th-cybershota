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
  let round = lines.slice(1);
  // 第一次用 BigInt() 好興奮
  round.forEach((el) => {
    let elArr = el.split(' ');
    if (elArr[2] === '1') {
      if (BigInt(elArr[0]) > BigInt(elArr[1])) {
        console.log('A');
      } else if (BigInt(elArr[0]) < BigInt(elArr[1])) {
        console.log('B');
      } else {
        console.log('DRAW');
      }
    } else {
      if (BigInt(elArr[0]) > BigInt(elArr[1])) {
        console.log('B');
      } else if (BigInt(elArr[0]) < BigInt(elArr[1])) {
        console.log('A');
      } else {
        console.log('DRAW');
      }
    }
  });
}
