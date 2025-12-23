export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // CORS handling
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Ensure table exists (best-effort)
  try {
    await env.DB.exec(`
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
    `);
  } catch (e) {
    // ignore table create race errors
  }

  if (request.method === 'POST') {
    try {
      let data;
      const contentType = request.headers.get('content-type') || '';

      if (contentType.includes('application/json')) {
        data = await request.json();
      } else if (contentType.includes('application/x-www-form-urlencoded')) {
        const form = await request.formData();
        data = Object.fromEntries(form.entries());
      } else if (contentType.includes('multipart/form-data')) {
        const form = await request.formData();
        data = Object.fromEntries(form.entries());
      } else {
        // Try formData as fallback
        try {
          const form = await request.formData();
          data = Object.fromEntries(form.entries());
        } catch {
          return json({ error: 'Unsupported content type' }, 415, corsHeaders);
        }
      }

      const name = (data.name || '').trim();
      const email = (data.email || '').trim();
      const subject = (data.subject || '').trim();
      const message = (data.message || '').trim();

      if (!name || !email || !subject || !message) {
        return json({ error: '缺少必要欄位' }, 400, corsHeaders);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return json({ error: '電子郵件格式不正確' }, 400, corsHeaders);
      }

      const userAgent = request.headers.get('user-agent') || '';
      const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || '';
      const timestamp = new Date().toISOString();

      await env.DB.prepare(
        `INSERT INTO contact_messages (timestamp, name, email, subject, message, ip, user_agent)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      ).bind(timestamp, name, email, subject, message, ip, userAgent).run();

      return json({ ok: true }, 200, corsHeaders);
    } catch (err) {
      return json({ error: '儲存失敗', detail: String(err) }, 500, corsHeaders);
    }
  }

  if (request.method === 'GET') {
    // Simple admin auth via query key or header
    const key = url.searchParams.get('key') || request.headers.get('Authorization')?.replace('Bearer ', '') || '';
    if (!env.ADMIN_KEY || key !== env.ADMIN_KEY) {
      return json({ error: '未授權' }, 401, corsHeaders);
    }

    const limit = Number(url.searchParams.get('limit') || 100);
    const rows = await env.DB.prepare(
      `SELECT id, timestamp, name, email, subject, message, ip, user_agent
       FROM contact_messages
       ORDER BY id DESC
       LIMIT ?`
    ).bind(limit).all();

    return json({ ok: true, data: rows.results || [] }, 200, corsHeaders);
  }

  return json({ error: 'Method Not Allowed' }, 405, { ...corsHeaders, 'Allow': 'GET,POST,OPTIONS' });
}

function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...headers },
  });
}
