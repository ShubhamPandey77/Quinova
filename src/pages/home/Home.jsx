import { useState, useEffect, useRef } from 'react';
import { Code, Globe, Zap, Film, Palette, Target, Users, Award, CheckCircle, ArrowRight, Star, Mail, X, TrendingUp, Sparkles, Rocket, Shield } from 'lucide-react';
import { stats, testimonials, caseStudies, faqs } from '../../const';
import FAQSection from '../../components/FAQSection';

function Home({ navigate = () => {} }) {
  const [showContactForm, setShowContactForm] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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

  const statsWithIcons = stats.map((stat, index) => ({
    ...stat,
    icon: [<Target className="w-5 h-5" />, <Users className="w-5 h-5" />, <Award className="w-5 h-5" />, <CheckCircle className="w-5 h-5" />][index]
  }));

  return (
    <>
      <div className="pt-16 bg-white">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-2">
                  <span className="inline-block bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm font-semibold">
                    ✓ Trusted by 100+ Businesses
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Transform Your Business with Professional Digital Solutions
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  With 10+ years of proven expertise, we deliver comprehensive IT solutions—from custom web development to strategic digital marketing—that drive measurable business growth and lasting results.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => navigate('/services')}
                    className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
                  >
                    Explore Services
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleGetStartedClick}
                    className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Contact Us
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  {statsWithIcons.map((stat, index) => (
                    <div key={index} className="text-center md:text-left">
                      <div className="text-slate-600 mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Code className="w-6 h-6" />, title: "Web Development", color: "bg-blue-50" },
                    { icon: <Zap className="w-6 h-6" />, title: "Digital Marketing", color: "bg-amber-50" },
                    { icon: <Film className="w-6 h-6" />, title: "Video Editing", color: "bg-red-50" },
                    { icon: <Palette className="w-6 h-6" />, title: "Graphic Design", color: "bg-purple-50" }
                  ].map((item, index) => (
                    <div key={index} className={`${item.color} rounded-lg p-6 text-center hover:shadow-lg transition-shadow`}>
                      <div className="text-slate-900 mb-3 flex justify-center">{item.icon}</div>
                      <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          id="services-section"
          ref={(el) => (observerRefs.current[0] = el)}
          className="py-20 px-6 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-slate-600 font-semibold mb-2">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Comprehensive Services That Drive Results
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We offer end-to-end digital solutions backed by 10+ years of industry expertise and 100+ successful projects delivered across all sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Globe className="w-8 h-8" />, 
                  title: "Web Development", 
                  desc: "Custom-built, high-performance websites optimized for conversions. From responsive design to SEO-ready architecture, we create digital experiences that work.",
                  highlight: "blue",
                  highlight_bg: "#EFF6FF"
                },
                { 
                  icon: <Zap className="w-8 h-8" />, 
                  title: "Digital Marketing", 
                  desc: "Data-driven strategies across SEO, PPC, and content marketing. We track every metric and optimize for real business outcomes, not just vanity numbers.",
                  highlight: "amber",
                  highlight_bg: "#FFFBEB"
                },
                { 
                  icon: <Film className="w-8 h-8" />, 
                  title: "Creative Services", 
                  desc: "Professional video editing, graphic design, and content creation that elevates your brand. We combine technical excellence with creative strategy.",
                  highlight: "red",
                  highlight_bg: "#FEF2F2"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="border border-slate-200 rounded-lg p-8 hover:border-slate-900 hover:shadow-lg transition-all group"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-slate-900`} style={{
                    backgroundColor: item.highlight_bg
                  }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.desc}</p>
                  <button 
                    onClick={() => navigate('services')}
                    className="text-slate-900 font-semibold flex items-center gap-2 hover:gap-4 transition-all group"
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
                className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
              >
                Explore All 6 Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-slate-600 font-semibold mb-2">Real Client Results</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Proven Track Record of Success
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                These case studies demonstrate the measurable impact we deliver. From revenue growth to audience expansion, we produce tangible results that matter.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all group">
                  <div className="p-8">
                    <div className="mb-6">
                      <div className="inline-block bg-slate-100 text-slate-900 px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                        {study.client}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">{study.title}</h3>
                      <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-slate-900 bg-clip-text text-transparent mb-2">
                        {study.result}
                      </div>
                      <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide">Final Result</p>
                    </div>
                    
                    <p className="text-slate-700 mb-6 leading-relaxed">{study.description}</p>
                    
                    <div className="space-y-3 border-t border-slate-200 pt-6">
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Key Metrics</p>
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-slate-700">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                          <span className="font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Detailed */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-slate-600 font-semibold mb-2">Our Commitment</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why Businesses Choose Quinova
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We combine strategic thinking with technical excellence to deliver solutions that not only meet expectations but exceed them. Here's what makes us different.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "10+ Years of Expertise",
                  desc: "A decade of proven success across web development, marketing, design, and digital strategy. We've evolved with the industry."
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "100+ Successful Projects",
                  desc: "Every project completed on-time and on-budget. We've worked with startups, SMEs, and enterprises across diverse industries."
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Rapid Execution",
                  desc: "Agile processes and experienced team mean faster delivery without sacrificing quality or attention to detail."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Always Available",
                  desc: "24/7 support means your questions are answered and issues are resolved whenever you need us, anywhere in the world."
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "98% Satisfaction Rate",
                  desc: "Your success is genuinely our success. We back our work with a 100% satisfaction guarantee and money-back promise."
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Results-Driven Approach",
                  desc: "Every recommendation backed by data and analytics. We measure success by your business growth, not vanity metrics."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl p-12 text-white text-center shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Transform Your Digital Future</h3>
              <p className="text-slate-200 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Join 100+ successful businesses that have accelerated their growth with our proven digital solutions. Get started with a free 30-minute strategy session.
              </p>
              <button 
                onClick={handleGetStartedClick}
                className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section 
          id="testimonials-section"
          ref={(el) => (observerRefs.current[1] = el)}
          className="py-20 px-6 bg-slate-50"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-slate-600 font-semibold mb-2">Client Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Trusted by Leading Businesses
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Hear directly from companies that have experienced transformative results with Quinova. Their success stories speak to our commitment to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-xl transition-all group"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  
                  {testimonial.result && (
                    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 text-emerald-900 rounded-lg p-4 mb-6 text-center font-semibold">
                      <div className="text-xs uppercase tracking-wider mb-1">Achieved Result</div>
                      <div className="text-xl">📈 {testimonial.result}</div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-slate-600 font-semibold mb-2">Proven Methodology</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Transparent, Collaborative Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Four clear phases designed to ensure your vision becomes reality. We keep you informed every step of the way.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Strategic Discovery",
                  desc: "We conduct a thorough consultation to understand your business goals, target audience, and challenges. This foundation determines everything that follows."
                },
                {
                  step: "2",
                  title: "Custom Strategy",
                  desc: "Based on our analysis, we create a detailed roadmap with clear milestones, timelines, and deliverables tailored specifically to your objectives."
                },
                {
                  step: "3",
                  title: "Expert Execution",
                  desc: "Our experienced team brings your vision to life with regular updates, transparent communication, and your full involvement throughout the project."
                },
                {
                  step: "4",
                  title: "Launch & Optimize",
                  desc: "We don't stop at launch. Continuous support, monitoring, and optimization ensure sustained success and measurable business impact."
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-slate-900 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Credibility */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Proven Excellence. Trusted by Industry Leaders.
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                With 10+ years in the industry and 100+ successful projects, our track record speaks for itself.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
              <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">100+</div>
                <p className="text-slate-700 font-semibold text-lg">Projects Delivered</p>
                <p className="text-sm text-slate-600 mt-2">Across all sectors and scales</p>
              </div>
              <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-slate-900 bg-clip-text text-transparent mb-2">98%</div>
                <p className="text-slate-700 font-semibold text-lg">Client Satisfaction</p>
                <p className="text-sm text-slate-600 mt-2">Consistently exceeding expectations</p>
              </div>
              <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">10+</div>
                <p className="text-slate-700 font-semibold text-lg">Years Experience</p>
                <p className="text-sm text-slate-600 mt-2">Evolved expertise in digital solutions</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why Companies Choose Quinova</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">✓</div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Certified Professionals</p>
                    <p className="text-slate-600 text-sm">Expert team with proven expertise</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">✓</div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Transparent Communication</p>
                    <p className="text-slate-600 text-sm">Clear updates throughout your project</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">✓</div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">On-Time Delivery</p>
                    <p className="text-slate-600 text-sm">100+ projects completed on schedule</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">✓</div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">24/7 Support</p>
                    <p className="text-slate-600 text-sm">Always here when you need us</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">✓</div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Results-Driven</p>
                    <p className="text-slate-600 text-sm">Every action backed by data and ROI</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">✓</div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Money-Back Guarantee</p>
                    <p className="text-slate-600 text-sm">100% satisfaction or your money back</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">Limited Time Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join 100+ successful companies that have transformed their digital presence and accelerated growth with Quinova's proven strategies and expert execution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <button 
                onClick={handleGetStartedClick}
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                Schedule Free Strategy Session
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('services')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700/50 transition-colors"
              >
                Explore All Services
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-700">
              <div>
                <p className="text-slate-400 text-sm mb-2">✓ No credit card required</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">✓ Free 30-minute consultation</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">✓ No obligations whatsoever</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleCloseForm}
          ></div>

          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors z-10"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Get Started</h2>
                <p className="text-slate-600">Fill out the form and we'll get back to you within 24 hours</p>
              </div>

              <div className="space-y-5">
                {[
                  { id: "name", label: "Full Name *", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Email Address *", type: "email", placeholder: "john@example.com" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-sm font-medium text-slate-900 mb-2">{label}</label>
                    <input
                      type={type}
                      required={label.includes("*")}
                      value={formData[id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [id]: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                      placeholder={placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors bg-white"
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
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Project Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="499-5000">₹499 - ₹5,000</option>
                    <option value="5000-9999">₹5,000 - ₹9,999</option>
                    <option value="9999-19999">₹9,999 - ₹19,999</option>
                    <option value="19999+">₹19,999+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-sm text-slate-600 text-center">
                  We'll respond within 24 hours. Your information is confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
