import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Globe, Zap, Film, Palette, MessageSquare, TrendingUp, CheckCircle, ArrowRight, Target, Rocket, GraduationCap, BookOpen, Clock, ShieldCheck, Cpu, Layout, Share2, Clapperboard, PenTool, FileText, Megaphone, Monitor, Code, Sparkles, X } from 'lucide-react';
import { services as servicesData, processSteps, faqs, features } from '../../const';
import FAQSection from '../../components/FAQSection';
import ContactForm from '../../components/ContactForm';
import ServiceProcessMap from '../../components/ServiceProcessMap';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block mr-4 last:mr-0 font-sans">
      <span className="absolute opacity-20 text-slate-900">{children}</span>
      <Motion.span style={{ opacity }} className="text-slate-900">
        {children}
      </Motion.span>
    </span>
  );
}

function Services() {
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState(servicesData[0]);
  const observerRefs = useRef([]);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"]
  });

  const title = "Professional IT Solutions";
  const words = title.split(" ");

  const getIcon = (title) => {
    const iconClass = "w-8 h-8 transition-transform duration-500 group-hover:scale-110";
    const baseStyle = { 
      bg: "bg-slate-50 text-slate-600",
      accent: "slate",
      gradient: "from-slate-600 to-slate-900"
    };

    switch (title) {
      case "Website Development": 
        return { ...baseStyle, icon: <Layout className={iconClass} /> };
      case "Social Media Management": 
        return { ...baseStyle, icon: <Share2 className={iconClass} /> };
      case "Video Editing": 
        return { ...baseStyle, icon: <Clapperboard className={iconClass} /> };
      case "Graphic Design": 
        return { ...baseStyle, icon: <PenTool className={iconClass} /> };
      case "Content Writing": 
        return { ...baseStyle, icon: <FileText className={iconClass} /> };
      case "Digital Marketing": 
        return { ...baseStyle, icon: <Megaphone className={iconClass} /> };
      case "Android & iOS Development": 
        return { ...baseStyle, icon: <Smartphone className={iconClass} /> };
      case "Academic Projects": 
        return { ...baseStyle, icon: <GraduationCap className={iconClass} /> };
      default: 
        return { ...baseStyle, icon: <Monitor className={iconClass} /> };
    }
  };

  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showContactForm]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // isVisible logic if needed
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleGetStartedClick = (e) => {
    e.stopPropagation();
    setShowContactForm(true);
  };


  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  const handleCloseMap = () => {
    setSelectedService(null);
  };

  const getServicePath = (title) => {
    switch (title) {
      case "Website Development": return "/services/website-development";
      case "Social Media Management": return "/services/social-media-management";
      case "Video Editing": return "/services/video-editing";
      case "Graphic Design": return "/services/graphic-design";
      case "Content Writing": return "/services/content-writing";
      case "Digital Marketing": return "/services/digital-marketing";
      case "Android & iOS Development": return "/services/app-development";
      case "Academic Projects": return "/services/academic-projects";
      default: return "/services";
    }
  };

  const processStepsWithIcons = processSteps.map((step, index) => ({
    ...step,
    icon: [<Target className="w-6 h-6" />, <Zap className="w-6 h-6" />, <Rocket className="w-6 h-6" />, <CheckCircle className="w-6 h-6" />][index]
  }));

  return (
    <>
      <div className="pt-16 bg-white font-sans">
        {/* Hero Section */}
        <section ref={containerRef} className="pt-8 pb-16 sm:pb-16 px-4 sm:px-6 bg-slate-50 border-b border-slate-100 overflow-hidden relative font-inter">
          {/* Decorative Background Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="text-left lg:pr-10">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 sm:mb-10 tracking-tight uppercase relative inline-block font-inter mt-10 sm:mt-0">
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
                  style={{ width: useTransform(scrollYProgress, [0, 0.8], [0, 250]) }}
                  className="h-2.5 bg-slate-900 rounded-full mb-12 origin-left"
                ></Motion.div>
                <p className="text-2xl text-slate-600 max-w-xl font-medium leading-relaxed italic">
                  Transforming vision into digital reality through specialized expertise and precision execution.
                </p>
              </div>

              <div className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full flex items-center justify-center lg:justify-end md:pr-10 mt-2 lg:mt-0">
                {/* Connection Lines (Map/Graph Style) */}
                <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 500 600" preserveAspectRatio="none">
                  <Motion.path 
                    d="M300 150 L425 300 L300 450" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <circle cx="300" cy="150" r="5" fill="currentColor" />
                  <circle cx="425" cy="300" r="5" fill="currentColor" />
                  <circle cx="300" cy="450" r="5" fill="currentColor" />
                </svg>

                <div className="relative w-full h-full">
                  {features.map((feature, idx) => {
                    const positions = [
                      "top-[25%] left-[60%]",
                      "top-[50%] left-[85%]",
                      "top-[75%] left-[60%]"
                    ];
                    return (
                      <Motion.div 
                        key={idx} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.2 }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 ${positions[idx]} bg-white p-4 md:p-5 rounded-2xl border border-slate-200 shadow-2xl transition-all duration-500 flex items-center gap-3 md:gap-4 group hover:scale-105 hover:z-20 hover:border-slate-900 w-[240px] sm:w-64 md:w-72`}
                      >
                        <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center group-hover:bg-slate-800 transition-colors shadow-lg">
                          <CheckCircle className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="font-black text-sm sm:text-base md:text-xl text-slate-900 uppercase tracking-tight leading-none block mb-1">{feature.text}</span>
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

        {/* All Services Split View */}
        <section id="all-services" className="py-24 px-6 bg-white relative overflow-hidden">
          {/* Background Abstract Shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
            <Motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 -left-20 w-96 h-96 bg-slate-100 rounded-full blur-3xl"
            />
            <Motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -120, 0],
                x: [0, -60, 0],
                y: [0, 40, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-slate-50 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col mb-16">
              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-normal uppercase leading-none">
                  Our <span className="text-slate-300"> Services</span>
                </h2>
                <Motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-2 bg-slate-900 mt-8 rounded-full"
                ></Motion.div>
              </Motion.div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 bg-white/40 backdrop-blur-md p-4 md:p-10 rounded-[4rem] border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] min-h-[750px]">
              {/* Left Sidebar - Service List */}
              <div className="w-full lg:w-[35%] space-y-4 overflow-y-auto pr-3 max-h-[750px] custom-scrollbar py-2">
                {servicesData.map((service, index) => {
                  const iconData = getIcon(service.title);
                  const isSelected = selectedServiceForDetail?.title === service.title;
                  
                  return (
                    <Motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedServiceForDetail(service)}
                      className="relative group cursor-pointer"
                    >
                      {isSelected && (
                        <Motion.div 
                          layoutId="active-pill"
                          className="absolute inset-0 bg-slate-900 rounded-[2rem] shadow-xl"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      
                      <div className={`relative z-10 p-6 rounded-[2rem] transition-all duration-300 flex items-center gap-5 ${
                        isSelected 
                          ? 'text-white' 
                          : 'bg-white/50 hover:bg-white text-slate-900 border border-transparent hover:border-slate-100 hover:shadow-lg'
                      }`}>
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 transition-all duration-400 ${
                          isSelected ? 'bg-white/10' : 'bg-slate-100'
                        } ${!isSelected && 'group-hover:scale-110 shadow-sm'}`}>
                          <div className={isSelected ? 'text-white' : 'text-slate-600'}>
                            {iconData.icon}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-black uppercase tracking-normal text-xs sm:text-sm md:text-lg leading-tight mb-0.5 sm:mb-1">
                            {service.title}
                          </h3>
                        </div>
                        <div className={`transition-all duration-500 ${isSelected ? 'rotate-0 scale-110' : '-rotate-45 opacity-0 group-hover:opacity-100 group-hover:scale-100'}`}>
                          <ArrowRight className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-slate-300'}`} />
                        </div>
                      </div>
                    </Motion.div>
                  );
                })}
              </div>

              {/* Right Panel - Service Detail */}
              <div className="w-full lg:w-[65%] bg-slate-50 rounded-[3.5rem] p-8 md:p-14 shadow-2xl border border-white flex flex-col relative overflow-hidden group/detail">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-200/20 rounded-full blur-3xl -ml-24 -mb-24"></div>

                <AnimatePresence mode="wait">
                  <Motion.div 
                    key={selectedServiceForDetail.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 flex flex-col h-full"
                  >
                    {(() => {
                      const colors = getIcon(selectedServiceForDetail.title);
                      return (
                        <>
                          <div className="flex flex-col gap-6 sm:gap-8 mb-10 sm:mb-14">
                            <div className="space-y-4 sm:space-y-6">
                              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                <Motion.div 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 }}
                                  className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 ${colors.bg} rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${colors.text || 'text-slate-900'}`}
                                >
                                  <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                                  Industry Standard
                                </Motion.div>

                                <Motion.button 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.25 }}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => setSelectedService(selectedServiceForDetail)}
                                  className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900 text-white rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest cursor-pointer shadow-lg hover:bg-slate-800 transition-colors`}
                                >
                                  <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                                  View Strategy
                                </Motion.button>
                              </div>

                              <Motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tight leading-[0.9] pr-0 sm:pr-10"
                              >
                                {selectedServiceForDetail?.title}
                              </Motion.h2>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-14">
                            <Motion.div 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 }}
                              className="space-y-6 sm:space-y-8"
                            >
                              <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-slate-900`}></div>
                                Core Capabilities
                              </h4>
                              <ul className="space-y-4 sm:space-y-5">
                                {selectedServiceForDetail?.features?.slice(0, 5).map((feature, i) => (
                                  <Motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + (i * 0.1) }}
                                    className="flex items-start gap-3 sm:gap-4 text-slate-700 font-semibold group/item"
                                  >
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-slate-900 transition-colors shrink-0"></div>
                                    <span className="text-base sm:text-lg leading-tight group-hover/item:text-slate-900 transition-colors">{feature}</span>
                                  </Motion.li>
                                ))}
                              </ul>
                            </Motion.div>

                            <Motion.div 
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 }}
                              className="space-y-6 sm:space-y-8"
                            >
                              <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-slate-300`}></div>
                                Business Impact
                              </h4>
                              <ul className="space-y-4 sm:space-y-5">
                                {selectedServiceForDetail?.benefits?.slice(0, 5).map((benefit, i) => (
                                  <Motion.li 
                                    key={i} 
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + (i * 0.1) }}
                                    className="flex items-start gap-3 sm:gap-4 text-slate-600 font-medium group/item"
                                  >
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-slate-300 group-hover/item:text-slate-900 transition-colors shrink-0" />
                                    <span className="text-base sm:text-lg leading-tight group-hover/item:text-slate-900 transition-colors">{benefit}</span>
                                  </Motion.li>
                                ))}
                              </ul>
                            </Motion.div>
                          </div>
                        </>
                      );
                    })()}

                    <div className="mt-auto flex flex-wrap gap-4">
                      <button 
                        onClick={() => navigate(getServicePath(selectedServiceForDetail.title))}
                        className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition-all hover:scale-105 shadow-xl flex items-center gap-3 group/btn"
                      >
                        Explore Service
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      <button 
                        onClick={() => setSelectedService(selectedServiceForDetail)}
                        className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all shadow-lg flex items-center gap-2"
                      >
                        <Zap className="w-4 h-4" />
                        View Roadmap
                      </button>
                      <button 
                        onClick={handleGetStartedClick}
                        className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all shadow-lg"
                      >
                        Quick Quote
                      </button>
                    </div>
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 sm:mb-20">
               <div className="inline-flex items-center gap-3 mb-4">
                                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                                <span className="text-[12px] sm:text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">OUR APPROACH</span>
                                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                            </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Our Process
              </h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl italic">
                A streamlined, data-driven methodology that ensures project success from conception to deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processStepsWithIcons.map((step, index) => (
                <Motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-300 mb-4 block">Phase 0{index + 1}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-4 italic">{step.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed italic">{step.description}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Service Map Overlay */}
        <AnimatePresence>
          {selectedService && (
            <ServiceProcessMap 
              service={selectedService} 
              onClose={handleCloseMap} 
            />
          )}
        </AnimatePresence>

        {/* FAQs */}
        <FAQSection faqs={faqs} />

        {/* CTA */}
        <section className="py-32 px-6 bg-slate-900 text-white text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10 space-y-12">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
              Ready to <br /> <span className="text-white/20">Dominate?</span>
            </h2>
            <p className="text-2xl text-white/60 font-medium italic">
              Experience the Quinova edge. Let's build something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={handleGetStartedClick}
                className="bg-white text-slate-900 px-12 py-6 rounded-[2.5rem] font-black uppercase tracking-widest text-lg hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl flex items-center gap-4 group"
              >
                Get Started
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form Modal */}
        <AnimatePresence>
          {showContactForm && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <Motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseForm}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />
              <Motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl custom-scrollbar"
              >
                <ContactForm onClose={handleCloseForm} />
              </Motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}

export default Services;
