// 請寫出一個函式 stars2，接收一個參數 n，並依照規律印出圖形。

function starts2(n) {
  let star = "";
  let string = "";
  for (let i = 1; i <= n; i++) {
    string += makeStars(i) + "\n";
  }
  let stringArr = string.split("\n");
  let reverseString = stringArr.reverse().splice(2, stringArr.length).join("\n");
  console.log((string += reverseString));
  function makeStars(i) {
    for (let k = 1; k <= i; k++) {
      return (star += "*");
    }
  }
}

starts2(1);
starts2(3);
starts2(5);
