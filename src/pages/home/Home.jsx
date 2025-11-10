
import {
  Code,
  Globe,
  TrendingUp,
  Film,
  Palette,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react";
import { motion }  from "framer-motion";


function Home({ navigate }) {
  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
    { number: "1+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Social Media",
      color: "from-gray-700 to-black",
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "Video Editing",
      color: "from-gray-600 to-gray-900",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Graphic Design",
      color: "from-gray-500 to-gray-800",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "They transformed our online presence completely. Our website looks amazing!",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      company: "Creative Studios",
      text: "Professional, creative, and always on time. Highly recommended!",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Davis",
      company: "Fashion Forward",
      text: "The team understood our vision perfectly. Excellent work!",
      rating: 5,
      avatar: "ED",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-linear-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gray-800/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div
            className="absolute w-96 h-96 bg-gray-700/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-block">
                <span className="bg-linear-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold border border-gray-700">
                  ⚡ Premium IT Solutions
                </span>
              </div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                Elevate Your
                <span className="block mt-2 bg-linear-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-400 leading-relaxed max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                We deliver cutting-edge IT solutions including web development,
                social media management, video editing, and graphic design to
                transform your business.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <button
                  onClick={() => navigate("services")}
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-2xl hover:shadow-white/20 flex items-center gap-2 group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate("contact")}
                  className="bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-black transition-all"
                >
                  Contact Us
                </button>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-800">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  >
                    <div className="text-3xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Animated Service Cards */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    className="bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 bg-linear-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-4`}
                    >
                      {service.icon}
                    </div>
                    <div className="text-white font-semibold text-sm">
                      {service.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <motion.section
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-600 font-semibold text-lg">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business
              growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Web Development",
                desc: "Custom, responsive websites built with modern technologies",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Digital Marketing",
                desc: "Strategic campaigns that drive real business results",
              },
              {
                icon: <Film className="w-8 h-8" />,
                title: "Video Production",
                desc: "Professional video editing and content creation",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-black text-white rounded-2xl p-8 cursor-pointer group shadow-lg hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                <button
                  onClick={() => navigate("services")}
                  className="mt-6 text-white font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 px-6 bg-gray-50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-600 font-semibold text-lg">
              Client Success
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 bg-black text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can help transform your business with our IT
            solutions
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("contact")}
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-2xl"
          >
            Get Free Consultation
          </motion.button>
        </div>
      </motion.section>
    </>
  );
}

export default Home;
