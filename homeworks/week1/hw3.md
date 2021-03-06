## 教你朋友 CLI

### 📦 一句話解釋這個技術？

🔖 以鍵盤輸入操作電腦。

CLI 即為 Command Line Interface (命令列介面)，是以鍵盤輸入操作電腦的技術。例如：PTT、《駭客任務》演出的部分橋段、傳統 BIOS 應該也可以算一種。

![駭客任務電影截圖](https://miro.medium.com/max/2560/1*HN-ZLfIkKaTO6XWHRZFhAg.jpeg "駭客任務幻想畫面")

<small>這是看穿 CLI 的感覺</small>

與之相對的是 Graphical User Interface (圖形使用者介面)，以螢幕顯示各種圖像、按鈕，以滑鼠點擊螢幕圖像符號來操作電腦，形成學習曲線更低的使用者體驗。

如 1983 年蘋果電腦推出的全球首部搭載圖形使用者介面的個人電腦 [Apple Lisa](https://youtu.be/RW25-OuoFIk)。

![Apple Lisa](https://static.newmobilelife.com/wp-content/uploads/2017/12/lisa-os-will-be-open-sourcein-2018_00.jpg "Apple Lisa")

<small>潮聖</small>

### 📦 這個技術的歷史成因？

(尚未了解透徹，非常粗糙的解釋)

#### 摩斯密碼掰掰，我直接英打啦

在傳真機以前，電報普遍以後，大約是 1920 （一戰結束，納粹黨成立、中國共產黨成立、張愛玲出生）年代，電傳打字機 (Teleprinter) 是一種不需要學習摩斯密碼，只要會英文打字機的輸入法，就能將文字在依照博多碼在紙帶上鑿洞。發送員再將紙帶撕下，送進發報機，遠端的接收機收到博多碼，會再將密碼自動轉換為文字以供人類閱讀。當時這個技術比電報和電話更便宜且精確。

![電傳打字機與操作員](https://upload.wikimedia.org/wikipedia/commons/8/89/WACsOperateTeletype.jpg "電傳打字機與操作員")

<small>電傳打字機與操作員</small>

這是人與人之間的訊息傳遞，但人與計算機，一直到 1970 年代，經過了同樣的打洞紙帶、到磁帶，一直也沒有更直接且即時的互動方式，都需要準備好這些物件，送入計算機，才能開始計算工作。

#### 電視 + 計算機 = ? 沒那麼簡單

1930 年代的電視，已經能透過無線電波直播納粹德國的奧林匹克運動會。影像透過攝錄裝置從電纜連線到電視塔，再發送現場訊號給遠方的電視機，或是將影像紀錄在膠片上，經過沖洗顯像保存，待日後播映。當時並沒有同時拍攝膠卷且同時直播的技術。

電視本身只是顯示訊號，並沒有儲存資訊。電視「接收訊號且即時顯示」一直是計算機產業想借鏡使用的技術，但最大的困難在於「顯示且暫存階段狀態」。

#### 無法擺脫的儲存裝置

可以想像，當時送進計算機的紙帶與磁帶，應該就是霹哩啪拉（我亂用狀聲詞）的就運算完畢，人類輸出自己的指令想法，是記錄在另一台打字機械的紙帶上，再放進計算機，才能看到指令是否符合期待。

這種紙帶或紙卡，是「記憶體」的原型（當然更原始的狀態就是書或者石板，但我覺得這兩種形式可以說是記憶載體的終端，一本書或石板無法再放入一台機器解讀，只有受教育的人類大腦可以解析這種載體），促成了 IBM (1911) 的成立。而今在記憶體容量越來越大的時代，我們仍舊使用這樣的紙卡——紙筆測驗用的劃記卡。

![電晶體圖片](https://upload.wikimedia.org/wikipedia/commons/2/21/Transistorer_%28cropped%29.jpg "越來越小的電晶體")

<small>越來越小的電晶體</small>

#### The One 救世主 —— 積體電路 (1958)

前述說到「顯示且暫存階段狀態」，在當時的計算機不是沒有類似記憶體的裝置，重點在於「暫存空間不夠大」且該裝置實際上「有夠大」。沒有螢幕，計算機就不需要花費更多記憶體空間將編碼解析為人類語言，一但有了螢幕，想要更直接的操作計算機，計算計本身勢必要記住更多資訊才能編譯，即時顯示出來，怎麼可能讓計算機體積無限擴大？

1947 年貝爾實驗室推出電晶體計算機取代真空管技術。直到現在，我們仍然是使用電晶體作為電腦構成的主要技術。差別在，積體電路技術發明以前，計算機中的電晶體是手工組裝，而現在我們懂得將電晶體縮小，用機械縝密精細的排列電晶體，製造出更小，但運算能量更大的計算機。

（目前對這些材料科學超陌生，總之應該是這種意思）

#### 總結

Command Line Interface (命令行介面) 背後的歷史促成因子有三：

1. 電傳打字機（電報機進化版，更直覺使用）
2. 電視機 （能接收即時訊號，放映視覺畫面）
3. 積體電路 （讓運算單元電晶體擺脫手工藝，更小卻更大）

### 📦 這個技術的設計概念？

增進人與計算機溝通的效率，清除過去冗長的操作流程，讓人類直接以鍵盤輸入指令操作電腦，且獲得計算機立即的反饋。人類終於從面對白紙思考，到面對螢幕思考——且恐慌了。哈哈。

### 📦 這個技術的語言構成？

![](https://i.imgur.com/NiOHpW5.png)

### ✏️ 回到 h0w 哥問題

#### Command Line 怎麼用？

找出你電腦的終端機應用程式（Mac 命為終端機，Windows 為命令提示字元）網路上也有很多終端機軟體的選擇，我個人很喜歡直接用 VSCode 的終端機。~~請支援收銀~~ 請自行搜尋。

這邊就不試圖解釋一些歷史因果，總之，我們在命令行介面輸入的指令，會經過「殻層」(Shell) 解析器，解析我們輸入的指令後，才真正操作電腦的核心與硬體。

會取作殼，我猜是想指保護電腦核心的外層盔甲。

接著可以參考上述的指令大地圖。

#### 建立資料夾

<div style="background-color:#ffdbdb; font-size:12px;padding:18px 20px;">
🚨首先確認自己位在電腦的哪一個目錄中
</div>
<br/>

終端機 `$` 號前面代表現在位置
如是 `[~]` 代表位於根目錄的使用者目錄中，也可能顯示為 `[/Users/h0w/]`

如果什麼都沒顯示，可以用 `pwd` 確認自己在哪裡

##### 1. 前往你想要的目錄

使用 `cd` 指令前往你要建立新資料夾的地方。

例如使用**絕對路徑**放在 shiuemei 資料夾底下

```zsh
$ cd /Users/h0w/shiuemei/
```

或者使用**相對路徑**

使用相對路徑前，先查看目前目錄底下有哪些資料夾或檔案

```zsh
$ ls
```

再依照顯示的名稱，進入該資料夾

```zsh
$ cd shiuemei
```

##### 2. 創立新資料夾

進來欲創建新檔案的位置後，使用以下指令創建新的資料夾

```zsh
$ mkdir <folder-name>
```

所以想創建名為 "wifi" 的資料夾就這樣打

```zsh
$ mkdir wifi
```

#### 建立檔案

資料夾創好後，我們要把新建的檔案放進該資料夾中

##### 1. 進入 wifi 資料夾

```zsh
$ cd wifi
```

##### 2. 創建 afu.js 檔案

```zsh
$ touch afu.js
```

<div style="background-color:#e1ffdb; font-size:12px;padding:2px 20px;">
<h3>🎉 這樣就完成了！</h3>
</div>

#### ✏️ 幫 h0w 哥做好指令集

h0w 哥可以在想使用以上指令的資料夾中，執行 [h0w.sh](h0w.sh) (~~音量注意~~)就可以省去學習的麻煩。

```zsh
$ sh h0w.sh
```

### 🐙 GitHub CLI 玩什麼？

之前注意到 [GitHub 釋出 CLI Beta 版](https://cli.github.com/)，趁這個機會也來了解一下。

主要使用情境：

- 使用 CLI 創建 PR
- 查看 issues 狀態
- 過濾瀏覽 PR 與 issues ，自動開啟瀏覽器瀏覽

使用 `brew install github/gh/gh` 安裝完畢後，試著操作，會先跳出 `authentication required`登入授權就可使用。

用 `gh repo view` 來試試看

![](https://i.imgur.com/DWxF3bc.png)

哇賽，直接噴一堆字給我看哎（好興奮）

試試看用 `gh pr create`

![](https://i.imgur.com/t6rce9v.png)

喔喔，直接寫感覺好方便（趕緊取消）

GitHub CLI 文件蠻好讀，這次作業提交就試試看吧。
