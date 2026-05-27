import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Pages
import HomePage from './pages/HomePage';
import WebDevPage from './pages/WebDevPage';
import AppDevPage from './pages/AppDevPage';
import DevOpsPage from './pages/DevOpsPage';

function App() {
  return (
    <>
      <CustomCursor />
      <div className="light-grid-overlay"></div>
      <div className="bg-glow-orb orb-1"></div>
      <div className="bg-glow-orb orb-2"></div>

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/web-development" element={<WebDevPage />} />
          <Route path="/services/app-development" element={<AppDevPage />} />
          <Route path="/services/devops-consulting" element={<DevOpsPage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;

