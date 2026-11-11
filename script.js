import stackTranslations from "./js/i18n/stack.js";

document.documentElement.classList.add("js");

const storage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {}
  },
};

const translations = {
  es: {
    "a11y.skip": "Saltar al contenido",
    "meta.title": "Mateo Vazquez | Desarrollador Backend Junior",
    "a11y.nav": "Navegación principal",
    "a11y.proof": "Números de los proyectos",
    "alt.portrait": "Foto de Mateo Vazquez",
    "alt.rtp":
      "Página de inicio de rindetuplata con la mejor opción del día y el ranking por pesos ganados",
    "alt.super":
      "Página de inicio de ofertasSUPER con la comparación de canasta entre supermercados",
    "figure.rtp": "rindetuplata · preview privada",
    "nav.stack": "Stack",
    "nav.projects": "Proyectos",
    "nav.education": "Formación",
    "nav.contact": "Contacto",
    "nav.resume": "CV",
    "toggle.lang": "EN",
    "toggle.theme": "Claro",
    "menu.toggle": "Menú",
    "hero.status": "Disponible para roles backend junior · Buenos Aires",
    "hero.role":
      "Desarrollador backend junior. Construyo APIs, integraciones de pago y pipelines de datos con Java, TypeScript y Go.",
    "hero.lead":
      "Formado en UTN FRBA. Trabajo test-first, con CI en cada cambio, y mido antes de optimizar. Abajo, cuatro proyectos con sus números, sus decisiones y sus límites.",
    "cta.resume": "Descargar CV",
    "cta.projects": "Ver proyectos",
    "num.tests": "1.533",
    "num.p50": "1,2 ms",
    "num.products": "≈ 25.000",
    "proof.tests": "tests automatizados en rindetuplata",
    "proof.cpu": "menos CPU por request en la búsqueda más amplia de ofertasSUPER",
    "proof.cpu.source": "10,4 s → 173 ms · postmortem",
    "proof.llm": "aprobaciones indebidas con comprobantes adversariales sintéticos",
    "proof.llm.source": "Mena Nails · receipt-verifier",
    "proof.prs": "pull requests integrados con CI",
    "projects.eyebrow": "Proyectos",
    "projects.title": "Sistemas con datos reales, tests y CI",
    "projects.lead":
      "Cada uno tiene un caso técnico con las decisiones que tomé, lo que medí y lo que todavía falta.",
    "project.own": "Proyecto propio",
    "project.link.repo": "Repositorio",
    "project.link.case": "Caso técnico",
    "project.link.postmortem": "Postmortem",
    "project.link.verifier": "Verificador",
    "psr.problem": "Problema",
    "psr.solution": "Solución",
    "psr.result": "Resultado",
    "project.rtp.label": "oct – nov 2026",
    "project.rtp.status": "Preview privada",
    "project.rtp.summary":
      "Comparador de ahorro argentino: ordena plazos fijos, fondos y billeteras por los pesos que ganás con tu monto y tu plazo, y por retorno real contra la inflación.",
    "project.rtp.problem":
      "Con inflación, una tasa alta no dice si ganás plata: cada opción tiene topes, tramos y plazos mínimos, y nadie guarda el historial por banco o billetera.",
    "project.rtp.solution":
      "API en Java 21 y Spring Boot 4: ingesta idempotente con Spring Batch desde 9 fuentes, matemática financiera en BigDecimal, alertas con outbox a RabbitMQ y un servidor MCP de solo lectura.",
    "project.rtp.result":
      "Ordena casi 400 opciones para cualquier monto y plazo. Después del MVP sumé renovación del plazo fijo, informes mensuales contra el INDEC, API keys y caché por versión de datos, y cerré con una auditoría sin hallazgos.",
    "project.rtp.stat1": "tests: 899 de backend y 634 de frontend",
    "project.rtp.stat2": "fuentes de datos, un adaptador cada una",
    "project.rtp.stat3": "p50 del ranking con caché (antes 108 ms, k6)",
    "project.mena.range": "may 2026 – actualidad",
    "project.mena.client": "Cliente freelance",
    "project.mena.prod": "Validado en producción",
    "project.mena.summary":
      "Dos productos para un estudio de uñas real: reservas con seña online y un sistema de inventario.",
    "project.mena.part1": "Turnos y señas",
    "project.mena.part2": "Inventario",
    "project.mena.p1.dates": "may – jun 2026",
    "project.mena.p2.dates": "sep 2026",
    "project.mena.p1.problem":
      "La agenda manual generaba consultas por mensaje, señas difíciles de conciliar y riesgo de doble reserva.",
    "project.mena.p1.solution":
      "Reserva autenticada con Mercado Pago, comprobantes de transferencia validados por un verificador con LLMs (0 aprobaciones indebidas en 30 casos adversariales sintéticos) y turnos confirmados en Google Calendar.",
    "project.mena.p1.result":
      "Verificado de extremo a extremo en producción con un turno y un pago reales.",
    "project.mena.p2.problem":
      "El stock inicial era provisional y de baja confianza; faltaban recuentos guiados y alertas accionables.",
    "project.mena.p2.solution":
      "PWA de inventario y bitácora de servicios con recuentos guiados, recetas exactas, alertas y forecasts con confianza explícita.",
    "project.mena.p2.result":
      "Producto terminado: API en Go con OpenAPI como contrato, 322 tests (156 de Go con integración y 166 de Vitest) y backups cifrados con restauración probada.",
    "project.super.label": "mar 2026 – actualidad",
    "project.super.status": "Sitio pausado hasta el 14/11",
    "project.super.summary":
      "Comparador de precios de supermercados argentinos: buscás un producto, ves su precio en cada súper y armás una canasta que mezcla tiendas.",
    "project.super.problem":
      "Comparar precios exige productos idénticos y datos consistentes: sin emparejar por código de barras, la comparación no es fiable.",
    "project.super.solution":
      "Refresh diario de 5 supermercados (API de VTEX y búsqueda de Coto), identidad por GTIN-14 y APIs servidas desde un snapshot versionado, sin base de datos en el camino de lectura.",
    "project.super.result":
      "Unos 25.000 productos y 47.000 ofertas con USD 0 de infraestructura. Cuando Vercel pausó el sitio por exceso de CPU, lo diagnostiqué sin métricas de producción y lo documenté en un postmortem.",
    "project.super.stat1": "productos de 5 supermercados, a diario",
    "project.super.stat2": "pull requests integrados con CI",
    "project.super.stat3": "menos CPU en la búsqueda más amplia",
    "project.shelfops.label": "jul – oct 2026",
    "project.shelfops.summary":
      "API de triage de incidentes en tiendas, donde cada decisión queda auditada.",
    "project.shelfops.problem":
      "Un incidente de tienda necesita trazabilidad: quién actuó, qué sugirió el sistema y qué confirmó una persona.",
    "project.shelfops.solution":
      "API en Fastify y PostgreSQL 16 con arquitectura hexagonal, OIDC con sesiones del lado del servidor, CSRF, rate limiting y auditoría de decisiones por incidente.",
    "project.shelfops.result":
      "MVP con demo reproducible en Docker, 258 tests con integración en CI e infraestructura en AWS con Terraform (ECS Fargate, RDS, CloudFront y Cognito).",
    "skills.eyebrow": "Stack",
    "skills.title": "Con qué trabajo",
    "skills.lead":
      "El foco está en el backend: APIs, datos e integraciones. El resto es lo necesario para poner cada sistema en manos de alguien.",
    "education.eyebrow": "Formación",
    "education.title": "Formación",
    "edu.utn.title": "Diplomatura Professional Full-Stack Developer",
    "edu.utn.meta": "UTN FRBA · 187 h · nov 2025 – may 2026",
    "edu.cbc.title": "CBC Ingeniería en Informática",
    "edu.cbc.meta": "UBA XXI · virtual · ago 2026 – en curso",
    "contact.eyebrow": "Contacto",
    "contact.title": "Escribime",
    "contact.lead":
      "Busco mi primer rol como desarrollador backend. Si tenés una posición o un proyecto, contame.",
    "contact.email.label": "Correo",
    "footer.role": "Desarrollador backend junior",
    "nav.writing": "Escritos",
    "project.super.live": "En línea",
    "project.link.site": "Sitio",
    "writing.eyebrow": "Escritos",
    "writing.title": "Lo que aprendí, por escrito",
    "writing.lead":
      "Notas técnicas sobre problemas reales de mis proyectos: qué pasó, cómo lo medí y qué decidí.",
    "writing.pm.date": "28 oct 2026",
    "writing.pm.kind": "Postmortem · 8 min",
    "writing.pm.title":
      "ofertasSUPER se quedó sin CPU: el problema era el algoritmo",
    "writing.pm.summary":
      "Vercel pausó el sitio 30 días. Sin métricas por ruta, lo diagnostiqué leyendo el código y midiendo una réplica: 1.200 millones de comparaciones por request, y un índice que las bajó a cero.",
    "writing.read": "Leer",
  },
  en: {
    "a11y.skip": "Skip to content",
    "meta.title": "Mateo Vazquez | Junior Backend Developer",
    "a11y.nav": "Main navigation",
    "a11y.proof": "Project numbers",
    "alt.portrait": "Photo of Mateo Vazquez",
    "alt.rtp":
      "rindetuplata home page with today's best option and the ranking by pesos earned",
    "alt.super":
      "ofertasSUPER home page comparing a basket across supermarkets",
    "figure.rtp": "rindetuplata · private preview",
    "nav.stack": "Stack",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "toggle.lang": "ES",
    "toggle.theme": "Light",
    "menu.toggle": "Menu",
    "hero.status": "Open to junior backend roles · Buenos Aires",
    "hero.role":
      "Junior backend developer. I build APIs, payment integrations and data pipelines with Java, TypeScript and Go.",
    "hero.lead":
      "Trained at UTN FRBA. I work test-first, with CI on every change, and I measure before I optimize. Below are four projects with their numbers, their decisions and their limits.",
    "cta.resume": "Download resume",
    "cta.projects": "View projects",
    "num.tests": "1,533",
    "num.p50": "1.2 ms",
    "num.products": "≈ 25,000",
    "proof.tests": "automated tests in rindetuplata",
    "proof.cpu": "less CPU per request on ofertasSUPER's broadest search",
    "proof.cpu.source": "10.4 s → 173 ms · postmortem",
    "proof.llm": "false approvals on synthetic adversarial payment receipts",
    "proof.llm.source": "Mena Nails · receipt-verifier",
    "proof.prs": "pull requests merged through CI",
    "projects.eyebrow": "Projects",
    "projects.title": "Systems with real data, tests and CI",
    "projects.lead":
      "Each one has a case study with the decisions I made, what I measured and what is still missing.",
    "project.own": "Personal project",
    "project.link.repo": "Repository",
    "project.link.case": "Case study",
    "project.link.postmortem": "Postmortem",
    "project.link.verifier": "Verifier",
    "psr.problem": "Problem",
    "psr.solution": "Solution",
    "psr.result": "Result",
    "project.rtp.label": "oct – nov 2026",
    "project.rtp.status": "Private preview",
    "project.rtp.summary":
      "An Argentine savings comparator: it ranks fixed-term deposits, money-market funds and wallets by the pesos you earn for your amount and term, and by real return against inflation.",
    "project.rtp.problem":
      "With high inflation a headline rate does not tell you whether you earn money: every option has caps, tiers and minimum terms, and no source keeps per-bank or per-wallet history.",
    "project.rtp.solution":
      "Java 21 and Spring Boot 4 API: idempotent Spring Batch ingestion from 9 sources, BigDecimal financial math, alerts through a transactional outbox to RabbitMQ and a read-only MCP server.",
    "project.rtp.result":
      "Ranks almost 400 options for any amount and term. After the MVP I added fixed-term renewal, monthly reports against INDEC inflation, API keys and a per-data-version cache, and closed with an audit that found nothing left to fix.",
    "project.rtp.stat1": "tests: 899 backend and 634 frontend",
    "project.rtp.stat2": "data sources, one adapter each",
    "project.rtp.stat3": "ranking p50 with cache (108 ms before, k6)",
    "project.mena.range": "may 2026 – present",
    "project.mena.client": "Freelance client",
    "project.mena.prod": "Validated in production",
    "project.mena.summary":
      "Two products for a real nail studio: online bookings with a deposit, and an inventory system.",
    "project.mena.part1": "Bookings and deposits",
    "project.mena.part2": "Inventory",
    "project.mena.p1.dates": "may – jun 2026",
    "project.mena.p2.dates": "sep 2026",
    "project.mena.p1.problem":
      "Manual scheduling meant availability asked over messages, deposits hard to reconcile and double-booking risk.",
    "project.mena.p1.solution":
      "Authenticated booking with Mercado Pago, transfer receipts checked by an LLM-based verifier (0 false approvals on 30 synthetic adversarial cases) and confirmed bookings synced to Google Calendar.",
    "project.mena.p1.result":
      "Validated end to end in production with a real booking and a real payment.",
    "project.mena.p2.problem":
      "Initial stock was provisional and low confidence; the studio needed guided recounts and actionable alerts.",
    "project.mena.p2.solution":
      "Inventory and service-log PWA with guided recounts, exact recipes, alerts and forecasts with explicit confidence.",
    "project.mena.p2.result":
      "Finished product: a Go API with OpenAPI as the contract, 322 tests (156 Go tests with integration and 166 Vitest) and encrypted backups with a tested restore.",
    "project.super.label": "mar 2026 – present",
    "project.super.status": "Site paused until Nov 14",
    "project.super.summary":
      "An Argentine supermarket price comparator: search a product, see its price at every store and build a basket that mixes stores.",
    "project.super.problem":
      "Comparing prices requires identical products and consistent data; without barcode matching the comparison is not reliable.",
    "project.super.solution":
      "Daily refresh of 5 supermarkets (VTEX API and Coto search), GTIN-14 product identity and APIs served from a versioned snapshot, with no database on the read path.",
    "project.super.result":
      "About 25,000 products and 47,000 offers at USD 0 infrastructure cost. When Vercel paused the site for CPU overuse, I diagnosed it without production metrics and wrote it up as a postmortem.",
    "project.super.stat1": "products from 5 supermarkets, daily",
    "project.super.stat2": "pull requests merged through CI",
    "project.super.stat3": "less CPU on the broadest search",
    "project.shelfops.label": "jul – oct 2026",
    "project.shelfops.summary":
      "A retail incident triage API where every decision is audited.",
    "project.shelfops.problem":
      "A store incident needs traceability: who acted, what the system suggested and what a person confirmed.",
    "project.shelfops.solution":
      "Fastify and PostgreSQL 16 API with hexagonal architecture, OIDC with server-side sessions, CSRF, rate limiting and per-incident decision auditing.",
    "project.shelfops.result":
      "MVP with a Docker-reproducible demo, 258 tests with integration in CI and AWS infrastructure in Terraform (ECS Fargate, RDS, CloudFront and Cognito).",
    "skills.eyebrow": "Stack",
    "skills.title": "What I work with",
    "skills.lead":
      "The focus is the backend: APIs, data and integrations. The rest is what it takes to put each system in someone's hands.",
    "education.eyebrow": "Education",
    "education.title": "Education",
    "edu.utn.title": "Diplomatura Professional Full-Stack Developer",
    "edu.utn.meta": "UTN FRBA · 187 h · nov 2025 – may 2026",
    "edu.cbc.title": "CBC Ingeniería en Informática",
    "edu.cbc.meta": "UBA XXI · online · aug 2026 – in progress",
    "contact.eyebrow": "Contact",
    "contact.title": "Get in touch",
    "contact.lead":
      "I'm looking for my first backend developer role. If you have a position or a project, tell me about it.",
    "contact.email.label": "Email",
    "footer.role": "Junior backend developer",
    "nav.writing": "Writing",
    "project.super.live": "Live",
    "project.link.site": "Website",
    "writing.eyebrow": "Writing",
    "writing.title": "What I learned, written down",
    "writing.lead":
      "Technical notes on real problems from my projects: what happened, how I measured it and what I decided.",
    "writing.pm.date": "Oct 28, 2026",
    "writing.pm.kind": "Postmortem · 8 min (in Spanish)",
    "writing.pm.title":
      "ofertasSUPER ran out of CPU: the problem was the algorithm",
    "writing.pm.summary":
      "Vercel paused the site for 30 days. With no per-route metrics, I diagnosed it by reading the code and measuring a replica: 1.2 billion comparisons per request, and an index that took them to zero.",
    "writing.read": "Read",
  },
};

