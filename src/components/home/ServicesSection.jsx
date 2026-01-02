import { Globe, Zap, Film, ArrowRight } from 'lucide-react';

function ServicesSection({ navigate }) {
  const services = [
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
  ];

  return (
    <section id="services-section" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/35">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-slate-600 font-semibold mb-2">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Services That Drive Results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer end-to-end digital solutions backed by 1+ years of industry expertise and 10+ successful projects delivered across all sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-lg p-8 hover:border-slate-900 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-slate-900" style={{
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
  );
}

export default ServicesSection;
