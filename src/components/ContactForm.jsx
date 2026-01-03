import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { 
  Mail, ArrowRight, User, Phone, MessageSquare, 
  Briefcase, ChevronDown, Check, Globe, Smartphone, 
  Video, Palette, PenTool, BarChart, Loader2, X 
} from "lucide-react";
import toast from 'react-hot-toast';

// Custom Dropdown Component (Same as before)
const ServiceDropdown = ({ value, onChange, label, required, options, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="group">
      <label className="block text-sm font-semibold text-slate-900 mb-2 tracking-wide">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={`w-full px-4 py-2.5 border rounded-xl transition-all focus:outline-none duration-200 flex items-center justify-between
            ${isOpen 
              ? 'bg-white shadow-sm' 
              : 'bg-slate-50/50 border-slate-200 group-hover:bg-white group-hover:border-slate-300'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={disabled}
        >
          <div className="flex items-center gap-3">
            <div className="text-slate-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <span className={`${value ? 'text-slate-900' : 'text-slate-400'}`}>
              {selectedOption?.label || "Select service"}
            </span>
          </div>
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && !disabled && (
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
                        <span className="font-medium">{option.label}</span>
                        {option.description && (
                          <span className="text-xs text-slate-500 mt-0.5">{option.description}</span>
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

// Main Contact Form Component
const ContactForm = ({ 
  onClose, 
  defaultService = "", 
  showCloseButton = true,
  compact = false 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    budget: "",
    message: "",
  });

  // EmailJS configuration
  const SERVICE_ID = 'service_u3b22ps';
  const TEMPLATE_ID = 'template_36xnu7f';
  const PUBLIC_KEY = 'oQs_jZRCMrC3szklC';

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  // Service options with icons and descriptions
  const serviceOptions = [
    { 
      value: "website", 
      label: "Website Development", 
      icon: Globe,
      bgColor: "bg-blue-500",
      description: "Responsive & modern websites"
    },
    { 
      value: "social-media", 
      label: "Social Media Management", 
      icon: Smartphone,
      bgColor: "bg-purple-500",
      description: "Engagement & growth strategies"
    },
    { 
      value: "video", 
      label: "Video Editing", 
      icon: Video,
      bgColor: "bg-red-500",
      description: "Professional video production"
    },
    { 
      value: "design", 
      label: "Graphic Design", 
      icon: Palette,
      bgColor: "bg-green-500",
      description: "Visual branding & design"
    },
    { 
      value: "content", 
      label: "Content Writing", 
      icon: PenTool,
      bgColor: "bg-yellow-500",
      description: "SEO-optimized content"
    },
    { 
      value: "marketing", 
      label: "Digital Marketing", 
      icon: BarChart,
      bgColor: "bg-indigo-500",
      description: "Campaigns & analytics"
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast.error("Please fill in all required fields marked with *");
      return;
    }

    setIsSubmitting(true);

    try {
      // Get selected service label
      const selectedService = serviceOptions.find(opt => opt.value === formData.service);
      const serviceLabel = selectedService ? selectedService.label : formData.service;

      // Prepare email template parameters
      const templateParams = {
        to_email: "ashutoshsingh6307@gmail.com",
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
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      toast.success("Thank you! We will contact you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: defaultService,
        budget: "",
        message: "",
      });
      
      // Close modal if onClose function is provided
      if (onClose) {
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Oops! Something went wrong. Please try again or contact us directly at ashutoshsingh6307@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form click to prevent closing when clicking inside
  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className={`bg-white rounded-2xl shadow-2xl w-full ${compact ? 'max-w-lg' : 'max-w-4xl'} h-auto relative transform transition-all duration-300 scale-100`}
      onClick={handleFormClick}
      ref={formRef}
    >
      {showCloseButton && onClose && (
        <button
          onClick={onClose}
          disabled={isSubmitting}
          className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <X className="w-4 h-4 text-slate-600" />
        </button>
      )}

      <div className="p-6 md:p-8">
        <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'} gap-6 md:gap-8`}>
          {/* Left Column - Branding & Info (Hidden in compact mode) */}
          {!compact && (
            <div className="space-y-6">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                  Start Your Project
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Let's discuss your vision. Share your details and we'll craft the perfect solution.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm">Quick Response</h4>
                    <p className="text-xs text-slate-600">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-sm">Expert Consultation</h4>
                    <p className="text-xs text-slate-600">Free initial consultation with our specialists</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column - Form */}
          <div className="space-y-4">
            {compact && (
              <div className="mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center mb-3 shadow-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  Start Your Project
                </h2>
                <p className="text-sm text-slate-600">
                  Share your details and we'll get back to you soon.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { 
                  id: "name", 
                  label: "Full Name", 
                  type: "text", 
                  placeholder: "John Doe",
                  icon: <User className="w-4 h-4" />,
                  required: true
                },
                { 
                  id: "email", 
                  label: "Email Address", 
                  type: "email", 
                  placeholder: "john@example.com",
                  icon: <Mail className="w-4 h-4" />,
                  required: true
                },
                { 
                  id: "phone", 
                  label: "Phone Number", 
                  type: "tel", 
                  placeholder: "+91 98765 43210",
                  icon: <Phone className="w-4 h-4" />,
                  required: false
                },
              ].map(({ id, label, type, placeholder, icon, required }) => (
                <div key={id} className="group">
                  <label className="block text-xs font-semibold text-slate-900 mb-1.5 tracking-wide">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                      {icon}
                    </div>
                    <input
                      type={type}
                      required={required}
                      value={formData[id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [id]: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/50 focus:outline-none group-hover:bg-white group-hover:border-slate-300 transition-all duration-200 focus:bg-white focus:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={placeholder}
                    />
                  </div>
                </div>
              ))}

              {/* Custom Service Dropdown */}
              <ServiceDropdown
                value={formData.service}
                onChange={(value) => setFormData({ ...formData, service: value })}
                label="Service"
                required={true}
                options={serviceOptions}
                disabled={isSubmitting}
              />

              <div className="group">
                <label className="block text-xs font-semibold text-slate-900 mb-1.5 tracking-wide">
                  Project Details <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  required
                  rows={compact ? 2 : 3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  disabled={isSubmitting}
                  className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50/50 resize-none group-hover:bg-white group-hover:border-slate-300 transition-all duration-200 focus:bg-white focus:border-slate-900 focus:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Describe your project goals, requirements, and timeline..."
                ></textarea>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3 rounded-lg font-semibold hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 text-sm group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:from-slate-900 disabled:hover:to-slate-800"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Request</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center leading-relaxed px-2">
                  By submitting, you agree to our Privacy Policy. We respect your confidentiality and never share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;