import type { Lang } from "./config";

/**
 * Interface strings. Spanish is the source of truth and must define every key.
 * English must define every key too (checked by the types); `useTranslations` still falls back
 * to Spanish so a key added later without translation cannot break a page.
 *
 * Values marked "HTML" are rendered with set:html; they are written here, never user input.
 */
const es = {
  // Meta
  "meta.description":
    "Portfolio de Iván Castro Roel, ingeniero informático: experiencia, proyectos de software (Java, Spring Boot, React, IA) y contacto.",
  "meta.ogImageAlt": "Iván Castro, ingeniero informático",
  "home.title": "Portfolio de Iván - Ingeniero de Software",

  // Navigation
  "nav.main": "Navegación principal",
  "nav.stack": "Herramientas",
  "nav.experience": "Experiencia",
  "nav.projects": "Proyectos",
  "nav.contact": "Contacto",
  "nav.aboutMe": "Sobre mí",
  "nav.cv": "CV",
  "nav.menu": "Menú",
  "nav.closeMenu": "Cerrar menú",
  "nav.darkTheme": "Tema oscuro",

  // Hero
  "hero.role": "Ingeniero Informático",
  "hero.intro":
    "Especialista en Ingeniería del Software. Me apasiona crear productos útiles, accesibles y rápidos.",
  "hero.downloadCv": "Descargar CV",
  "hero.viewProjects": "Ver proyectos",
  "hero.photoAlt": "Foto de Iván",
  "hero.blockAuthor": "Autor",
  "hero.blockLocation": "Lugar",
  "hero.blockStudies": "Formación",
  "hero.blockWork": "Experiencia",

  // About
  "about.title": "Sobre mí",
  /** HTML */
  "about.bio1":
    "Tengo 23 años y soy estudiante de <strong>Ingeniería Informática</strong> en la <strong>UDC</strong>, con todas las asignaturas aprobadas y el TFG en curso. Me considero una persona tranquila, organizada y reflexiva, con buenas habilidades de comunicación y trabajo en equipo.",
  /** HTML */
  "about.bio2":
    "Antes de la carrera completé un ciclo superior en <strong>DAM</strong> y <strong>trabajé 1 año en Indra</strong> , lo que me dio experiencia en proyectos reales. Actualmente me especializo en <strong>Ingeniería del Software</strong> pues me gusta la programación full stack y el trabajo en equipo mediante diferentes metodologías.",
  "about.factLocation": "Arteixo, A Coruña",
  "about.factStudies": "UDC · TFG en curso",
  "about.factWork": "Indra · 1 año",
  "stack.title": "Herramientas que domino",
  "stack.note": "El stack que uso día a día, a fondo, y los proyectos en los que lo he usado.",
  "stack.usedIn": "Lo uso en",
  "stack.toolsLabel": "Herramientas",
  "stack.projectsLabel": "Proyectos",

  // Experience
  "experience.title": "Experiencia y formación",
  "experience.education": "Formación",
  "experience.work": "Trabajo",
  "experience.present": "actualidad",
  "experience.ongoing": "En curso",

  // Projects
  "projects.title": "Proyectos Destacados",
  "projects.intro":
    "Selección de trabajos donde aplico patrones de arquitectura y buenas prácticas.",
  "projects.featured": "Destacado",
  "projects.sheet": "Hoja {n} de {total}",
  "projects.viewCode": "Ver Código en GitHub",
  "projects.metaTitle": "{title} | Proyecto de Iván Castro",
  "projects.back": "Volver a proyectos",
  "projects.stack": "Stack",
  "projects.links": "Enlaces",
  "projects.more": "Más proyectos",
  "projects.prev": "Anterior",
  "projects.next": "Siguiente",

  // Contact
  "contact.title": "Hablemos",
  "contact.intro":
    "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.",
  "contact.email": "Email",
  "contact.phone": "Teléfono",
  "contact.location": "Ubicación",
  "contact.locationValue": "Arteixo, A Coruña",
  "contact.copy": "Copiar",
  "contact.copied": "Email copiado",

  // Footer
  "footer.rights": "Casi todos los derechos reservados.",
  "footer.author": "Autor",
  "footer.links": "Enlaces",
  "footer.revision": "Revisión",

  // Lifestyle page
  "life.title": "Iván Castro | Lifestyle",
  "life.description":
    "Más allá del código: running, ciclismo, familia y amigos. Mis kilómetros del año en Strava.",
  "life.kicker": "Lifestyle",
  "life.headingA": "Más allá del",
  "life.headingB": "Código",
  "life.intro":
    "Ingeniería es disciplina. El deporte también. Así encuentro mi equilibrio entre la pantalla y el mundo real.",
  "life.sportTitle": "Deporte & Disciplina",
  /** HTML */
  "life.sportText":
    'El equilibrio perfecto entre el esfuerzo continuo y la libertad de explorar. Preparar <strong class="text-white">Medias Maratones</strong>, correr todo tipo de carreras y acumular kilómetros en bici me han enseñado que los grandes objetivos se logran con constancia diaria.',
  "life.followStrava": "Sígueme en Strava",
  "life.runningAlt": "Corriendo",
  "life.runningTitle": "Running",
  "life.runningText": "Resiliencia kilómetro a kilómetro.",
  "life.cyclingAlt": "Ciclismo",
  "life.cyclingTitle": "Ciclismo",
  "life.cyclingText": "Libertad, velocidad y desconexión.",
  "life.socialTitle": "Social & Familia",
  "life.batteryTitle": 'Mi "Social Battery"',
  "life.batteryText1":
    "El deporte me da fuerza, pero mi entorno me da estabilidad. Tengo la inmensa suerte de contar con una familia increíble que me aporta seguridad y valores inquebrantables.",
  /** HTML */
  "life.batteryText2":
    'A eso se suma un grupo de amigos muy afín a mí, con los que comparto risas, viajes, experiencias y por supuesto, <span class="text-white">¡kilómetros!</span>',
  "life.family": "Familia",
  "life.friends": "Amigos",

  // Strava card
  "strava.summary": "Resumen",
  "strava.total": "Distancia total",
  "strava.running": "Running",
  "strava.cycling": "Ciclismo",
  "strava.runRide": "Run + Ride",

  // 404
  "notFound.title": "Página no encontrada",
  "notFound.metaTitle": "Página no encontrada | Iván Castro",
  "notFound.metaDescription": "Esta página no existe.",
  "notFound.text": "La página que buscas no existe o se ha movido.",
  "notFound.home": "Volver al inicio",
  "notFound.lifestyle": "Ver Lifestyle",
};

