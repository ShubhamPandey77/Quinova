function ProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Strategic Discovery",
      desc: "We conduct a thorough consultation to understand your business goals, target audience, and challenges. This foundation determines everything that follows."
    },
    {
      step: "2",
      title: "Custom Strategy",
      desc: "Based on our analysis, we create a detailed roadmap with clear milestones, timelines, and deliverables tailored specifically to your objectives."
    },
    {
      step: "3",
      title: "Expert Execution",
      desc: "Our experienced team brings your vision to life with regular updates, transparent communication, and your full involvement throughout the project."
    },
    {
      step: "4",
      title: "Launch & Optimize",
      desc: "We don't stop at launch. Continuous support, monitoring, and optimization ensure sustained success and measurable business impact."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-slate-600 font-semibold mb-2">Proven Methodology</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Transparent, Collaborative Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Four clear phases designed to ensure your vision becomes reality. We keep you informed every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-slate-900 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
