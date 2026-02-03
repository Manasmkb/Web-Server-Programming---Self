// app.js
// This file renders the page and wires up interactions.

(function () {
  const items = Array.isArray(window.SITE_ITEMS) ? window.SITE_ITEMS : [];

  const elGrid = document.getElementById("cardGrid");
  const elSearch = document.getElementById("searchInput");
  const elCategory = document.getElementById("categorySelect");
  const elCount = document.getElementById("resultCount");
  const elReset = document.getElementById("resetBtn");
  const elThemeToggle = document.getElementById("themeToggle");

  // ---------- Theme (saved in localStorage) ----------
  const THEME_KEY = "nf_theme";
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
  }
  elThemeToggle.addEventListener("click", toggleTheme);

  // ---------- Category dropdown ----------
  const categories = Array.from(new Set(items.map((x) => x.category))).sort();
  for (const c of categories) {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c[0].toUpperCase() + c.slice(1);
    elCategory.appendChild(opt);
  }

  // ---------- Rendering ----------
  function renderCards(list) {
    elGrid.innerHTML = "";
    const frag = document.createDocumentFragment();

    for (const item of list) {
      const card = document.createElement("article");
      card.className = "card card-item";

      const top = document.createElement("div");
      top.className = "card-item__top";

      const h3 = document.createElement("h3");
      h3.textContent = item.title;

      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = item.category;

      top.appendChild(h3);
      top.appendChild(badge);

      const p = document.createElement("p");
      p.textContent = item.summary;

      const meta = document.createElement("div");
      meta.className = "meta";

      for (const t of item.tags || []) {
        const chip = document.createElement("span");
        chip.textContent = t;
        meta.appendChild(chip);
      }

      const a = document.createElement("a");
      a.href = item.link;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.className = "btn btn--ghost";
      a.textContent = "Open reference";

      card.appendChild(top);
      card.appendChild(p);
      card.appendChild(meta);
      card.appendChild(a);

      frag.appendChild(card);
    }

    elGrid.appendChild(frag);
    elCount.textContent = `${list.length} result${list.length === 1 ? "" : "s"}`;
  }

  function applyFilters() {
    const q = (elSearch.value || "").trim().toLowerCase();
    const cat = elCategory.value;

    const filtered = items.filter((it) => {
      const matchCat = cat === "all" || it.category === cat;

      if (!q) return matchCat;

      const haystack =
        `${it.title} ${it.summary} ${(it.tags || []).join(" ")}`.toLowerCase();
      return matchCat && haystack.includes(q);
    });

    renderCards(filtered);
  }

  // Initial render
  renderCards(items);

  // Wire events
  elSearch.addEventListener("input", applyFilters);
  elCategory.addEventListener("change", applyFilters);
  elReset.addEventListener("click", () => {
    elSearch.value = "";
    elCategory.value = "all";
    applyFilters();
  });
})();
