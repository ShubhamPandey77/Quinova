import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, CheckCircle, ArrowRight, X, Mail, PenTool, Monitor, ChevronLeft } from 'lucide-react';
import BeforeAfterComparison from '../../components/BeforeAfterComparison';
import { services } from '../../const';

function GraphicDesign() {
  const routerNavigate = useNavigate();
  const service = services[3];
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: 'Graphic Design', budget: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: 'Graphic Design', budget: '', message: '' });
    setShowContactForm(false);
  };

  return (
    <>
      <div className="pt-16 min-h-screen bg-gradient-to-b from-white via-gray-50 to-black text-gray-900">
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
                  🎨 Premium Graphic Design
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  Impactful Visual Identity
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We create stunning visual identities that capture your brand's essence and make a lasting impression on your audience.
                </p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-lg shadow-lg"
                >
                  Start Your Design
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="hidden md:flex justify-center animate-slideUp">
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <PenTool className="w-40 h-40 text-gray-500 hover:scale-110 transition-transform duration-300" />
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

            <div className="grid md:grid-cols-2 gap-12 mb-20 py-16 animate-slideUp">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">✨ Our Expertise</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-gray-700 flex-shrink-0 mt-0.5 group-hover:text-black transition-colors" />
                      <span className="text-lg text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 animate-slideUp">
                <h3 className="text-3xl font-bold">📈 Design Benefits</h3>
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

            <div className="bg-black text-white rounded-2xl p-12 text-center shadow-2xl animate-slideUp">
              <h3 className="text-3xl font-bold mb-8">Ready for a New Look?</h3>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-white text-black px-10 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-lg"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>

      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowContactForm(false)}></div>
          <div className="bg-white border border-gray-300 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button onClick={() => setShowContactForm(false)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10 text-gray-700">
              <X className="w-5 h-5" />
            </button>
            <div className="p-10">
              <h2 className="text-3xl font-bold mb-2">Start Your Design</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors" required />
                  <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors" required />
                </div>
                <textarea placeholder="Tell us about your design needs..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"></textarea>
                <button type="submit" className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-all active:scale-95">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GraphicDesign;
