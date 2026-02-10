import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
      
      {/* Fondo con efecto de luz (opcional, para reforzar el layout) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-x-1/2"></div>
      </div>

      <div className="max-w-[1100px] w-full px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">
        
        {/* Columna de Texto */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-primary font-bold tracking-wide uppercase text-sm mb-2 block">
              Diseño · Desarrollo · Soporte
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Hola, soy <span className="text-primary inline-block">Iván</span>.
              <br />
              <span className="text-gray-400 text-4xl md:text-6xl">Ingeniero Informático</span>
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Especialista en Ingeniería del Software. Me apasiona crear productos 
              útiles, accesibles y rápidos.
            </p>
          </motion.div>

          {/* Botones */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="/ivanCv.pdf" 
              download="Ivan_CV.pdf"
              className="px-8 py-3.5 rounded-xl bg-white text-black font-bold hover:bg-primary transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(108,240,194,0.4)]"
            >
              Descargar CV
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300"
            >
              Ver proyectos
            </a>
          </motion.div>
        </div>

        {/* Columna de Imagen */}
        <motion.div 
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          {/* Círculo decorativo detrás de la foto */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full transform scale-110" />
          
          <img
            src="/img/ivan-foto.jpg" 
            alt="Foto de Iván"
            className="relative w-64 md:w-80 aspect-square object-cover rounded-3xl shadow-2xl border-2 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500 z-10 bg-bg-soft"
          />
        </motion.div>

      </div>
    </section>
  );
}