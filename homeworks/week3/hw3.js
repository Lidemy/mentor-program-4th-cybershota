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
  let numberArr = lines.slice(1);

  numberArr.forEach((el) => {
    if (isPrime(Number(el))) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  });

  function isPrime(n) {
    if (n === 1) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return n === i ? true : false;
      }
    }
    return true;
  }
}
