import { Share2, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function SocialMediaManagement() {
  const service = services[1];

  const extraSections = (
    <>
      {/* Platforms Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Platforms We Manage</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Instagram', icon: Instagram },
              { name: 'Facebook', icon: Facebook },
              { name: 'LinkedIn', icon: Linkedin },
              { name: 'Twitter', icon: Twitter }
            ].map((platform, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center gap-4 group hover:bg-slate-900 transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
                  <platform.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-white transition-colors text-center">
                  {platform.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Engagement-First Content</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Static Posts", desc: "Clean, professional imagery that builds brand trust.", icon: "🖼️" },
              { title: "Short-Form Video", desc: "Reels and TikToks designed for viral reach.", icon: "🤳" },
              { title: "Stories & Polls", desc: "Interactive content that builds community.", icon: "📊" },
              { title: "Educational Carousels", desc: "High-value content that establishes authority.", icon: "📚" },
              { title: "Ad Creatives", desc: "Conversion-focused designs for paid campaigns.", icon: "🎯" },
              { title: "Community Management", desc: "Real-time engagement with your audience.", icon: "💬" }
            ].map((type, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-900 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{type.icon}</div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2 text-slate-900">{type.title}</h4>
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
      icon={Share2} 
      extraSections={extraSections}
    />
  );
}

export default SocialMediaManagement;
