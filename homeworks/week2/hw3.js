function reverse(str) {
  let strArr = Array.from(str);
  let reverse = [];
  for (let i = strArr.length; i >= 0; i--) {
    reverse.push(strArr[i]);
  }
  console.log(reverse.join(""));
}

reverse("hello");
reverse("yoyoyo");
reverse("1abc2");
reverse("1,2,3,2,1");
