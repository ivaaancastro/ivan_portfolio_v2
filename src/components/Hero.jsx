import { motion, MotionConfig } from "motion/react";

/** @param {{ photo: import("../utils/images").ResponsiveImage }} props */
export default function Hero({ photo }) {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-20"
      >
        {/* Fondo con efecto de luz */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-4xl -translate-x-1/2 opacity-20">
          <div className="absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl"></div>
        </div>

        <div className="relative z-10 grid w-full max-w-[1100px] items-center gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
          {/* Columna de Texto */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="mb-2 block text-sm font-bold tracking-wide text-primary uppercase">
                Diseño · Desarrollo · Soporte
              </span>
              <h1 className="mb-6 text-5xl leading-tight font-bold text-white md:text-7xl">
                Hola, soy <span className="inline-block text-primary">Iván</span>.
                <br />
                <span className="text-4xl text-gray-400 md:text-6xl">Ingeniero Informático</span>
              </h1>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted md:text-xl">
                Especialista en Ingeniería del Software. Me apasiona crear productos útiles,
                accesibles y rápidos.
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
                className="transform rounded-xl bg-white px-8 py-3.5 font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-[0_0_25px_rgba(108,240,194,0.4)]"
              >
                Descargar CV
              </a>
              <a
                href="/#projects"
                className="rounded-xl border border-white/20 px-8 py-3.5 font-medium text-white transition-all duration-300 hover:bg-white/10"
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
            <div className="absolute inset-0 scale-110 transform rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-3xl" />

            <img
              src={photo.src}
              srcSet={photo.srcSet}
              sizes="(min-width: 768px) 320px, 256px"
              width={photo.width}
              height={photo.height}
              fetchPriority="high"
              decoding="async"
              alt="Foto de Iván"
              className="relative z-10 aspect-square w-64 rotate-3 rounded-3xl border-2 border-white/10 bg-bg-soft object-cover shadow-2xl transition-transform duration-500 hover:rotate-0 md:w-80"
            />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