export type UIKey = keyof typeof es;

/** English (drafted by Claude in F2.5b, reviewed by Iván). Must define every key. */
const en: Record<UIKey, string> = {
  // Meta
  "meta.description":
    "Portfolio of Iván Castro Roel, computer engineer: experience, software projects (Java, Spring Boot, React, AI) and contact.",
  "meta.ogImageAlt": "Iván Castro, computer engineer",
  "home.title": "Iván's Portfolio - Software Engineer",

  // Navigation
  "nav.main": "Main navigation",
  "nav.stack": "Tools",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
  "nav.aboutMe": "About me",
  "nav.cv": "CV",
  "nav.menu": "Menu",
  "nav.closeMenu": "Close menu",
  "nav.darkTheme": "Dark theme",

  // Hero
  "hero.role": "Computer Engineer",
  "hero.intro":
    "Specialized in Software Engineering. I love building products that are useful, accessible and fast.",
  "hero.downloadCv": "Download CV",
  "hero.viewProjects": "View projects",
  "hero.photoAlt": "Photo of Iván",
  "hero.blockAuthor": "Author",
  "hero.blockLocation": "Location",
  "hero.blockStudies": "Education",
  "hero.blockWork": "Experience",

  // About
  "about.title": "About me",
  /** HTML */
  "about.bio1":
    "I'm 23 and a <strong>Computer Engineering</strong> student at the <strong>UDC</strong> (University of A Coruña), with all courses passed and my final-year project in progress. I see myself as a calm, organized and thoughtful person, with good communication and teamwork skills.",
  /** HTML */
  "about.bio2":
    "Before university I completed a higher vocational degree in <strong>Multiplatform App Development (DAM)</strong> and <strong>worked for 1 year at Indra</strong>, which gave me experience on real projects. I am currently specializing in <strong>Software Engineering</strong>, because I enjoy full-stack development and working in teams with different methodologies.",
  "about.factLocation": "Arteixo, A Coruña (Spain)",
  "about.factStudies": "UDC · Final-year project in progress",
  "about.factWork": "Indra · 1 year",
  "stack.title": "Tools I master",
  "stack.note": "The stack I use every day, in depth, and the projects where I have used it.",
  "stack.usedIn": "Used in",
  "stack.toolsLabel": "Tools",
  "stack.projectsLabel": "Projects",

  // Experience
  "experience.title": "Experience and education",
  "experience.education": "Education",
  "experience.work": "Work",
  "experience.present": "present",
  "experience.ongoing": "In progress",

  // Projects
  "projects.title": "Featured Projects",
  "projects.intro": "A selection of work where I apply architecture patterns and good practices.",
  "projects.featured": "Featured",
  "projects.sheet": "Sheet {n} of {total}",
  "projects.viewCode": "View code on GitHub",
  "projects.metaTitle": "{title} | Project by Iván Castro",
  "projects.back": "Back to projects",
  "projects.stack": "Stack",
  "projects.links": "Links",
  "projects.more": "More projects",
  "projects.prev": "Previous",
  "projects.next": "Next",

  // Contact
  "contact.title": "Let's talk",
  "contact.intro":
    "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.location": "Location",
  "contact.locationValue": "Arteixo, A Coruña (Spain)",
  "contact.copy": "Copy",
  "contact.copied": "Email copied",

  // Footer
  "footer.rights": "Almost all rights reserved.",
  "footer.author": "Author",
  "footer.links": "Links",
  "footer.revision": "Revision",

  // Lifestyle page
  "life.title": "Iván Castro | Lifestyle",
  "life.description":
    "Beyond code: running, cycling, family and friends. My kilometers of the year on Strava.",
  "life.kicker": "Lifestyle",
  "life.headingA": "Beyond the",
  "life.headingB": "Code",
  "life.intro":
    "Engineering is discipline. So is sport. That's how I find my balance between the screen and the real world.",
  "life.sportTitle": "Sport & Discipline",
  /** HTML */
  "life.sportText":
    'The perfect balance between steady effort and the freedom to explore. Training for <strong class="text-white">half marathons</strong>, running all kinds of races and racking up kilometers on the bike have taught me that big goals are reached through daily consistency.',
  "life.followStrava": "Follow me on Strava",
  "life.runningAlt": "Running",
  "life.runningTitle": "Running",
  "life.runningText": "Resilience, kilometer after kilometer.",
  "life.cyclingAlt": "Cycling",
  "life.cyclingTitle": "Cycling",
  "life.cyclingText": "Freedom, speed and switching off.",
  "life.socialTitle": "Social & Family",
  "life.batteryTitle": 'My "Social Battery"',
  "life.batteryText1":
    "Sport gives me strength, but the people around me give me stability. I'm incredibly lucky to have an amazing family that gives me security and unshakable values.",
  /** HTML */
  "life.batteryText2":
    'On top of that, I have a group of friends very much like me, with whom I share laughs, trips, experiences and, of course, <span class="text-white">kilometers!</span>',
  "life.family": "Family",
  "life.friends": "Friends",

  // Strava card
  "strava.summary": "Summary",
  "strava.total": "Total distance",
  "strava.running": "Running",
  "strava.cycling": "Cycling",
  "strava.runRide": "Run + Ride",

  // 404
  "notFound.title": "Page not found",
  "notFound.metaTitle": "Page not found | Iván Castro",
  "notFound.metaDescription": "This page does not exist.",
  "notFound.text": "The page you are looking for does not exist or has moved.",
  "notFound.home": "Back to home",
  "notFound.lifestyle": "See Lifestyle",
};

export const ui: Record<Lang, Partial<Record<UIKey, string>>> & { es: Record<UIKey, string> } = {
  es,
  en,
};
