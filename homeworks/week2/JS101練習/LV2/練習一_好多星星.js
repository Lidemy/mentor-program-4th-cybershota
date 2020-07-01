// 請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案。

function stars(n) {
  let star = "*";
  for (let i = 0; i < n; i++) {
    console.log(star);
    star += "*";
  }
}

stars(1);
stars(3);
stars(7);
