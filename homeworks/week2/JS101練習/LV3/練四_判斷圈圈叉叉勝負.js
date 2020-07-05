// 請寫出一個 function winner，接收一個代表圈圈叉叉的陣列，並回傳贏的是 O 還是 X，如果平手或還沒下完，請回傳 draw。

function winner(arr) {
  let flatArr = Array.from(arr.join("").replace(/,/g, "").replace(/O/g, 0).replace(/X/g, 1));
  console.log(flatArr);
  switch (true) {
    case flatArr[0] + flatArr[1] + flatArr[2] == 000:
      console.log("O");
      break;
    case flatArr[0] + flatArr[1] + flatArr[2] == 111:
      console.log("X");
      break;
    case flatArr[4] + flatArr[5] + flatArr[6] == 000:
      console.log("O");
      break;
    case flatArr[4] + flatArr[5] + flatArr[6] == 111:
      console.log("X");
      break;
    case flatArr[7] + flatArr[8] + flatArr[9] == 000:
      console.log("O");
      break;
    case flatArr[7] + flatArr[8] + flatArr[9] == 111:
      console.log("X");
      break;
    case flatArr[0] + flatArr[4] + flatArr[7] == 000:
      console.log("O");
      break;
    case flatArr[0] + flatArr[4] + flatArr[7] == 111:
      console.log("X");
      break;
    case flatArr[1] + flatArr[5] + flatArr[8] == 000:
      console.log("O");
      break;
    case flatArr[1] + flatArr[5] + flatArr[8] == 111:
      console.log("X");
      break;
    case flatArr[3] + flatArr[6] + flatArr[8] == 000:
      console.log("O");
      break;
    case flatArr[3] + flatArr[6] + flatArr[8] == 111:
      console.log("X");
      break;
    case flatArr[0] + flatArr[5] + flatArr[8] == 000:
      console.log("O");
      break;
    case flatArr[0] + flatArr[5] + flatArr[8] == 111:
      console.log("X");
      break;
    case flatArr[2] + flatArr[4] + flatArr[6] == 000:
      console.log("O");
      break;
    case flatArr[2] + flatArr[4] + flatArr[6] == 111:
      console.log("X");
      break;
    default:
      console.log("draw");
      break;
  }
}

winner([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["O", "X", "O"],
]);

winner([
  ["O", "O", "X"],
  ["O", "X", "X"],
  ["X", "X", "O"],
]);

winner([
  ["O", "O", "X"],
  ["O", "O", "X"],
  ["X", "X", ""],
]);
