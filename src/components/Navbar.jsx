import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CloudLightning, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Milestones', href: isHome ? '#milestones' : '/#milestones' },
    { name: 'Testimonials', href: isHome ? '#testimonials' : '/#testimonials' },
  ];

  const serviceLinks = [
    { name: 'Website Development', href: '/#services', desc: 'Business sites, landing pages.' },
    { name: 'Mobile Apps', href: '/#services', desc: 'Android, iOS & cross-platform.' },
    { name: 'Cloud & DevOps', href: '/#services', desc: 'Cloud infrastructure & CI/CD.' },
    { name: 'School ERP', href: '/#services', desc: 'Fees, attendance, parent app.' },
    { name: 'Clinic Management', href: '/#services', desc: 'Appointments, billing, records.' },
    { name: 'Restaurant Billing', href: '/#services', desc: 'POS, inventory, reports.' },
    { name: 'Startup MVP', href: '/#services', desc: 'Launch your product fast.' },
    { name: 'ERP Dashboards', href: '/#services', desc: 'CRM and admin tools.' },
    { name: 'eCommerce', href: '/#services', desc: 'Catalog, cart and checkout.' },
    { name: 'Digital Marketing', href: '/#services', desc: 'SEO & growth strategies.' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="nav-container">
        <Link to="/" className="brand" aria-label="CloudyAI – IT Company Home">
          <CloudLightning className="brand-icon" size={32} />
          <span className="brand-text">cloudy<span className="text-gradient">ai</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            link.href.startsWith('#') || link.href.includes('/#')
              ? <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
              : <Link key={link.name} to={link.href} className="nav-link">{link.name}</Link>
          ))}

          {/* Services Dropdown */}
          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              className="nav-link nav-dropdown-trigger"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services <ChevronDown size={14} className={servicesOpen ? 'rotated' : ''} />
            </button>
            {servicesOpen && (
              <div className="nav-dropdown-menu" role="menu">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.name}
                    to={s.href}
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={() => setServicesOpen(false)}
                  >
                    <strong>{s.name}</strong>
                    <span>{s.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href={isHome ? '#contact' : '/#contact'} className="btn-primary nav-btn">
            Book Free Consultation
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} role="navigation" aria-label="Mobile navigation">
        {navLinks.map((link) => (
          link.href.startsWith('#') || link.href.includes('/#')
            ? <a key={link.name} href={link.href} className="mobile-link" onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
            : <Link key={link.name} to={link.href} className="mobile-link" onClick={() => setMobileMenuOpen(false)}>{link.name}</Link>
        ))}
        <div className="mobile-services-label">Services</div>
        {serviceLinks.map((s) => (
          <Link
            key={s.name}
            to={s.href}
            className="mobile-link mobile-service-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {s.name}
          </Link>
        ))}
        <a
          href={isHome ? '#contact' : '/#contact'}
          className="btn-primary mobile-btn"
          onClick={() => setMobileMenuOpen(false)}
        >
          Book Free Consultation
        </a>
      </div>
    </header>
  );
};

export default Navbar;

