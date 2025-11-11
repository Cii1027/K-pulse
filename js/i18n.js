/* ================================
   多語言切換功能
   ================================ */

(function() {
  // 默認語言
  let currentLang = localStorage.getItem('preferred-language') || 'zh';

  // 初始化
  function initLanguage() {
    // 設置 HTML lang 屬性
    document.documentElement.lang = getLangCode(currentLang);
    
    // 創建語言切換器
    createLanguageSwitcher();
    
    // 應用翻譯
    applyTranslations();
  }

  // 獲取語言代碼
  function getLangCode(lang) {
    const codes = {
      'zh': 'zh-Hant',
      'en': 'en',
      'ko': 'ko',
      'ja': 'ja'
    };
    return codes[lang] || 'zh-Hant';
  }

  // 創建語言切換器
  function createLanguageSwitcher() {
    const header = document.querySelector('.site-header .nav-container');
    if (!header) return;

    // 檢查是否已存在
    if (document.querySelector('.language-switcher')) return;

    const langSwitcher = document.createElement('div');
    langSwitcher.className = 'language-switcher';
    langSwitcher.innerHTML = `
      <button class="lang-btn" id="langBtn" aria-label="切換語言">
        <span class="lang-icon">🌐</span>
        <span class="lang-text">${currentLang.toUpperCase()}</span>
      </button>
      <div class="lang-dropdown" id="langDropdown">
        <button class="lang-option ${currentLang === 'zh' ? 'active' : ''}" data-lang="zh">
          <span class="lang-flag">🇹🇼</span>
          <span>繁體中文</span>
        </button>
        <button class="lang-option ${currentLang === 'en' ? 'active' : ''}" data-lang="en">
          <span class="lang-flag">🇺🇸</span>
          <span>English</span>
        </button>
        <button class="lang-option ${currentLang === 'ko' ? 'active' : ''}" data-lang="ko">
          <span class="lang-flag">🇰🇷</span>
          <span>한국어</span>
        </button>
        <button class="lang-option ${currentLang === 'ja' ? 'active' : ''}" data-lang="ja">
          <span class="lang-flag">🇯🇵</span>
          <span>日本語</span>
        </button>
      </div>
    `;

    // 插入到主題切換按鈕之前
    const themeToggle = header.querySelector('.theme-toggle');
    if (themeToggle) {
      header.insertBefore(langSwitcher, themeToggle);
    } else {
      header.appendChild(langSwitcher);
    }

    // 綁定事件
    setupLanguageSwitcherEvents();
  }

  // 設置事件監聽
  function setupLanguageSwitcherEvents() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');

    if (!langBtn || !langDropdown) return;

    // 切換下拉選單
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    // 點擊外部關閉
    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });

    // 選擇語言
    langOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = option.dataset.lang;
        
        if (selectedLang !== currentLang) {
          switchLanguage(selectedLang);
        }
        
        langDropdown.classList.remove('show');
      });
    });
  }

  // 切換語言
  function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferred-language', lang);
    
    // 更新 HTML lang 屬性
    document.documentElement.lang = getLangCode(lang);
    
    // 更新按鈕文字
    const langText = document.querySelector('.lang-text');
    if (langText) {
      langText.textContent = lang.toUpperCase();
    }
    
    // 更新選中狀態
    document.querySelectorAll('.lang-option').forEach(option => {
      option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    // 應用翻譯
    applyTranslations();
    
    // 顯示提示
    showLanguageToast(lang);
  }

  // 應用翻譯
  function applyTranslations() {
    if (typeof translations === 'undefined') {
      console.warn('Translations not loaded');
      return;
    }

    const t = translations[currentLang];
    if (!t) return;

    // 導航欄
    translateNav(t.nav);
    
    // 首頁內容
    if (document.querySelector('.hero')) {
      translateHome(t.home);
    }
    
    // 時間軸頁面
    if (document.querySelector('.timeline-header')) {
      translateTimeline(t.timeline);
    }
    
    // Idols 頁面
    if (document.querySelector('.idols-page-header')) {
      translateIdols(t.idols);
    }
    
    // Hallyu 頁面
    if (document.querySelector('.hallyu-header')) {
      translateHallyu(t.hallyu);
    }
    
    // About 頁面
    if (document.querySelector('.about-header')) {
      translateAbout(t.about);
    }
    
    // 404 頁面
    if (document.querySelector('.error-page')) {
      translate404(t.error404);
    }
    
    // 團體頁面
    if (document.querySelector('.group-header')) {
      translateGroup(t.group);
    }
    
    // 頁尾
    translateFooter(t.footer);
    
    // 通用元素
    translateCommon(t.common);
  }

  // 翻譯導航欄
  function translateNav(nav) {
    const navLinks = document.querySelectorAll('.main-nav a');
    if (navLinks.length >= 4) {
      navLinks[0].textContent = nav.home;
      navLinks[1].textContent = nav.idols;
      navLinks[2].textContent = nav.hallyu;
      navLinks[3].textContent = nav.about;
    }
  }

  // 翻譯首頁
  function translateHome(home) {
    // Hero 區塊
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    const exploreBtn = document.querySelector('.hero .cta-button, .hero .btn');
    
    if (heroTitle) heroTitle.textContent = home.hero_title;
    if (heroSubtitle) heroSubtitle.textContent = home.hero_subtitle;
    if (exploreBtn) exploreBtn.textContent = home.explore_btn;

    // 關於 JYP 區塊
    const aboutJypTitle = document.querySelector('.about-jyp h2');
    const aboutJypParas = document.querySelectorAll('.about-text p');
    const achievementsTitle = document.querySelector('.about-achievements h3');
    const achievementsList = document.querySelectorAll('.about-achievements li');
    
    if (aboutJypTitle) aboutJypTitle.textContent = home.about_jyp_title;
    if (aboutJypParas.length >= 3) {
      aboutJypParas[0].innerHTML = home.about_jyp_p1.replace('朴軫永', '<strong>朴軫永</strong>');
      aboutJypParas[1].innerHTML = home.about_jyp_p2.replace(/「有實力的藝人」|"talented artists"/g, '<strong>$&</strong>');
      aboutJypParas[2].innerHTML = home.about_jyp_p3
        .replace(/TWICE|트와이스/g, '<strong>$&</strong>')
        .replace(/Stray Kids|스트레이 키즈/g, '<strong>$&</strong>');
    }
    if (achievementsTitle) achievementsTitle.textContent = home.achievements_title;
    if (achievementsList.length >= 4) {
      achievementsList[0].textContent = '🏆 ' + home.achievement_1;
      achievementsList[1].textContent = '📀 ' + home.achievement_2;
      achievementsList[2].textContent = '🌍 ' + home.achievement_3;
      achievementsList[3].textContent = '🎤 ' + home.achievement_4;
    }

    // 統計數據區塊
    const statsTitle = document.querySelector('.statistics h2');
    const statCards = document.querySelectorAll('.stat-card');
    
    if (statsTitle) statsTitle.textContent = home.stats_title;
    if (statCards.length >= 4) {
      const numbers = statCards[0].querySelectorAll('.stat-number, .stat-label');
      if (numbers.length >= 2) {
        numbers[0].textContent = home.stat_1_number;
        numbers[1].textContent = home.stat_1_label;
      }
      
      const stat2 = statCards[1].querySelectorAll('.stat-number, .stat-label');
      if (stat2.length >= 2) {
        stat2[0].textContent = home.stat_2_number;
        stat2[1].textContent = home.stat_2_label;
      }
      
      const stat3 = statCards[2].querySelectorAll('.stat-number, .stat-label');
      if (stat3.length >= 2) {
        stat3[0].textContent = home.stat_3_number;
        stat3[1].textContent = home.stat_3_label;
      }
      
      const stat4 = statCards[3].querySelectorAll('.stat-number, .stat-label');
      if (stat4.length >= 2) {
        stat4[0].textContent = home.stat_4_number;
        stat4[1].textContent = home.stat_4_label;
      }
    }

    // 統計數據（原有的）
    const statLabels = document.querySelectorAll('.stat p');
    if (statLabels.length >= 4) {
      statLabels[0].textContent = home.stats_groups;
      statLabels[1].textContent = home.stats_members;
      statLabels[2].textContent = home.stats_awards;
      statLabels[3].textContent = home.stats_years;
    }

    // 今日推薦
    const dailyPickTitle = document.querySelector('.daily-pick h2');
    const dailyPickBadge = document.querySelector('.pick-badge');
    const exploreMoreBtn = document.querySelector('#dailyLink');
    const refreshBtn = document.querySelector('#refreshPick');
    
    if (dailyPickTitle) dailyPickTitle.textContent = home.daily_pick_title;
    if (dailyPickBadge) dailyPickBadge.textContent = home.daily_pick_badge;
    if (exploreMoreBtn) exploreMoreBtn.textContent = home.explore_more;
    if (refreshBtn) refreshBtn.textContent = home.refresh;

    // 最新動態
    const timelineTitle = document.querySelector('.timeline-section h2');
    const timelineMore = document.querySelector('.timeline-more a');
    
    if (timelineTitle) timelineTitle.textContent = home.timeline_title;
    if (timelineMore) timelineMore.textContent = home.timeline_more;

    // 團體預覽
    const groupsTitle = document.querySelector('.idols-preview h2');
    const groupsIntro = document.querySelector('.idols-preview .section-intro');
    const viewAllBtn = document.querySelector('.idols-preview .view-all-btn');
    
    if (groupsTitle) groupsTitle.textContent = home.groups_title;
    if (groupsIntro) groupsIntro.textContent = home.groups_intro;
    if (viewAllBtn) viewAllBtn.textContent = home.view_all;
    
    // 團體卡片描述
    const groupCards = document.querySelectorAll('.idol-card');
    groupCards.forEach(card => {
      const groupName = card.dataset.name;
      const memberCount = card.querySelector('.member-count');
      const groupDesc = card.querySelector('.group-desc');
      
      // 翻譯成員數量
      if (memberCount) {
        const count = memberCount.textContent.match(/\d+/);
        if (count) {
          memberCount.textContent = count[0] + home.members_count;
        }
      }
      
      // 翻譯團體描述
      if (groupDesc && groupName) {
        const descKey = `card_${groupName.toLowerCase().replace(/\s+/g, '')}_desc`;
        if (home[descKey]) {
          groupDesc.textContent = home[descKey];
        }
      }
    });
    
    // 翻譯「海外團體」標籤
    const overseasLabel = document.querySelector('.label-section h3');
    if (overseasLabel && overseasLabel.textContent.includes('海外團體')) {
      overseasLabel.innerHTML = `<span class="label-badge">${home.overseas_groups}</span>`;
    }
  }

  // 翻譯時間軸頁面
  function translateTimeline(timeline) {
    const title = document.querySelector('.timeline-header h1');
    const intro = document.querySelector('.timeline-intro');
    const filterAll = document.querySelector('.filter-btn[data-year="all"]');
    
    if (title) title.textContent = timeline.title;
    if (intro) intro.textContent = timeline.intro;
    if (filterAll) filterAll.textContent = timeline.filter_all;

    // 分類標籤
    const categories = document.querySelectorAll('.timeline-categories .category-tag');
    if (categories.length >= 6) {
      categories[0].textContent = timeline.category_debut;
      categories[1].textContent = timeline.category_comeback;
      categories[2].textContent = timeline.category_award;
      categories[3].textContent = timeline.category_concert;
      categories[4].textContent = timeline.category_achievement;
      categories[5].textContent = timeline.category_collaboration;
    }

    // 頁尾
    const footerText = document.querySelector('.timeline-footer p');
    const backBtn = document.querySelector('.timeline-footer .btn');
    
    if (footerText) footerText.textContent = timeline.footer_updating;
    if (backBtn) backBtn.textContent = timeline.back_home;
  }

  // 翻譯頁尾
  function translateFooter(footer) {
    const description = document.querySelector('.footer-section p');
    const quickLinks = document.querySelectorAll('.footer-section h4')[0];
    const popularGroups = document.querySelectorAll('.footer-section h4')[1];
    const contact = document.querySelectorAll('.footer-section h4')[2];
    const copyright = document.querySelector('.footer-bottom p:first-child');
    const note = document.querySelector('.footer-note');
    
    if (description) description.textContent = footer.description;
    if (quickLinks) quickLinks.textContent = footer.quick_links;
    if (popularGroups) popularGroups.textContent = footer.popular_groups;
    if (contact) contact.textContent = footer.contact;
    if (copyright) copyright.textContent = footer.copyright;
    if (note) note.textContent = footer.note;
  }

  // 翻譯通用元素
  function translateCommon(common) {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      backToTop.setAttribute('aria-label', common.back_to_top);
    }
  }

  // 翻譯 Idols 頁面
  function translateIdols(idols) {
    const title = document.querySelector('.idols-page-header h1');
    const subtitle = document.querySelector('.idols-page-header p');
    const searchInput = document.querySelector('#groupSearch');
    
    if (title) title.textContent = idols.title;
    if (subtitle) subtitle.textContent = idols.subtitle;
    if (searchInput) searchInput.setAttribute('placeholder', idols.search_placeholder);
  }

  // 翻譯 Hallyu 頁面
  function translateHallyu(hallyu) {
    const title = document.querySelector('.hallyu-header h1');
    const subtitle = document.querySelector('.hallyu-header p');
    
    if (title) title.textContent = hallyu.title;
    if (subtitle) subtitle.textContent = hallyu.subtitle;
  }

  // 翻譯 About 頁面
  function translateAbout(about) {
    const title = document.querySelector('.about-header h1');
    const subtitle = document.querySelector('.about-header p');
    const contactTitle = document.querySelector('.contact-section h2');
    const nameLabel = document.querySelector('label[for="name"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const subjectLabel = document.querySelector('label[for="subject"]');
    const messageLabel = document.querySelector('label[for="message"]');
    const submitBtn = document.querySelector('.contact-form button[type="submit"]');
    
    if (title) title.textContent = about.title;
    if (subtitle) subtitle.textContent = about.subtitle;
    if (contactTitle) contactTitle.textContent = about.contact_us;
    if (nameLabel) nameLabel.textContent = about.your_name;
    if (emailLabel) emailLabel.textContent = about.your_email;
    if (subjectLabel) subjectLabel.textContent = about.subject;
    if (messageLabel) messageLabel.textContent = about.message;
    if (submitBtn && !submitBtn.disabled) submitBtn.textContent = about.send;
  }

  // 翻譯 404 頁面
  function translate404(error404) {
    const title = document.querySelector('.error-page h1');
    const message = document.querySelector('.error-message');
    const suggestion = document.querySelector('.error-suggestion');
    const homeBtn = document.querySelector('.error-actions .btn:first-child');
    const groupsBtn = document.querySelector('.error-actions .btn:last-child');
    
    if (title) title.innerHTML = error404.oops;
    if (message) message.textContent = error404.message;
    if (suggestion) suggestion.textContent = error404.suggestion;
    if (homeBtn) homeBtn.textContent = error404.back_home;
    if (groupsBtn) groupsBtn.textContent = error404.browse_groups;
  }

  // 翻譯團體頁面
  function translateGroup(group) {
    const overviewTitle = document.querySelector('h2:contains("團體簡介")');
    const membersTitle = document.querySelector('h2:contains("成員介紹")');
    const workTitle = document.querySelector('h2:contains("代表作品")');
    
    // 使用更通用的選擇器
    const headings = document.querySelectorAll('h2');
    headings.forEach(h2 => {
      if (h2.textContent.includes('團體簡介')) h2.textContent = group.overview;
      if (h2.textContent.includes('成員介紹')) h2.textContent = group.members;
      if (h2.textContent.includes('代表作品')) h2.textContent = group.representative_work;
      if (h2.textContent.includes('主要成就')) h2.textContent = group.achievements;
    });
  }

  // 顯示語言切換提示
  function showLanguageToast(lang) {
    const langNames = {
      'zh': '繁體中文',
      'en': 'English',
      'ko': '한국어',
      'ja': '日本語'
    };

    // 移除現有提示
    const existingToast = document.querySelector('.language-toast');
    if (existingToast) {
      existingToast.remove();
    }

    // 創建新提示
    const toast = document.createElement('div');
    toast.className = 'language-toast';
    toast.innerHTML = `
      <span class="toast-icon">✓</span>
      <span class="toast-text">Language switched to ${langNames[lang]}</span>
    `;
    
    document.body.appendChild(toast);

    // 顯示動畫
    setTimeout(() => toast.classList.add('show'), 100);

    // 3秒後移除
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // 頁面載入時初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }

  // 導出給外部使用
  window.i18n = {
    getCurrentLanguage: () => currentLang,
    switchLanguage: switchLanguage,
    getTranslation: (key) => {
      if (typeof translations === 'undefined') return key;
      const keys = key.split('.');
      let value = translations[currentLang];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    }
  };
})();
