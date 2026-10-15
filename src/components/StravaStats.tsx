import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Bike, Activity } from 'lucide-react';

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
    <div className="w-full relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-card to-gray-900 p-8 md:p-10 group">
      {/* Brillos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none -z-10 group-hover:bg-orange-500/20 transition-colors duration-700"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FC4C02]/10 blur-[100px] rounded-full pointer-events-none -z-10 group-hover:bg-[#FC4C02]/20 transition-colors duration-700"></div>

      {/* Cabecera */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm">
          <Activity size={16} className="text-[#FC4C02]" />
          <span className="text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase">Resumen {currentYear}</span>
        </div>
        <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Strava</span>
      </div>

      {/* Banda de 3 métricas */}
      <div className="grid grid-cols-3 gap-3 md:gap-6 relative z-10 md:divide-x md:divide-white/5">

        {/* Distancia total */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pr-0 md:pr-6"
        >
          <p className="text-gray-400 text-[9px] md:text-xs uppercase tracking-widest mb-3">Distancia total</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl md:text-5xl font-bold text-white tracking-tight">{displayTotalKms}</span>
            <span className="text-base md:text-xl text-gray-500">km</span>
          </div>
          <p className="text-gray-500 text-[10px] md:text-xs mt-3 hidden md:block">Run + Ride</p>
        </motion.div>

        {/* Running */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="px-0 md:px-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
              <Trophy size={14} className="md:hidden" />
              <Trophy size={16} className="hidden md:block" />
            </span>
            <p className="text-gray-400 text-[9px] md:text-xs uppercase tracking-widest">Running</p>
          </div>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-xl md:text-3xl font-bold text-white tracking-tight">{displayRunKms}</span>
            <span className="text-xs md:text-base text-gray-500">km</span>
          </div>
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: runKms && totalKms ? `${(runKms / totalKms) * 100}%` : "50%" }}
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
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#FC4C02]/20 flex items-center justify-center text-[#FC4C02] border border-[#FC4C02]/30">
              <Bike size={14} className="md:hidden" />
              <Bike size={16} className="hidden md:block" />
            </span>
            <p className="text-gray-400 text-[9px] md:text-xs uppercase tracking-widest">Ciclismo</p>
          </div>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-xl md:text-3xl font-bold text-white tracking-tight">{displayRideKms}</span>
            <span className="text-xs md:text-base text-gray-500">km</span>
          </div>
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FC4C02] to-orange-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: rideKms && totalKms ? `${(rideKms / totalKms) * 100}%` : "50%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
