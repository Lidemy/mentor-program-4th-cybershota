// 請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。

function findSmallerTotal(arr, n) {
  let totalArr = arr.filter((el) => el < n);
  const reducer = (a, c) => a + c;
  if (totalArr.length > 0) {
    return totalArr.reduce(reducer);
  } else {
    return 0;
  }
}

console.log(findSmallerTotal([1, 2, 3], 3));
console.log(findSmallerTotal([1, 2, 3], 1));
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999));
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0));
