import { useState, useEffect } from "react";
import { Menu, X, Mail, ArrowRight, Sparkles } from "lucide-react";
import { menuItems } from "../const";

function Navbar({ navigate = () => {}, currentPage = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  const handleGetStartedClick = () => {
    setShowContactForm(true);
    setMobileMenuOpen(false);
  };

  const handleCloseForm = () => setShowContactForm(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });
    setShowContactForm(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 shadow-2xl border-b-2 border-emerald-100' 
          : 'bg-white/80 border-b border-emerald-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
                <div className="relative w-14 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <img src="Logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="animate-fade-in">
                <div className="text-slate-900 text-3xl font-bold tracking-tight group-hover:text-emerald-600 transition-colors">
                  Quinova
                </div>
                <div className="text-emerald-600 text-xs font-semibold animate-gradient-x bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  IT Solutions
                </div>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative text-sm font-semibold transition-all duration-300 animate-fade-in ${
                    currentPage === item.page
                      ? "text-emerald-600"
                      : "text-slate-600 hover:text-emerald-600"
                  } group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full transition-all duration-500 ease-out ${
                      currentPage === item.page
                        ? "w-full opacity-100"
                        : "w-0 group-hover:w-full group-hover:opacity-100 opacity-0"
                    }`}
                  ></span>
                  {/* Hover glow */}
                  {currentPage === item.page && (
                    <span className="absolute inset-0 bg-emerald-100 rounded-lg blur-xl opacity-30 animate-pulse-glow"></span>
                  )}
                </button>
              ))}

              {/* Get Started Button */}
              <button
                onClick={handleGetStartedClick}
                className="get-started-button"
              >
                <div className="button-glow-effect"></div>
                <span className="relative flex items-center gap-2 z-10">
                  <Sparkles className="w-4 h-4 animate-spin-slow" />
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-900 hover:text-emerald-600 transition-all hover:scale-110 relative"
            >
              <div className={`transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-4 space-y-3 border-t-2 border-emerald-100 pt-4 animate-mobile-slide">
              {menuItems.map((item, index) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left py-3 px-4 rounded-xl font-semibold transition-all animate-slide-in-left ${
                    currentPage === item.page
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={handleGetStartedClick}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/30 transition-all animate-bounce-in"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

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
                <h2 className="text-3xl font-bold text-slate-900 mb-2 animate-fade-in-up">
                  Let's Get Started
                </h2>
                <p className="text-slate-600 animate-fade-in-up animation-delay-100">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { id: "name", label: "Full Name *", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Email Address *", type: "email", placeholder: "john@example.com" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
                ].map(({ id, label, type, placeholder }, index) => (
                  <div key={id} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">{label}</label>
                    <input
                      type={type}
                      required={label.includes("*")}
                      value={formData[id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [id]: e.target.value })
                      }
                      className="form-input-green"
                      placeholder={placeholder}
                    />
                  </div>
                ))}

                <div className="animate-slide-in-left animation-delay-300">
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
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
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Project Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
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
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
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
        /* Get Started Button */
        .get-started-button {
          position: relative;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 1rem;
          font-weight: 600;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .get-started-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
        }

        .button-glow-effect {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          border-radius: 1rem;
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .get-started-button:hover .button-glow-effect {
          opacity: 0.7;
          animation: rotate-gradient 3s linear infinite;
        }

        @keyframes rotate-gradient {
          0% {
            transform: rotate(0deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1.1);
          }
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

        /* Animations */
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes mobile-slide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes icon-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
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

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-mobile-slide {
          animation: mobile-slide 0.3s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
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

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
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

export default Navbar;