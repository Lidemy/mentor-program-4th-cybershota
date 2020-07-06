// 請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。

function flatten(arr) {
  let flatArr = Array.from(arr.join(",").replace(/,/g, ""));
  return flatArr;
}

console.log(flatten([1, 2, 3]));
console.log(flatten([1, 2, [1, 2], [1, 3], 6]));
console.log(flatten([1, [2, [3, [4]], 5], 6]));
