import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { X, Code2, Layers, Terminal, Activity, Brain, Store, Star } from "lucide-react";
import { Github } from "./icons/brand";

const projects = [
  {
    id: 0,
    title: "Nexus Commerce Core",
    featured: true,
    shortDesc:
      "Backend transaccional de alto rendimiento para retail global, con vitrina editorial en Next.js.",
    fullDesc: (
      <>
        <p className="mb-4">
          Proyecto full-stack personal construido con estándares de ingeniería de producción: un
          backend transaccional para retail multimercado con Spring Boot y una vitrina editorial en
          Next.js. Todo el desarrollo sigue Spec-Driven Development, con specs, ADRs y changelog
          versionados.
        </p>
        <h4 className="mb-2 font-bold text-white">Motores de negocio:</h4>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          <li>
            <strong>Catálogo:</strong> productos con variantes físicas (SKU) organizados por
            familia, con consultas optimizadas sin N+1.
          </li>
          <li>
            <strong>Precios multimercado:</strong> tarificación multidivisa (ES/US/UK/CH) con
            desglose impositivo, toda la aritmética financiera en BigDecimal.
          </li>
          <li>
            <strong>Inventario omnicanal:</strong> cálculo ATS y bloqueo pesimista (
            <code className="text-primary">SELECT ... FOR UPDATE</code>) para impedir el
            over-selling.
          </li>
          <li>
            <strong>Checkout transaccional:</strong> idempotencia por cabecera, snapshot financiero
            inmutable y devoluciones con ventana de 30 días.
          </li>
          <li>
            <strong>Búsqueda híbrida con IA:</strong> embeddings con pgvector (HNSW) vía Spring AI,
            con fallback a texto cuando no hay API key.
          </li>
          <li>
            <strong>Panel de administración:</strong> roles ADMIN/USER con JWT y gestión de
            catálogo, stock y precios.
          </li>
        </ul>
        <h4 className="mb-2 font-bold text-white">Calidad y proceso:</h4>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          <li>
            <strong>608 tests</strong> (249 backend con &gt;90% de cobertura, 359 frontend) y E2E
            con Playwright en 3 navegadores.
          </li>
          <li>
            <strong>Auditorías en CI:</strong> accesibilidad con axe sobre 14 rutas y Core Web
            Vitals con Lighthouse, ambas en verde.
          </li>
          <li>
            Arquitectura en capas con DTOs inmutables, errores semánticos RFC 7807 y documentación
            OpenAPI/Swagger.
          </li>
        </ul>
      </>
    ),
    tags: ["Java", "Spring Boot", "Next.js", "PostgreSQL", "pgvector", "Spring AI"],
    image: "nexus-catalog",
    link: "https://github.com/ivaaancastro/nexus-commerce-core",
    icon: <Store className="h-6 w-6" />,
  },
  {
    id: 1,
    title: "Forma",
    shortDesc: "Plataforma de alto rendimiento con integración de Strava y Coach IA.",
    fullDesc: (
      <>
        <p className="mb-4">
          Proyecto personal enfocado en el análisis de datos deportivos. El objetivo es centralizar
          métricas de entrenamiento y usar Inteligencia Artificial para generar planes
          personalizados.
        </p>
        <h4 className="mb-2 font-bold text-white">Características Clave:</h4>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          <li>
            <strong>Integración Strava:</strong> Conexión OAuth para importar y analizar actividades
            automáticamente.
          </li>
          <li>
            <strong>Smart Coach (IA):</strong> Módulo que utiliza IA generativa para interpretar el
            estado de forma y sugerir sesiones.
          </li>
          <li>
            <strong>Backend Moderno:</strong> Persistencia de datos y autenticación gestionada con{" "}
            <strong>Supabase</strong>.
          </li>
          <li>
            <strong>Dashboard Interactivo:</strong> Gráficos de evolución y distribución de carga
            con Recharts.
          </li>
        </ul>
      </>
    ),
    tags: ["React", "Vite", "Supabase", "OpenAI API", "Strava API", "Tailwind"],
    image: "dashboard-ai",
    link: "https://github.com/ivaaancastro/calculadora-ivan",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "FicFit",
    shortDesc: "Plataforma Integral de Gestión Fitness (Fullstack & DevOps).",
    fullDesc: (
      <>
        <p className="mb-4">
          Este proyecto nace con el objetivo de gestionar un ecosistema de gimnasio moderno, uniendo
          alto rendimiento deportivo con ingeniería de software de calidad.
        </p>
        <h4 className="mb-2 font-bold text-white">Aspectos Técnicos:</h4>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          <li>
            <strong>Arquitectura:</strong> Separación clara entre núcleo de negocio (Java) e
            interfaz reactiva (React).
          </li>
          <li>
            <strong>Infraestructura:</strong> Despliegue en microservicios con Kubernetes para alta
            disponibilidad.
          </li>
          <li>
            <strong>Calidad:</strong> Integración Continua con Jenkins y análisis de código con
            SonarQube.
          </li>
        </ul>
      </>
    ),
    tags: ["Java", "React", "Docker", "Kubernetes", "Maven"],
    image: "ficfit",
    link: "https://github.com/ivaaancastro/ficfit",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Gestor de Cursos",
    shortDesc: "Sistema distribuido para la gestión eficiente de cursos y estudiantes.",
    fullDesc: (
      <>
        <p className="mb-4">
          Aplicación distribuida diseñada para manejar registros, consultas y administración de
          datos en un entorno cliente-servidor.
        </p>
        <h4 className="mb-2 font-bold text-white">Lo destacado:</h4>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Uso de <strong>Apache Thrift</strong> para la definición de servicios y comunicación
            eficiente entre lenguajes.
          </li>
          <li>Enfoque modular y escalable.</li>
          <li>Persistencia de datos optimizada.</li>
        </ul>
      </>
    ),
    tags: ["Java", "Thrift", "Sistemas Distribuidos"],
    image: "gestor_cursos",
    link: "https://github.com/ivaaancastro/gestor_cursos",
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Gestor de Repositorios",
    shortDesc: "Sistema CLI para gestión de repositorios y control de versiones.",
    fullDesc: (
      <>
        <p className="mb-4">
          Sistema de gestión personal de repositorios desarrollado en Elixir. Diseñado para operar
          desde la terminal con máxima eficiencia.
        </p>
        <h4 className="mb-2 font-bold text-white">Funcionalidades:</h4>
        <ul className="list-disc space-y-1 pl-5">
          <li>Creación, modificación y eliminación de repositorios.</li>
          <li>Gestión del historial de cambios y commits.</li>
          <li>Control de permisos de acceso de usuarios simulado.</li>
        </ul>
      </>
    ),
    tags: ["Elixir", "Git", "Terminal", "CLI"],
    image: "gestor_repositorios",
    link: "https://github.com/ivaaancastro/gestor_repositorios",
    icon: <Terminal className="h-6 w-6" />,
  },
];

