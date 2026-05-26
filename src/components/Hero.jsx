import { useEffect, useState } from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const words = ["Laravel Solutions", "AI Agents & Automation", "Python Architectures", "Node.js Backends", "Flutter Applications", "React Frontends"];
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
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', damping: 20, stiffness: 100 } 
    }
  };

  return (
    <section id="home" className="hero-section flex-center">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="badge glass-panel">
          <span className="pulse-dot"></span>
          <span className="font-mono">ENGINEERING EXPERIENCES</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="hero-title font-serif">
          Scale Your Vision With<br />
          <span className="text-gradient">Intelligent</span> Software
        </motion.h1>
        
        <motion.p variants={itemVariants} className="hero-subtitle">
          We are a premium technology agency specializing in: <br/>
          <span className="dynamic-text text-gradient-emerald">
            {words[currentWord]}
          </span>
        </motion.p>

        <motion.div variants={itemVariants} className="hero-actions">
          <a href="#contact" className="btn-primary flex-center gap-2">
            Start Your Project <ArrowRight size={20} />
          </a>
          <a href="#services" className="btn-outline flex-center gap-2">
            <Code2 size={20} /> Explore Services
          </a>
        </motion.div>
      </motion.div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="hero-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      ></motion.div>
    </section>
  );
};

export default Hero;
