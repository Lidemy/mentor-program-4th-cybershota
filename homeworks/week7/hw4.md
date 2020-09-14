## 什麼是 DOM？

DOM 是由瀏覽器解析 HTML 或 XML 文件所生成的物件導向結構模型，轉譯的結果可稱為 DOM Tree，結合 CSS 文件生成的 CSSOM 成為 Render Tree （轉譯樹），作為繪製盒模型前的預備資料。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

事件傳遞的順序由從 Window 底下的 Document 開始，依序由捕獲階段（Capture）-> 事件目標（Target）-> 冒泡階段（Bubble）再回到 Document 及 Window。

至於為什麼要這樣設計呢？理由可能會瞎爆眼：

> 在過去糟糕的日子裡，瀏覽器的兼容性比現在要小得多，Netscape（網景）只使用事件捕獲，而 Internet Explorer 只使用事件冒泡。當 W3C 決定嘗試規範這些行為並達成共識時，他們最終得到了包括這兩種情況（捕捉和冒泡）的系統，最終被應用在現在瀏覽器裡。

[來源:MDN 事件介紹](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)

總之就是兩個世界的合併，成為我們現在使用的事件處理機制，也像《天能》，由事件目標觀測，捕獲是線性時間，往前前往目標事件，冒泡是逆轉時間，逐漸遠離目標事件。而事件本身沒有捕獲或冒泡的區別，所以會因為程式碼放置的位置不同，而先顯示不同的階段。

## 什麼是 event delegation，為什麼我們需要它？

事件代理（event delegation）就是個處理多樣事件的櫃臺。受惠於事件捕獲和冒泡的原則，我們可以在預期觸發事件目標的父層元素，掛載監聽與處理邏輯，父層接收到捕獲或冒泡階段時，分發事件給真正要被觸發的子元素。如此可以減少對可能數量龐大且相似的子元素，一一掛載監聽，同時精簡程式內容的撰寫。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

`event.preventDefault()` 是防止 HTML 標籤或  屬性標籤預設的行為，例如，`<Button>` 標籤的 `type="submit"` 屬性會送出表單，重新整理網頁。如果在撰寫 JavaScript 事件客製邏輯時，沒有加上 `event.preventDefault()`，客製事件可能無法如預期運作。取消預設行為不會取消事件傳遞。

`event.stopPropagation()` 會停止傳遞事件給下一個節點，看這段程式碼是塞在捕獲還是冒泡階段，都會停止傳遞事件給下/上一個層級。`event.stopImmediatePropagation()` 會直接「扼殺」事件傳遞，連同一個層級的節點（例如一個元素上的多重監聽）上的監聽器也不會接收到事件的傳遞。
