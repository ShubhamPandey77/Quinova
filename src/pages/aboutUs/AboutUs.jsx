import { useState, useEffect, useRef } from 'react';
import { Award, Users, Target, Heart, Zap, Shield, ArrowRight, Star, ChevronRight, Sparkles, TrendingUp, Globe, Clock, CheckCircle, ChevronDown } from 'lucide-react';
import { values, team, stats, testimonials } from '../../const';
import ContactForm from "../../components/ContactForm";
import TestimonialsSection from '@/components/home/TestimonialsSection';

function AboutUs({ navigate = () => {} }) {
    const [isVisible, setIsVisible] = useState({});
    const [showContactForm, setShowContactForm] = useState(false);
    const [expandedValueIndex, setExpandedValueIndex] = useState(null); // Add state for expanded value
    const observerRefs = useRef([]);

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
                <section className="relative py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                    <div className="max-w-7xl mx-auto relative">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-white px-6 py-3 rounded-full shadow-lg mb-8 border border-slate-200">
                                <Sparkles className="w-4 h-4 text-slate-600" />
                                <span className="text-sm font-semibold text-slate-700 tracking-wide">ABOUT US</span>
                            </div>
                            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
                                Crafting Digital
                                <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                    Excellence
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                                Where strategic innovation meets exceptional execution to transform businesses through digital mastery
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button 
                                    onClick={() => navigate('/services')}
                                    className="group bg-gradient-to-r from-slate-900 to-slate-800 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 shadow-lg cursor-pointer"
                                >
                                    Explore Our Services
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                                {/* Updated Schedule Consultation button */}
                                <button 
                                    onClick={handleScheduleConsultation}
                                    className="border-2 border-slate-200 text-slate-800 px-10 py-4 rounded-xl font-semibold cursor-pointer hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 hover:bg-slate-50 transition-all duration-300"
                                >
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Modal */}
                {showContactForm && (
                    <div 
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                        onClick={handleCloseForm}
                    >
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300"></div>
                        <ContactForm 
                            onClose={handleCloseForm}
                            // You can optionally pre-select a service if needed:
                            // defaultService="website"
                        />
                    </div>
                )}

                {/* Rest of your existing AboutUs code remains the same */}
                {/* Stats Bar - Premium */}
                <section className="relative -mt-10 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-gradient-to-r from-white to-slate-50 rounded-2xl shadow-2xl p-8 border border-slate-100">
                            <div className="grid md:grid-cols-4 gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center group">
                                        <div className="text-5xl font-bold text-slate-900 mb-2 relative">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-slate-600 font-medium tracking-wide">{stat.label}</div>
                                        <div className="h-0.5 w-8 bg-gradient-to-r from-slate-200 to-transparent mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Story - Premium */}
                <section 
                    id="story-section"
                    ref={(el) => (observerRefs.current[0] = el)}
                    className="py-32 px-6 pb-24 bg-white"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className={`${isVisible['story-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-700`}>
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-1.5 h-8 bg-gradient-to-b from-slate-900 to-slate-700 rounded-full"></div>
                                    <span className="text-sm font-semibold text-slate-600 tracking-wider">OUR JOURNEY</span>
                                </div>
                                <h2 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                    Redefining Digital
                                    <span className="block text-slate-700">Transformation</span>
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        Founded with a vision to bridge the gap between technology and business growth, we've evolved from a passionate startup into a trusted partner for industry leaders. Our decade-long journey is marked by relentless innovation and client success.
                                    </p>
                                    <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl border border-slate-100">
                                        <div className="flex items-start gap-4">
                                            <TrendingUp className="w-6 h-6 text-slate-700 mt-1" />
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
                            <div className={`grid grid-cols-2 gap-6 ${isVisible['story-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700`}>
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group col-span-2">
                                    <div className="text-7xl font-bold mb-3">98%</div>
                                    <p className="text-slate-300 text-lg">Client Satisfaction</p>
                                    <div className="h-1 w-16 bg-gradient-to-r from-white/30 to-transparent mt-4 group-hover:w-24 transition-all duration-300"></div>
                                </div>
                                <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-5xl font-bold text-slate-900 mb-3">1+</div>
                                    <p className="text-slate-600 font-medium">Years Excellence</p>
                                </div>
                                <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-5xl font-bold text-slate-900 mb-3">10+</div>
                                    <p className="text-slate-600 font-medium">Projects Delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

