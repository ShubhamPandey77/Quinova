import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import VideoEditing from './pages/services/VideoEditing';
import GraphicDesign from './pages/services/GraphicDesign';
import ContentWriting from './pages/services/ContentWriting';
import DigitalMarketing from './pages/services/DigitalMarketing';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    // Scroll is handled by ScrollToTop component
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar navigate={handleNavigate} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home navigate={handleNavigate} /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services navigate={handleNavigate} /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutUs navigate={handleNavigate} /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactUs navigate={handleNavigate} /></PageTransition>} />
          <Route path="/services/website-development" element={<PageTransition><WebsiteDevelopment navigate={handleNavigate} /></PageTransition>} />
          <Route path="/services/social-media-management" element={<PageTransition><SocialMediaManagement navigate={handleNavigate} /></PageTransition>} />
          <Route path="/services/video-editing" element={<PageTransition><VideoEditing navigate={handleNavigate} /></PageTransition>} />
          <Route path="/services/graphic-design" element={<PageTransition><GraphicDesign navigate={handleNavigate} /></PageTransition>} />
          <Route path="/services/content-writing" element={<PageTransition><ContentWriting navigate={handleNavigate} /></PageTransition>} />
          <Route path="/services/digital-marketing" element={<PageTransition><DigitalMarketing navigate={handleNavigate} /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer navigate={handleNavigate} />
    </div>
  );
}

export default App;
