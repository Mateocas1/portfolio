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
    "stack.languages.items": "TypeScript, JavaScript, Go, SQL",
    "stack.backend": "Backend",
    "stack.backend.items":
      "Node.js, Fastify, Next.js route handlers, REST APIs, OpenAPI, webhooks, Prisma, sqlc",
    "stack.data": "Datos",
    "stack.data.items": "PostgreSQL, Supabase, Redis, Convex",
    "stack.frontend": "Frontend",
    "stack.frontend.items": "React, Next.js, SvelteKit, Tailwind",
    "stack.integrations": "Integraciones",
    "stack.integrations.items":
      "Mercado Pago, Google Calendar API, Gemini (OCR), Clerk, VTEX API",
    "stack.testing": "Testing y CI/CD",
    "stack.testing.items": "Vitest, Playwright, Go test, GitHub Actions, Docker",
    "stack.cloud": "Cloud",
    "stack.cloud.items": "Vercel, Cloudflare (R2, Workers)",
    "stack.ai": "Desarrollo asistido por IA",
    "stack.ai.items":
      "Claude Code, Codex, agent workflows, MCP, human review of generated code",
    "projects.eyebrow": "Proyectos",
    "projects.title": "Proyectos seleccionados.",
    "project.mena.label": "Freelance · may 2026 – actualidad",
    "project.mena.text":
      "Sistema de turnos con señas para un estudio de uñas real: Mercado Pago Checkout Pro con webhooks, comprobantes de transferencia leídos con OCR (Gemini) con revisión manual y turnos confirmados sincronizados a Google Calendar. Verificado de extremo a extremo en producción con un turno y un pago reales (webhook, cambio de estado y evento de calendario). Su backend de inventario está en desarrollo: API en Go 1.24 con PostgreSQL (pgx, sqlc), contrato OpenAPI y login por sesión (bcrypt), frontend PWA en SvelteKit, y CI con tests de Go —incluidos tests de integración—, Vitest/Playwright y una verificación que falla si el cliente generado se desvía del contrato OpenAPI.",
    "project.mena.stack":
      "Next.js · Convex · Clerk · Mercado Pago · Gemini · Google Calendar · Go · PostgreSQL · SvelteKit",
    "project.super.label": "mar 2026 – actualidad",
    "project.super.text":
      "Comparador de precios de supermercados argentinos: carga datos de 6 supermercados (Carrefour, DIA, Disco, Jumbo, Vea y Más) desde la API de VTEX y empareja productos por código EAN. Construido con Next.js y TypeScript, PostgreSQL (Supabase, Prisma) y Redis para caché y rate limiting; 13 endpoints REST y panel de administración con Clerk. GitHub Actions ejecuta lint, typecheck, tests, build y Lighthouse en cada push, con alrededor de 750 pruebas automatizadas; la ingesta corre como jobs de Docker y los backups cifrados se guardan en Cloudflare R2.",
    "project.super.stack":
      "Next.js · TypeScript · PostgreSQL · Supabase · Prisma · Redis",
    "project.shelfops.label": "jul – ago 2026",
    "project.shelfops.text":
      "API para registrar incidentes operativos: Fastify y PostgreSQL con roles y permisos (RBAC), login OIDC, contrato OpenAPI, tests de integración en CI y un entorno Docker reproducible.",
    "project.shelfops.stack": "Fastify · PostgreSQL · OIDC · OpenAPI · Docker",
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
    "stack.languages.items": "TypeScript, JavaScript, Go, SQL",
    "stack.backend": "Backend",
    "stack.backend.items":
      "Node.js, Fastify, Next.js route handlers, REST APIs, OpenAPI, webhooks, Prisma, sqlc",
    "stack.data": "Data",
    "stack.data.items": "PostgreSQL, Supabase, Redis, Convex",
    "stack.frontend": "Frontend",
    "stack.frontend.items": "React, Next.js, SvelteKit, Tailwind",
    "stack.integrations": "Integrations",
    "stack.integrations.items":
      "Mercado Pago, Google Calendar API, Gemini (OCR), Clerk, VTEX API",
    "stack.testing": "Testing & CI/CD",
    "stack.testing.items": "Vitest, Playwright, Go test, GitHub Actions, Docker",
    "stack.cloud": "Cloud",
    "stack.cloud.items": "Vercel, Cloudflare (R2, Workers)",
    "stack.ai": "AI-assisted development",
    "stack.ai.items":
      "Claude Code, Codex, agent workflows, MCP, human review of generated code",
    "projects.eyebrow": "Projects",
    "projects.title": "Selected projects.",
    "project.mena.label": "Freelance · may 2026 – present",
    "project.mena.text":
      "Booking and deposit system for a real nail studio: Mercado Pago Checkout Pro with webhooks, transfer receipts read with OCR (Gemini) plus manual review, and confirmed bookings synced to Google Calendar. Verified end to end in production with a real booking and a real payment (webhook, status change and calendar event). Its inventory backend is in development: a Go 1.24 API with PostgreSQL (pgx, sqlc), an OpenAPI contract and session-based login (bcrypt), a SvelteKit PWA frontend, and CI with Go tests —including integration tests—, Vitest/Playwright, and a check that fails when the generated client drifts from the OpenAPI contract.",
    "project.mena.stack":
      "Next.js · Convex · Clerk · Mercado Pago · Gemini · Google Calendar · Go · PostgreSQL · SvelteKit",
    "project.super.label": "mar 2026 – present",
    "project.super.text":
      "Price comparison for Argentine supermarkets: it loads data from 6 supermarkets (Carrefour, DIA, Disco, Jumbo, Vea and Más) from the VTEX API and matches products by EAN code. Built with Next.js and TypeScript, PostgreSQL (Supabase, Prisma) and Redis for caching and rate limiting; 13 REST endpoints and an admin panel with Clerk. GitHub Actions runs lint, typecheck, tests, build and Lighthouse on every push, with about 750 automated tests; data ingestion runs as Docker jobs and encrypted backups are stored on Cloudflare R2.",
    "project.super.stack":
      "Next.js · TypeScript · PostgreSQL · Supabase · Prisma · Redis",
    "project.shelfops.label": "jul – aug 2026",
    "project.shelfops.text":
      "API for logging operational incidents: Fastify and PostgreSQL with roles and permissions (RBAC), OIDC login, OpenAPI contract, integration tests in CI and a reproducible Docker setup.",
    "project.shelfops.stack": "Fastify · PostgreSQL · OIDC · OpenAPI · Docker",
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
  themeToggle.setAttribute(
    "aria-label",
    lang === "es" ? "Cambiar tema" : "Change theme",
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
      lang === "es" ? "Cambiar idioma" : "Change language",
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
