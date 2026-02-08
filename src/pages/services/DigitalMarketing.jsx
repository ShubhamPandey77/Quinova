import { Megaphone, Target, BarChart, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function DigitalMarketing() {
  const service = services[5];

  const extraSections = (
    <>
      {/* Marketing Strategies */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 10, 0],
              x: [0, 25, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -15, 0],
              x: [0, -35, 0],
              y: [0, 25, 0]
            }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-gradient-to-tl from-slate-50 to-slate-150 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-4"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900"
            >
              Growth Strategies
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Search Engine Ads", desc: "Target customers at the moment they search for you.", icon: <Target className="w-8 h-8 text-slate-900  transition-all duration-300" /> },
              { title: "Performance Marketing", desc: "Data-driven campaigns focused on ROI and scale.", icon: <TrendingUp className="w-8 h-8 text-slate-900  transition-all duration-300" /> },
              { title: "Funnel Optimization", desc: "Converting traffic into loyal, paying customers.", icon: <BarChart className="w-8 h-8 text-slate-900  transition-all duration-300" /> }
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-[3rem] border border-slate-200/50 space-y-6  hover:border-slate-300 transition-all duration-500 shadow-lg hover:shadow-2xl backdrop-blur-sm"
              >
                {/* Premium Glow Effect */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-white to-slate-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10"
                >
                  {type.icon}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  className="text-2xl font-black uppercase tracking-tighter text-slate-900  transition-all duration-300 relative z-10"
                >
                  {type.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  className="text-lg text-slate-600 font-medium italic  transition-all duration-300 relative z-10"
                >
                  {type.desc}
                </motion.p>

                {/* Subtle Border Animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-900 to-slate-700 rounded-b-[3rem] origin-left"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Omnichannel Reach</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { 
      title: "Google Ads", 
      desc: "Dominating search results for high-intent keywords.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      )
    },
    { 
      title: "Meta Ads", 
      desc: "Scaling through Facebook and Instagram audiences.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      title: "Email Marketing", 
      desc: "Nurturing leads with personalized automation.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: "SEO", 
      desc: "Building sustainable, long-term organic traffic.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: "Analytics", 
      desc: "Deep diving into data to refine and optimize.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      title: "Content Marketing", 
      desc: "Providing value that builds brand authority.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ].map((channel, i) => (
    <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      {/* Icon container with subtle background */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 mb-6 group-hover:scale-110 group-hover:border-slate-200 group-hover:shadow-lg transition-all duration-500">
        <div className="text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
          {channel.icon}
        </div>
      </div>
      
      <h4 className="text-xl font-black uppercase tracking-tighter mb-3 text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
        {channel.title}
      </h4>
      <p className="text-slate-500 font-medium italic text-sm leading-relaxed">
        {channel.desc}
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
      icon={Megaphone} 
      extraSections={extraSections}
    />
  );
}

export default DigitalMarketing;
