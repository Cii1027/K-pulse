// 日/夜模式切換與儲存
(function(){
  const THEME_KEY = 'kpulse-theme';
  const html = document.documentElement;
  const toggleButtons = Array.from(document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3, #theme-toggle-hallyu'));

  function applyTheme(theme){
    html.setAttribute('data-theme', theme);
  }

  function loadTheme(){
    try{
      const t = localStorage.getItem(THEME_KEY) || 'light';
      applyTheme(t);
    }catch(e){
      applyTheme('light');
    }
  }

  function toggleTheme(){
    const currentTheme = html.getAttribute('data-theme');
    const next = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try{localStorage.setItem(THEME_KEY, next);}catch(e){}
  }

  // 綁定按鈕（若按鈕不存在也不會錯）
  toggleButtons.forEach(btn=>{
    if(!btn) return;
    btn.addEventListener('click', toggleTheme);
  });

  // 頁面載入時讀取
  loadTheme();
})();

// 返回頂部按鈕
(function(){
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  // 監聽滾動
  let scrollTimer = null;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }, 100);
  }, { passive: true });

  // 點擊回頂
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();

// 頁面載入動畫
(function(){
  document.addEventListener('DOMContentLoaded', () => {
    const mainSections = document.querySelectorAll('main > section, main > .container > section, .hero, .highlights, .idols-preview');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    mainSections.forEach(section => {
      observer.observe(section);
    });
  });
})();

// 聯絡表單處理
(function(){
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 獲取表單資料
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // 簡單驗證
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('請填寫所有必填欄位');
      return;
    }
    
    // Email 格式驗證
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('請輸入有效的電子郵件地址');
      return;
    }
    
    // 模擬表單提交 (實際使用時需要串接後端 API)
    console.log('表單資料:', formData);
    alert('感謝您的訊息!我們會盡快回覆您。\n\n(這是展示版本,實際使用時需串接後端服務)');
    contactForm.reset();
  });
})();
