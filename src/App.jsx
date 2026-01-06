import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsOfService from './pages/policies/TermsOfService';
import RefundPolicy from './pages/policies/RefundPolicy';
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
    <div className="min-h-screen gradient-bg">
      <ScrollToTop />
      <Navbar navigate={handleNavigate} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home navigate={handleNavigate} /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services navigate={handleNavigate} /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutUs navigate={handleNavigate} /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactUs navigate={handleNavigate} /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><TermsOfService /></PageTransition>} />
          <Route path="/refund" element={<PageTransition><RefundPolicy /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer navigate={handleNavigate} />
    </div>
  );
}

export default App;
