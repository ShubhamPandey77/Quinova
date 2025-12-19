import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2, CheckCircle, ArrowRight, X, Mail, Smartphone, BarChart3, Users, ChevronLeft } from 'lucide-react';
import BeforeAfterComparison from '../../components/BeforeAfterComparison';
import { services } from '../../const';

function SocialMediaManagement({ navigate = () => {} }) {
  const routerNavigate = useNavigate();
  const service = services[1];
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: 'Social Media Management', budget: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: 'Social Media Management', budget: '', message: '' });
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
              className="flex items-center gap-2 text-slate-900 font-semibold hover:text-green-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Services
            </button>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                  📱 Social Media Management
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Build Your Engaged Community
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Strategic social media management that builds loyal communities, increases brand reach, and generates qualified leads 24/7.
                </p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2 text-lg"
                >
                  Start Growing Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-full h-96 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl flex items-center justify-center">
                  <Share2 className="w-40 h-40 text-green-700" />
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
                <h3 className="text-2xl font-bold text-slate-900 mb-6">✨ Our Services</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
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
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">→</span>
                      </div>
                      <span className="text-lg text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">📊 Platforms We Manage</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { platform: "Instagram", reach: "Highest engagement for visual brands" },
                  { platform: "Facebook", reach: "Largest audience reach globally" },
                  { platform: "LinkedIn", reach: "B2B and professional networking" },
                  { platform: "TikTok", reach: "Viral potential and young audience" },
                  { platform: "Twitter", reach: "Real-time conversations and trends" },
                  { platform: "YouTube", reach: "Long-form video and authority" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-4">
                    <h4 className="font-bold text-slate-900 mb-2">{item.platform}</h4>
                    <p className="text-sm text-slate-600">{item.reach}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">💡 What We Create</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Content Calendar", desc: "Strategic posting schedule optimized for engagement" },
                  { title: "Engaging Posts", desc: "Visually stunning content that stops scrolls" },
                  { title: "Community Management", desc: "Respond to comments and build relationships" },
                  { title: "Paid Campaigns", desc: "Targeted ads that convert followers to customers" },
                  { title: "Analytics & Reports", desc: "Monthly performance insights and optimization" },
                  { title: "Crisis Management", desc: "Protect your reputation with fast response" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-12 text-white mb-16">
              <h3 className="text-3xl font-bold mb-6">📊 Case Study: {service.caseStudy.client}</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-xl mb-6 leading-relaxed">
                    We built a comprehensive social media strategy from scratch, creating daily engaging content and running targeted paid campaigns. The results exceeded expectations.
                  </p>
                  <div className="text-5xl font-bold mb-2">{service.caseStudy.results}</div>
                  <p className="text-green-100">In 90 days</p>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Grow?</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">{service.price}</div>
              <p className="text-slate-600 mb-8">Monthly retainer for complete management</p>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2"
              >
                Start Your Strategy
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-green-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build Your Community Today
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Transform your social media into a powerful business tool. Let's create a strategy that builds your audience and generates leads.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Free Strategy Session
              </button>
              <button
                onClick={() => routerNavigate('/services')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                View Other Services
              </button>
            </div>
          </div>
        </section>
      </div>

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
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Let's Grow Together</h2>
                <p className="text-slate-600">Tell us about your social media goals and we'll create a custom strategy.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-green-600" required />
                  <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-green-600" required />
                </div>
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-green-600" />
                <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-green-600" required>
                  <option value="">Select Budget Range</option>
                  <option value="under-10k">Under ₹10K/mo</option>
                  <option value="10k-25k">₹10K - ₹25K/mo</option>
                  <option value="25k-50k">₹25K - ₹50K/mo</option>
                  <option value="50k+">₹50K+/mo</option>
                </select>
                <textarea placeholder="Tell us about your goals..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="4" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-green-600 resize-none"></textarea>
                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SocialMediaManagement;
