// 重新發PR
function solve(arr) {
  let str = '';

  function star(n) {
    for (let i = 1; i <= n; i += 1) {
      str += '*';
    }
  }

  for (let i = 1; i <= arr[0]; i += 1) {
    star(i);
    console.log(str);
    str = '';
  }
}

module.exports = solve;
