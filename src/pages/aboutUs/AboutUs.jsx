import { useState, useEffect, useRef } from 'react';
import { Award, Users, Target, Heart, Zap, Shield, ArrowRight, Star } from 'lucide-react';
import { values, team, stats, trustTestimonials } from '../../const';

function AboutUs({ navigate = () => {} }) {
    const [isVisible, setIsVisible] = useState({});
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
            { threshold: 0.1 }
        );

        observerRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const valuesWithIcons = values.map((value, index) => ({
        ...value,
        icon: [<Target className="w-8 h-8" />, <Heart className="w-8 h-8" />, <Zap className="w-8 h-8" />, <Shield className="w-8 h-8" />][index]
    }));

    const statsWithIcons = stats.map((stat, index) => ({
        ...stat,
        icon: [<Target className="w-5 h-5" />, <Users className="w-5 h-5" />, <Award className="w-5 h-5" />, <Users className="w-5 h-5" />][index]
    }));

    return (
        <>
            <div className="pt-16 bg-white">
                {/* Hero Section */}
                <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
                    <div className="max-w-7xl mx-auto text-center">
                        <span className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold mb-4">
                            About Us
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Our Journey
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Building digital excellence through innovation, dedication, and client success
                        </p>
                    </div>
                </section>

                {/* Company Story */}
                <section 
                    id="story-section"
                    ref={(el) => (observerRefs.current[0] = el)}
                    className="py-20 px-6 bg-white"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={`${isVisible['story-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-700`}>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                    Our Story
                                </h2>
                                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                                    Founded with a mission to transform businesses through digital excellence, we've spent over a decade building deep expertise across web development, digital marketing, design, and strategy. What started as a small team of passionate developers has evolved into a powerhouse of 30+ specialists serving 100+ satisfied clients.
                                </p>
                                <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                                    We've grown alongside our clients, witnessing firsthand how strategic digital solutions drive real business growth. We believe in long-term partnerships, not one-off projects. Your success metrics become our success metrics, and we're committed to delivering measurable results every single time.
                                </p>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    Today, our diverse team of certified developers, award-winning designers, seasoned strategists, and marketing experts collaborate seamlessly to solve complex business challenges. We combine cutting-edge technology with strategic thinking to deliver solutions that don't just look good—they deliver results.
                                </p>
                                <button 
                                    onClick={() => navigate('/services')}
                                    className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
                                >
                                    Explore Our Services
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                            <div className={`space-y-4 ${isVisible['story-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700`}>
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-8 text-white hover:shadow-lg transition-shadow">
                                    <div className="text-6xl font-bold mb-2">98%</div>
                                    <p className="text-slate-300">Client Satisfaction Rate</p>
                                </div>
                                <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                                    <div className="text-5xl font-bold text-slate-900 mb-2">10+</div>
                                    <p className="text-slate-600">Years of Excellence</p>
                                </div>
                                <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                                    <div className="text-5xl font-bold text-slate-900 mb-2">100+</div>
                                    <p className="text-slate-600">Projects Successfully Delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 px-6 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block text-slate-600 font-semibold mb-2">Our Core Values</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                What Drives Our Excellence
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Core principles embedded in every project, every interaction, and every decision
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {valuesWithIcons.map((value, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-xl hover:border-slate-400 transition-all group cursor-pointer"
                                >
                                    <div className="text-slate-900 mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 px-6 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8">
                            {statsWithIcons.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-3">{stat.icon}</div>
                                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                                    <div className="text-slate-300">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section 
                    id="team-section"
                    ref={(el) => (observerRefs.current[1] = el)}
                    className="py-20 px-6 bg-white"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block text-slate-600 font-semibold mb-2">Our Team</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                Expert Professionals
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Experienced specialists dedicated to bringing your vision to life with excellence
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {team.map((member, index) => (
                                <div 
                                    key={index} 
                                    className={`group rounded-lg overflow-hidden border border-slate-200 hover:border-slate-400 hover:shadow-xl transition-all duration-300 bg-white ${
                                        isVisible['team-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                        transition: isVisible['team-section'] ? 'all 0.6s ease-out' : 'none'
                                    }}
                                >
                                    <div className="bg-slate-200 aspect-square flex items-center justify-center overflow-hidden relative">
                                        {member.image ? (
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                        ) : (
                                            <div className="text-slate-400 text-sm text-center p-4 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">No Photo</div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                                        <p className="text-sm text-slate-600 font-semibold mb-3">{member.role}</p>
                                        {member.bio && <p className="text-xs text-slate-500 mb-3 leading-relaxed">{member.bio}</p>}
                                        {member.expertise && (
                                            <div className="flex flex-wrap gap-1">
                                                {member.expertise.map((skill, idx) => (
                                                    <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded whitespace-nowrap">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 px-6 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block text-slate-600 font-semibold mb-2">Client Success Stories</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                Trusted by Industry Leaders
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Real results from real clients who transformed their business with our solutions
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {trustTestimonials.map((testimonial, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center font-bold text-sm">
                                            {testimonial.image}
                                        </div>
                                    </div>
                                    <p className="text-slate-600 mb-6 leading-relaxed italic">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="border-t border-slate-200 pt-4">
                                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-600">{testimonial.role} at {testimonial.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6 bg-slate-900 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Let's Work Together
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Ready to start your digital transformation journey? Let's create something amazing
                        </p>
                        <button 
                            onClick={() => navigate('services')}
                            className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                        >
                            Get Started
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutUs;
