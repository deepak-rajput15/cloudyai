import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './Milestones.css';

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = null;
      const duration = 2000;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, value]);

  return <span ref={ref}>{count}</span>;
};

const milestonesData = [
  { id: 1, label: 'Projects Delivered', value: 12, suffix: '+' },
  { id: 2, label: 'Happy Clients', value: 8, suffix: '+' },
  { id: 3, label: 'Lines of Code', value: 50, suffix: 'k+' },
  { id: 4, label: 'Tech Experts', value: 5, suffix: '+' }
];

const Milestones = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const timelineY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="milestones" className="milestones-section" ref={sectionRef}>
      <div className="milestones-grid">
        {milestonesData.map((stat, index) => (
          <motion.div 
            key={stat.id} 
            className="stat-card glass-panel"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: index * 0.1 }}
          >
            <div className={`stat-value ${isVisible ? 'animate-up' : ''}`}>
              <span className="text-gradient-emerald">
                <Counter value={stat.value} />
              </span>
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-label font-mono">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      
      {/* Timeline Section with Parallax */}
      <motion.div 
        className="timeline-container"
        style={{ y: timelineY }}
      >
        <h3 className="timeline-title font-serif">Our <span className="text-gradient">Journey</span></h3>
        <div className="timeline">
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h4 className="font-mono">2024 - INCEPTION</h4>
              <p>Founded cloudyai with a vision to redefine digital solutions.</p>
            </div>
          </motion.div>
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h4 className="font-mono">2024 - FIRST MILESTONES</h4>
              <p>Successfully delivered our first set of full-stack client projects.</p>
            </div>
          </motion.div>
          <motion.div 
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h4 className="font-mono">2025 - SCALING UP</h4>
              <p>Expanding our capabilities into advanced mobile and AI architectures.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Milestones;
