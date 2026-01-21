import { GraduationCap, Code, Rocket, BookOpen } from 'lucide-react';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function AcademicProjects() {
  const service = services[7];

  const extraSections = (
    <>
      {/* Project Categories */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Project Specializations</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Web Technologies", 
                desc: "Full-stack applications using modern MERN/Next.js stacks.", 
                icon: <Code className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> 
              },
              { 
                title: "Machine Learning", 
                desc: "Data analysis, prediction models, and AI integrations.", 
                icon: <Rocket className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> 
              },
              { 
                title: "Mobile Apps", 
                desc: "Native and cross-platform mobile solutions for Android/iOS.", 
                icon: <BookOpen className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> 
              }
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

      {/* Support Features */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Full Academic Support</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Code Explanation", desc: "Deep dive into every line of code for your viva-voce.", icon: "👨‍💻" },
              { title: "Documentation", desc: "Complete project reports following university standards.", icon: "📄" },
              { title: "Setup Support", desc: "Helping you get the project running on your own machine.", icon: "⚙️" },
              { title: "PPT Design", desc: "Professional presentation decks for your final defense.", icon: "📊" },
              { title: "Future Guidance", desc: "Advice on how to scale the project for your career.", icon: "🚀" },
              { title: "Plagiarism Check", desc: "Ensuring 100% original work for your submission.", icon: "✅" }
            ].map((support, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-900 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{support.icon}</div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2 text-slate-900">{support.title}</h4>
                <p className="text-slate-500 font-medium italic">{support.desc}</p>
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
      icon={GraduationCap} 
      extraSections={extraSections}
    />
  );
}

export default AcademicProjects;
