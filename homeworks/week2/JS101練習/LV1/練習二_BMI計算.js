// BMI 值的計算公式為：體重 / 身高^2。

// 假設體重是 70，身高是 180(1.8m)，BMI 就是 70/(1.8*1.8) = 21。

// 現在請你寫出一個簡單的 BMI 計算器，用兩個變數代表體重跟身高，算出 BMI 之後判斷 BMI 是落在哪個範圍內並輸出相對應的字串。

// 體重過輕：BMI < 18.5

// 正常範圍：18.5 <= BMI < 24

// 過重：24 <= BMI < 27

// 輕度肥胖：27 <= BMI < 30

// 中度肥胖：30 <= BMI < 35

// 重度肥胖：35 <= BMI

let height = 180;
let weight = 70;

function countBMI(h, w) {
  let mHeight = h * 0.01;
  let bmiForm = Number(parseFloat(w / Math.pow(mHeight, 2)).toFixed(2));

  // switch 條件表達式比對，要再 switch()之中帶入要求 true false
  // https://stackoverflow.com/questions/5619832/switch-on-ranges-of-integers-in-javascript
  switch (true) {
    case bmiForm < 18.5:
      console.log("體重過輕");
      break;
    case 18.5 <= bmiForm < 24:
      console.log("正常範圍");
      break;
    case 24 <= bmiForm < 27:
      console.log("過重");
      break;
    case 27 <= bmiForm < 30:
      console.log("輕度肥胖");
      break;
    case 30 <= bmiForm < 35:
      console.log("中度肥胖");
      break;
    case 35 <= bmiForm:
      console.log("重度肥胖");
      break;
    default:
      console.log("無法計算");
      break;
  }
}

countBMI(height, weight);
