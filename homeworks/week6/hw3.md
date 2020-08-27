## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

### 1. `<sub>` & `<sup>`

- `<sub>` 是下標 subscript
- `<sup>` 是上標 superscript

使用情境：適合用在新拖延運動報名表單的 \* 號上

### 2. `<wbr>`

- `<wbr>` 提供長文字串斷點 Word Break Opportunity

使用情境：適合用在咬一口廚房，當輕食之風盛起的簡介文字，讓文案斷點更符合設計。

### 3. `<base>`

- `<base>` 要寫在 `<head>` 中，在 `<link>` 之前，可以使用 `<base>` 定義網頁基礎 URL ，和連結默認的開啟方式

```html
<head>
  <base href="/" target="_blank" />
</head>
```

疑問：聽聞 `<a>` 如果是 `target="_blank"` 要加上 `rel=noopener noreferrer` 來防止惡意導向，不知道這個屬性是不是可以直接加在 `<base>` 上...

## 請問什麼是盒模型（box model）

#### 生成

當代瀏覽器載入 HTML 後，經過解析，生成 DOM Tree，同時也載入 CSS 檔案，生成 CSSOM Tree，在合併這兩顆樹之前，瀏覽器會先剔除不會顯示的標籤（如 `meta`）與被隱藏的標籤(如 `display:none`)，最終結合這兩個物件，形成轉譯樹結構（Render tree）。

轉譯樹結構乘載了 HTML 文檔裡提供給人類閱讀的資訊，以及 CSS 文檔中規範的樣式，此時仍是記憶體中儲存的資料，尚未顯示在使用者眼前。

接著進入排版（Layout）階段，瀏覽器遍歷轉譯樹，將每個節點計算出幾何形狀，形成盒模型。

盒模型像是俄羅斯娃娃，盒中有盒，而整個可視元素都裝在最大的盒子裡。

依目標「檢視區」（Viewport）尺寸，轉譯樹的盒模型進入繪製（Paint）階段，將虛擬單位 px 透過測角公式換算為實際螢幕像素 pixel，最終顯示在使用者眼前。

#### 運用

如果 HTML 文檔沒有撰寫任何 CSS 規則，瀏覽器仍會套用預設的 CSS 規範（user agent stylesheet）形成盒模型，來達到基本的閱讀體驗。

盒模型就是柵格設計（[Grid](<https://en.wikipedia.org/wiki/Grid_(graphic_design)>), 平面設計用語）的瀏覽器實作版。盒模型由外而內提供 margin(外距)、border（框線）、padding（內距）、content(內容) 屬性以供設計師調整網頁各區塊的大小樣式，以製作風格多變的網頁設計。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

#### `display: inline`

行內顯示模式，以 content 本身寬高為依據，高度的 margin 沒有效果。

#### `display: block`

區塊顯示模式，預設會用右側 margin 佔滿容器寬度，形成換行效果。

#### `display:inline-block`

行內區塊顯示模式，不會預設用 margin 佔滿容器寬度，形成不換行、水平排列，可設置高度的 margin。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

#### `position: static`

以預設值定位，元素排列依照預設排版流配置。

#### `position: relative`

以相對位置定位，元素的原始位置保留，但元素本身可以設定位移，形成替身攻擊。
因為該元素原始位置仍然佔有一席之地，在它之後的元素不會產生列王的紛爭。

#### `position: absolute`

以絕對位置定位，這個名稱容易造成誤會。其實它是以在它之前，找到的第一個非 static 排列的元素為依據，就像個寄生蟲，吸附該元素的位置，讓自己在其中可以自由移動。

它最常搭配的對象就是 `position: relative`

#### `position: fixed`

以固定位置定位，元素以瀏覽器視窗為唯一依據，不受其他元素影響，因為瀏覽器在每一刻時間只有一種尺寸，形成固定在頁面上的效果。
