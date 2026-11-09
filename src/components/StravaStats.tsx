import { motion, MotionConfig } from "motion/react";
import { Trophy, Bike, Activity } from "lucide-react";

interface StravaStatsProps {
  runDistance: number;
  rideDistance: number;
}

export default function StravaStats({ runDistance, rideDistance }: StravaStatsProps) {
  // Convertir metros a kilómetros
  const runKms = Math.round(runDistance / 1000);
  const rideKms = Math.round(rideDistance / 1000);
  const totalKms = runKms + rideKms;

  const currentYear = new Date().getFullYear();

  const fmt = (n: number) => (isNaN(n) || n === 0 ? "..." : n.toLocaleString("es-ES"));
  const displayRunKms = fmt(runKms);
  const displayRideKms = fmt(rideKms);
  const displayTotalKms = fmt(totalKms);

  return (
    <MotionConfig reducedMotion="user">
      <div className="group relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-card to-gray-900 p-8 shadow-2xl md:p-10">
        {/* Brillos de fondo */}
        <div className="pointer-events-none absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-orange-500/10 blur-[100px] transition-colors duration-700 group-hover:bg-orange-500/20"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-[#FC4C02]/10 blur-[100px] transition-colors duration-700 group-hover:bg-[#FC4C02]/20"></div>

        {/* Cabecera */}
        <div className="relative z-10 mb-8 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-sm">
            <Activity size={16} className="text-[#FC4C02]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase">
              Resumen {currentYear}
            </span>
          </div>
          <span className="text-[10px] tracking-widest text-gray-500 uppercase md:text-xs">
            Strava
          </span>
        </div>

        {/* Banda de 3 métricas */}
        <div className="relative z-10 grid grid-cols-3 gap-3 md:gap-6 md:divide-x md:divide-white/5">
          {/* Distancia total */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pr-0 md:pr-6"
          >
            <p className="mb-3 text-[9px] tracking-widest text-gray-400 uppercase md:text-xs">
              Distancia total
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                {displayTotalKms}
              </span>
              <span className="text-base text-gray-500 md:text-xl">km</span>
            </div>
            <p className="mt-3 hidden text-[10px] text-gray-500 md:block md:text-xs">Run + Ride</p>
          </motion.div>

          {/* Running */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="px-0 md:px-6"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20 text-orange-400 md:h-8 md:w-8">
                <Trophy size={14} className="md:hidden" />
                <Trophy size={16} className="hidden md:block" />
              </span>
              <p className="text-[9px] tracking-widest text-gray-400 uppercase md:text-xs">
                Running
              </p>
            </div>
            <div className="mb-3 flex items-baseline gap-1">
              <span className="text-xl font-bold tracking-tight text-white md:text-3xl">
                {displayRunKms}
              </span>
              <span className="text-xs text-gray-500 md:text-base">km</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400"
                initial={{ width: 0 }}
                whileInView={{
                  width: runKms && totalKms ? `${(runKms / totalKms) * 100}%` : "50%",
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Ciclismo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="pl-0 md:pl-6"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#FC4C02]/30 bg-[#FC4C02]/20 text-[#FC4C02] md:h-8 md:w-8">
                <Bike size={14} className="md:hidden" />
                <Bike size={16} className="hidden md:block" />
              </span>
              <p className="text-[9px] tracking-widest text-gray-400 uppercase md:text-xs">
                Ciclismo
              </p>
            </div>
            <div className="mb-3 flex items-baseline gap-1">
              <span className="text-xl font-bold tracking-tight text-white md:text-3xl">
                {displayRideKms}
              </span>
              <span className="text-xs text-gray-500 md:text-base">km</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#FC4C02] to-orange-500"
                initial={{ width: 0 }}
                whileInView={{
                  width: rideKms && totalKms ? `${(rideKms / totalKms) * 100}%` : "50%",
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}
