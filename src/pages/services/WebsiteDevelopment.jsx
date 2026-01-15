import { Globe, Code, Zap } from 'lucide-react';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function WebsiteDevelopment() {
  const service = services[0];

  const extraSections = (
    <>
      {/* Tech Stack */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Our Tech Stack</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-6">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter">Frontend Mastery</h4>
              <ul className="space-y-4">
                {['React.js & Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'].map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-slate-600 uppercase tracking-tight">
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 bg-slate-900 rounded-[3rem] text-white space-y-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-slate-900" />
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter">Backend & Cloud</h4>
              <ul className="space-y-4">
                {['Node.js & Python', 'PostgreSQL & MongoDB', 'AWS & Vercel', 'Docker & Kubernetes'].map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-white/60 uppercase tracking-tight">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Solutions for Every Need</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "E-Commerce", desc: "Scale your sales with high-performance online stores.", icon: "🛍️" },
              { title: "Corporate", desc: "Establish authority with a professional brand presence.", icon: "🏢" },
              { title: "SaaS Platforms", desc: "Build powerful, scalable web applications.", icon: "⚙️" },
              { title: "Portfolios", desc: "Showcase your work with stunning visual impact.", icon: "🎨" },
              { title: "Lead Gen", desc: "Convert visitors into customers with optimized funnels.", icon: "📝" },
              { title: "Blogs", desc: "Share your voice with SEO-ready content hubs.", icon: "📚" }
            ].map((type, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-900 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{type.icon}</div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{type.title}</h4>
                <p className="text-slate-500 font-medium italic">{type.desc}</p>
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
      icon={Globe} 
      extraSections={extraSections}
    />
  );
}

export default WebsiteDevelopment;
