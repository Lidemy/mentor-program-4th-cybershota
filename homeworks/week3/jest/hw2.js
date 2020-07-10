function solve(arr) {
  // 字串處理
  const spaceIndex = arr[0].indexOf(' ');
  const minNum = Number(arr[0].slice(0, spaceIndex));
  const maxNum = Number(arr[0].slice(spaceIndex + 1));

  // 位數分割成陣列 map 出來再加總
  function armstrong(nArr) {
    let multiply = 0;
    const reducer = (a, c) => a + c;
    multiply = nArr
      .map((el) => {
        const elPow = Number(el) ** nArr.length;
        return elPow;
      })
      .reduce(reducer);
    return multiply;
  }

  // 位數
  let numberArr = [];
  for (let i = minNum; i <= maxNum; i += 1) {
    numberArr = i.toString().split('');
    if (i === armstrong(numberArr)) {
      console.log(i);
    }
    numberArr = [];
  }
}

module.exports = solve;
