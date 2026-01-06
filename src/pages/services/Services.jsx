import { useState, useRef, useEffect } from 'react';
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
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
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
          bg: "bg-white/5 text-white",
          gradient: "group-hover:bg-white group-hover:text-black"
        };
      case "Social Media Management": 
        return { 
          icon: <Share2 className={iconClass} />, 
          bg: "bg-white/5 text-white",
          gradient: "group-hover:bg-white group-hover:text-black"
        };
      case "Video Editing": 
        return { 
          icon: <Clapperboard className={iconClass} />, 
          bg: "bg-white/5 text-white",
          gradient: "group-hover:bg-white group-hover:text-black"
        };
      case "Graphic Design": 
        return { 
          icon: <PenTool className={iconClass} />, 
          bg: "bg-white/5 text-white",
          gradient: "group-hover:bg-white group-hover:text-black"
        };
      case "Content Writing": 
        return { 
          icon: <FileText className={iconClass} />, 
          bg: "bg-white/5 text-white",
          gradient: "group-hover:bg-white group-hover:text-black"
        };
      case "Digital Marketing": 
        return { 
          icon: <Megaphone className={iconClass} />, 
          bg: "bg-white/5 text-white",
          gradient: "group-hover:bg-white group-hover:text-black"
        };
      case "Android & iOS Development": 
        return { 
          icon: <Smartphone className={iconClass} />, 
          bg: "bg-white/5 text-white",
          gradient: "group-hover:bg-white group-hover:text-black"
        };
      case "Academic Projects": 
        return { 
          icon: <GraduationCap className={iconClass} />, 
          bg: "bg-white/5 text-white",
          gradient: "group-hover:bg-white group-hover:text-black"
        };
      default: 
        return { 
          icon: <Monitor className={iconClass} />, 
          bg: "bg-white/5 text-white",
          gradient: "group-hover:bg-white group-hover:text-black"
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

        {/* All Services Grid */}
        <section id="all-services" className="py-24 px-6 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col  mb-20">
            
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter  uppercase ">
                Our <span className="text-slate-400">Services</span>
              </h2>
              <div className="w-24 h-2 bg-slate-900 mt-8 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicesData.map((service, index) => {
                const iconData = getIcon(service.title);
                return (
                  <Card 
                    key={index} 
                    onClick={() => handleServiceClick(service)}
                    className="group relative border-white/10 hover:border-white transition-all duration-500 shadow-none hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] flex flex-col h-full overflow-hidden cursor-pointer bg-black rounded-[2.5rem]"
                  >
                    <CardHeader className="p-8 pb-4">
                      <div className={`w-20 h-20 ${iconData.bg} ${iconData.gradient} rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm`}>
                        {iconData.icon}
                      </div>
                      <CardTitle className="text-2xl font-black text-white mb-2 leading-tight uppercase tracking-tight group-hover:text-white transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 pt-0 flex flex-col flex-grow">
                      <div className="flex flex-col h-full justify-between">
                        <div className="text-lg font-bold text-white/50 mb-8 flex items-center gap-2">
                          <span className="w-4 h-[1px] bg-white/20"></span>
                          {service.price}
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-[10px] font-black text-white/60 uppercase tracking-[0.2em] bg-white/10 py-2.5 px-4 rounded-xl w-fit group-hover:bg-white group-hover:text-black transition-all">
                            <Clock className="w-3.5 h-3.5" />
                            View Strategy
                          </div>
                          <button
                            onClick={handleGetStartedClick}
                            className="w-full bg-white text-black px-6 py-4 rounded-2xl font-black uppercase tracking-tighter flex items-center justify-center gap-2 hover:bg-slate-200 transition-all active:scale-95 shadow-lg"
                          >
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                    
                    {/* Subtle Number Watermark */}
                    <div className="absolute top-8 right-8 text-6xl font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-colors">
                      0{index + 1}
                    </div>
                  </Card>
                );
              })}
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
