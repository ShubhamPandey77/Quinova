import { useState, useEffect, useRef } from 'react';
import { Award, Users, Target, Heart, Zap, Shield, Sparkles, Rocket, Clock, TrendingUp, Star, X, Mail, ArrowRight, CheckCircle } from 'lucide-react';

function AboutUs() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showContactForm, setShowContactForm] = useState(false);
    const observerRefs = useRef([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
    });

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
                        observer.unobserve(entry.target);
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

    const handleCloseForm = () => {
        setShowContactForm(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
        setShowContactForm(false);
    };

    const values = [
        { icon: <Target className="w-8 h-8" />, title: "Mission-Driven", desc: "We're committed to delivering excellence in every project", color: "from-gray-800 to-gray-700" },
        { icon: <Heart className="w-8 h-8" />, title: "Client-Focused", desc: "Your success is our success, always putting clients first", color: "from-gray-700 to-gray-800" },
        { icon: <Zap className="w-8 h-8" />, title: "Innovation", desc: "Staying ahead with cutting-edge technologies and methods", color: "from-yellow-500 to-orange-500" },
        { icon: <Shield className="w-8 h-8" />, title: "Reliability", desc: "Consistent quality and on-time delivery you can count on", color: "from-gray-800 to-gray-700" }
    ];

    const team = [
        { name: "Ashish Dueby", role: "Full Stack Developer", image: "Ashish.jpg" },
        { name: "Shubham Pandey", role: "Full Stack Developer", image: "Shubham.jpg" },
        { name: "Priyesh Singh", role: "Python Developer And Marketing Expert", image: "Priyesh.jpg" },
        { name: "Jigyasa Pandey", role: "Social Media Manager And Content Writer", image: "Jigyasa.jpg" },
        { name: "Ashutosh Singh", role: "Full Stack Developer", image: "Ashutosh.jpg" }
    ];

    const [reviews, setReviews] = useState([
        { id: 1, name: "John Doe", rating: 5, text: "Exceptional service and great communication throughout the project!" },
        { id: 2, name: "Sarah Smith", rating: 5, text: "Very professional team, delivered on time and exceeded expectations." }
    ]);
    const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });

    const stats = [
        { number: "10+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
        { number: "10+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
        { number: "1+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
        { number: "98%", label: "Satisfaction Rate", icon: <TrendingUp className="w-6 h-6" /> }
    ];

    const handleAddReview = (e) => {
        e.preventDefault();
        if (newReview.name.trim() && newReview.text.trim()) {
            setReviews([...reviews, { id: Date.now(), ...newReview }]);
            setNewReview({ name: '', rating: 5, text: '' });
        }
    };

    const handleDeleteReview = (id) => {
        setReviews(reviews.filter(review => review.id !== id));
    };

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

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative min-h-screen flex items-center" style={{
                backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            }}>
                {/* Tech Grid Background */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent),
                                        linear-gradient(90deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent)`,
                    backgroundSize: '50px 50px'
                }}></div>

                {/* Animated Blobs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gray-800 rounded-full blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-600 rounded-full blur-3xl opacity-10 animate-blob" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-block mb-6">
                            <div className="flex items-center gap-2 bg-gray-800/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-600/30">
                                <Sparkles className="w-4 h-4 text-yellow-400" />
                                <span className="text-yellow-400 font-semibold text-sm">Our Story</span>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                            About Quinova
                            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                                IT Solutions
                            </span>
                        </h1>

                        <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                            We're a team of passionate professionals dedicated to transforming businesses through innovative IT solutions and cutting-edge technology.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                            {stats.map((stat, index) => (
                                <div 
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-xl p-4 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="text-yellow-400 mb-2">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-yellow-400">{stat.number}</div>
                                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section 
                id="story-section"
                ref={(el) => (observerRefs.current[0] = el)}
                className="py-20 px-6 relative" style={{
                    backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1a1f3a 50%, #0f172a 100%)',
                }}
            >
                {/* Tech Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent),
                                        linear-gradient(90deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent)`,
                    backgroundSize: '50px 50px'
                }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span className="text-yellow-400 font-semibold text-lg">Our Journey</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Building Digital Excellence
                                <span className="block mt-2 text-yellow-400">
                                    Since 2019
                                </span>
                            </h2>
                            <div className="space-y-4 text-lg text-gray-300">
                                <p>
                                    Quinova IT Solutions was founded with a simple mission: to help businesses thrive in the digital age. What started as a small team of developers has grown into a full-service digital agency.
                                </p>
                                <p>
                                    Today, we're proud to serve clients worldwide, delivering exceptional web development, social media management, video editing, and graphic design services that drive real results.
                                </p>
                                <p>
                                    Our commitment to quality, innovation, and client satisfaction has made us a trusted partner for businesses of all sizes.
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-white/5 backdrop-blur-sm border border-gray-600/20 rounded-xl p-8 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300">
                            <div className="space-y-6">
                                <div className="border-b border-white/10 pb-6">
                                    <div className="flex items-start gap-4">
                                        <div className="text-yellow-400 mt-1">
                                            <Rocket className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                                            <p className="text-gray-400">Transform businesses through innovative IT solutions and cutting-edge technology</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b border-white/10 pb-6">
                                    <div className="flex items-start gap-4">
                                        <div className="text-yellow-400 mt-1">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                                            <p className="text-gray-400">Be the most trusted IT solutions partner for businesses worldwide</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-start gap-4">
                                        <div className="text-yellow-400 mt-1">
                                            <Heart className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">Our Values</h3>
                                            <p className="text-gray-400">Excellence, innovation, and customer satisfaction in everything we do</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section 
                id="values-section"
                ref={(el) => (observerRefs.current[1] = el)}
                className="py-20 px-6 relative bg-slate-950" style={{
                    backgroundImage: 'linear-gradient(135deg, #1a1f3a 0%, #0f172a 50%, #1a1f3a 100%)',
                }}
            >
                {/* Tech Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent),
                                        linear-gradient(90deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent)`,
                    backgroundSize: '50px 50px'
                }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-yellow-400 font-semibold text-lg">Core Values</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            What We Stand For
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            These values guide everything we do and define our approach to business
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm border border-gray-600/20 rounded-xl p-8 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">{value.icon}</div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section 
                id="team-section"
                ref={(el) => (observerRefs.current[2] = el)}
                className="py-20 px-6 relative" style={{
                    backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1a1f3a 50%, #0f172a 100%)',
                }}
            >
                {/* Tech Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent),
                                        linear-gradient(90deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent)`,
                    backgroundSize: '50px 50px'
                }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-yellow-400 font-semibold text-lg">Our Team</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Meet The Talented Team
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A diverse group of skilled professionals dedicated to excellence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6">
                        {team.map((member, index) => (
                            <div 
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm border border-gray-600/20 rounded-xl overflow-hidden hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="relative w-full h-56 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center overflow-hidden">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.style.background = 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)';
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-sm text-gray-400">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section 
                id="reviews-section"
                ref={(el) => (observerRefs.current[3] = el)}
                className="py-20 px-6 relative bg-slate-950" style={{
                    backgroundImage: 'linear-gradient(135deg, #1a1f3a 0%, #0f172a 50%, #1a1f3a 100%)',
                }}
            >
                {/* Tech Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent),
                                        linear-gradient(90deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent)`,
                    backgroundSize: '50px 50px'
                }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-yellow-400 font-semibold text-lg">Client Reviews</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            What Clients Say
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Real feedback from real clients about our work
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {reviews.map((review, index) => (
                            <div 
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm border border-gray-600/20 rounded-xl p-8 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
                                <div className="flex items-center justify-between">
                                    <div className="font-bold text-white">{review.name}</div>
                                    <button
                                        onClick={() => handleDeleteReview(review.id)}
                                        className="text-gray-400 hover:text-red-400 transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Review Form */}
                    <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-gray-600/20 rounded-xl p-8 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-6">Share Your Experience</h3>
                        <form onSubmit={handleAddReview} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Your Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={newReview.name}
                                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                        className="w-full px-4 py-2 bg-white/10 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Rating *</label>
                                    <select 
                                        required
                                        value={newReview.rating}
                                        onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                                        className="w-full px-4 py-2 bg-white/10 border border-gray-600/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    >
                                        <option value={5}>5 Stars - Excellent</option>
                                        <option value={4}>4 Stars - Good</option>
                                        <option value={3}>3 Stars - Average</option>
                                        <option value={2}>2 Stars - Poor</option>
                                        <option value={1}>1 Star - Terrible</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-white mb-2">Your Review *</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={newReview.text}
                                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/10 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                                    placeholder="Share your experience with us..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(251, 191, 36, 0.3) 25%, rgba(251, 191, 36, 0.3) 26%, transparent 27%, transparent 74%, rgba(251, 191, 36, 0.3) 75%, rgba(251, 191, 36, 0.3) 76%, transparent 77%, transparent),
                                        linear-gradient(90deg, transparent 24%, rgba(251, 191, 36, 0.3) 25%, rgba(251, 191, 36, 0.3) 26%, transparent 27%, transparent 74%, rgba(251, 191, 36, 0.3) 75%, rgba(251, 191, 36, 0.3) 76%, transparent 77%, transparent)`,
                    backgroundSize: '50px 50px'
                }}></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Ready to transform your business with our IT solutions?
                    </p>
                    <button 
                        onClick={() => setShowContactForm(true)}
                        className="px-8 py-3 bg-yellow-400 text-slate-900 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50"
                    >
                        Start Your Project
                    </button>
                </div>
            </section>

            {/* Contact Form Popup */}
            {showContactForm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={handleCloseForm}
                    ></div>

                    <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl max-w-2xl w-full relative z-10 border border-gray-700 overflow-hidden">
                        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'}}></div>
                        
                        <button
                            onClick={handleCloseForm}
                            className="absolute top-6 right-6 p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 z-20"
                        >
                            <X className="w-6 h-6 text-gray-400 hover:text-gray-200" />
                        </button>

                        <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
                                        <Mail className="w-7 h-7 text-black" />
                                    </div>
                                    <div>
                                        <h2 className="text-4xl font-bold text-white">Schedule Consultation</h2>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-lg">Tell us about your project and let's create something amazing together</p>
                            </div>

                            <div className="space-y-5">
                                {[
                                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
                                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
                                    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: false }
                                ].map((field) => (
                                    <div key={field.name}>
                                        <label className="block text-sm font-semibold text-gray-200 mb-2.5 flex items-center gap-1">
                                            {field.label}
                                            {field.required && <span className="text-yellow-500">*</span>}
                                        </label>
                                        <input
                                            type={field.type}
                                            required={field.required}
                                            value={formData[field.name]}
                                            onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                                            placeholder={field.placeholder}
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label className="block text-sm font-semibold text-gray-200 mb-2.5 flex items-center gap-1">
                                        Service Interested In
                                        <span className="text-yellow-500">*</span>
                                    </label>
                                    <select 
                                        required
                                        value={formData.service}
                                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="website">Website Development</option>
                                        <option value="social-media">Social Media Management</option>
                                        <option value="video">Video Editing</option>
                                        <option value="design">Graphic Design</option>
                                        <option value="content">Content Writing</option>
                                        <option value="marketing">Digital Marketing</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-200 mb-2.5">Project Budget</label>
                                    <select 
                                        value={formData.budget}
                                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="499-5000">₹499 - ₹5,000</option>
                                        <option value="5000-9999">₹5,000 - ₹9,999</option>
                                        <option value="9999-19999">₹9,999 - ₹19,999</option>
                                        <option value="19999+">₹19,999+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-200 mb-2.5 flex items-center gap-1">
                                        Project Details
                                        <span className="text-yellow-500">*</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project, timeline, and goals..."
                                    ></textarea>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full py-3.5 bg-yellow-500 text-black rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30"
                                >
                                    Schedule Consultation
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    We'll review your request and get back to you within 24 hours. Your information is secure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AboutUs;
