import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10 text-center">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hablemos<span className="text-primary">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
          </p>
        </motion.div>

        {/* Grid de Contacto (Tarjetas) */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Email */}
          <motion.a 
            href="mailto:icastror02@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-8 bg-card border border-white/10 rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center"
          >
            <div className="p-4 bg-white/5 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 group-hover:text-primary transition-colors">icastror02@gmail.com</p>
          </motion.a>

          {/* Teléfono */}
          <motion.a 
            href="tel:+34684208768"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group p-8 bg-card border border-white/10 rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center"
          >
            <div className="p-4 bg-white/5 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Teléfono</h3>
            <p className="text-gray-400 group-hover:text-primary transition-colors">+34 684 20 87 68</p>
          </motion.a>

          {/* Ubicación */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group p-8 bg-card border border-white/10 rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center cursor-default"
          >
            <div className="p-4 bg-white/5 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ubicación</h3>
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
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20 hover:bg-[#0077b5] hover:text-white transition-all font-bold text-lg hover:scale-105"
          >
            <Linkedin size={24} /> LinkedIn
          </a>
          <a 
            href="https://github.com/ivaaancastro" 
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black transition-all font-bold text-lg hover:scale-105"
          >
            <Github size={24} /> GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}