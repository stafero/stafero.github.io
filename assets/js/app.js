/* Renders window.PROFILE (data.js) into index.html */
(function () {
  const P = window.PROFILE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const tags = (arr) => '<ul class="tags">' + arr.map((t) => "<li>" + esc(t) + "</li>").join("") + "</ul>";

  /* Header / hero */
  const p = P.person;
  $("name").textContent = p.name;
  /* Headline: parts appear one after another, each with a single slow spin, then stay */
  (function headline() {
    const el = $("headline");
    const parts = p.headline.split(" · ");
    el.setAttribute("aria-label", p.headline);
    el.innerHTML = parts
      .map((t, i) => (i ? '<span class="hl-sep" aria-hidden="true"> · </span>' : "") + `<span class="hl-part" aria-hidden="true">${esc(t)}</span>`)
      .join("");
    const spans = [...el.querySelectorAll(".hl-part")];
    const seps = [...el.querySelectorAll(".hl-sep")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.matchMedia("print").matches) { el.classList.add("hl-static"); return; }
    el.classList.add("hl-anim");
    const reveal = (i) => {
      if (i >= spans.length) return;
      if (i > 0) seps[i - 1].classList.add("hl-in");
      const s = spans[i];
      s.addEventListener("animationend", () => setTimeout(() => reveal(i + 1), 450), { once: true });
      s.classList.add("hl-in", "hl-spin");
    };
    setTimeout(() => reveal(0), 500);
  })();
  $("location").textContent = p.location;
  $("summary").innerHTML = p.summary.concat(p.pageNote ? [p.pageNote] : []).map((s) => "<p>" + esc(s) + "</p>").join("");
  const email = Array.isArray(p.email) ? p.email.join("@") : p.email;
  const mail = "mailto:" + email;
  $("mailBtn").href = mail;
  $("mailBtn2").href = mail;
  $("mailBtn2").textContent = email;
  ["liBtn", "liBtn2", "recLink"].forEach((id) => ($(id).href = p.linkedin));
  $("stats").innerHTML = P.stats
    .map((s) => `<div class="stat"><dt>${esc(s.label)}</dt><dd>${esc(s.value)}<small>${esc(s.unit)}</small></dd></div>`)
    .join("");

  /* Experience (bullets beyond 4 collapsed) */
  const SHOW = 4;
  $("timeline").innerHTML = P.experience
    .map((e, i) => {
      const first = e.bullets.slice(0, SHOW).map((b) => "<li>" + b + "</li>").join("");
      const rest = e.bullets.slice(SHOW);
      const more = rest.length
        ? `<details class="more"><summary>Show ${rest.length} more</summary><ul class="bullets">${rest.map((b) => "<li>" + b + "</li>").join("")}</ul></details>`
        : "";
      return `<li class="job">
        <div class="job__period">${esc(e.period)}</div>
        <div class="job__body">
          <h3>${esc(e.role)} <span class="at">· ${esc(e.company)}</span></h3>
          <p class="job__meta">${esc(e.meta)}</p>
          <p class="job__intro">${esc(e.intro)}</p>
          <ul class="bullets">${first}</ul>${more}
          ${tags(e.tags)}
        </div></li>`;
    })
    .join("");

  /* Stories */
  $("storyGrid").innerHTML = P.stories
    .map((s) => `<article class="card story">
      <h3>${esc(s.title)}</h3>
      <p><span class="lbl">Challenge</span>${esc(s.challenge)}</p>
      <p><span class="lbl">Action</span>${esc(s.action)}</p>
      <p class="story__result"><span class="lbl">Result</span>${s.result}</p>
    </article>`)
    .join("");

  /* Projects */
  $("projectList").innerHTML = P.projects
    .map((pr) => `<article class="card project">
      <div class="project__head">
        <div>
          <h3>${esc(pr.name)}</h3>
          <p class="job__meta">${esc(pr.kind)} · ${esc(pr.period)}</p>
        </div>
        <span class="badge">${esc(pr.status)}</span>
      </div>
      <p class="pitch">${esc(pr.pitch || pr.summary)}</p>
      <details class="more"><summary>Technical details</summary><ul class="bullets">${pr.highlights.map((h) => "<li>" + h + "</li>").join("")}</ul></details>
      ${tags(pr.stack)}
    </article>`)
    .join("");
  $("projectsNote").textContent = P.projectsNote;

  /* Skills & languages */
  $("skillGrid").innerHTML = P.skills.map((g) => `<div class="panel"><h3>${esc(g.group)}</h3>${tags(g.items)}</div>`).join("");
  $("langList").innerHTML = p.languages.map(([l, lvl]) => `<li><b>${esc(l)}</b> ${esc(lvl)}</li>`).join("");

  /* Credentials */
  const cred = (c) => `<li><span class="cred__year">${esc(c.year)}</span><span><b>${esc(c.name)}</b><br><small>${esc(c.issuer)}${c.note ? " · " + esc(c.note) : ""}</small></span></li>`;
  $("certList").innerHTML = P.certifications.map(cred).join("");
  $("courseList").innerHTML = P.courses.map(cred).join("");
  $("eduList").innerHTML = P.education.map((e) => cred({ year: e.year, name: e.degree, issuer: e.school })).join("");

  /* Microsoft Learn */
  const ms = P.msLearn;
  $("msTotals").textContent = `${ms.totals.paths} learning paths · ${ms.totals.modules} modules`;
  $("msLink").href = ms.transcript;
  $("msPaths").innerHTML = ms.paths.map(([t, d]) => `<li><span>${esc(t)}</span><small>${esc(d)}</small></li>`).join("");
  $("msModules").innerHTML = Object.entries(ms.modules)
    .map(([topic, mods]) => `<details class="topic"><summary>${esc(topic)} <small>${mods.length} modules</small></summary>
      <table class="mods"><tbody>${mods.map(([t, d]) => `<tr><td>${esc(t)}</td><td>${esc(d)}</td></tr>`).join("")}</tbody></table>
    </details>`)
    .join("");

  /* Udemy */
  const done = P.udemy.filter((c) => c.status === "done").length;
  const prog = P.udemy.filter((c) => c.status === "progress").length;
  const plan = P.udemy.filter((c) => c.status === "planned").length;
  $("udemyTotals").textContent = `${done} completed · ${prog} in progress · ${plan} enrolled, up next`;
  const label = (c) =>
    c.status === "done" ? `<span class="st st--done">Completed ${esc(c.date || "")}</span>`
    : c.status === "progress" ? `<span class="st st--prog"><span class="bar"><i style="width:${c.progress}%"></i></span>${c.progress}%</span>`
    : `<span class="st st--plan">Up next</span>`;
  $("udemyList").innerHTML = P.udemy.map((c) => `<li><div class="udemy__head"><span><b>${esc(c.title)}</b><br><small>${esc(c.by)}</small></span>${label(c)}</div>${c.points ? `<ul class="udemy__pts">${c.points.map((x) => "<li>" + esc(x) + "</li>").join("")}</ul>` : ""}${c.skills ? tags(c.skills) : ""}</li>`).join("");

  /* Workshops & events */
  const today = new Date().toISOString().slice(0, 10);
  const MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const fmtDate = (iso) => { const [y, m, dd] = iso.split("-"); return `${+dd} ${MON[+m - 1]} ${y}`; };
  const evStatus = (w) => (w.date >= today ? ["Upcoming", "st--prog"] : w.status === "attended" ? ["Attended", "st--done"] : ["Registered", "st--plan"]);
  $("eventList").innerHTML = (P.workshops || [])
    .slice().sort((a, b) => b.date.localeCompare(a.date))
    .map((w) => { const [lbl, cls] = evStatus(w); return `<li class="event">
      <div class="event__date">${esc(fmtDate(w.date))}</div>
      <div class="event__body">
        <h3>${w.link ? `<a href="${esc(w.link)}" target="_blank" rel="noopener">${esc(w.title)}</a>` : esc(w.title)}</h3>
        <p class="job__meta">${esc(w.type)} · ${esc(w.organizer)} · ${esc(w.place)}</p>
        <p>${esc(w.about)}</p>
      </div>
      <span class="st ${cls}">${lbl}</span></li>`; })
    .join("");

  /* References */
  $("recGrid").innerHTML = P.recommendations
    .map((r) => `<figure class="card quote"><blockquote>“${esc(r.text)}”</blockquote><figcaption><b>${esc(r.name)}</b><br><small>${esc(r.role)}</small></figcaption></figure>`)
    .join("");

  /* Tabs: one group of sections visible at a time; hash-addressable */
  const panels = [...document.querySelectorAll(".tabpanel")];
  const tabOf = (id) => { const el = document.getElementById(id); return el && el.dataset.panel; };
  // Scroll so the target sits just below the sticky header (header height differs on phones)
  function jumpTo(el, smooth) {
    const head = document.querySelector(".topbar").offsetHeight;
    const y = el.getBoundingClientRect().top + window.scrollY - head - 8;
    window.scrollTo({ top: Math.max(0, y), behavior: smooth ? "smooth" : "auto" });
  }
  function showTab(tab, scroll) {
    if (!panels.some((p) => p.dataset.panel === tab)) tab = "experience";
    panels.forEach((p) => (p.hidden = p.dataset.panel !== tab));
    document.querySelectorAll("[data-tab]").forEach((a) => {
      const on = a.dataset.tab === tab;
      a.classList.toggle("active", on);
      if (a.getAttribute("role") === "tab") a.setAttribute("aria-selected", on);
    });
    const bar = document.querySelector(".nav"), act = bar.querySelector(".active");
    if (act) bar.scrollLeft = act.offsetLeft - bar.offsetLeft - (bar.clientWidth - act.offsetWidth) / 2;
    // Always bring the chosen section into view (on phones the hero fills the whole screen)
    if (scroll) jumpTo(panels.find((p) => !p.hidden), true);
  }
  document.querySelectorAll("[data-tab]").forEach((a) =>
    a.addEventListener("click", (ev) => {
      ev.preventDefault();
      history.replaceState(null, "", "#" + a.dataset.tab);
      showTab(a.dataset.tab, true);
    })
  );
  const startId = location.hash.slice(1);
  showTab(tabOf(startId) || "experience", false);
  // Deep link (e.g. stafero.github.io/#training): open that tab and jump to it
  if (startId && tabOf(startId))
    setTimeout(() => jumpTo(startId === tabOf(startId) ? panels.find((p) => !p.hidden) : document.getElementById(startId), false), 0);

  /* Footer */
  $("footName").textContent = "© " + p.name;
  $("updated").textContent = "Last updated " + P.updated;

  /* Theme toggle (remembered per browser) */
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  $("themeBtn").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  /* "Download CV (PDF)" downloads the ready-made file assets/cv/Stanislav_Ferenc_CV.pdf
     (identical on every device); the click is counted by counter.js */
  // The count is sent first (max. 1.5 s wait), then the download starts – so the request is not
  // cut off when a phone switches to its PDF viewer.
  let cvGo = false;
  $("cvBtn").addEventListener("click", (ev) => {
    if (cvGo || typeof window.cvCounterHit !== "function") return;   // second pass: let the browser download
    ev.preventDefault();
    const done = () => { cvGo = true; $("cvBtn").click(); cvGo = false; };
    Promise.race([window.cvCounterHit(), new Promise((r) => setTimeout(r, 1500))]).then(done, done);
  });

  /* ---------- CV layout (A4) ----------
     Source of the downloadable PDF (assets/cv/Stanislav_Ferenc_CV.pdf) and used when
     someone prints the page with Ctrl+P:
     header card with QR, key results, profile + skills sidebar, experience
     timeline, project cards (never split across pages), credentials, learning. */
  (function buildCV() {
    const strip = (s) => s.replace(/<(?!\/?b>)[^>]+>/g, "");          // keep <b> highlights only
    const pills = (arr, cls = "") => `<ul class="cv-pills ${cls}">${arr.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
    const sec = (title, html, cls = "") => `<section class="cv-sec ${cls}"><h2><span>${title}</span></h2>${html}</section>`;
    const liHost = p.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
    const site = "stafero.github.io";
    const qrEl = document.querySelector("#liQr svg");
    const qrSvg = qrEl ? qrEl.outerHTML : "";

    const head = `<header class="cv-head">
        <div class="cv-head__main">
          <h1>${esc(p.name)}</h1>
          <p class="cv-title">${p.headline.split(" · ").map((t) => `<span>${esc(t)}</span>`).join("")}</p>
          <p class="cv-contact">
            <span>${esc(p.location)}</span>
            <span><a href="mailto:${esc(email)}">${esc(email)}</a></span>
            <span><a href="${esc(p.linkedin)}">${esc(liHost)}</a></span>
            <span><a href="https://${site}/">${site}</a></span>
          </p>
        </div>
        ${qrSvg ? `<div class="cv-qr">${qrSvg}<small>Scan · LinkedIn</small></div>` : ""}
      </header>`;

    const stats = `<div class="cv-stats">${P.stats.map((s) =>
      `<div class="cv-stat"><b>${esc(s.value)}<small>${esc(s.unit)}</small></b><span>${esc(s.label)}</span></div>`).join("")}</div>`;

    // skills sidebar: the four most relevant groups, four items each (full list stays on the web page)
    const skillGroups = P.skills.filter((g) => !/telecom|tools/i.test(g.group)).slice(0, 4);
    const intro = `<div class="cv-intro">
        <div class="cv-intro__main">
          ${sec("Professional Profile", p.summary.map((s) => `<p>${esc(s)}</p>`).join(""))}
          ${sec("Languages", `<ul class="cv-langs">${p.languages.map(([l, v]) => `<li><b>${esc(l)}</b><span>${esc(v)}</span></li>`).join("")}</ul>`)}
        </div>
        <aside class="cv-side">
          ${sec("Core Skills", skillGroups.map((g) => `<div class="cv-skill"><h3>${esc(g.group)}</h3>${pills(g.items.slice(0, 4), "cv-pills--sm")}</div>`).join(""))}
        </aside>
      </div>`;

    // CV only: older roles are shortened (newest role keeps everything; the web page always shows all bullets)
    const CV_BULLETS = [99, 6, 4, 3, 2];
    const exp = `<ol class="cv-timeline">${P.experience.map((e, i) => `<li class="cv-job">
        <div class="cv-job__head">
          <div><h3>${esc(e.role)}</h3><p class="cv-job__co">${esc(e.company)}<span> · ${esc(e.meta)}</span></p></div>
          <span class="cv-date">${esc(e.period)}</span>
        </div>
        <ul class="cv-bullets">${e.bullets.slice(0, CV_BULLETS[i] ?? 2).map((b) => `<li>${strip(b)}</li>`).join("")}</ul>
      </li>`).join("")}</ol>`;

    const proj = `<div class="cv-projects">${P.projects.map((x) => `<article class="cv-proj">
        <div class="cv-proj__head">
          <div><h3>${esc(x.name)}</h3><p class="cv-proj__meta">${esc(x.kind)} · ${esc(x.period)}</p></div>
          <span class="cv-badge">${esc(x.status)}</span>
        </div>
        <p>${esc(x.pitch || x.summary)}</p>
        ${pills(x.stack, "cv-pills--tags")}
      </article>`).join("")}
      <p class="cv-note">Self-hosted and running locally – a live walkthrough is available on request.</p></div>`;

    const cred = (c) => `<li><span class="cv-yr">${esc(c.year)}</span><span><b>${esc(c.name)}</b><small>${esc(c.issuer)}${c.note ? " · " + esc(c.note) : ""}</small></span></li>`;
    // CV only: the six SQS PractiQ® Advanced Level modules are merged into one line (the web page lists them separately)
    const sqsAdv = P.courses.filter((c) => /PractiQ.*Advanced Level/.test(c.name));
    const courses = P.courses.filter((c) => !sqsAdv.includes(c));
    if (sqsAdv.length) {
      const ys = sqsAdv.map((c) => +c.year).sort();
      courses.splice(courses.findIndex((c) => /PractiQ/.test(c.name)) >>> 0, 0, {
        year: ys[0] === ys[ys.length - 1] ? String(ys[0]) : `${ys[0]}–${String(ys[ys.length - 1]).slice(2)}`,
        name: "SQS PractiQ® Advanced Level – " + sqsAdv.map((c) => c.name.split(/ – /).pop()).join(", "),
        issuer: sqsAdv[0].issuer
      });
    }
    const creds = `<div class="cv-grid2">
        ${sec("Certifications", `<ul class="cv-creds">${P.certifications.map(cred).join("")}</ul>`)}
        ${sec("Education", `<ul class="cv-creds">${P.education.map((e) => cred({ year: e.year, name: e.degree, issuer: e.school })).join("")}</ul>`)}
      </div>
      ${sec("Professional Courses", `<ul class="cv-creds cv-creds--tight cv-creds--cols">${courses.map(cred).join("")}</ul>`)}`;

    const udemyDone = P.udemy.filter((c) => c.status === "done");
    const learning = sec("Continuous Learning", `<div class="cv-learn">
        <div class="cv-learn__box"><h3>Microsoft Learn <small>${P.msLearn.totals.paths} learning paths · ${P.msLearn.totals.modules} modules</small></h3>
          ${pills(Object.keys(P.msLearn.modules), "cv-pills--sm")}</div>
        <div class="cv-learn__box"><h3>Udemy <small>${udemyDone.length} courses completed</small></h3>
          <ul class="cv-learn__list">${udemyDone.map((c) => `<li>${esc(c.title)}</li>`).join("")}</ul></div>
      </div>`, "cv-keep");

    // Page frame lives in the table header/footer: Chrome, Edge and Firefox repeat it on every page;
    // Safari (iPhone/iPad/Mac) shows it once – either way it never overlaps the content.
    const html = `
      <table class="cv-page">
      <thead><tr><td><div class="cv-top"><div class="cv-bar"></div></div></td></tr></thead>
      <tfoot><tr><td><div class="cv-bottom"><div class="cv-foot"><span>${esc(p.name)} · Curriculum Vitae</span><span>${site}</span></div></div></td></tr></tfoot>
      <tbody><tr><td>
        ${head}
        ${stats}
        ${intro}
        ${sec("Work Experience", exp)}
        ${sec("Self-Hosted Projects", proj, "cv-sec--projects")}
        ${creds}
        ${learning}
      </td></tr></tbody></table>`;
    const el = document.createElement("div");
    el.id = "cv"; el.className = "cv"; el.innerHTML = html;
    // Safari/WebKit (all iPhone/iPad browsers, Safari on Mac) ignores the A4 page setup and adds its own
    // margins: use a simpler single-column flow there so nothing is pushed to the next page
    const ua = navigator.userAgent;
    const webkitPrint = /iP(hone|ad|od)/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) ||
      (/Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR|Firefox/.test(ua));
    if (webkitPrint) el.classList.add("cv--webkit");
    document.body.appendChild(el);
  })();
})();
