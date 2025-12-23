# Google 試算表表單整合設定指南

## 步驟 1: 建立 Google 試算表

1. 前往 [Google Sheets](https://sheets.google.com)
2. 建立新試算表，命名為「K-PULSE 聯絡表單」
3. 在第一列建立欄位標題：
   - A1: 時間戳記
   - B1: 姓名
   - C1: 電子郵件
   - D1: 主旨
   - E1: 訊息內容

## 步驟 2: 建立 Google Apps Script

1. 在試算表中，點選「擴充功能」→「Apps Script」
2. 刪除預設代碼，貼上以下程式碼：

```javascript
// 設定試算表名稱
const SHEET_NAME = 'sheet1'; // 如果您的工作表名稱不同,請修改此處

function doPost(e) {
  try {
    // 開啟試算表
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // 解析 POST 資料
    const data = JSON.parse(e.postData.contents);
    
    // 建立新列資料
    const row = [
      data.timestamp || new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
      data.name || '',
      data.email || '',
      data.subject || '',
      data.message || ''
    ];
    
    // 將資料新增到試算表
    sheet.appendRow(row);
    
    // 回傳成功訊息
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'success', 'message': '資料已成功儲存' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // 記錄錯誤
    Logger.log('錯誤: ' + error.toString());
    
    // 回傳錯誤訊息
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 測試函數（選用）
function testPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        name: '測試使用者',
        email: 'test@example.com',
        subject: 'feedback',
        message: '這是一則測試訊息'
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

3. 儲存專案，命名為「K-PULSE Contact Form Handler」

## 步驟 3: 部署 Web App

1. 點擊「部署」→「新增部署作業」
2. 選擇類型：「網頁應用程式」
3. 設定：
   - **說明**：Contact Form Handler v1
   - **執行身分**：我
   - **具有存取權的使用者**：所有人
4. 點擊「部署」
5. 授權應用程式（首次部署時需要）
6. **複製 Web 應用程式 URL**（這個很重要！）

## 步驟 4: 更新網站程式碼

1. 開啟 `js/contact-form.js`
2. 找到第 2 行：
```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
```
3. 將 `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` 替換為您剛剛複製的 Web App URL

範例：
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxx.../exec';
```

## 步驟 5: 測試表單

1. 在瀏覽器中開啟 `about.html`
2. 填寫聯絡表單
3. 點擊「送出訊息」
4. 檢查 Google 試算表是否有新資料
5. 應該會看到成功訊息提示

## 疑難排解

### 問題 1: 表單提交後沒有資料出現在試算表

**解決方法：**
- 檢查 Web App URL 是否正確複製到 `contact-form.js`
- 確認 Apps Script 中的工作表名稱與實際名稱相符
- 在 Apps Script 編輯器中執行 `testPost()` 函數進行測試

### 問題 2: 授權問題

**解決方法：**
- 重新部署 Web App
- 確認「具有存取權的使用者」設定為「所有人」
- 嘗試使用無痕模式測試

### 問題 3: CORS 錯誤

**解決方法：**
- 這是正常的，因為使用了 `no-cors` 模式
- 只要資料有正確儲存到試算表就沒問題
- 可以在試算表中確認資料是否成功儲存

## 進階功能（選用）

### 1. 電子郵件通知

在 Apps Script 中新增此函數，當收到新表單時自動發送郵件通知：

```javascript
function sendEmailNotification(data) {
  const recipient = 'your-email@example.com'; // 您的郵件地址
  const subject = `K-PULSE 新表單：${data.subject}`;
  const body = `
收到新的聯絡表單訊息：

時間：${data.timestamp}
姓名：${data.name}
郵件：${data.email}
主旨：${data.subject}

訊息內容：
${data.message}

---
此訊息由 K-PULSE 聯絡表單自動產生
  `;
  
  MailApp.sendEmail(recipient, subject, body);
}
```

然後在 `doPost` 函數中的 `sheet.appendRow(row);` 之後新增：
```javascript
sendEmailNotification(data);
```

### 2. 資料驗證

在 Apps Script 中新增更嚴格的驗證：

```javascript
function validateData(data) {
  // 檢查必填欄位
  if (!data.name || !data.email || !data.subject || !data.message) {
    throw new Error('缺少必填欄位');
  }
  
  // 驗證電子郵件格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error('電子郵件格式不正確');
  }
  
  // 檢查訊息長度
  if (data.message.length < 10 || data.message.length > 5000) {
    throw new Error('訊息長度必須在 10-5000 字元之間');
  }
  
  return true;
}
```

在 `doPost` 中解析資料後立即呼叫：
```javascript
const data = JSON.parse(e.postData.contents);
validateData(data); // 新增這行
```

## 安全性建議

1. **定期檢查試算表**：確保沒有垃圾訊息或惡意內容
2. **限制訪問**：只授權必要的人員存取試算表
3. **備份資料**：定期匯出試算表資料作為備份
4. **監控用量**：注意 Google Apps Script 的配額限制

## 資料隱私

根據 GDPR 和個資法要求：
- 只收集必要的資訊
- 明確告知使用者資料用途（已在表單下方說明）
- 妥善保管收集到的個人資料
- 定期刪除過期或不必要的資料

---

## 完成！

設定完成後，您的聯絡表單就能將資料直接儲存到 Google 試算表了。每當有訪客提交表單，資料會自動新增到試算表中，方便您管理和回覆。

如有問題，請參考：
- [Google Apps Script 文件](https://developers.google.com/apps-script)
- [SpreadsheetApp 參考](https://developers.google.com/apps-script/reference/spreadsheet)
