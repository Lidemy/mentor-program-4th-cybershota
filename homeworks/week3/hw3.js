const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(arr) {
  const numberArr = arr.slice(1);

  function isPrime(n) {
    if (n === 1) return false;
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return n === i;
      }
    }
    return true;
  }

  numberArr.forEach((el) => {
    if (isPrime(Number(el))) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  });
}

rl.on('close', () => {
  solve(lines);
});
