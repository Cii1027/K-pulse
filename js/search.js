// ==================== 搜尋功能 ====================

// 搜尋資料庫 - 包含所有團體和成員資訊
const searchDatabase = {
  groups: [
    {
      id: 'twice',
      name: { zh: 'TWICE', en: 'TWICE', ko: '트와이스', ja: 'トゥワイス' },
      debut: '2015',
      members: 9,
      fandom: 'ONCE',
      url: 'twice.html',
      icon: 'images/optimized/twice-400.jpg',
      keywords: ['國民女團', 'National Girl Group', '국민걸그룹'],
      tags: ['STRIDE', '女團']
    },
    {
      id: 'straykids',
      name: { zh: 'Stray Kids', en: 'Stray Kids', ko: '스트레이 키즈', ja: 'ストレイキッズ' },
      debut: '2018',
      members: 8,
      fandom: 'STAY',
      url: 'straykids.html',
      icon: 'images/optimized/straykids-400.jpg',
      keywords: ['3RACHA', '自製音樂', 'Self-produced', '자체제작'],
      tags: ['ONE Label', '男團']
    },
    {
      id: 'itzy',
      name: { zh: 'ITZY', en: 'ITZY', ko: '있지', ja: 'イッジ' },
      debut: '2019',
      members: 5,
      fandom: 'MIDZY',
      url: 'itzy.html',
      icon: 'images/optimized/itzy-400.jpg',
      keywords: ['Girl Crush', 'DALLA DALLA', '걸크러쉬'],
      tags: ['BLU:M', '女團']
    },
    {
      id: 'nmixx',
      name: { zh: 'NMIXX', en: 'NMIXX', ko: '엔믹스', ja: 'エンミックス' },
      debut: '2022',
      members: 6,
      fandom: 'NSWER',
      url: 'nmixx.html',
      icon: 'images/optimized/nmixx-400.jpg',
      keywords: ['MIXX POP', 'O.O', '믹스팝'],
      tags: ['SQU4D', '女團']
    },
    {
      id: '2pm',
      name: { zh: '2PM', en: '2PM', ko: '투피엠', ja: 'ツーピーエム' },
      debut: '2008',
      members: 6,
      fandom: 'HOTTEST',
      url: '2pm.html',
      icon: 'images/group-icons/2pm.jpg',
      keywords: ['野獸偶像', 'Beast Idol', '야수돌'],
      tags: ['ONE Label', '男團']
    },
    {
      id: 'day6',
      name: { zh: 'DAY6', en: 'DAY6', ko: '데이식스', ja: 'デイシックス' },
      debut: '2015',
      members: 4,
      fandom: 'MY DAY',
      url: 'day6.html',
      icon: 'images/group-icons/day6.jpg',
      keywords: ['樂隊', 'Band', '밴드', 'HAPPY'],
      tags: ['Studio J', '樂隊']
    },
    {
      id: 'xdinary-heroes',
      name: { zh: 'Xdinary Heroes', en: 'Xdinary Heroes', ko: '엑스디너리 히어로즈', ja: 'エクストラオーディナリーヒーローズ' },
      debut: '2021',
      members: 6,
      fandom: 'VILLAINS',
      url: 'xdinary-heroes.html',
      icon: 'images/group-icons/xdinary-heroes.jpg',
      keywords: ['搖滾', 'Rock', '록'],
      tags: ['Studio J', '樂隊']
    },
    {
      id: 'niziu',
      name: { zh: 'NiziU', en: 'NiziU', ko: '니쥬', ja: 'ニジュー' },
      debut: '2020',
      members: 9,
      fandom: 'WithU',
      url: 'niziu.html',
      icon: 'images/group-icons/niziu.jpg',
      keywords: ['日本', 'Japan', '일본', 'Nizi Project'],
      tags: ['海外團體', '女團', '日本']
    },
    {
      id: 'nexz',
      name: { zh: 'NEXZ', en: 'NEXZ', ko: '넥스지', ja: 'ネクスジ' },
      debut: '2024',
      members: 7,
      fandom: 'NEX2Y',
      url: 'nexz.html',
      icon: 'images/group-icons/nexz.jpg',
      keywords: ['日本', 'Japan', '일본', 'Nizi Project 2'],
      tags: ['海外團體', '男團', '日本']
    },
    {
      id: 'vcha',
      name: { zh: 'VCHA', en: 'VCHA', ko: '브이차', ja: 'ヴィーチャ' },
      debut: '2024',
      members: 4,
      fandom: '',
      url: 'vcha.html',
      icon: 'images/group-icons/vcha.jpg',
      keywords: ['美國', 'USA', 'America', '미국'],
      tags: ['海外團體', '女團', '美國']
    },
    {
      id: 'kickflip',
      name: { zh: 'KickFlip', en: 'KickFlip', ko: '킥플립', ja: 'キックフリップ' },
      debut: '2025',
      members: 7,
      fandom: 'WEFLIP',
      url: 'kickflip.html',
      icon: 'images/group-icons/kickflip.jpg',
      keywords: ['新人', 'Rookie', '신인'],
      tags: ['STRIDE', '男團']
    }
  ]
};

