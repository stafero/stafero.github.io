/* =========================================================================
   Hero banner – "governed data flow"
   A slow network of data nodes. Pulses travel along the links; when a pulse
   reaches a governance checkpoint (diamond) it is validated and the
   checkpoint briefly lights up green. Purely decorative (aria-hidden).
   - Respects prefers-reduced-motion (draws one static frame)
   - Pauses when the banner is off-screen or the tab is hidden
   - Follows the light/dark theme via the CSS variables
   ========================================================================= */
(function () {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const band = canvas.parentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const broken = canvas.dataset.mode === "broken";   // 404 page: checkpoints reject the data

  let W = 0, H = 0, DPR = 1, nodes = [], pulses = [], colors = {}, running = false, raf = 0, last = 0, spawnT = 0;
  const LINK = 150;                 // max link distance (px)

  function readColors() {
    const cs = getComputedStyle(document.documentElement);
    const v = (n, f) => (cs.getPropertyValue(n).trim() || f);
    colors = { accent: v("--accent", "#1f5fbf"), good: broken ? v("--bad", "#c2410c") : v("--good", "#1d7a4d"), muted: v("--muted", "#5d6170") };
  }

  function rgba(hex, a) {
    let h = hex.replace("#", "");
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    const n = parseInt(h, 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }

  function resize() {
    const r = canvas.getBoundingClientRect();
    // phones: lower pixel density keeps the animation light on battery and GPU
    DPR = Math.min(window.devicePixelRatio || 1, r.width < 700 ? 1.5 : 2);
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const count = Math.max(20, Math.min(90, Math.round((W * H) / (W < 700 ? 11000 : 13000))));
    nodes = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
      r: 1.4 + Math.random() * 1.6,
      gate: i % 9 === 0,              // ~11% are governance checkpoints
      glow: 0
    }));
    pulses = [];
    if (!running) draw(0);
  }

  function neighbours(n) {
    const out = [];
    for (const m of nodes) {
      if (m === n) continue;
      const d = Math.hypot(m.x - n.x, m.y - n.y);
      if (d < LINK) out.push(m);
    }
    return out;
  }

  function spawnPulse() {
    const a = nodes[(Math.random() * nodes.length) | 0];
    const nb = neighbours(a);
    if (!nb.length) return;
    pulses.push({ a, b: nb[(Math.random() * nb.length) | 0], t: 0, hops: 2 + ((Math.random() * 3) | 0) });
  }

  function step(dt) {
    const k = dt / 16.7;
    for (const n of nodes) {
      n.x += n.vx * k; n.y += n.vy * k;
      if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
      if (n.glow > 0) n.glow = Math.max(0, n.glow - 0.012 * k);
    }
    spawnT += dt;
    if (spawnT > 450 && pulses.length < 14) { spawnT = 0; spawnPulse(); }
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.t += 0.012 * k;
      if (p.t >= 1) {
        if (p.b.gate) {
          p.b.glow = 1;               // checkpoint reached: validated (profile) or rejected (404)
          if (broken) { pulses.splice(i, 1); continue; }
        }
        const nb = neighbours(p.b).filter((m) => m !== p.a);
        if (--p.hops <= 0 || !nb.length) { pulses.splice(i, 1); continue; }
        p.a = p.b; p.b = nb[(Math.random() * nb.length) | 0]; p.t = 0;
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // links
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          ctx.strokeStyle = rgba(colors.accent, 0.38 * (1 - d / LINK));
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    // nodes
    for (const n of nodes) {
      if (n.gate) {
        const s = 5.5;
        if (n.glow > 0) {
          ctx.fillStyle = rgba(colors.good, 0.25 * n.glow);
          ctx.beginPath(); ctx.arc(n.x, n.y, 10 + 8 * (1 - n.glow), 0, Math.PI * 2); ctx.fill();
        }
        ctx.save(); ctx.translate(n.x, n.y); ctx.rotate(Math.PI / 4);
        ctx.fillStyle = n.glow > 0.05 ? rgba(colors.good, 0.6 + 0.4 * n.glow) : rgba(colors.accent, 0.8);
        ctx.fillRect(-s / 2, -s / 2, s, s);
        ctx.restore();
      } else {
        ctx.fillStyle = rgba(colors.accent, 0.6);
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
    }
    // pulses
    for (const p of pulses) {
      const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
      ctx.fillStyle = rgba(colors.accent, 0.18);
      ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = rgba(colors.accent, 0.95);
      ctx.beginPath(); ctx.arc(x, y, 1.9, 0, Math.PI * 2); ctx.fill();
    }
  }

  function loop(ts) {
    const dt = last ? Math.min(ts - last, 50) : 16.7;
    last = ts;
    step(dt); draw();
    raf = requestAnimationFrame(loop);
  }
  function start() { if (running || reduce.matches || document.hidden) return; running = true; last = 0; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  readColors(); resize();
  if (reduce.matches) { for (let i = 0; i < 6; i++) spawnPulse(); pulses.forEach((p) => (p.t = Math.random())); draw(); }

  let visible = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((e) => { visible = e[0].isIntersecting; visible ? start() : stop(); }).observe(band);
  }
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : visible && start()));
  reduce.addEventListener && reduce.addEventListener("change", () => (reduce.matches ? (stop(), draw()) : start()));

  let rt, lastW = window.innerWidth;
  // iOS fires "resize" whenever the address bar slides in/out – only rebuild when the width really changes
  window.addEventListener("resize", () => {
    if (window.innerWidth === lastW) return;
    lastW = window.innerWidth; clearTimeout(rt); rt = setTimeout(resize, 150);
  });
  // re-read colours when the theme toggles or the OS scheme changes
  new MutationObserver(() => { readColors(); if (!running) draw(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { readColors(); if (!running) draw(); });

  start();
})();
