import { useState, useEffect } from 'react';
import { ArrowRight, Code, Zap, Film, Palette } from 'lucide-react';
import { Particles } from "@/components/ui/particles";

function HeroSection({ navigate, handleGetStartedClick, statsWithIcons }) {
  const [particleColor] = useState("#1660cd");
  const [activeWord, setActiveWord] = useState(0);
  const words = ["Services", "Satisfaction", "Success"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-40 px-6 bg-gradient-to-b from-slate-50 to-white">
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
        <div className="flex justify-center items-center">
          <div className="space-y-8 w-full max-w-3xl">
            <div className="space-y-4 text-center">
              <style>{`
                @keyframes slideInUp {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                .line-1 {
                  animation: slideInUp 1s ease-out 0.1s forwards;
                  opacity: 0;
                }
                .line-2 {
                  animation: slideInUp 1s ease-out 0.3s forwards;
                  opacity: 0;
                }
                .line-3 {
                  animation: slideInUp 1s ease-out 0.5s forwards;
                  opacity: 0;
                }
                .line-4 {
                  animation: slideInUp 1s ease-out 0.7s forwards;
                  opacity: 0;
                }
                .line-5 {
                  animation: slideInUp 1s ease-out 0.9s forwards;
                  opacity: 0;
                }
                .gradient-text {
                  background: linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                }
                .fill-button {
                  position: relative;
                  overflow: hidden;
                  border: 2px solid #1e293b;
                  background-color: transparent;
                  color: #1e293b;
                  transition: color 0.3s ease;
                }
                .fill-button::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: -100%;
                  width: 100%;
                  height: 100%;
                  background-color: #1e293b;
                  transition: left 0.6s ease;
                  z-index: -1;
                }
                .fill-button:hover {
                  color: white;
                }
                .fill-button:hover::before {
                  left: 0;
                }
              `}</style>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight space-y-2">
                <div className="line-1">
                  <span className="gradient-text">Technology that cares</span> for your
                </div>
                <div className="text-slate-900 line-2">
                  business, just like you do.
                </div>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto text-center font-medium tracking-wide line-3">
              We deliver AI-driven solutions that understand your business and respond with precision.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center line-4">
              <button 
                onClick={() => navigate('/services')}
                className="fill-button px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleGetStartedClick}
                className="fill-button px-8 py-3 rounded-lg font-semibold"
              >
                Contact Us
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-3xl mx-auto line-5">
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