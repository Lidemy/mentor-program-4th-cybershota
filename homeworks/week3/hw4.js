// 重新發PR
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
  // 遇到物件傳參考特性，要小心
  const strArr = arr[0].split('');
  const reverseStr = strArr.reverse().join('');
  console.log(arr[0] === reverseStr ? 'True' : 'False');
}

rl.on('close', () => {
  solve(lines);
});
