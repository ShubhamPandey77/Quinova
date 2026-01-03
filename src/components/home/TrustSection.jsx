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
      desc: "10+ projects completed on schedule"
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
      title: "Satisfaction Guarantee",
      desc: "98% client satisfaction"
    }
  ];

  const stats = [
    { label: 'Projects Completed', number: '10+' },
    { label: 'Happy Clients', number: '98%' },
    { label: 'Years of Experience', number: '1+' },
    // Add more stats as needed
  ];

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <span className="text-base font-semibold text-slate-600 tracking-normal">
              PROVEN EXCELLENCE
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted By Industry Leaders
          </h2>
                              <div className="w-20 h-1 bg-gray-600 mx-auto rounded-full mb-4"></div>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our team has delivered exceptional results for clients across various industries.
          </p>
        </div>
        

        {/* <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">10+</div>
            <p className="text-slate-700 font-semibold text-lg">Projects Delivered</p>
            <p className="text-sm text-slate-600 mt-2">Across all sectors and scales</p>
          </div>
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-slate-900 bg-clip-text text-transparent mb-2">98%</div>
            <p className="text-slate-700 font-semibold text-lg">Client Satisfaction</p>
            <p className="text-sm text-slate-600 mt-2">Consistently exceeding expectations</p>
          </div>
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">1+</div>
            <p className="text-slate-700 font-semibold text-lg">Years Experience</p>
            <p className="text-sm text-slate-600 mt-2">Evolved expertise in digital solutions</p>
          </div>
        </div> */}

        {/* Stats Bar - Premium */}
                        <section className="relative mt-10 px-6 mb-20">
                            <div className="max-w-7xl mx-auto">
                                <div className="bg-gradient-to-r from-white to-slate-50 rounded-2xl shadow-2xl p-8 border border-slate-100">
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {stats.map((stat, index) => (
                                            <div key={index} className="text-center group">
                                                <div className="text-5xl font-bold text-slate-900 mb-2 relative">
                                                    {stat.number}
                                                    {/* <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
                                                </div>
                                                <div className="text-sm text-slate-600 font-medium tracking-wide">{stat.label}</div>
                                                <div className="h-0.5 w-20 bg-gradient-to-r from-transparent  via-slate-200 to-transparent mx-auto mt-3 group-hover:w-16 transition-all duration-300"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

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
