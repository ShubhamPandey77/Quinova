import { Globe, Code, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../../const';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';

function WebsiteDevelopment() {
  const service = services[0];

  const extraSections = (
    <>
      {/* Detailed Tech Stack */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 25, 0],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 -left-32 w-[35rem] h-[35rem] bg-gradient-to-br from-slate-100 to-slate-200 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -30, 0],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 -right-32 w-[40rem] h-[40rem] bg-gradient-to-tl from-slate-50 to-slate-150 rounded-full blur-3xl"
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
              Our Tech Stack
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-[3rem] p-12 border border-slate-200/50 shadow-xl backdrop-blur-sm relative overflow-hidden"
          >
            {/* Premium Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <Code className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">Frontend</h3>
                </motion.div>
                <ul className="space-y-4">
                  {[
                    "React.js for dynamic interfaces",
                    "Tailwind CSS for responsive design",
                    "Next.js for SEO optimization",
                    "TypeScript for type safety"
                  ].map((tech, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + (i * 0.1), duration: 0.5 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                        className="w-1.5 h-1.5 bg-gradient-to-r from-slate-900 to-slate-700 rounded-full"
                      />
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">Backend</h3>
                </motion.div>
                <ul className="space-y-4">
                  {[
                    "Node.js or Python backends",
                    "MongoDB or PostgreSQL databases",
                    "AWS or Vercel hosting",
                    "RESTful API design"
                  ].map((tech, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + (i * 0.1), duration: 0.5 }}
                      whileHover={{ x: -5 }}
                      className="flex items-center gap-3 font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                        className="w-1.5 h-1.5 bg-gradient-to-r from-slate-900 to-slate-700 rounded-full"
                      />
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 opacity-15">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 45, 0],
              x: [0, 70, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-40 w-[45rem] h-[45rem] bg-gradient-to-br from-slate-200 to-slate-300 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.6, 1],
              rotate: [0, -45, 0],
              x: [0, -80, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-40 w-[50rem] h-[50rem] bg-gradient-to-tl from-slate-100 to-slate-200 rounded-full blur-3xl"
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
              Solutions We Provide
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
  {[
    {
      title: "E-Commerce Sites",
      desc: "Online stores with payment integration and inventory management.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Corporate Websites",
      desc: "Professional brand presence with lead generation focus.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "SaaS Platforms",
      desc: "Scalable web applications with user authentication.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Portfolio Sites",
      desc: "Showcase your work with stunning visual presentations.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Lead Generation",
      desc: "Optimized to capture leads with strategic conversion funnels.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Content Blogs",
      desc: "SEO-optimized blogs that drive organic traffic.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ].map((type, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 rounded-[2.5rem] p-8 hover:border-slate-300 transition-all duration-500 shadow-lg hover:shadow-2xl backdrop-blur-sm overflow-hidden"
    >
      {/* Premium Glow Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        // whileHover={{ scale: 1.2, rotate: 15 }}
        // transition={{ duration: 0.3 }}
        className="mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 group-hover:border-slate-300 group-hover:shadow-md transition-all duration-500">
          <div className="text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
            {type.icon}
          </div>
        </div>
      </motion.div>

      <motion.h4
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        className="font-black text-slate-900 mb-3 text-xl uppercase tracking-tighter group-hover:text-slate-800 transition-all duration-300 relative z-10"
      >
        {type.title}
      </motion.h4>

      <motion.p
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        className="text-slate-500 font-medium italic group-hover:text-slate-600 transition-all duration-300 relative z-10"
      >
        {type.desc}
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
      icon={Globe} 
      extraSections={extraSections}
    />
  );
}

export default WebsiteDevelopment;
