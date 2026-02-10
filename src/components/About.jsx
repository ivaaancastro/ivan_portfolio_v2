import { motion } from "framer-motion";

const skills = [
  "Java", "Python", "JavaScript", "React", "Linux", 
  "Git/GitHub", "Docker", "SQL", "HTML/CSS", "Jira"
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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Columna Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Sobre <span className="text-primary">Mí</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Tengo 23 años y soy estudiante de <strong className="text-white">Ingeniería Informática</strong> en la UDC. 
                Me considero una persona tranquila, organizada y reflexiva, con buenas habilidades 
                de comunicación y trabajo en equipo.
              </p>
              <p>
                Antes de la carrera completé un ciclo superior en <strong className="text-white">DAM</strong> y trabajé 
                1 año y 1 mes en <strong>Indra</strong>, lo que me dio experiencia en proyectos reales.
                Actualmente me especializo en <strong className="text-primary">Ingeniería del Software</strong> pues me gusta
                la programación full stack y el trabajo en equipo mediante diferentes metodologías.
              </p>
            </div>
          </div>

          {/* Columna Skills */}
          <div className="bg-bg-soft/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-primary">⚡</span> Herramientas que domino
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-card border border-white/10 rounded-full text-sm text-gray-300 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}