function capitalize(str) {
  let strArr = Array.from(str);
  let strFirstEl = strArr[0].charCodeAt(0);

  if (strFirstEl >= 97 && strFirstEl <= 122) {
    strArr[0] = String.fromCharCode(strFirstEl - 32);
    return strArr.join("");
  } else if (strFirstEl >= 65 && strFirstEl <= 90) {
    return strArr.join("");
  } else {
    return str;
  }
}

console.log(capitalize("hello"));
console.log(capitalize("nick"));
console.log(capitalize("Nick"));
console.log(capitalize(",hello"));
