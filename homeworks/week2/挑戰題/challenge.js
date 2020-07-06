// 現在有一個排序好的陣列 arr，裡面的元素都是正整數而且保證不會重複。

// 給你一個數字 n，請寫出一個函式 search 回傳 n 在這個陣列裡面的 index，沒有的話請回傳 -1。

// 這一題的解法要比這個更快：

// function search(arr, n) {
//   for(var i=0; i<arr.length; i++) {
//     if (arr[i] === n) return i
//   }
//   return -1
// }

// Huli 的第一個搜尋在我的 VSCode 計算是 10.533ms
// Huli 的第二個搜尋在我的 VSCode 計算是 7.72ms

// 我的第一個搜尋在我的 VSCode 計算是 7.073ms
// 我的第二個搜尋在我的 VSCode 計算是 7.34ms
// 第二個搜尋的差異比較不明顯，而且時間計算是浮動的

console.time();
function search(arr, n) {
  if (n > arr[arr.length - 1]) return -1;
  let half = Math.round(arr.length / 2);
  if (n >= arr[half] && n <= arr[arr.length - 1]) {
    for (let i = half; i < arr.length; i++) {
      if (n === arr[i]) return i;
    }
  } else {
    for (let i = 0; i < half; i++) {
      if (n === arr[i]) return i;
    }
  }
}
console.log(search([1, 3, 10, 14, 39], 14));
// console.log(search([1, 3, 10, 14, 39], 299));
console.timeEnd();
