import { useEffect, useState } from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const words = [
    "Enterprise Web Apps", "Native Mobile Apps",
    "DevOps & Cloud", "AI Agents & Automation",
    "Custom ERPs", "Digital Transformation"
  ];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 100 } }
  };

  return (
    <section id="home" className="hero-section flex-center" aria-label="Hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="badge glass-panel">
          <span className="pulse-dot"></span>
          <span className="font-mono">PREMIER IT AGENCY — INDIA &amp; GLOBAL</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title font-sans">
          Accelerate Your Growth With <br />
          <span className="text-gradient font-serif">Elite Software Engineering</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="hero-body-container">
          <p className="hero-subtitle">
            CloudyAI is a specialized technology partner delivering high-performance{' '}
            <span className="dynamic-text">
              {words[currentWord]}
            </span>
            .<br /><br />
            We bridge the gap between complex business requirements and elegant, scalable software solutions. From robust Laravel backends and lightning-fast React interfaces to secure DevOps infrastructure, our architects build systems that drive revenue.
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div variants={itemVariants} className="hero-trust-row">
          {['12+ Enterprise Clients', 'React · Laravel · Node.js · Python', '99.99% Uptime SLA', 'Dedicated Support'].map((t) => (
            <span key={t} className="hero-trust-badge font-mono">{t}</span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="hero-actions">
          <a href="#contact" className="btn-primary flex-center gap-2">
            Schedule Consultation <ArrowRight size={20} />
          </a>
          <a href="#services" className="btn-outline flex-center gap-2">
            <Code2 size={20} /> View Capabilities
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
