// pages/services.jsx
import { Code, TrendingUp, Film, Palette, MessageSquare, Globe, CheckCircle, ArrowRight } from 'lucide-react';

function Services({ navigate }) {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Website Development",
      description: "Custom websites tailored to your business needs with modern design, responsive layouts, and powerful functionality that drives results.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed", "E-commerce Integration", "CMS Integration", "Custom Functionality"],
      price: "Starting at ₹9999"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Social Media Management",
      description: "Grow your online presence with strategic social media marketing, engaging content creation, and data-driven campaign management.",
      features: ["Content Strategy", "Daily Posting", "Community Management", "Analytics & Reporting", "Paid Advertising", "Influencer Outreach"],
      price: "Starting at ₹9999/mo"
    },
    {
      icon: <Film className="w-12 h-12" />,
      title: "Video Editing",
      description: "Professional video editing services for YouTube, social media, promotional content, and corporate videos that captivate your audience.",
      features: ["Color Grading", "Motion Graphics", "Sound Design", "Subtitles & Captions", "Quick Turnaround", "Multiple Formats"],
      price: "Starting at ₹1999"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Graphic Design",
      description: "Eye-catching designs including logos, posters, marketing materials, and brand identity that make your business stand out.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics", "Print Design", "Packaging Design"],
      price: "Starting at ₹499"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Content Writing",
      description: "Engaging, SEO-optimized content that resonates with your audience and drives conversions across all platforms.",
      features: ["Blog Posts", "Web Copy", "Product Descriptions", "SEO Content", "Email Campaigns", "Technical Writing"],
      price: "Starting at ₹499/article"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, PPC, email marketing, and conversion optimization.",
      features: ["PPC Campaigns", "Email Marketing", "SEO Strategy", "Conversion Optimization", "Marketing Automation", "Analytics Setup"],
      price: "Starting at ₹19999/mo*"
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to help your business succeed in the digital world
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                  <span className="text-xl font-bold text-black">{service.price}</span>
                  <button 
                    onClick={() => navigate('contact')}
                    className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and effective</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your needs and goals" },
              { step: "02", title: "Planning", desc: "We create a detailed project plan" },
              { step: "03", title: "Execution", desc: "We bring your vision to life" },
              { step: "04", title: "Delivery", desc: "We deliver and support your project" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-400 mb-8">
            Choose a service and let's get started on your project today
          </p>
          <button 
            onClick={() => navigate('contact')}
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all"
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;