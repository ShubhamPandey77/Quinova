// components/Navbar.jsx
import { useState } from "react";
import { Code, Menu, X, Mail, ArrowRight } from "lucide-react";

function Navbar({ navigate, currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

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
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md shadow-2xl z-50 border-b border-gray-800 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-white text-2xl font-bold tracking-tight">
                  IT Solutions
                </div>
                <div className="text-gray-400 text-xs">Digital Excellence</div>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    currentPage === item.page
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  } group`}
                >
                  {item.name}
                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-gray-300 to-white rounded-full transition-all duration-500 ease-out ${
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
                className="relative px-6 py-2.5 font-semibold text-black bg-white rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white transition-transform hover:scale-110"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-4 space-y-4 border-t border-gray-800 pt-4 animate-slideDown">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className="block w-full text-left py-2 text-gray-400 hover:text-white font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={handleGetStartedClick}
                className="w-full bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleCloseForm}
          ></div>

          {/* Form Container */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            {/* Close Button */}
            <button
              onClick={handleCloseForm}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Form Content */}
            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black mb-2">
                  Let's Get Started
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Full Name *", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Email Address *", type: "email", placeholder: "john@example.com" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 123-4567" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-sm font-semibold text-black mb-2">{label}</label>
                    <input
                      type={type}
                      required={label.includes("*")}
                      value={formData[id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [id]: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors bg-white"
                      placeholder={placeholder}
                    />
                  </div>
                ))}

                {/* Service Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Service Interested In *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors bg-white"
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

                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Project Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors resize-none bg-white"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="relative w-full overflow-hidden bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We'll respond within 24 hours. Your information is kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;
