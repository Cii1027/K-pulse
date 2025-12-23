// 站內 API 端點（Cloudflare Pages Functions）
const CONTACT_API_URL = '/api/contact';

// 初始化表單處理
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
});

// 處理表單提交
async function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.textContent;
  
  // 獲取表單資料
  const formData = {
    timestamp: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    subject: form.subject.value,
    message: form.message.value.trim()
  };
  
  // 驗證表單
  if (!validateForm(formData)) {
    return;
  }
  
  // 禁用提交按鈕並顯示載入狀態
  submitBtn.disabled = true;
  submitBtn.textContent = '傳送中...';
  submitBtn.classList.add('loading');
  
  try {
    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    const response = await fetch(CONTACT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({ ok: false }));
    if (!response.ok || !data.ok) {
      const msg = data.error || '傳送失敗，請稍後再試';
      throw new Error(msg);
    }

    showMessage('success', '訊息已成功送出！我們會盡快回覆您。');
    form.reset();
  } catch (error) {
    console.error('表單提交錯誤:', error);
    showMessage('error', '抱歉，訊息傳送失敗。請稍後再試或直接寄信至 contact@k-pulse.com');
  } finally {
    // 恢復按鈕狀態
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
    submitBtn.classList.remove('loading');
  }
}

// 驗證表單資料
function validateForm(data) {
  // 驗證姓名
  if (data.name.length < 2) {
    showMessage('error', '請輸入有效的姓名（至少2個字元）');
    return false;
  }
  
  // 驗證電子郵件
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    showMessage('error', '請輸入有效的電子郵件地址');
    return false;
  }
  
  // 驗證主旨
  if (!data.subject) {
    showMessage('error', '請選擇主旨');
    return false;
  }
  
  // 驗證訊息內容
  if (data.message.length < 10) {
    showMessage('error', '訊息內容至少需要10個字元');
    return false;
  }
  
  return true;
}

// 顯示訊息提示
function showMessage(type, message) {
  // 移除現有的訊息提示
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // 建立新的訊息提示
  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message form-message-${type}`;
  messageDiv.innerHTML = `
    <span class="message-icon">${type === 'success' ? '✓' : '✕'}</span>
    <span class="message-text">${message}</span>
  `;
  
  // 插入訊息提示
  const form = document.getElementById('contactForm');
  form.insertAdjacentElement('beforebegin', messageDiv);
  
  // 滾動到訊息位置
  messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  // 3秒後自動移除成功訊息
  if (type === 'success') {
    setTimeout(() => {
      messageDiv.classList.add('fade-out');
      setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
  }
}

// （已移除測試功能）
