import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Trophy,
} from "lucide-react";

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
    setCurrentIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
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
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <span className="text-base font-semibold text-slate-600 tracking-normal">
              SUCCESS STORIES
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Impact On Businesses
          </h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from our recent collaborations across diverse
            industries.
          </p>
        </div>

        <div className="relative group max-w-7xl mx-auto">
          {/* Main Carousel Card */}
          <div className="relative h-[600px] md:h-[400px]">
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
                <div className="bg-white rounded-[1.5rem] border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] overflow-hidden h-full flex flex-col-reverse md:flex-row">
                  {/* Left Side: Content */}
                  <div className="md:w-[40%] p-8 md:p-8 flex flex-col justify-center bg-white mt-8 md:mt-0">
                    <div>
                      {/* <div className="flex items-center gap-2.5 mt-2 mb-4">
                        <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center font-bold text-slate-900 text-sm">
                          {caseStudies[currentIndex].client[0]}
                        </div>
                        <span className="text-slate-500 font-bold tracking-wider uppercase text-[10px]">
                          {caseStudies[currentIndex].client}
                        </span>
                      </div> */}

                      <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                        {caseStudies[currentIndex].title}
                      </h4>

                      <p className="text-slate-600 text-sm leading-relaxed mb-8">
                        {caseStudies[currentIndex].description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {caseStudies[currentIndex].metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                            <span className="text-slate-700 font-medium text-sm">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Website Preview with hover effect */}
                  <div className="w-full md:w-[60%] h-96 md:h-full p-2 bg-slate-50 flex items-center justify-center group/right-side">
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                      {/* Image */}
                      <img
                        src={caseStudies[currentIndex].image}
                        alt={caseStudies[currentIndex].title}
                        className="w-full h-full object-fill transition-all duration-300 group-hover/right-side:opacity-40 group-hover/right-side:scale-105"
                      />

                      {/* Overlay - Only shows on right side hover */}
                      {caseStudies[currentIndex].link && (
                        <div
                          className="absolute inset-0 flex items-center justify-center 
                          opacity-0 group-hover/right-side:opacity-100 
                          transition-all duration-300 bg-gradient-to-br from-slate-900/20 to-slate-900/10"
                        >
                          <motion.a
                            href={caseStudies[currentIndex].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white text-slate-900 
                             px-6 py-3 rounded-xl font-bold text-sm 
                             flex items-center gap-2 shadow-xl hover:shadow-2xl
                             transition-shadow duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Preview
                          </motion.a>
                        </div>
                      )}
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
                style={{ width: index === currentIndex ? "2rem" : "1rem" }}
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