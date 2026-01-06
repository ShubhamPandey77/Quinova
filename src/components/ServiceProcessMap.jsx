import React from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { X, ArrowRight, ArrowDown } from 'lucide-react';

const ServiceProcessMap = ({ service, onClose }) => {
  if (!service || !service.process) return null;

  const iconColors = [
    'text-white', 'text-white/90', 'text-white/80', 'text-white/70', 
    'text-white/60', 'text-white/50', 'text-white/40', 'text-white/30', 'text-white/20'
  ];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4">
      <Motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/98 backdrop-blur-2xl"
        onClick={onClose}
      />
      
      <Motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="relative z-10 w-full max-w-6xl h-fit max-h-[98vh] bg-black border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 shadow-[0_0_100px_rgba(255,255,255,0.03)] flex flex-col overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full z-20"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="mb-4 sm:mb-8 flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-2">
            <span className="text-white/40 font-black uppercase tracking-[0.3em] text-[8px] sm:text-[9px]">Standard Operating Procedure</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white  uppercase tracking-tighter leading-tight">
            {service.title} <span className="text-white/20">Roadmap</span>
          </h2>
        </div>

        {/* 3x3 Symmetrical Grid - Guaranteed One View */}
        <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 overflow-y-auto no-scrollbar py-2">
          {service.process.map((step, idx) => (
            <StepCard 
              key={idx} 
              step={step} 
              iconColor={iconColors[idx]} 
              index={idx} 
              isFinal={idx === service.process.length - 1} 
            />
          ))}
        </div>

        <div className="mt-4 sm:mt-6 pt-4 border-t border-white/5 text-center shrink-0">
          <p className="text-white/20 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.4em]">
            Quinova IT Solutions • Precision Delivery Framework
          </p>
        </div>
      </Motion.div>
    </div>
  );
};

const StepCard = ({ step, iconColor, index, isFinal = false }) => {
  const Icon = LucideIcons[step.icon] || LucideIcons.HelpCircle;
  
  return (
    <Motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.03 }}
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
      className={`relative p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group overflow-hidden flex flex-col justify-center min-h-[100px] sm:min-h-[120px] ${isFinal ? 'bg-gradient-to-br from-white/10 to-transparent border-white/30' : ''}`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors`}>
          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`} />
        </div>
        <div className="text-white/20 text-[10px] sm:text-xs font-black  tabular-nums">{step.step}</div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-xs sm:text-sm lg:text-base font-black text-white uppercase  tracking-tight mb-1 leading-tight group-hover:text-white transition-colors truncate">
          {step.title}
        </h3>
        <p className="text-white/40 text-[8px] sm:text-[9px] font-bold leading-tight uppercase tracking-wider line-clamp-2">
          {step.desc}
        </p>
      </div>

      {/* Subtle Background Number */}
      <div className="absolute -bottom-1 -right-1 text-4xl sm:text-5xl font-black text-white/[0.015]  pointer-events-none group-hover:text-white/[0.04] transition-colors">
        {step.step}
      </div>
    </Motion.div>
  );
};

export default ServiceProcessMap;
