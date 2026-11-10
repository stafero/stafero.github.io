/* =========================================================================
   CV download counter
   - Shows how often the CV was downloaded (click on "Download CV (PDF)").
   - Uses a free public counter service (config: cvCounter in data.js).
   - Counts at most once per browser session.
   - Owner opt-out: open the page once with  ?nocount  (or #nocount) and this
     browser is never counted again. Undo with  ?count .
   - Opened from disk (file://) it shows a preview and never calls the service.
   - If the service is unreachable the pill simply stays hidden.
   ========================================================================= */
(function () {
  const cfg = (window.PROFILE || {}).cvCounter;
  const box = document.getElementById("cvCounter");
  const num = document.getElementById("cvCount");
  if (!cfg || !cfg.enabled || !box || !num) return;

  const local = location.protocol === "file:";
  const base = `${cfg.service}/%s/${encodeURIComponent(cfg.namespace)}/${encodeURIComponent(cfg.key)}`;
  const url = (action) => base.replace("%s", action);

  const store = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } };
  const sess = (k, v) => { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; } };
  const q = location.search + location.hash;
  if (/[?#&]nocount\b/.test(q)) store("cvCounterOptOut", "1");
  if (/[?#&]count\b/.test(q)) store("cvCounterOptOut", null);
  const optOut = store("cvCounterOptOut") === "1";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let shown = 0;
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
  function show() { box.hidden = false; requestAnimationFrame(() => box.classList.add("is-ready")); }

  async function call(action) {
    // keepalive: the request completes even if the browser switches to the PDF
    const r = await fetch(url(action), { cache: "no-store", keepalive: true });
    if (r.status === 404 && action === "get") return 0;          // not created yet = nobody downloaded yet
    if (!r.ok) throw new Error(r.status);
    const j = await r.json();
    return typeof j.value === "number" ? j.value : 0;
  }

  // Initial value
  if (local) {
    box.title = "Local preview – the live number appears once the page is published";
    render(0); show();
  } else {
    call("get").then((v) => { render(v, true); show(); }).catch(() => {});
  }

  // Count an export (button or Ctrl+P), once per session
  function count() {
    if (local || optOut || sess("cvCounted")) return;
    sess("cvCounted", "1");
    call("hit").then((v) => {
      render(v);
      num.classList.remove("bump"); void num.offsetWidth; num.classList.add("bump");
      show();
    }).catch(() => {});
  }
  window.cvCounterHit = count;   // called by the download button (app.js)
})();
