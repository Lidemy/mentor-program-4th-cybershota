// 這題是上一題的加強版，上一題只要你找出最小值，而這一題請你寫一個 function findNthMin，接收一個陣列以及一個數字 n，找出第 n 小的數字。（禁止使用內建函式 sort）

// 提示：假設我要找出第 2 小的值，我只要先找出最小的值然後再把它刪掉，再重新找一次最小的值，就會是第 2 小的值了。

function findNthMin(arr, n) {
  let minNum = arr[0];
  let selectArr = arr;
  for (let j = 0; j < n; j++) {
    if (selectArr.length > 0) {
      minNum = selectArr[0];
      pickSmall(selectArr);
    }
  }

  function pickSmall(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] < minNum) {
        minNum = arr[i + 1];
      }
    }
    selectArr = arr.filter((el) => el !== minNum);
  }

  return minNum;
}

console.log(findNthMin([1, 2, 3, 4, 5], 1));
console.log(findNthMin([1, 3, 5, 7, 9], 3));
console.log(findNthMin([1, 1, 1, 1, 1], 2));
