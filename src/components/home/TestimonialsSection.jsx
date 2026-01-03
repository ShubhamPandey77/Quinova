import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';
import { FaRegUser } from "react-icons/fa";

const getAvatarData = (name) => {
  const colors = [
    { bg: 'bg-blue-50', text: 'text-blue-500', border: 'border-blue-100' },
    { bg: 'bg-emerald-50', text: 'text-emerald-500', border: 'border-emerald-100' },
    { bg: 'bg-violet-50', text: 'text-violet-500', border: 'border-violet-100' },
    { bg: 'bg-amber-50', text: 'text-amber-500', border: 'border-amber-100' },
    { bg: 'bg-rose-50', text: 'text-rose-500', border: 'border-rose-100' },
    { bg: 'bg-indigo-50', text: 'text-indigo-500', border: 'border-indigo-100' },
  ];
  
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  return colors[index];
};

const TestimonialCard = ({ testimonial }) => {
  const avatar = getAvatarData(testimonial.name);
  
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-6 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full ${avatar.bg} ${avatar.border} border flex items-center justify-center shrink-0`}>
          <FaRegUser className={`w-4 h-4 ${avatar.text}`} />
        </div>
        <div className="overflow-hidden">
          <div className="flex items-center gap-1">
            <h4 className="font-bold text-slate-900 text-sm truncate">{testimonial.name}</h4>
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
          </div>
          <p className="text-[12px] text-slate-500 font-medium truncate">@{testimonial.name.toLowerCase().replace(/\s+/g, '')}</p>
        </div>
        {/* <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
          ))}
        </div> */}
      </div>
      
      <blockquote className="text-slate-700 text-[14px] leading-relaxed italic">
        "{testimonial.text}"
      </blockquote>

      {testimonial.result && (
        <div className="mt-4 pt-3 border-t border-slate-50 ">
          <div className="animate-pulse inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-gray-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse"></span>
            {testimonial.result}
          </div>
        </div>
      )}
    </div>
  );
};

const MarqueeColumn = ({ items, duration = 25, reverse = false }) => (
  <div className="relative h-[500px] overflow-hidden">
    <motion.div
      animate={{
        y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        duration: duration,
        ease: "linear",
        repeat: Infinity,
      }}
      className="flex flex-col"
    >
      {[...items, ...items].map((item, index) => (
        <TestimonialCard key={index} testimonial={item} />
      ))}
    </motion.div>
  </div>
);



const TestimonialsSection = forwardRef(({ testimonials ,eventType=""}, ref) => {
  // Distribute testimonials into 3 columns
  const col1 = testimonials.slice(0, Math.ceil(testimonials.length / 3));
  const col2 = testimonials.slice(Math.ceil(testimonials.length / 3), Math.ceil(testimonials.length * 2 / 3));
  const col3 = testimonials.slice(Math.ceil(testimonials.length * 2 / 3));

  console.log("about2",eventType)
  return (
    <section 
      id="testimonials-section"
      ref={ref}
      className={`px-6  relative overflow-hidden ${eventType === "About" ? "py-12" : "bg-[#FAFAFA] py-16"}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {eventType!=="About" &&
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            What our clients think !!
          </motion.h2>
          <div className="w-20 h-1 bg-gray-600 mx-auto rounded-full"></div>
        </div>
}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Top and Bottom Fades for smooth entry/exit */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#FAFAFA] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#FAFAFA] to-transparent z-20 pointer-events-none"></div>

          <MarqueeColumn items={[...col1, ...col2]} duration={30} />
          <div className="hidden md:block">
            <MarqueeColumn items={[...col2, ...col3, ...col1]} duration={35} reverse={true} />
          </div>
          <div className="hidden lg:block">
            <MarqueeColumn items={[...col3, ...col1, ...col2]} duration={25} />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[20rem] font-black whitespace-nowrap">REVIEWS</span>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;
