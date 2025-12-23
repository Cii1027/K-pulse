-- K-PULSE 聯絡表單資料庫結構
CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  ip TEXT,
  user_agent TEXT
);

-- 建立索引以加速查詢
CREATE INDEX IF NOT EXISTS idx_timestamp ON contact_messages(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_email ON contact_messages(email);
