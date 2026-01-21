import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, ArrowRight, CheckCircle, Zap, Shield, 
  Target, Rocket, Clock, Heart, Plus, Minus
} from 'lucide-react';
import ContactForm from './ContactForm';
import BeforeAfterComparison from './BeforeAfterComparison';

const ServiceDetailLayout = ({ service, icon:  extraSections }) => {
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-20">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <button
          onClick={() => navigate('/services')}
          className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <div className="p-2 rounded-full group-hover:bg-slate-100 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium tracking-wide uppercase">Back to Services</span>
        </button>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <section className="relative px-6 py-12 md:py-20 overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-60"></div>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Premium Service
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] uppercase italic">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? 'text-slate-300 block' : 'block'}>
                    {word}
                  </span>
                ))}
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-lg font-medium">
                {service.longDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all hover:scale-105 flex items-center gap-3 group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="relative w-[500px] h-[500px] bg-slate-50 rounded-[4rem] flex items-center justify-center border border-slate-100 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden group">
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <Icon className="w-48 h-48 text-slate-900 opacity-20 absolute" strokeWidth={1} />
                    <Icon className="w-40 h-40 text-slate-900 relative z-10" strokeWidth={1.5} />
                  </>
                )}
                
                {/* Floating tags */}
                <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
                  <Zap className="w-6 h-6 text-slate-900" />
                </div>
                <div className="absolute bottom-20 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '4s' }}>
                  <Heart className="w-6 h-6 text-slate-900" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-6 border-y border-slate-100 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Success Rate', value: '98%', icon: Shield },
                { label: 'Happy Clients', value: '10+', icon: Heart },
                { label: 'Projects Done', value: '100+', icon: Zap },
                { label: 'Expert Team', value: '24/7', icon: Clock }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-2">
                  <stat.icon className="w-5 h-5 text-slate-400" />
                  <span className="text-3xl font-black uppercase tracking-tighter">{stat.value}</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        {service.beforeAfter && (
          <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">The Transformation</h2>
                <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
              </div>
              <BeforeAfterComparison 
                beforeData={service.beforeAfter.before} 
                afterData={service.beforeAfter.after} 
              />
            </div>
          </section>
        )}

        {/* Features & Benefits */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Key Capabilities</h3>
                  <p className="text-slate-500 font-medium italic">Mastering every detail to ensure excellence.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors">
                        <Plus className="w-5 h-5 text-slate-400 group-hover:text-white" />
                      </div>
                      <span className="font-bold text-slate-900 uppercase tracking-tight leading-tight">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Business Impact</h3>
                  <p className="text-slate-500 font-medium italic">Real value delivered to your bottom line.</p>
                </div>
                <div className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-5 h-5 text-slate-900" />
                      </div>
                      <span className="font-bold text-slate-700 uppercase tracking-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        {service.process && (
          <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                    Simple <br /> <span className="text-slate-200">Execution.</span>
                  </h2>
                  <p className="text-slate-500 font-medium max-w-sm italic">Our proven method for taking projects from concept to reality.</p>
                </div>
                <div className="flex gap-2">
                  {service.process.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2 transition-all rounded-full ${activeStep === i ? 'w-12 bg-slate-900' : 'w-4 bg-slate-200'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square md:aspect-video bg-slate-900 rounded-[3rem] p-12 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                  <div className="relative h-full flex flex-col justify-between z-10">
                    <span className="text-8xl font-black text-white/5 italic">{service.process[activeStep].step}</span>
                    <div>
                      <h4 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">{service.process[activeStep].title}</h4>
                      <p className="text-xl text-slate-400 font-medium italic">{service.process[activeStep].desc}</p>
                    </div>
                  </div>
                  {/* Decorative animate-pulse circles */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {service.process.map((step, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`flex items-center gap-6 p-6 rounded-3xl border transition-all text-left ${
                        activeStep === i 
                        ? 'bg-slate-50 border-slate-200 shadow-inner translate-x-4' 
                        : 'bg-white border-transparent hover:border-slate-100 hover:bg-slate-50/50'
                      }`}
                    >
                      <span className={`text-xl font-black italic ${activeStep === i ? 'text-slate-900' : 'text-slate-200'}`}>{step.step}</span>
                      <span className={`text-lg font-bold uppercase tracking-tight ${activeStep === i ? 'text-slate-900' : 'text-slate-400'}`}>{step.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Extra Sections (e.g., Tech Stack) */}
        {extraSections && extraSections}

        {/* Case Study Section */}
        {service.caseStudy && (
          <section className="py-24 px-6 bg-slate-900 text-white rounded-[4rem] mx-6 my-24 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                  <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase">Case Study</div>
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
                    {service.caseStudy.client} <br />
                    <span className="text-white/40">Success.</span>
                  </h2>
                  <p className="text-xl text-white/60 font-medium italic max-w-lg leading-relaxed">
                    We helped {service.caseStudy.client} achieve remarkable growth through our specialized {service.title} approach.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-8 bg-white/5 backdrop-blur-sm rounded-[2.5rem] border border-white/10 space-y-4">
                    <div className="text-5xl font-black tracking-tighter italic text-white">{service.caseStudy.results}</div>
                    <p className="text-sm font-bold text-white/40 uppercase tracking-widest leading-tight">Total Growth Achieved</p>
                  </div>
                  {service.caseStudy.metrics.map((metric, i) => (
                    <div key={i} className="p-8 bg-white/5 backdrop-blur-sm rounded-[2.5rem] border border-white/10 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-white shrink-0"></div>
                      <span className="font-bold uppercase tracking-tight text-white/80">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.8] italic">
                Ready to <br /> <span className="text-slate-200">Level Up?</span>
              </h2>
              <p className="text-2xl text-slate-500 font-medium italic">Join 100+ businesses growing with Quinova.</p>
            </div>
            <button
              onClick={() => setShowContactForm(true)}
              className="group bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-black text-2xl uppercase tracking-tighter hover:bg-slate-800 transition-all hover:scale-105 flex items-center gap-4 mx-auto shadow-2xl"
            >
              Start Now
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </section>
      </motion.div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setShowContactForm(false)}
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl custom-scrollbar"
          >
            <ContactForm 
              onClose={() => setShowContactForm(false)} 
              defaultService={service.title} 
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailLayout;
