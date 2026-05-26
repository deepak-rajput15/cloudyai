import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Milestones from './components/Milestones';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      <CustomCursor />
      <div className="noise-overlay"></div>
      
      {/* Background Ambience */}
      <div className="bg-glow-orb orb-1"></div>
      <div className="bg-glow-orb orb-2"></div>

      <AnimatePresence mode="wait">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Milestones />
          <Testimonials />
          <Contact />
        </main>
      </AnimatePresence>

      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '4rem 2rem', 
        borderTop: '1px solid var(--glass-border)',
        color: 'var(--text-muted)'
      }}>
        <div style={{ marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.5rem' }}>
          <span style={{ color: '#fff' }}>cloudy</span>
          <span className="text-gradient">ai</span>
        </div>
        <p className="font-mono">&copy; {new Date().getFullYear()} CLOUDYAI. ENGINEERING THE FUTURE.</p>
      </footer>
    </>
  );
}

export default App;
