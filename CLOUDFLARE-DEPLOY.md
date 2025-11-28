# Cloudflare Pages 部署指南

## 快速部署步驟

### 1. 準備 GitHub Repository
確保所有檔案已推送到 GitHub：
```bash
git add .
git commit -m "Prepare for Cloudflare Pages deployment"
git push origin main
```

### 2. 連接 Cloudflare Pages

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 點擊左側選單的 **Pages**
3. 點擊 **Create a project**
4. 選擇 **Connect to Git**
5. 授權 Cloudflare 存取你的 GitHub 帳號
6. 選擇 **K-pulse** repository

### 3. 配置建置設定

**重要：請完全按照以下設定**

**Framework preset**: `None`

**Build settings**:
- **Build command**: (留空，不要填寫任何內容)
- **Build output directory**: `/` (根目錄)
- **Root directory**: (留空)

**Environment variables**: (不需要設定)

**⚠️ 注意事項**：
- 不要選擇任何框架預設（如 React、Vue 等）
- Build command 必須留空，因為這是純靜態網站
- 如果看到自動偵測的設定，請手動改為以上設定

### 4. 部署

點擊 **Save and Deploy**

### 5. 自訂域名 (可選)

部署完成後：
1. 進入專案設定
2. 點擊 **Custom domains**
3. 新增你的域名
4. 依照指示更新 DNS 設定

## 檔案說明

- `_headers`: HTTP 安全標頭和快取設定
- `_redirects`: URL 重定向規則和 404 處理
- 所有 HTML/CSS/JS 檔案會自動部署

## 自動部署

每次推送到 `main` 分支時，Cloudflare Pages 會自動重新部署網站。

## 預覽網址

部署後會獲得一個網址：
- Production: `https://k-pulse.pages.dev`
- 每個 commit 都會有預覽網址

## 效能優化

Cloudflare Pages 提供：
- ✅ 全球 CDN
- ✅ 自動 HTTPS
- ✅ 無限流量
- ✅ 快速建置時間
- ✅ 自動快取優化

## 注意事項

1. 確保所有連結都是相對路徑或完整 URL
2. 圖片已經過優化（已完成）
3. CSS/JS 檔案已壓縮（已完成）
4. 確認 `robots.txt` 和 `sitemap.xml` 已更新

## 🔧 故障排除

### 錯誤：deploy command failed
如果看到以下錯誤：
```
error occurred while running deploy command
```

**解決方法**：
1. 在 Cloudflare Pages 設定中，確認：
   - Framework preset = `None`
   - Build command = **完全留空**（不要有任何字元）
   - Build output directory = `/`

2. 不要讓 Cloudflare 自動偵測框架
   - 手動選擇 "None" 或 "Static Site"
   
3. 如果已經創建專案但設定錯誤：
   - 進入專案 Settings
   - 找到 "Build & Development"
   - 修改為正確設定
   - 點擊 "Save"
   - 重新部署：Deployments > "Retry deployment"

### package.json 注意
專案中有 `package.json` 但這只用於本地圖片優化，**不需要在 Cloudflare Pages 執行**。確保 Build command 留空即可。
