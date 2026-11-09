import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Github, Linkedin } from "./icons/brand";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      {/* Fondo decorativo sutil */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 text-center">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Hablemos<span className="text-primary">.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para
            ser parte de tus visiones.
          </p>
        </motion.div>

        {/* Grid de Contacto (Tarjetas) */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {/* Email */}
          <motion.a
            href="mailto:icastror02@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex flex-col items-center rounded-2xl border border-white/10 bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="mb-4 rounded-full bg-white/5 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-black">
              <Mail size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Email</h3>
            <p className="text-gray-400 transition-colors group-hover:text-primary">
              icastror02@gmail.com
            </p>
          </motion.a>

          {/* Teléfono */}
          <motion.a
            href="tel:+34684208768"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group flex flex-col items-center rounded-2xl border border-white/10 bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="mb-4 rounded-full bg-white/5 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-black">
              <Phone size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Teléfono</h3>
            <p className="text-gray-400 transition-colors group-hover:text-primary">
              +34 684 20 87 68
            </p>
          </motion.a>

          {/* Ubicación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group flex cursor-default flex-col items-center rounded-2xl border border-white/10 bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="mb-4 rounded-full bg-white/5 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-black">
              <MapPin size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Ubicación</h3>
            <p className="text-gray-400">Arteixo, A Coruña</p>
          </motion.div>
        </div>

        {/* Botones Redes Sociales Grandes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/ivancastroroel"
            target="_blank"
            className="flex items-center gap-3 rounded-full border border-[#0077b5]/20 bg-[#0077b5]/10 px-8 py-4 text-lg font-bold text-[#0077b5] transition-all hover:scale-105 hover:bg-[#0077b5] hover:text-white"
          >
            <Linkedin size={24} /> LinkedIn
          </a>
          <a
            href="https://github.com/ivaaancastro"
            target="_blank"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-white hover:text-black"
          >
            <Github size={24} /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
