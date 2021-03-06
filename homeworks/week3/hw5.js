// 修改完 ESLint
// LIOJ 通過
/* eslint-disable no-undef */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(arr) {
  const round = arr.slice(1);
  // 第一次用 BigInt() 好興奮
  round.forEach((el) => {
    const elArr = el.split(' ');
    if (elArr[2] === '1') {
      if (BigInt(elArr[0]) > BigInt(elArr[1])) {
        console.log('A');
      } else if (BigInt(elArr[0]) < BigInt(elArr[1])) {
        console.log('B');
      } else {
        console.log('DRAW');
      }
    } else if (BigInt(elArr[0]) > BigInt(elArr[1])) {
      console.log('B');
    } else if (BigInt(elArr[0]) < BigInt(elArr[1])) {
      console.log('A');
    } else {
      console.log('DRAW');
    }
  });
}

rl.on('close', () => {
  solve(lines);
});
