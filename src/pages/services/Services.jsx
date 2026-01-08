import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Globe, Zap, Film, Palette, MessageSquare, TrendingUp, CheckCircle, ArrowRight, Target, Rocket, GraduationCap, BookOpen, Clock, ShieldCheck, Cpu, Layout, Share2, Clapperboard, PenTool, FileText, Megaphone, Monitor, Code, Sparkles } from 'lucide-react';
import { services as servicesData, processSteps, faqs, features } from '../../const';
import FAQSection from '../../components/FAQSection';
import ContactForm from '../../components/ContactForm';
import ServiceProcessMap from '../../components/ServiceProcessMap';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AnimatePresence } from 'framer-motion';

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
    switch (title) {
      case "Website Development": 
        return { 
          icon: <Layout className={iconClass} />, 
          bg: "bg-blue-50 text-blue-600",
          accent: "blue",
          gradient: "from-blue-600 to-indigo-600"
        };
      case "Social Media Management": 
        return { 
          icon: <Share2 className={iconClass} />, 
          bg: "bg-pink-50 text-pink-600",
          accent: "pink",
          gradient: "from-pink-600 to-rose-600"
        };
      case "Video Editing": 
        return { 
          icon: <Clapperboard className={iconClass} />, 
          bg: "bg-purple-50 text-purple-600",
          accent: "purple",
          gradient: "from-purple-600 to-violet-600"
        };
      case "Graphic Design": 
        return { 
          icon: <PenTool className={iconClass} />, 
          bg: "bg-amber-50 text-amber-600",
          accent: "amber",
          gradient: "from-amber-600 to-orange-600"
        };
      case "Content Writing": 
        return { 
          icon: <FileText className={iconClass} />, 
          bg: "bg-emerald-50 text-emerald-600",
          accent: "emerald",
          gradient: "from-emerald-600 to-teal-600"
        };
      case "Digital Marketing": 
        return { 
          icon: <Megaphone className={iconClass} />, 
          bg: "bg-rose-50 text-rose-600",
          accent: "rose",
          gradient: "from-rose-600 to-red-600"
        };
      case "Android & iOS Development": 
        return { 
          icon: <Smartphone className={iconClass} />, 
          bg: "bg-cyan-50 text-cyan-600",
          accent: "cyan",
          gradient: "from-cyan-600 to-blue-600"
        };
      case "Academic Projects": 
        return { 
          icon: <GraduationCap className={iconClass} />, 
          bg: "bg-indigo-50 text-indigo-600",
          accent: "indigo",
          gradient: "from-indigo-600 to-blue-700"
        };
      default: 
        return { 
          icon: <Monitor className={iconClass} />, 
          bg: "bg-slate-50 text-slate-600",
          accent: "slate",
          gradient: "from-slate-600 to-slate-800"
        };
    }
  };

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

  const handleServiceClick = (service) => {
    setSelectedService(service);
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
      <div className="pt-16 bg-white">
        {/* Hero Section */}
        <section ref={containerRef} className="pt-8 pb-24 px-6 bg-slate-50 border-b border-slate-100 overflow-hidden relative font-inter">
          {/* Decorative Background Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="text-left lg:pr-10">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-10 tracking-tighter uppercase relative inline-block font-inter">
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
                <p className="text-2xl text-slate-600 max-w-xl font-medium leading-relaxed font-inter">
                  Transforming vision into digital reality through specialized expertise and precision execution.
                </p>
              </div>

              <div className="relative h-[600px] w-full flex items-center justify-end pr-10">
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
                        className={`absolute -translate-x-1/2 -translate-y-1/2 ${positions[idx]} bg-white p-6 rounded-2xl border border-slate-200 shadow-2xl transition-all duration-500 flex items-center gap-4 group hover:scale-105 hover:z-20 hover:border-slate-900 w-72`}
                      >
                        <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center group-hover:bg-slate-800 transition-colors shadow-lg">
                          <CheckCircle className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="font-black text-xl text-slate-900 uppercase tracking-tighter leading-none block mb-1">{feature.text}</span>
                          <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Validated</span>
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
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                  Our <span className="text-slate-300">Services</span>
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
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                          isSelected ? 'bg-white/10' : 'bg-slate-100'
                        } ${!isSelected && 'group-hover:scale-110 shadow-sm'}`}>
                          <div className={isSelected ? 'text-white' : 'text-slate-600'}>
                            {iconData.icon}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-black uppercase tracking-tight text-lg leading-tight mb-1">
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
                {(() => {
                  const accentColors = {
                    blue: { bg: 'bg-blue-50', text: 'text-blue-600', dot: 'bg-blue-200' },
                    pink: { bg: 'bg-pink-50', text: 'text-pink-600', dot: 'bg-pink-200' },
                    purple: { bg: 'bg-purple-50', text: 'text-purple-600', dot: 'bg-purple-200' },
                    amber: { bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-200' },
                    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-200' },
                    rose: { bg: 'bg-rose-50', text: 'text-rose-600', dot: 'bg-rose-200' },
                    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', dot: 'bg-cyan-200' },
                    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', dot: 'bg-indigo-200' },
                    slate: { bg: 'bg-slate-50', text: 'text-slate-600', dot: 'bg-slate-200' },
                  };
                  const colors = accentColors[getIcon(selectedServiceForDetail?.title).accent] || accentColors.slate;

                  return (
                    <>
                      <div className={`absolute -top-24 -right-24 w-64 h-64 ${colors.bg} rounded-full blur-3xl opacity-60 transition-colors duration-700`}></div>
                      <div className="absolute top-10 right-10 flex gap-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}></div>
                        ))}
                      </div>

                      <AnimatePresence mode="wait">
                        <Motion.div
                          key={selectedServiceForDetail?.title}
                          initial={{ opacity: 0, scale: 0.98, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 1.02, y: -10 }}
                          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                          className="flex flex-col h-full relative z-10"
                        >
                          <div className="flex flex-col gap-8 mb-14">
                            <div className="space-y-6">
                              <div className="flex flex-wrap items-center gap-4">
                                <Motion.div 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 }}
                                  className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} rounded-xl text-[10px] font-black uppercase tracking-[0.25em] ${colors.text}`}
                                >
                                  <Sparkles className="w-3.5 h-3.5" />
                                  Industry Standard
                                </Motion.div>

                                <Motion.button 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.25 }}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleServiceClick(selectedServiceForDetail)}
                                  className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.25em] cursor-pointer shadow-lg hover:bg-slate-800 transition-colors`}
                                >
                                  <Clock className="w-3.5 h-3.5" />
                                  View Strategy
                                </Motion.button>
                              </div>

                              <Motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9] pr-10"
                              >
                                {selectedServiceForDetail?.title}
                              </Motion.h2>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-12 mb-14">
                            <Motion.div 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 }}
                              className="space-y-8"
                            >
                              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-slate-900`}></div>
                                Core Capabilities
                              </h4>
                              <ul className="space-y-5">
                                {selectedServiceForDetail?.features?.slice(0, 5).map((feature, i) => (
                                  <Motion.li 
                                    key={i} 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + (i * 0.1) }}
                                    className="flex items-start gap-4 text-slate-700 font-semibold group/item"
                                  >
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-slate-900 transition-colors shrink-0"></div>
                                    <span className="text-lg leading-tight group-hover/item:text-slate-900 transition-colors">{feature}</span>
                                  </Motion.li>
                                ))}
                              </ul>
                            </Motion.div>

                            <Motion.div 
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 }}
                              className="space-y-8"
                            >
                              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-slate-300`}></div>
                                Business Impact
                              </h4>
                              <ul className="space-y-5">
                                {selectedServiceForDetail?.benefits?.slice(0, 5).map((benefit, i) => (
                                  <Motion.li 
                                    key={i} 
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + (i * 0.1) }}
                                    className="flex items-start gap-4 text-slate-600 font-medium group/item"
                                  >
                                    <ArrowRight className="w-5 h-5 mt-0.5 text-slate-300 group-hover/item:text-slate-900 transition-colors shrink-0" />
                                    <span className="text-lg leading-tight group-hover/item:text-slate-900 transition-colors">{benefit}</span>
                                  </Motion.li>
                                ))}
                              </ul>
                            </Motion.div>
                          </div>

                          <Motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="mt-auto pt-10 border-t border-slate-100 flex flex-col xl:flex-row items-center justify-between gap-10"
                          >
                            <div className="flex flex-col gap-4 max-w-lg">
                              <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                  {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                      {String.fromCharCode(64 + i)}
                                    </div>
                                  ))}
                                </div>
                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Trusted by 50+ partners</p>
                              </div>
                              <p className="text-slate-500 italic font-medium leading-relaxed">
                                "{selectedServiceForDetail?.longDescription?.slice(0, 160)}..."
                              </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
                              <Motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleGetStartedClick}
                                className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-tighter flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-2xl relative overflow-hidden group/btn"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                                <span className="relative z-10">Get Started</span>
                                <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                              </Motion.button>
                              
                              <Motion.button 
                                whileHover={{ scale: 1.02, backgroundColor: '#f8fafc' }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate(getServicePath(selectedServiceForDetail?.title))}
                                className="bg-white text-slate-900 border-2 border-slate-900 px-10 py-5 rounded-[2rem] font-black uppercase tracking-tighter flex items-center justify-center gap-3 transition-all cursor-pointer"
                              >
                                View Detail
                              </Motion.button>
                            </div>
                          </Motion.div>

                          {/* Watermark */}
                          <Motion.div 
                            key={`watermark-${selectedServiceForDetail?.title}`}
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 0.03, scale: 1, rotate: 0 }}
                            className="absolute -bottom-20 -right-20 text-[25rem] font-black text-slate-900 pointer-events-none z-0 select-none leading-none"
                          >
                            {servicesData.indexOf(selectedServiceForDetail) + 1}
                          </Motion.div>
                        </Motion.div>
                      </AnimatePresence>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-4 block">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Our Process
              </h2>
              <div className="w-20 h-1 bg-slate-900 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-12">
              {processStepsWithIcons.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl w-16 h-16 flex items-center justify-center text-xl font-bold shadow-sm mb-6 z-10">
                    {step.step}
                  </div>
                  <div className="mb-4 text-slate-400">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-light">
                    {step.desc}
                  </p>
                  {index < processStepsWithIcons.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-slate-200 -z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} handleGetStartedClick={handleGetStartedClick} />
      </div>

      {/* Service Roadmap Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceProcessMap 
            service={selectedService} 
            onClose={handleCloseMap} 
          />
        )}
      </AnimatePresence>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <Motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={handleCloseForm}
            ></Motion.div>
            <Motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-50"
            >
              <ContactForm 
                onClose={handleCloseForm}
                defaultService=""
                showCloseButton={true}
                compact={false}
              />
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Services;
