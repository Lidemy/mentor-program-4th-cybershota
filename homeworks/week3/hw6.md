### 🌟 hw1：好多星星

還好上週有把 JS101 練習題自己寫一遍，現在遇到雙重迴圈反應快很多，容易觀察出資料處理到哪邊了。

這題思路大綱：
陣列資料進來後，在第一個迴圈代入陣列第一個元素的指定值，元素為 5 就執行 5 次，每次都觸發 `star()` 函式；該函式接收目前迴圈次數，如是第 3 次就得到 3，執行第二個迴圈，迴圈會執行接收值的指定次數，將 \* 號字串拼接至變數 str，跳出迴圈，印出，清空 str 字串，持續執行直到第一個迴圈結束。

### 🌷 hw2：水仙花數

這題解得比想像中快！一開始就想到要把不同位數可能的數字拆成單獨 number 存在陣列裡方便計算。

這題思路大綱：
陣列資料進來後，先做字串處理，用空格拆分出最小數與最大數；接著迴圈跑出這範圍內的所有數字，將數字轉字串，以單字拆分存為陣列，1 位數陣列長度是 1，3 位數陣列長度是 3 ...等等；該陣列代進 `armstrong()` 函式，該函式將陣列內元素一一枚舉（map）並在其間將元素計算為陣列長度(位數)的次方，接著以累加器(reduce)將計算過的數字互相加總，回傳加總值。

條件判斷該次迴圈的數字是否等於 `armstrong()` 計算後的數字，如果是就印出該數字。

### 😱 hw3：判斷質數

OK 來了，最恐怖的質數～

第一次練習這種題目是在 A 營用 Ruby 求質數，當時超痛苦，手汗狂冒，內心一直恥笑自己誰叫我數學爆爛，真的是從國小低年級就爛到高中。小一老師教加法的手部記憶動作，5 + 3，先拍自己的胸膛喊「5」，再比出手指「1」、「2」、「3」，我一直搞不清楚到底 5 就要拍胸膛還是先喊 5 再拍胸膛再講 123（無言），搞到我小一就要數學課後輔導（超無言），從此開啟數學怎麼補都補不好的循環。

但！自從成年後學程式，我覺得自己數學竟然變好了！！

經過一次次的程式語法理解、再理解與重構，我開始可以回想起求學時的數學盲點是什麼。現在覺得，求學時應該只是不曾有老師用我大腦能理解的方式教我數學，層層疊加的自卑與不知為何而學的困惑，導致無法跳脫爛數學的循環。

好了，Cut the shit，讓我來好好反思這個題目。

---

