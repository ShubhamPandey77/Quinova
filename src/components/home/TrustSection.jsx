function TrustSection() {
  const trustPoints = [
    {
      title: "Certified Professionals",
      desc: "Expert team with proven expertise"
    },
    {
      title: "Transparent Communication",
      desc: "Clear updates throughout your project"
    },
    {
      title: "On-Time Delivery",
      desc: "100+ projects completed on schedule"
    },
    {
      title: "24/7 Support",
      desc: "Always here when you need us"
    },
    {
      title: "Results-Driven",
      desc: "Every action backed by data and ROI"
    },
    {
      title: "Money-Back Guarantee",
      desc: "100% satisfaction or your money back"
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Proven Excellence. Trusted by Industry Leaders.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            With 10+ years in the industry and 100+ successful projects, our track record speaks for itself.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">100+</div>
            <p className="text-slate-700 font-semibold text-lg">Projects Delivered</p>
            <p className="text-sm text-slate-600 mt-2">Across all sectors and scales</p>
          </div>
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-slate-900 bg-clip-text text-transparent mb-2">98%</div>
            <p className="text-slate-700 font-semibold text-lg">Client Satisfaction</p>
            <p className="text-sm text-slate-600 mt-2">Consistently exceeding expectations</p>
          </div>
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">10+</div>
            <p className="text-slate-700 font-semibold text-lg">Years Experience</p>
            <p className="text-sm text-slate-600 mt-2">Evolved expertise in digital solutions</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why Companies Choose Quinova</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm">✓</div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{point.title}</p>
                  <p className="text-slate-600 text-sm">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
