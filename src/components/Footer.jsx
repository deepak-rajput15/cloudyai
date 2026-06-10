import { Link } from 'react-router-dom';
import { CloudLightning, Mail, Phone, MapPin, Briefcase, MessageCircle, Code } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'DevOps Consulting', href: '/services/devops-consulting' },
    { name: 'AI Agents & Automation', href: '/#services' },
    { name: 'SEO & Growth', href: '/#services' },
  ];

  const company = [
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Milestones', href: '/#milestones' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand" aria-label="CloudyAI Home">
              <CloudLightning size={28} className="footer-brand-icon" />
              <span>cloudy<span className="text-gradient">ai</span></span>
            </Link>
            <p className="footer-tagline">
              A premier IT company engineering web development, app development, DevOps &amp; AI solutions that scale your business.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/cloudyai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Briefcase size={18} />
              </a>
              <a href="https://twitter.com/cloudyai_in" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <MessageCircle size={18} />
              </a>
              <a href="https://github.com/cloudyai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Code size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <nav className="footer-nav-col" aria-label="Service pages">
            <h3 className="footer-col-title">Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.name}>
                  <Link to={s.href} className="footer-link">{s.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Column */}
          <nav className="footer-nav-col" aria-label="Company pages">
            <h3 className="footer-col-title">Company</h3>
            <ul>
              {company.map((c) => (
                <li key={c.name}>
                  <Link to={c.href} className="footer-link">{c.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Column */}
          <address className="footer-contact-col">
            <h3 className="footer-col-title">Contact</h3>
            <ul>
              <li>
                <Mail size={15} />
                <a href="mailto:Info.cloudyai@gmail.com" className="footer-link">Info.cloudyai@gmail.com</a>
              </li>
              <li>
                <Phone size={15} />
                <a href="tel:+917500620349" className="footer-link">+91 7500620349</a>
              </li>
              <li>
                <MapPin size={15} />
                <span>India &amp; Remote Worldwide</span>
              </li>
            </ul>
            <a href="/#contact" className="btn-primary footer-cta">Book Free Consultation</a>
          </address>
        </div>

        <div className="footer-bottom">
          <p className="font-mono">&copy; {new Date().getFullYear()} CLOUDYAI. ALL RIGHTS RESERVED.</p>
          <p className="font-mono">ENGINEERING THE FUTURE OF IT.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
