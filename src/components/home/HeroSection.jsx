import { useState } from 'react';
import { ArrowRight, Code, Zap, Film, Palette } from 'lucide-react';
import { Particles } from "@/components/ui/particles";

function HeroSection({ navigate, handleGetStartedClick, statsWithIcons }) {
  const [particleColor] = useState("#1660cd");

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          className="w-full h-full"
          quantity={80}
          vx={0.2}
          vy={0.5}
          staticity={40}
          size={0.8}
          ease={30}
          color={particleColor}
        />
      </div>

      <div className="max-w-7xl relative z-10 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Transform Your Business with Professional Digital Solutions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              With 10+ years of proven expertise, we deliver comprehensive IT solutions—from custom web development to strategic digital marketing—that drive measurable business growth and lasting results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/services')}
                className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleGetStartedClick}
                className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                Contact Us
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {statsWithIcons.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-slate-600 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Code className="w-6 h-6" />, title: "Web Development", color: "bg-blue-50" },
                { icon: <Zap className="w-6 h-6" />, title: "Digital Marketing", color: "bg-amber-50" },
                { icon: <Film className="w-6 h-6" />, title: "Video Editing", color: "bg-red-50" },
                { icon: <Palette className="w-6 h-6" />, title: "Graphic Design", color: "bg-purple-50" }
              ].map((item, index) => (
                <div key={index} className={`${item.color} rounded-lg p-6 text-center hover:shadow-lg transition-shadow`}>
                  <div className="text-slate-900 mb-3 flex justify-center">{item.icon}</div>
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;