import { ArrowRight, Smartphone, Globe, Zap, Film, Palette, MessageSquare, TrendingUp, GraduationCap, BookOpen } from "lucide-react";
import { services as servicesData } from "../../const";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function ServicesSection({ navigate }) {
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
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-slate-300"></div>
            
            <div className="w-12 h-px bg-slate-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Digital Solutions That Perform
          </h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((service, index) => (
            <Card 
              key={index} 
              className="group border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col h-full overflow-hidden bg-slate-50"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-slate-900 shadow-sm">
                  {getIcon(service.title)}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 relative inline-block uppercase tracking-tight">
                  {service.title}
                  <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-slate-900 opacity-20 rounded-full"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow pt-0">
                <div className="flex flex-col h-full justify-between">
                  <div className="text-sm font-medium text-slate-500 mb-8 line-clamp-2">
                    {service.description}
                  </div>
                  <button
                    onClick={() => navigate("services")}
                    className="text-slate-900 font-black uppercase tracking-tighter flex items-center gap-2 hover:gap-4 transition-all w-fit cursor-pointer mt-auto text-sm"
                  >
                    Explore Service
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
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
