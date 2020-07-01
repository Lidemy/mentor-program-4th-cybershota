// 請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串。

function swap(string) {
  let arr = Array.from(string);
  // map 要設定回傳值
  // fromCharCode() 前面要加上 String
  let newArr = arr.map((el) => {
    if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
      return (el = String.fromCharCode(el.charCodeAt() + 32));
    } else {
      return (el = String.fromCharCode(el.charCodeAt() - 32));
    }
  });
  return newArr.join("");
}

console.log(swap("Peter"));
console.log(swap("AbCdE"));
