import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle, ArrowRight, X, Mail, ChevronLeft } from 'lucide-react';
import BeforeAfterComparison from '../../components/BeforeAfterComparison';
import { services } from '../../const';

function ContentWriting() {
  const routerNavigate = useNavigate();
  const service = services[4];
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: 'Content Writing', budget: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: 'Content Writing', budget: '', message: '' });
    setShowContactForm(false);
  };

  return (
    <>
      <div className="pt-16 min-h-screen bg-gradient-to-b from-white via-gray-50 to-black text-gray-900">
        {/* Back Button */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => routerNavigate('/services')}
              className="flex items-center gap-2 text-gray-700 font-semibold hover:text-black transition-all duration-300 hover:-translate-x-1"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Services
            </button>
          </div>
        </div>

        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fadeIn">
                <div className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold border border-gray-300">
                  📝 SEO Content Writing
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  Content That Ranks & Converts
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Strategic SEO-optimized content that drives organic traffic, builds authority, and generates qualified leads for your business.
                </p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-lg shadow-lg"
                >
                  Order Content Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="hidden md:flex justify-center animate-slideUp">
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <BookOpen className="w-40 h-40 text-gray-500 hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <BeforeAfterComparison beforeData={service.beforeAfter.before} afterData={service.beforeAfter.after} />

        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">{service.content}</h2>
              <p className="text-xl text-gray-600 leading-relaxed">{service.longDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-20 py-16 animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">✨ Content Services</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-gray-700 flex-shrink-0 mt-0.5 group-hover:text-black transition-colors" />
                      <span className="text-lg text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-3xl font-bold">📈 Business Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-400 group-hover:bg-black group-hover:border-black group-hover:text-white transition-all">
                        <span className="text-sm font-bold">→</span>
                      </div>
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-12 mb-20 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-3xl font-bold mb-10">✍️ Content Types</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { type: "Blog Posts", desc: "Long-form, SEO-optimized articles that rank and drive traffic" },
                  { type: "Landing Pages", desc: "High-converting copy designed to capture leads" },
                  { type: "Product Descriptions", desc: "Compelling descriptions that sell your products" },
                  { type: "Email Campaigns", desc: "Engaging newsletters and promotional emails" },
                  { type: "Social Media Content", desc: "Platform-optimized posts and captions" },
                  { type: "Web Copy", desc: "Homepage, services, and About page content" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-black border border-white/10 rounded-xl p-6 hover:border-white transition-all duration-300 group">
                    <h4 className="font-bold text-white mb-2">{item.type}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20 py-16 animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-3xl font-bold mb-12">🎯 SEO Strategy</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    stage: "Research",
                    points: [
                      "Keyword research",
                      "Competitor analysis",
                      "Audience research",
                      "Topic clustering"
                    ]
                  },
                  {
                    stage: "Creation",
                    points: [
                      "Original research",
                      "SEO optimization",
                      "On-page elements",
                      "Internal linking"
                    ]
                  },
                  {
                    stage: "Promotion",
                    points: [
                      "Social distribution",
                      "Email marketing",
                      "Link building",
                      "Monitoring & updates"
                    ]
                  }
                ].map((stage, idx) => (
                  <div key={idx} className="bg-black border border-white/10 rounded-xl p-6 hover:border-white transition-all duration-300 group">
                    <h4 className="font-bold text-white mb-4">{stage.stage}</h4>
                    <ul className="space-y-2">
                      {stage.points.map((point, pidx) => (
                        <li key={pidx} className="text-white/70 flex items-center gap-2">
                          <span className="text-white/40">✓</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl p-12 border border-gray-300 mb-20 shadow-xl animate-slideUp" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-3xl font-bold mb-10 text-gray-900">📊 Case Study: {service.caseStudy.client}</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-xl mb-6 leading-relaxed text-gray-700">
                    We created a comprehensive content strategy with weekly blog posts targeting high-value keywords. The result was explosive organic growth and qualified leads.
                  </p>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-black">{service.caseStudy.results}</div>
                    <p className="text-gray-600">Monthly organic traffic</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 border border-gray-300 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-6 text-lg">Key Metrics</h4>
                  {service.caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3 mb-4 hover:translate-x-2 transition-transform">
                      <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-black text-white rounded-2xl p-12 text-center shadow-2xl animate-slideUp hover:shadow-3xl transition-shadow duration-300" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-3xl font-bold mb-6">Get Professional Content</h3>
              <div className="text-5xl font-bold mb-4">{service.price}</div>
              <p className="text-gray-300 mb-8 text-lg">Per article • SEO-optimized • High-quality</p>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-white text-black px-10 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-lg"
              >
                Order Content
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-black">
          <div className="max-w-4xl mx-auto text-center animate-slideUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Organic Traffic Starts with Great Content
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Let's create a content strategy that ranks, engages, and converts your audience into customers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-black text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Content Strategy
              </button>
              <button
                onClick={() => routerNavigate('/services')}
                className="border-2 border-gray-800 text-gray-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                View Other Services
              </button>
            </div>
          </div>
        </section>
      </div>

      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowContactForm(false)}></div>
          <div className="bg-white border border-gray-300 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative hover:shadow-3xl transition-shadow duration-300">
            <button onClick={() => setShowContactForm(false)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10 text-gray-700">
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Content Writing</h2>
                <p className="text-gray-600">Tell us about your content needs and we'll provide a custom quote.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" required />
                  <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" required />
                </div>
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
                <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" required>
                  <option value="" className="bg-white">Select Budget Range</option>
                  <option value="under-5k" className="bg-white">Under ₹5K</option>
                  <option value="5k-15k" className="bg-white">₹5K - ₹15K</option>
                  <option value="15k-50k" className="bg-white">₹15K - ₹50K</option>
                  <option value="50k+" className="bg-white">₹50K+</option>
                </select>
                <textarea placeholder="Describe your content needs..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"></textarea>
                <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContentWriting;
