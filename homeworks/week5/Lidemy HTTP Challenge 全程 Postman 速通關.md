## Start

網址：`https://lidemy-http-challenge.herokuapp.com/start`

> 這裡一共有 10 道關卡，==每一關的網址皆為 /lvX，X 即為關卡的數字。==
> 但只知道網址是沒有用的，需要搭配正確的 token 才能順利進入關卡，==傳入 token 的方式為 [[query string]]，例如 /lv1?token=xxx。==
> 為了讓你方便辨別這是 token，==token 的內容一定是用一個大括弧颳起來的字串。==
> 第一關網址為 /lv1?token={GOGOGO}

<hr>

## 第一關

網址：`https://lidemy-http-challenge.herokuapp.com/lv1?token={GOGOGO}`

> 獲得 [📗 道具：圖書館資訊系統 API 文件](https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba)
> 你叫做什麼名字呢？用 GET 方法跟我說你的 name 叫做什麼吧！
> 除了 token 以外順便把 name 一起帶上來就可以了

攻略：Restful API 中，Get 方法就是從不同的 URL（統一資源定位符） 獲得資源；帶入複數參數使用`&`連結鍵值對。

輸入：`https://lidemy-http-challenge.herokuapp.com/lv1?token={GOGOGO}&name={zangwang}`

> 啊...原來你叫 {zangwang} 啊！下一關的 token 是 {HellOWOrld}

<hr>

## 第二關

網址：`https://lidemy-http-challenge.herokuapp.com/lv2?token={HellOWOrld}`

> ...只記得那本書的 id 是兩位數，介於 54~58 之間，你可以幫幫我嗎？
> 找到是哪一本之後把書的 id 用 GET 傳給我就行了。

攻略：使用 [📗 道具：圖書館資訊系統 API 文件](https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba) 獲取所有書籍的 GET 方法 `https://lidemy-http-challenge.herokuapp.com/api/books`，瀏覽所有書籍，其中 《5566－認真》最為突兀：

```json
{
  "id": 56,
  "name": "5566－認真",
  "author": "鄭佩芬",
  "ISBN": "0614361311"
}
```

輸入：`https://lidemy-http-challenge.herokuapp.com/lv2?token={HellOWOrld}&id=56`獲得下一關提示

注意只有 token 才有刮號。

> 下一關的 token 為：{5566NO1}

## 第三關

網址：`https://lidemy-http-challenge.herokuapp.com/lv3?token={5566NO1}`

> ...想要優先==上架==。==書名是《大腦喜歡這樣學》==，==ISBN 為 9789863594475==。...新增完之後幫我把書籍的 id 用 GET 告訴我。

攻略：使用 Postman ，新增 POST 頁籤，網址輸入 `https://lidemy-http-challenge.herokuapp.com/api/books`，確認 Header 中的 Content-Type 為 application/x-www-form-urlencoded，在 body 欄位中，選擇 x-www-form-urlencoded 將書籍資訊輸入至 key 與 value，送出，獲得 id: [[1989]]

