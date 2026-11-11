/* =========================================================================
   CV download counter – powered by GoatCounter (stafero.goatcounter.com)
   - Shows how often the CV was downloaded (click on "Download CV (PDF)").
   - Only the download is counted, as an event called "cv-download";
     no page views or visitor tracking (GoatCounter's script is NOT loaded).
   - Counts at most once per browser session.
   - Owner opt-out: open the page once with  ?nocount  (or #nocount) and this
     browser is never counted again. Undo with  ?count .
   - Opened from disk (file://) it shows a preview and never calls the service.
   - If GoatCounter is unreachable the pill simply stays hidden.
   Requires in GoatCounter: Settings → "Allow adding visitor counts on your website".
   ========================================================================= */
(function () {
  const cfg = (window.PROFILE || {}).cvCounter;
  const box = document.getElementById("cvCounter");
  const num = document.getElementById("cvCount");
  if (!cfg || !cfg.enabled || !box || !num) return;

  const local = location.protocol === "file:";
  const offset = cfg.offset | 0;                       // downloads counted before the switch to GoatCounter
  const readUrl = () => `${cfg.site}/counter/${encodeURIComponent(cfg.path)}.json`;
  const hitUrl = () => `${cfg.site}/count?p=${encodeURIComponent(cfg.path)}&t=${encodeURIComponent(cfg.title || cfg.path)}` +
    `&e=true&rnd=${Math.random().toString(36).slice(2)}`;

  const store = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } };
  const sess = (k, v) => { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; } };
  const q = location.search + location.hash;
  if (/[?#&]nocount\b/.test(q)) store("cvCounterOptOut", "1");
  if (/[?#&]count\b/.test(q)) store("cvCounterOptOut", null);
  const optOut = store("cvCounterOptOut") === "1";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let shown = 0, ready = false;
  function render(value, animate) {
    const target = Math.max(0, value | 0);
    if (!animate || reduce || target - shown < 2) { shown = target; num.textContent = target.toLocaleString("de-CH"); return; }
    const from = shown, t0 = performance.now(), dur = 1200;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      shown = Math.round(from + (target - from) * e);
      num.textContent = shown.toLocaleString("de-CH");
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  function show() { ready = true; box.hidden = false; requestAnimationFrame(() => box.classList.add("is-ready")); }

  // Read the current number (404 = nothing counted yet)
  async function read() {
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 6000);
    try {
      const r = await fetch(readUrl(), { cache: "no-store", signal: ctl.signal });
      if (r.status === 404) return 0;
      if (!r.ok) throw new Error(r.status);
      const j = await r.json();
      return parseInt(String(j.count || "0").replace(/\D/g, ""), 10) || 0;
    } finally { clearTimeout(t); }
  }

  if (local) {
    box.title = "Local preview – the live number appears once the page is published";
    render(offset); show();
  } else {
    read().then((v) => { render(v + offset, true); show(); }).catch(() => {});
  }

  // Count one download (a 1×1 image request – works on every browser, no CORS needed)
  function count() {
    if (local || optOut || sess("cvCounted")) return Promise.resolve();
    sess("cvCounted", "1");
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        if (ready) { render(shown + 1); num.classList.remove("bump"); void num.offsetWidth; num.classList.add("bump"); }
        resolve();
      };
      img.src = hitUrl();
    });
  }
  window.cvCounterHit = count;   // called by the download button (app.js)
})();
