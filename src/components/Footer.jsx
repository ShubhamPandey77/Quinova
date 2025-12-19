import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Facebook, Instagram, Linkedin, ArrowRight, X, Phone, MapPin, CheckCircle } from 'lucide-react';
import { socialLinks, footerCompanyInfo, footerLinks, footerTrustBadges, footerContactInfo } from '../const';

function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
    setFormErrors({});
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
    setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
    setFormErrors({});
    setSubmitSuccess(false);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.service) errors.service = 'Please select a service';
    if (!formData.message.trim()) errors.message = 'Project details are required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSubmitSuccess(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
      handleCloseForm();
    }, 2000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 3000);
    }
  };

  const socialLinksWithIcons = socialLinks.map((link, index) => ({
    ...link,
    Icon: [Facebook, Instagram, Linkedin][index]
  }));

  return (
    <>
      <footer className="bg-slate-950 text-slate-100">
        {/* Newsletter & CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-slate-300">Get the latest insights on digital transformation delivered to your inbox monthly.</p>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              {newsletterSubmitted && (
                <div className="md:col-span-2 flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Thanks for subscribing! Check your email for confirmation.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Top Section - Company Info & Contact */}
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-9 bg-white rounded-lg flex items-center justify-center">
                  <img src="Logo.png" alt="logo" className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">{footerCompanyInfo.name}</div>
                  <div className="text-slate-400 text-sm font-semibold">{footerCompanyInfo.tagline}</div>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
                {footerCompanyInfo.description}
              </p>
              <div className="flex gap-3">
                {socialLinksWithIcons.map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-5 text-white flex items-center gap-2">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-5 text-white">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.slice(0, 4).map((service, index) => (
                  <li key={index}>
                    <Link to={service.path} className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-lg mb-5 text-white">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.slice(0, 4).map((resource, index) => (
                  <li key={index}>
                    <Link to={resource.path} className="text-slate-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block">
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust Badges Section */}
          <div className="border-t border-slate-800 pt-12 mb-12">
            <h3 className="text-center text-lg font-bold text-white mb-8">Why Clients Trust Us</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {footerTrustBadges.map((badge, index) => (
                <div key={index} className="text-center p-4 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all">
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <h4 className="font-bold text-white mb-1">{badge.label}</h4>
                  <p className="text-slate-400 text-sm">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {footerContactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex-shrink-0">
                  {info.icon === 'phone' && <Phone className="w-6 h-6 text-white" />}
                  {info.icon === 'email' && <Mail className="w-6 h-6 text-white" />}
                  {info.icon === 'location' && <MapPin className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{info.title}</h4>
                  <p className="text-slate-300 text-sm font-semibold">{info.value}</p>
                  <p className="text-slate-400 text-xs">{info.subtext}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section - Copyright & Legal Links */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2024 {footerCompanyInfo.name}. All rights reserved. Built with excellence.
            </div>
            <div className="flex gap-6 text-sm flex-wrap justify-center">
              {footerLinks.legal.map((legal, index) => (
                <Link 
                  key={index}
                  to={legal.path}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {legal.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Contact Button */}
        <button
          onClick={handleContactClick}
          className="fixed bottom-6 right-6 w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all shadow-xl hover:scale-110 z-40"
          title="Contact Us"
        >
          <Mail className="w-6 h-6" />
        </button>
      </footer>

      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleCloseForm}
          ></div>

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-in">
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors z-10"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            {submitSuccess ? (
              <div className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Message Sent!</h2>
                <p className="text-slate-600 text-center max-w-sm">
                  Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Start Your Project</h2>
                  <p className="text-slate-600">Tell us about your vision. We'll get back to you within 24 hours.</p>
                </div>

                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          formErrors.name 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900'
                        }`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          formErrors.email 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900'
                        }`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Service Interested In *</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${
                          formErrors.service 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900'
                        }`}
                      >
                        <option value="">Select a service</option>
                        <option value="website">Website Development</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="video">Video Editing</option>
                        <option value="design">Graphic Design</option>
                        <option value="content">Content Writing</option>
                        <option value="marketing">Digital Marketing</option>
                      </select>
                      {formErrors.service && <p className="text-red-500 text-xs mt-1">{formErrors.service}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Project Budget</label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors bg-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="499-5000">₹499 - ₹5,000</option>
                        <option value="5000-9999">₹5,000 - ₹9,999</option>
                        <option value="9999-19999">₹9,999 - ₹19,999</option>
                        <option value="19999+">₹19,999+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Project Details *</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                        formErrors.message 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 focus:border-slate-900 focus:ring-slate-900'
                      }`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    ></textarea>
                    {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    We're committed to your privacy. Your information is confidential and will never be shared.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
