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
    "rail.email": "Correo",
    "nav.about": "Sobre mí",
    "nav.skills": "Stack",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.resume": "CV",
    "toggle.lang": "EN",
    "toggle.theme": "Claro",
    "hero.eyebrow": "Hola, soy",
    "hero.role.primary": "Full-stack Developer",
    "hero.role.secondary": "Producto, integraciones, datos e IA",
    "hero.lead":
      "Desarrollador web orientado a producto, con Diplomatura en Professional Full-Stack Developer aprobada en UTN FRBA. Construyo interfaces, flujos e integraciones con criterio práctico: pagos, OCR, calendarios, dashboards, SEO técnico y automatización apoyada en IA.",
    "hero.status": "Disponible para equipos web, startups y producto digital",
    "cta.resume": "Descargar CV",
    "cta.projects": "Ver proyectos",
    "about.eyebrow": "Sobre mí",
    "about.title": "Criterio operativo llevado a desarrollo web.",
    "about.past.label": "Antes",
    "about.past.title": "Procesos reales y usuarios reales",
    "about.past.text":
      "Mi base viene de Carrefour y tareas operativas: atención al cliente, reposición, inventario, rotación, conteo y criterios FIFO/FEFO. Esa experiencia me entrenó para entender flujos, prioridades y problemas de negocio.",
    "about.present.label": "Ahora",
    "about.present.title": "Formación full-stack y proyectos aplicados",
    "about.present.text":
      "Diplomatura en Professional Full-Stack Developer aprobada en UTN FRBA: 187 horas, modalidad a distancia, nota Aprobado. También aprobé el Curso de Desarrollo con NodeJS con nota Excelente. Trabajo con Git, debugging e IA como herramienta de desarrollo.",
    "about.future.label": "Próximo paso",
    "about.future.title": "Entrar a un equipo de producto",
    "about.future.text":
      "Busco aportar en una startup, equipo de producto digital o compañía que valore criterio, aprendizaje rápido, comunicación clara y capacidad para convertir necesidades reales en software útil.",
    "skills.eyebrow": "Stack",
    "skills.title": "Stack técnico aplicado a productos web reales.",
    "skills.frontend.text":
      "Interfaces responsivas, accesibles y orientadas a conversión.",
    "skills.backend.text":
      "APIs, persistencia, reglas de negocio y datos operativos.",
    "skills.tools.title": "Integraciones y herramientas",
    "skills.tools.text":
      "Automatización, validación, testing y entrega con criterio.",
    "skill.seo": "SEO técnico",
    "skill.accessibility": "Accesibilidad",
    "skill.ai": "IA aplicada",
    "projects.eyebrow": "Proyectos",
    "projects.title": "Proyectos pensados para resolver procesos reales.",
    "projects.intro":
      "Cada caso muestra una parte distinta del trabajo: integraciones, reglas de negocio, datos, automatización y experiencia de usuario.",
    "project.made": "Tecnologías usadas:",
    "project.link.demo": "Demo pública",
    "project.link.repo": "Repositorio",
    "project.link.case": "Caso técnico",
    "project.one.label": "Backend, datos y operación",
    "project.one.title": "ofertasSUPER",
    "project.one.text":
      "Buscador de productos y ofertas de supermercados argentinos con demo pública verificada, APIs públicas, pipeline de ingesta y normalización/deduplicación de datos, historial de precios, canasta local, cache/rate limiting, Supabase/RLS y panel admin protegido. Caso real para mostrar backend, datos y operación sin venderlo como producción cerrada.",
    "project.two.label": "Producto real e integraciones",
    "project.two.title": "Mena Nails",
    "project.two.text":
      "Landing y flujo de reservas con seña, MercadoPago, verificación de comprobantes mediante Gemini OCR y sincronización con Google Calendar. Pensado para reducir trabajo manual y ordenar agenda real.",
    "project.three.label": "Automatización operativa",
    "project.three.title": "InventStock - bot de inventario por Telegram",
    "project.three.text":
      "Bot operativo para inventario de un salón de uñas, con comandos de Telegram para consultar, agregar y descontar stock, deploy en Railway, métricas runtime, rollback documentado y hardening guiado por specs. Caso de backend/operación que muestra criterio para separar funcionalidad usable de hardening opcional.",
    "mock.booking.title": "Turno confirmado",
    "mock.booking.pay": "Pago verificado",
    "mock.booking.calendar": "Calendario sincronizado",
    "mock.offer.title": "Comparador de ofertas",
    "mock.offer.basket": "canasta",
    "mock.offer.metrics": "métricas",
    "mock.inventory.title": "Bot de inventario",
    "mock.inventory.stock": "stock por Telegram",
    "mock.inventory.metrics": "métricas",
    "mock.inventory.rollback": "rollback",
    "proof.eyebrow": "Formación",
    "proof.title": "Aprendizaje técnico con base operativa.",
    "proof.utn": "Diplomatura en Professional Full-Stack Developer aprobada.",
    "proof.cert.label": "Certificados",
    "proof.cert.text":
      "Curso de Desarrollo en React JS, Curso de Desarrollo con Angular y Curso de Desarrollo con NodeJS. Nota: Excelente en NodeJS.",
    "proof.soft.label": "Habilidades blandas",
    "proof.soft.text":
      "Atención al cliente, comunicación, orden, ownership, aprendizaje rápido y resolución de problemas.",
    "proof.background":
      "Carrefour: reposición, inventario, rotación, conteo y FIFO/FEFO.",
    "contact.eyebrow": "Contacto",
    "contact.title":
      "Si buscás alguien con criterio, aprendizaje rápido y foco en resolver problemas reales, hablemos.",
    "contact.email.label": "Enviar una oportunidad",
    "contact.email.cta": "Correo",
    "contact.linkedin.label": "Conectar profesionalmente",
    "contact.resume.label": "Ver experiencia y formación",
    "contact.resume.cta": "CV",
    "footer.role": "Desarrollador Web Full-stack · IA aplicada al desarrollo",
  },
  en: {
    "rail.email": "Email",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "toggle.lang": "ES",
    "toggle.theme": "Light",
    "hero.eyebrow": "Hello, I'm",
    "hero.role.primary": "Full-stack Developer",
    "hero.role.secondary": "Product, integrations, data, and AI",
    "hero.lead":
      "Full-stack Developer focused on product, integrations, data, and AI. I build interfaces, flows, and integrations with practical judgment: payments, OCR, calendars, APIs, data, technical SEO, and AI-assisted automation.",
    "hero.status":
      "Available for web teams, startups, and digital product work",
    "cta.resume": "Download resume",
    "cta.projects": "View projects",
    "about.eyebrow": "About",
    "about.title": "Operational judgment applied to web development.",
    "about.past.label": "Past",
    "about.past.title": "Real processes and real users",
    "about.past.text":
      "My foundation comes from Carrefour and operational work: customer service, replenishment, inventory, rotation, counting, and FIFO/FEFO criteria. That experience trained me to understand workflows, priorities, and business problems.",
    "about.present.label": "Present",
    "about.present.title": "Full-stack training and applied projects",
    "about.present.text":
      "I completed the Professional Full-Stack Developer Diploma at UTN FRBA: 187 hours, distance modality, approved. I also completed the NodeJS Development course with an Excellent grade. I work with Git, debugging, and AI as a development tool.",
    "about.future.label": "Next step",
    "about.future.title": "Join a product team",
    "about.future.text":
      "I aim to contribute to a startup, digital product team, or company that values judgment, fast learning, clear communication, and the ability to turn real needs into useful software.",
    "skills.eyebrow": "Skills",
    "skills.title": "Technical stack applied to real web products.",
    "skills.intro":
      "Technologies organized by real use: interface, data, integrations, and delivery.",
    "skills.frontend.text":
      "Responsive, accessible interfaces focused on conversion.",
    "skills.backend.text":
      "APIs, persistence, business rules, and operational data.",
    "skills.tools.title": "Integrations and tools",
    "skills.tools.text":
      "Automation, validation, testing, and delivery with judgment.",
    "skill.seo": "Technical SEO",
    "skill.accessibility": "Accessibility",
    "skill.ai": "Applied AI",
    "projects.eyebrow": "Projects",
    "projects.title": "Projects designed to solve real processes.",
    "projects.intro":
      "Each case shows a different part of the work: integrations, business rules, data, automation, and user experience.",
    "project.made": "Built with:",
    "project.link.demo": "Public demo",
    "project.link.repo": "Repository",
    "project.link.case": "Technical case",
    "project.one.label": "Backend, data, and operations",
    "project.one.title": "ofertasSUPER",
    "project.one.text":
      "Deals and price comparison platform for Argentine supermarkets with public demo, search, local basket, public APIs, ingestion, data normalization/deduplication, quality controls, cache/rate limiting, and documented operational limits.",
    "project.two.label": "Real product and integrations",
    "project.two.title": "Mena Nails",
    "project.two.text":
      "Booking, payments, and automation system for a nail salon. It combines landing page, availability rules, Clerk, Convex, MercadoPago, transfer receipts with OCR as review support, admin panel, technical SEO, and Google Calendar synchronization.",
    "project.three.label": "Operations automation",
    "project.three.title": "InventStock - Telegram inventory bot",
    "project.three.text":
      "Operational inventory bot for a nail salon with Telegram commands for stock checks, stock additions and stock deductions, Railway deployment, runtime metrics, documented rollback and spec-driven hardening. A backend/operations case showing judgment around functional readiness versus optional hardening.",
    "mock.booking.title": "Confirmed booking",
    "mock.booking.pay": "Payment verified",
    "mock.booking.calendar": "Calendar synced",
    "mock.offer.title": "Deals comparison",
    "mock.offer.basket": "Basket",
    "mock.offer.metrics": "Metrics",
    "mock.inventory.title": "Inventory bot",
    "mock.inventory.stock": "Telegram stock",
    "mock.inventory.metrics": "Metrics",
    "mock.inventory.rollback": "Rollback",
    "proof.eyebrow": "Education",
    "proof.title": "Technical learning with an operational foundation.",
    "proof.utn": "Completed Professional Full-Stack Developer Diploma.",
    "proof.cert.label": "Certificates",
    "proof.cert.text":
      "React JS, Angular, and NodeJS Development courses. NodeJS grade: Excellent.",
    "proof.soft.label": "Soft skills",
    "proof.soft.text":
      "Customer service, communication, organization, ownership, fast learning, and problem solving.",
    "proof.background":
      "Carrefour: replenishment, inventory, rotation, counting, and FIFO/FEFO.",
    "contact.eyebrow": "Contact",
    "contact.title":
      "If you need someone with judgment, fast learning, and focus on solving real problems, let's talk.",
    "contact.email.label": "Send an opportunity",
    "contact.email.cta": "Email",
    "contact.linkedin.label": "Connect professionally",
    "contact.resume.label": "View experience and training",
    "contact.resume.cta": "Resume",
    "footer.role": "Full-stack Web Developer · AI-assisted workflows",
  },
};

const root = document.documentElement;
const languageToggle = document.querySelector("[data-language-toggle]");
const themeToggle = document.querySelector("[data-theme-toggle]");
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
    : "dark";
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
function applyTheme(theme) {
  root.dataset.theme = theme;
  if (themeToggle)
    themeToggle.setAttribute("aria-pressed", String(theme === "light"));
  updateThemeLabel();
  storage.set("portfolio:theme", theme);
}

applyTheme(getInitialTheme());
applyLanguage(getInitialLanguage());
languageToggle?.addEventListener("click", () =>
  applyLanguage(root.dataset.lang === "en" ? "es" : "en"),
);
themeToggle?.addEventListener("click", () =>
  applyTheme(root.dataset.theme === "light" ? "dark" : "light"),
);

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
