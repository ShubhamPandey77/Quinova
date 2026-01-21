import { useState, useEffect, useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { Award, Users, Target, Heart, Zap, Shield, ArrowRight, ChevronRight, TrendingUp, Globe, Clock, CheckCircle, ChevronDown } from 'lucide-react';
import { values, stats, testimonials } from '../../const';
import ContactForm from "../../components/ContactForm";
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TeamSection from '../../components/home/TeamSection';

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

function AboutUs({ navigate = () => {} }) {
    const [isVisible, setIsVisible] = useState({});
    const [showContactForm, setShowContactForm] = useState(false);
    const [expandedValueIndex, setExpandedValueIndex] = useState(null); // Add state for expanded value
    const observerRefs = useRef([]);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center start"]
    });

    const title = "Crafting Digital Excellence";
    const words = title.split(" ");

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
                        setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        observerRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const valuesWithIcons = values.map((value, index) => ({
        ...value,
        icon: [<Target className="w-6 h-6" />, <Heart className="w-6 h-6" />, <Zap className="w-6 h-6" />, <Shield className="w-6 h-6" />][index]
    }));

    // Toggle value expansion
    const handleToggle = (index) => {
        if (expandedValueIndex === index) {
            setExpandedValueIndex(null); // Collapse if already expanded
        } else {
            setExpandedValueIndex(index); // Expand new one
        }
    };

    // Handle Schedule Consultation click
    const handleScheduleConsultation = () => {
        setShowContactForm(true);
    };

    // Handle form close
    const handleCloseForm = () => {
        setShowContactForm(false);
    };

    return (
        <>
            <div className="pt-16 bg-white overflow-hidden">
                {/* Hero Section - Premium */}
                <section ref={containerRef} className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 border-b border-slate-100 font-sans">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                    <div className="max-w-7xl mx-auto relative">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="text-left">
                                <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter uppercase relative inline-block font-inter">
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
                                    style={{ width: useTransform(scrollYProgress, [0, 0.8], [0, 200]) }}
                                    className="h-2 bg-slate-900 rounded-full mb-10 origin-left hidden sm:block"
                                ></Motion.div>
                                <p className="text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed font-medium font-inter">
                                    Where strategic innovation meets exceptional execution to transform businesses through digital mastery
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                                    <button 
                                        onClick={() => navigate('/services')}
                                        className="w-full sm:w-auto group bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 sm:px-10 py-4 rounded-xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg cursor-pointer"
                                    >
                                        Explore Our Services
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                    <button 
                                        onClick={handleScheduleConsultation}
                                        className="w-full sm:w-auto border-2 border-slate-200 text-slate-800 px-8 sm:px-10 py-4 rounded-xl font-semibold cursor-pointer hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 hover:bg-slate-50 transition-all duration-300"
                                    >
                                        Schedule Consultation
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-12 lg:mt-0">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                                        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                                            {stat.number}
                                        </div>
                                        <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">
                                            {stat.label}
                                        </div>
                                        <div className="h-1 w-8 bg-slate-900 mt-4 opacity-20 group-hover:w-full group-hover:opacity-100 transition-all duration-500"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Modal */}
                {showContactForm && (
                    <div 
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
                    >
                        <div 
                            className="absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300"
                            onClick={handleCloseForm}
                        ></div>
                        <div className="relative z-[10000] w-full max-w-2xl my-auto">
                            <ContactForm 
                                onClose={handleCloseForm}
                                showCloseButton={true}
                            />
                        </div>
                    </div>
                )}

                {/* Rest of your existing AboutUs code remains the same */}

                {/* Company Story - Premium */}
                <section 
                    id="story-section"
                    ref={(el) => (observerRefs.current[0] = el)}
                    className="py-16 sm:py-32 px-6 pb-16 sm:pb-24 bg-white"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className={`${isVisible['story-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-700`}>
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-1.5 h-8 bg-gradient-to-b from-slate-900 to-slate-700 rounded-full"></div>
                                    <span className="text-sm font-semibold text-slate-600 tracking-wider">OUR JOURNEY</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                    Redefining Digital
                                    <span className="block text-slate-700">Transformation</span>
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                                        Founded with a vision to bridge the gap between technology and business growth, we've evolved from a passionate startup into a trusted partner for industry leaders. Our decade-long journey is marked by relentless innovation and client success.
                                    </p>
                                    <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl border border-slate-100">
                                        <div className="flex items-start gap-4">
                                            <TrendingUp className="w-6 h-6 text-slate-700 mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2">Strategic Partnership</h4>
                                                <p className="text-slate-600 text-sm">
                                                    We measure success by your business growth, creating solutions that drive measurable results and sustainable competitive advantage.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`grid grid-cols-2 gap-4 sm:gap-6 ${isVisible['story-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-8 lg:translate-y-0 lg:translate-x-8'} transition-all duration-700`}>
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-10 text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group col-span-2">
                                    <div className="text-5xl sm:text-7xl font-bold mb-3">98%</div>
                                    <p className="text-slate-300 text-base sm:text-lg">Client Satisfaction</p>
                                    <div className="h-1 w-16 bg-gradient-to-r from-white/30 to-transparent mt-4 group-hover:w-24 transition-all duration-300"></div>
                                </div>
                                <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-3xl sm:text-5xl font-bold text-slate-900 mb-3">1+</div>
                                    <p className="text-slate-600 text-sm sm:font-medium">Years Excellence</p>
                                </div>
                                <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-3xl sm:text-5xl font-bold text-slate-900 mb-3">10+</div>
                                    <p className="text-slate-600 text-sm sm:font-medium">Projects Delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

