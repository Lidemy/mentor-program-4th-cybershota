function join(arr, concatStr) {
  let joinStr = "";
  for (let i = 0; i < arr.length; i++) {
    joinStr += arr[i];
    if (i < arr.length - 1) {
      joinStr += concatStr;
    }
  }
  return joinStr;
}

function repeat(str, times) {
  let repeatStr = "";
  for (let i = 1; i <= times; i++) {
    repeatStr += str;
  }
  return repeatStr;
}

console.log(join(["a"], "!"));
console.log(join([1, 2, 3], ""));
console.log(join(["a", "b", "c"], "!"));
console.log(join(["a", 1, "b", 2, "c", 3], ","));

console.log(repeat("a", 5));
console.log(repeat("yoyo", 2));
