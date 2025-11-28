# Cloudflare Pages 部署檢查清單

## ✅ 部署前檢查

- [x] 所有 HTML 檔案編碼正確（UTF-8）
- [x] 手機版響應式設計已優化
- [x] 防止水平滾動已設定
- [x] Viewport meta tag 已更新
- [x] 圖片已優化
- [x] CSS/JS 檔案完整
- [x] Spotify 嵌入正常運作
- [x] 翻譯功能已實現
- [x] 404 頁面已設定
- [x] robots.txt 已配置
- [x] sitemap.xml 已配置

## 📋 需要的檔案

### Cloudflare Pages 配置
- [x] `_headers` - HTTP 標頭和快取設定
- [x] `_redirects` - URL 重定向規則

### 必要檔案
- [x] `index.html` - 首頁
- [x] `idols.html` - 偶像總覽
- [x] `music.html` - 音樂播放器
- [x] `stats.html` - 統計數據
- [x] `hallyu.html` - 韓流探討
- [x] `about.html` - 關於我們
- [x] `404.html` - 錯誤頁面
- [x] 11 個團體頁面

### 資源檔案
- [x] `/css/styles.css` - 樣式表
- [x] `/js/` - JavaScript 檔案
- [x] `/images/` - 圖片資源

## 🚀 部署步驟

1. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "Ready for Cloudflare Pages"
   git push origin main
   ```

2. **連接 Cloudflare Pages**
   - 前往：https://dash.cloudflare.com/
   - 選擇 Pages > Create a project
   - 連接 GitHub repository: K-pulse

3. **建置設定**
   - Framework preset: None
   - Build command: (留空)
   - Build output directory: `/`
   - Root directory: (留空)

4. **部署**
   - 點擊 "Save and Deploy"
   - 等待部署完成（約 1-2 分鐘）

## 📝 部署後

- [ ] 測試首頁載入
- [ ] 測試所有內部連結
- [ ] 測試手機版顯示
- [ ] 測試語言切換
- [ ] 測試 Spotify 播放器
- [ ] 測試圖片載入
- [ ] 檢查 404 頁面

## 🌐 預期網址

Production: `https://k-pulse.pages.dev`

## 💡 提示

- Cloudflare Pages 會自動偵測 `_headers` 和 `_redirects`
- 每次推送會自動重新部署
- 可在 Cloudflare 控制台查看部署日誌
- 支援自訂域名（需要 DNS 設定）

## 🔄 更新網站

之後要更新網站，只需要：
```bash
git add .
git commit -m "Update content"
git push origin main
```

Cloudflare Pages 會自動重新部署！
