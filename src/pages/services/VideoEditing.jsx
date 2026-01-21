import { Film, Video, Clapperboard, Youtube } from 'lucide-react';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function VideoEditing() {
  const service = services[2];

  const extraSections = (
    <>
      {/* Video Specializations */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Cinematic Specializations</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "YouTube Content", desc: "Retention-optimized editing for creators.", icon: <Youtube className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> },
              { title: "Corporate Videos", desc: "Professional storytelling for brands.", icon: <Clapperboard className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> },
              { title: "Social Reels", desc: "Fast-paced, engaging short-form content.", icon: <Video className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" /> }
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

      {/* Editing Features */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Post-Production Magic</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Color Grading", desc: "Setting the perfect mood and tone for your visuals.", icon: "🎨" },
              { title: "Sound Design", desc: "Immersive audio experiences with SFX and music.", icon: "🔊" },
              { title: "Motion Graphics", desc: "Dynamic titles and animations that pop.", icon: "✨" },
              { title: "Seamless Cuts", desc: "Perfect pacing that keeps viewers hooked.", icon: "✂️" },
              { title: "VFX & Compositing", desc: "Advanced visual effects for that extra edge.", icon: "🚀" },
              { title: "Multi-Cam Editing", desc: "Dynamic switching for professional setups.", icon: "🎥" }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-900 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2 text-slate-900">{feature.title}</h4>
                <p className="text-slate-500 font-medium italic">{feature.desc}</p>
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
      icon={Film} 
      extraSections={extraSections}
    />
  );
}

export default VideoEditing;
