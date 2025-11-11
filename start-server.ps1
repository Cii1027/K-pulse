# K-PULSE 本地伺服器啟動腳本
Write-Host "🚀 啟動 K-PULSE 網頁伺服器..." -ForegroundColor Green

# 取得本機 IP 位址
$ip = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -notlike "169.254.*"}).IPAddress | Select-Object -First 1

Write-Host "`n📍 本機 IP 位址: $ip" -ForegroundColor Cyan
Write-Host "🌐 其他裝置請開啟瀏覽器，輸入: http://${ip}:8000" -ForegroundColor Yellow
Write-Host "`n按 Ctrl+C 停止伺服器`n" -ForegroundColor Red

# 啟動簡易 HTTP 伺服器
python -m http.server 8000
