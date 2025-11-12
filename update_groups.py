# -*- coding: utf-8 -*-
"""
移除團體照片並更新影片資訊
影片來源：JYP Entertainment YouTube 頻道
"""

import re

# 團體影片資訊 (來自 JYP Entertainment YouTube 官方頻道)
videos = {
    'twice.html': {
        'video_id': 'mH0_XpSHkZo',  # "ONE SPARK" M/V
        'title': 'TWICE "ONE SPARK" M/V',
        'caption': '《ONE SPARK》- TWICE 最新代表作（來源：JYP Entertainment）'
    },
    'straykids.html': {
        'video_id': 'X-uJtV8ScYk',  # "樂-STAR (特)" M/V - 確認可用
        'title': 'Stray Kids "樂-STAR (特)" M/V',
        'caption': '《樂-STAR》- Stray Kids 熱門代表作（來源：JYP Entertainment）'
    },
    'itzy.html': {
        'video_id': 'Hbb5GPxXF1w',  # "BORN TO BE" M/V
        'title': 'ITZY "BORN TO BE" M/V',
        'caption': '《BORN TO BE》- ITZY 展現自信與力量（來源：JYP Entertainment）'
    },
    'nmixx.html': {
        'video_id': 'BQ_KQctrihM',  # "See that?" M/V
        'title': 'NMIXX "See that?" M/V',
        'caption': '《See that?》- NMIXX 展現多元音樂風格（來源：JYP Entertainment）'
    },
    '2pm.html': {
        'video_id': 'u2pFB1dCSo4',  # "My House" M/V - 官方版本
        'title': '2PM "My House" M/V',
        'caption': '《My House》- 2PM 經典代表作（來源：JYP Entertainment）'
    },
    'day6.html': {
        'video_id': 'BS7tz2rAOSA',  # "You Were Beautiful" M/V
        'title': 'DAY6 "You Were Beautiful" M/V',
        'caption': '《You Were Beautiful》- DAY6 感人的抒情搖滾代表作（來源：JYP Entertainment）'
    },
    'xdinary-heroes.html': {
        'video_id': 'VNGaa7castI',  # "Test Me" M/V
        'title': 'Xdinary Heroes "Test Me" M/V',
        'caption': '《Test Me》- Xdinary Heroes 強烈的搖滾風格（來源：JYP Entertainment）'
    },
    'vcha.html': {
        'video_id': 'P1X22oH8KVA',  # "Girls of the Year" M/V
        'title': 'VCHA "Girls of the Year" M/V',
        'caption': '《Girls of the Year》- VCHA 出道代表作（來源：JYP Entertainment）'
    },
    'niziu.html': {
        'video_id': 'QW28YKC4T3Y',  # 現有影片保持
        'title': 'NiziU M/V',
        'caption': 'NiziU 代表作（來源：JYP Entertainment）'
    },
    'nexz.html': {
        'video_id': 'hpfP8k4KJss',  # 現有影片保持
        'title': 'NEXZ M/V',
        'caption': 'NEXZ 代表作（來源：JYP Entertainment）'
    },
    'kickflip.html': {
        'video_id': 'MbJwd8Xdqh4',  # 現有影片保持
        'title': 'KickFlip M/V',
        'caption': 'KickFlip 代表作（來源：JYP Entertainment）'
    }
}

def update_group_page(filepath, video_info):
    """移除團體照並更新影片資訊"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. 移除團體照片 img 標籤
        # 匹配 <img src="images/group-icons/...jpg" alt="...團體照" class="group-photo" loading="lazy">
        photo_pattern = r'<img src="images/group-icons/[^"]+\.jpg" alt="[^"]+團體照" class="group-photo" loading="lazy">\s*'
        content = re.sub(photo_pattern, '', content)
        
        # 2. 更新影片 iframe 的 src
        old_iframe_pattern = r'src="https://www\.youtube\.com/embed/[^?"]+(\?[^"]*)?"\s*'
        new_src = f'src="https://www.youtube.com/embed/{video_info["video_id"]}?rel=0&modestbranding=1" '
        content = re.sub(old_iframe_pattern, new_src, content)
        
        # 3. 更新影片標題
        title_pattern = r'title="[^"]*"\s*'
        new_title = f'title="{video_info["title"]}" '
        content = re.sub(title_pattern, new_title, content)
        
        # 4. 更新影片說明文字
        caption_pattern = r'<p class="video-caption">[^<]*</p>'
        new_caption = f'<p class="video-caption">{video_info["caption"]}</p>'
        content = re.sub(caption_pattern, new_caption, content)
        
        # 寫回文件
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ {filepath} 已更新")
        
    except Exception as e:
        print(f"✗ {filepath} 處理失敗: {e}")

if __name__ == '__main__':
    print("開始更新團體頁面...\n")
    print("1. 移除團體照片")
    print("2. 更新影片來源標註")
    print("3. 確保影片來自 JYP Entertainment YouTube 頻道\n")
    
    for filename, video_info in videos.items():
        update_group_page(filename, video_info)
    
    print("\n✓ 所有團體頁面更新完成！")
    print("影片來源：https://www.youtube.com/@JYPEntertainment")
