// ==================== 載入動畫功能 ====================

(function() {
  'use strict';

  // 檢測用戶是否偏好減少動畫
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // 如果用戶偏好減少動畫,直接顯示所有內容
    document.addEventListener('DOMContentLoaded', () => {
      const elements = document.querySelectorAll('.animate-on-scroll, .idol-card, .stat-card, .timeline-item, section');
      elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    });
    return;
  }

  // Intersection Observer 配置
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // 提前 100px 觸發
    threshold: 0.1 // 當 10% 的元素可見時觸發
  };

  // 創建觀察器
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 元素進入視窗
        const element = entry.target;
        
        // 添加動畫類別
        if (element.classList.contains('idol-card')) {
          element.classList.add('animate-in');
        } else if (element.classList.contains('stat-card')) {
          element.classList.add('animate-in');
        } else if (element.classList.contains('timeline-item')) {
          element.classList.add('animate-in');
        } else if (element.tagName === 'SECTION') {
          element.classList.add('visible');
        } else {
          element.classList.add('fade-in-up');
        }
        
        // 停止觀察已動畫的元素
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // 圖片懶載入處理
  function handleImageLoad() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // 如果圖片已有 src,直接標記為載入
          if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
          } else {
            // 等待圖片載入
            img.addEventListener('load', () => {
              img.classList.add('loaded');
            }, { once: true });
            
            // 錯誤處理
            img.addEventListener('error', () => {
              img.classList.add('loaded'); // 即使失敗也顯示
            }, { once: true });
          }
          
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px' // 提前 50px 開始載入
    });
    
    images.forEach(img => {
      if (img.complete && img.naturalHeight !== 0) {
        // 圖片已載入
        img.classList.add('loaded');
      } else {
        imageObserver.observe(img);
      }
    });
  }

  // 初始化動畫
  function initAnimations() {
    // 選擇需要動畫的元素
    const sections = document.querySelectorAll('main > section:not(.hero)');
    const idolCards = document.querySelectorAll('.idol-card');
    const statCards = document.querySelectorAll('.stat-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    // 觀察所有區塊
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // 觀察團體卡片 (添加延遲效果)
    idolCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.05}s`;
      observer.observe(card);
    });
    
    // 觀察統計卡片
    statCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });
    
    // 觀察時間軸項目
    timelineItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(item);
    });
    
    // 觀察自定義動畫元素
    animateElements.forEach(element => {
      observer.observe(element);
    });
    
    // 初始化圖片載入
    handleImageLoad();
    
    // Hero 區塊立即顯示
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.opacity = '1';
      hero.style.transform = 'none';
    }
  }

  // 頁面載入完成後初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }

  // 導出給其他腳本使用
  window.animationUtils = {
    observer: observer,
    handleImageLoad: handleImageLoad
  };

})();
