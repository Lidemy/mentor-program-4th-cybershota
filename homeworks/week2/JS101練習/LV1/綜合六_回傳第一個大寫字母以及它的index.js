// 請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1。

function position(str) {
  let arr = Array.from(str);
  let filterSTR = arr.filter((s) => s.charCodeAt() >= 65 && s.charCodeAt() <= 90);
  if (filterSTR.length > 0) {
    let index = str.indexOf(filterSTR[0]);
    return `${filterSTR[0]} ${index}`;
  } else {
    return -1;
  }
}

console.log(position("abcd"));
console.log(position("AbcD"));
console.log(position("abCD"));
