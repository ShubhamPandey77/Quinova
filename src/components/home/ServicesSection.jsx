import {  Smartphone, Palette, MessageSquare, TrendingUp, GraduationCap, BookOpen } from "lucide-react";
import { services as servicesData } from "../../const";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, Zap, Film, ArrowRight } from "lucide-react";
// import { BorderBeam } from "@/components/ui/border-beam";

function ServicesSection({ navigate }) {

   const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      desc: "Custom-built, high-performance websites optimized for conversions. From responsive design to SEO-ready architecture, we create digital experiences that work.",
      highlight: "blue",
      highlight_bg: "#EFF6FF",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Marketing",
      desc: "Data-driven strategies across SEO, PPC, and content marketing. We track every metric and optimize for real business outcomes, not just vanity numbers.",
      highlight: "amber",
      highlight_bg: "#FFFBEB",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Creative Services",
      desc: "Professional video editing, graphic design, and content creation that elevates your brand. We combine technical excellence with creative strategy.",
      highlight: "red",
      highlight_bg: "#FEF2F2",
    },
  ];

  const getIcon = (title) => {
    switch (title) {
      case "Website Development": return <Globe className="w-8 h-8" />;
      case "Social Media Management": return <TrendingUp className="w-8 h-8" />;
      case "Video Editing": return <Film className="w-8 h-8" />;
      case "Graphic Design": return <Palette className="w-8 h-8" />;
      case "Content Writing": return <MessageSquare className="w-8 h-8" />;
      case "Digital Marketing": return <Zap className="w-8 h-8" />;
      case "Android & iOS Development": return <Smartphone className="w-8 h-8" />;
      case "Academic Projects": return <GraduationCap className="w-8 h-8" />;
      default: return <Globe className="w-8 h-8" />;
    }
  };

  return (
    <section
      id="services-section"
      className="py-16 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              <span className="text-base font-semibold text-slate-600 tracking-normal">OUR EXPERTISE</span>
             <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Digital Solutions That Perform
          </h2>
           <div className="w-20 h-1 bg-gray-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Modern solutions designed to scale your business.{" "}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
      {services.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-xl
                     border border-slate-200 bg-white p-7
                     transition-all duration-300
                     hover:-translate-y-1 hover:shadow-xl hover:border-slate-900/20"
        >
          {/* Icon */}
          <div
            className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg
                       transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: item.highlight_bg }}
          >
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold text-slate-900">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mb-5 text-sm leading-relaxed text-slate-600">
            {item.desc}
          </p>

          {/* CTA */}
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 text-sm font-semibold
                       text-slate-900 transition-all
                       group-hover:gap-3"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Border Beam */}
          {/* <BorderBeam duration={8} size={120} /> */}
        </div>
      ))}
    </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("services")}
            className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all active:scale-95 inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-slate-200"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
