import { useState, useEffect, useRef } from 'react';
import { Code, TrendingUp, Film, Palette, MessageSquare, Globe, CheckCircle, ArrowRight, Mail, X, Sparkles, Rocket, Zap, Target } from 'lucide-react';

function Services({ navigate = () => {} }) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
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

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Website Development",
      description: "Custom websites tailored to your business needs with modern design, responsive layouts, and powerful functionality that drives results.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed", "E-commerce Integration", "CMS Integration", "Custom Functionality"],
      price: "Starting at ₹9999",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Social Media Management",
      description: "Grow your online presence with strategic social media marketing, engaging content creation, and data-driven campaign management.",
      features: ["Content Strategy", "Daily Posting", "Community Management", "Analytics & Reporting", "Paid Advertising", "Influencer Outreach"],
      price: "Starting at ₹9999/mo",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Film className="w-12 h-12" />,
      title: "Video Editing",
      description: "Professional video editing services for YouTube, social media, promotional content, and corporate videos that captivate your audience.",
      features: ["Color Grading", "Motion Graphics", "Sound Design", "Subtitles & Captions", "Quick Turnaround", "Multiple Formats"],
      price: "Starting at ₹1999",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Graphic Design",
      description: "Eye-catching designs including logos, posters, marketing materials, and brand identity that make your business stand out.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics", "Print Design", "Packaging Design"],
      price: "Starting at ₹499",
      color: "from-lime-500 to-green-600"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Content Writing",
      description: "Engaging, SEO-optimized content that resonates with your audience and drives conversions across all platforms.",
      features: ["Blog Posts", "Web Copy", "Product Descriptions", "SEO Content", "Email Campaigns", "Technical Writing"],
      price: "Starting at ₹499/article",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, PPC, email marketing, and conversion optimization.",
      features: ["PPC Campaigns", "Email Marketing", "SEO Strategy", "Conversion Optimization", "Marketing Automation", "Analytics Setup"],
      price: "Starting at ₹19999/mo",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const processSteps = [
    { step: "01", title: "Consultation", desc: "We discuss your needs and goals", icon: <Target className="w-6 h-6" /> },
    { step: "02", title: "Planning", desc: "We create a detailed project plan", icon: <Zap className="w-6 h-6" /> },
    { step: "03", title: "Execution", desc: "We bring your vision to life", icon: <Rocket className="w-6 h-6" /> },
    { step: "04", title: "Delivery", desc: "We deliver and support your project", icon: <Sparkles className="w-6 h-6" /> }
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
                Complete IT Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6 animate-fade-in-up">
              <span className="block">Our</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent animate-gradient-x">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Comprehensive IT solutions designed to help your business succeed in the digital world
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section 
          id="services-grid"
          ref={(el) => (observerRefs.current[0] = el)}
          className="py-20 px-6 bg-white relative overflow-hidden"
        >
          <div className="grid-background"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card-detail ${isVisible['services-grid'] ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="service-card-shine"></div>
                  <div className="service-card-border"></div>
                  <div className="relative z-10">
                    <div className={`service-icon-large bg-gradient-to-br ${service.color}`}>
                      <div className="icon-float">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center gap-2 text-slate-700 animate-slide-in-left"
                          style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 animate-check-pop" style={{ animationDelay: `${idx * 0.05}s` }} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-emerald-200 pt-6 flex items-center justify-between">
                      <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{service.price}</span>
                      <button 
                        onClick={handleGetStartedClick}
                        className="get-started-btn group"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section 
          id="process-section"
          ref={(el) => (observerRefs.current[1] = el)}
          className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden"
        >
          <div className="wave-container">
            <div className="wave"></div>
            <div className="wave wave-2"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`text-center mb-16 ${isVisible['process-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-emerald-600 font-semibold text-lg">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Our Process</h2>
              <p className="text-xl text-slate-600">Simple, transparent, and effective</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div 
                  key={index} 
                  className={`process-card ${isVisible['process-section'] ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="process-card-glow"></div>
                  <div className="relative z-10 text-center">
                    <div className="process-number">
                      {item.step}
                    </div>
                    <div className="process-icon-container">
                      <div className="process-icon-bg bg-gradient-to-br from-emerald-500 to-teal-600">
                        <div className="icon-pulse">{item.icon}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
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
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Choose a service and let's get started on your project today
            </p>
            <button 
              onClick={handleGetStartedClick}
              className="cta-button"
            >
              <span className="relative z-10">Contact Us Now</span>
              <div className="cta-ripple"></div>
            </button>
          </div>
        </section>
      </div>

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

              <form onSubmit={handleSubmit} className="space-y-6">
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
                  type="submit"
                  className="submit-button"
                >
                  <span className="relative z-10">Send Message</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                  <div className="submit-ripple"></div>
                </button>

                <p className="text-sm text-slate-600 text-center animate-fade-in-up animation-delay-600">
                  We'll respond within 24 hours. Your information is kept confidential.
                </p>
              </form>
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

        /* Service Card Detail */
        .service-card-detail {
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

        .service-card-detail:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
          border-color: #10b981;
        }

        .service-card-shine {
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

        .service-card-border {
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

        .service-card-detail:hover .service-card-border {
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

        .service-icon-large {
          width: 5rem;
          height: 5rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          color: white;
        }

        .service-card-detail:hover .service-icon-large {
          transform: scale(1.15) rotate(-5deg);
          box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
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

        @keyframes check-pop {
          0% {
            transform: scale(0) rotate(-180deg);
          }
          50% {
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        .animate-check-pop {
          animation: check-pop 0.5s ease-out;
        }

        .get-started-btn {
          background: linear-gradient(135deg, #10b981, #14b8a6);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .get-started-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
        }

        /* Process Card */
        .process-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(209, 250, 229, 0.5));
          border: 2px solid #d1fae5;
          border-radius: 1.5rem;
          padding: 2rem;
          animation: scale-in 0.6s ease-out;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .process-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
          border-color: #10b981;
        }

        .process-card-glow {
          position: absolute;
          inset: -20px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2));
          border-radius: 1.5rem;
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .process-card:hover .process-card-glow {
          opacity: 1;
        }

        .process-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
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

        .process-icon-container {
          margin-bottom: 1rem;
        }

        .process-icon-bg {
          width: 4rem;
          height: 4rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          color: white;
        }

        .process-card:hover .process-icon-bg {
          transform: scale(1.15) rotate(10deg);
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
          cursor: pointer;
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
          border: none;
          cursor: pointer;
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

        @keyframes pulse-glow-badge {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(16, 185, 129, 0.8);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow-badge 2s ease-in-out infinite;
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

export default Services;