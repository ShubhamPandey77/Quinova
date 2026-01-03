import { useState, useEffect, useRef } from 'react';
import { Target, Users, Award, CheckCircle } from 'lucide-react';
import { stats, testimonials, caseStudies, faqs } from '../../const';
import FAQSection from '../../components/FAQSection';
import HeroSection from '../../components/home/HeroSection';
import ServicesSection from '../../components/home/ServicesSection';
import CaseStudiesSection from '../../components/home/CaseStudiesSection';
import WhyChooseUsSection from '../../components/home/WhyChooseUsSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import ProcessSection from '../../components/home/ProcessSection';
import TrustSection from '../../components/home/TrustSection';
import CTASection from '../../components/home/CTASection';
import ContactForm from '../../components/ContactForm';

function Home({ navigate = () => {} }) {
  const [showContactForm, setShowContactForm] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleGetStartedClick = () => {
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  const statsWithIcons = stats.map((stat, index) => ({
    ...stat,
    icon: [<Target className="w-5 h-5" />, <Users className="w-5 h-5" />, <Award className="w-5 h-5" />, <CheckCircle className="w-5 h-5" />][index]
  }));

  return (
    <>
      <div className="pt-16 bg-white">
        <HeroSection 
          navigate={navigate} 
          handleGetStartedClick={handleGetStartedClick} 
          statsWithIcons={statsWithIcons} 
        />

        <ServicesSection navigate={navigate} />

        <CaseStudiesSection caseStudies={caseStudies} />

        {/* <WhyChooseUsSection handleGetStartedClick={handleGetStartedClick} /> */}

        <TestimonialsSection 
          ref={(el) => (observerRefs.current[1] = el)} 
          testimonials={testimonials} 
        />

        <ProcessSection />

        <TrustSection />

        <FAQSection faqs={faqs} handleGetStartedClick={handleGetStartedClick} />

        {/* <CTASection 
          navigate={navigate} 
          handleGetStartedClick={handleGetStartedClick} 
        /> */}
      </div>

      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleCloseForm}
          ></div>
          <div className="relative z-50">
            <ContactForm 
              onClose={handleCloseForm}
              defaultService=""
              showCloseButton={true}
              compact={false}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;