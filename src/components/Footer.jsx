import { useState } from 'react';
import { Mail, Facebook, Instagram, Linkedin, ArrowRight, X, Sparkles, Heart } from 'lucide-react';
import { socialLinks } from '../const';

function Footer({ navigate = () => {} }) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleContactClick = () => {
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

  const socialLinksWithIcons = socialLinks.map((link, index) => ({
    ...link,
    Icon: [Facebook, Instagram, Linkedin][index]
  }));

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-blob-delayed"></div>
        </div>

        {/* Dotted Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
                  <img 
                    className="relative h-14 w-16 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300" 
                    src="Logo.png" 
                    alt="logo" 
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
                    Quinova
                  </div>
                  <div className="text-emerald-400 text-sm font-semibold">Digital Excellence</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed animate-fade-in-up animation-delay-100">
                Your trusted partner for comprehensive IT solutions. We transform businesses through innovative web development, social media management, video editing, and graphic design services.
              </p>
              <div className="flex gap-4 animate-fade-in-up animation-delay-200">
                {socialLinksWithIcons.map(({ Icon, link, color }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon-container ${color}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="social-icon-glow"></div>
                    <Icon className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up animation-delay-300">
              <h3 className="font-bold text-lg mb-4 text-emerald-400 flex items-center gap-2">
                <Sparkles className="w-5 h-5 animate-pulse" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', page: 'home' },
                  { name: 'Services', page: 'services' },
                  { name: 'About Us', page: 'about' },
                  { name: 'Contact', action: handleContactClick }
                ].map((item, index) => (
                  <li key={index} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <button 
                      onClick={item.action || (() => navigate(item.page))} 
                      className="footer-link group"
                    >
                      <span className="link-arrow">→</span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fade-in-up animation-delay-400">
              <h3 className="font-bold text-lg mb-4 text-emerald-400 flex items-center gap-2">
                <Heart className="w-5 h-5 animate-pulse" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {[
                  'Website Development',
                  'Social Media Management',
                  'Video Editing',
                  'Graphic Design',
                  'Content Writing',
                  'Digital Marketing'
                ].map((service, index) => (
                  <li 
                    key={index} 
                    className="footer-link cursor-pointer animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="link-arrow">→</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up animation-delay-500">
            <div className="text-slate-400 text-sm">
              © 2024 Quinova. All rights reserved. Built with{' '}
              <Heart className="inline w-4 h-4 text-emerald-500 animate-pulse" />{' '}
              and excellence.
            </div>
            <div className="flex gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy, index) => (
                <button 
                  key={index}
                  className="text-slate-400 hover:text-emerald-400 transition-colors relative group"
                >
                  {policy}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          onClick={handleContactClick}
          className="floating-action-button"
          title="Contact Us"
        >
          <div className="fab-glow"></div>
          <Mail className="w-6 h-6 relative z-10 animate-wiggle" />
          <div className="fab-ripple"></div>
        </button>
      </footer>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-modal-fade-in">
          <div 
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm animate-backdrop-blur"
            onClick={handleCloseForm}
          ></div>

          <div className="modal-container animate-modal-bounce">
            <div className="modal-glow-green"></div>
            
            <button
              onClick={handleCloseForm}
              className="close-button-green"
            >
              <X className="w-5 h-5 text-emerald-700" />
            </button>

            <div className="relative p-8 md:p-10">
              <div className="mb-8">
                <div className="icon-container-green">
                  <Mail className="w-8 h-8 text-white animate-wiggle" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2 animate-fade-in-up">Let's Get Started</h2>
                <p className="text-slate-600 animate-fade-in-up animation-delay-100">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <div className="space-y-6">
                {[
                  { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'John Doe' },
                  { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@example.com' },
                  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' }
                ].map((field, index) => (
                  <div key={field.name} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      required={field.label.includes('*')}
                      value={formData[field.name]}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                      className="form-input-green"
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
                    className="form-input-green"
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
                    className="form-input-green"
                  >
                    <option value="">Select budget range</option>
                    <option value="499-5000">₹499 - ₹5,000</option>
                    <option value="5000-9999">₹5,000 - ₹9,999</option>
                    <option value="9999-19999">₹9,999 - ₹19,999</option>
                    <option value="19999+">₹19,999+</option>
                  </select>
                </div>

                <div className="animate-slide-in-left animation-delay-500">
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="form-input-green resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="submit-button-green"
                >
                  <span className="relative z-10">Send Message</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                  <div className="submit-ripple-green"></div>
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
        /* Social Icons */
        .social-icon-container {
          position: relative;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(15, 23, 42, 0.8);
          border: 2px solid rgba(16, 185, 129, 0.3);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          animation: bounce-in 0.6s ease-out;
        }

        .social-icon-container:hover {
          transform: translateY(-5px) scale(1.1) rotate(5deg);
          border-color: #10b981;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
        }

        .social-icon-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .social-icon-container:hover .social-icon-glow {
          opacity: 1;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Footer Links */
        .footer-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 0;
        }

        .footer-link:hover {
          color: #10b981;
          padding-left: 0.5rem;
        }

        .link-arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          color: #10b981;
        }

        .footer-link:hover .link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Floating Action Button */
        .floating-action-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 3.5rem;
          height: 3.5rem;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 40;
          overflow: hidden;
          animation: fab-bounce 2s ease-in-out infinite;
        }

        .floating-action-button:hover {
          transform: scale(1.15) rotate(10deg);
          box-shadow: 0 12px 35px rgba(16, 185, 129, 0.6);
        }

        .fab-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.5), transparent);
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .fab-ripple {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          animation: ripple-pulse 2s ease-out infinite;
        }

        @keyframes fab-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes ripple-pulse {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        /* Background Animations */
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(50px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-30px, 50px) scale(0.9);
          }
          75% {
            transform: translate(40px, 30px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }

        .animate-blob-delayed {
          animation: blob 20s ease-in-out infinite;
          animation-delay: 5s;
        }

        /* Modal Styles */
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

        .modal-glow-green {
          position: absolute;
          inset: -30px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(20, 184, 166, 0.3));
          border-radius: 1.5rem;
          filter: blur(40px);
          z-index: -1;
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .close-button-green {
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

        .close-button-green:hover {
          background: #d1fae5;
          transform: scale(1.1) rotate(90deg);
          border-color: #10b981;
        }

        .icon-container-green {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
          animation: icon-float 3s ease-in-out infinite;
        }

        .form-input-green {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 2px solid #d1fae5;
          outline: none;
          transition: all 0.3s ease;
          background: white;
        }

        .form-input-green:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
          transform: translateY(-2px);
        }

        .form-input-green:hover {
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
        }

        .submit-button-green {
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

        .submit-button-green:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(16, 185, 129, 0.4);
        }

        .submit-ripple-green {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #14b8a6, #10b981);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .submit-button-green:hover .submit-ripple-green {
          opacity: 1;
        }

        /* General Animations */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes icon-float {
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

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes modal-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes backdrop-blur {
          from {
            backdrop-filter: blur(0px);
          }
          to {
            backdrop-filter: blur(8px);
          }
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

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }

        .animate-modal-fade-in {
          animation: modal-fade-in 0.3s ease-out;
        }

        .animate-backdrop-blur {
          animation: backdrop-blur 0.3s ease-out;
        }

        .animate-modal-bounce {
          animation: modal-bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

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
      `}</style>
    </>
  );
}

export default Footer;