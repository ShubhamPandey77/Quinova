
import { useState, useEffect, useRef } from 'react';
import { Code, Globe, TrendingUp, Film, Palette, Zap, ArrowRight, Star, Mail, X, CheckCircle, Users, Award, Target, Sparkles, Rocket, Clock, Heart, Layers } from 'lucide-react';

function Home({ navigate = () => {} }) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleGetStartedClick = () => {
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
    setShowContactForm(false);
  };

  const stats = [
    { number: "10+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "10+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "1+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const services = [
    { icon: <Code className="w-8 h-8" />, title: "Web Development", description: "Custom, responsive websites built with modern technologies", color: "from-gray-800 to-gray-700" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Social Media Management", description: "Strategic content and campaigns that engage your audience", color: "from-gray-700 to-gray-800" },
    { icon: <Film className="w-8 h-8" />, title: "Video Editing", description: "Professional video production and content creation", color: "from-gray-800 to-gray-700" },
    { icon: <Palette className="w-8 h-8" />, title: "Graphic Design", description: "Eye-catching designs that make your brand stand out", color: "from-gray-700 to-gray-800" },
  ];

  const testimonials = [
    { name: "Aarav Gupta", company: "Studio.labs", text: "They transformed our online presence completely. Our website looks amazing!", rating: 5, avatar: "AG" },
    { name: "Dipanshu Parashar", company: "Virtual Cyber Labs", text: "Professional, creative, and always on time. Highly recommended!", rating: 5, avatar: "DP" },
    { name: "Yuvraj Singh", company: "Comparely", text: "The team understood our vision perfectly. Excellent work!", rating: 5, avatar: "YS" }
  ];

  const features = [
    { icon: <Rocket className="w-6 h-6" />, text: "Fast Delivery" },
    { icon: <Clock className="w-6 h-6" />, text: "24/7 Support" },
    { icon: <Heart className="w-6 h-6" />, text: "Client Focused" }
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

      {/* Hero Section - Card Based with Tech Background */}
      <section className="pt-28 pb-16 px-6 relative min-h-screen flex items-center" style={{
        backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        backgroundSize: '200% 200%',
      }}>
        {/* Tech Grid Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(37, 99, 235, 0.5) 25%, rgba(37, 99, 235, 0.5) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.5) 75%, rgba(37, 99, 235, 0.5) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-800 rounded-full blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-600 rounded-full blur-3xl opacity-10 animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block">
                <div className="flex items-center gap-2 bg-gray-800/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-600/30">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold text-sm">Premium IT Solutions</span>
                </div>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                  Transform Your
                  <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                    Digital Presence
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Elevate your business with cutting-edge web development, social media management, video editing, and graphic design solutions crafted for success.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('services')}
                  className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleGetStartedClick}
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-gray-600/50 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Get Free Consultation
                </button>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 hover:border-yellow-400/30 transition-all">
                    <div className="text-yellow-400">{feature.icon}</div>
                    <span className="text-sm text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Layout */}
      <section 
        id="services-section"
        ref={(el) => (observerRefs.current[0] = el)}
        className="py-20 px-6 relative bg-slate-950" style={{
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-yellow-400 font-semibold text-lg">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth
            </p>
          </div>

          {/* Services Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-gray-600/20 rounded-xl p-8 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <button 
                  onClick={() => navigate('services')}
                  className="flex items-center gap-2 text-yellow-400 font-semibold hover:gap-3 transition-all group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('services')}
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials-section"
        ref={(el) => (observerRefs.current[1] = el)}
        className="py-20 px-6 relative" style={{
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-yellow-400 font-semibold text-lg">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-gray-600/20 rounded-xl p-8 hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help accelerate your growth with our IT solutions
          </p>
          <button 
            onClick={handleGetStartedClick}
            className="px-8 py-3 bg-yellow-400 text-slate-900 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50"
          >
            Get Free Consultation
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

export default Home;
