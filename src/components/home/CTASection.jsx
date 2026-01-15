import { ArrowRight } from 'lucide-react';

function CTASection({ navigate, handleGetStartedClick }) {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-block bg-slate-500/20 text-slate-100 px-4 py-2 rounded-full text-sm font-semibold mb-6">Limited Time Offer</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Accelerate Your Business Growth?
        </h2>
        <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl mx-auto">
          Join 100+ successful companies that have transformed their digital presence and accelerated growth with Quinova's proven strategies and expert execution.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button 
            onClick={handleGetStartedClick}
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            Schedule Free Strategy Session
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => navigate('services')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700/50 transition-colors"
          >
            Explore All Services
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-700">
          <div>
            <p className="text-slate-400 text-sm mb-2">✓ No credit card required</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-2">✓ Free 30-minute consultation</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-2">✓ No obligations whatsoever</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
