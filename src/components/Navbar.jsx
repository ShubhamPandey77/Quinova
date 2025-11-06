// components/Navbar.jsx
import { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';

function Navbar({ navigate, currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md shadow-2xl z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-white text-2xl font-bold tracking-tight">IT Solutions</div>
              <div className="text-gray-400 text-xs">Digital Excellence</div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`${currentPage === 'home' ? 'text-white' : 'text-gray-400'} hover:text-white font-medium transition-colors relative group`}
            >
              Home
              {currentPage === 'home' && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"></div>}
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className={`${currentPage === 'services' ? 'text-white' : 'text-gray-400'} hover:text-white font-medium transition-colors relative group`}
            >
              Services
              {currentPage === 'services' && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"></div>}
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className={`${currentPage === 'about' ? 'text-white' : 'text-gray-400'} hover:text-white font-medium transition-colors relative group`}
            >
              About
              {currentPage === 'about' && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"></div>}
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 border-t border-gray-800 pt-4">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left py-2 text-gray-400 hover:text-white font-medium">Home</button>
            <button onClick={() => handleNavClick('services')} className="block w-full text-left py-2 text-gray-400 hover:text-white font-medium">Services</button>
            <button onClick={() => handleNavClick('about')} className="block w-full text-left py-2 text-gray-400 hover:text-white font-medium">About</button>
            <button onClick={() => handleNavClick('contact')} className="w-full bg-white text-black px-6 py-2.5 rounded-full font-semibold">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;