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

// 今日推薦功能
(function(){
  const groups = [
    {
      name: 'TWICE',
      desc: '九位成員組成的超人氣女團，以甜美風格和朗朗上口的旋律席捲全球',
      tags: ['女團', '第三代', 'Pop'],
      link: 'twice.html'
    },
    {
      name: 'Stray Kids',
      desc: '自製偶像團體，以強烈的音樂風格和自主創作能力獲得全球認可',
      tags: ['男團', '第四代', 'Hip-hop'],
      link: 'straykids.html'
    },
    {
      name: 'ITZY',
      desc: '以「不同凡想」為理念，傳遞自信與個性的第四代女團代表',
      tags: ['女團', '第四代', 'Teen Crush'],
      link: 'itzy.html'
    },
    {
      name: 'NMIXX',
      desc: '突破傳統框架的新世代女團，以「MIXX POP」開創獨特音樂風格',
      tags: ['女團', '第四代', 'MIXX POP'],
      link: 'nmixx.html'
    },
    {
      name: '2PM',
      desc: '二代傳奇男團，以野獸派風格和強大舞台魅力稱霸 K-pop',
      tags: ['男團', '第二代', 'Beast Idol'],
      link: '2pm.html'
    },
    {
      name: 'DAY6',
      desc: '五位全能樂手組成的樂團，以真摯的音樂故事觸動人心',
      tags: ['樂團', 'Studio J', 'Rock'],
      link: 'day6.html'
    },
    {
      name: 'Xdinary Heroes',
      desc: '六人搖滾樂團，融合搖滾與電子元素創造新世代樂團音樂',
      tags: ['樂團', 'Studio J', 'Rock'],
      link: 'xdinary-heroes.html'
    },
    {
      name: 'NiziU',
      desc: '日本九人女團，以清新可愛風格在日本樂壇大放異彩',
      tags: ['女團', '日本', 'J-pop'],
      link: 'niziu.html'
    },
    {
      name: 'NEXZ',
      desc: 'JYP 與 Sony Music 合作推出的日本男團新星',
      tags: ['男團', '日本', 'Global'],
      link: 'nexz.html'
    },
    {
      name: 'VCHA',
      desc: 'JYP 首個美國女團，展現多元文化融合的全球化視野',
      tags: ['女團', '美國', 'Global'],
      link: 'vcha.html'
    },
    {
      name: 'KickFlip',
      desc: '新生代男團，以街頭文化和運動風格展現青春活力',
      tags: ['男團', '第五代', 'Urban'],
      link: 'kickflip.html'
    }
  ];

  function getRandomGroup() {
    return groups[Math.floor(Math.random() * groups.length)];
  }

  function displayDailyPick(group) {
    const nameEl = document.getElementById('dailyGroupName');
    const descEl = document.getElementById('dailyGroupDesc');
    const tagsEl = document.getElementById('dailyTags');
    const linkEl = document.getElementById('dailyLink');

    if (!nameEl || !descEl || !tagsEl || !linkEl) return;

    // 添加淡出效果
    nameEl.style.opacity = '0';
    descEl.style.opacity = '0';
    tagsEl.style.opacity = '0';

    setTimeout(() => {
      nameEl.textContent = group.name;
      descEl.textContent = group.desc;
      linkEl.href = group.link;

      tagsEl.innerHTML = group.tags.map(tag => 
        `<span class="pick-tag">${tag}</span>`
      ).join('');

      // 添加淡入效果
      nameEl.style.opacity = '1';
      descEl.style.opacity = '1';
      tagsEl.style.opacity = '1';
    }, 200);
  }

  // 初始化
  const initialGroup = getRandomGroup();
  displayDailyPick(initialGroup);

  // 刷新按鈕
  const refreshBtn = document.getElementById('refreshPick');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      const newGroup = getRandomGroup();
      displayDailyPick(newGroup);
      
      // 添加按鈕動畫
      refreshBtn.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        refreshBtn.style.transform = 'rotate(0deg)';
      }, 300);
    });
  }
})();
