import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, CheckCircle, ArrowRight, X, Mail, ChevronLeft } from 'lucide-react';
import BeforeAfterComparison from '../../components/BeforeAfterComparison';
import { services } from '../../const';

function DigitalMarketing() {
  const routerNavigate = useNavigate();
  const service = services[5];
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: 'Digital Marketing', budget: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: 'Digital Marketing', budget: '', message: '' });
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
                  📊 Digital Marketing
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  Grow Your Business with Data-Driven Marketing
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive digital marketing that combines SEO, paid ads, content, and analytics to create predictable revenue growth.
                </p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-lg shadow-lg"
                >
                  Start Growing Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="hidden md:flex justify-center animate-slideUp">
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <TrendingUp className="w-40 h-40 text-gray-500 hover:scale-110 transition-transform duration-300" />
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

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">✨ Our Services</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white/40 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">📈 Business Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/20">
                        <span className="text-white/60 text-sm font-bold">→</span>
                      </div>
                      <span className="text-lg text-white/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-8 border border-white/10 mb-16 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">🎯 Marketing Channels</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    channel: "SEO",
                    desc: "Organic search optimization for long-term sustainable traffic",
                    timeline: "3-6 months"
                  },
                  {
                    channel: "PPC Advertising",
                    desc: "Google Ads, Facebook Ads for immediate qualified traffic",
                    timeline: "Immediate"
                  },
                  {
                    channel: "Content Marketing",
                    desc: "Strategic blog posts and web content that ranks and converts",
                    timeline: "2-4 months"
                  },
                  {
                    channel: "Email Marketing",
                    desc: "Campaigns that nurture leads and drive repeat customers",
                    timeline: "Ongoing"
                  },
                  {
                    channel: "Social Media",
                    desc: "Community building and brand awareness on all platforms",
                    timeline: "1-3 months"
                  },
                  {
                    channel: "Conversion Rate Optimization",
                    desc: "A/B testing and optimization to improve results",
                    timeline: "Ongoing"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-black border border-white/10 rounded-lg p-6 hover:border-white transition-all duration-300 group">
                    <h4 className="font-bold text-white mb-2">{item.channel}</h4>
                    <p className="text-sm text-white/60 mb-4">{item.desc}</p>
                    <div className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded inline-block border border-white/20">{item.timeline}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8">🚀 Our Integrated Approach</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    phase: "Phase 1: Audit",
                    activities: [
                      "Competitor analysis",
                      "Website audit",
                      "Market research",
                      "Goal setting"
                    ]
                  },
                  {
                    phase: "Phase 2: Strategy",
                    activities: [
                      "Keyword research",
                      "Channel selection",
                      "Content calendar",
                      "Campaign planning"
                    ]
                  },
                  {
                    phase: "Phase 3: Execution",
                    activities: [
                      "Content creation",
                      "Ad campaigns",
                      "Email setup",
                      "Lead funnels"
                    ]
                  },
                  {
                    phase: "Phase 4: Optimize",
                    activities: [
                      "A/B testing",
                      "Performance tracking",
                      "Continuous optimization",
                      "Monthly reports"
                    ]
                  }
                ].map((phase, idx) => (
                  <div key={idx} className="bg-black border border-white/10 rounded-lg p-6 hover:border-white transition-all duration-300">
                    <h4 className="font-bold text-white mb-4">{phase.phase}</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, pidx) => (
                        <li key={pidx} className="text-white/70 text-sm flex items-center gap-2">
                          <span className="text-white/40">•</span> {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-white/10 to-transparent rounded-lg p-12 border border-white/20 mb-16 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-6">📊 Case Study: {service.caseStudy.client}</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-xl mb-6 leading-relaxed text-white/80">
                    We implemented an integrated digital marketing strategy combining SEO, paid ads, and email marketing. The result was an unprecedented increase in qualified leads and revenue.
                  </p>
                  <div className="text-5xl font-bold mb-2 text-white">{service.caseStudy.results}</div>
                  <p className="text-white/60">Annual Recurring Revenue</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h4 className="font-bold mb-4">Key Metrics</h4>
                  {service.caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                      <span className="text-white/80">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-8 border border-white/10 text-center backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Start Your Growth</h3>
              <div className="text-4xl font-bold text-white mb-6">{service.price}</div>
              <p className="text-white/60 mb-8">Monthly retainer • Full management • Transparent reporting</p>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-slate-200 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Get Free Marketing Audit
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turn Leads into Revenue
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Implement an integrated digital marketing strategy that generates predictable revenue growth. Let's discuss your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-all hover:scale-105"
              >
                Get Free Audit
              </button>
              <button
                onClick={() => routerNavigate('/services')}
                className="border-2 border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
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
          <div className="bg-slate-900/95 border border-white/10 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative backdrop-blur-sm">
            <button onClick={() => setShowContactForm(false)} className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors z-10 text-white">
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Start Growing Today</h2>
                <p className="text-white/60">Get a free marketing audit and custom growth strategy tailored to your business.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors" required />
                  <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors" required />
                </div>
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors" />
                <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-400 transition-colors" required>
                  <option value="" className="bg-slate-900">Select Budget Range</option>
                  <option value="under-25k" className="bg-slate-900">Under ₹25K/mo</option>
                  <option value="25k-50k" className="bg-slate-900">₹25K - ₹50K/mo</option>
                  <option value="50k-100k" className="bg-slate-900">₹50K - ₹100K/mo</option>
                  <option value="100k+" className="bg-slate-900">₹100K+/mo</option>
                </select>
                <textarea placeholder="Tell us about your business and goals..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="4" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors resize-none"></textarea>
                <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all hover:scale-105">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DigitalMarketing;
