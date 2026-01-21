import { Megaphone, Target, BarChart, TrendingUp } from 'lucide-react';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function DigitalMarketing() {
  const service = services[5];

  const extraSections = (
    <>
      {/* Marketing Strategies */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Growth Strategies</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Search Engine Ads", desc: "Target customers at the moment they search for you.", icon: <Target className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> },
              { title: "Performance Marketing", desc: "Data-driven campaigns focused on ROI and scale.", icon: <TrendingUp className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> },
              { title: "Funnel Optimization", desc: "Converting traffic into loyal, paying customers.", icon: <BarChart className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> }
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

      {/* Marketing Channels */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Omnichannel Reach</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Google Ads", desc: "Dominating search results for high-intent keywords.", icon: "🔍" },
              { title: "Meta Ads", desc: "Scaling through Facebook and Instagram audiences.", icon: "📱" },
              { title: "Email Marketing", desc: "Nurturing leads with personalized automation.", icon: "📧" },
              { title: "SEO", desc: "Building sustainable, long-term organic traffic.", icon: "🌐" },
              { title: "Analytics", desc: "Deep diving into data to refine and optimize.", icon: "📊" },
              { title: "Content Marketing", desc: "Providing value that builds brand authority.", icon: "💡" }
            ].map((channel, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-900 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{channel.icon}</div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2 text-slate-900">{channel.title}</h4>
                <p className="text-slate-500 font-medium italic">{channel.desc}</p>
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
      icon={Megaphone} 
      extraSections={extraSections}
    />
  );
}

export default DigitalMarketing;
