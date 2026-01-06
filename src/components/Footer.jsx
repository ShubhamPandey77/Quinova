import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Facebook, Instagram, Linkedin, ArrowRight, X, Phone, MapPin, CheckCircle, MessageSquareDot, Send } from 'lucide-react';
import { socialLinks, footerCompanyInfo, footerLinks, footerContactInfo } from '../const';
import ContactForm from '../components/ContactForm';

function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);
  // const [newsletterEmail, setNewsletterEmail] = useState('');
  // const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   service: '',
  //   budget: '',
  //   message: ''
  // });
  // const [formErrors, setFormErrors] = useState({});
  // const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCloseForm = () => {
    setShowContactForm(false);
    // setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
    // setFormErrors({});
    // setSubmitSuccess(false);
  };

  // const validateForm = () => {
  //   const errors = {};
  //   if (!formData.name.trim()) errors.name = 'Name is required';
  //   if (!formData.email.trim()) errors.email = 'Email is required';
  //   else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
  //   if (!formData.service) errors.service = 'Please select a service';
  //   if (!formData.message.trim()) errors.message = 'Project details are required';
  //   return errors;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const errors = validateForm();
    
  //   if (Object.keys(errors).length > 0) {
  //     setFormErrors(errors);
  //     return;
  //   }

  //   setSubmitSuccess(true);
  //   setTimeout(() => {
  //     setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  //     handleCloseForm();
  //   }, 2000);
  // };

  // const handleNewsletterSubmit = (e) => {
  //   e.preventDefault();
  //   if (newsletterEmail.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
  //     setNewsletterSubmitted(true);
  //     setNewsletterEmail('');
  //     setTimeout(() => setNewsletterSubmitted(false), 3000);
  //   }
  // };

  const socialLinksWithIcons = socialLinks.map((link, index) => ({
    ...link,
    Icon: [Facebook, Instagram, Linkedin][index]
  }));

  return (
    <>
      <footer className="bg-slate-950 text-slate-100">
        

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
           {/* Contact Info Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {footerContactInfo.map((info, index) => {
              let href = '#';
              if (info.icon === 'phone') href = `tel:${info.value.replace(/\s/g, '')}`;
              if (info.icon === 'email') href = `mailto:${info.value}`;
              
              return (
                <a
                  key={index}
                  href={href}
                  target={info.icon === 'location' ? undefined : '_blank'}
                  rel={info.icon === 'location' ? undefined : 'noopener noreferrer'}
                  className="flex items-start gap-4 p-6 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <div className="shrink-0">
                    {info.icon === 'phone' && <Phone className="w-6 h-6 text-white hover:text-emerald-400 transition-colors" />}
                    {info.icon === 'email' && <Mail className="w-6 h-6 text-white hover:text-emerald-400 transition-colors" />}
                    {info.icon === 'location' && <MapPin className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{info.title}</h4>
                    <p className="text-slate-300 text-sm font-semibold">{info.value}</p>
                    <p className="text-slate-400 text-xs">{info.subtext}</p>
                  </div>
                </a>
              );
            })}
          </div>
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
                {
                  // eslint-disable-next-line no-unused-vars
                  socialLinksWithIcons.map(({ Icon, link }, index) => (
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
       <div className="fixed bottom-6 right-6 z-50 group">

  {/* Expanded Options */}
  <div className="absolute bottom-16 right-0 flex flex-col gap-3 
                  opacity-0 scale-95 
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-300 pointer-events-none">

    {/* WhatsApp */}
    <a
      href="https://wa.me/917991214170"
      target="_blank"
      rel="noopener noreferrer"
      className="pointer-events-auto w-12 h-12 rounded-full bg-green-500 
                 flex items-center justify-center shadow-lg 
                 hover:scale-110 transition"
      title="WhatsApp"
    >
      <Send className="w-5 h-5 text-white" />
    </a>

    {/* Mail */}
    <a
      href="mailto:QuinovaITSolutions@gmail.com?cc=solutions@quinova.tech"
      target="_blank"
      rel="noopener noreferrer"
      className="pointer-events-auto w-12 h-12 rounded-full bg-blue-600 
                 flex items-center justify-center shadow-lg 
                 hover:scale-110 transition"
      title="Email"
    >
      <Mail className="w-5 h-5 text-white" />
    </a>
  </div>

  {/* Main Floating Button */}
  <button
    className="w-14 h-14 rounded-full bg-white text-slate-900 
               flex items-center justify-center shadow-xl 
               hover:scale-110 transition border-2 border-gray-700"
    title="Contact Us"
  >
    <MessageSquareDot className="w-6 h-6 " />
  </button>

</div>

        
      </footer>

                      {/* Contact Form Modal */}
                      {showContactForm && (
                          <div 
                              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                              onClick={handleCloseForm}
                          >
                              <div className="absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300"></div>
                              <ContactForm 
                                  onClose={handleCloseForm}
                                  // You can optionally pre-select a service if needed:
                                  // defaultService="website"
                              />
                          </div>
                      )}
    </>
  );
}

export default Footer;
