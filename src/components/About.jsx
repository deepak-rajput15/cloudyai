import { Rocket, Target, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const pillars = [
    { icon: <Zap size={24} />, title: "Velocity", desc: "Rapid deployment without compromising quality." },
    { icon: <Target size={24} />, title: "Precision", desc: "Pixel-perfect engineering across all stacks." },
    { icon: <Rocket size={24} />, title: "Innovation", desc: "Leveraging cutting-edge AI and modern frameworks." },
    { icon: <Shield size={24} />, title: "Integrity", desc: "Secure, scalable, and transparent processes." },
  ];

  return (
    <section id="about" className="about-section" aria-label="About CloudyAI">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title font-serif">
            India's Premier <span className="text-gradient">IT Company</span> <br />
            Built for Global Scale.
          </h2>
          <p className="about-text">
            <strong>CloudyAI</strong> is a full-service IT company and software development partner for startups, scale-ups, and enterprises. As an end-to-end <strong>web development company</strong>, <strong>app development company</strong>, and <strong>DevOps consulting firm</strong>, we bridge the gap between ambitious business goals and battle-tested technology.
          </p>
          <p className="about-text">
            From AI-powered automation agents to enterprise Laravel ERPs, React SPAs, Flutter mobile apps, and cloud-native Kubernetes infrastructure — our senior engineers deliver at every layer of the modern tech stack.
          </p>

          <div className="about-service-links">
            <Link to="/services/web-development" className="about-svc-link">Web Development →</Link>
            <Link to="/services/app-development" className="about-svc-link">App Development →</Link>
            <Link to="/services/devops-consulting" className="about-svc-link">DevOps Consulting →</Link>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                className="pillar-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3 }}
              >
                <div className="pillar-icon">{pillar.icon}</div>
                <div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-visual glass-panel"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="code-mockup">
            <div className="mockup-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <pre className="mockup-body">
              <code>
<span className="code-keyword">const</span> <span className="code-var">cloudyai</span> = {'{'}
  <br/>  type: <span className="code-string">"IT Company"</span>,
  <br/>  services: [<span className="code-string">"Web Dev"</span>, <span className="code-string">"App Dev"</span>,
  <br/>    <span className="code-string">"DevOps"</span>, <span className="code-string">"AI Agents"</span>],
  <br/>  stacks: [<span className="code-string">"React"</span>, <span className="code-string">"Flutter"</span>,
  <br/>    <span className="code-string">"Node.js"</span>, <span className="code-string">"Laravel"</span>, <span className="code-string">"AWS"</span>],
  <br/>  uptime: <span className="code-string">"99.99%"</span>,
  <br/>  deliver: <span className="code-function">() =&gt;</span> {'{'}
  <br/>    <span className="code-keyword">return</span> <span className="code-string">"Excellence"</span>;
  <br/>  {'}'}
<br/>{'}'};
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

