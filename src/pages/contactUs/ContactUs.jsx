// pages/contactUs.jsx
import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Award, Users, Clock, Shield, ArrowRight } from 'lucide-react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  };

  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
     

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Let's Talk About Your Project</h2>
                <p className="text-gray-600 text-lg">
                  We're here to help bring your ideas to life. Whether you need a website, social media management, or any other digital service, we've got you covered.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black mb-1">Email Us</div>
                    <div className="text-gray-600">info@itsolutions.com</div>
                    <div className="text-gray-600">support@itsolutions.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black mb-1">Call Us</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                    <div className="text-gray-600">Mon-Fri, 9AM - 6PM EST</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black mb-1">Visit Us</div>
                    <div className="text-gray-600">123 Business Street</div>
                    <div className="text-gray-600">New York, NY 10001</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <div className="font-semibold text-black mb-4">Follow Us</div>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                    <div key={index} className="w-12 h-12 bg-black rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-50 rounded-2xl p-8 mt-8">
                <h3 className="font-bold text-black text-xl mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Award className="w-5 h-5" />, text: "1+ Years of Experience" },
                    { icon: <Users className="w-5 h-5" />, text: "10+ Happy Clients" },
                    { icon: <Clock className="w-5 h-5" />, text: "24/7 Support Available" },
                    { icon: <Shield className="w-5 h-5" />, text: "100% Satisfaction Guaranteed" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white shrink-0">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>
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
                    placeholder="+1 (555) 123-4567"
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
                    <option value="100-200">$100 - $200</option>
                    <option value="200-500">$200 - $500</option>
                    <option value="500-1000">$500 - $1000</option>
                    <option value="1000+">$1,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={5}
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
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              { q: "How long does a typical project take?", a: "Project timelines vary based on scope. A website typically takes 2-4 weeks, while social media management is ongoing. We'll provide a detailed timeline during consultation." },
              { q: "What is your pricing structure?", a: "We offer transparent pricing based on project scope. Check our Services page for starting prices, or contact us for a custom quote tailored to your needs." },
              { q: "Do you offer ongoing support?", a: "Yes! We provide post-launch support and maintenance packages for all our services. We're committed to your long-term success." },
              { q: "Can I see examples of your work?", a: "Absolutely! Check our Portfolio page to see recent projects across all service categories. We can also provide case studies during consultation." }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-black text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;