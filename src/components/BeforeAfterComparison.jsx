// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function BeforeAfterComparison({ beforeData, afterData }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const StatCard = ({ stat, isAfter }) => (
    <motion.div
      variants={itemVariants}
      className={`p-6 rounded-lg border-2 transform transition-all hover:scale-105 ${
        isAfter
          ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 text-white'
          : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'
      }`}
    >
      <div className="text-3xl mb-2">{stat.icon}</div>
      <div className={`text-2xl font-bold mb-1 ${isAfter ? 'text-white' : 'text-slate-900'}`}>
        {stat.value}
      </div>
      <div className={`text-sm ${isAfter ? 'text-slate-300' : 'text-slate-600'}`}>{stat.label}</div>
    </motion.div>
  );

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Before Section */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <div className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-slate-200">
                ❌ Without Solution
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{beforeData.title}</h3>
              <p className="text-slate-600">What your business looks like without professional digital services</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(beforeData.stats || beforeData.metrics || []).map((stat, index) => (
                <StatCard 
                  key={index} 
                  stat={typeof stat === 'string' ? { value: stat, label: '', icon: '❌' } : stat} 
                  isAfter={false} 
                />
              ))}
            </div>
          </div>

          {/* Arrow Transition */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center"
          >
            <div className="relative w-full h-16 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              </div>
              <div className="relative bg-white px-4 sm:px-6 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 font-bold" />
                <span className="font-bold text-slate-900 text-sm sm:text-base">TRANSFORMATION</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 font-bold" />
              </div>
            </div>
          </motion.div>

          {/* After Section */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <div className="inline-block bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✅ With Our Solution
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{afterData.title}</h3>
              <p className="text-slate-600">The exponential growth you can achieve with our proven digital strategy</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(afterData.stats || afterData.metrics || []).map((stat, index) => (
                <StatCard 
                  key={index} 
                  stat={typeof stat === 'string' ? { value: stat, label: '', icon: '✅' } : stat} 
                  isAfter={true} 
                />
              ))}
            </div>
          </div>

          {/* Impact Summary */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-900 rounded-lg p-8 text-white text-center"
          >
            <h4 className="text-xl sm:text-2xl font-bold mb-6">Average Results Clients See</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">10x</div>
                <div className="text-slate-400">Increase in Results</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3-6mo</div>
                <div className="text-slate-400">Time to ROI</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">300%+</div>
                <div className="text-slate-400">ROI on Investment</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default BeforeAfterComparison;
