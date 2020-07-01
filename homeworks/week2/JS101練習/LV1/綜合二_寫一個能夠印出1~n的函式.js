// 請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n。

function print(n) {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i += 1;
  }
}

print(1);
print(3);
print(9);