// Per-section dictionaries live in js/i18n/<section>.js.
for (const lang of Object.keys(translations)) {
  Object.assign(translations[lang], stackTranslations[lang] ?? {});
}

const root = document.documentElement;
const languageToggle = document.querySelector("[data-language-toggle]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("#site-nav");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function getInitialLanguage() {
  return storage.get("portfolio:lang") === "en" ? "en" : "es";
}
function getInitialTheme() {
  const storedTheme = storage.get("portfolio:theme");
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
function updateThemeLabel() {
  if (!themeToggle) return;
  const isLight = root.dataset.theme === "light";
  const lang = root.dataset.lang === "en" ? "en" : "es";
  themeToggle.querySelector("span").textContent =
    lang === "es" ? (isLight ? "Oscuro" : "Claro") : isLight ? "Dark" : "Light";
  const themeToken = themeToggle.querySelector("span").textContent;
  themeToggle.setAttribute(
    "aria-label",
    (lang === "es" ? "Cambiar tema: " : "Change theme: ") + themeToken,
  );
}
function applyLanguage(lang) {
  const dictionary = translations[lang] ?? translations.es;
  root.dataset.lang = lang;
  root.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });
  // Accessible names and alt text follow the language too (WCAG 3.1.2).
  for (const attr of ["aria-label", "alt"]) {
    document.querySelectorAll(`[data-i18n-${attr}]`).forEach((node) => {
      const value = dictionary[node.getAttribute(`data-i18n-${attr}`)];
      if (value) node.setAttribute(attr, value);
    });
  }
  if (dictionary["meta.title"]) document.title = dictionary["meta.title"];
  if (languageToggle) {
    languageToggle.setAttribute(
      "aria-label",
      (lang === "es" ? "Cambiar idioma: " : "Change language: ") +
        languageToggle.querySelector("span").textContent,
    );
  }
  updateThemeLabel();
  storage.set("portfolio:lang", lang);
}
function applyTheme(theme, { persist = false } = {}) {
  root.dataset.theme = theme;
  updateThemeLabel();
  // Persist only on an explicit toggle so the OS preference keeps working.
  if (persist) storage.set("portfolio:theme", theme);
}

