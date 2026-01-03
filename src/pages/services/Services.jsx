import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, TrendingUp, Film, Palette, MessageSquare, Globe, CheckCircle, ArrowRight, Mail, Target, Zap, Rocket } from 'lucide-react';
import { services, processSteps, faqs } from '../../const';
import FAQSection from '../../components/FAQSection';
import ContactForm from '../../components/ContactForm';

function Services() {
  const routerNavigate = useNavigate();
  const servicePaths = [
    '/services/website-development',
    '/services/social-media-management',
    '/services/video-editing',
    '/services/graphic-design',
    '/services/content-writing',
    '/services/digital-marketing'
  ];
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

  const handleGetStartedClick = () => {
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  const servicesWithIcons = services.map((service, index) => ({
    ...service,
    icon: [<Code className="w-12 h-12" />, <TrendingUp className="w-12 h-12" />, <Film className="w-12 h-12" />, <Palette className="w-12 h-12" />, <MessageSquare className="w-12 h-12" />, <Globe className="w-12 h-12" />][index]
  }));

  const processStepsWithIcons = processSteps.map((step, index) => ({
    ...step,
    icon: [<Target className="w-6 h-6" />, <Zap className="w-6 h-6" />, <Rocket className="w-6 h-6" />, <CheckCircle className="w-6 h-6" />][index]
  }));

  return (
    <>
      <div className="pt-16 bg-white">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-linear-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-2">
                Professional IT Solutions 
              </h1>
                                            <div className="w-28 h-1 bg-gray-600 mx-auto rounded-full mb-6"></div>

              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Whether you need a stunning website, powerful marketing strategy, or creative brand identity, we have the expertise to deliver excellence across all disciplines.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: "🎯",
                  title: "Results-Focused",
                  desc: "Every service designed to drive measurable business results"
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  desc: "Efficient processes without compromising on quality"
                },
                {
                  icon: "👥",
                  title: "Expert Team",
                  desc: "Certified professionals with 1+ years of experience"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border-slate-200 rounded-xl p-8 h-full border  shadow-lg group-hover:shadow-2lg group-hover:border-slate-200 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section 
          id="all-services"
          ref={(el) => (observerRefs.current[0] = el)}
          className="py-10 px-6 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {servicesWithIcons.map((service, index) => (
                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div>
                      <div className="text-slate-900 mb-4 text-5xl">{service.icon}</div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                      <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                      <p className="text-slate-700 leading-relaxed mb-6">{service.longDescription}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        {/* <div>
                          <div className="text-3xl font-bold text-slate-900">{service.price}</div>
                        </div> */}
                        <div className="flex gap-2">
                          <button 
                            onClick={() => routerNavigate(servicePaths[index])}
                            className="bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-colors flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={handleGetStartedClick}
                            className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
                          >
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-4">✨ Key Features</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700">
                              <CheckCircle className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>


                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
       <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-20">
       <div className="inline-flex items-center gap-3 mb-4">
                                <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                                <span className="text-base font-semibold text-slate-600 tracking-normal">OUR APPROACH</span>
                                <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                            </div>
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-3 mb-3">
        Our Process
      </h2>
                                    <div className="w-20 h-1 bg-gray-600 mx-auto rounded-full mb-4"></div>

      <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
        A refined workflow that ensures clarity, quality, and seamless delivery.
      </p>
    </div>

    {/* Steps */}
    <div className="grid md:grid-cols-4 gap-10">
      {processStepsWithIcons.map((step, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center text-center"
        >
          {/* Step Number */}
          <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-semibold shadow-md">
            {step.step}
          </div>

          {/* Icon */}
          <div className="mt-6 mb-4 text-gray-800 flex justify-center">
            {step.icon}
          </div>

          {/* Text */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {step.desc}
          </p>

          {/* Line Indicator */}
          {index < processStepsWithIcons.length - 1 && (
            <div className="hidden md:block absolute top-1/2 right-[-2rem] w-10 h-[1px] bg-gradient-to-r from-gray-300 to-gray-100"></div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Client Benefits */}
        <section className="py-14 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                                <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                                <span className="text-base font-semibold text-slate-600 tracking-normal">WHY CLIENTS CHOOSE US</span>
                                <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                            </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
                Partnership That Delivers
              </h2>
                                            <div className="w-20 h-1 bg-gray-600 mx-auto rounded-full mb-4"></div>

            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Strategic Approach",
                  points: ["Deep understanding of your business", "Market research & competitor analysis", "Custom strategy tailored to goals"]
                },
                {
                  title: "Quality Execution",
                  points: ["Expert team with proven track record", "Latest technologies & best practices", "Meticulous attention to detail"]
                },
                {
                  title: "Transparent Communication",
                  points: ["Regular updates and reporting", "Clear milestones & deliverables", "Direct access to your project manager"]
                },
                {
                  title: "Long-Term Support",
                  points: ["Post-launch optimization", "Ongoing support & maintenance", "Continuous improvement strategies"]
                }
              ].map((item, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <span className="text-slate-900 font-bold mt-1">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} handleGetStartedClick={handleGetStartedClick} />
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleCloseForm}
          ></div>
          <div className="relative z-50">
            <ContactForm 
              onClose={handleCloseForm}
              defaultService=""
              showCloseButton={true}
              compact={false}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
