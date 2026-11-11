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
    "meta.title": "Mateo Vazquez Castiglione | Desarrollador backend e integraciones con IA",
    "a11y.nav": "Navegación principal",
    "a11y.proof": "Números de los proyectos",
    "alt.portrait": "Foto de Mateo Vazquez Castiglione",
    "alt.rtp":
      "Página de inicio de rindetuplata con la mejor opción del día y el ranking por pesos ganados",
    "alt.super":
      "Página de inicio de ofertaSUPER con la comparación de canasta entre supermercados",
    "figure.rtp": "Rinde tu Plata · captura local",
    "nav.stack": "Stack",
    "nav.projects": "Proyectos",
    "nav.education": "Formación",
    "nav.contact": "Contacto",
    "nav.resume": "CV",
    "toggle.lang": "EN",
    "toggle.theme": "Claro",
    "menu.toggle": "Menú",
    "hero.status": "Disponible para roles de backend e integraciones con IA · Buenos Aires",
    "hero.role":
      "Desarrollador backend e integraciones con IA: construyo backend en TypeScript/Node y PostgreSQL, y también en Python, Go y Java; integro LLMs en flujos reales con confirmación humana y evals.",
    "hero.lead":
      "Diseño, decido y verifico: defino los tests, los criterios de revisión y las mediciones. Agentes de IA escriben buena parte del código bajo esos tests y esa revisión. Abajo, un trabajo para una clienta y tres productos propios, contados como historias.",
    "cta.resume": "Descargar CV",
    "cta.projects": "Ver proyectos",
    "num.tests": "1.704",
    "num.p50": "1,2 ms",
    "num.products": "≈ 24.500",
    "proof.tests": "tests automatizados en rindetuplata",
    "num.cpu": "18-173 ms",
    "proof.cpu": "de CPU por página en ofertaSUPER, antes 10-16 s",
    "proof.cpu.source": "réplica local · postmortem",
    "proof.llm": "aprobaciones indebidas con comprobantes adversariales sintéticos",
    "proof.llm.source": "Mena Nails · receipt-verifier",
    "proof.prs": "pull requests integrados con CI",
    "projects.eyebrow": "Proyectos",
    "projects.title": "Una clienta y tres productos propios",
    "projects.lead":
      "Cada historia sigue el mismo orden: problema, qué descubrí, qué construí, resultado medido y qué cambiaría hoy. Cada una enlaza su caso técnico.",
    "project.own": "Proyecto propio",
    "project.link.repo": "Repositorio",
    "project.link.case": "Caso técnico",
    "project.link.caseInventory": "Caso técnico: inventario",
    "project.link.postmortem": "Postmortem",
    "project.link.verifier": "Verificador",
    "project.link.assistant": "Asistente",
    "psr.problem": "Problema",
    "psr.discovery": "Qué descubrí",
    "psr.solution": "Qué construí",
    "psr.result": "Resultado medido",
    "psr.change": "Qué cambiaría hoy",
    "project.rtp.label": "oct – nov 2026",
    "project.rtp.status": "No desplegado",
    "project.rtp.summary":
      "Comparador de ahorro argentino: ordena plazos fijos, fondos y billeteras por los pesos que ganás con tu monto y tu plazo, y por retorno real contra la inflación.",
    "project.rtp.problem":
      "Con inflación, una tasa alta no dice si ganás plata, y los datos llegan de 9 fuentes que fallan cada una a su manera.",
    "project.rtp.discovery":
      "Que la ingesta diaria se iba a re-ejecutar y que alguna fuente iba a fallar; y que un aviso por mail puede salir dos veces si el envío se corta a mitad de camino.",
    "project.rtp.solution":
      "Java 21 y Spring Boot: un job de Spring Batch por fecha, un adaptador por fuente, matemática en BigDecimal y un outbox transaccional hacia RabbitMQ con confirms, consumidor idempotente y DLQ.",
    "project.rtp.result":
      "Re-ejecutar un día no duplica datos y una fuente caída no frena a las demás; 905 tests backend contra PostgreSQL y RabbitMQ reales. En la corrida del 14/10, 79 del top 200 pierden contra la inflación esperada.",
    "project.rtp.change":
      "La entrega es at-least-once con deduplicación, no exactly-once. Publicaría un demo de solo lectura antes de sumar funciones (hoy no está desplegado) y no sumaría dependencias sin uso: JPA estuvo en el pom sin ninguna entidad.",
    "project.rtp.stat1": "tests: 905 de backend y 799 de frontend",
    "project.rtp.stat2": "fuentes de datos, un adaptador cada una",
    "project.rtp.stat3": "p50 del ranking con caché (antes 108 ms, k6)",
    "project.mena.range": "may 2026 – oct 2026",
    "project.mena.client": "Clienta freelance · trabajo terminado",
    "project.mena.prod": "Pre-lanzamiento",
    "project.mena.summary":
      "Software para un estudio de uñas en Boulogne, trabajo remoto.",
    "project.mena.problem":
      "La dueña de un estudio de uñas en Boulogne necesitaba que sus clientas reservaran y pagaran la seña online, y poder consultar turnos y stock desde el celular.",
    "project.mena.discovery":
      "Que la decisión riesgosa no podía quedar en manos de un modelo: una escritura equivocada en la agenda o un comprobante falso cuestan plata. Y que el modelo había que elegirlo midiendo.",
    "project.mena.solution":
      "Una API de inventario en Go y PostgreSQL con contrato OpenAPI 3.1; un asistente de Telegram en TypeScript que usa esa API por MCP y no escribe nada sin que la dueña lo confirme con un botón de un solo uso; un verificador de comprobantes en Python donde aprueba código determinístico, nunca el modelo; y la app de turnos con Mercado Pago Checkout Pro.",
    "project.mena.result":
      "Elegí el modelo con un eval propio de 87 casos de tool-calling sobre 6 LLMs: el elegido aprobó completos 84 de 87. El verificador aprobó 0 de 30 comprobantes adversariales en un set sintético de 150, con los modelos elegidos. Quedó en pre-lanzamiento: no hay un deploy público para visitar.",
    "project.mena.change":
      "Correría los tests de integración con PostgreSQL en CI (hoy se saltean), probaría el verificador con comprobantes reales (el set es sintético) y dejaría un deploy en línea antes de cerrar el trabajo.",
    "project.super.label": "may 2026 – actualidad",
    "project.super.status": "Sitio pausado por Vercel",
    "project.super.summary":
      "Comparador de precios de supermercados argentinos: buscás un producto, ves su precio en cada súper y armás una canasta que mezcla tiendas.",
    "project.super.problem":
      "Vercel pausó el sitio por pasarse de la CPU del plan gratuito.",
    "project.super.discovery":
      "Cada producto recorría todas las ofertas: unos 1.200 millones de comparaciones por request y 10-16 s de CPU por página.",
    "project.super.solution":
      "Un índice por EAN armado una vez por proceso. Antes de cambiar el algoritmo dejé el viejo como oráculo y un test que cuenta lecturas.",
    "project.super.result":
      "De 10-16 s a 18-173 ms de CPU por página, medido en réplica local, con salida idéntica en 25 de 25 casos. El refresh diario de 5 supermercados (unos 24.500 productos) está verde desde el 27/10.",
    "project.super.change":
      "Mediría la CPU por ruta desde el primer deploy: el arreglo todavía no está medido en producción, porque el sitio sigue pausado hasta el 14/11.",
    "project.super.stat1": "productos de 5 supermercados, a diario",
    "project.super.stat2": "pull requests integrados con CI",
    "project.super.stat3": "tests en CI, 0 fallan",
    "project.shelfops.label": "jul – oct 2026",
    "project.shelfops.summary":
      "API de triage de incidentes en tiendas, donde cada decisión queda auditada.",
    "project.shelfops.problem":
      "Un incidente de tienda necesita trazabilidad: quién actuó, qué sugirió el sistema y qué confirmó una persona.",
    "project.shelfops.solution":
      "API en Fastify y PostgreSQL 16 con arquitectura hexagonal, OIDC con sesiones del lado del servidor, CSRF, rate limiting y auditoría de decisiones por incidente.",
    "project.shelfops.result":
      "MVP con demo reproducible en Docker y 258 tests (datos al 13/10). La infraestructura está escrita en Terraform: solo plan y LocalStack, no está desplegada.",
    "skills.eyebrow": "Stack",
    "skills.title": "Con qué trabajo",
    "skills.lead":
      "El foco está en el backend y las integraciones con IA: APIs, datos y LLMs con confirmación humana. El frontend va al final.",
    "education.eyebrow": "Formación",
    "education.title": "Formación",
    "edu.utn.title": "Diplomatura Professional Full-Stack Developer",
    "edu.utn.meta": "UTN FRBA · 187 h · nov 2025 – may 2026",
    "edu.cbc.title": "CBC Ingeniería en Informática",
    "edu.cbc.meta": "UBA XXI · virtual · ago 2026 – 1.er cuatrimestre 2027; después, Ingeniería en Informática (UBA)",
    "contact.eyebrow": "Contacto",
    "contact.title": "Escribime",
    "contact.lead":
      "Busco un rol de backend o de integraciones con IA, full-time, remoto o híbrido en AMBA. Si tenés una posición o un proyecto, contame.",
    "contact.email.label": "Correo",
    "footer.role": "Desarrollador backend e integraciones con IA",
    "nav.writing": "Escritos",
    "project.super.live": "En línea",
    "project.planner.status": "Repo público con CI",
    "project.planner.problem":
      "Quería un asistente que ordenara mis tareas sin poder borrar ni mover nada por su cuenta.",
    "project.planner.discovery":
      "Que un mail pegado puede traer instrucciones inyectadas, como un delete_all.",
    "project.planner.solution":
      "Una app de escritorio en Tauri 2 (Rust) y React, offline-first con Firestore. El agente tiene 12 herramientas, 8 de escritura, y cada una muestra una tarjeta de confirmación. La API key queda en el keyring del sistema y la llamada HTTPS la hace Rust.",
    "project.planner.result":
      "Un delete_all inyectado queda inerte, y un test lo prueba. 1.013 tests unitarios y 449 E2E, medidos localmente; el repo público corre CI en GitHub Actions.",
    "project.planner.change":
      "Pondría CI desde el primer día (llegó recién al publicar el repo) y un set de evals para el agente, que todavía no existe.",
    "project.link.site": "Sitio",
    "writing.eyebrow": "Escritos",
    "writing.title": "Lo que aprendí, por escrito",
    "writing.lead":
      "Notas técnicas sobre problemas reales de mis proyectos: qué pasó, cómo lo medí y qué decidí.",
    "writing.pm.date": "28 oct 2026",
    "writing.pm.kind": "Postmortem · 8 min",
    "writing.pm.title":
      "ofertaSUPER se quedó sin CPU: el problema era el algoritmo",
    "writing.pm.summary":
      "Vercel pausó el sitio 30 días. Sin métricas por ruta, lo diagnostiqué leyendo el código y midiendo una réplica: 1.200 millones de comparaciones por request, y un índice que las bajó a cero.",
    "writing.read": "Leer",
  },
  en: {
    "a11y.skip": "Skip to content",
    "meta.title": "Mateo Vazquez Castiglione | Backend & AI integrations developer",
    "a11y.nav": "Main navigation",
    "a11y.proof": "Project numbers",
    "alt.portrait": "Photo of Mateo Vazquez Castiglione",
    "alt.rtp":
      "rindetuplata home page with today's best option and the ranking by pesos earned",
    "alt.super":
      "ofertaSUPER home page comparing a basket across supermarkets",
    "figure.rtp": "Rinde tu Plata · local screenshot",
    "nav.stack": "Stack",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "toggle.lang": "ES",
    "toggle.theme": "Light",
    "menu.toggle": "Menu",
    "hero.status": "Open to backend and AI integration roles · Buenos Aires",
    "hero.role":
      "Backend & AI integrations developer: I build backends in TypeScript/Node and PostgreSQL, and also in Python, Go and Java; I integrate LLMs into real workflows with human confirmation and evals.",
    "hero.lead":
      "I design, decide and verify: I define the tests, the review criteria and the measurements. AI agents write much of the code under those tests and that review. Below: one client job and three products of my own, told as stories.",
    "cta.resume": "Download resume",
    "cta.projects": "View projects",
    "num.tests": "1,704",
    "num.p50": "1.2 ms",
    "num.products": "≈ 24,500",
    "proof.tests": "automated tests in rindetuplata",
    "num.cpu": "18-173 ms",
    "proof.cpu": "of CPU per page on ofertaSUPER, down from 10-16 s",
    "proof.cpu.source": "local replica · postmortem",
    "proof.llm": "false approvals on synthetic adversarial payment receipts",
    "proof.llm.source": "Mena Nails · receipt-verifier",
    "proof.prs": "pull requests merged through CI",
    "projects.eyebrow": "Projects",
    "projects.title": "One client and three products of my own",
    "projects.lead":
      "Each story follows the same order: problem, what I found, what I built, measured result and what I would change today. Each links its technical case.",
    "project.own": "Personal project",
    "project.link.repo": "Repository",
    "project.link.case": "Case study",
    "project.link.caseInventory": "Technical case: inventory",
    "project.link.postmortem": "Postmortem",
    "project.link.verifier": "Verifier",
    "project.link.assistant": "Assistant",
    "psr.problem": "Problem",
    "psr.discovery": "What I found",
    "psr.solution": "What I built",
    "psr.result": "Measured result",
    "psr.change": "What I would change today",
    "project.rtp.label": "oct – nov 2026",
    "project.rtp.status": "Not deployed",
    "project.rtp.summary":
      "An Argentine savings comparator: it ranks fixed-term deposits, money-market funds and wallets by the pesos you earn for your amount and term, and by real return against inflation.",
    "project.rtp.problem":
      "With inflation, a high rate does not tell you whether you earn money, and the data comes from 9 sources that each fail in their own way.",
    "project.rtp.discovery":
      "That the daily ingestion would be re-run and some source would fail; and that an email alert can go out twice if sending stops halfway.",
    "project.rtp.solution":
      "Java 21 and Spring Boot: one Spring Batch job per date, one adapter per source, BigDecimal math, and a transactional outbox to RabbitMQ with confirms, an idempotent consumer and a DLQ.",
    "project.rtp.result":
      "Re-running a day does not duplicate data and one failing source does not stop the others; 905 backend tests against real PostgreSQL and RabbitMQ. In the 14 Oct run, 79 of the top 200 lose to expected inflation.",
    "project.rtp.change":
      "Delivery is at-least-once with deduplication, not exactly-once. I would ship a read-only demo before adding features (today it is not deployed) and would not add dependencies I do not use: JPA sat in the pom with no entities.",
    "project.rtp.stat1": "tests: 905 backend and 799 frontend",
    "project.rtp.stat2": "data sources, one adapter each",
    "project.rtp.stat3": "ranking p50 with cache (108 ms before, k6)",
    "project.mena.range": "May 2026 – Oct 2026",
    "project.mena.client": "Freelance client · finished",
    "project.mena.prod": "Pre-launch",
    "project.mena.summary":
      "Software for a nail studio in Boulogne, remote work.",
    "project.mena.problem":
      "The owner of a nail studio in Boulogne needed her clients to book and pay the deposit online, and to check bookings and stock from her phone.",
    "project.mena.discovery":
      "That the risky decision could not be left to a model: a wrong write to the schedule or a fake receipt costs money. And that the model had to be chosen by measuring.",
    "project.mena.solution":
      "An inventory API in Go and PostgreSQL with an OpenAPI 3.1 contract; a Telegram assistant in TypeScript that uses that API through MCP and writes nothing until the owner confirms it with a single-use button; a Python receipt verifier where deterministic code approves, never the model; and the booking app with Mercado Pago Checkout Pro.",
    "project.mena.result":
      "I chose the model with my own eval of 87 tool-calling cases across 6 LLMs: the chosen one fully passed 84 of 87. The verifier approved 0 of 30 adversarial receipts on a synthetic set of 150, with the chosen models. It stayed pre-launch: there is no public deploy to visit.",
    "project.mena.change":
      "I would run the PostgreSQL integration tests in CI (today they skip), test the verifier on real receipts (the set is synthetic) and leave a live deploy before closing the job.",
    "project.super.label": "may 2026 – present",
    "project.super.status": "Site paused by Vercel",
    "project.super.summary":
      "An Argentine supermarket price comparator: search a product, see its price at every store and build a basket that mixes stores.",
    "project.super.problem":
      "Vercel paused the site for going over the free plan's CPU.",
    "project.super.discovery":
      "Every product scanned every offer: about 1.2 billion comparisons per request and 10-16 s of CPU per page.",
    "project.super.solution":
      "An EAN index built once per process. Before changing the algorithm I kept the old one as an oracle, plus a test that counts reads.",
    "project.super.result":
      "From 10-16 s to 18-173 ms of CPU per page, measured on a local replica, with identical output in 25 of 25 cases. The daily refresh of 5 supermarkets (about 24,500 products) has been green since 27 Oct.",
    "project.super.change":
      "I would measure CPU per route from the first deploy: the fix is not yet measured in production, because the site stays paused until 14 Nov.",
    "project.super.stat1": "products from 5 supermarkets, daily",
    "project.super.stat2": "pull requests merged through CI",
    "project.super.stat3": "tests in CI, 0 failing",
    "project.shelfops.label": "jul – oct 2026",
    "project.shelfops.summary":
      "A retail incident triage API where every decision is audited.",
    "project.shelfops.problem":
      "A store incident needs traceability: who acted, what the system suggested and what a person confirmed.",
    "project.shelfops.solution":
      "Fastify and PostgreSQL 16 API with hexagonal architecture, OIDC with server-side sessions, CSRF, rate limiting and per-incident decision auditing.",
    "project.shelfops.result":
      "MVP with a Docker-reproducible demo and 258 tests (as of 13/10). The infrastructure is written in Terraform: plan and LocalStack only, not deployed.",
    "skills.eyebrow": "Stack",
    "skills.title": "What I work with",
    "skills.lead":
      "The focus is the backend and AI integrations: APIs, data and LLMs with human confirmation. The frontend comes last.",
    "education.eyebrow": "Education",
    "education.title": "Education",
    "edu.utn.title": "Diplomatura Professional Full-Stack Developer",
    "edu.utn.meta": "UTN FRBA · 187 h · nov 2025 – may 2026",
    "edu.cbc.title": "CBC Ingeniería en Informática",
    "edu.cbc.meta": "UBA XXI · online · Aug 2026 – first semester 2027; then Computer Engineering at UBA",
    "contact.eyebrow": "Contact",
    "contact.title": "Get in touch",
    "contact.lead":
      "I'm looking for a backend or AI integrations role, full-time, remote or hybrid in the Buenos Aires metro area (AMBA). If you have a position or a project, tell me about it.",
    "contact.email.label": "Email",
    "footer.role": "Backend & AI integrations developer",
    "nav.writing": "Writing",
    "project.super.live": "Live",
    "project.planner.status": "Public repo with CI",
    "project.planner.problem":
      "I wanted an assistant that organizes my tasks without being able to delete or move anything on its own.",
    "project.planner.discovery":
      "That a pasted email can carry injected instructions, such as a delete_all.",
    "project.planner.solution":
      "A desktop app in Tauri 2 (Rust) and React, offline-first with Firestore. The agent has 12 tools, 8 of them writes, and each write shows a confirmation card. The API key stays in the system keyring and Rust makes the HTTPS call.",
    "project.planner.result":
      "An injected delete_all stays inert, and a test proves it. 1,013 unit tests and 449 E2E tests, measured locally; the public repo runs CI on GitHub Actions.",
    "project.planner.change":
      "I would add CI from day one (it only arrived when the repo went public) and an eval set for the agent, which does not exist yet.",
    "project.link.site": "Website",
    "writing.eyebrow": "Writing",
    "writing.title": "What I learned, written down",
    "writing.lead":
      "Technical notes on real problems from my projects: what happened, how I measured it and what I decided.",
    "writing.pm.date": "Oct 28, 2026",
    "writing.pm.kind": "Postmortem · 8 min (in Spanish)",
    "writing.pm.title":
      "ofertaSUPER ran out of CPU: the problem was the algorithm",
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
