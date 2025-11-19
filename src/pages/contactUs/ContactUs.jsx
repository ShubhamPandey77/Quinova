import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Award, Users, Clock, Shield, ArrowRight, Sparkles, MessageSquare, Zap } from 'lucide-react';

function ContactUs({ navigate = () => {} }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@itsolutions.com", "support@itsolutions.com"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon-Fri, 9AM - 6PM EST"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Business Street", "New York, NY 10001"],
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const whyChooseUs = [
    { icon: <Award className="w-5 h-5" />, text: "1+ Years of Experience", color: "from-emerald-500 to-teal-600" },
    { icon: <Users className="w-5 h-5" />, text: "10+ Happy Clients", color: "from-green-500 to-emerald-600" },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Support Available", color: "from-teal-500 to-cyan-600" },
    { icon: <Shield className="w-5 h-5" />, text: "100% Satisfaction Guaranteed", color: "from-lime-500 to-green-600" }
  ];

  const faqs = [
    { q: "How long does a typical project take?", a: "Project timelines vary based on scope. A website typically takes 2-4 weeks, while social media management is ongoing. We'll provide a detailed timeline during consultation." },
    { q: "What is your pricing structure?", a: "We offer transparent pricing based on project scope. Check our Services page for starting prices, or contact us for a custom quote tailored to your needs." },
    { q: "Do you offer ongoing support?", a: "Yes! We provide post-launch support and maintenance packages for all our services. We're committed to your long-term success." },
    { q: "Can I see examples of your work?", a: "Absolutely! Check our Portfolio page to see recent projects across all service categories. We can also provide case studies during consultation." }
  ];

  const socialIcons = [
    { Icon: Facebook, color: "from-emerald-500 to-teal-600" },
    { Icon: Twitter, color: "from-green-500 to-emerald-600" },
    { Icon: Instagram, color: "from-teal-500 to-cyan-600" },
    { Icon: Linkedin, color: "from-lime-500 to-green-600" },
    { Icon: Youtube, color: "from-emerald-500 to-teal-600" }
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
                <MessageSquare className="w-4 h-4 animate-wiggle" />
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6 animate-fade-in-up">
              <span className="block">Contact</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent animate-gradient-x">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Let's discuss how we can help transform your business with our IT solutions
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section 
          id="contact-section"
          ref={(el) => (observerRefs.current[0] = el)}
          className="py-20 px-6 bg-white relative overflow-hidden"
        >
          <div className="grid-background"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className={`space-y-8 ${isVisible['contact-section'] ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Let's Talk About 
                    <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Your Project
                    </span>
                  </h2>
                  <p className="text-slate-600 text-lg">
                    We're here to help bring your ideas to life. Whether you need a website, social media management, or any other digital service, we've got you covered.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index}
                      className="contact-info-card"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="contact-info-glow"></div>
                      <div className="relative z-10 flex items-start gap-4">
                        <div className={`contact-icon bg-gradient-to-br ${item.color}`}>
                          <div className="icon-float">{item.icon}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 mb-2 text-lg">{item.title}</div>
                          {item.details.map((detail, idx) => (
                            <div key={idx} className="text-slate-600">{detail}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="pt-8 border-t border-emerald-200">
                  <div className="font-semibold text-slate-900 mb-4 text-lg">Follow Us</div>
                  <div className="flex gap-4">
                    {socialIcons.map(({ Icon, color }, index) => (
                      <div 
                        key={index}
                        className="social-icon-wrapper"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`social-icon bg-gradient-to-br ${color}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="why-choose-card">
                  <div className="why-choose-shine"></div>
                  <div className="relative z-10">
                    <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-emerald-600" />
                      Why Choose Us?
                    </h3>
                    <div className="space-y-4">
                      {whyChooseUs.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-3 text-slate-700 animate-slide-in-left"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={`why-icon bg-gradient-to-br ${item.color}`}>
                            <div className="icon-pulse">{item.icon}</div>
                          </div>
                          <span className="font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`form-container ${isVisible['contact-section'] ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <div className="form-glow"></div>
                <div className="form-border"></div>
                <div className="relative z-10 p-8 md:p-10">
                  <div className="mb-8">
                    <div className="form-icon-container">
                      <Mail className="w-8 h-8 text-white animate-wiggle" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
                    <p className="text-slate-600">We'll get back to you within 24 hours</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      { label: "Full Name *", type: "text", name: "name", placeholder: "John Doe" },
                      { label: "Email Address *", type: "email", name: "email", placeholder: "john@example.com" },
                      { label: "Phone Number", type: "tel", name: "phone", placeholder: "+1 (555) 123-4567" }
                    ].map((field, index) => (
                      <div key={field.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
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

                    <div className="animate-fade-in-up animation-delay-300">
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

                    <div className="animate-fade-in-up animation-delay-400">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Project Budget</label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="form-input"
                      >
                        <option value="">Select budget range</option>
                        <option value="100-200">$100 - $200</option>
                        <option value="200-500">$200 - $500</option>
                        <option value="500-1000">$500 - $1000</option>
                        <option value="1000+">$1,000+</option>
                      </select>
                    </div>

                    <div className="animate-fade-in-up animation-delay-500">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Project Details *</label>
                      <textarea
                        required
                        rows={5}
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
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          id="faq-section"
          ref={(el) => (observerRefs.current[1] = el)}
          className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden"
        >
          <div className="wave-container">
            <div className="wave"></div>
            <div className="wave wave-2"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className={`text-center mb-12 ${isVisible['faq-section'] ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-emerald-600 font-semibold text-lg">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">Quick answers to common questions</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-card ${isVisible['faq-section'] ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="faq-shine"></div>
                  <div className="relative z-10">
                    <h3 className="font-bold text-slate-900 text-lg mb-3">{faq.q}</h3>
                    <p className="text-slate-600">{faq.a}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Fill out the form above or give us a call. We're here to help!
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cta-button"
            >
              <span className="relative z-10">Back to Top</span>
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

        /* Contact Info Card */
        .contact-info-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(209, 250, 229, 0.5));
          border: 2px solid #d1fae5;
          border-radius: 1.25rem;
          padding: 1.5rem;
          animation: scale-in 0.6s ease-out;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(16, 185, 129, 0.2);
          border-color: #10b981;
        }

        .contact-info-glow {
          position: absolute;
          inset: -20px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1));
          border-radius: 1.25rem;
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-info-card:hover .contact-info-glow {
          opacity: 1;
        }

        .contact-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          flex-shrink: 0;
          color: white;
        }

        .contact-info-card:hover .contact-icon {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 12px 30px rgba(16, 185, 129, 0.4);
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

        /* Social Icons */
        .social-icon-wrapper {
          animation: bounce-in 0.6s ease-out;
        }

        .social-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .social-icon:hover {
          transform: translateY(-5px) scale(1.1) rotate(5deg);
          box-shadow: 0 12px 30px rgba(16, 185, 129, 0.4);
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

        /* Why Choose Us Card */
        .why-choose-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(209, 250, 229, 0.5));
          border: 2px solid #d1fae5;
          border-radius: 1.5rem;
          padding: 2rem;
          animation: scale-in 0.6s ease-out;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .why-choose-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
          border-color: #10b981;
        }

        .why-choose-shine {
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

        .why-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          color: white;
          transition: all 0.3s ease;
        }

        .why-choose-card:hover .why-icon {
          transform: scale(1.1) rotate(5deg);
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

        /* Form Container */
        .form-container {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(209, 250, 229, 0.5));
          border: 2px solid #d1fae5;
          border-radius: 1.5rem;
          animation: scale-in 0.6s ease-out;
          transition: all 0.5s ease;
          overflow: hidden;
        }

        .form-container:hover {
          box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
          border-color: #10b981;
        }

        .form-glow {
          position: absolute;
          inset: -30px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(20, 184, 166, 0.2));
          border-radius: 1.5rem;
          filter: blur(30px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .form-container:hover .form-glow {
          opacity: 1;
        }

        .form-border {
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

        .form-container:hover .form-border {
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

        .form-icon-container {
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

        /* FAQ Card */
        .faq-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(209, 250, 229, 0.5));
          border: 2px solid #d1fae5;
          border-radius: 1.5rem;
          padding: 1.5rem;
          animation: scale-in 0.6s ease-out;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .faq-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(16, 185, 129, 0.2);
          border-color: #10b981;
        }

        .faq-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          transform: skewX(-20deg);
          transition: left 0.5s ease;
        }

        .faq-card:hover .faq-shine {
          left: 200%;
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

export default ContactUs;