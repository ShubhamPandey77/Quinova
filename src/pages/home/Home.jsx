
import { useState, useEffect, useRef } from 'react';
import { Code, Globe, TrendingUp, Film, Palette, Zap, ArrowRight, Star, Mail, X, CheckCircle, Users, Award, Target, Sparkles, Rocket, Clock, Heart } from 'lucide-react';
import { stats, services, testimonials, features } from '../../const';

function Home({ navigate = () => {} }) {
  const [showContactForm, setShowContactForm] = useState(false);
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

  const statsWithIcons = stats.map((stat, index) => ({
    ...stat,
    icon: [<Target className="w-5 h-5" />, <Users className="w-5 h-5" />, <Award className="w-5 h-5" />, <CheckCircle className="w-5 h-5" />][index]
  }));

  const servicesWithIcons = [
    { ...services[0], icon: <Code className="w-6 h-6" />, title: "Web Development" },
    { ...services[1], icon: <TrendingUp className="w-6 h-6" />, title: "Social Media" },
    { ...services[2], icon: <Film className="w-6 h-6" />, title: "Video Editing" },
    { ...services[3], icon: <Palette className="w-6 h-6" />, title: "Graphic Design" },
  ];

  const featuresWithIcons = features.map((feature, index) => ({
    ...feature,
    icon: [<Rocket className="w-6 h-6" />, <Clock className="w-6 h-6" />, <Heart className="w-6 h-6" />][index]
  }));

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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden">
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
        
        {/* Dotted Pattern Background */}
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-block animate-bounce-slow">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-emerald-400/30 flex items-center gap-2 w-fit animate-pulse-glow">
                  <Sparkles className="w-4 h-4 animate-spin-slow" />
                  Premium IT Solutions
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                <span className="inline-block animate-fade-in-up">Elevate Your</span>
                <span className="block mt-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent animate-gradient-x">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
                We deliver cutting-edge IT solutions including web development, social media management, video editing, and graphic design to transform your business.
              </p>
              
              {/* Animated Features */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
                {featuresWithIcons.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200 animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-emerald-600 animate-wiggle">{feature.icon}</div>
                    <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
                <button 
                  onClick={() => navigate('services')}
                  className="button-primary group"
                >
                  <span className="relative z-10">Explore Services</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                  <div className="button-shine"></div>
                </button>
                <button 
                  onClick={handleGetStartedClick}
                  className="button-secondary group"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="button-glow"></div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {statsWithIcons.map((stat, index) => (
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
                      <div className="text-3xl font-bold bg-gradient-to-br from-emerald-700 to-teal-700 bg-clip-text text-transparent counter">
                        {stat.number}
                      </div>
                      <div className="text-xs text-slate-600 mt-1 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="relative animate-slide-in-right">
              <div className="floating-gradient"></div>
              <div className="relative grid grid-cols-2 gap-4">
                {servicesWithIcons.map((service, index) => (
                  <div
                    key={index}
                    className="service-card"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="service-card-glow"></div>
                    <div className="relative z-10">
                      <div className={`service-icon bg-gradient-to-br ${service.color}`}>
                        <div className="icon-float">{service.icon}</div>
                      </div>
                      <div className="text-slate-900 font-semibold text-sm mt-4">{service.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section 
        id="services-section"
        ref={(el) => (observerRefs.current[0] = el)}
        className="py-20 px-6 bg-white relative overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="grid-background"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 ${isVisible['services-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-emerald-600 font-semibold text-lg animate-bounce-in">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 animate-gradient-x">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-8 h-8" />, title: "Web Development", desc: "Custom, responsive websites built with modern technologies", color: "from-emerald-500 to-teal-600" },
              { icon: <Zap className="w-8 h-8" />, title: "Digital Marketing", desc: "Strategic campaigns that drive real business results", color: "from-green-500 to-emerald-600" },
              { icon: <Film className="w-8 h-8" />, title: "Video Production", desc: "Professional video editing and content creation", color: "from-teal-500 to-cyan-600" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`feature-card ${isVisible['services-section'] ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="feature-card-shine"></div>
                <div className="feature-card-border"></div>
                <div className="relative z-10">
                  <div className={`feature-icon bg-gradient-to-br ${item.color}`}>
                    <div className="icon-pulse">{item.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                  <button 
                    onClick={() => navigate('services')}
                    className="mt-6 text-emerald-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('services')}
              className="button-primary"
            >
              <span className="relative z-10">View All Services</span>
              <div className="button-shine"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials-section"
        ref={(el) => (observerRefs.current[1] = el)}
        className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden"
      >
        {/* Animated waves */}
        <div className="wave-container">
          <div className="wave"></div>
          <div className="wave wave-2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 ${isVisible['testimonials-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-emerald-600 font-semibold text-lg">Client Success</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-card ${isVisible['testimonials-section'] ? 'animate-flip-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="testimonial-shine"></div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-emerald-500 text-emerald-500 animate-star-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="avatar-glow">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {testimonial.avatar}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 text-white relative overflow-hidden">
        {/* Animated rays */}
        <div className="rays-container">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="ray" style={{ transform: `rotate(${i * 30}deg)` }}></div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-text-shimmer">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 animate-fade-in-up animation-delay-200">
            Let's discuss how we can help transform your business with our IT solutions
          </p>
          <button 
            onClick={handleGetStartedClick}
            className="cta-button"
          >
            <span className="relative z-10">Get Free Consultation</span>
            <div className="cta-ripple"></div>
          </button>
        </div>
      </section>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-modal-fade-in">
          <div 
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm animate-backdrop-blur"
            onClick={handleCloseForm}
          ></div>

          <div className="modal-container animate-modal-bounce">
            <div className="modal-glow"></div>
            
            <button
              onClick={handleCloseForm}
              className="close-button"
            >
              <X className="w-5 h-5 text-emerald-700" />
            </button>

            <div className="relative p-8 md:p-10">
              <div className="mb-8">
                <div className="icon-container">
                  <Mail className="w-8 h-8 text-white animate-wiggle" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2 animate-fade-in-up">Let's Get Started</h2>
                <p className="text-slate-600 animate-fade-in-up animation-delay-100">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Full Name *", type: "text", name: "name", placeholder: "John Doe" },
                  { label: "Email Address *", type: "email", name: "email", placeholder: "john@example.com" },
                  { label: "Phone Number", type: "tel", name: "phone", placeholder: "+91 98765 43210" }
                ].map((field, index) => (
                  <div key={field.name} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      required={field.label.includes('*')}
                      value={formData[field.name]}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                      className="form-input"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div className="animate-slide-in-left animation-delay-300">
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Service Interested In *</label>
                  <select 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="form-input"
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

                <div className="animate-slide-in-left animation-delay-400">
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Project Budget</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="form-input"
                  >
                    <option value="">Select budget range</option>
                    <option value="500-5000">₹500 - ₹5,000</option>
                    <option value="5000-25000">₹5,000 - ₹25,000</option>
                    <option value="25000-50000">₹25,000 - ₹50,000</option>
                    <option value="50000+">₹50,000+</option>
                  </select>
                </div>

                <div className="animate-slide-in-left animation-delay-500">
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="form-input"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="submit-button"
                >
                  <span className="relative z-10">Send Message</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                  <div className="submit-ripple"></div>
                </button>

                <p className="text-sm text-slate-600 text-center animate-fade-in-up animation-delay-600">
                  We'll respond within 24 hours. Your information is kept confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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

        /* Floating Particles */
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

        /* Animated Blobs */
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
          animation-delay: 0s;
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

        /* Scrolling Dots */
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

        /* Button Styles */
        .button-primary {
          position: relative;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          color: white;
          padding: 1rem 2rem;
          border-radius: 1rem;
          font-weight: bold;
          font-size: 1.125rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
        }

        .button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          50%, 100% {
            left: 100%;
          }
        }

        .button-secondary {
          position: relative;
          background: white;
          color: #10b981;
          padding: 1rem 2rem;
          border-radius: 1rem;
          font-weight: bold;
          font-size: 1.125rem;
          border: 2px solid #d1fae5;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-secondary:hover {
          border-color: #10b981;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
        }

        .button-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #d1fae5, #a7f3d0);
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

        /* Service Card */
        .service-card {
          position: relative;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 2px solid #d1fae5;
          border-radius: 1rem;
          padding: 1.5rem;
          cursor: pointer;
          animation: scale-in 0.5s ease-out;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.05) rotate(-2deg);
          border-color: #10b981;
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
        }

        .service-card-glow {
          position: absolute;
          inset: -20px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2));
          border-radius: 1rem;
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .service-card-glow {
          opacity: 1;
        }

        .service-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.2) rotate(12deg);
          box-shadow: 0 12px 24px rgba(16, 185, 129, 0.4);
        }

        .icon-float {
          animation: float-icon 3s ease-in-out infinite;
        }

        @keyframes float-icon {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .floating-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1));
          border-radius: 1.5rem;
          filter: blur(30px);
          animation: pulse-gradient 4s ease-in-out infinite;
        }

        @keyframes pulse-gradient {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
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

        /* Testimonial Card */
        .testimonial-card {
          position: relative;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 2px solid #d1fae5;
          animation: flip-in 0.6s ease-out;
          transition: all 0.4s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-10px) rotateY(5deg);
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
          border-color: #10b981;
        }

        .testimonial-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          transform: skewX(-20deg);
          transition: left 0.5s ease;
        }

        .testimonial-card:hover .testimonial-shine {
          left: 200%;
        }

        @keyframes flip-in {
          0% {
            transform: perspective(1000px) rotateY(-90deg);
            opacity: 0;
          }
          100% {
            transform: perspective(1000px) rotateY(0);
            opacity: 1;
          }
        }

        @keyframes star-bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }

        .animate-star-bounce {
          animation: star-bounce 0.6s ease-in-out;
        }

        .avatar-glow {
          animation: avatar-pulse 2s ease-in-out infinite;
        }

        @keyframes avatar-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 0 rgba(16, 185, 129, 0));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.8));
          }
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

        /* Rays Animation */
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

        /* Modal Animations */
        @keyframes modal-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-modal-fade-in {
          animation: modal-fade-in 0.3s ease-out;
        }

        @keyframes backdrop-blur {
          from {
            backdrop-filter: blur(0px);
          }
          to {
            backdrop-filter: blur(8px);
          }
        }

        .animate-backdrop-blur {
          animation: backdrop-blur 0.3s ease-out;
        }

        @keyframes modal-bounce {
          0% {
            transform: scale(0.3) translateY(100px);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-modal-bounce {
          animation: modal-bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .modal-container {
          position: relative;
          background: linear-gradient(135deg, white, rgba(209, 250, 229, 0.3));
          border-radius: 1.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          max-width: 42rem;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border: 2px solid #d1fae5;
        }

        .modal-glow {
          position: absolute;
          inset: -30px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(20, 184, 166, 0.3));
          border-radius: 1.5rem;
          filter: blur(40px);
          z-index: -1;
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .close-button {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 2.5rem;
          height: 2.5rem;
          background: white;
          border: 2px solid #d1fae5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .close-button:hover {
          background: #d1fae5;
          transform: scale(1.1) rotate(90deg);
          border-color: #10b981;
        }

        .icon-container {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
          animation: icon-bounce 1s ease-in-out infinite;
        }

        @keyframes icon-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 2px solid #d1fae5;
          outline: none;
          transition: all 0.3s ease;
          background: white;
        }

        .form-input:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
          transform: translateY(-2px);
        }

        .form-input:hover {
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
        }

        .submit-button {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-weight: bold;
          font-size: 1.125rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        }

        .submit-button:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(16, 185, 129, 0.4);
        }

        .submit-ripple {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #14b8a6, #10b981);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .submit-button:hover .submit-ripple {
          opacity: 1;
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

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
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

export default Home;