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
import ContactForm from '../../components/home/ContactForm';

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleGetStartedClick = () => {
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
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

        <WhyChooseUsSection handleGetStartedClick={handleGetStartedClick} />

        <TestimonialsSection 
          ref={(el) => (observerRefs.current[1] = el)} 
          testimonials={testimonials} 
        />

        <ProcessSection />

        <TrustSection />

        <FAQSection faqs={faqs} />

        {/* <CTASection 
          navigate={navigate} 
          handleGetStartedClick={handleGetStartedClick} 
        /> */}
      </div>

      <ContactForm 
        showContactForm={showContactForm} 
        handleCloseForm={handleCloseForm} 
        formData={formData} 
        setFormData={setFormData} 
        handleSubmit={handleSubmit} 
      />
    </>
  );
}

export default Home;