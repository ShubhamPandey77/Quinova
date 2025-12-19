import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle, ArrowRight, X, Mail, ChevronLeft } from 'lucide-react';
import BeforeAfterComparison from '../../components/BeforeAfterComparison';
import { services } from '../../const';

function ContentWriting({ navigate = () => {} }) {
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
      <div className="pt-16 bg-white">
        {/* Back Button */}
        <div className="px-6 py-4 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => routerNavigate('/services')}
              className="flex items-center gap-2 text-slate-900 font-semibold hover:text-cyan-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Services
            </button>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-r from-cyan-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                  📝 SEO Content Writing
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Content That Ranks & Converts
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Strategic SEO-optimized content that drives organic traffic, builds authority, and generates qualified leads for your business.
                </p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center gap-2 text-lg"
                >
                  Order Content Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-40 h-40 text-cyan-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <BeforeAfterComparison beforeData={service.beforeAfter.before} afterData={service.beforeAfter.after} />

        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.content}</h2>
              <p className="text-xl text-slate-600 leading-relaxed">{service.longDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">✨ Content Services</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
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
                      <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">→</span>
                      </div>
                      <span className="text-lg text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">✍️ Content Types</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { type: "Blog Posts", desc: "Long-form, SEO-optimized articles that rank and drive traffic" },
                  { type: "Landing Pages", desc: "High-converting copy designed to capture leads" },
                  { type: "Product Descriptions", desc: "Compelling descriptions that sell your products" },
                  { type: "Email Campaigns", desc: "Engaging newsletters and promotional emails" },
                  { type: "Social Media Content", desc: "Platform-optimized posts and captions" },
                  { type: "Web Copy", desc: "Homepage, services, and About page content" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-2">{item.type}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">🎯 SEO Strategy</h3>
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
                  <div key={idx} className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6">
                    <h4 className="font-bold text-slate-900 mb-4">{stage.stage}</h4>
                    <ul className="space-y-2">
                      {stage.points.map((point, pidx) => (
                        <li key={pidx} className="text-slate-700 flex items-center gap-2">
                          <span className="text-cyan-600">✓</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-12 text-white mb-16">
              <h3 className="text-3xl font-bold mb-6">📊 Case Study: {service.caseStudy.client}</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-xl mb-6 leading-relaxed">
                    We created a comprehensive content strategy with weekly blog posts targeting high-value keywords. The result was explosive organic growth and qualified leads.
                  </p>
                  <div className="text-5xl font-bold mb-2">{service.caseStudy.results}</div>
                  <p className="text-cyan-100">Monthly organic traffic</p>
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

            <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Get Professional Content</h3>
              <div className="text-4xl font-bold text-cyan-600 mb-6">{service.price}</div>
              <p className="text-slate-600 mb-8">Per article • SEO-optimized • High-quality</p>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center gap-2"
              >
                Order Content
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-cyan-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Organic Traffic Starts with Great Content
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's create a content strategy that ranks, engages, and converts your audience into customers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-white text-cyan-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
              >
                Get Content Strategy
              </button>
              <button
                onClick={() => navigate('services')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-800 transition-colors"
              >
                View Other Services
              </button>
            </div>
          </div>
        </section>
      </div>

      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowContactForm(false)}></div>
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button onClick={() => setShowContactForm(false)} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors z-10">
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Order Content Writing</h2>
                <p className="text-slate-600">Tell us about your content needs and we'll provide a custom quote.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600" required />
                  <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600" required />
                </div>
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600" />
                <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600" required>
                  <option value="">Select Budget Range</option>
                  <option value="under-5k">Under ₹5K</option>
                  <option value="5k-15k">₹5K - ₹15K</option>
                  <option value="15k-50k">₹15K - ₹50K</option>
                  <option value="50k+">₹50K+</option>
                </select>
                <textarea placeholder="Describe your content needs..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="4" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600 resize-none"></textarea>
                <button type="submit" className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContentWriting;
