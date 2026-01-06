import { useState, useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Zap, Film, Palette } from 'lucide-react';
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
            <h1 className="text-5xl md:text-7xl font-black leading-none mb-8 tracking-tighter uppercase relative inline-block font-inter">
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
              className="h-1.5 bg-slate-900 rounded-full mb-10 origin-left"
            ></Motion.div>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium font-inter">
              With 1+ years of proven expertise, we deliver comprehensive IT solutions—from custom web development to strategic digital marketing—that drive measurable business growth and lasting results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/services')}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleGetStartedClick}
                className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95 cursor-pointer"
              >
                Get Started
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-100">
              {statsWithIcons.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-slate-400 mb-3 group-hover:text-slate-900 transition-colors">{stat.icon}</div>
                  <div className="text-3xl font-black text-slate-900 tracking-tighter">{stat.number}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Code className="w-6 h-6" />, title: "Web Development", navigateTo:"/services" },
                { icon: <Zap className="w-6 h-6" />, title: "Digital Marketing", navigateTo:"/services" },
                { icon: <Film className="w-6 h-6" />, title: "Video Editing", navigateTo:"/services" },
                { icon: <Palette className="w-6 h-6" />, title: "Graphic Design", navigateTo:"/services" },
              ].map((item, index) => (
                <div key={index} onClick={() => item.navigateTo && navigate(item.navigateTo)} className="bg-black border border-white/10 rounded-2xl p-8 text-center hover:border-white/30 transition-all duration-500 cursor-pointer group">
                  <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <div className="text-sm font-black text-white uppercase tracking-wider">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;