// 初始化搜尋功能
function initSearch() {
  const searchBtn = document.getElementById('search-btn');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchClose = document.getElementById('search-close');
  const searchResults = document.getElementById('search-results');

  if (!searchBtn || !searchModal) return;

  // 獲取當前語言的翻譯文字
  function getSearchText(key) {
    const currentLang = localStorage.getItem('preferred-language') || 'zh';
    const texts = {
      zh: {
        placeholder: '搜尋團體或成員... (Ctrl+K)',
        emptyTitle: '輸入關鍵字搜尋團體或成員',
        emptyDesc: '支援中文、English、한국어、日本語',
        noResults: '找不到',
        noResultsDesc: '試試其他關鍵字或使用不同語言搜尋',
        resultsTitle: '搜尋結果',
        groups: '個團體',
        debut: '出道',
        members: '名成員'
      },
      en: {
        placeholder: 'Search groups or members... (Ctrl+K)',
        emptyTitle: 'Enter keywords to search',
        emptyDesc: 'Supports 中文, English, 한국어, 日本語',
        noResults: 'No results for',
        noResultsDesc: 'Try different keywords or search in another language',
        resultsTitle: 'Search Results',
        groups: 'groups',
        debut: 'Debut',
        members: 'members'
      },
      ko: {
        placeholder: '그룹이나 멤버 검색... (Ctrl+K)',
        emptyTitle: '검색할 키워드를 입력하세요',
        emptyDesc: '중국어, English, 한국어, 日本語 지원',
        noResults: '검색 결과 없음',
        noResultsDesc: '다른 키워드를 시도하거나 다른 언어로 검색해보세요',
        resultsTitle: '검색 결과',
        groups: '그룹',
        debut: '데뷔',
        members: '멤버'
      },
      ja: {
        placeholder: 'グループまたはメンバーを検索... (Ctrl+K)',
        emptyTitle: '検索キーワードを入力してください',
        emptyDesc: '中文、English、한국어、日本語に対応',
        noResults: '検索結果なし',
        noResultsDesc: '別のキーワードを試すか、他の言語で検索してください',
        resultsTitle: '検索結果',
        groups: 'グループ',
        debut: 'デビュー',
        members: 'メンバー'
      }
    };
    return texts[currentLang]?.[key] || texts.zh[key];
  }

  // 更新搜尋框占位符
  function updatePlaceholder() {
    if (searchInput) {
      searchInput.placeholder = getSearchText('placeholder');
    }
  }

  // 初始化時更新占位符
  updatePlaceholder();

  // 監聽語言切換事件
  window.addEventListener('languageChanged', updatePlaceholder);

  if (!searchInput || !searchResults) return;

  // 點擊外部關閉搜尋結果
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      searchResults.innerHTML = '';
    }
  });

  // 搜尋輸入框獲得焦點時，如果有內容則顯示結果
  searchInput.addEventListener('focus', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query.length > 0) {
      performSearch(query);
    }
  });

  // 搜尋輸入事件
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length === 0) {
      searchResults.innerHTML = '';
    } else {
      performSearch(query);
    }
  });

  // Ctrl+K 快捷鍵聚焦搜尋框
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // 執行搜尋
  function performSearch(query) {
    const results = searchDatabase.groups.filter(group => {
      // 搜尋團體名稱 (所有語言)
      const nameMatch = Object.values(group.name).some(name => 
        name.toLowerCase().includes(query)
      );
      
      // 搜尋關鍵字
      const keywordMatch = group.keywords.some(keyword => 
        keyword.toLowerCase().includes(query)
      );
      
      // 搜尋粉絲名稱
      const fandomMatch = group.fandom.toLowerCase().includes(query);
      
      // 搜尋標籤
      const tagMatch = group.tags.some(tag => 
        tag.toLowerCase().includes(query)
      );

      return nameMatch || keywordMatch || fandomMatch || tagMatch;
    });

    displayResults(results, query);
  }

  // 顯示搜尋結果
  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="search-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <p>${getSearchText('noResults')}「${escapeHtml(query)}」</p>
          <p style="font-size: 0.875rem; margin-top: 0.5rem;">
            ${getSearchText('noResultsDesc')}
          </p>
        </div>
      `;
      return;
    }

    const currentLang = localStorage.getItem('preferred-language') || 'zh';
    let html = `<div class="search-category">${getSearchText('resultsTitle')} · ${results.length} ${getSearchText('groups')}</div>`;

    results.forEach(group => {
      const groupName = group.name[currentLang] || group.name.zh;
      const highlightedName = highlightMatch(groupName, query);

      html += `
        <a href="${group.url}" class="search-item" data-group="${group.id}">
          <img src="${group.icon}" alt="${groupName}" class="search-item-icon" loading="lazy">
          <div class="search-item-content">
            <div class="search-item-title">
              ${highlightedName}
              ${group.tags[0] ? `<span class="search-item-badge">${group.tags[0]}</span>` : ''}
            </div>
            <div class="search-item-meta">
              <span>${group.debut} ${getSearchText('debut')}</span>
              <span>·</span>
              <span>${group.members} ${getSearchText('members')}</span>
              ${group.fandom ? `<span>·</span><span>${group.fandom}</span>` : ''}
            </div>
          </div>
        </a>
      `;
    });

    searchResults.innerHTML = html;

    // 為搜尋結果添加點擊事件
    searchResults.querySelectorAll('.search-item').forEach(item => {
      item.addEventListener('click', () => {
        closeSearch();
      });
    });
  }

  // 高亮匹配文字
  function highlightMatch(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  }

  // 轉義 HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // 轉義正則表達式特殊字符
  function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // 初始化時顯示空狀態
  showEmptyState();
}

// 頁面載入後初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSearch);
} else {
  initSearch();
}
