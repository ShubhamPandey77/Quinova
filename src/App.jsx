// App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Services from './pages/services';
import AboutUs from './pages/aboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar navigate={navigate} currentPage={currentPage} />
      {currentPage === 'home' && <Home navigate={navigate} />}
      {currentPage === 'services' && <Services navigate={navigate} />}
      {currentPage === 'about' && <AboutUs navigate={navigate} />}
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;