import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, TrendingUp, Film, Palette, MessageSquare, Globe, CheckCircle, ArrowRight, Mail, X, Target, Zap, Rocket } from 'lucide-react';
import { services, processSteps, faqs } from '../../const';
import FAQSection from '../../components/FAQSection';

function Services() {
  const routerNavigate = useNavigate();
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
        <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold mb-4">
                Our Services
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Professional IT Solutions <span className="block">That Drive Results</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Whether you need a stunning website, powerful marketing strategy, or creative brand identity, we have the expertise to deliver excellence across all disciplines.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: "🎯",
                  title: "Results-Focused",
                  desc: "Every service designed to drive measurable business results"
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  desc: "Efficient processes without compromising on quality"
                },
                {
                  icon: "👥",
                  title: "Expert Team",
                  desc: "Certified professionals with 10+ years of experience"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section 
          id="all-services"
          ref={(el) => (observerRefs.current[0] = el)}
          className="py-20 px-6 bg-white"
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
                            className="bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-colors flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={handleGetStartedClick}
                            className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
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
                              <CheckCircle className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
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
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-slate-600 font-semibold mb-2">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A streamlined approach to delivering excellence
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processStepsWithIcons.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border border-slate-200 rounded-lg p-8 text-center h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-full mb-4 font-bold">
                      {step.step}
                    </div>
                    <div className="text-slate-900 mb-3 flex justify-center">{step.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-300 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Benefits */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-slate-600 font-semibold mb-2">Why Clients Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
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

        {/* CTA Section */}
        <section className="py-20 px-6 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule a free consultation today and discover how we can transform your business
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={handleGetStartedClick}
                className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => routerNavigate('/about')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                Learn About Us
              </button>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              No credit card required • Free 30-minute strategy session
            </p>
          </div>
        </section>
      </div>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
