import os
import re

# 定義新的導航欄 HTML
new_nav = '''      <nav class="main-nav">
        <a href="index.html">首頁</a>
        <a href="idols.html">JYP 偶像</a>
        <a href="music.html">音樂</a>
        <a href="stats.html">統計數據</a>
        <a href="hallyu.html">韓流探討</a>
        <a href="about.html">關於我</a>
      </nav>'''

# 需要更新的檔案列表
files_to_update = [
    'idols.html',
    'hallyu.html',
    'twice.html',
    'straykids.html',
    'itzy.html',
    'nmixx.html',
    '2pm.html',
    'day6.html',
    'xdinary-heroes.html',
    'niziu.html',
    'nexz.html',
    'vcha.html',
    'kickflip.html',
    '404.html'
]

# 正則表達式模式來匹配導航欄
nav_pattern = r'<nav class="main-nav">.*?</nav>'

for filename in files_to_update:
    if os.path.exists(filename):
        print(f"正在更新 {filename}...")
        
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 使用正則表達式替換導航欄（使用 DOTALL 標誌以匹配換行符）
        updated_content = re.sub(nav_pattern, new_nav, content, flags=re.DOTALL)
        
        # 寫回檔案
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print(f"✓ {filename} 更新完成")
    else:
        print(f"✗ {filename} 不存在")

print("\n所有檔案已更新！")
print("新增頁面:")
print("  • music.html - 音樂播放器（Spotify 整合）")
print("  • stats.html - 統計數據視覺化")
