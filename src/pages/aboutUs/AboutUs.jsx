import { useState, useEffect, useRef } from 'react';
import { Award, Users, Target, Heart, Zap, Shield, Sparkles, Rocket, Clock, TrendingUp } from 'lucide-react';

function AboutUs({ navigate = () => {} }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState({});
    const observerRefs = useRef([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

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

    const values = [
        { icon: <Target className="w-8 h-8" />, title: "Mission-Driven", desc: "We're committed to delivering excellence in every project", color: "from-emerald-500 to-teal-600" },
        { icon: <Heart className="w-8 h-8" />, title: "Client-Focused", desc: "Your success is our success, always putting clients first", color: "from-green-500 to-emerald-600" },
        { icon: <Zap className="w-8 h-8" />, title: "Innovation", desc: "Staying ahead with cutting-edge technologies and methods", color: "from-teal-500 to-cyan-600" },
        { icon: <Shield className="w-8 h-8" />, title: "Reliability", desc: "Consistent quality and on-time delivery you can count on", color: "from-lime-500 to-green-600" }
    ];

    const team = [
        { name: "Ashish Dueby", role: "Full Stack Developer", image: "Ashish.jpg" },
        { name: "Shubham Pandey", role: "Full Stack Developer", image: "Shubham.jpg" },
        { name: "Priyesh Singh", role: "Python Developer And Marketing Expert", image: "Priyesh.jpg" },
        { name: "Jigyasa Pandey", role: "Social Media Manager And Content Writer", image: "Jigyasa.jpg" },
        { name: "Ashutosh Singh", role: "Full Stack Developer", image: "" }
    ];

    const stats = [
        { number: "10+", label: "Projects Completed", icon: <Target className="w-5 h-5" /> },
        { number: "10+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
        { number: "1+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
        { number: "98%", label: "Satisfaction Rate", icon: <TrendingUp className="w-5 h-5" /> }
    ];

    return (
        <>
            {/* Cursor Follower */}
            <div 
                className="cursor-glow"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
            ></div>

            <div className="pt-24 bg-white">
                {/* Hero Section */}
                <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden">
                    {/* Animated Particles */}
                    <div className="particles-container">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="particle"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${15 + Math.random() * 10}s`
                                }}
                            ></div>
                        ))}
                    </div>
                    
                    {/* Dotted Pattern */}
                    <div className="absolute inset-0 animate-dots-scroll" style={{
                        backgroundImage: 'radial-gradient(circle, #10b98140 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>
                    
                    {/* Animated Gradient Blobs */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="blob blob-1"></div>
                        <div className="blob blob-2"></div>
                        <div className="blob blob-3"></div>
                    </div>

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <div className="inline-block animate-bounce-slow mb-6">
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-emerald-400/30 flex items-center gap-2 w-fit mx-auto animate-pulse-glow">
                                <Sparkles className="w-4 h-4 animate-spin-slow" />
                                Our Story
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6 animate-fade-in-up">
                            <span className="block">About</span>
                            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent animate-gradient-x">
                                Our Journey
                            </span>
                        </h1>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                            We're a team of passionate professionals dedicated to transforming businesses through innovative IT solutions
                        </p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section 
                    id="story-section"
                    ref={(el) => (observerRefs.current[0] = el)}
                    className="py-20 px-6 bg-white relative overflow-hidden"
                >
                    <div className="grid-background"></div>
                    
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={`space-y-6 ${isVisible['story-section'] ? 'animate-slide-in-left' : 'opacity-0'}`}>
                                <span className="text-emerald-600 font-semibold text-lg">Our Story</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                    Building Digital Excellence Since 
                                    <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                        2019
                                    </span>
                                </h2>
                                <div className="space-y-4 text-lg text-slate-700">
                                    <p className="animate-fade-in-up animation-delay-200">
                                        IT Solutions was founded with a simple mission: to help businesses thrive in the digital age. What started as a small team of developers has grown into a full-service digital agency.
                                    </p>
                                    <p className="animate-fade-in-up animation-delay-300">
                                        Today, we're proud to serve clients worldwide, delivering exceptional web development, social media management, video editing, and graphic design services that drive real results.
                                    </p>
                                    <p className="animate-fade-in-up animation-delay-400">
                                        Our commitment to quality, innovation, and client satisfaction has made us a trusted partner for businesses of all sizes.
                                    </p>
                                </div>
                            </div>
                            
                            <div className={`grid grid-cols-2 gap-6 ${isVisible['story-section'] ? 'animate-slide-in-right' : 'opacity-0'}`}>
                                {stats.map((stat, index) => (
                                    <div 
                                        key={index}
                                        className="stat-card"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="stat-glow"></div>
                                        <div className="relative z-10">
                                            <div className="flex justify-center mb-2 text-emerald-600 animate-bounce-in" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                                                {stat.icon}
                                            </div>
                                            <div className="text-4xl font-bold bg-gradient-to-br from-emerald-700 to-teal-700 bg-clip-text text-transparent counter mb-2">
                                                {stat.number}
                                            </div>
                                            <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section 
                    id="values-section"
                    ref={(el) => (observerRefs.current[1] = el)}
                    className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden"
                >
                    <div className="wave-container">
                        <div className="wave"></div>
                        <div className="wave wave-2"></div>
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className={`text-center mb-16 ${isVisible['values-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <span className="text-emerald-600 font-semibold text-lg">Our Values</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
                                What Drives Us
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Core principles that guide every decision we make
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <div 
                                    key={index} 
                                    className={`feature-card ${isVisible['values-section'] ? 'animate-scale-in' : 'opacity-0'}`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <div className="feature-card-shine"></div>
                                    <div className="feature-card-border"></div>
                                    <div className="relative z-10 text-center">
                                        <div className={`feature-icon bg-gradient-to-br ${value.color} mx-auto`}>
                                            <div className="icon-pulse">{value.icon}</div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                        <p className="text-slate-600">{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Team */}
                <section 
                    id="team-section"
                    ref={(el) => (observerRefs.current[2] = el)}
                    className="py-20 px-6 bg-white relative overflow-hidden"
                >
                    <div className="grid-background"></div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className={`text-center mb-16 ${isVisible['team-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <span className="text-emerald-600 font-semibold text-lg">Our Team</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
                                Meet The Experts
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Talented professionals dedicated to your success
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {team.map((member, index) => (
                                <div 
                                    key={index} 
                                    className={`team-card ${isVisible['team-section'] ? 'animate-scale-in' : 'opacity-0'}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="team-card-glow"></div>
                                    <div className="relative z-10 text-center">
                                        <div className="team-avatar-container">
                                            {member.image ? (
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-3xl font-bold">
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 mt-4">{member.name}</h3>
                                        <p className="text-slate-600 text-sm">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 text-white relative overflow-hidden">
                    <div className="rays-container">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="ray" style={{ transform: `rotate(${i * 30}deg)` }}></div>
                        ))}
                    </div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-text-shimmer">
                            Ready to Work Together?
                        </h2>
                        <p className="text-xl text-emerald-100 mb-8">
                            Let's create something amazing for your business
                        </p>
                        <button 
                            onClick={() => navigate('contact')}
                            className="cta-button"
                        >
                            <span className="relative z-10">Get Started Today</span>
                            <div className="cta-ripple"></div>
                        </button>
                    </div>
                </section>
            </div>

            <style jsx>{`
                /* Cursor Glow Effect */
                .cursor-glow {
                    position: fixed;
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                    transform: translate(-50%, -50%);
                    z-index: 9999;
                    transition: all 0.1s ease;
                }

                /* Particles */
                .particles-container {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                }

                .particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: linear-gradient(135deg, #10b981, #14b8a6);
                    border-radius: 50%;
                    animation: float-particle 20s infinite;
                    opacity: 0.6;
                }

                @keyframes float-particle {
                    0%, 100% {
                        transform: translateY(100vh) translateX(0) scale(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.6;
                    }
                    90% {
                        opacity: 0.6;
                    }
                    100% {
                        transform: translateY(-100px) translateX(100px) scale(1);
                        opacity: 0;
                    }
                }

                /* Blobs */
                .blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(60px);
                    mix-blend-mode: multiply;
                    animation: blob-float 25s infinite;
                }

                .blob-1 {
                    width: 500px;
                    height: 500px;
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(20, 184, 166, 0.3));
                    top: -200px;
                    left: -200px;
                }

                .blob-2 {
                    width: 400px;
                    height: 400px;
                    background: linear-gradient(135deg, rgba(5, 150, 105, 0.3), rgba(16, 185, 129, 0.3));
                    bottom: -200px;
                    right: -200px;
                    animation-delay: 5s;
                }

                .blob-3 {
                    width: 350px;
                    height: 350px;
                    background: linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(6, 182, 212, 0.2));
                    top: 50%;
                    left: 50%;
                    animation-delay: 10s;
                }

                @keyframes blob-float {
                    0%, 100% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                    25% {
                        transform: translate(50px, 50px) rotate(90deg);
                    }
                    50% {
                        transform: translate(0, 100px) rotate(180deg);
                    }
                    75% {
                        transform: translate(-50px, 50px) rotate(270deg);
                    }
                }

                @keyframes dots-scroll {
                    0% {
                        background-position: 0 0;
                    }
                    100% {
                        background-position: 30px 30px;
                    }
                }

                .animate-dots-scroll {
                    animation: dots-scroll 20s linear infinite;
                }

                /* Grid Background */
                .grid-background {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                    animation: grid-move 20s linear infinite;
                }

                @keyframes grid-move {
                    0% {
                        transform: translateX(0) translateY(0);
                    }
                    100% {
                        transform: translateX(50px) translateY(50px);
                    }
                }

                /* Stat Card */
                .stat-card {
                    position: relative;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(209, 250, 229, 0.5));
                    border: 2px solid #d1fae5;
                    border-radius: 1.5rem;
                    padding: 2rem;
                    text-align: center;
                    animation: bounce-in 0.6s ease-out;
                    transition: all 0.4s ease;
                    overflow: hidden;
                }

                .stat-card:hover {
                    transform: translateY(-10px) scale(1.05);
                    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
                    border-color: #10b981;
                }

                .stat-glow {
                    position: absolute;
                    inset: -20px;
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2));
                    border-radius: 1.5rem;
                    filter: blur(20px);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .stat-card:hover .stat-glow {
                    opacity: 1;
                }

                .counter {
                    animation: counter-pop 0.6s ease-out;
                }

                @keyframes counter-pop {
                    0% {
                        transform: scale(0);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                /* Feature Card */
                .feature-card {
                    position: relative;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(209, 250, 229, 0.5));
                    border: 2px solid #d1fae5;
                    border-radius: 1.5rem;
                    padding: 2rem;
                    cursor: pointer;
                    animation: scale-in 0.6s ease-out;
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    overflow: hidden;
                }

                .feature-card:hover {
                    transform: translateY(-15px) scale(1.05);
                    box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
                    border-color: #10b981;
                }

                .feature-card-shine {
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.5), transparent);
                    transform: rotate(45deg);
                    animation: card-shine 8s infinite;
                }

                @keyframes card-shine {
                    0% {
                        transform: translateX(-100%) translateY(-100%) rotate(45deg);
                    }
                    100% {
                        transform: translateX(100%) translateY(100%) rotate(45deg);
                    }
                }

                .feature-card-border {
                    position: absolute;
                    inset: 0;
                    border-radius: 1.5rem;
                    padding: 2px;
                    background: linear-gradient(135deg, #10b981, #14b8a6, #10b981);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    animation: rotate-border 3s linear infinite;
                }

                .feature-card:hover .feature-card-border {
                    opacity: 1;
                }

                @keyframes rotate-border {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                .feature-icon {
                    width: 4rem;
                    height: 4rem;
                    border-radius: 0.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    transition: all 0.4s ease;
                }

                .feature-card:hover .feature-icon {
                    transform: scale(1.15) rotate(-5deg);
                    box-shadow: 0 15px 35px rgba(16, 185, 129, 0.4);
                }

                .icon-pulse {
                    animation: icon-pulse 2s ease-in-out infinite;
                }

                @keyframes icon-pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }

                /* Team Card */
                .team-card {
                    position: relative;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(209, 250, 229, 0.5));
                    border: 2px solid #d1fae5;
                    border-radius: 1.5rem;
                    padding: 2rem;
                    animation: scale-in 0.6s ease-out;
                    transition: all 0.4s ease;
                    overflow: hidden;
                }

                .team-card:hover {
                    transform: translateY(-10px) scale(1.05);
                    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
                    border-color: #10b981;
                }

                .team-card-glow {
                    position: absolute;
                    inset: -20px;
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2));
                    border-radius: 1.5rem;
                    filter: blur(20px);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .team-card:hover .team-card-glow {
                    opacity: 1;
                }

                .team-avatar-container {
                    width: 8rem;
                    height: 8rem;
                    margin: 0 auto;
                    border-radius: 50%;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
                    transition: all 0.4s ease;
                    border: 3px solid #d1fae5;
                }

                .team-card:hover .team-avatar-container {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 15px 40px rgba(16, 185, 129, 0.5);
                    border-color: #10b981;
                }

                /* Wave Animation */
                .wave-container {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 150px;
                    overflow: hidden;
                }

                .wave {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 200%;
                    height: 100%;
                    background: linear-gradient(90deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1));
                    border-radius: 1000px 1000px 0 0;
                    animation: wave 15s infinite linear;
                }

                .wave-2 {
                    animation-delay: -5s;
                    opacity: 0.5;
                }

                @keyframes wave {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                /* Rays */
                .rays-container {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                }

                .ray {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 2px;
                    height: 50%;
                    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent);
                    transform-origin: top center;
                    animation: rotate-rays 20s linear infinite;
                }

                @keyframes rotate-rays {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                /* CTA Button */
                .cta-button {
                    position: relative;
                    background: white;
                    color: #10b981;
                    padding: 1.25rem 3rem;
                    border-radius: 1rem;
                    font-weight: bold;
                    font-size: 1.125rem;
                    overflow: hidden;
                    transition: all 0.4s ease;
                    animation: pulse-scale 2s ease-in-out infinite;
                    border: none;
                    cursor: pointer;
                }

                .cta-button:hover {
                    transform: scale(1.1);
                    box-shadow: 0 20px 50px rgba(255, 255, 255, 0.3);
                }

                @keyframes pulse-scale {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }

                .cta-ripple {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1));
                    transform: scale(0);
                    border-radius: 1rem;
                }

                .cta-button:hover .cta-ripple {
                    animation: ripple-effect 0.6s ease-out;
                }

                @keyframes ripple-effect {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                @keyframes text-shimmer {
                    0% {
                        background-position: -200%;
                    }
                    100% {
                        background-position: 200%;
                    }
                }

                .animate-text-shimmer {
                    background: linear-gradient(90deg, #fff, #a7f3d0, #fff);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: text-shimmer 3s linear infinite;
                }

                /* General Animations */
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out;
                }

                @keyframes slide-in-left {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-slide-in-left {
                    animation: slide-in-left 0.8s ease-out;
                }

                @keyframes slide-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-slide-in-right {
                    animation: slide-in-right 0.8s ease-out;
                }

                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-scale-in {
                    animation: scale-in 0.6s ease-out;
                }

                @keyframes bounce-in {
                    0% {
                        opacity: 0;
                        transform: scale(0.3);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-bounce-in {
                    animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }

                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }

                @keyframes pulse-glow {
                    0%, 100% {
                        box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
                    }
                    50% {
                        box-shadow: 0 0 40px rgba(16, 185, 129, 0.8);
                    }
                }

                .animate-pulse-glow {
                    animation: pulse-glow 2s ease-in-out infinite;
                }

                @keyframes gradient-x {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                .animate-gradient-x {
                    background-size: 200% auto;
                    animation: gradient-x 3s ease infinite;
                }

                /* Animation Delays */
                .animation-delay-100 {
                    animation-delay: 0.1s;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                }

                .animation-delay-300 {
                    animation-delay: 0.3s;
                }

                .animation-delay-400 {
                    animation-delay: 0.4s;
                }

                .animation-delay-500 {
                    animation-delay: 0.5s;
                }

                .animation-delay-600 {
                    animation-delay: 0.6s;
                }

                .opacity-0 {
                    opacity: 0;
                }
            `}</style>
        </>
    );
}

export default AboutUs;