import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, CheckCircle, ArrowRight, X, Mail, Code, Zap, ChevronLeft, BookOpen, FileText } from 'lucide-react';
import BeforeAfterComparison from '../../components/BeforeAfterComparison';
import { services } from '../../const';

function AcademicProjects() {
  const routerNavigate = useNavigate();
  const service = services[7]; // Academic Projects
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Academic Projects',
    budget: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: 'Academic Projects', budget: '', message: '' });
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

        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fadeIn">
                <div className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold border border-gray-300">
                  🎓 Professional Academic Support
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  Professional Project Support
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Expert guidance and development support for academic projects, from requirement analysis to final documentation.
                </p>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-lg shadow-lg"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="hidden md:flex justify-center animate-slideUp">
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <GraduationCap className="w-40 h-40 text-gray-500 hover:scale-110 transition-transform duration-300" />
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900">{service.content}</h2>
              <p className="text-xl text-gray-600 leading-relaxed">{service.longDescription}</p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-12 mb-20 py-16">
              <div className="space-y-6 animate-slideUp">
                <h3 className="text-3xl font-bold">✨ Key Features</h3>
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
                <h3 className="text-3xl font-bold">📈 Success Benefits</h3>
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

            {/* Tech & Documentation */}
            <div className="bg-gray-100 rounded-2xl p-12 mb-20 border border-gray-200 shadow-lg animate-slideUp">
              <h3 className="text-3xl font-bold mb-10">🛠️ Technical Support</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Code className="w-6 h-6 text-gray-700" />
                    Development
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform"><span className="text-black">→</span> Python, Java, C++ Implementation</li>
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform"><span className="text-black">→</span> Web & Mobile Project Support</li>
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform"><span className="text-black">→</span> Database & Backend Design</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <FileText className="w-6 h-6 text-gray-700" />
                    Documentation
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform"><span className="text-black">→</span> Detailed Project Reports</li>
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform"><span className="text-black">→</span> UML Diagrams & Flowcharts</li>
                    <li className="flex items-center gap-2 hover:translate-x-1 transition-transform"><span className="text-black">→</span> Presentation & Viva Preparation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl p-12 border border-gray-300 mb-20 shadow-xl animate-slideUp">
              <h3 className="text-3xl font-bold mb-10 text-gray-900">📊 Success Story: {service.caseStudy.client}</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-xl mb-6 leading-relaxed text-gray-700">
                    We provided end-to-end support for a complex final-year project, ensuring the student understood every aspect for a successful viva.
                  </p>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-black">{service.caseStudy.results}</div>
                    <p className="text-gray-600">Average student score</p>
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

            {/* CTA Section */}
            <div className="bg-black text-white rounded-2xl p-12 text-center shadow-2xl animate-slideUp">
              <h3 className="text-3xl font-bold mb-8">Ready to Ace Your Project?</h3>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-white text-black px-10 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-lg"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowContactForm(false)}
          ></div>
          <div className="bg-white border border-gray-300 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10 text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Free Consultation</h2>
                <p className="text-gray-600">Let's discuss your project requirements and how we can support you.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                />
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="mini">Mini Project</option>
                  <option value="major">Major Project</option>
                  <option value="other">Other Academic Work</option>
                </select>
                <textarea
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-all active:scale-95"
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

export default AcademicProjects;
