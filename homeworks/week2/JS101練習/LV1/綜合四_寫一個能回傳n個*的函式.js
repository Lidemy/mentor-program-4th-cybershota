// 請寫出一個叫做 star 的 function 並且接受一個參數 n，能回傳 n 個 *。

function star(n) {
  let star = "*";
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(star);
  }
  return arr.join("");
}

console.log(star(1));
console.log(star(5));
