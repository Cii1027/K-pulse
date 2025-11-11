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
  // 創建按鈕
  const backToTop = document.createElement('button');
  backToTop.id = 'back-to-top';
  backToTop.innerHTML = '↑';
  backToTop.setAttribute('aria-label', '返回頂部');
  document.body.appendChild(backToTop);

  // 監聽滾動
  let scrollTimer = null;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
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
    // 為主要內容區塊加入 fade-in 動畫
    const mainSections = document.querySelectorAll('main > section, main > .container > section, .hero, .highlights, .idols-preview, .blog-teaser');
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
