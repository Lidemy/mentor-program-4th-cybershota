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
  // 字串處理
  let spaceIndex = lines[0].indexOf(' ');
  let minNum = Number(lines[0].slice(0, spaceIndex));
  let maxNum = Number(lines[0].slice(spaceIndex + 1));
  // 位數
  let numberArr = [];
  for (let i = minNum; i <= maxNum; i++) {
    numberArr = i.toString().split('');
    if (i === armstrong(numberArr)) {
      console.log(i);
    }
    numberArr = [];
  }

  //位數分割成陣列 map 出來再加總
  function armstrong(arr) {
    let multiply = 0;
    const reducer = (a, c) => a + c;
    multiply = arr
      .map((el) => {
        return Math.pow(Number(el), arr.length);
      })
      .reduce(reducer);
    return multiply;
  }
}
