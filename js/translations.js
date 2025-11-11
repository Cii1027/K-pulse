/* ================================
   多語言翻譯數據
   Languages: 中文 (zh), English (en), 한국어 (ko), 日本語 (ja)
   ================================ */

const translations = {
  // 中文 (繁體)
  zh: {
    // 導航欄
    nav: {
      home: '首頁',
      idols: 'JYP 偶像',
      hallyu: '韓流探討',
      about: '關於我',
      timeline: '大事記'
    },
    
    // 首頁
    home: {
      hero_title: '探索 JYP 娛樂的魅力世界',
      hero_subtitle: '從 TWICE 到 Stray Kids，深入了解 K-pop 的璀璨星光',
      explore_btn: '開始探索',
      stats_groups: '活躍團體',
      stats_members: '藝人成員',
      stats_awards: '音樂獎項',
      stats_years: '年度歷史',
      daily_pick_title: '✨ 今日推薦',
      daily_pick_badge: 'Daily Pick',
      daily_pick_loading: '載入中...',
      daily_pick_desc: '正在為您挑選...',
      explore_more: '探索更多',
      refresh: '🎲 換一個',
      timeline_title: '📅 最新動態',
      timeline_more: '查看更多動態 →',
      groups_title: 'JYP 娛樂旗下團體',
      groups_intro: '探索 JYP Entertainment 旗下所有活躍團體，從第二代到第五代，每個團體都有獨特的音樂風格與魅力。',
      view_all: '查看所有團體 →'
    },
    
    // 時間軸頁面
    timeline: {
      title: '📅 JYP 娛樂大事記',
      intro: '記錄 2020 年至今 JYP Entertainment 旗下團體的重要時刻，見證 K-pop 的精彩歷程',
      filter_all: '全部',
      category_debut: '出道',
      category_comeback: '回歸',
      category_award: '獎項',
      category_concert: '演唱會',
      category_achievement: '成就',
      category_collaboration: '合作',
      footer_updating: '✨ 持續更新中...',
      back_home: '回到首頁'
    },
    
    // 頁尾
    footer: {
      description: '深入探索 JYP 娛樂與 K-pop 文化',
      quick_links: '快速連結',
      popular_groups: '熱門團體',
      contact: '聯絡資訊',
      copyright: '© 2025 K-PULSE — 深入探索 JYP 與 K-pop 文化',
      note: '本網站為教育展示用途,所有內容僅供參考學習'
    },
    
    // 通用
    common: {
      back_to_top: '回到頂部',
      loading: '載入中...',
      error: '發生錯誤',
      read_more: '閱讀更多',
      learn_more: '了解更多'
    },
    
    // 團體頁面
    group: {
      overview: '團體簡介',
      members: '成員介紹',
      representative_work: '代表作品',
      achievements: '主要成就',
      debut_date: '出道日期',
      fandom: '粉絲名稱',
      company: '所屬公司',
      generation: '世代',
      leader: '隊長',
      position: '定位',
      birthday: '生日',
      nationality: '國籍',
      height: '身高',
      watch_mv: '觀看 MV'
    },
    
    // Idols 頁面
    idols: {
      title: 'JYP 娛樂旗下團體',
      subtitle: '探索 JYP Entertainment 的所有藝人團體',
      search_placeholder: '搜尋團體名稱...',
      filter_all: '全部',
      filter_active: '活動中',
      filter_hiatus: '休息中',
      sort_debut: '出道時間',
      sort_name: '團體名稱',
      member_count: '名成員',
      debut_year: '出道'
    },
    
    // Hallyu 頁面
    hallyu: {
      title: '韓流探討',
      subtitle: '深入了解韓流文化與 K-pop 現象',
      what_is_hallyu: '什麼是韓流？',
      kpop_history: 'K-pop 發展史',
      global_impact: '全球影響力',
      future_trends: '未來趨勢'
    },
    
    // About 頁面
    about: {
      title: '關於 K-PULSE',
      subtitle: '我們的使命與願景',
      our_mission: '我們的使命',
      contact_us: '聯絡我們',
      your_name: '您的名字',
      your_email: '您的電子郵件',
      subject: '主旨',
      message: '訊息內容',
      send: '送出',
      sending: '傳送中...',
      success: '訊息已送出!',
      error: '發送失敗，請稍後再試'
    },
    
    // 404 頁面
    error404: {
      title: '404 - 頁面不存在',
      oops: '糟糕！',
      message: '您訪問的頁面似乎不存在',
      suggestion: '可能是網址輸入錯誤，或頁面已被移除',
      back_home: '返回首頁',
      browse_groups: '瀏覽團體'
    }
  },

  // English
  en: {
    nav: {
      home: 'Home',
      idols: 'JYP Idols',
      hallyu: 'Hallyu Wave',
      about: 'About',
      timeline: 'Timeline'
    },
    
    home: {
      hero_title: 'Explore the Enchanting World of JYP Entertainment',
      hero_subtitle: 'From TWICE to Stray Kids, dive deep into the brilliant stars of K-pop',
      explore_btn: 'Start Exploring',
      stats_groups: 'Active Groups',
      stats_members: 'Artists',
      stats_awards: 'Music Awards',
      stats_years: 'Years of History',
      daily_pick_title: '✨ Daily Pick',
      daily_pick_badge: 'Daily Pick',
      daily_pick_loading: 'Loading...',
      daily_pick_desc: 'Selecting for you...',
      explore_more: 'Explore More',
      refresh: '🎲 Refresh',
      timeline_title: '📅 Latest Updates',
      timeline_more: 'View More Updates →',
      groups_title: 'JYP Entertainment Groups',
      groups_intro: 'Explore all active groups under JYP Entertainment, from 2nd to 5th generation, each with unique music styles and charms.',
      view_all: 'View All Groups →'
    },
    
    timeline: {
      title: '📅 JYP Entertainment Timeline',
      intro: 'Recording important moments of JYP Entertainment groups since 2020, witnessing the exciting journey of K-pop',
      filter_all: 'All',
      category_debut: 'Debut',
      category_comeback: 'Comeback',
      category_award: 'Award',
      category_concert: 'Concert',
      category_achievement: 'Achievement',
      category_collaboration: 'Collaboration',
      footer_updating: '✨ Continuously Updating...',
      back_home: 'Back to Home'
    },
    
    footer: {
      description: 'Exploring JYP Entertainment & K-pop Culture',
      quick_links: 'Quick Links',
      popular_groups: 'Popular Groups',
      contact: 'Contact',
      copyright: '© 2025 K-PULSE — Exploring JYP & K-pop Culture',
      note: 'This website is for educational purposes. All content is for reference only.'
    },
    
    common: {
      back_to_top: 'Back to Top',
      loading: 'Loading...',
      error: 'Error Occurred',
      read_more: 'Read More',
      learn_more: 'Learn More'
    },
    
    group: {
      overview: 'Group Overview',
      members: 'Members',
      representative_work: 'Representative Works',
      achievements: 'Main Achievements',
      debut_date: 'Debut Date',
      fandom: 'Fandom Name',
      company: 'Company',
      generation: 'Generation',
      leader: 'Leader',
      position: 'Position',
      birthday: 'Birthday',
      nationality: 'Nationality',
      height: 'Height',
      watch_mv: 'Watch MV'
    },
    
    idols: {
      title: 'JYP Entertainment Groups',
      subtitle: 'Explore all artist groups under JYP Entertainment',
      search_placeholder: 'Search group name...',
      filter_all: 'All',
      filter_active: 'Active',
      filter_hiatus: 'On Hiatus',
      sort_debut: 'Debut Date',
      sort_name: 'Group Name',
      member_count: 'Members',
      debut_year: 'Debut'
    },
    
    hallyu: {
      title: 'Hallyu Wave',
      subtitle: 'Exploring Korean Wave Culture & K-pop Phenomenon',
      what_is_hallyu: 'What is Hallyu?',
      kpop_history: 'K-pop History',
      global_impact: 'Global Impact',
      future_trends: 'Future Trends'
    },
    
    about: {
      title: 'About K-PULSE',
      subtitle: 'Our Mission & Vision',
      our_mission: 'Our Mission',
      contact_us: 'Contact Us',
      your_name: 'Your Name',
      your_email: 'Your Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send. Please try again later.'
    },
    
    error404: {
      title: '404 - Page Not Found',
      oops: 'Oops!',
      message: 'The page you are looking for does not exist',
      suggestion: 'The URL might be incorrect, or the page has been removed',
      back_home: 'Back to Home',
      browse_groups: 'Browse Groups'
    }
  },

  // 한국어 (Korean)
  ko: {
    nav: {
      home: '홈',
      idols: 'JYP 아이돌',
      hallyu: '한류',
      about: '소개',
      timeline: '타임라인'
    },
    
    home: {
      hero_title: 'JYP 엔터테인먼트의 매력적인 세계를 탐험하세요',
      hero_subtitle: 'TWICE부터 Stray Kids까지, K-pop의 찬란한 별들을 만나보세요',
      explore_btn: '탐험 시작',
      stats_groups: '활동 그룹',
      stats_members: '아티스트',
      stats_awards: '음악 시상',
      stats_years: '년 역사',
      daily_pick_title: '✨ 오늘의 추천',
      daily_pick_badge: '오늘의 픽',
      daily_pick_loading: '로딩 중...',
      daily_pick_desc: '선택 중...',
      explore_more: '더 알아보기',
      refresh: '🎲 새로고침',
      timeline_title: '📅 최신 소식',
      timeline_more: '더 많은 소식 보기 →',
      groups_title: 'JYP 엔터테인먼트 그룹',
      groups_intro: 'JYP Entertainment 소속의 모든 활동 그룹을 탐험하세요. 2세대부터 5세대까지, 각각 독특한 음악 스타일과 매력을 가지고 있습니다.',
      view_all: '모든 그룹 보기 →'
    },
    
    timeline: {
      title: '📅 JYP 엔터테인먼트 타임라인',
      intro: '2020년부터 현재까지 JYP Entertainment 그룹들의 중요한 순간들을 기록하며 K-pop의 흥미진진한 여정을 목격하세요',
      filter_all: '전체',
      category_debut: '데뷔',
      category_comeback: '컴백',
      category_award: '시상',
      category_concert: '콘서트',
      category_achievement: '업적',
      category_collaboration: '협업',
      footer_updating: '✨ 계속 업데이트 중...',
      back_home: '홈으로'
    },
    
    footer: {
      description: 'JYP 엔터테인먼트와 K-pop 문화 탐구',
      quick_links: '빠른 링크',
      popular_groups: '인기 그룹',
      contact: '연락처',
      copyright: '© 2025 K-PULSE — JYP 및 K-pop 문화 탐구',
      note: '이 웹사이트는 교육 목적입니다. 모든 콘텐츠는 참고용입니다.'
    },
    
    common: {
      back_to_top: '맨 위로',
      loading: '로딩 중...',
      error: '오류 발생',
      read_more: '더 읽기',
      learn_more: '더 알아보기'
    },
    
    group: {
      overview: '그룹 소개',
      members: '멤버',
      representative_work: '대표작',
      achievements: '주요 성과',
      debut_date: '데뷔 날짜',
      fandom: '팬덤 이름',
      company: '소속사',
      generation: '세대',
      leader: '리더',
      position: '포지션',
      birthday: '생일',
      nationality: '국적',
      height: '키',
      watch_mv: 'MV 보기'
    },
    
    idols: {
      title: 'JYP 엔터테인먼트 그룹',
      subtitle: 'JYP Entertainment 소속 모든 아티스트 그룹 탐색',
      search_placeholder: '그룹 이름 검색...',
      filter_all: '전체',
      filter_active: '활동 중',
      filter_hiatus: '휴식 중',
      sort_debut: '데뷔 날짜',
      sort_name: '그룹 이름',
      member_count: '명',
      debut_year: '데뷔'
    },
    
    hallyu: {
      title: '한류',
      subtitle: '한류 문화와 K-pop 현상 탐구',
      what_is_hallyu: '한류란 무엇인가?',
      kpop_history: 'K-pop 역사',
      global_impact: '글로벌 영향력',
      future_trends: '미래 트렌드'
    },
    
    about: {
      title: 'K-PULSE 소개',
      subtitle: '우리의 미션과 비전',
      our_mission: '우리의 미션',
      contact_us: '문의하기',
      your_name: '이름',
      your_email: '이메일',
      subject: '제목',
      message: '메시지',
      send: '보내기',
      sending: '전송 중...',
      success: '메시지가 성공적으로 전송되었습니다!',
      error: '전송 실패. 나중에 다시 시도해주세요.'
    },
    
    error404: {
      title: '404 - 페이지를 찾을 수 없습니다',
      oops: '죄송합니다!',
      message: '찾으시는 페이지가 존재하지 않습니다',
      suggestion: 'URL이 잘못되었거나 페이지가 삭제되었을 수 있습니다',
      back_home: '홈으로',
      browse_groups: '그룹 둘러보기'
    }
  },

  // 日本語 (Japanese)
  ja: {
    nav: {
      home: 'ホーム',
      idols: 'JYP アイドル',
      hallyu: '韓流',
      about: '紹介',
      timeline: 'タイムライン'
    },
    
    home: {
      hero_title: 'JYPエンターテインメントの魅力的な世界を探索',
      hero_subtitle: 'TWICEからStray Kidsまで、K-popの輝かしいスターたちに出会おう',
      explore_btn: '探索を始める',
      stats_groups: '活動グループ',
      stats_members: 'アーティスト',
      stats_awards: '音楽賞',
      stats_years: '年の歴史',
      daily_pick_title: '✨ 今日のおすすめ',
      daily_pick_badge: 'デイリーピック',
      daily_pick_loading: '読み込み中...',
      daily_pick_desc: '選択中...',
      explore_more: 'もっと見る',
      refresh: '🎲 更新',
      timeline_title: '📅 最新ニュース',
      timeline_more: 'もっと見る →',
      groups_title: 'JYPエンターテインメント グループ',
      groups_intro: 'JYP Entertainment所属のすべてのアクティブグループを探索しましょう。第2世代から第5世代まで、それぞれ独自の音楽スタイルと魅力を持っています。',
      view_all: 'すべてのグループを見る →'
    },
    
    timeline: {
      title: '📅 JYPエンターテインメント タイムライン',
      intro: '2020年から現在までのJYP Entertainmentグループの重要な瞬間を記録し、K-popのエキサイティングな旅を目撃しましょう',
      filter_all: 'すべて',
      category_debut: 'デビュー',
      category_comeback: 'カムバック',
      category_award: '賞',
      category_concert: 'コンサート',
      category_achievement: '業績',
      category_collaboration: 'コラボ',
      footer_updating: '✨ 継続的に更新中...',
      back_home: 'ホームに戻る'
    },
    
    footer: {
      description: 'JYPエンターテインメントとK-pop文化の探求',
      quick_links: 'クイックリンク',
      popular_groups: '人気グループ',
      contact: '連絡先',
      copyright: '© 2025 K-PULSE — JYPとK-pop文化の探求',
      note: 'このウェブサイトは教育目的です。すべてのコンテンツは参考用です。'
    },
    
    common: {
      back_to_top: 'トップへ',
      loading: '読み込み中...',
      error: 'エラーが発生しました',
      read_more: '続きを読む',
      learn_more: 'もっと見る'
    },
    
    group: {
      overview: 'グループ紹介',
      members: 'メンバー',
      representative_work: '代表作',
      achievements: '主な実績',
      debut_date: 'デビュー日',
      fandom: 'ファンダム名',
      company: '所属事務所',
      generation: '世代',
      leader: 'リーダー',
      position: 'ポジション',
      birthday: '誕生日',
      nationality: '国籍',
      height: '身長',
      watch_mv: 'MV を見る'
    },
    
    idols: {
      title: 'JYPエンターテインメント グループ',
      subtitle: 'JYP Entertainment所属のすべてのアーティストグループを探索',
      search_placeholder: 'グループ名を検索...',
      filter_all: 'すべて',
      filter_active: '活動中',
      filter_hiatus: '休止中',
      sort_debut: 'デビュー日',
      sort_name: 'グループ名',
      member_count: '名',
      debut_year: 'デビュー'
    },
    
    hallyu: {
      title: '韓流',
      subtitle: '韓流文化とK-pop現象の探求',
      what_is_hallyu: '韓流とは？',
      kpop_history: 'K-popの歴史',
      global_impact: 'グローバルな影響',
      future_trends: '今後のトレンド'
    },
    
    about: {
      title: 'K-PULSEについて',
      subtitle: '私たちのミッションとビジョン',
      our_mission: '私たちのミッション',
      contact_us: 'お問い合わせ',
      your_name: 'お名前',
      your_email: 'メールアドレス',
      subject: '件名',
      message: 'メッセージ',
      send: '送信',
      sending: '送信中...',
      success: 'メッセージが正常に送信されました！',
      error: '送信に失敗しました。後でもう一度お試しください。'
    },
    
    error404: {
      title: '404 - ページが見つかりません',
      oops: 'おっと！',
      message: 'お探しのページは存在しません',
      suggestion: 'URLが間違っているか、ページが削除された可能性があります',
      back_home: 'ホームに戻る',
      browse_groups: 'グループを見る'
    }
  }
};

// 導出翻譯數據
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
