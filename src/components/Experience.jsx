import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experience = [
  {
    company: "INDRA",
    role: "Técnico de Software",
    period: "Jun 2022 - Mar 2023",
    desc: "Soporte en Bases de Datos y SLOs. Administración de entornos Linux y desarrollo de scripts de automatización.",
    tags: ["Java", "Python", "Linux", "SQL"]
  },
  {
    company: "INDRA",
    role: "Estudiante en Prácticas",
    period: "Mar 2022 - Jun 2022",
    desc: "Formación intensiva en desarrollo Java y tecnologías web. Participación en metodologías ágiles y trabajo en equipo.",
    tags: ["Java", "HTML/CSS", "JavaScript"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-white flex items-center gap-3"
        >
          <Briefcase className="text-primary w-8 h-8" /> 
          Experiencia Laboral
        </motion.h2>

        <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12">
          {experience.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Punto de la línea de tiempo */}
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(108,240,194,0.5)]"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <span className="text-sm font-medium text-primary flex items-center gap-1 mt-1 sm:mt-0">
                  <Calendar className="w-4 h-4" /> {item.period}
                </span>
              </div>
              
              <h4 className="text-lg text-gray-400 mb-4 font-medium">{item.company}</h4>
              <p className="text-gray-300 mb-4 leading-relaxed max-w-2xl">
                {item.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-muted border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}