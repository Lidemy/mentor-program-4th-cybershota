// 請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。

function isUpperCase(str) {
  if (65 <= str.charCodeAt(0) && str.charCodeAt(0) <= 90) {
    return true;
  } else {
    return false;
  }
}

console.log(isUpperCase("abcd"));
console.log(isUpperCase("Abcd"));
console.log(isUpperCase("ABCD"));
console.log(isUpperCase("aBCD"));
