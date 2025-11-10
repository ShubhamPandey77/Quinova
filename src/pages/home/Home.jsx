// pages/home.jsx
import { useState } from 'react';
import { Code, Globe, TrendingUp, Film, Palette, Zap, ArrowRight, Star, Mail, X } from 'lucide-react';

function Home({ navigate }) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

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

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const services = [
    { icon: <Code className="w-6 h-6" />, title: "Web Development", color: "from-gray-600 to-gray-800" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Social Media", color: "from-gray-700 to-black" },
    { icon: <Film className="w-6 h-6" />, title: "Video Editing", color: "from-gray-600 to-gray-900" },
    { icon: <Palette className="w-6 h-6" />, title: "Graphic Design", color: "from-gray-500 to-gray-800" },
  ];

  const testimonials = [
    { name: "Sarah Johnson", company: "TechStart Inc.", text: "They transformed our online presence completely. Our website looks amazing!", rating: 5, avatar: "SJ" },
    { name: "Michael Chen", company: "Creative Studios", text: "Professional, creative, and always on time. Highly recommended!", rating: 5, avatar: "MC" },
    { name: "Emily Davis", company: "Fashion Forward", text: "The team understood our vision perfectly. Excellent work!", rating: 5, avatar: "ED" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gray-800/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-gray-700/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold border border-gray-700">
                  ⚡ Premium IT Solutions
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Elevate Your
                <span className="block mt-2 bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                We deliver cutting-edge IT solutions including web development, social media management, video editing, and graphic design to transform your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate('services')}
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-2xl hover:shadow-white/20 flex items-center gap-2 group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleGetStartedClick}
                  className="bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-black transition-all"
                >
                  Contact Us
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-800">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all hover:scale-105 cursor-pointer group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="text-white font-semibold text-sm">{service.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-600 font-semibold text-lg">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-8 h-8" />, title: "Web Development", desc: "Custom, responsive websites built with modern technologies" },
              { icon: <Zap className="w-8 h-8" />, title: "Digital Marketing", desc: "Strategic campaigns that drive real business results" },
              { icon: <Film className="w-8 h-8" />, title: "Video Production", desc: "Professional video editing and content creation" }
            ].map((item, index) => (
              <div key={index} className="bg-black text-white rounded-2xl p-8 hover:scale-105 transition-transform cursor-pointer group">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                <button 
                  onClick={() => navigate('services')}
                  className="mt-6 text-white font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('services')}
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-600 font-semibold text-lg">Client Success</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can help transform your business with our IT solutions
          </p>
          <button 
            onClick={handleGetStartedClick}
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-2xl"
          >
            Get Free Consultation
          </button>
        </div>
      </section>

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
                <h2 className="text-3xl font-bold text-black mb-2">Let's Get Started</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors bg-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors bg-white"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Service Interested In *</label>
                  <select 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
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

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Project Budget</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="500-5000">₹500 - ₹5,000</option>
                    <option value="5000-25000">₹5,000 - ₹25,000</option>
                    <option value="25000-50000">₹25,000 - ₹50,000</option>
                    <option value="50000+">₹50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-black outline-none transition-colors resize-none bg-white"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We'll respond within 24 hours. Your information is kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

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

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Home;