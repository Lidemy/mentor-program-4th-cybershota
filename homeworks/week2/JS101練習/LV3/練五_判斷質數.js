// 請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。
// （質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）

function isPrime(n) {
  if (n === 1) {
    console.log("false");
  } else if (n === 2) {
    console.log("true");
  } else if (divition(n)) {
    console.log("true");
  } else {
    console.log("false");
  }

  function divition(n) {
    for (i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

isPrime(1);
isPrime(5);
isPrime(37);
