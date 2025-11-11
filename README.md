# K-PULSE — JYP 娛樂與 K-pop 文化網站

一個完整的響應式靜態網站,展示 JYP 娛樂旗下所有團體與 K-pop 文化內容。

## ✨ 主要特色

- 🎨 **響應式設計** - 完美適配手機、平板、桌面裝置
- 🌓 **深色/淺色模式** - 自動儲存用戶偏好
- 🔍 **搜尋功能** - 快速找到團體和成員資訊
- 📱 **社交媒體整合** - 連結 JYP 官方社交平台
- ♿ **無障礙設計** - 符合 ARIA 標準
- 🚀 **SEO 優化** - 包含 sitemap.xml 與 robots.txt

## 📁 專案結構

```
k-pulse/
├── index.html              # 首頁
├── idols.html             # JYP 偶像總覽
├── hallyu.html            # 韓流文化探討
├── about.html             # 關於我們 + 聯絡表單
├── 404.html               # 自訂錯誤頁面
├── [11 個團體頁面].html   # TWICE, Stray Kids, ITZY 等
├── css/
│   └── styles.css         # 主要樣式表 (1300+ 行)
├── js/
│   ├── script.js          # 主要功能
│   └── features.js        # 輪播與搜尋功能
├── images/
│   ├── group-icons/       # 團體圖示
│   ├── optimized/         # 優化後的成員照片
│   └── originals/         # 原始照片備份
├── sitemap.xml            # SEO 站點地圖
└── robots.txt             # 搜尋引擎規則
```

## 🚀 快速開始

### 本機查看

1. 開啟終端機,進入專案目錄:
```powershell
cd c:\Users\wlili\Desktop\網頁前端\k-pulse
```

2. 使用內建伺服器:
```powershell
.\start-server.ps1
```

3. 瀏覽器開啟 `http://localhost:8000`

### 圖片優化

將新圖片放入 `images/originals/`,然後執行:

```powershell
npm install
npm run optimize-images
```

會自動生成多種尺寸的 JPEG 與 WebP 格式。

## 📄 頁面列表

### 主要頁面
- **首頁** (`index.html`) - 團體展示、統計資料、輪播圖
- **JYP 偶像** (`idols.html`) - 所有團體成員詳細資訊
- **韓流探討** (`hallyu.html`) - K-pop 文化深度分析
- **關於我們** (`about.html`) - 網站介紹與聯絡表單

### 團體頁面 (11 個)
- ONE Label: TWICE, Stray Kids
- BLU:M: ITZY, NMIXX
- STRIDE: KickFlip
- SQU4D: 2PM
- Studio J: DAY6, Xdinary Heroes
- 海外團體: NiziU, NEXZ, VCHA

## 🛠️ 技術棧

- **HTML5** - 語義化標籤
- **CSS3** - Custom Properties, Grid, Flexbox
- **JavaScript (ES6+)** - Vanilla JS, 無框架依賴
- **Sharp** - 圖片優化工具

## 📱 功能特色

### 🎯 核心功能
✅ 輪播圖自動播放 (5秒切換)  
✅ 團體/成員即時搜尋  
✅ 回到頂部按鈕 (滾動顯示)  
✅ 聯絡表單驗證  
✅ 深色模式持久化  

### 🎨 UI/UX
✅ 載入動畫 (Intersection Observer)  
✅ Hover 懸停效果  
✅ 平滑滾動  
✅ 觸控手勢支援 (輪播圖)  
✅ 鍵盤導航  

## 🔧 開發建議

- 圖片需符合版權規範,建議使用官方授權素材
- 聯絡表單目前為展示版,實際使用需串接後端 API
- 可透過 GitHub Pages 或 Netlify 免費部署
- 建議配置 HTTPS 憑證

## 📝 授權聲明

本專案為教育展示用途。所有 JYP 娛樂相關內容、商標、圖片版權歸原公司所有。

---

**最後更新**: 2025-01-15  
**版本**: 2.0