![](https://i.imgur.com/1UMantL.png)
![](https://i.imgur.com/T5cU5yD.png)

輸入網址`https://lidemy-http-challenge.herokuapp.com/lv3?token={5566NO1}&id=1989`

> 謝謝！下一關的 token 為 {LEarnHOWtoLeArn}

<hr>

## 第四關

網址`https://lidemy-http-challenge.herokuapp.com/lv4?token={LEarnHOWtoLeArn}`

> 我記得我想找的那本書，書名有：「世界」兩字，而且是村上春樹寫的，可以幫我找到書的 id 並傳給我嗎？

攻略：使用 [📗 道具：圖書館資訊系統 API 文件](https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba) 的 GET 方法，得到所有書籍資訊，查找相關資料：

```json
{
"id": 79,
"name": "世界末日與冷酷異境",
"author": "村上春樹",
"ISBN": "9571313408"
},
```

輸入網址 `https://lidemy-http-challenge.herokuapp.com/lv4?token={LEarnHOWtoLeArn}&id=79`

> 就是這本！下一關的 token 為 {HarukiMurakami}

<hr>

## 第五關

網址`https://lidemy-http-challenge.herokuapp.com/lv5?token={HarukiMurakami}`

> ...這本書從系統裡面刪掉才行。
> 那本書的 id 是 23，你可以幫我刪掉嗎？

```json
{
"id": 23,
"name": "鄭家純 2018泰國個人寫真書",
"author": "鄭家純",
"ISBN": "4717480186860"
},
```

攻略：參考 [📗 道具：圖書館資訊系統 API 文件](https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba) 的 DELETE 方法，使用 Postman 將 Method 設為 DEETE，網址 `https://lidemy-http-challenge.herokuapp.com/api/books/23`，送出：

![](https://i.imgur.com/ZXULt4w.png)

<hr>

## 第六關

網址`https://lidemy-http-challenge.herokuapp.com/lv6?token={CHICKENCUTLET}`

> 照理來說要進入系統應該要先登入才對，怎麼沒有登入就可以新增刪除...
> ...這邊是帳號密碼，你先登入試試看吧，可以呼叫一個 /me 的 endpoint，裡面會給你一個 email。
> 把 email 放在 query string 上面帶過來，我看看是不是對的。
> 帳號：admin
> 密碼：admin123
> 獲得[📕 道具：圖書館資訊系統 API v2](https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a)

攻略：閱讀 [📕 道具：圖書館資訊系統 API v2](https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a) 說明文字，其中有提示==可查詢關鍵字 http basic authorization==。使用 Postman 打開 Authorization 頁籤，Type 選擇 Basic Auth，再輸入帳號密碼：

![](https://i.imgur.com/I38OxPm.png)

輸入網址`https://lidemy-http-challenge.herokuapp.com/lv6?token={CHICKENCUTLET}&email=lib@lidemy.com`

> 下一關的 token 為 {SECurityIsImPORTant}

<hr>

## 第七關

網址`https://lidemy-http-challenge.herokuapp.com/lv7?token={SECurityIsImPORTant}`

> ...我們要把這本書從系統裡面刪掉，就拜託你了。書的 id 是 89。

```json
{
"id": 89,
"name": "跟著月亮走：韓國瑜的夜襲精神與奮進人生",
"author": "韓國瑜",
"ISBN": "9789571376882"
},
```

攻略：使用 [📕 道具：圖書館資訊系統 API v2](https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a) 的 DELETE 方法，設定 Postman：

![](https://i.imgur.com/0NyySA0.png)

<hr>

## 第八關

網址 `https://lidemy-http-challenge.herokuapp.com/lv8?token={HsifnAerok}`

> ...那本書的名字裡面有個「我」，作者的名字是四個字，key 錯的 ISBN 最後一碼為 7，只要把最後一碼改成 3 就行了。

```json
{
"id": 72,
"name": "日日好日：茶道教我的幸福15味【電影書腰版】",
"author": "森下典子",
"ISBN": "9981835427"
},
```

攻略：參考 [📕 道具：圖書館資訊系統 API v2](https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a) PATCH 方法，修改 Postman 設定送出：

![](https://i.imgur.com/2m8h8Hq.png)

<hr>

## 第九關

網址`https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}`

> API 文件裡面有個獲取系統資訊的 endpoint...
> 想要存取的話要符合兩個條件：1. 帶上一個 ==X-Library-Number== 的 header，我們圖書館的編號是 "20" 2. 伺服器會用 ==user agent== 檢查是否是從 IE6 送出的 Request，不是的話會擋掉。順利拿到系統資訊之後應該會有個叫做 version 的欄位，把裡面的值放在 query string 給我吧。

攻略：參考 [📕 道具：圖書館資訊系統 API v2](https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a) 資訊，設定 Postman Header，特別的是，User-Agent 要帶入 IE6 的識別碼 `Mozilla/4.0 (compatible; U; MSIE 6.0; Windows NT 5.1)`

參考資料:[介紹好用網站：UserAgentString.com](https://blog.miniasp.com/post/2009/12/03/Useful-website-UserAgentString)

![](https://i.imgur.com/ZqO3FXp.png)

網址輸入 `https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}&version=1A4938Jl7`

> 下一關的 token 為 {duZDsG3tvoA}

<hr>

## 第十關

> 時間過得真快啊，今天是你在這邊幫忙的最後一天了。
> 我們來玩個遊戲吧？你有玩過猜數字嗎？
> 出題者會出一個四位數不重複的數字，例如說 9487。
> 你如果猜 9876，我會跟你說 1A2B，1A 代表 9 位置對數字也對，2B 代表 8 跟 7 你猜對了但位置錯了。
> 開始吧，把你要猜的數字放在 query string 用 num 當作 key 傳給我。

輸入`https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}&num=9613`

> The End，恭喜破關！
> 附註：
> 原本遊戲只規劃到這邊，第十關就是最後一關。
> 後來我有加了一些新關卡但難度較高，如果你還想挑戰看看，下一關的 token 為 {IhateCORS}

<hr>

## 第十一關

> 這次我們接到一個新的任務，要跟在菲律賓的一個中文圖書館資訊系統做串連
> 這邊是他們的 API 文件，你之後一定會用到...現在就讓我們先跟他們打個招呼吧...
> 獲得[📘 道具：跨國圖書館資訊系統 API v3](https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4)

錯誤提示
![](https://i.imgur.com/JrEX2zZ.png)

攻略：在 Postman Headers 設定 Origin 為 lidemy.com

![](https://i.imgur.com/j31GEhA.png)

Origin 屬性為：「發起一個針對 跨來源資源共享 的請求（要求伺服器在回應中加入一個『存取控制-允許來源』（'Access-Control-Allow-Origin'）欄位）」

參考來源：[HTTP 頭欄位](https://zh.wikipedia.org/wiki/HTTP%E5%A4%B4%E5%AD%97%E6%AE%B5)

<hr>

## 第十二關

網址 `https://lidemy-http-challenge.herokuapp.com/lv12?token={r3d1r3c7}`

> 現在請你幫我把運送要用的 token 給拿回來吧，要有這個 token 我們才能繼續往下一步走

攻略：參考 [📘 道具：跨國圖書館資訊系統 API v3](https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4)，將 Postman 設定 GET 方法，網址使用 `/deliver_token` ，觀察 Postman 的 console，會發現請求該網址自動跳轉兩次，第三次才顯示出回應的提示文字。

![](https://i.imgur.com/43rxIcp.png)

因為 Postman 能顯示的資訊不夠豐富，我們在瀏覽器再請求一次 `/deliver_token`

![](https://i.imgur.com/D12t39h.png)

打開 DevTool，在 Network 的 Headers 中可以找到 `X-Lv13-Token:{qspyz}`

## 第十三關

網址 `https://lidemy-http-challenge.herokuapp.com/lv13?token={qspyz}`

> ...不知道為什麼有時候會傳送失敗，他們叫我們自己去拿 log 來看，你可以幫我去看看嗎？從系統日誌裡面應該可以找到一些端倪

攻略：參考 [📘 道具：跨國圖書館資訊系統 API v3](https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4) 在 Postman 使用 GET 方法獲取 /logs 資源，會得到：

![[Pasted image.png]]

Postman 右上角版手 Settings 打開，點選 Proxy 頁籤，勾選 `Add a custom proxy configuration` 其他都取消，在 Proxy Server 輸入找到的菲律賓代理伺服器 IP 與 Port，我使用在[這裡找到的資訊](http://www.aliveproxy.com/proxy-list/proxies.aspx/Philippines-ph) IP:Port `122.55.250.90:8080`

![](https://i.imgur.com/WHPyLaq.png)

送出請求，等待數秒，得到結果：

![](https://i.imgur.com/AV7vvPd.png)

參考資料：

- [Using a proxy](https://learning.postman.com/docs/sending-requests/capturing-request-data/proxy/)
- [How do I configure Postman to work through a proxy?](https://support.getpostman.com/hc/en-us/articles/360008893713-How-do-I-configure-Postman-to-work-through-a-proxy-)

<hr>

## 第十四關

網址 `https://lidemy-http-challenge.herokuapp.com/lv14?token={SEOisHard}`

> ...那邊的首頁內容到底是怎麼做的
> 為什麼用 Google 一搜尋關鍵字就可以排在第一頁，真是太不合理了...

攻略：參考 [📘 道具：跨國圖書館資訊系統 API v3](https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4) 在 Postman 設定 GET 方法獲取 /index 資源，會得到一個平凡無奇的網頁

![](https://i.imgur.com/YOBiyT2.png)

將 Postman Headers 設定自訂 User-Agant 為 Google 爬蟲機器人 `Googlebot/2.1 (+http://www.google.com/bot.html)` 就能看見另一種頁面：

![](https://i.imgur.com/ayW2u4o.png)

<hr>

## 第十五關

網址`https://lidemy-http-challenge.herokuapp.com/lv15?token={ILOVELIdemy!!!}`

> The End，恭喜破關！

<hr>
