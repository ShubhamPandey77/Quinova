import { useState, useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Zap, Film, Palette, CheckCircle } from 'lucide-react';
import { Particles } from "@/components/ui/particles";

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block mr-4 last:mr-0 font-inter">
      <span className="absolute opacity-20 text-slate-900">{children}</span>
      <Motion.span style={{ opacity }} className="text-slate-900">
        {children}
      </Motion.span>
    </span>
  );
}

function HeroSection({ navigate, handleGetStartedClick, statsWithIcons }) {
  const [particleColor] = useState("#1660cd");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"]
  });

  const title = "Digital Solutions Designed to Grow Your Business";
  const words = title.split(" ");

  return (
    <section ref={containerRef} className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 border-b border-slate-100 overflow-hidden font-inter">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          className="w-full h-full"
          quantity={80}
          vx={0.2}
          vy={0.5}
          staticity={40}
          size={0.8}
          ease={30}
          color={particleColor}
        />
      </div>

      <div className="max-w-7xl relative z-10 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-7xl font-black leading-none mb-8 tracking-tighter uppercase relative inline-block font-inter">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </h1>
            <Motion.div 
              style={{ width: useTransform(scrollYProgress, [0, 0.8], [0, 150]) }}
              className="h-1.5 bg-slate-900 rounded-full mb-10 md:mb-10 origin-left"
            ></Motion.div>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-medium font-inter">
              With 1+ years of proven expertise, we deliver comprehensive IT solutions—from custom web development to strategic digital marketing—that drive measurable business growth and lasting results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/services')}
                className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleGetStartedClick}
                className="w-full sm:w-auto border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95 cursor-pointer"
              >
                Get Started
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-slate-100">
              {statsWithIcons.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-slate-400 mb-3 group-hover:text-slate-900 transition-colors">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">{stat.number}</div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] md:h-[650px] w-full flex items-start justify-end mt-12 md:-mt-20">
            {/* Connection Lines (Map/Graph Style) */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 500 600" preserveAspectRatio="none">
              <Motion.path 
                d="M250 100 L400 250 L250 400 L400 550" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle cx="250" cy="100" r="5" fill="currentColor" />
              <circle cx="400" cy="250" r="5" fill="currentColor" />
              <circle cx="250" cy="400" r="5" fill="currentColor" />
              <circle cx="400" cy="550" r="5" fill="currentColor" />
            </svg>

            <div className="relative w-full h-full">
              {[
                { icon: <Code className="w-7 h-7" />, title: "Web Development", navigateTo:"/services/website-development" },
                { icon: <Zap className="w-7 h-7" />, title: "Digital Marketing", navigateTo:"/services/digital-marketing" },
                { icon: <Film className="w-7 h-7" />, title: "Video Editing", navigateTo:"/services/video-editing" },
                { icon: <Palette className="w-7 h-7" />, title: "Graphic Design", navigateTo:"/services/graphic-design" },
              ].map((item, index) => {
                const positions = [
                  "top-[15%] left-[50%] md:left-[50%]",
                  "top-[40%] left-[50%] md:left-[80%]",
                  "top-[65%] left-[50%] md:left-[50%]",
                  "top-[90%] left-[50%] md:left-[80%]"
                ];
                return (
                  <Motion.div 
                    key={index} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    onClick={() => item.navigateTo && navigate(item.navigateTo)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 ${positions[index]} bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-2xl transition-all duration-500 flex items-center gap-3 md:gap-4 group hover:scale-105 hover:z-20 hover:border-slate-900 w-64 md:w-72 cursor-pointer`}
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center group-hover:bg-slate-800 transition-colors shadow-lg shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-black text-base md:text-xl text-slate-900 uppercase tracking-tighter leading-none block mb-1">{item.title}</span>
                      <span className="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Validated</span>
                    </div>
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-900 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                  </Motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;