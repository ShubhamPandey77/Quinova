import { Palette, PenTool, Layers, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
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
                <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-white transition-colors">
                  {type.title}
                </h3>
                <p className="text-lg text-slate-600 font-medium italic group-hover:text-slate-400 transition-colors">
                  {type.desc}
                </p>
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
    { 
      title: "Minimalism", 
      desc: "Stripping away the noise to let your message shine.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    { 
      title: "User-Centric", 
      desc: "Designs that aren't just pretty, but functional.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    { 
      title: "Consistency", 
      desc: "A unified look across all your brand touchpoints.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    { 
      title: "Storytelling", 
      desc: "Visuals that communicate your brand's journey.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      )
    },
    { 
      title: "Modern Aesthetic", 
      desc: "Staying ahead of trends for a future-proof look.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      title: "Detail Oriented", 
      desc: "Every pixel placed with purpose and precision.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ].map((philosophy, i) => (
    <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      {/* Icon container with subtle background */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 mb-6 group-hover:scale-110 group-hover:border-slate-200 group-hover:shadow-lg transition-all duration-500">
        <div className="text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
          {philosophy.icon}
        </div>
      </div>
      
      <h4 className="text-xl font-black uppercase tracking-tighter mb-3 text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
        {philosophy.title}
      </h4>
      <p className="text-slate-500 font-medium italic text-sm leading-relaxed">
        {philosophy.desc}
      </p>
      
      {/* Subtle indicator line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent group-hover:from-transparent group-hover:via-slate-200 group-hover:to-transparent transition-all duration-300"></div>
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