{/* Values Section - Accordion Version - SIMPLER */}
<section className="py-16 sm:py-24 px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                <span className="text-sm font-semibold text-slate-600 tracking-wider">OUR PHILOSOPHY</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-4">
                Core Values That Define
                <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Our Excellence
                </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light">
                Fundamental principles guiding every decision, partnership, and solution we deliver
            </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
            {valuesWithIcons.map((value, index) => (
                <div 
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 shadow-lg transition-all duration-300 ${
                        expandedValueIndex === index ? 'shadow-2xl border-slate-300' : 'hover:border-slate-200'
                    }`}
                >
                    <button
                        onClick={() => handleToggle(index)}
                        className="w-full p-6 sm:p-8 text-left flex items-start gap-4 sm:gap-6 transition-all duration-300"
                    >
                        {/* Icon Container */}
                        <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 transition-all duration-300 ${
                            expandedValueIndex === index ? 'scale-110 ring-2 ring-slate-200' : 'group-hover:scale-105'
                        }`}>
                            <div className="text-slate-900 text-xl sm:text-2xl">
                                {value.icon}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <div className="flex-1 mr-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-3">
                                        {value.title}
                                    </h3>
                                    
                                    {/* Smooth text transition */}
                                    <div className={`transition-all duration-300 overflow-hidden ${
                                        expandedValueIndex === index ? 'max-h-96' : 'max-h-0 sm:max-h-6'
                                    }`}>
                                        <p className={`text-sm sm:text-base text-slate-600 transition-opacity duration-300 ${
                                            expandedValueIndex === index 
                                                ? 'opacity-100 leading-relaxed mt-2' 
                                                : 'opacity-80 truncate hidden sm:block'
                                        }`}>
                                            {expandedValueIndex === index 
                                                ? value.desc 
                                                : `${value.desc.substring(0, 80)}...`
                                            }
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Arrow that shrinks when expanded */}
                                <div className="flex-shrink-0 flex items-center justify-center">
                                    <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-slate-500 transition-all duration-300 ${
                                        expandedValueIndex === index 
                                            ? 'rotate-180 scale-75 opacity-70' 
                                            : 'group-hover:scale-110'
                                    }`} />
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            ))}
        </div>
    </div>
</section>

                {/* Team Section - Premium */}
                <div id="team-section" ref={(el) => (observerRefs.current[1] = el)}>
                    <TeamSection />
                </div>

                {/* Testimonials Section - Premium */}
                <section className="py-12 px-6 bg-gradient-to-b from-slate-50 to-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center ">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                                <span className="text-sm font-semibold text-slate-600 tracking-wider">CLIENT TESTIMONIALS</span>
                                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                            </div>
                            <h2 className="text-5xl font-bold text-slate-900">
                                Trusted Partnerships,
                                <span className="block text-slate-700">Proven Results</span>
                            </h2>
                        </div>

                        <TestimonialsSection 
                                  ref={(el) => (observerRefs.current[2] = el)} 
                                  testimonials={testimonials} 
                                  eventType="About"
                                />
                        <div className="h-[3px] bg-slate-900 w-full rounded-full max-w-[394px] mx-auto"/>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutUs;