// 請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）
// 提示：如果你已經會找第 n 小的值了，試著把這個概念應用到這題上。

function sort(arr) {
  let length = arr.length;
  let tempArr = arr;
  let minNum = arr[0];
  let sortArr = [];
  for (let i = 0; i < length; i++) {
    comparisom(tempArr);
    tempArr = tempArr.filter((el) => el !== minNum);
    sortArr.push(minNum);
    minNum = tempArr[i];
  }

  return sortArr;

  function comparisom(tempArr) {
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] < minNum) {
        minNum = tempArr[i];
      } else if (tempArr.length === 1) {
        minNum = tempArr[i];
      }
    }
  }
}

console.log(sort([6, 8, 3, 2]));
console.log(sort([1, 2, 7, 5]));