applyTheme(getInitialTheme());
// Case pages are Spanish-only and have no language toggle: leave their
// lang attribute and the stored preference untouched.
if (languageToggle) applyLanguage(getInitialLanguage());
languageToggle?.addEventListener("click", () =>
  applyLanguage(root.dataset.lang === "en" ? "es" : "en"),
);
// Follow live OS theme changes until the visitor picks a theme explicitly.
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const stored = storage.get("portfolio:theme");
    if (stored !== "light" && stored !== "dark")
      applyTheme(event.matches ? "dark" : "light");
  });
themeToggle?.addEventListener("click", () =>
  applyTheme(root.dataset.theme === "light" ? "dark" : "light", {
    persist: true,
  }),
);

function setMenuOpen(open) {
  if (!siteNav || !menuToggle) return;
  siteNav.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}
menuToggle?.addEventListener("click", () =>
  setMenuOpen(!siteNav.classList.contains("is-open")),
);
siteNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    siteNav?.classList.contains("is-open")
  ) {
    setMenuOpen(false);
    menuToggle?.focus();
  }
});

// Time-boxed content: [data-until] disappears and [data-from] appears at
// an ISO instant. Without JavaScript the HTML default (the conservative state) stays.
function applyTimeBoxes(now = Date.now()) {
  document.querySelectorAll("[data-until]").forEach((node) => {
    if (now >= Date.parse(node.dataset.until)) node.hidden = true;
  });
  document.querySelectorAll("[data-from]").forEach((node) => {
    if (now >= Date.parse(node.dataset.from)) node.hidden = false;
  });
}
applyTimeBoxes();

// Pointer spotlight on glass cards: only for a fine pointer that can hover.
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll("[data-spotlight]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
  );
  revealItems.forEach((item) => observer.observe(item));
}