{/* Values Section - Accordion Version - SIMPLER */}
<section className="py-16 px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                <span className="text-sm font-semibold text-slate-600 tracking-wider">OUR PHILOSOPHY</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6 mt-4">
                Core Values That Define
                <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Our Excellence
                </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
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
                        className="w-full p-8 text-left flex items-start gap-6 transition-all duration-300"
                    >
                        {/* Icon Container */}
                        <div className={`flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 transition-all duration-300 ${
                            expandedValueIndex === index ? 'scale-110 ring-2 ring-slate-200' : 'group-hover:scale-105'
                        }`}>
                            <div className="text-slate-900 text-2xl">
                                {value.icon}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center justify-center ">
                                <div className="flex-1 mr-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        {value.title}
                                    </h3>
                                    
                                    {/* Smooth text transition */}
                                    <div className={`transition-all duration-300 overflow-hidden ${
                                        expandedValueIndex === index ? 'max-h-96' : 'max-h-6'
                                    }`}>
                                        <p className={`text-slate-600 transition-opacity duration-300 ${
                                            expandedValueIndex === index 
                                                ? 'opacity-100 leading-relaxed' 
                                                : 'opacity-80 truncate'
                                        }`}>
                                            {expandedValueIndex === index 
                                                ? value.desc 
                                                : `${value.desc.substring(0, 80)}...`
                                            }
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Arrow that shrinks when expanded */}
                                <div className="flex-shrink-0 items-center justify-center">
                                    <ChevronDown className={`w-6 h-6 text-slate-500 transition-all duration-300 ${
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
                <section 
                    id="team-section"
                    ref={(el) => (observerRefs.current[1] = el)}
                    className="py-32 px-6 bg-white"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                                <span className="text-sm font-semibold text-slate-600 tracking-wider">EXPERT TEAM</span>
                                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                            </div>
                            <h2 className="text-5xl font-bold text-slate-900 mb-6">
                                Master Craftsmen of
                                <span className="block text-slate-700">Digital Innovation</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {team.map((member, index) => (
                                <div 
                                    key={index} 
                                    className={`group relative ${
                                        isVisible['team-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                        transition: isVisible['team-section'] ? 'all 0.6s ease-out' : 'none'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-100 group-hover:border-slate-300 transition-all duration-300 shadow-lg group-hover:shadow-2xl"></div>
                                    <div className="relative">
                                        <div className="aspect-square rounded-t-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 relative">
                                            {member.image ? (
                                                <img 
                                                    src={member.image} 
                                                    alt={member.name} 
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                                                    <div className="text-3xl font-bold text-slate-400">{member.name.charAt(0)}</div>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                                    <p className="text-sm text-slate-600 font-medium">{member.role}</p>
                                                </div>
                                                {member.linkedin && (
                                                    <button 
                                                        onClick={() => window.open(member.linkedin, '_blank')}
                                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                                                    >
                                                        <ArrowRight className="w-4 h-4 text-slate-600" />
                                                    </button>
                                                )}
                                            </div>
                                            {member.bio && (
                                                <p className="text-sm text-slate-500 mb-4 leading-relaxed line-clamp-2">{member.bio}</p>
                                            )}
                                            {member.expertise && (
                                                <div className="flex flex-wrap gap-2">
                                                    {member.expertise.slice(0, 2).map((skill, idx) => (
                                                        <span 
                                                            key={idx} 
                                                            className="text-xs bg-gradient-to-r from-slate-50 to-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full whitespace-nowrap"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                    {member.expertise.length > 2 && (
                                                        <span className="text-xs text-slate-500 px-2">
                                                            +{member.expertise.length - 2}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

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