import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Bike, Activity } from 'lucide-react';

interface StravaStatsProps {
  runDistance: number;
  rideDistance: number;
}

export default function StravaStats({ runDistance, rideDistance }: StravaStatsProps) {
  // Convert meters to kilometers and format to 0 decimal places
  const runKms = Math.round(runDistance / 1000);
  const rideKms = Math.round(rideDistance / 1000);
  const totalKms = runKms + rideKms;

  const currentYear = new Date().getFullYear();

  // If no data, show a skeleton or nice placeholders
  const displayRunKms = isNaN(runKms) || runKms === 0 ? "..." : runKms;
  const displayRideKms = isNaN(rideKms) || rideKms === 0 ? "..." : rideKms;
  const displayTotalKms = isNaN(totalKms) || totalKms === 0 ? "..." : totalKms;

  return (
    <div className="w-full relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-card to-gray-900 p-6 md:p-8 mb-8 group">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none -z-10 group-hover:bg-orange-500/20 transition-colors duration-700"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FC4C02]/10 blur-[100px] rounded-full pointer-events-none -z-10 group-hover:bg-[#FC4C02]/20 transition-colors duration-700"></div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
        
        {/* Left Side: Total Year Focus */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm">
            <Activity size={16} className="text-[#FC4C02]" />
            <span className="text-sm font-semibold tracking-wide text-gray-300 uppercase">Resumen {currentYear}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {displayTotalKms}
            </motion.span>
            <span className="text-2xl md:text-3xl text-gray-500 ml-2">km</span>
          </h3>
          <p className="text-gray-400 text-base font-medium">Distancia total recorrida</p>
        </div>

        {/* Right Side: Breakdown bars */}
        <div className="flex-1 w-full flex flex-col gap-6">
          
          {/* Running Stats */}
          <div className="relative">
            <div className="flex justify-between items-end mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
                  <Trophy size={20} />
                </div>
                <span className="text-white font-semibold text-base">Running</span>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-white">{displayRunKms}</span>
                <span className="text-gray-500 ml-1 text-sm">km</span>
              </div>
            </div>
            {/* Progress Bar Background */}
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: runKms && totalKms ? `${(runKms / totalKms) * 100}%` : '50%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Cycling Stats */}
          <div className="relative mt-2">
            <div className="flex justify-between items-end mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FC4C02]/20 flex items-center justify-center text-[#FC4C02] border border-[#FC4C02]/30">
                  <Bike size={20} />
                </div>
                <span className="text-white font-semibold text-base">Ciclismo</span>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-white">{displayRideKms}</span>
                <span className="text-gray-500 ml-1 text-sm">km</span>
              </div>
            </div>
            {/* Progress Bar Background */}
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#FC4C02] to-orange-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: rideKms && totalKms ? `${(rideKms / totalKms) * 100}%` : '50%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