複習一下 2019 年 8 月的我 [Ruby 寫了什麼](https://repl.it/@zangwang/Q3-Pan-Duan-Zhi-Shu#main.rb)：

```ruby
puts "⓿❶❷❸—— 歡迎進入質數判斷小程式 ——❹❺❻❼"

while true
  puts "請輸入您要判斷的正整數"
  x = gets.chomp.to_i
  i = 2
    if x == 1
      puts "#{x}不是質數"
    elsif x == 2 || x == 3
      puts "#{x}是質數"
    elsif x % 2 == 0
      puts "#{x}不是質數"
    else
      while i do
        i += 1
          if x % i == 0
            puts "#{x}不是質數"
          else
            puts "#{x}是質數"
          end
          break
      end
    end
  puts "繼續判斷數字？（y/n）"
  start = gets.chomp
    if start == "n"
      puts "掰掰摟"
      break
    end
end
```

除了要求使用者輸入的語句，當時整個質數判斷的邏輯是：

1. 使用者輸入數值為 x
2. 如果 x 等於 1 ，印出**不是質數**
3. 如果 x 等於 2 或 3 ，印出**是質數**
4. 如果 x 除以 2 的餘數是 0 ，印出**不是質數**
5. 其他非以上能判斷的數值丟進 while 迴圈
6. while 迴圈從 i = 2 開始跑，但一進來 i 就加 1，所以 i 可以說從 3 開始
7. 如果 x 除以 i 的餘數是 0 ，印出**不是質數**，否則，印出**是質數**，然後跳出迴圈

唉等等！所以這樣子寫的話，我迴圈只是在判斷 x 是不是 3 的倍數而已！？

哪泥！？我當初的邏輯就錯了！！？？？

##### 驗證：

25 => 被判斷成是質數

47 => 被判斷成是質數

55 => 被判斷成是質數

我真的錯了！而且當初在 A 營，這項作業，得到助教批改評語「Good!  執行結果符合作業的要求」因為自己對數字敏感度極低，所以錯了我也看不出來，當時也沒建立程式要驗證確實的觀念，「感覺」對了就交出去了，然後還被評為正確。

OMG，我太震驚！一錯就錯到今年 😱

~~學費白繳了~~

---

再來看申請 Lidemy 程式導師計畫前，在 LIOJ AC 通過的程式碼：

```javascript
function solve(lines) {
  for (let i = 1; i <= Number(lines[0]); i++) {
    if (isPrime(Number(lines[i]))) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
}

function isPrime(number) {
  if (number === 1) {
    return false;
  }
  for (j = 2; j < 10000; j++) {
    if (number % j === 0) {
      if (number === j) {
        return true;
      } else {
        return false;
      }
    }
  }
  return true;
}
```

當時也是寫到瘋掉，忍不住去看了解析影片，把迴圈最後 `return` 往外移才得到 AC。

讓我再虛擬碼一次當時的邏輯：

1. 陣列資料進來 `soleve()` 函式
2. for 迴圈 i 從 1 開始，終止於陣列[0]指定數值，i++
3. if 判斷，`isPrime()` 函式如果回傳 true，印出 Prime，否則，印出 Composite
4. `isPrime()` 函式代入 for 迴圈 i 數值的陣列 lines[i]
5. 進入 `isPrime()` 函式
6. 如果陣列元素等於 1 ，回傳 false，印出 Composite
7. 否則，進入第二個 for 迴圈
8. 第二個 for 迴圈設定從 2 開始，迴圈數小於 10000，迴圈計數自動加 1
9. if 判斷，如果陣列元素除以迴圈 j 計數的數字餘數為 0，進入第二個 if 判斷（該數可以被 j 整除了）
10. 第二個 if 判斷，如果該數等於自身，回傳 true ，印出 Prime，否則，回傳 false ，印出 Composite
11. 如果在第二個 for 迴圈中，都沒有找到可以整除陣列元素的數字，跳出迴圈後，回傳 true ，印出 Prime

當時卡在第 11 個步驟，沒有設定這個情況才跑不出正確答案。

---

申請通過進來程式導師計畫，跟著進度到 week 2，再次寫了質數判斷的練習，時隔也有快一個月吧，當初怎麼 AC 過 LIOJ 的也忘了差不多了。忍著偷看的欲望，自己再寫一遍 JS101 的練習，沒有去看解析影片就把練習送進作業分支，結果被 Huli 抓到錯誤了！

Huli : 邏輯寫錯囉，你的 isPrime(9) 會是 true

JS101 的**錯誤**練習:

```javascript
// 請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。
// （質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）

function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else if (divition(n)) {
    return true;
  } else {
    return false;
  }

  function divition(n) {
    for (i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(37));
```

OMG，現在看到這些 if/else 覺得好噁心，~~我是這麼噁心的人嗎~~

來看看我這個錯誤的邏輯是怎麼運作的：

1. `console.log()` 呼叫 `isPrime()` 代入指定數字
2. if 判斷，如果數字 n 等於 1，回傳 false
3. else if 判斷，如果是字 n 等於 2 ，回傳 true
4. else if 判斷，呼叫 `divition()` 函式代入數字 n ，如果回傳 true ，`isPrime()` 回傳 true
5. 進入 `divition()` 函式
6. for 迴圈 i 從 2 開始，終止於迴圈計數小於數字 n ，i++
7. if 判斷，如果數字 n 除以迴圈計數 i 餘 0，回傳 false ，否則，回傳 true

所以 9 這個漏網之魚怎麼來的？

1. （前略）...
2. 9 不等於 1 ，下一個判斷
3. 9 不等於 2 ，下一個判斷
4. 9 代入 `divition()`
5. 9 % 2 = 1，回傳 true ，跳出迴圈

WooooW 原來我還是犯了以前不斷再犯的錯誤，太早跳出迴圈，沒有完整判斷完該數是否可以被其他數整除，而回傳錯誤的結果。

JS101 的練習，修改完的結果是這樣：

```javascript
function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else if (divition(n)) {
    return true;
  } else {
    return false;
  }

  function divition(n) {
    for (i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(9));
// => false
```

從遠古分析到現在，這下我真的記住錯誤了吧～

---

LIOJ 判斷質數重新寫：

```javascript
function solve(arr) {
  const numberArr = arr.slice(1);

  function isPrime(n) {
    if (n === 1) return false;
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  numberArr.forEach((el) => {
    if (isPrime(Number(el))) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  });
}
```

這次解題思路是用 `forEach()` 枚舉陣列元素，進入 `isPrime()` 函式驗證，讓函式回傳與印出分離，且我意識清楚，記得要讓迴圈列舉的數字跑完，我沒偷看解析呦。

經過這次大回顧，終於確實搞清楚我在這題屢屢跌跤的原因。也很開心我現在遇到數學問題不會手汗冷汗直流，可以平靜一點去看 YouTube 上的數學教學影片，[曲智鑛](https://www.youtube.com/channel/UCQ8fxJL7jrP7IZoyx3JXXyg/videos)的頻道對我來說蠻好吸收，希望未來能找回我遺失的數學能力。

~~雖然判斷質數跟程式邏輯比較有關係，我想應該是有關於數學就容易腦袋先當機吧~~

### ♻️ hw4：判斷迴文

判斷迴文主要用 `reverse()` 將原文陣列反轉再比較。

撰寫途中，我一度將原始陣列存入常數 `strArr`，再將反轉過後的值存在新常數 `reverseStr`，兩個常數用 `===` 比較都會是 `true`，卡了一下，有意識到應該是物件傳參考的特性，會相等是因為記憶體位置一樣。但我將其中一個做 `JSON.Stringify()` 之類的處理還是不行，可能是因為這是陣列，不是物件吧。

總之後來用原陣列與反轉過後的比較，就通過了。

### 🙈 hw5：聯誼順序比大小

這題在申請程式導師計畫前也是爆卡無解，現在知道，原因在於當初自己對數值可以多極端沒有想像。

自己在撰寫途中有想過字串或字典序之類的比較，不過因為懶惰，查說應該有什麼 Type 可以海納巨大數字，就直接用 BigInt() 了。

看了自我檢討的範例，猜測字典序可能比 BigInt() 還快一點(?)，不過因為 BigInt() 是自己最後成功的作法，作業就先交 BigInt() 版，多趕一些其他進度後，再回來手作字典序比較法。

### 🎭 Jest 寫測試

看完 Huli 的 Jest 介紹，我唯一的問題是，如何在 Jest 測 function 中 console.log 出來的值？因為我想拿這週作業試試看。

#### 如何讓 Jest 測 console.log

```javascript
//  將 node.js 的 console 物件掛上 jset 的 mock function (嘲弄函式!? 蛤？應該有點像可自定義的模擬函式？)
global.console = {
  log: jest.fn(),
};

describe('hw1：好多星星', () => {
  it('印出 1 顆星星', () => {
    console.log(hw1(['1'])); //這樣從 console 物件中可以 dot-notation 出剛剛加上去的 log，其中的值是 jest 的 mock function
    expect(console.log).toHaveBeenCalledWith('*');// 預期 console.log 被呼叫時的回傳值是...
  });
}

```

這樣就有美美的綠光～

![](https://i.imgur.com/xnriZgK.png)

### 👨‍🔧 Travis

[![](https://travis-ci.org/Lidemy/mentor-program-4th-cybershota.svg?branch=hw-week3)](https://travis-ci.org/Lidemy/mentor-program-4th-cybershota.svg?branch=hw-week3)

打鐵趁熱複習怎麼接上 Travis 做遠端分支測試

#### Travis 配置文件

排版非常重要，少空格會出錯，導致配置文件 undefined ，可以用 [Travis CI Build Config Explorer](https://config.travis-ci.com/explore) 檢查。

.travis.yml 放在專案 root

```yml
language: node_js
node_js:
  - '12'
install:
  - npm install
script:
  - npm run test
branches:
  - only:
      - hw-week3
```

在 travis-ci.org 的 setting 中開啟本 repo 推送分支後會自動運行配置文件腳本來檢測。

![](https://i.imgur.com/I51DVx9.png)

看到這些勾勾覺得人生好美滿幸福～
