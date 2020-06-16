## 跟你朋友介紹 Git

#### 📦 一句話解釋這個技術？

🔖 以[標記法 (Notation)](https://zh.wikipedia.org/wiki/%E6%A0%87%E8%AE%B0%E6%B3%95) 為概念追蹤程式工程變動過程的版本控制系統。

#### 📦 這個技術的歷史成因？

林納斯・托瓦茲 (Linus Torvalds) (Linux 核心作者之一, 1969—) 於 2005 (金馬獎最佳劇情片《功夫》、李安憑《斷背山》獲得最佳導演) 年時，為了更好管理 Linux 核心原始碼，在比較當時各大版本控制系統後，決定自行開發新系統。

當時的版本控制系統，幾乎都有隨著專案越大，版本控制檔案本身也一齊長大，最後成為難以追蹤維護的龐大資料。

<div style="background-color:#f0f0f0; font-size:12px;padding:18px 20px;">
<b style="text-align:center;"><h>軼聞：林納斯與不開放原始碼的微軟</b>

<small>—— 引用此段是為了理解軟體工程師文化 ——</small>

一封回應微軟資深副總裁克瑞格・蒙迪 (Craig James Mundie) 批評開放原始碼運動破壞了智慧財產權的電子郵件中，托瓦茲寫道：「我不知道蒙迪是否聽說過艾薩克・牛頓爵士？他不僅因為創立了經典物理學而出名，也還因為說過這樣一句話而聞名於世：『我之所以能夠看得更遠，是因為我站在巨人肩膀上的緣故。』」托瓦茲又說道：「我寧願聽牛頓的也不願聽蒙迪的。他（牛頓）雖然死了快 300 年了，卻也沒有讓房間這樣地臭氣熏天。」

2012 年，托瓦茲在出席芬蘭的阿爾託大學所主辦的一次活動時稱 Nvidia 是他所接觸過的「最爛的公司」（the worst company）和 「最麻煩的公司」（the worst trouble spot），因為 Nvidia 一直沒有針對 Linux 平台發佈任何官方的 Optimus 支援，隨後托瓦茲當眾對著鏡頭豎起了中指，說「 Nvidia，操你的! 」（So, Nvidia, fuck you!）。

<a href="https://zh.wikipedia.org/wiki/%E6%9E%97%E7%BA%B3%E6%96%AF%C2%B7%E6%89%98%E7%93%A6%E5%85%B9">(來源自維基)</a>

</div>
<br/>

但在 2014 年，微軟內部改變態度，準備擁抱開放原始碼。當年執行長從史蒂芬・巴爾默 (Steve Ballmer) 換成薩蒂亞・納德拉 (Satya Nadella)，經濟管理專業換為電腦科學與商管專業（好像看得出為什麼了）。微軟於 2018 年加入開放原始碼組織 OIN (Open Ivention Network)，釋出 60,000 項專利，同年收購 GitHub ，引起一陣逃難潮。2020 年，GitHub 宣布收購 NPM。

Nvidia 現在也是最潮的公司之一，不僅遊戲玩家、平面設計師、影像工作者一人一片或數片他們的顯示卡，其 CUDA (統一計算架構，Compute Unified Device Archetecture) 將處理器串通為執行緒，解決資料密集計算（還不太了解這什麼，但有開 CUDA 算影像真的快很多）Adobe 也是完全支援 (支援年份待考)。

#### 📦 這個技術的設計概念？

好了，離題超遠。

##### Git 技術有以下設計理念：

- 高度支持非線性開發 (Strong support for non-linear development)
- 分散式開發 (Distributed development)
- 有效率地處理大型專案 (Efficient handling of large projects)
- 歷史訊息加密認證 (Cryptographic authentication of history)
- 可擴充性設計 (Toolkit-based design)
- 插件整合 (Pluggable merge strategies)
- 垃圾回收 (Garbage accumulates until collected)
- 定期壓縮物件資料 (Periodic explicit object packing)

##### 我如何解釋 Git 的設計概念？

Git 最重要的概念就是它「追蹤檔案變動」而不是把檔案的每一次變動備份起來。

沒有備份每個一階段！因此專案不會隨著檔案擴張，而等比擴張。

「追蹤變動」這個概念，更像是替變動過程加上一系列標籤，在《為你自己學 Git》中，非常貼切以「貼貼紙」為比喻。

如果要視覺化的展示概念，可以用 Mac Finder 的標記功能演示。

**尚未初始化 Git 的狀態 (未 `git init`)**
![](https://i.imgur.com/3PrExCE.png)

---

**Git 初始化，在專案資料夾中開啟追蹤功能**

綠色標記代表這三個檔案都已經追蹤，Git 會給它們一個標籤名叫做 master
![](https://i.imgur.com/13AWAnV.png)

---

**更動其中的檔案，存檔，告知 Git (`git commit`)**

黃色標記代表這次更動的標籤紀錄，所有檔案仍與 master 標籤相關。
![](https://i.imgur.com/OTKOPmt.png)

---

**開啟新分支，移動到該分支，更動檔案，存檔，告知 Git**

紫色標記代表這兩個檔案與新分支有關，所有檔案仍與 master 標籤相關。
![](https://i.imgur.com/ZhSP7MM.png)

---

**切換回沒有開新分支前的狀態（切換回 master ）**

灰色代表該標籤紀錄存在於新分支(紫色)出現以後，在 master 上，新分支所撰寫的內容不顯示且不運作。

![](https://i.imgur.com/nSABhII.png)

---

**合併新分支的更動到 master**

紅色標記代表所有檔案再次整合在同一個起跑點上，且所有新內容都顯示且能運作。
![](https://i.imgur.com/Q3o58tf.png)

---

**這些標記行為都紀錄在隱藏的 .git 檔案夾中**

![](https://i.imgur.com/eYm2ntU.png)

---

#### 📦 這個技術的語言構成？

![](https://i.imgur.com/qwMbqcv.png)

#### ✏️ 回到菜哥問題

首先，請菜哥用終端機前往存放笑話文字檔的資料夾中，例如：

```zsh
[~/笑話集]
```

接著初始化 Git

```zsh
$ git init
```

這樣 Git 就準備好幫菜哥追蹤笑話檔案的變動了

##### 1. 新增/修改笑話後，要告訴 Git

當菜哥新增笑話檔案或修改笑話檔案後，要通知 Git 檔案有更新，請幫我記錄一下，使用以下指令：

```zsh
$ git add . //將所有變動加入 Git 的暫存倉庫
```

```zsh
$ git commit -m "備忘筆記" //將暫存倉庫中的檔案確定提交給 Git 做紀錄，並留下自己的備忘文字
```

這樣菜哥在自己的電腦，就有笑話集的版本紀錄了。

##### 2. 如果菜哥很潮有 GitHub 帳號，想要開源自己的笑話給全世界看

首先在 GitHub 上開啟新的倉庫，設定菜哥電腦中的笑話資料夾連線到 GitHub 上的倉庫

```zsh
$ git remote add origin <GitHub倉庫網址>
```

接著將目前的紀錄傳送給 GitHub，異地保留一份

```zsh
$ git push origin master
```

只要菜哥有做這些動作，就不怕自己寫笑話的電腦被偷或燒毀，因為只要 GitHub 沒有倒閉，菜哥都可以把曾經上傳過的笑話再下載回自己的電腦

```zsh
$ git pull origin master
```

其他自己研究吧

<div style="background-color:#e1ffdb; font-size:12px;padding:2px 20px;">
<h3>🎉 這樣就完成了！</h3>
</div>
