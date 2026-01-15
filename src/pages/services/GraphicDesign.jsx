import { Palette, PenTool, Layers, Monitor } from 'lucide-react';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function GraphicDesign() {
  const service = services[3];

  const extraSections = (
    <>
      {/* Design Specialties */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Visual Specialties</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Brand Identity", desc: "Logos, color palettes, and typography that define you.", icon: <Layers className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> },
              { title: "Digital Design", desc: "Social media graphics and web assets that engage.", icon: <Monitor className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> },
              { title: "Print Media", desc: "Brochures, business cards, and physical branding.", icon: <PenTool className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> }
            ].map((type, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-6 hover:bg-slate-900 transition-all duration-500 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-white/10 transition-colors">
                  {type.icon}
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">{type.title}</h4>
                <p className="text-slate-500 font-medium italic group-hover:text-white/60 transition-colors">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Approach */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Our Design Philosophy</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Minimalism", desc: "Stripping away the noise to let your message shine.", icon: "✨" },
              { title: "User-Centric", desc: "Designs that aren't just pretty, but functional.", icon: "👤" },
              { title: "Consistency", desc: "A unified look across all your brand touchpoints.", icon: "🔄" },
              { title: "Storytelling", desc: "Visuals that communicate your brand's journey.", icon: "📖" },
              { title: "Modern Aesthetic", desc: "Staying ahead of trends for a future-proof look.", icon: "🚀" },
              { title: "Detail Oriented", desc: "Every pixel placed with purpose and precision.", icon: "🎯" }
            ].map((philosophy, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-900 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{philosophy.icon}</div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{philosophy.title}</h4>
                <p className="text-slate-500 font-medium italic">{philosophy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  return (
    <ServiceDetailLayout 
      service={service} 
      icon={Palette} 
      extraSections={extraSections}
    />
  );
}

export default GraphicDesign;
