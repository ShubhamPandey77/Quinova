import { Share2, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
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
    { 
      title: "Static Posts", 
      desc: "Clean, professional imagery that builds brand trust.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: "Short-Form Video", 
      desc: "Reels and TikToks designed for viral reach.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: "Stories & Polls", 
      desc: "Interactive content that builds community.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      title: "Educational Carousels", 
      desc: "High-value content that establishes authority.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      title: "Ad Creatives", 
      desc: "Conversion-focused designs for paid campaigns.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    { 
      title: "Community Management", 
      desc: "Real-time engagement with your audience.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    }
  ].map((type, i) => (
    <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      {/* Icon container with subtle background */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 mb-6 group-hover:scale-110 group-hover:border-slate-200 group-hover:shadow-lg transition-all duration-500">
        <div className="text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
          {type.icon}
        </div>
      </div>
      
      <h4 className="text-xl font-black uppercase tracking-tighter mb-3 text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
        {type.title}
      </h4>
      <p className="text-slate-500 font-medium italic text-sm leading-relaxed">
        {type.desc}
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
      icon={Share2} 
      extraSections={extraSections}
    />
  );
}

export default SocialMediaManagement;
