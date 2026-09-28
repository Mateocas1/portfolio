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
    "nav.stack": "Stack",
    "nav.projects": "Proyectos",
    "nav.education": "Formación",
    "nav.contact": "Contacto",
    "nav.resume": "CV",
    "toggle.lang": "EN",
    "toggle.theme": "Claro",
    "menu.toggle": "Menú",
    "hero.eyebrow": "Hola, soy",
    "hero.headline":
      "Desarrollador Backend Junior · APIs e Integraciones · TypeScript, Node.js y Go",
    "hero.location": "Buenos Aires, Argentina",
    "hero.lead":
      "Desarrollador backend junior formado en UTN FRBA. Desarrollé para un estudio de uñas un sistema de turnos con pagos reales por Mercado Pago y hoy construyo su backend de inventario en Go. Trabajo con TypeScript, Node.js, PostgreSQL y APIs REST, con pruebas automatizadas y CI/CD en cada cambio.",
    "hero.status": "Disponible para posiciones backend junior",
    "cta.resume": "Descargar CV",
    "cta.projects": "Ver proyectos",
    "skills.eyebrow": "Stack",
    "skills.title": "Stack técnico por área de trabajo.",
    "stack.languages": "Lenguajes",
    "stack.backend": "Backend",
    "stack.data": "Datos",
    "stack.frontend": "Frontend",
    "stack.integrations": "Integraciones",
    "stack.testing": "Testing y CI/CD",
    "stack.cloud": "Cloud",
    "stack.ai": "Desarrollo asistido por IA",
    "projects.eyebrow": "Proyectos",
    "projects.title": "Proyectos seleccionados.",
    "project.mena.client": "cliente freelance",
    "project.mena.range": "may 2026 – sep 2026",
    "project.mena.product1": "Producto 1",
    "project.mena.product2": "Producto 2",
    "project.mena.part1": "Turnos y señas",
    "project.mena.part2": "Inventario",
    "project.super.label": "mar 2026 – actualidad",
    "project.shelfops.label": "jul – ago 2026",
    "project.link.demo": "Demo pública",
    "project.link.repo": "Repositorio",
    "project.link.case": "Caso técnico",
    "education.eyebrow": "Formación",
    "education.title": "Formación académica.",
    "edu.utn.title": "Diplomatura Professional Full-Stack Developer",
    "edu.utn.meta": "UTN FRBA · 187 h · nov 2025 – may 2026",
    "edu.cbc.title": "CBC Ingeniería en Informática",
    "edu.cbc.meta": "UBA XXI · virtual · ago 2026 – en curso",
    "contact.eyebrow": "Contacto",
    "contact.title": "Escríbeme y hablemos.",
    "contact.email.label": "Correo",
    "contact.linkedin.label": "LinkedIn",
    "contact.github.label": "GitHub",
    "psr.problem": "Problema",
    "psr.solution": "Solución",
    "psr.result": "Resultado",
    "project.mena.p1.problem": "La agenda manual generaba consultas por mensaje, señas difíciles de conciliar y riesgo de doble reserva.",
    "project.mena.p1.solution": "Reserva autenticada con Mercado Pago, transferencias revisadas con apoyo de OCR y turnos confirmados en Google Calendar.",
    "project.mena.p1.result": "Verificado de extremo a extremo en producción con un turno y un pago reales.",
    "project.mena.p2.problem": "El stock inicial era provisional y de baja confianza; faltaban recuentos guiados y alertas accionables.",
    "project.mena.p2.solution": "PWA de inventario y bitácora de servicios con recuentos guiados, recetas exactas, alertas y forecasts con confianza explícita.",
    "project.mena.p2.result": "Producto terminado: API en Go con OpenAPI como contrato y CI que valida el cliente generado.",
    "project.super.problem": "Comparar precios exige productos idénticos y datos consistentes: sin emparejamiento por EAN la comparación no es fiable.",
    "project.super.solution": "Ingesta desde la API de VTEX, catálogo en PostgreSQL con Prisma y canasta comparativa con caché en Redis.",
    "project.super.result": "MVP funcional completo, desplegado como demo pública, con alrededor de 750 pruebas automatizadas en CI.",
    "project.shelfops.problem": "Un incidente de tienda necesita trazabilidad: quién actuó, qué sugirió el sistema y qué confirmó una persona.",
    "project.shelfops.solution": "API en Fastify y PostgreSQL con RBAC, login OIDC y auditoría de decisiones por incidente.",
    "project.shelfops.result": "MVP con demo reproducible en Docker y tests de integración en CI.",
    "footer.role": "Desarrollador Backend Junior · APIs e Integraciones",
  },
  en: {
    "a11y.skip": "Skip to content",
    "nav.stack": "Stack",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "toggle.lang": "ES",
    "toggle.theme": "Light",
    "menu.toggle": "Menu",
    "hero.eyebrow": "Hi, I'm",
    "hero.headline":
      "Junior Backend Developer · APIs & Integrations · TypeScript, Node.js & Go",
    "hero.location": "Buenos Aires, Argentina",
    "hero.lead":
      "Junior backend developer trained at UTN FRBA. I built a booking system with real Mercado Pago payments for a nail studio and I am now building its inventory backend in Go. I work with TypeScript, Node.js, PostgreSQL and REST APIs, with automated tests and CI/CD on every change.",
    "hero.status": "Open to junior backend roles",
    "cta.resume": "Download resume",
    "cta.projects": "View projects",
    "skills.eyebrow": "Stack",
    "skills.title": "Technical stack by area of work.",
    "stack.languages": "Languages",
    "stack.backend": "Backend",
    "stack.data": "Data",
    "stack.frontend": "Frontend",
    "stack.integrations": "Integrations",
    "stack.testing": "Testing & CI/CD",
    "stack.cloud": "Cloud",
    "stack.ai": "AI-assisted development",
    "projects.eyebrow": "Projects",
    "projects.title": "Selected projects.",
    "project.mena.client": "freelance client",
    "project.mena.range": "may 2026 – sep 2026",
    "project.mena.product1": "Product 1",
    "project.mena.product2": "Product 2",
    "project.mena.part1": "Bookings and deposits",
    "project.mena.part2": "Inventory",
    "project.super.label": "mar 2026 – present",
    "project.shelfops.label": "jul – aug 2026",
    "project.link.demo": "Live demo",
    "project.link.repo": "Repository",
    "project.link.case": "Case study",
    "education.eyebrow": "Education",
    "education.title": "Academic background.",
    "edu.utn.title": "Diplomatura Professional Full-Stack Developer",
    "edu.utn.meta": "UTN FRBA · 187 h · nov 2025 – may 2026",
    "edu.cbc.title": "CBC Ingeniería en Informática",
    "edu.cbc.meta": "UBA XXI · virtual · aug 2026 – in progress",
    "contact.eyebrow": "Contact",
    "contact.title": "Write to me and let's talk.",
    "contact.email.label": "Email",
    "contact.linkedin.label": "LinkedIn",
    "contact.github.label": "GitHub",
    "psr.problem": "Problem",
    "psr.solution": "Solution",
    "psr.result": "Result",
    "project.mena.p1.problem": "Manual scheduling meant availability asked over messages, deposits hard to reconcile and double-booking risk.",
    "project.mena.p1.solution": "Authenticated booking with Mercado Pago, transfer receipts reviewed with OCR support and confirmed bookings synced to Google Calendar.",
    "project.mena.p1.result": "Validated end to end in production with a real booking and a real payment.",
    "project.mena.p2.problem": "Initial stock was provisional and low confidence; the studio needed guided recounts and actionable alerts.",
    "project.mena.p2.solution": "Inventory and service-log PWA with guided recounts, exact recipes, alerts and forecasts with explicit confidence.",
    "project.mena.p2.result": "Finished product: a Go API with OpenAPI as the contract and CI validating the generated client.",
    "project.super.problem": "Comparing prices requires identical products and consistent data; without EAN matching the comparison is not reliable.",
    "project.super.solution": "Ingestion from the VTEX API, a PostgreSQL catalog with Prisma and a comparison basket cached in Redis.",
    "project.super.result": "Complete functional MVP, deployed as a public demo, with about 750 automated tests in CI.",
    "project.shelfops.problem": "A store incident needs traceability: who acted, what the system suggested and what a person confirmed.",
    "project.shelfops.solution": "Fastify and PostgreSQL API with RBAC, OIDC login and per-incident decision auditing.",
    "project.shelfops.result": "MVP with a Docker-reproducible demo and integration tests in CI.",
    "footer.role": "Junior Backend Developer · APIs & Integrations",
  },
};

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
  if (languageToggle) {
    languageToggle.setAttribute("aria-pressed", String(lang === "en"));
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
  if (themeToggle)
    themeToggle.setAttribute("aria-pressed", String(theme === "light"));
  updateThemeLabel();
  // Persist only on an explicit toggle so the OS preference keeps working.
  if (persist) storage.set("portfolio:theme", theme);
}

applyTheme(getInitialTheme());
applyLanguage(getInitialLanguage());
languageToggle?.addEventListener("click", () =>
  applyLanguage(root.dataset.lang === "en" ? "es" : "en"),
);
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

const revealItems = document.querySelectorAll(".reveal");
const appearItems = document.querySelectorAll(".text-appear");
revealItems.forEach((item, index) =>
  item.style.setProperty("--reveal-index", String(index % 4)),
);
appearItems.forEach((item, index) =>
  item.style.setProperty("--appear-index", String(index % 7)),
);
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
  appearItems.forEach((item) => item.classList.add("is-visible"));
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
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  revealItems.forEach((item) => observer.observe(item));
}
