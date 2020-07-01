// 寫一個函式 star，接收一個參數 n，並印出 n 個 *
// （禁止使用內建函式 repeat）

function star(n) {
  let star = "*";
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(star);
  }
  console.log(arr.join(""));
}

star(1);
star(5);
star(10);
