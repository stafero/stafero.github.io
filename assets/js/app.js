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

  /* ---------- CV-style print / PDF export ----------
     Printing (button or Ctrl+P) always uses this dedicated A4 layout. */
  (function buildCV() {
    const li = (arr) => "<ul>" + arr.map((x) => "<li>" + x + "</li>").join("") + "</ul>";
    const sec = (title, html) => `<section class="cv-sec"><h2>${title}</h2>${html}</section>`;
    const strip = (s) => s.replace(/<[^>]+>/g, "");
    const liHost = p.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
    const exp = P.experience.map((e) => `<div class="cv-job">
        <div class="cv-job__head"><span><b>${esc(e.role)}</b> | ${esc(e.company)}</span><span class="cv-date">${esc(e.period)}</span></div>
        ${li(e.bullets.map(strip).map(esc))}</div>`).join("");
    const proj = P.projects.map((x) => `<div class="cv-proj"><div class="cv-job__head"><span><b>${esc(x.name)}</b></span><span class="cv-date">${esc(x.period)}</span></div>
        <p>${esc(x.pitch || x.summary)}</p><p class="cv-tech"><b>Technology:</b> ${x.stack.map(esc).join(", ")}</p></div>`).join("") +
      `<p class="cv-note">Self-hosted, running locally – live demo available on request.</p>`;
    const cred = (c) => `<b>${esc(c.name)}</b> – ${esc(c.issuer)}, ${esc(c.year)}`;
    const msTopics = Object.keys(P.msLearn.modules);
    const udemyDone = P.udemy.filter((c) => c.status === "done").map((c) => esc(c.title));
    const html = `<table class="cv-page"><thead><tr><td><div class="cv-pad"></div></td></tr></thead>
      <tfoot><tr><td><div class="cv-pad"></div></td></tr></tfoot><tbody><tr><td>
      <header class="cv-head">
        <h1>${esc(p.name)}</h1>
        <p class="cv-title">${esc(p.headline)}</p>
        <p class="cv-contact">${esc(p.location)} | <a href="mailto:${esc(email)}">${esc(email)}</a> | <a href="${esc(p.linkedin)}">${esc(liHost)}</a></p>
      </header>
      ${sec("Professional Profile", p.summary.map((s) => `<p>${esc(s)}</p>`).join(""))}
      ${sec("Work Experience", exp)}
      ${sec("Self-Hosted Projects", proj)}
      <div class="cv-cols">
        ${sec("Languages", li(p.languages.map(([l, v]) => `<b>${esc(l)}</b> – ${esc(v)}`)))}
        ${sec("Education", li(P.education.map((e) => `<b>${esc(e.degree)}</b>, ${esc(e.year)} – ${esc(e.school)}`)))}
      </div>
      ${sec("Certifications", li(P.certifications.map(cred)))}
      ${sec("Professional Courses", li(P.courses.map(cred)))}
      ${sec("Continuous Learning",
        `<p><b>Microsoft Learn</b> (${P.msLearn.totals.paths} learning paths, ${P.msLearn.totals.modules} modules): ${msTopics.map(esc).join(" · ")}</p>
         <p><b>Udemy</b></p><div class="cv-2col">${li(udemyDone)}</div>`)}
      </td></tr></tbody></table>`;
    const el = document.createElement("div");
    el.id = "cv"; el.className = "cv"; el.innerHTML = html;
    document.body.appendChild(el);
  })();
})();
