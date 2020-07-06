// 請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n。

function findSmallCount(arr, n) {
  let arrFilter = arr.filter((el) => el < n).length;
  return arrFilter;
}

console.log(findSmallCount([1, 2, 3], 2));
console.log(findSmallCount([1, 2, 3, 4, 5], 0));
console.log(findSmallCount([1, 2, 3, 4], 100));
