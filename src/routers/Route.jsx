import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/home/Home';
import Services from '../pages/services/Services';

import WebsiteDevelopment from '../pages/services/WebsiteDevelopment';
import SocialMediaManagement from '../pages/services/SocialMediaManagement';
import VideoEditing from '../pages/services/VideoEditing';
import GraphicDesign from '../pages/services/GraphicDesign';
import ContentWriting from '../pages/services/ContentWriting';
import DigitalMarketing from '../pages/services/DigitalMarketing';
import AppDevelopment from '../pages/services/AppDevelopment';
import AcademicProjects from '../pages/services/AcademicProjects';

import AboutUs from '../pages/aboutUs/AboutUs';
import ContactUs from '../pages/contactUs/ContactUs';

import PrivacyPolicy from '../pages/policies/PrivacyPolicy';
import TermsOfService from '../pages/policies/TermsOfService';
import RefundPolicy from '../pages/policies/RefundPolicy';

import CareerPage from '../pages/training/Training';

import PageTransition from '../components/PageTransition';

const AppRoutes = ({ handleNavigate }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <PageTransition>
              <Home navigate={handleNavigate} />
            </PageTransition>
          }
        />

        <Route
          path="/services"
          element={
            <PageTransition>
              <Services navigate={handleNavigate} />
            </PageTransition>
          }
        />

        <Route
          path="/services/website-development"
          element={
            <PageTransition>
              <WebsiteDevelopment />
            </PageTransition>
          }
        />

        <Route
          path="/services/social-media-management"
          element={
            <PageTransition>
              <SocialMediaManagement />
            </PageTransition>
          }
        />

        <Route
          path="/services/video-editing"
          element={
            <PageTransition>
              <VideoEditing />
            </PageTransition>
          }
        />

        <Route
          path="/services/graphic-design"
          element={
            <PageTransition>
              <GraphicDesign />
            </PageTransition>
          }
        />

        <Route
          path="/services/content-writing"
          element={
            <PageTransition>
              <ContentWriting />
            </PageTransition>
          }
        />

        <Route
          path="/services/digital-marketing"
          element={
            <PageTransition>
              <DigitalMarketing />
            </PageTransition>
          }
        />

        <Route
          path="/services/app-development"
          element={
            <PageTransition>
              <AppDevelopment />
            </PageTransition>
          }
        />

        <Route
          path="/services/academic-projects"
          element={
            <PageTransition>
              <AcademicProjects />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutUs navigate={handleNavigate} />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactUs navigate={handleNavigate} />
            </PageTransition>
          }
        />

        {/* CAREERS */}
        <Route
          path="/careers"
          element={
            <PageTransition>
              <CareerPage />
            </PageTransition>
          }
        />

        <Route
          path="/privacy"
          element={
            <PageTransition>
              <PrivacyPolicy />
            </PageTransition>
          }
        />

        <Route
          path="/terms"
          element={
            <PageTransition>
              <TermsOfService />
            </PageTransition>
          }
        />

        <Route
          path="/refund"
          element={
            <PageTransition>
              <RefundPolicy />
            </PageTransition>
          }
        />

      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;