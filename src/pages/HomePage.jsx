import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Milestones from '../components/Milestones';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CloudyAI",
  "url": "https://cloudyai.in",
  "image": "https://cloudyai.in/og-image.png",
  "description": "CloudyAI is a premier IT company offering web development, app development, DevOps, AI agents & digital transformation services.",
  "priceRange": "$$",
  "areaServed": "Worldwide",
  "serviceType": ["Web Development", "App Development", "DevOps", "AI Development", "SEO", "Digital Transformation"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IT & Software Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps Consulting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Agents & Automation" } }
    ]
  }
};

const HomePage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <SEOHead
      title="Web Development, App Development & DevOps IT Company | CloudyAI"
      description="CloudyAI — top-rated IT company for web development, app development, DevOps, AI agents & digital transformation. Book a free consultation today."
      keywords="web development company, app development company, devops company, IT company, AI development company, software development company, digital transformation, custom web apps, mobile app development, cloud computing, SEO services, React development, Flutter app development, Laravel development, Node.js backend, enterprise software, AI agents, automation"
      canonical="https://cloudyai.in/"
      schema={homeSchema}
    />
    <Hero />
    <About />
    <Services />
    <Milestones />
    <Testimonials />
    <Contact />
  </motion.main>
);

export default HomePage;
