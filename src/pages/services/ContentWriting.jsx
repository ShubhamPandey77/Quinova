import { FileText, PenTool, BookOpen, Search } from 'lucide-react';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function ContentWriting() {
  const service = services[4];

  const extraSections = (
    <>
      {/* Writing Specialties */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Writing Specialties</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "SEO Articles", desc: "Rank higher on Google with optimized, valuable content.", icon: <Search className="w-8 h-8 text-slate-900" /> },
              { title: "Copywriting", desc: "Persuasive copy that converts visitors into customers.", icon: <PenTool className="w-8 h-8 text-slate-900" /> },
              { title: "Storytelling", desc: "Engaging brand narratives that resonate with readers.", icon: <BookOpen className="w-8 h-8 text-slate-900" /> }
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

      {/* Content Strategy */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Our Writing Edge</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Research-Led", desc: "Deep diving into topics to provide authentic value.", icon: "🔍" },
              { title: "SEO Optimized", desc: "Keyword-rich content without compromising quality.", icon: "📈" },
              { title: "Brand Voice", desc: "Matching your unique tone and personality perfectly.", icon: "🗣️" },
              { title: "Error-Free", desc: "Meticulous proofreading for flawless delivery.", icon: "✍️" },
              { title: "Plagiarism-Free", desc: "100% original content tailored for your brand.", icon: "✅" },
              { title: "Engagement", desc: "Crafting hooks that keep readers scroll-bound.", icon: "🪝" }
            ].map((edge, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-900 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{edge.icon}</div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{edge.title}</h4>
                <p className="text-slate-500 font-medium italic">{edge.desc}</p>
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
      icon={FileText} 
      extraSections={extraSections}
    />
  );
}

export default ContentWriting;
