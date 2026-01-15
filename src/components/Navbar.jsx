import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { Menu, X, Mail, ArrowRight, User, Phone, DollarSign, MessageSquare, Briefcase, ChevronDown, Check, Globe, Smartphone, Video, Palette, PenTool, BarChart, Loader2, GraduationCap, BookOpen } from "lucide-react";
import { menuItems } from "../const";
import toast, { Toaster } from 'react-hot-toast'; // Import toast

// Custom Dropdown Component
const ServiceDropdown = ({ value, onChange, label, required, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="group font-sans">
      <label className="block text-sm font-semibold text-slate-900 mb-2 tracking-wide uppercase">
        {label}
        {required && <span className="text-slate-400 ml-1">*</span>}
      </label>
      <div className="relative" ref={dropdownRef}>
        {/* Custom Dropdown Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-2.5 border rounded-xl transition-all focus:outline-none duration-200 flex items-center justify-between
            ${isOpen 
              ? 'bg-white  shadow-sm' 
              : 'bg-slate-50/50 border-slate-200 group-hover:bg-white group-hover:border-slate-300'
            }`}
        >
          <div className="flex items-center gap-3">
            <div className="text-slate-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <span className={`${value ? 'text-slate-900' : 'text-slate-400'} font-medium`}>
              {selectedOption?.label || "Select service"}
            </span>
          </div>
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Custom Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 py-1">
              {options.map((option) => {
                const IconComponent = option.icon;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleOptionClick(option.value, option.label)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-all duration-150
                      ${value === option.value 
                        ? 'bg-slate-50 text-slate-900' 
                        : 'text-slate-700 hover:bg-slate-50/70 hover:text-slate-900'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${option.bgColor}`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="font-medium text-sm">{option.label}</span>
                        {option.description && (
                          <span className="text-[10px] text-slate-500 font-medium">{option.description}</span>
                        )}
                      </div>
                    </div>
                    {value === option.value && (
                      <Check className="w-4 h-4 text-slate-900" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  // EmailJS configuration
  const SERVICE_ID = 'service_u3b22ps';
  const TEMPLATE_ID = 'template_36xnu7f';
  const PUBLIC_KEY = 'oQs_jZRCMrC3szklC';

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  // Service options with icons and descriptions
  const serviceOptions = [
    { 
      value: "website", 
      label: "Website Development", 
      icon: Globe,
      bgColor: "bg-slate-900",
      description: "Responsive & modern websites"
    },
    { 
      value: "app", 
      label: "Android & iOS Development", 
      icon: Smartphone,
      bgColor: "bg-slate-800",
      description: "Native & cross-platform apps"
    },
    { 
      value: "social-media", 
      label: "Social Media Management", 
      icon: MessageSquare,
      bgColor: "bg-slate-900",
      description: "Engagement & growth strategies"
    },
    { 
      value: "video", 
      label: "Video Editing", 
      icon: Video,
      bgColor: "bg-slate-800",
      description: "Professional video production"
    },
    { 
      value: "design", 
      label: "Graphic Design", 
      icon: Palette,
      bgColor: "bg-slate-900",
      description: "Visual branding & design"
    },
    { 
      value: "marketing", 
      label: "Digital Marketing", 
      icon: BarChart,
      bgColor: "bg-slate-800",
      description: "Campaigns & analytics"
    },
    { 
      value: "academic-project", 
      label: "Academic Projects", 
      icon: GraduationCap,
      bgColor: "bg-slate-900",
      description: "Mini & Major project solutions"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStartedClick = () => {
    setShowContactForm(true);
    setMobileMenuOpen(false);
  };

  const handleCloseForm = () => setShowContactForm(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert("Please fill in all required fields marked with *");
      return;
    }

    setIsSubmitting(true);

    try {
      // Get selected service label
      const selectedService = serviceOptions.find(opt => opt.value === formData.service);
      const serviceLabel = selectedService ? selectedService.label : formData.service;

      // Prepare email template parameters
      const templateParams = {
        to_email: "quinovaitsolutions@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        service: serviceLabel,
        budget: formData.budget || "Not specified",
        message: formData.message,
        subject: `New Project Request from ${formData.name}`,
        reply_to: formData.email,
        date: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        toast.success("Thank you! We will contact you soon.");
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
        
        setShowContactForm(false);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Oops! Something went wrong. Please try again or contact us directly at quinovaitsolutions@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form click to prevent closing when clicking inside
  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans ${
        scrolled 
          ? 'bg-[#F2F2F2]/70 backdrop-blur-md shadow-md border-b border-slate-200' 
          : 'bg-[#F2F2F2] border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-24 h-18 flex items-center justify-center">
                <img src="Logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-slate-900 text-xl font-bold tracking-tight">
                  Quinova
                </div>
                <div className="text-slate-600 text-[10px] font-medium tracking-wide">
                  IT Solutions
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={handleGetStartedClick}
                className="bg-slate-900 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-slate-800 transition-all duration-300 shadow-sm"
              >
                Contact Us
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-900 hover:text-slate-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-slate-200 pt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                    location.pathname === item.path
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={handleGetStartedClick}
                className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors shadow-md"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>

      {showContactForm && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-sans"
          onClick={handleCloseForm}
        >
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
          ></div>

          <div 
            className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl h-auto max-h-[85vh] relative transform transition-all duration-300 scale-100 overflow-y-auto custom-scrollbar"
            onClick={handleFormClick}
            ref={formRef}
          >
            <button
              onClick={handleCloseForm}
              disabled={isSubmitting}
              className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center bg-slate-50 rounded-full shadow-sm hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Column - Branding & Info */}
                <div className="space-y-8">
                  <div>
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase italic leading-none">
                      Start Your <br /><span className="text-slate-300">Project</span>
                    </h2>
                    <p className="text-slate-500 leading-relaxed font-medium italic">
                      Let's discuss your vision. Share your details and we'll craft the perfect solution.
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Quick Response</h4>
                        <p className="text-xs text-slate-500 font-medium">We'll get back to you within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Expert Consultation</h4>
                        <p className="text-xs text-slate-500 font-medium">Free initial consultation with our specialists</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="bg-slate-50/50 p-6 md:p-8 rounded-[2rem] border border-slate-100">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { id: "name", label: "Full Name", type: "text", placeholder: "John Doe", icon: <User className="w-4 h-4" />, required: true },
                      { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com", icon: <Mail className="w-4 h-4" />, required: true },
                      { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210", icon: <Phone className="w-4 h-4" />, required: false },
                    ].map(({ id, label, type, placeholder, icon, required }) => (
                      <div key={id} className="group">
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1">
                          {label} {required && <span className="text-slate-300">*</span>}
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors">
                            {icon}
                          </div>
                          <input
                            type={type}
                            required={required}
                            value={formData[id]}
                            onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                            disabled={isSubmitting}
                            className="w-full pl-12 pr-4 py-3 text-sm border-2 border-transparent rounded-2xl bg-white focus:outline-none focus:border-slate-900 shadow-sm transition-all font-medium"
                            placeholder={placeholder}
                          />
                        </div>
                      </div>
                    ))}

                    <ServiceDropdown
                      value={formData.service}
                      onChange={(value) => setFormData({ ...formData, service: value })}
                      label="Service"
                      required={true}
                      options={serviceOptions}
                    />

                    <div className="group">
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1">
                        Project Details <span className="text-slate-300">*</span>
                      </label>
                      <textarea
                        required
                        rows="3"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 text-sm border-2 border-transparent rounded-2xl bg-white focus:outline-none focus:border-slate-900 shadow-sm resize-none transition-all font-medium"
                        placeholder="Describe your project goals..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Request
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Toaster position="bottom-right" />
    </>
  );
}

export default Navbar;
