// Röst-API för Kärnor. Cloudflare Worker + D1 (SQLite). Se README.md i den här mappen.
const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, PUT, OPTIONS",
  "access-control-allow-headers": "content-type",
};
const json = (o, status = 200) =>
  new Response(JSON.stringify(o), { status, headers: { "content-type": "application/json", "cache-control": "no-store", ...CORS } });

export default {
  async fetch(req, env) {
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
    const url = new URL(req.url);

    if (req.method === "GET" && url.pathname === "/votes") {
      const { results } = await env.DB.prepare("SELECT card, SUM(v) AS sum, COUNT(*) AS n FROM votes GROUP BY card").all();
      const out = {};
      for (const r of results) out[r.card] = { sum: r.sum, n: r.n };
      return json(out);
    }

    const m = url.pathname.match(/^\/votes\/([A-Za-z0-9-]{8,64})$/);
    if (req.method === "PUT" && m) {
      const text = await req.text();
      if (text.length > 20000) return json({ error: "too large" }, 413);
      let body;
      try { body = JSON.parse(text); } catch { return json({ error: "bad json" }, 400); }
      const names = body && body.names;
      if (!names || typeof names !== "object" || Array.isArray(names)) return json({ error: "bad names" }, 400);
      const rows = [];
      const keys = Object.keys(names);
      if (keys.length > 10) return json({ error: "too many names" }, 400);
      for (const name of keys) {
        if (typeof name !== "string" || name.length < 1 || name.length > 40) return json({ error: "bad name" }, 400);
        const votes = names[name];
        if (!votes || typeof votes !== "object") return json({ error: "bad votes" }, 400);
        const ids = Object.keys(votes);
        if (ids.length > 400) return json({ error: "too many votes" }, 400);
        for (const card of ids) {
          const v = votes[card];
          if (!/^[A-Za-z]{1,3}[0-9]{1,3}$/.test(card) || !Number.isInteger(v) || v < 1 || v > 5) return json({ error: "bad vote" }, 400);
          rows.push([name, card, v]);
        }
      }
      const client = m[1];
      const stmts = [env.DB.prepare("DELETE FROM votes WHERE client = ?").bind(client)];
      for (const [name, card, v] of rows) {
        stmts.push(env.DB.prepare("INSERT INTO votes (client, name, card, v) VALUES (?, ?, ?, ?)").bind(client, name, card, v));
      }
      await env.DB.batch(stmts);
      return json({ ok: true });
    }
    return json({ error: "not found" }, 404);
  },
};
