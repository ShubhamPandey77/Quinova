import { Smartphone, Zap, Code } from 'lucide-react';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function AppDevelopment() {
  const service = services[6]; // Android & iOS Development

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
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <Smartphone className="w-7 h-7 text-slate-900" />
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tighter">Mobile Frameworks</h4>
              <ul className="space-y-4">
                {['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'].map((tech, i) => (
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
              <h4 className="text-2xl font-black uppercase tracking-tighter">Backend & Infrastructure</h4>
              <ul className="space-y-4">
                {['Firebase', 'Node.js APIs', 'AWS Cloud', 'GraphQL'].map((tech, i) => (
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
    </>
  );

  return (
    <ServiceDetailLayout 
      service={service} 
      icon={Smartphone} 
      extraSections={extraSections}
    />
  );
}

export default AppDevelopment;
