// 請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse）

function reverse(string) {
  let stringArr = Array.from(string);
  let reverseString = "";
  for (let i = stringArr.length; i > 0; i--) {
    reverseString += stringArr[i - 1];
  }
  return reverseString;
}

console.log(reverse("abcd"));
console.log(reverse("12345aa"));
