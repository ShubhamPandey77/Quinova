import { Award, TrendingUp, Rocket, Users, CheckCircle, Shield, ArrowRight } from 'lucide-react';

function WhyChooseUsSection({ handleGetStartedClick }) {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "1+ Years of Expertise",
      desc: "A decade of proven success across web development, marketing, design, and digital strategy. We've evolved with the industry."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "100+ Successful Projects",
      desc: "Every project completed on-time and on-budget. We've worked with startups, SMEs, and enterprises across diverse industries."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Execution",
      desc: "Agile processes and experienced team mean faster delivery without sacrificing quality or attention to detail."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Always Available",
      desc: "24/7 support means your questions are answered and issues are resolved whenever you need us, anywhere in the world."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "98% Satisfaction Rate",
      desc: "Your success is genuinely our success. We back our work with a 100% satisfaction guarantee"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Results-Driven Approach",
      desc: "Every recommendation backed by data and analytics. We measure success by your business growth, not vanity metrics."
    }
  ];

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-slate-600 font-semibold mb-2">Our Commitment</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Businesses Choose Quinova
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We combine strategic thinking with technical excellence to deliver solutions that not only meet expectations but exceed them. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
