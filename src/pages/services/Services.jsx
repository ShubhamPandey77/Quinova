import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, TrendingUp, Film, Palette, MessageSquare, Globe, CheckCircle, ArrowRight, Mail, X, Target, Zap, Rocket } from 'lucide-react';
import { services, processSteps, faqs } from '../../const';
import FAQSection from '../../components/FAQSection';
import { Particles } from "@/components/ui/particles";

function Services() {
  const routerNavigate = useNavigate();
  const [particleColor] = useState("#1660cd");
  const servicePaths = [
    '/services/website-development',
    '/services/social-media-management',
    '/services/video-editing',
    '/services/graphic-design',
    '/services/content-writing',
    '/services/digital-marketing'
  ];
  const [showContactForm, setShowContactForm] = useState(false);
  // eslint-disable-next-line no-unused-vars
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

  const servicesWithIcons = services.map((service, index) => ({
    ...service,
    icon: [<Code className="w-12 h-12" />, <TrendingUp className="w-12 h-12" />, <Film className="w-12 h-12" />, <Palette className="w-12 h-12" />, <MessageSquare className="w-12 h-12" />, <Globe className="w-12 h-12" />][index]
  }));

  const processStepsWithIcons = processSteps.map((step, index) => ({
    ...step,
    icon: [<Target className="w-6 h-6" />, <Zap className="w-6 h-6" />, <Rocket className="w-6 h-6" />, <CheckCircle className="w-6 h-6" />][index]
  }));

  return (
    <>
      <div className="pt-16 bg-white">
        {/* Hero Section */}
        <section className="relative py-40 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
          {/* Particles Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Particles
              className="w-full h-full"
              quantity={80}
              vx={0.2}
              vy={0.5}
              staticity={40}
              size={0.8}
              ease={30}
              color={particleColor}
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 space-y-8 max-w-3xl mx-auto">
              <style>{`
                @keyframes slideInUp {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                .line-1 {
                  animation: slideInUp 1s ease-out 0.1s forwards;
                  opacity: 0;
                }
                .line-2 {
                  animation: slideInUp 1s ease-out 0.3s forwards;
                  opacity: 0;
                }
                .line-3 {
                  animation: slideInUp 1s ease-out 0.5s forwards;
                  opacity: 0;
                }
                .line-4 {
                  animation: slideInUp 1s ease-out 0.7s forwards;
                  opacity: 0;
                }
                .gradient-text {
                  background: linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                }
                .fill-button {
                  position: relative;
                  overflow: hidden;
                  border: 2px solid #1e293b;
                  background-color: transparent;
                  color: #1e293b;
                  transition: color 0.3s ease;
                }
                .fill-button::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: -100%;
                  width: 100%;
                  height: 100%;
                  background-color: #1e293b;
                  transition: left 0.6s ease;
                  z-index: -1;
                }
                .fill-button:hover {
                  color: white;
                }
                .fill-button:hover::before {
                  left: 0;
                }
              `}</style>
              
              <div className="line-1">
                <span className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold mb-4">
                  Our Services
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight line-2">
                <span className="gradient-text">Professional IT Solutions</span>
                <span className="block">That Drive Results</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed line-3">
                Whether you need a stunning website, powerful marketing strategy, or creative brand identity, we have the expertise to deliver excellence across all disciplines.
              </p>

              <div className="flex justify-center line-4">
                <button 
                  onClick={handleGetStartedClick}
                  className="fill-button px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto line-4" style={{ animationDelay: '0.9s' }}>
              {[
                {
                  icon: "🎯",
                  title: "Results-Focused",
                  color: "bg-blue-50"
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  color: "bg-amber-50"
                },
                {
                  icon: "👥",
                  title: "Expert Team",
                  color: "bg-purple-50"
                }
              ].map((item, index) => (
                <div key={index} className={`${item.color} rounded-lg p-6 text-center hover:shadow-lg transition-shadow`}>
                  <div className="text-2xl mb-3 flex justify-center">{item.icon}</div>
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section 
          id="all-services"
          ref={(el) => (observerRefs.current[0] = el)}
          className="py-10 px-6 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {servicesWithIcons.map((service, index) => (
                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div>
                      <div className="text-slate-900 mb-4 text-5xl">{service.icon}</div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                      <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                      <p className="text-slate-700 leading-relaxed mb-6">{service.longDescription}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        <div>
                          <div className="text-3xl font-bold text-slate-900">{service.price}</div>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => routerNavigate(servicePaths[index])}
                            className="fill-button px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={handleGetStartedClick}
                            className="fill-button px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                          >
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-4">✨ Key Features</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700">
                              <CheckCircle className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>


                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
       <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-20">
      <span className="text-gray-500 font-medium tracking-wide uppercase">
        Our Approach
      </span>
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-3">
        Our Process
      </h2>
      <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
        A refined workflow that ensures clarity, quality, and seamless delivery.
      </p>
    </div>

    {/* Steps */}
    <div className="grid md:grid-cols-4 gap-10">
      {processStepsWithIcons.map((step, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center text-center"
        >
          {/* Step Number */}
          <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-semibold shadow-md">
            {step.step}
          </div>

          {/* Icon */}
          <div className="mt-6 mb-4 text-gray-800 flex justify-center">
            {step.icon}
          </div>

          {/* Text */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {step.desc}
          </p>

          {/* Line Indicator */}
          {index < processStepsWithIcons.length - 1 && (
            <div className="hidden md:block absolute top-1/2 right-[-2rem] w-10 h-[1px] bg-gradient-to-r from-gray-300 to-gray-100"></div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Client Benefits */}
        <section className="py-14 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-slate-600 font-semibold mb-4">Why Clients Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                Partnership That Delivers
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Strategic Approach",
                  points: ["Deep understanding of your business", "Market research & competitor analysis", "Custom strategy tailored to goals"]
                },
                {
                  title: "Quality Execution",
                  points: ["Expert team with proven track record", "Latest technologies & best practices", "Meticulous attention to detail"]
                },
                {
                  title: "Transparent Communication",
                  points: ["Regular updates and reporting", "Clear milestones & deliverables", "Direct access to your project manager"]
                },
                {
                  title: "Long-Term Support",
                  points: ["Post-launch optimization", "Ongoing support & maintenance", "Continuous improvement strategies"]
                }
              ].map((item, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <span className="text-slate-900 font-bold mt-1">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />
      </div>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleCloseForm}
          ></div>

          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors z-10"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Get Started</h2>
                <p className="text-slate-600">Fill out the form and we'll get back to you within 24 hours</p>
              </div>

              <div className="space-y-5">
                {[
                  { id: "name", label: "Full Name *", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Email Address *", type: "email", placeholder: "john@example.com" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-sm font-medium text-slate-900 mb-2">{label}</label>
                    <input
                      type={type}
                      required={label.includes("*")}
                      value={formData[id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [id]: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                      placeholder={placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors bg-white"
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
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Project Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="499-5000">₹499 - ₹5,000</option>
                    <option value="5000-9999">₹5,000 - ₹9,999</option>
                    <option value="9999-19999">₹9,999 - ₹19,999</option>
                    <option value="19999+">₹19,999+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-sm text-slate-600 text-center">
                  We'll respond within 24 hours. Your information is confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
