# -*- coding: utf-8 -*-
"""
為各團體頁面添加 YouTube 影片區塊
來源：JYP Entertainment YouTube 頻道
"""

# 團體影片資訊 (來自 JYP Entertainment YouTube)
videos = {
    'twice.html': {
        'video_id': 'mH0_XpSHkZo',  # "ONE SPARK" M/V
        'title': 'TWICE - ONE SPARK MV',
        'caption': '《ONE SPARK》- TWICE 展現充滿活力的音樂風格'
    },
    'straykids.html': {
        'video_id': 'fwbYF9wJGFw',  # "Chk Chk Boom" M/V
        'title': 'Stray Kids - Chk Chk Boom MV',
        'caption': '《Chk Chk Boom》- Stray Kids 充滿力量的代表作'
    },
    'itzy.html': {
        'video_id': 'Hbb5GPxXF1w',  # "BORN TO BE" M/V
        'title': 'ITZY - BORN TO BE MV',
        'caption': '《BORN TO BE》- ITZY 展現自信與力量的代表作'
    },
    'nmixx.html': {
        'video_id': 'BQ_KQctrihM',  # "See that?" M/V (修正 ID)
        'title': 'NMIXX - See that? MV',
        'caption': '《See that?》- NMIXX 展現多元音樂風格'
    },
    '2pm.html': {
        'video_id': '4nTrQ3uS_0E',  # "My House" M/V
        'title': '2PM - My House MV',
        'caption': '《My House》- 2PM 經典代表作，展現成熟魅力'
    },
    'day6.html': {
        'video_id': 'BS7tz2rAOSA',  # "You Were Beautiful" M/V
        'title': 'DAY6 - You Were Beautiful MV',
        'caption': '《You Were Beautiful》- DAY6 感人的抒情搖滾代表作'
    },
    'xdinary-heroes.html': {
        'video_id': 'VNGaa7castI',  # "Test Me" M/V
        'title': 'Xdinary Heroes - Test Me MV',
        'caption': '《Test Me》- Xdinary Heroes 強烈的搖滾風格代表作'
    }
}

def add_video_section(filepath, video_info):
    """在團體簡介後添加代表作品影片區塊"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 檢查是否已有代表作品區塊
        if '<h2>代表作品</h2>' in content:
            print(f"✓ {filepath} 已有影片區塊，跳過")
            return
        
        # 影片區塊 HTML
        video_html = f'''
    <h2>代表作品</h2>
    <div class="video-container">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/{video_info['video_id']}?rel=0&modestbranding=1" 
        title="{video_info['title']}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        loading="lazy">
      </iframe>
      <p class="video-caption">{video_info['caption']}</p>
    </div>
'''
        
        # 在「成員與個人經歷」之前插入
        if '<h2>成員與個人經歷</h2>' in content:
            content = content.replace('<h2>成員與個人經歷</h2>', video_html + '\n    <h2>成員與個人經歷</h2>')
        elif '<h2>成員</h2>' in content:
            content = content.replace('<h2>成員</h2>', video_html + '\n    <h2>成員</h2>')
        else:
            print(f"⚠ {filepath} 找不到插入位置")
            return
        
        # 寫回文件
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ {filepath} 已添加影片區塊")
        
    except Exception as e:
        print(f"✗ {filepath} 處理失敗: {e}")

if __name__ == '__main__':
    print("開始為團體頁面添加 YouTube 影片...\n")
    
    for filename, video_info in videos.items():
        add_video_section(filename, video_info)
    
    print("\n✓ 影片添加完成！")
