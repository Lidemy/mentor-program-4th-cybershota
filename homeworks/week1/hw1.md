## 交作業流程

> 請用文字一步步敘述應該如何交作業。

### 🐣 初始化設定流程

##### 1. 註冊 GitHub 帳號

##### 2. 設定 GitHub Classroom

使用 `[MTRO4]程式導師實驗計畫：設定 GitHub 專案` 提供的網址，接受網址頁面顯示的邀請按鈕。按下後會拷貝一份原始課綱的 repository (後綴 GitHub 使用者帳號名稱）就可以在 [Lidemy 的 Github Organization](https://github.com/Lidemy) 看到自己的課綱複製品。

```
💡 延伸思考
所以對於 Lidemy Organization 來說，底下會誕生許多同學的課綱複製本，每個人自己一份所以不會互相衝突，而每次提交遠端 commit 都能在組織底下一覽無遺，方便批改。
```

##### 3. 在本機終端機下載複製的課綱

```zsh
$ git clone https://github.com/Lidemy/XXX.git
```

##### 4. 檢查一下下載後的檔案有無明顯問題，例如使用 `git status` 查看目前 git 狀態。無問題便完成了初始化設定。

### 🐥 持續交付作業流程

```
🚨永遠先檢查自己目前位在 git 的哪一條分支上頭，再進行操作。
```

##### 1. 如果目前分支為 `master`，先創建新的分支，以週次命名為佳，再切換至該分支。

創建分支

```zsh
$ git branch hw-week1
```

 切換分支

```zsh
$ git checkout hw-week1
```

創建分支同時切換分支 (組合技)

```zsh
$ git checkout -b hw-week1
```

##### 2. 開始寫作業

![](https://i.pinimg.com/originals/b5/2b/ce/b52bce6c50fd355d663bd667641a23a4.png)

##### 3. 寫完作業存檔後，將專案更動紀錄到 git 的暫存倉庫。( "." 號的意思是加入全部更動，除了 `.gitignore` 的除外)

```zsh
$ git add .
```

##### 4. 檢查 git 暫存倉庫的儲存是否正確

```zsh
$ git status
```

##### 5. 如果有想移除的檔案，可以使用以下功能移除暫存

```zsh
$ git restore --staged <檔案名稱>
```

##### 6. 本地端 commit 提交紀錄

```zsh
$ git commit -m "本次 commit 的備忘訊息"
```

```
💡 延伸思考
commit 附上的 message 非常重要，有助於未來瀏覽釐清本次提交紀錄的相關資訊，軟體界有相關約定俗成的規範如下：

- commit 的 Header 限 50 字元以內，祈使句，無時態，無句點
  - Header 首詞為 commit type 詞首大寫
  - commit type 大致有以下幾類
    - Feat: 新增功能
    - Fix: 修補 bug
    - Refactor: 重構
    ...
- commit 的 body 限72字內，依情況補充相關內容
```

📚 關於 commit 風格的相關閱讀

- [如何寫一個 Git Commit Message](https://blog.louie.lu/2017/03/21/%E5%A6%82%E4%BD%95%E5%AF%AB%E4%B8%80%E5%80%8B-git-commit-message/)
- [commit type 用的 gitmoji](https://gitmoji.carloscuesta.me/?fbclid=IwAR3CjfnbR-mMCRazbahx1bibl_-QIz4WZNYXGzDwVVpC599yRGpJnA2wcbg)

```
⚙️ 延伸操作
因為直接在 -m 寫完整的 commit message 不太容易，我目前設定如果只鍵入 git commit 會自動跳出 TextMate 這個文字編輯器，寫完存檔後再送出 commit
```

設定 git commit 跳出指定文字編輯器 (以 TextMate 為例)

```zsh
$ git config --global core.editor "mate -w"
```

📚 關於使用文字編輯器撰寫 commit message 的相關閱讀

- [Associating text editors with Git
  ](https://help.github.com/en/github/using-git/associating-text-editors-with-git#using-textmate-as-your-editor)

##### 7. 推送本地 commit 至遠端分支

```zsh
$ git push origin <分支名稱>
```

##### 8. PR (Pull Request) 請求批改

在 GitHub 上的 Lidemy 中，於自己的複製課綱裡，按下綠色 `Compare & pull request` 或 `New pull request` 按鈕，撰寫相關標題與敘述後， `Create pull request`，完成後等待批改。

```
💡 這裡其實就是等待他人 review 過後同意合併至主分支(master)
```

![](https://i.pinimg.com/originals/b5/2b/ce/b52bce6c50fd355d663bd667641a23a4.png)

##### 9. 前往 Lidemy 學習系統，登錄作業

在 Lidemy 學習系統中的`作業列表`，`新增作業`，填入相關資訊（注意 PR 連結網址中會有 pull），送出。

##### 10. 如作業通過審核，本地端與遠端同步

作業通過審核後，GitHub Lidemy 會顯示該分支已合併(Merged)，分支會被刪去。於本地端切換為主分支，拉取遠端更新，刪除本地端已提交作業的分支。

```zsh
$ git checkiut master
```

```zsh
$ git pull origin master
```

```zsh
$ git branch -d <分支名稱>
```

##### 🎉 完成一次作業提交
