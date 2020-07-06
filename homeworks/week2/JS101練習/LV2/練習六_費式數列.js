// 費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ....

function fibonacci(n) {
  let fibonaArry = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonaArry.push(fibonaArry[i - 2] + fibonaArry[i - 1]);
  }
  console.log(fibonaArry[n]);
}

fibonacci(1);
fibonacci(2);
fibonacci(8);
