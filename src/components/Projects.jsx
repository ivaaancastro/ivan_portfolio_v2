import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X, Code2, Layers, Terminal, Activity, Brain, Database, Cpu } from "lucide-react";

const projects = [
  {
    id: 0,
    title: "AI Training Dashboard",
    status: "dev",
    shortDesc: "Plataforma de alto rendimiento con integración de Strava y Coach IA.",
    fullDesc: (
      <>
        <p className="mb-4">
          Proyecto personal en desarrollo (Work in Progress) enfocado en el análisis de datos deportivos. El objetivo es centralizar métricas de entrenamiento y usar Inteligencia Artificial para generar planes personalizados.
        </p>
        <h4 className="text-white font-bold mb-2">Características Clave:</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Integración Strava:</strong> Conexión OAuth para importar y analizar actividades automáticamente.</li>
          <li><strong>Smart Coach (IA):</strong> Módulo que utiliza IA generativa para interpretar el estado de forma y sugerir sesiones.</li>
          <li><strong>Backend Moderno:</strong> Persistencia de datos y autenticación gestionada con <strong>Supabase</strong>.</li>
          <li><strong>Dashboard Interactivo:</strong> Gráficos de evolución y distribución de carga con Recharts.</li>
        </ul>
      </>
    ),
    tags: ["React", "Vite", "Supabase", "OpenAI API", "Strava API", "Tailwind"],
    image: "/img/dashboard-ai.png",
    link: "https://github.com/ivaaancastro/calculadora-ivan",
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: 1,
    title: "FicFit",
    shortDesc: "Plataforma Integral de Gestión Fitness (Fullstack & DevOps).",
    fullDesc: (
      <>
        <p className="mb-4">
          Este proyecto nace con el objetivo de gestionar un ecosistema de gimnasio moderno, uniendo alto rendimiento deportivo con ingeniería de software de calidad.
        </p>
        <h4 className="text-white font-bold mb-2">Aspectos Técnicos:</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Arquitectura:</strong> Separación clara entre núcleo de negocio (Java) e interfaz reactiva (React).</li>
          <li><strong>Infraestructura:</strong> Despliegue en microservicios con Kubernetes para alta disponibilidad.</li>
          <li><strong>Calidad:</strong> Integración Continua con Jenkins y análisis de código con SonarQube.</li>
        </ul>
      </>
    ),
    tags: ["Java", "React", "Docker", "Kubernetes", "Maven"],
    image: "/img/ficfit.png",
    link: "https://github.com/ivaaancastro/ficfit",
    icon: <Layers className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Gestor de Cursos",
    shortDesc: "Sistema distribuido para la gestión eficiente de cursos y estudiantes.",
    fullDesc: (
      <>
        <p className="mb-4">
          Aplicación distribuida diseñada para manejar registros, consultas y administración de datos en un entorno cliente-servidor.
        </p>
        <h4 className="text-white font-bold mb-2">Lo destacado:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Uso de <strong>Apache Thrift</strong> para la definición de servicios y comunicación eficiente entre lenguajes.</li>
          <li>Enfoque modular y escalable.</li>
          <li>Persistencia de datos optimizada.</li>
        </ul>
      </>
    ),
    tags: ["Java", "Thrift", "Sistemas Distribuidos"],
    image: "/img/gestor_cursos.png",
    link: "https://github.com/ivaaancastro/gestor_cursos",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Gestor de Repositorios",
    shortDesc: "Sistema CLI para gestión de repositorios y control de versiones.",
    fullDesc: (
      <>
        <p className="mb-4">
          Sistema de gestión personal de repositorios desarrollado en Elixir. Diseñado para operar desde la terminal con máxima eficiencia.
        </p>
        <h4 className="text-white font-bold mb-2">Funcionalidades:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Creación, modificación y eliminación de repositorios.</li>
          <li>Gestión del historial de cambios y commits.</li>
          <li>Control de permisos de acceso de usuarios simulado.</li>
        </ul>
      </>
    ),
    tags: ["Elixir", "Git", "Terminal", "CLI"],
    image: "/img/gestor_repositorios.png",
    link: "https://github.com/ivaaancastro/gestor_repositorios",
    icon: <Terminal className="w-6 h-6" />
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-black/20 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Encabezado de Sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center gap-3">
            <Activity className="text-primary" /> Proyectos Destacados
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Selección de trabajos donde aplico patrones de arquitectura y buenas prácticas.
          </p>
        </motion.div>

        {/* Grid de Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.article 
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group bg-card border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,240,194,0.1)] relative flex flex-col h-full"
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10 opacity-80" />
                <motion.img 
                  layoutId={`img-${project.id}`}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onerror="this.style.display='none'" 
                />
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full text-white border border-white/10">
                  {project.icon}
                </div>
                
                {/* Badge de "En Desarrollo" */}
                {project.status === "dev" && (
                   <div className="absolute top-4 left-4 z-20 bg-yellow-500/90 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1">
                     <Cpu size={12} /> En Desarrollo
                   </div>
                )}
              </div>

              {/* Contenido Resumido */}
              <div className="p-6 flex flex-col grow">
                <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </motion.h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-medium text-gray-500 px-2 py-1">+{project.tags.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* MODAL CON DETALLES */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-0 md:p-4"
              >
                <motion.div
                  layoutId={`card-${selectedProject.id}`}
                  // CLASES ADAPTATIVAS:
                  // Mobile: fixed bottom-0 (pegado abajo), rounded-t-3xl (borde redondo solo arriba)
                  // Desktop (md): relative (flotante), rounded-3xl (borde redondo completo)
                  className="bg-[#1a1d24] w-full max-w-2xl overflow-hidden shadow-2xl border-t border-x border-white/10 
                             fixed bottom-0 left-0 right-0 rounded-t-3xl max-h-[85vh] 
                             md:relative md:rounded-3xl md:border md:max-h-[90vh] md:bottom-auto overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                  
                  // ANIMACIÓN DE ENTRADA:
                  // Mobile: Sube desde abajo (y: 100%)
                  // Desktop: Se encarga el layoutId
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                >
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-30 p-2 bg-black/50 text-white rounded-full hover:bg-primary hover:text-black transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <div className="relative h-64 md:h-80 shrink-0">
                    <motion.img 
                      layoutId={`img-${selectedProject.id}`}
                      src={selectedProject.image} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d24] to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.h3 
                            layoutId={`title-${selectedProject.id}`}
                            className="text-3xl md:text-4xl font-bold text-white"
                        >
                            {selectedProject.title}
                        </motion.h3>
                        {selectedProject.status === "dev" && (
                            <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md">WIP</span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-primary text-black font-semibold text-xs rounded-full shadow-lg shadow-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 md:p-8 text-gray-300 space-y-4 text-base md:text-lg leading-relaxed"
                  >
                    {selectedProject.fullDesc}

                    <div className="pt-6 mt-4 border-t border-white/10 flex justify-end">
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-primary transition-colors shadow-lg"
                      >
                        <Github size={20} /> Ver Código en GitHub
                      </a>
                    </div>
                  </motion.div>

                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}