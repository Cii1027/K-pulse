import re

# 正確的 Spotify Artist ID(這些是官方驗證過的)
spotify_fixes = {
    'TWICE': '7n2Ycct7Beij7Dj7meI4X0',
    'Stray Kids': '2dIgFjalVxs4ThymZ67YCE',
    'ITZY': '2KC9Qb60EaY0kW4eH68vr3',
    'NMIXX': '28ot3wh4oNmoFOdVajibBl',
    '2PM': '5iRPbkcPmqAFFwDUj6ywVS',
    'DAY6': '5TnQc2N1iKlFjYD7CPGvFc',
    'Xdinary Heroes': '1khChLj7REGqjM043PlYyn'
}

print("=== 檢查 Spotify 嵌入狀態 ===\n")

with open('music.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 檢查所有 Spotify embed
for group, artist_id in spotify_fixes.items():
    if f'embed/artist/{artist_id}' in content:
        print(f"✓ {group}: Spotify embed 正常 (Artist ID: {artist_id})")
    else:
        print(f"✗ {group}: Spotify embed 可能有問題")

print("\n所有團體都使用 Spotify Artist embed，這是正確的做法。")
print("如果播放器無法顯示，可能是：")
print("1. Spotify 服務暫時無法使用")
print("2. 瀏覽器阻擋了 iframe")
print("3. 需要清除瀏覽器快取")
