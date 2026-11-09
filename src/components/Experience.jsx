import { motion, MotionConfig } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experience = [
  {
    company: "INDRA",
    role: "Técnico de Software",
    period: "Jun 2022 - Mar 2023",
    desc: "Soporte en Bases de Datos y SLOs. Administración de entornos Linux y desarrollo de scripts de automatización.",
    tags: ["Java", "Python", "Linux", "SQL"],
  },
  {
    company: "INDRA",
    role: "Estudiante en Prácticas",
    period: "Mar 2022 - Jun 2022",
    desc: "Formación intensiva en desarrollo Java y tecnologías web. Participación en metodologías ágiles y trabajo en equipo.",
    tags: ["Java", "HTML/CSS", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="experience" className="relative py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-center gap-3 text-3xl font-bold text-white md:text-4xl"
          >
            <Briefcase className="h-8 w-8 text-primary" />
            Experiencia Laboral
          </motion.h2>

          <div className="relative ml-3 space-y-12 border-l-2 border-white/10 md:ml-6">
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
                <span className="absolute top-2 -left-[9px] h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_rgba(108,240,194,0.5)]"></span>

                <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <span className="mt-1 flex items-center gap-1 text-sm font-medium text-primary sm:mt-0">
                    <Calendar className="h-4 w-4" /> {item.period}
                  </span>
                </div>

                <h4 className="mb-4 text-lg font-medium text-gray-400">{item.company}</h4>
                <p className="mb-4 max-w-2xl leading-relaxed text-gray-300">{item.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
