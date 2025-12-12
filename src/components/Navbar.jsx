import { useState, useEffect } from "react";
import { Menu, X, Mail, ArrowRight, Sparkles } from "lucide-react";

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

  const menuItems = [
    { name: "Home", page: "home" },
    { name: "Services", page: "services" },
    { name: "About", page: "about" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 shadow-xl border-b-2 border-gray-300' 
          : 'bg-white/80 border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-14 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <img src="Logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="text-slate-900 text-3xl font-bold tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                  Quinova
                </div>
                <div className="text-gray-800 text-xs font-semibold bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent">
                  IT Solutions
                </div>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative text-sm font-semibold transition-all duration-300 ${
                    currentPage === item.page
                      ? "text-gray-800"
                      : "text-slate-600 hover:text-gray-800"
                  } group`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full transition-all duration-300 ease-out ${
                      currentPage === item.page
                        ? "w-full opacity-100"
                        : "w-0 group-hover:w-full group-hover:opacity-100 opacity-0"
                    }`}
                  ></span>
                </button>
              ))}

              {/* Get Started Button */}
              <button
                onClick={handleGetStartedClick}
                className="get-started-button"
              >
                <span className="relative flex items-center gap-2 z-10">
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-900 hover:text-gray-800 transition-all hover:scale-110 relative"
            >
              <div className={`transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-4 space-y-3 border-t-2 border-gray-300 pt-4 transition-all duration-300">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left py-3 px-4 rounded-xl font-semibold transition-all ${
                    currentPage === item.page
                      ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={handleGetStartedClick}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:shadow-gray-800/30 transition-all"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 opacity-100 transition-opacity duration-300">
          <div
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            onClick={handleCloseForm}
          ></div>

          <div className="modal-container transition-all duration-300 scale-100">
            <div className="modal-glow-blue"></div>
            
            <button
              onClick={handleCloseForm}
              className="close-button-blue"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="relative p-8 md:p-10">
              <div className="mb-8">
                <div className="icon-container-blue">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Let's Get Started
                </h2>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { id: "name", label: "Full Name *", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Email Address *", type: "email", placeholder: "john@example.com" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">{label}</label>
                    <input
                      type={type}
                      required={label.includes("*")}
                      value={formData[id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [id]: e.target.value })
                      }
                      className="form-input-blue"
                      placeholder={placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="form-input-blue"
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
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Project Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="form-input-blue"
                  >
                    <option value="">Select budget range</option>
                    <option value="499-5000">₹499 - ₹5,000</option>
                    <option value="5000-9999">₹5,000 - ₹9,999</option>
                    <option value="9999-19999">₹9,999 - ₹19,999</option>
                    <option value="19999+">₹19,999+</option>
                  </select>
                </div>

                <div>
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
                    className="form-input-blue resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="submit-button-blue"
                >
                  <span className="relative z-10">Send Message</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </button>

                <p className="text-sm text-slate-600 text-center">
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
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 1rem;
          font-weight: 600;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
          border: none;
          cursor: pointer;
        }

        .get-started-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5);
        }

        /* Modal Styles */
        .modal-container {
          position: relative;
          background: linear-gradient(135deg, white, rgba(219, 234, 254, 0.3));
          border-radius: 1.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          max-width: 42rem;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border: 2px solid #bfdbfe;
        }

        .modal-glow-blue {
          position: absolute;
          inset: -30px;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(79, 70, 229, 0.3));
          border-radius: 1.5rem;
          filter: blur(40px);
          z-index: -1;
        }

        .close-button-blue {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 2.5rem;
          height: 2.5rem;
          background: white;
          border: 2px solid #bfdbfe;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
          cursor: pointer;
        }

        .close-button-blue:hover {
          background: #dbeafe;
          transform: scale(1.1);
          border-color: #2563eb;
        }

        .icon-container-blue {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }

        .form-input-blue {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 2px solid #bfdbfe;
          outline: none;
          transition: all 0.3s ease;
          background: white;
        }

        .form-input-blue:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
          transform: translateY(-2px);
          background: #f0f9ff;
        }

        .form-input-blue:hover {
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
        }

        .submit-button-blue {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
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
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
          border: none;
          cursor: pointer;
        }

        .submit-button-blue:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.4);
        }

        /* Simplified Animations */
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-gradient-x {
          background-size: 200% auto;
        }
      `}</style>
    </>
  );
}

export default Navbar;