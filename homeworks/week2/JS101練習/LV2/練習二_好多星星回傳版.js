// 請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串

function makeStars(n) {
  let star = "*";

  for (let i = 1; i < n; i++) {
    nword();
    stars(i);
  }

  function stars(i) {
    for (let k = 0; k <= i; k++) {
      star += "*";
    }
    return star;
  }

  function nword() {
    star += "\\n";
  }

  return star;
}

console.log(makeStars(1));
console.log(makeStars(2));
console.log(makeStars(5));
