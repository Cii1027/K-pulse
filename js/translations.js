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
      
      // 關於 JYP 區塊
      about_jyp_title: '關於 JYP Entertainment',
      about_jyp_p1: 'JYP娛樂（JYP Entertainment）成立於1997年，由韓國知名音樂製作人朴軫永創立，是韓國三大娛樂公司之一。',
      about_jyp_p2: '公司以打造「有實力的藝人」為核心理念，不僅注重藝人的才華培養，更強調品德教育。JYP旗下藝人包括Wonder Girls、2PM、TWICE、Stray Kids、ITZY、NMIXX等知名團體，在全球K-pop市場擁有巨大影響力。',
      about_jyp_p3: '特別是TWICE被譽為「國民女團」，而Stray Kids則以自製音樂和實驗性風格在全球獲得高度評價，多次登上Billboard 200榜首，成為JYP首位百萬銷量藝人。',
      achievements_title: '主要成就',
      achievement_1: 'TWICE：連續三年登上蓋洛普韓國民調十大藝人榜單',
      achievement_2: 'Stray Kids：首張百萬銷量專輯創JYP歷史紀錄',
      achievement_3: '多次獲得Mnet亞洲音樂大獎（MAMA）、melon音樂獎等殊榮',
      achievement_4: '旗下藝人在日本、美國等海外市場表現卓越',
      
      // 統計數據
      stats_title: '令人驚艷的成就',
      stat_1_number: '10億+',
      stat_1_label: 'TWICE Spotify總串流量',
      stat_2_number: '500萬+',
      stat_2_label: 'Stray Kids 專輯預售量',
      stat_3_number: '4次',
      stat_3_label: 'Stray Kids Billboard 200冠軍',
      stat_4_number: '9年',
      stat_4_label: 'TWICE全員續約創JYP歷史',
      
      // 原有的
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
      view_all: '查看所有團體',
      
      // 團體卡片
      members_count: '名成員',
      overseas_groups: '海外團體',
      card_2pm_desc: '「野獸偶像」，以強烈男性魅力和高難度表演著稱，韓國第二代男團代表之一',
      card_straykids_desc: '以自製音樂與實驗性風格征服全球，3RACHA 創作小分隊打造獨特音樂色彩',
      card_itzy_desc: '以「DALLA DALLA」出道即獲九冠王，Girl Crush風格與自信態度席捲全球',
      card_twice_desc: '「國民女團」，以甜美風格與多首熱門曲目稱霸韓日市場，全球粉絲無數',
      card_kickflip_desc: 'JYP 2025年最新男團，充滿活力與年輕氣息的新生代代表',
      card_nmixx_desc: '以「MIXX POP」獨創音樂風格挑戰傳統，展現實力派新生代女團魅力',
      card_day6_desc: '全能樂隊，成員全員作詞作曲，「HAPPY」達成 Perfect All-Kill，韓國樂團史上第一',
      card_xdinary_desc: '搖滾樂隊，結合 K-pop 與搖滾元素，展現新世代樂團風貌',
      card_niziu_desc: 'JYP×Sony Music Japan 合作企劃，引領日本第五代女團風潮',
      card_nexz_desc: 'JYP 首個日本男團，融合 K-pop 訓練體系與日本在地文化',
      card_vcha_desc: 'JYP 首個美國女團，透過選秀節目「A2K」誕生，進軍北美市場'
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
      members_experience: '成員與個人經歷',
      representative_work: '代表作品',
      achievements: '主要成就',
      debut_date: '出道日期',
      debut: '出道',
      fandom: '粉絲名稱',
      company: '所屬公司',
      generation: '世代',
      leader: '隊長',
      position: '定位',
      role: '職務',
      birthday: '生日',
      nationality: '國籍',
      height: '身高',
      watch_mv: '觀看 MV',
      back_to_idols: '回到偶像總覽',
      
      // 職務翻譯
      main_vocal: '主唱',
      lead_vocal: '領唱',
      sub_vocal: '副唱',
      main_rapper: '主饒舌',
      lead_rapper: '領饒舌',
      sub_rapper: '副饒舌',
      main_dancer: '主舞',
      lead_dancer: '領舞',
      sub_dancer: '副舞',
      visual: '視覺',
      center: '中心',
      face: '門面',
      maknae: '忙內',
      all_rounder: '全能',
      producer: '製作人',
      composer: '作曲',
      lyricist: '作詞'
    },
    
    // Idols 頁面
    idols: {
      title: 'JYP 偶像團體',
      subtitle: '探索 JYP Entertainment 的所有藝人團體',
      search_placeholder: '搜尋團體名稱、成員或關鍵字...',
      filter_all: '全部',
      filter_active: '活動中',
      filter_hiatus: '休息中',
      sort_debut: '出道時間',
      sort_name: '團體名稱',
      member_count: '名成員',
      debut_year: '出道',
      main_achievements: '主要成就',
      representative_works: '代表作品',
      latest_mv: '最新 M/V',
      no_results: '😕 找不到符合搜尋條件的團體',
      data_source: '© 2025 K-PULSE | 資料來源：維基百科'
    },
    
    // Hallyu 頁面
    hallyu: {
      title: '韓流探討',
      subtitle: '深入了解韓流文化與 K-pop 現象',
      what_is_hallyu: '什麼是韓流？',
      kpop_history: 'K-pop 發展史',
      global_impact: '全球影響力',
      future_trends: '未來趨勢',
      chapter_nav_title: '章節導航',
      jump_to: '快速跳轉',
      back_to_top: '回到頂部'
    },
    
    // About 頁面
    about: {
      title: '關於 K-PULSE',
      subtitle: '我們的使命與願景',
      our_mission: '我們的使命',
      mission_desc: 'K-PULSE 致力於成為最全面、最專業的 JYP 娛樂與 K-pop 文化資訊平台。我們相信音樂無國界,透過精心整理的內容,讓每一位粉絲都能深入了解自己喜愛的偶像團體。',
      features_title: '網站特色',
      feature_comprehensive: '全面資訊',
      feature_comprehensive_desc: '涵蓋 JYP 娛樂旗下所有廠牌的 11 個團體,從 TWICE 到 KickFlip,提供最完整的成員資料與團體介紹。',
      feature_design: '精美設計',
      feature_design_desc: '響應式設計適配各種裝置,日夜模式切換,為您提供最佳瀏覽體驗。',
      feature_search: '快速搜尋',
      feature_search_desc: '強大的搜尋功能讓您快速找到想要的團體和成員資訊。',
      feature_culture: '韓流文化',
      feature_culture_desc: '深度探討 K-pop 文化現象,從音樂、舞蹈到時尚,全方位解析韓流魅力。',
      contact_us: '聯絡我們',
      contact_intro: '如有任何問題、建議或合作意向,歡迎透過以下表單與我們聯繫:',
      form_name: '姓名',
      form_email: '電子郵件',
      form_subject: '主旨',
      form_message: '訊息內容',
      form_required: '*',
      form_submit: '送出訊息',
      form_name_placeholder: '請輸入您的姓名',
      form_email_placeholder: 'example@email.com',
      form_message_placeholder: '請詳細描述您的問題或建議...',
      subject_select: '請選擇主旨',
      subject_feedback: '網站意見回饋',
      subject_content: '內容建議',
      subject_cooperation: '合作提案',
      subject_technical: '技術問題',
      subject_other: '其他',
      privacy_title: '隱私權聲明:',
      privacy_desc: '您提供的個人資訊僅用於回覆您的詢問,我們不會將您的資料分享給第三方。',
      disclaimer_title: '免責聲明',
      disclaimer_desc: '本網站為個人學習與展示用途建立,所有內容僅供參考。網站中使用的圖片、影片及相關內容版權歸原作者及 JYP Entertainment 所有。如有侵權,請聯繫我們,我們將立即移除相關內容。',
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
      
      about_jyp_title: 'About JYP Entertainment',
      about_jyp_p1: 'JYP Entertainment was founded in 1997 by renowned Korean music producer Park Jin-young, and is one of the Big 3 entertainment companies in South Korea.',
      about_jyp_p2: 'The company\'s core philosophy is to nurture "talented artists," focusing not only on artistic development but also on character education. JYP artists include Wonder Girls, 2PM, TWICE, Stray Kids, ITZY, NMIXX and other renowned groups, with massive influence in the global K-pop market.',
      about_jyp_p3: 'Notably, TWICE is hailed as the "Nation\'s Girl Group," while Stray Kids has gained worldwide acclaim with their self-produced music and experimental style, topping the Billboard 200 multiple times and becoming JYP\'s first million-selling artist.',
      achievements_title: 'Major Achievements',
      achievement_1: 'TWICE: Ranked in Gallup Korea\'s Top 10 Artists for 3 consecutive years',
      achievement_2: 'Stray Kids: First million-selling album in JYP history',
      achievement_3: 'Multiple wins at Mnet Asian Music Awards (MAMA) and Melon Music Awards',
      achievement_4: 'Outstanding performance in overseas markets including Japan and the US',
      
      stats_title: 'Impressive Achievements',
      stat_1_number: '10B+',
      stat_1_label: 'TWICE Spotify Total Streams',
      stat_2_number: '5M+',
      stat_2_label: 'Stray Kids Album Pre-orders',
      stat_3_number: '4x',
      stat_3_label: 'Stray Kids Billboard 200 #1',
      stat_4_number: '9 Years',
      stat_4_label: 'TWICE Full Group Contract Renewal',
      
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
      timeline_more: 'View All Updates →',
      groups_title: 'JYP Entertainment Groups',
      groups_intro: 'Explore all active groups under JYP Entertainment, from 2nd to 5th generation, each with unique musical styles and charms.',
      view_all: 'View All Groups',
      
      // Group cards
      members_count: ' Members',
      overseas_groups: 'International Groups',
      card_2pm_desc: '"Beast Idols" known for powerful masculine charm and difficult performances, one of Korea\'s 2nd gen boy group representatives',
      card_straykids_desc: 'Conquering the world with self-produced music and experimental style, 3RACHA sub-unit creates unique musical colors',
      card_itzy_desc: 'Achieved nine music show wins with debut "DALLA DALLA", Girl Crush style and confident attitude sweeping globally',
      card_twice_desc: '"Nation\'s Girl Group" dominating Korean and Japanese markets with sweet style and numerous hit songs, countless fans worldwide',
      card_kickflip_desc: 'JYP\'s newest boy group in 2025, representing the new generation with energy and youthful vibes',
      card_nmixx_desc: 'Challenging traditions with original "MIXX POP" music style, showcasing powerful new generation girl group charm',
      card_day6_desc: 'All-around band with all members composing, "HAPPY" achieved Perfect All-Kill, first in Korean band history',
      card_xdinary_desc: 'Rock band combining K-pop and rock elements, showcasing new generation band style',
      card_niziu_desc: 'JYP×Sony Music Japan collaboration project, leading Japan\'s 5th generation girl group wave',
      card_nexz_desc: 'JYP\'s first Japanese boy group, merging K-pop training system with Japanese local culture',
      card_vcha_desc: 'JYP\'s first American girl group, born through reality show "A2K", advancing into North American market'
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
      members_experience: 'Members & Personal History',
      representative_work: 'Representative Works',
      achievements: 'Main Achievements',
      debut_date: 'Debut Date',
      debut: 'Debut',
      fandom: 'Fandom Name',
      company: 'Company',
      generation: 'Generation',
      leader: 'Leader',
      position: 'Position',
      role: 'Role',
      birthday: 'Birthday',
      nationality: 'Nationality',
      height: 'Height',
      watch_mv: 'Watch MV',
      back_to_idols: 'Back to Idols',
      
      // Role translations
      main_vocal: 'Main Vocal',
      lead_vocal: 'Lead Vocal',
      sub_vocal: 'Sub Vocal',
      main_rapper: 'Main Rapper',
      lead_rapper: 'Lead Rapper',
      sub_rapper: 'Sub Rapper',
      main_dancer: 'Main Dancer',
      lead_dancer: 'Lead Dancer',
      sub_dancer: 'Sub Dancer',
      visual: 'Visual',
      center: 'Center',
      face: 'Face',
      maknae: 'Maknae',
      all_rounder: 'All-Rounder',
      producer: 'Producer',
      composer: 'Composer',
      lyricist: 'Lyricist'
    },
    
    idols: {
      title: 'JYP Entertainment Groups',
      subtitle: 'Explore all artist groups under JYP Entertainment',
      search_placeholder: 'Search group name, members or keywords...',
      filter_all: 'All',
      filter_active: 'Active',
      filter_hiatus: 'On Hiatus',
      sort_debut: 'Debut Date',
      sort_name: 'Group Name',
      member_count: 'Members',
      debut_year: 'Debut',
      main_achievements: 'Main Achievements',
      representative_works: 'Representative Works',
      latest_mv: 'Latest M/V',
      no_results: '😕 No groups found matching your search',
      data_source: '© 2025 K-PULSE | Source: Wikipedia'
    },
    
    hallyu: {
      title: 'Hallyu Wave',
      subtitle: 'Exploring Korean Wave Culture & K-pop Phenomenon',
      what_is_hallyu: 'What is Hallyu?',
      kpop_history: 'K-pop History',
      global_impact: 'Global Impact',
      future_trends: 'Future Trends',
      chapter_nav_title: 'Chapter Navigation',
      jump_to: 'Jump to',
      back_to_top: 'Back to Top'
    },
    
    about: {
      title: 'About K-PULSE',
      subtitle: 'Our Mission & Vision',
      our_mission: 'Our Mission',
      mission_desc: 'K-PULSE is dedicated to becoming the most comprehensive and professional information platform for JYP Entertainment and K-pop culture. We believe music knows no borders, and through carefully curated content, we help every fan deeply understand their favorite idol groups.',
      features_title: 'Website Features',
      feature_comprehensive: 'Comprehensive Information',
      feature_comprehensive_desc: 'Covering all 11 groups under JYP Entertainment labels, from TWICE to KickFlip, providing the most complete member profiles and group introductions.',
      feature_design: 'Beautiful Design',
      feature_design_desc: 'Responsive design adapts to all devices, with day/night mode toggle for the best browsing experience.',
      feature_search: 'Quick Search',
      feature_search_desc: 'Powerful search functionality helps you quickly find desired group and member information.',
      feature_culture: 'Hallyu Culture',
      feature_culture_desc: 'In-depth exploration of K-pop cultural phenomenon, from music and dance to fashion, comprehensively analyzing Hallyu charm.',
      contact_us: 'Contact Us',
      contact_intro: 'If you have any questions, suggestions or collaboration proposals, feel free to contact us through the form below:',
      form_name: 'Name',
      form_email: 'Email',
      form_subject: 'Subject',
      form_message: 'Message',
      form_required: '*',
      form_submit: 'Send Message',
      form_name_placeholder: 'Please enter your name',
      form_email_placeholder: 'example@email.com',
      form_message_placeholder: 'Please describe your question or suggestion in detail...',
      subject_select: 'Please select a subject',
      subject_feedback: 'Website Feedback',
      subject_content: 'Content Suggestion',
      subject_cooperation: 'Collaboration Proposal',
      subject_technical: 'Technical Issue',
      subject_other: 'Other',
      privacy_title: 'Privacy Statement:',
      privacy_desc: 'Your personal information is only used to respond to your inquiry. We will not share your data with third parties.',
      disclaimer_title: 'Disclaimer',
      disclaimer_desc: 'This website is created for personal learning and demonstration purposes, and all content is for reference only. Images, videos, and related content used on the website are copyrighted by their original authors and JYP Entertainment. If there is any infringement, please contact us and we will remove the relevant content immediately.',
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
      
      about_jyp_title: 'JYP Entertainment 소개',
      about_jyp_p1: 'JYP 엔터테인먼트는 1997년 유명 음악 프로듀서 박진영이 설립했으며, 한국 3대 엔터테인먼트 회사 중 하나입니다.',
      about_jyp_p2: '회사는 "실력 있는 아티스트" 육성을 핵심 이념으로 하며, 예술적 재능뿐만 아니라 인성 교육도 중시합니다. JYP 소속 아티스트로는 Wonder Girls, 2PM, TWICE, Stray Kids, ITZY, NMIXX 등 유명 그룹이 있으며, 글로벌 K-pop 시장에서 큰 영향력을 발휘하고 있습니다.',
      about_jyp_p3: '특히 TWICE는 "국민 걸그룹"으로 불리며, Stray Kids는 자체 제작 음악과 실험적인 스타일로 전 세계적으로 높은 평가를 받으며 여러 차례 Billboard 200 1위에 올라 JYP 최초 밀리언셀러 아티스트가 되었습니다.',
      achievements_title: '주요 성과',
      achievement_1: 'TWICE: 갤럽 코리아 설문조사 톱10 아티스트 3년 연속 선정',
      achievement_2: 'Stray Kids: JYP 역사상 첫 밀리언셀러 앨범',
      achievement_3: 'Mnet 아시안 뮤직 어워드(MAMA), 멜론 뮤직 어워드 등 다수 수상',
      achievement_4: '일본, 미국 등 해외 시장에서 뛰어난 성과',
      
      stats_title: '놀라운 성과',
      stat_1_number: '10억+',
      stat_1_label: 'TWICE Spotify 총 스트리밍',
      stat_2_number: '500만+',
      stat_2_label: 'Stray Kids 앨범 예약 판매',
      stat_3_number: '4회',
      stat_3_label: 'Stray Kids Billboard 200 1위',
      stat_4_number: '9년',
      stat_4_label: 'TWICE 전원 재계약 JYP 역사',
      
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
      view_all: '모든 그룹 보기 →',
      
      // 그룹 카드
      members_count: '명',
      overseas_groups: '해외 그룹',
      card_2pm_desc: '"야수돌", 강렬한 남성미와 고난도 퍼포먼스로 유명한 한국 2세대 보이그룹 대표',
      card_straykids_desc: '자체 제작 음악과 실험적 스타일로 전 세계를 정복, 3RACHA 창작 유닛이 독특한 음악 색깔 구축',
      card_itzy_desc: '"DALLA DALLA"로 데뷔 동시 9관왕 달성, Girl Crush 스타일과 자신감 넘치는 태도로 전 세계 석권',
      card_twice_desc: '"국민 걸그룹", 달콤한 스타일과 수많은 히트곡으로 한일 시장 석권, 전 세계 무수한 팬 보유',
      card_kickflip_desc: 'JYP 2025년 최신 보이그룹, 에너지와 젊은 감성이 넘치는 신세대 대표',
      card_nmixx_desc: '"MIXX POP" 독창적 음악 스타일로 전통에 도전, 실력파 신세대 걸그룹 매력 발산',
      card_day6_desc: '만능 밴드, 멤버 전원 작사·작곡, "HAPPY"로 Perfect All-Kill 달성, 한국 밴드 사상 최초',
      card_xdinary_desc: '록 밴드, K-pop과 록 요소 결합, 신세대 밴드 풍모 선보임',
      card_niziu_desc: 'JYP×Sony Music Japan 합작 프로젝트, 일본 5세대 걸그룹 열풍 선도',
      card_nexz_desc: 'JYP 첫 일본 보이그룹, K-pop 훈련 시스템과 일본 현지 문화 융합',
      card_vcha_desc: 'JYP 첫 미국 걸그룹, 오디션 프로그램 "A2K"를 통해 탄생, 북미 시장 진출'
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
      members_experience: '멤버 및 개인 이력',
      representative_work: '대표작',
      achievements: '주요 성과',
      debut_date: '데뷔 날짜',
      debut: '데뷔',
      fandom: '팬덤 이름',
      company: '소속사',
      generation: '세대',
      leader: '리더',
      position: '포지션',
      role: '역할',
      birthday: '생일',
      nationality: '국적',
      height: '키',
      watch_mv: 'MV 보기',
      back_to_idols: '아이돌 개요로 돌아가기',
      
      // 역할 번역
      main_vocal: '메인 보컬',
      lead_vocal: '리드 보컬',
      sub_vocal: '서브 보컬',
      main_rapper: '메인 래퍼',
      lead_rapper: '리드 래퍼',
      sub_rapper: '서브 래퍼',
      main_dancer: '메인 댄서',
      lead_dancer: '리드 댄서',
      sub_dancer: '서브 댄서',
      visual: '비주얼',
      center: '센터',
      face: '페이스',
      maknae: '막내',
      all_rounder: '올라운더',
      producer: '프로듀서',
      composer: '작곡가',
      lyricist: '작사가'
    },
    
    idols: {
      title: 'JYP 엔터테인먼트 그룹',
      subtitle: 'JYP Entertainment 소속 모든 아티스트 그룹 탐색',
      search_placeholder: '그룹 이름, 멤버 또는 키워드 검색...',
      filter_all: '전체',
      filter_active: '활동 중',
      filter_hiatus: '휴식 중',
      sort_debut: '데뷔 날짜',
      sort_name: '그룹 이름',
      member_count: '명',
      debut_year: '데뷔',
      main_achievements: '주요 성과',
      representative_works: '대표작',
      latest_mv: '최신 M/V',
      no_results: '😕 검색 조건과 일치하는 그룹이 없습니다',
      data_source: '© 2025 K-PULSE | 출처: 위키백과'
    },
    
    hallyu: {
      title: '한류',
      subtitle: '한류 문화와 K-pop 현상 탐구',
      what_is_hallyu: '한류란 무엇인가?',
      kpop_history: 'K-pop 역사',
      global_impact: '글로벌 영향력',
      future_trends: '미래 트렌드',
      chapter_nav_title: '챕터 내비게이션',
      jump_to: '바로가기',
      back_to_top: '맨 위로'
    },
    
    about: {
      title: 'K-PULSE 소개',
      subtitle: '우리의 미션과 비전',
      our_mission: '우리의 미션',
      mission_desc: 'K-PULSE는 JYP 엔터테인먼트와 K-pop 문화에 대한 가장 포괄적이고 전문적인 정보 플랫폼이 되는 것을 목표로 합니다. 우리는 음악에는 국경이 없다고 믿으며, 신중하게 큐레이션된 콘텐츠를 통해 모든 팬이 좋아하는 아이돌 그룹을 깊이 이해할 수 있도록 돕습니다.',
      features_title: '웹사이트 기능',
      feature_comprehensive: '포괄적인 정보',
      feature_comprehensive_desc: 'JYP Entertainment 레이블 소속 11개 그룹 모두를 다루며, TWICE부터 KickFlip까지 가장 완벽한 멤버 프로필과 그룹 소개를 제공합니다.',
      feature_design: '아름다운 디자인',
      feature_design_desc: '반응형 디자인으로 모든 기기에 적응하며, 낮/밤 모드 전환으로 최고의 브라우징 경험을 제공합니다.',
      feature_search: '빠른 검색',
      feature_search_desc: '강력한 검색 기능으로 원하는 그룹 및 멤버 정보를 빠르게 찾을 수 있습니다.',
      feature_culture: '한류 문화',
      feature_culture_desc: 'K-pop 문화 현상에 대한 심층 탐구로 음악과 춤에서 패션까지 한류의 매력을 종합적으로 분석합니다.',
      contact_us: '문의하기',
      contact_intro: '질문, 제안 또는 협업 제안이 있으시면 아래 양식을 통해 문의해 주세요:',
      form_name: '이름',
      form_email: '이메일',
      form_subject: '제목',
      form_message: '메시지',
      form_required: '*',
      form_submit: '메시지 보내기',
      form_name_placeholder: '이름을 입력하세요',
      form_email_placeholder: 'example@email.com',
      form_message_placeholder: '질문이나 제안을 자세히 설명해 주세요...',
      subject_select: '제목을 선택하세요',
      subject_feedback: '웹사이트 피드백',
      subject_content: '콘텐츠 제안',
      subject_cooperation: '협업 제안',
      subject_technical: '기술 문제',
      subject_other: '기타',
      privacy_title: '개인정보 보호:',
      privacy_desc: '귀하의 개인 정보는 문의에 응답하는 데만 사용됩니다. 귀하의 데이터를 제3자와 공유하지 않습니다.',
      disclaimer_title: '면책 조항',
      disclaimer_desc: '이 웹사이트는 개인 학습 및 시연 목적으로 만들어졌으며 모든 콘텐츠는 참고용입니다. 웹사이트에 사용된 이미지, 비디오 및 관련 콘텐츠는 원저작자 및 JYP Entertainment의 저작권입니다. 침해가 있는 경우 문의하시면 즉시 관련 콘텐츠를 삭제하겠습니다.',
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
      
      about_jyp_title: 'JYP Entertainmentについて',
      about_jyp_p1: 'JYPエンターテインメントは1997年に韓国の有名音楽プロデューサー、パク・ジニョンによって設立され、韓国3大エンターテインメント会社の一つです。',
      about_jyp_p2: '会社は「実力のあるアーティスト」の育成を中心理念とし、芸術的才能だけでなく人格教育も重視しています。JYP所属アーティストにはWonder Girls、2PM、TWICE、Stray Kids、ITZY、NMIXXなど有名グループがあり、グローバルK-pop市場で大きな影響力を持っています。',
      about_jyp_p3: '特にTWICEは「国民的ガールグループ」と称され、Stray Kidsは自主制作音楽と実験的なスタイルで世界的に高い評価を得て、複数回Billboard 200で1位を獲得し、JYP初のミリオンセラーアーティストとなりました。',
      achievements_title: '主な実績',
      achievement_1: 'TWICE：ギャラップコリア世論調査トップ10アーティストに3年連続選出',
      achievement_2: 'Stray Kids：JYP史上初のミリオンセラーアルバム',
      achievement_3: 'Mnetアジアンミュージックアワード（MAMA）、Melon Music Awardsなど多数受賞',
      achievement_4: '日本、アメリカなど海外市場で優れた成果',
      
      stats_title: '素晴らしい実績',
      stat_1_number: '10億+',
      stat_1_label: 'TWICE Spotify総再生回数',
      stat_2_number: '500万+',
      stat_2_label: 'Stray Kids アルバム予約販売',
      stat_3_number: '4回',
      stat_3_label: 'Stray Kids Billboard 200 1位',
      stat_4_number: '9年',
      stat_4_label: 'TWICE全員契約更新JYP史上初',
      
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
      view_all: 'すべてのグループを見る →',
      
      // グループカード
      members_count: '名',
      overseas_groups: '海外グループ',
      card_2pm_desc: '「野獣アイドル」、強烈な男性美と高難度パフォーマンスで有名な韓国第2世代ボーイグループの代表',
      card_straykids_desc: '自作音楽と実験的スタイルで世界を征服、3RACHAクリエイティブユニットが独特な音楽カラーを構築',
      card_itzy_desc: '「DALLA DALLA」でデビューと同時に9冠達成、ガールクラッシュスタイルと自信に満ちた態度で世界を席巻',
      card_twice_desc: '「国民的ガールグループ」、甘いスタイルと数々のヒット曲で韓日市場を制覇、世界中に無数のファン',
      card_kickflip_desc: 'JYP 2025年最新ボーイグループ、エネルギーと若々しい感性があふれる新世代の代表',
      card_nmixx_desc: '「MIXX POP」独創的な音楽スタイルで伝統に挑戦、実力派新世代ガールグループの魅力を発揮',
      card_day6_desc: '万能バンド、メンバー全員作詞作曲、「HAPPY」でPerfect All-Kill達成、韓国バンド史上初',
      card_xdinary_desc: 'ロックバンド、K-popとロック要素を融合、新世代バンドスタイルを披露',
      card_niziu_desc: 'JYP×Sony Music Japan共同プロジェクト、日本第5世代ガールグループブームをリード',
      card_nexz_desc: 'JYP初の日本ボーイグループ、K-popトレーニングシステムと日本のローカル文化を融合',
      card_vcha_desc: 'JYP初のアメリカガールグループ、オーディション番組「A2K」を通じて誕生、北米市場進出'
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
      members_experience: 'メンバーと個人の経歴',
      representative_work: '代表作',
      achievements: '主な実績',
      debut_date: 'デビュー日',
      debut: 'デビュー',
      fandom: 'ファンダム名',
      company: '所属事務所',
      generation: '世代',
      leader: 'リーダー',
      position: 'ポジション',
      role: '役割',
      birthday: '誕生日',
      nationality: '国籍',
      height: '身長',
      watch_mv: 'MV を見る',
      back_to_idols: 'アイドル一覧に戻る',
      
      // 役割の翻訳
      main_vocal: 'メインボーカル',
      lead_vocal: 'リードボーカル',
      sub_vocal: 'サブボーカル',
      main_rapper: 'メインラッパー',
      lead_rapper: 'リードラッパー',
      sub_rapper: 'サブラッパー',
      main_dancer: 'メインダンサー',
      lead_dancer: 'リードダンサー',
      sub_dancer: 'サブダンサー',
      visual: 'ビジュアル',
      center: 'センター',
      face: 'フェイス',
      maknae: 'マンネ',
      all_rounder: 'オールラウンダー',
      producer: 'プロデューサー',
      composer: '作曲家',
      lyricist: '作詞家'
    },
    
    idols: {
      title: 'JYPエンターテインメント グループ',
      subtitle: 'JYP Entertainment所属のすべてのアーティストグループを探索',
      search_placeholder: 'グループ名、メンバーまたはキーワードを検索...',
      filter_all: 'すべて',
      filter_active: '活動中',
      filter_hiatus: '休止中',
      sort_debut: 'デビュー日',
      sort_name: 'グループ名',
      member_count: '名',
      debut_year: 'デビュー',
      main_achievements: '主な実績',
      representative_works: '代表作',
      latest_mv: '最新M/V',
      no_results: '😕 検索条件に一致するグループが見つかりません',
      data_source: '© 2025 K-PULSE | 出典: Wikipedia'
    },
    
    hallyu: {
      title: '韓流',
      subtitle: '韓流文化とK-pop現象の探求',
      what_is_hallyu: '韓流とは？',
      kpop_history: 'K-popの歴史',
      global_impact: 'グローバルな影響',
      future_trends: '今後のトレンド',
      chapter_nav_title: 'チャプターナビゲーション',
      jump_to: 'ジャンプ',
      back_to_top: 'トップへ'
    },
    
    about: {
      title: 'K-PULSEについて',
      subtitle: '私たちのミッションとビジョン',
      our_mission: '私たちのミッション',
      mission_desc: 'K-PULSEは、JYPエンターテインメントとK-pop文化に関する最も包括的で専門的な情報プラットフォームになることを目指しています。音楽に国境はないと信じており、慎重に厳選されたコンテンツを通じて、すべてのファンがお気に入りのアイドルグループを深く理解できるようお手伝いします。',
      features_title: 'ウェブサイトの機能',
      feature_comprehensive: '包括的な情報',
      feature_comprehensive_desc: 'JYP Entertainmentレーベル所属の全11グループをカバーし、TWICEからKickFlipまで、最も完全なメンバープロフィールとグループ紹介を提供します。',
      feature_design: '美しいデザイン',
      feature_design_desc: 'レスポンシブデザインがすべてのデバイスに適応し、昼/夜モード切り替えで最高のブラウジング体験を提供します。',
      feature_search: '高速検索',
      feature_search_desc: '強力な検索機能により、目的のグループやメンバー情報を素早く見つけることができます。',
      feature_culture: '韓流文化',
      feature_culture_desc: 'K-pop文化現象の深い探求で、音楽とダンスからファッションまで、韓流の魅力を包括的に分析します。',
      contact_us: 'お問い合わせ',
      contact_intro: 'ご質問、ご提案、またはコラボレーションのご提案がありましたら、下記のフォームからお気軽にお問い合わせください:',
      form_name: 'お名前',
      form_email: 'メールアドレス',
      form_subject: '件名',
      form_message: 'メッセージ',
      form_required: '*',
      form_submit: 'メッセージを送信',
      form_name_placeholder: 'お名前を入力してください',
      form_email_placeholder: 'example@email.com',
      form_message_placeholder: 'ご質問やご提案を詳しく説明してください...',
      subject_select: '件名を選択してください',
      subject_feedback: 'ウェブサイトフィードバック',
      subject_content: 'コンテンツ提案',
      subject_cooperation: 'コラボレーション提案',
      subject_technical: '技術的問題',
      subject_other: 'その他',
      privacy_title: 'プライバシーに関する声明:',
      privacy_desc: 'お客様の個人情報は、お問い合わせへの対応にのみ使用されます。お客様のデータを第三者と共有することはありません。',
      disclaimer_title: '免責事項',
      disclaimer_desc: 'このウェブサイトは個人的な学習とデモンストレーション目的で作成されており、すべてのコンテンツは参考用です。ウェブサイトで使用されている画像、ビデオ、および関連コンテンツは、元の著作者およびJYP Entertainmentの著作権です。侵害がある場合は、お問い合わせいただければ、すぐに関連コンテンツを削除いたします。',
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
