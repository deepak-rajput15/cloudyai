import { useState, useEffect } from 'react';
import { Menu, X, CloudLightning } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="brand">
          <CloudLightning className="brand-icon" size={32} />
          <span className="brand-text">cloudy<span className="text-gradient">ai</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary nav-btn">Start Project</a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className="btn-primary mobile-btn"
          onClick={() => setMobileMenuOpen(false)}
        >
          Start Project
        </a>
      </div>
    </header>
  );
};

export default Navbar;
