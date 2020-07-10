// 重新發PR
function solve(arr) {
  // 遇到物件傳參考特性，要小心
  const strArr = arr[0].split('');
  const reverseStr = strArr.reverse().join('');
  console.log(arr[0] === reverseStr ? 'True' : 'False');
}

module.exports = solve;
