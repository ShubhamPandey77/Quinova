import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routers/Route';

function App() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    // Scroll is handled by ScrollToTop component
  };

  return (
    <div className="min-h-screen gradient-bg">
      <ScrollToTop />
      <Navbar navigate={handleNavigate} />
      <AppRoutes handleNavigate={handleNavigate} />
      <Footer navigate={handleNavigate} />
    </div>
  );
}

export default App;
