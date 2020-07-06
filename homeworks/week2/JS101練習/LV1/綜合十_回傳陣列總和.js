// 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。

function sum(arr) {
  const reducer = (a, c) => a + c;
  let sumArr = arr.reduce(reducer);
  return sumArr;
}

console.log(sum([1, 2, 3]));
console.log(sum([-1, 1, 2, -2, 3, -3]));
