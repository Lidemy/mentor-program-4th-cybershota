// 請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）

function findMin(arr) {
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < minNum) {
      minNum = arr[i + 1];
    }
  }
  return minNum;
}

console.log(findMin([1, 2, 5, 6, 99, 4, 5]));
console.log(findMin([1, 6, 0, 33, 44, 88, -10]));
