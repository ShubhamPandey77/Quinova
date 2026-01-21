import { Globe, Code, Zap } from 'lucide-react';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function WebsiteDevelopment() {
  const service = services[0];

  const extraSections = (
    <>
      {/* Detailed Tech Stack */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Our Tech Stack</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Frontend</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "React.js for dynamic interfaces",
                    "Tailwind CSS for responsive design",
                    "Next.js for SEO optimization",
                    "TypeScript for type safety"
                  ].map((tech, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-slate-600">
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Backend</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Node.js or Python backends",
                    "MongoDB or PostgreSQL databases",
                    "AWS or Vercel hosting",
                    "RESTful API design"
                  ].map((tech, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-slate-600">
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Solutions We Provide</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Sites",
                desc: "Online stores with payment integration and inventory management.",
                icon: "🛍️"
              },
              {
                title: "Corporate Websites",
                desc: "Professional brand presence with lead generation focus.",
                icon: "🏢"
              },
              {
                title: "SaaS Platforms",
                desc: "Scalable web applications with user authentication.",
                icon: "⚙️"
              },
              {
                title: "Portfolio Sites",
                desc: "Showcase your work with stunning visual presentations.",
                icon: "🎨"
              },
              {
                title: "Lead Generation",
                desc: "Optimized to capture leads with strategic conversion funnels.",
                icon: "📝"
              },
              {
                title: "Content Blogs",
                desc: "SEO-optimized blogs that drive organic traffic.",
                icon: "📚"
              }
            ].map((type, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{type.icon}</div>
                <h4 className="font-black text-slate-900 mb-3 text-xl uppercase tracking-tighter">{type.title}</h4>
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
