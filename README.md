# K-PULSE — K-pop / JYP 藝人示範網站

這是一個基礎的靜態範例，作為您提供的設計藍本（K-PULSE）之實作起點。包含：日/夜模式切換、響應式導覽、偶像總覽頁與示意圖。

如何在本機查看：
1. 開啟檔案總管，進入 `c:\Users\wlili\Desktop\網頁前端\k-pulse`。
2. 以瀏覽器開啟 `index.html`（雙擊或右鍵 -> 在瀏覽器中開啟）。

圖片優化與 srcset 流程：
1. 將官方原始圖片放入 `images/originals/`，檔名建議使用小寫且不含空白，例如 `twice.jpg`、`straykids.png`。
2. 確保本機已安裝 Node.js (14+)。在專案根目錄執行：

```powershell
npm install
npm run optimize-images
```

3. 執行後會在 `images/optimized/` 產生多個尺寸的 JPEG 與 WEBP，可直接在 HTML 中使用 `<picture>` 與 `srcset`（範例已在 `index.html` 與 `idols.html` 中示範）。

註：優化腳本使用 `sharp`，會對來源圖片產生不同寬度（400/800/1200/1600/2000）與 webp 版本；上線前可視需要調整品質參數。

後續建議：
- 取得官方授權之高清圖片並替換 `images/` 中的示意圖。
- 增加個別藝人詳細頁（ex: `twice.html`）。
- 加入 SEO meta、文章系統或 CMS 作為內容管理。