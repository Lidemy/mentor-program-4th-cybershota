// 修改完 ESLint
// LIOJ 通過
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(arr) {
  let str = '';

  function star(n) {
    for (let i = 1; i <= n; i += 1) {
      str += '*';
    }
  }

  for (let i = 1; i <= arr[0]; i += 1) {
    star(i);
    console.log(str);
    str = '';
  }
}

rl.on('close', () => {
  solve(lines);
});
