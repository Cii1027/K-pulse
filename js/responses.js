const CONTACT_API_URL = '/api/contact';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('adminKeyForm');
  const container = document.getElementById('responsesContainer');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const key = document.getElementById('adminKey').value.trim();
    const limit = Number(document.getElementById('limit').value || 50);

    if (!key) {
      container.innerHTML = messageHtml('error', '請輸入管理密鑰');
      return;
    }

    container.innerHTML = messageHtml('info', '載入中...');
    try {
      const resp = await fetch(`${CONTACT_API_URL}?limit=${encodeURIComponent(limit)}&key=${encodeURIComponent(key)}`);
      const data = await resp.json();
      if (!resp.ok || !data.ok) throw new Error(data.error || '載入失敗');

      container.innerHTML = renderTable(data.data || []);
    } catch (err) {
      container.innerHTML = messageHtml('error', '載入失敗：' + String(err.message || err));
    }
  });
});

function renderTable(rows) {
  if (!rows.length) return messageHtml('info', '目前沒有回覆');

  const headers = ['ID','時間','姓名','Email','主旨','訊息','IP','User-Agent'];
  const th = headers.map(h => `<th>${escapeHtml(h)}</th>`).join('');
  const tr = rows.map(r => `
    <tr>
      <td>${escapeHtml(String(r.id))}</td>
      <td>${escapeHtml(formatTs(r.timestamp))}</td>
      <td>${escapeHtml(r.name)}</td>
      <td>${escapeHtml(r.email)}</td>
      <td>${escapeHtml(r.subject)}</td>
      <td>${escapeHtml(r.message)}</td>
      <td>${escapeHtml(r.ip || '')}</td>
      <td>${escapeHtml(r.user_agent || '')}</td>
    </tr>
  `).join('');

  return `
    <div class="table-scroll">
      <table class="data-table">
        <thead><tr>${th}</tr></thead>
        <tbody>${tr}</tbody>
      </table>
    </div>
  `;
}

function messageHtml(type, text) {
  const icon = type === 'error' ? '✕' : type === 'success' ? '✓' : 'ℹ️';
  return `<div class="form-message form-message-${type}"><span class="message-icon">${icon}</span><span class="message-text">${escapeHtml(text)}</span></div>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatTs(ts) {
  try {
    const d = new Date(ts);
    return d.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
  } catch {
    return ts;
  }
}
