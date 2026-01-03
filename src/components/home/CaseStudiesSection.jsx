import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Trophy } from 'lucide-react';

function CaseStudiesSection({ caseStudies }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-16 px-6 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-emerald-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold tracking-wide mb-4 border border-emerald-100"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </motion.div> */}
           <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <span className="text-base font-semibold text-slate-600 tracking-normal">
              SUCCESS STORIES
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Impact in <span className="text-emerald-600">Numbers</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 leading-relaxed"
          >
            Real results from our recent collaborations across diverse industries.
          </motion.p>
        </div>

        <div className="relative group max-w-5xl mx-auto">
          {/* Main Carousel Card */}
          <div className="relative min-h-[500px] md:min-h-[420px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 32 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-[1.5rem] border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] overflow-hidden h-full flex flex-col md:flex-row">
                  {/* Left Side: Result & Metric Visual */}
                  <div className="md:w-[40%] bg-slate-50 p-8 md:p-10 flex flex-col justify-center border-r border-slate-100 relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none overflow-hidden select-none">
                      <div className="text-[15rem] font-black translate-x-6 translate-y-6">
                        {caseStudies[currentIndex].client[0]}
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-2.5 mb-6">
                        <div className="w-8 h-8 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center font-bold text-slate-900 text-sm">
                          {caseStudies[currentIndex].client[0]}
                        </div>
                        <span className="text-slate-500 font-bold tracking-wider uppercase text-[10px]">
                          {caseStudies[currentIndex].client}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                        {caseStudies[currentIndex].result}
                      </h3>
                      
                      <div className="space-y-4">
                        {caseStudies[currentIndex].metrics.slice(0, 3).map((metric, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                            <span className="text-slate-700 font-medium text-base">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Details & CTA */}
                  <div className="md:w-[60%] p-8 md:p-10 flex flex-col justify-center bg-white">
                    <div className="max-w-lg">
                      <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
                        <Sparkles className="w-3 h-3" />
                        <span>Case Study</span>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-4">{caseStudies[currentIndex].title}</h4>
                      <p className="text-slate-600 text-base leading-relaxed mb-8">
                        {caseStudies[currentIndex].description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 items-center">
                        {caseStudies[currentIndex].link && (
                          <a 
                            href={caseStudies[currentIndex].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-lg shadow-slate-900/10"
                          >
                            Live Preview
                            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                          </a>
                        )}
                        <button className="text-slate-900 font-bold px-4 py-3 rounded-xl text-sm hover:bg-slate-50 transition-all flex items-center gap-2 group">
                          Analysis
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Improved Control Buttons - More Compact */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-20">
            <button 
              onClick={prevSlide}
              className="p-3.5 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-emerald-600 hover:border-emerald-100 hover:shadow-lg transition-all active:scale-90"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-20">
            <button 
              onClick={nextSlide}
              className="p-3.5 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-emerald-600 hover:border-emerald-100 hover:shadow-lg transition-all active:scale-90"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pagination / Progress - More Minimal */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <div className="flex items-center gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="relative h-1 transition-all duration-500 rounded-full bg-slate-100 overflow-hidden"
                style={{ width: index === currentIndex ? '2rem' : '1rem' }}
              >
                {index === currentIndex && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-emerald-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
