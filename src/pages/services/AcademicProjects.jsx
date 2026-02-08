import { GraduationCap, Code, Rocket, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function AcademicProjects() {
  const service = services[7];

  const extraSections = (
    <>
      {/* Project Categories */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              x: [0, 20, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -10, 0],
              x: [0, -30, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-gradient-to-tl from-slate-50 to-slate-100 rounded-full blur-3xl"
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
              Project Specializations
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
              {
                title: "Web Technologies",
                desc: "Full-stack applications using modern MERN/Next.js stacks.",
                icon: <Code className="w-8 h-8 text-slate-900 group-hover:text-white transition-all duration-300" />
              },
              {
                title: "Machine Learning",
                desc: "Data analysis, prediction models, and AI integrations.",
                icon: <Rocket className="w-8 h-8 text-slate-900 group-hover:text-white transition-all duration-300" />
              },
              {
                title: "Mobile Apps",
                desc: "Native and cross-platform mobile solutions for Android/iOS.",
                icon: <BookOpen className="w-8 h-8 text-slate-900 group-hover:text-white transition-all duration-300" />
              }
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
                className="group relative p-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-[3rem] border border-slate-200/50 space-y-6 hover:bg-gradient-to-br hover:from-slate-900 hover:to-slate-800 hover:border-slate-700 transition-all duration-500 shadow-lg hover:shadow-2xl backdrop-blur-sm"
              >
                {/* Premium Glow Effect */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                  className="text-2xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-white transition-all duration-300 relative z-10"
                >
                  {type.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  className="text-lg text-slate-600 font-medium italic group-hover:text-slate-300 transition-all duration-300 relative z-10"
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

      {/* Support Features */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 15, 0],
              x: [0, 40, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 -right-32 w-[25rem] h-[25rem] bg-gradient-to-bl from-slate-200 to-slate-300 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, -20, 0],
              x: [0, -50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 -left-32 w-[30rem] h-[30rem] bg-gradient-to-tr from-slate-100 to-slate-200 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16 space-y-4"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900"
            >
              Full Academic Support
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { 
      title: "Code Explanation", 
      desc: "Deep dive into every line of code for your viva-voce.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      title: "Documentation", 
      desc: "Complete project reports following university standards.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      title: "Setup Support", 
      desc: "Helping you get the project running on your own machine.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      title: "PPT Design", 
      desc: "Professional presentation decks for your final defense.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      )
    },
    { 
      title: "Future Guidance", 
      desc: "Advice on how to scale the project for your career.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    { 
      title: "Plagiarism Check", 
      desc: "Ensuring 100% original work for your submission.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ].map((support, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={{
        y: -6,
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      className="group relative p-8 bg-gradient-to-br from-white to-slate-50 rounded-[2.5rem] border border-slate-200/60 hover:border-slate-300 transition-all duration-500 shadow-lg hover:shadow-2xl backdrop-blur-sm overflow-hidden"
    >
      {/* Premium Glow Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        // whileHover={{ scale: 1.15, rotate: 10 }}
        // transition={{ duration: 0.3 }}
        className="mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 group-hover:border-slate-300 group-hover:shadow-md transition-all duration-500">
          <div className="text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
            {support.icon}
          </div>
        </div>
      </motion.div>

      <motion.h4
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        className="text-xl font-black uppercase tracking-tighter mb-2 text-slate-900 group-hover:text-slate-800 transition-all duration-300 relative z-10"
      >
        {support.title}
      </motion.h4>

      <motion.p
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        className="text-slate-500 font-medium italic group-hover:text-slate-600 transition-all duration-300 relative z-10"
      >
        {support.desc}
      </motion.p>

      {/* Animated Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-900 to-slate-700 origin-left"
      />
    </motion.div>
  ))}
</div>
        </div>
      </section>
    </>
  );

  return (
    <ServiceDetailLayout 
      service={service} 
      icon={GraduationCap} 
      extraSections={extraSections}
    />
  );
}

export default AcademicProjects;
