import { motion } from "framer-motion";
import { Coffee, Atom, Bot, Database, Container, MapPin, GraduationCap, Briefcase } from "lucide-react";

const coreStack = [
  {
    name: "Java",
    desc: "Backend y APIs REST con Spring Boot",
    icon: <Coffee className="w-6 h-6" />
  },
  {
    name: "React",
    desc: "Frontend con React, Next.js y Astro",
    icon: <Atom className="w-6 h-6" />
  },
  {
    name: "Agentes IA",
    desc: "OpenAI, Spring AI y búsqueda semántica",
    icon: <Bot className="w-6 h-6" />
  },
  {
    name: "PostgreSQL",
    desc: "Diseño relacional, migraciones y pgvector",
    icon: <Database className="w-6 h-6" />
  },
  {
    name: "Git / Docker",
    desc: "Control de versiones, CI y contenedores",
    icon: <Container className="w-6 h-6" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Columna Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Sobre <span className="text-primary">Mí</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Tengo 23 años y soy estudiante de <strong className="text-white">cuarto curso</strong> en
                <strong className="text-white"> Ingeniería Informática</strong> en la <strong className="text-white">UDC</strong>.
                Me considero una persona tranquila, organizada y reflexiva, con buenas habilidades 
                de comunicación y trabajo en equipo.
              </p>
              <p>
                Antes de la carrera completé un ciclo superior en <strong className="text-white">DAM</strong> y <strong className="text-white">trabajé 
                1 año y 1 mes en <strong>Indra</strong></strong> , lo que me dio experiencia en proyectos reales.
                Actualmente me especializo en <strong className="text-primary">Ingeniería del Software</strong> pues me gusta
                la programación full stack y el trabajo en equipo mediante diferentes metodologías.
              </p>
            </div>

            {/* Tira de datos personales */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-x-10 gap-y-5"
            >
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="p-2 bg-white/5 rounded-lg text-primary">
                  <MapPin className="w-4 h-4" />
                </span>
                Arteixo, A Coruña
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="p-2 bg-white/5 rounded-lg text-primary">
                  <GraduationCap className="w-4 h-4" />
                </span>
                UDC · 4º curso
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="p-2 bg-white/5 rounded-lg text-primary">
                  <Briefcase className="w-4 h-4" />
                </span>
                Indra · 1 año y 1 mes
              </div>
            </motion.div>
          </div>

          {/* Columna Core Stack */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <span className="text-primary">⚡</span> Herramientas que domino
            </motion.h3>

            <div className="grid grid-cols-2 gap-4">
              {coreStack.map((item, index) => {
                const isLast = index === coreStack.length - 1;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`group bg-bg-soft/50 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(108,240,194,0.1)] ${
                      isLast ? "col-span-2 flex items-center gap-5" : ""
                    }`}
                  >
                    <div className={`p-3 bg-white/5 rounded-xl text-primary w-fit group-hover:bg-primary group-hover:text-black transition-colors ${
                      isLast ? "shrink-0" : "mb-4"
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.name}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-sm text-center mt-6"
            >
              El stack que uso día a día, a fondo.
            </motion.p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