const CARD_SIZES = "(min-width: 1024px) 340px, (min-width: 768px) 50vw, 100vw";
const FEATURED_SIZES = "(min-width: 1024px) 700px, 100vw";
const MODAL_SIZES = "(min-width: 768px) 672px, 100vw";

/** @param {{ images: Record<string, import("../utils/images").ResponsiveImage> }} props */
export default function Projects({ images }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const openProject = (project, trigger) => {
    triggerRef.current = trigger;
    setSelectedProject(project);
  };
  const closeProject = () => setSelectedProject(null);

  // Dialog behaviour: initial focus, Esc to close, focus trap, scroll lock, focus return.
  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeProject();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!dialogRef.current.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [selectedProject]);

  return (
    <MotionConfig reducedMotion="user">
      <section id="projects" className="relative bg-black/20 py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          {/* Encabezado de Sección */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="mb-4 flex items-center gap-3 text-3xl font-bold text-white md:text-4xl">
              <Activity className="text-primary" /> Proyectos Destacados
            </h2>
            <p className="max-w-2xl text-lg text-muted">
              Selección de trabajos donde aplico patrones de arquitectura y buenas prácticas.
            </p>
          </motion.div>

          {/* Grid de Tarjetas */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                layoutId={`card-${project.id}`}
                className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(108,240,194,0.1)] has-[:focus-visible]:border-primary has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Imagen */}
                <div
                  className={`relative shrink-0 overflow-hidden ${project.featured ? "h-64 lg:h-72" : "h-48"}`}
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                  <motion.img
                    layoutId={`img-${project.id}`}
                    src={images[project.image].src}
                    srcSet={images[project.image].srcSet}
                    sizes={project.featured ? FEATURED_SIZES : CARD_SIZES}
                    width={images[project.image].width}
                    height={images[project.image].height}
                    loading="lazy"
                    decoding="async"
                    alt={project.title}
                    className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20 rounded-full border border-white/10 bg-black/50 p-2 text-white backdrop-blur-md">
                    {project.icon}
                  </div>

                  {/* Badge de "Destacado" */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-black shadow-lg backdrop-blur-sm">
                      <Star size={12} className="fill-current" /> Destacado
                    </div>
                  )}
                </div>

                {/* Contenido Resumido */}
                <div className="flex grow flex-col p-6">
                  <motion.h3
                    layoutId={`title-${project.id}`}
                    className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-primary"
                  >
                    {/* The button covers the whole card (after:inset-0) so the card is clickable and keyboard accessible. */}
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      onClick={(event) => openProject(project, event.currentTarget)}
                      className="text-left outline-none after:absolute after:inset-0 after:z-30 after:content-['']"
                    >
                      {project.title}
                    </button>
                  </motion.h3>
                  <p className="mb-4 line-clamp-2 text-sm text-gray-400">{project.shortDesc}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium text-gray-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* MODAL COMPLETO MEJORADO */}
          <AnimatePresence>
            {selectedProject && (
              <>
                {/* BACKDROP: z-[60] para tapar la BottomNav */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeProject}
                  className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm md:items-center md:p-4"
                >
                  <motion.div
                    ref={dialogRef}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="project-dialog-title"
                    layoutId={`card-${selectedProject.id}`}
                    // ESTRUCTURA FLEXBOX: Header fijo + Body scrollable + Footer fijo
                    className="fixed right-0 bottom-0 left-0 flex h-[85vh] max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border-x border-t border-white/10 bg-[#1a1d24] shadow-2xl md:relative md:bottom-auto md:h-auto md:max-h-[90vh] md:rounded-3xl md:border"
                    onClick={(e) => e.stopPropagation()}

                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  >
                    {/* BARRA SUPERIOR (Solo móvil) - Handle visual */}
                    <div className="pointer-events-none absolute top-0 z-50 flex w-full justify-center pt-3 pb-1 md:hidden">
                      <div className="h-1.5 w-12 rounded-full bg-white/20"></div>
                    </div>

                    {/* BOTÓN CERRAR */}
                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={closeProject}
                      aria-label="Cerrar"
                      className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-primary hover:text-black"
                    >
                      <X size={20} />
                    </button>

                    {/* --- 1. HEADER (Imagen) - Fijo, no hace scroll --- */}
                    <div className="relative h-56 shrink-0 md:h-80">
                      <motion.img
                        layoutId={`img-${selectedProject.id}`}
                        src={images[selectedProject.image].src}
                        srcSet={images[selectedProject.image].srcSet}
                        sizes={MODAL_SIZES}
                        width={images[selectedProject.image].width}
                        height={images[selectedProject.image].height}
                        alt={selectedProject.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d24] via-transparent to-transparent" />

                      <div className="absolute right-6 bottom-4 left-6">
                        <div className="mb-2 flex items-center gap-3">
                          <motion.h3
                            id="project-dialog-title"
                            layoutId={`title-${selectedProject.id}`}
                            className="text-2xl font-bold text-white shadow-black drop-shadow-lg md:text-4xl"
                          >
                            {selectedProject.title}
                          </motion.h3>
                          {selectedProject.featured && (
                            <span className="flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-xs font-bold text-black shadow-lg">
                              <Star size={12} className="fill-current" /> Destacado
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-primary/90 px-2 py-1 text-[10px] font-semibold text-black shadow-lg backdrop-blur-md md:text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* --- 2. BODY (Texto) - Única parte que hace scroll --- */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent space-y-4 overflow-y-auto p-6 text-base leading-relaxed text-gray-300 md:p-8 md:text-lg"
                    >
                      {selectedProject.fullDesc}
                    </motion.div>

                    {/* --- 3. FOOTER (Botón) - Siempre visible abajo --- */}
                    <div className="z-20 shrink-0 border-t border-white/10 bg-[#1a1d24] p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:pb-6">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-black shadow-lg transition-colors hover:bg-primary active:scale-95"
                      >
                        <Github size={20} /> Ver Código en GitHub
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>
    </MotionConfig>
  );
}
