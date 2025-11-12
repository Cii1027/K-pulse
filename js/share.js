// share.js - 社交分享功能
(function() {
  'use strict';

  // 分享配置
  const shareConfig = {
    twitter: {
      name: 'Twitter',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>`,
      getUrl: (url, title) => {
        const text = encodeURIComponent(`${title} - K-PULSE`);
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${text}`;
      }
    },
    facebook: {
      name: 'Facebook',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>`,
      getUrl: (url) => {
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      }
    },
    line: {
      name: 'Line',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
      </svg>`,
      getUrl: (url, title) => {
        const text = encodeURIComponent(`${title} - K-PULSE`);
        return `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${text}`;
      }
    },
    copy: {
      name: '複製連結',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>`,
      action: async (url) => {
        try {
          await navigator.clipboard.writeText(url);
          return true;
        } catch (err) {
          // 降級方案
          const textarea = document.createElement('textarea');
          textarea.value = url;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand('copy');
            document.body.removeChild(textarea);
            return true;
          } catch (e) {
            document.body.removeChild(textarea);
            return false;
          }
        }
      }
    }
  };

  // 創建分享按鈕
  function createShareButtons() {
    const shareContainers = document.querySelectorAll('.share-buttons-container');
    if (shareContainers.length === 0) return;

    const currentUrl = window.location.href;
    const pageTitle = document.querySelector('h1')?.textContent || document.title;

    shareContainers.forEach(container => {
      const buttonsHTML = `
        <div class="share-buttons">
          <button class="share-btn share-twitter" data-platform="twitter" aria-label="分享到 Twitter">
            ${shareConfig.twitter.icon}
            <span>${shareConfig.twitter.name}</span>
          </button>
          <button class="share-btn share-facebook" data-platform="facebook" aria-label="分享到 Facebook">
            ${shareConfig.facebook.icon}
            <span>${shareConfig.facebook.name}</span>
          </button>
          <button class="share-btn share-line" data-platform="line" aria-label="分享到 Line">
            ${shareConfig.line.icon}
            <span>${shareConfig.line.name}</span>
          </button>
          <button class="share-btn share-copy" data-platform="copy" aria-label="複製連結">
            ${shareConfig.copy.icon}
            <span>${shareConfig.copy.name}</span>
          </button>
        </div>
      `;
      container.innerHTML = buttonsHTML;
    });

    // 綁定事件
    document.querySelectorAll('.share-btn').forEach(btn => {
      btn.addEventListener('click', async function(e) {
        e.preventDefault();
        const platform = this.dataset.platform;
        
        if (platform === 'copy') {
          const success = await shareConfig.copy.action(currentUrl);
          if (success) {
            showToast('連結已複製到剪貼簿!');
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), 2000);
          } else {
            showToast('複製失敗，請手動複製', 'error');
          }
        } else {
          const config = shareConfig[platform];
          const shareUrl = config.getUrl(currentUrl, pageTitle);
          window.open(shareUrl, '_blank', 'width=600,height=400,noopener,noreferrer');
        }
      });
    });
  }

  // 顯示提示訊息
  function showToast(message, type = 'success') {
    // 移除現有的 toast
    const existingToast = document.querySelector('.share-toast');
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `share-toast share-toast-${type}`;
    toast.innerHTML = `
      <div class="share-toast-content">
        ${type === 'success' ? 
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>' : 
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'
        }
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(toast);

    // 觸發動畫
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // 3 秒後移除
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Web Share API 支援檢測（用於移動設備）
  function initNativeShare() {
    if (!navigator.share) return;

    const nativeShareBtns = document.querySelectorAll('[data-native-share]');
    nativeShareBtns.forEach(btn => {
      btn.style.display = 'inline-flex';
      btn.addEventListener('click', async () => {
        try {
          await navigator.share({
            title: document.title,
            text: document.querySelector('h1')?.textContent || document.title,
            url: window.location.href
          });
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.error('分享失敗:', err);
          }
        }
      });
    });
  }

  // 初始化
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        createShareButtons();
        initNativeShare();
      });
    } else {
      createShareButtons();
      initNativeShare();
    }
  }

  init();

  // 導出供外部使用
  window.shareUtils = {
    createButtons: createShareButtons,
    showToast: showToast
  };
})();
