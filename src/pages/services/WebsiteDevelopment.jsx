import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, X, Mail, Code, Zap, Smartphone, ChevronLeft } from 'lucide-react';
import BeforeAfterComparison from '../../components/BeforeAfterComparison';
import { services } from '../../const';

function WebsiteDevelopment({ navigate = () => {} }) {
  const routerNavigate = useNavigate();
  const service = services[0];
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: 'Website Development', budget: '', message: '' });
    setShowContactForm(false);
  };

  return (
    <>
      <div className="pt-16 bg-white">
        {/* Back Button */}
        <div className="px-6 py-4 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => routerNavigate('/services')}
              className="flex items-center gap-2 text-slate-900 font-semibold hover:text-emerald-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Services
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                  🌐 Professional Web Development
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Your Website is Your Business
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  We build high-performance, conversion-optimized websites that work 24/7 to generate leads and sales for your business.
                </p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center gap-2 text-lg"
                >
                  Get Your Website Built
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-full h-96 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-2xl flex items-center justify-center">
                  <Globe className="w-40 h-40 text-emerald-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before After Comparison */}
        <BeforeAfterComparison beforeData={service.beforeAfter.before} afterData={service.beforeAfter.after} />

        {/* Service Content */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.content}</h2>
              <p className="text-xl text-slate-600 leading-relaxed">{service.longDescription}</p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">✨ Key Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">📈 Business Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">→</span>
                      </div>
                      <span className="text-lg text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">🛠️ Our Tech Stack</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-emerald-600" />
                    Frontend Technologies
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• React.js for dynamic interfaces</li>
                    <li>• Tailwind CSS for responsive design</li>
                    <li>• Next.js for SEO optimization</li>
                    <li>• TypeScript for type safety</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-emerald-600" />
                    Backend & Infrastructure
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Node.js or Python backends</li>
                    <li>• MongoDB or PostgreSQL databases</li>
                    <li>• AWS or Vercel hosting</li>
                    <li>• RESTful API design</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Website Types */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">💡 Types of Websites We Build</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "E-Commerce Sites",
                    desc: "Online stores with payment integration, inventory management, and order tracking",
                    icon: "🛍️"
                  },
                  {
                    title: "Corporate Websites",
                    desc: "Professional brand presence with portfolio, services, and lead generation",
                    icon: "🏢"
                  },
                  {
                    title: "SaaS Platforms",
                    desc: "Scalable web applications with user authentication and subscription management",
                    icon: "⚙️"
                  },
                  {
                    title: "Portfolio Sites",
                    desc: "Showcase your work and attract clients with stunning visual presentations",
                    icon: "🎨"
                  },
                  {
                    title: "Lead Generation Sites",
                    desc: "Optimized to capture leads with strategic CTAs and conversion funnels",
                    icon: "📝"
                  },
                  {
                    title: "Content Blogs",
                    desc: "SEO-optimized blogs that drive organic traffic and establish thought leadership",
                    icon: "📚"
                  }
                ].map((type, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{type.title}</h4>
                    <p className="text-slate-600">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-12 text-white mb-16">
              <h3 className="text-3xl font-bold mb-6">📊 Case Study: {service.caseStudy.client}</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-xl mb-6 leading-relaxed">
                    We redesigned the website for a growing e-commerce store, focusing on user experience and conversion optimization. The result was a massive increase in sales and customer satisfaction.
                  </p>
                  <div className="text-5xl font-bold mb-2">{service.caseStudy.results}</div>
                  <p className="text-emerald-100">In the first 6 months</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6 backdrop-blur">
                  <h4 className="font-bold mb-4">Key Metrics</h4>
                  {service.caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
              <div className="text-4xl font-bold text-emerald-600 mb-6">{service.price}</div>
              <p className="text-slate-600 mb-8">Custom quotes available based on your requirements</p>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-emerald-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Online Presence Today
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join 100+ businesses that have already transformed their digital presence. Schedule a free consultation and let's discuss your project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => routerNavigate('/services')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
              >
                View Other Services
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowContactForm(false)}
          ></div>
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors z-10"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Get Free Consultation</h2>
                <p className="text-slate-600">Let's discuss your website needs and create a custom plan for you.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                    required
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                />

                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                  required
                >
                  <option value="">Select Budget Range</option>
                  <option value="under-50k">Under ₹50K</option>
                  <option value="50k-100k">₹50K - ₹100K</option>
                  <option value="100k-500k">₹100K - ₹500K</option>
                  <option value="500k+">₹500K+</option>
                </select>

                <textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WebsiteDevelopment;
