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

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { 
          title: "Color Grading", 
          desc: "Setting the perfect mood and tone for your visuals.",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          )
        },
        { 
          title: "Sound Design", 
          desc: "Immersive audio experiences with SFX and music.",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )
        },
        { 
          title: "Motion Graphics", 
          desc: "Dynamic titles and animations that pop.",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        { 
          title: "Seamless Cuts", 
          desc: "Perfect pacing that keeps viewers hooked.",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        },
        { 
          title: "VFX & Compositing", 
          desc: "Advanced visual effects for that extra edge.",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          )
        },
        { 
          title: "Multi-Cam Editing", 
          desc: "Dynamic switching for professional setups.",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )
        }
      ].map((feature, i) => (
        <div 
          key={i} 
          className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
        >
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          
          {/* Icon container with subtle background */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 mb-6 group-hover:scale-110 group-hover:border-slate-200 group-hover:shadow-lg transition-all duration-500">
            <div className="text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
              {feature.icon}
            </div>
          </div>
          
          <h4 className="text-xl font-black uppercase tracking-tighter mb-3 text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
            {feature.title}
          </h4>
          <p className="text-slate-500 font-medium italic text-sm leading-relaxed">
            {feature.desc}
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
      icon={Film} 
      extraSections={extraSections}
    />
  );
}

export default VideoEditing;
