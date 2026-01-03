function ProcessSection() {
  const steps = [
    {
      step: "1",
      title: "Strategic Discovery",
      desc: "We conduct a thorough consultation to understand your business goals, target audience, and challenges.",
    },
    {
      step: "2",
      title: "Custom Strategy",
      desc: "Based on our analysis, we create a detailed roadmap with clear milestones tailored to your objectives.",
    },
    {
      step: "3",
      title: "Expert Execution",
      desc: "Our team brings your vision to life with regular updates and transparent communication throughout.",
    },
    {
      step: "4",
      title: "Launch & Optimize",
      desc: "Continuous support, monitoring, and optimization ensure sustained success and business impact.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <span className="text-base font-semibold text-slate-600 tracking-normal">
              PROVEN METHODOLOGY
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Clear, Collaborative Process
          </h2>
                    <div className="w-20 h-1 bg-gray-600 mx-auto rounded-full mb-4"></div>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Four structured phases designed to deliver maximum value and results.
          </p>
        </div>

        <div className="relative">
          {/* Main connecting line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-900 via-slate-900/50 to-slate-900 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                {/* Step number container */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold mx-auto shadow-lg z-10 relative">
                    {item.step}
                  </div>
                  
                  {/* Improved connecting line for mobile */}
                  {index < steps.length - 1 && (
                    <>
                      <div className="md:hidden absolute top-7 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-900 via-slate-900/30 to-transparent -z-10"></div>
                      <div className="hidden md:block absolute top-8 -right-2 w-4 h-0.5 bg-gradient-to-r from-slate-900 to-slate-900/30 z-0"></div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="text-center px-2">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
               
              </div>
            ))}
          </div>
        </div>
        
        {/* Optional: Process flow label */}
        <div className="text-center mt-12 pt-8 border-t border-slate-100">
          <p className="text-slate-500 text-sm font-medium">
            Each phase builds upon the last for maximum efficiency and results
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;