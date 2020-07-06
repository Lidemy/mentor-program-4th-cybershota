// 請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹

function tree(n) {
  const star = "*";
  let treeArr = [];
  let count = n;
  function treeTop(n) {
    for (let i = 1; i <= n * 2; i++) {
      if (i % 2 !== 0) {
        count--;
        treeArr.push(`${String.fromCharCode(32).repeat(count)}${star.repeat(i)}\n`);
      }
    }
  }

  function treeButtom(n) {
    if (n === 1) {
      return;
    }
    for (let i = 1; i <= n; i++) {
      treeArr.push(`${String.fromCharCode(32).repeat(n - 1)}${star}\n`);
    }
  }

  treeTop(n);
  treeButtom(n);
  console.log(treeArr.join(""));
}

tree(1);
tree(2);
tree(5);
