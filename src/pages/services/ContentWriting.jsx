import { FileText, PenTool, BookOpen, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function ContentWriting() {
  const service = services[4];

  const extraSections = (
    <>
      {/* Writing Specialties */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 opacity-25">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -8, 0],
              x: [0, 30, 0],
              y: [0, 15, 0]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-24 w-[28rem] h-[28rem] bg-gradient-to-br from-slate-100 to-slate-200 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 12, 0],
              x: [0, -40, 0],
              y: [0, -25, 0]
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-24 w-[32rem] h-[32rem] bg-gradient-to-tl from-slate-50 to-slate-150 rounded-full blur-3xl"
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
              Writing Specialties
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
              { title: "SEO Articles", desc: "Rank higher on Google with optimized, valuable content.", icon: <Search className="w-8 h-8 text-slate-900  transition-all duration-300" /> },
              { title: "Copywriting", desc: "Persuasive copy that converts visitors into customers.", icon: <PenTool className="w-8 h-8 text-slate-900  transition-all duration-300" /> },
              { title: "Storytelling", desc: "Engaging brand narratives that resonate with readers.", icon: <BookOpen className="w-8 h-8 text-slate-900  transition-all duration-300" /> }
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-[3rem] border border-slate-200/50 space-y-6  hover:border-slate-300 transition-all duration-500 shadow-lg hover:shadow-2xl backdrop-blur-sm"
              >
                {/* Premium Glow Effect */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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

      {/* Content Strategy */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">Our Writing Edge</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { 
      title: "Research-Led", 
      desc: "Deep diving into topics to provide authentic value.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    { 
      title: "SEO Optimized", 
      desc: "Keyword-rich content without compromising quality.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      )
    },
    { 
      title: "Brand Voice", 
      desc: "Matching your unique tone and personality perfectly.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    { 
      title: "Error-Free", 
      desc: "Meticulous proofreading for flawless delivery.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    { 
      title: "Plagiarism-Free", 
      desc: "100% original content tailored for your brand.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      title: "Engagement", 
      desc: "Crafting hooks that keep readers scroll-bound.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    }
  ].map((edge, i) => (
    <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      {/* Icon container with subtle background */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-200 from-slate-50 to-white border border-slate-100 mb-6 group-hover:scale-110 group-hover:border-slate-200 group-hover:shadow-lg transition-all duration-500">
        <div className="text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
          {edge.icon}
        </div>
      </div>
      
      <h4 className="text-xl font-black uppercase tracking-tighter mb-3 text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
        {edge.title}
      </h4>
      <p className="text-slate-500 font-medium italic text-sm leading-relaxed">
        {edge.desc}
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
      icon={FileText} 
      extraSections={extraSections}
    />
  );
}

export default ContentWriting;
