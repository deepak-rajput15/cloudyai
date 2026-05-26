import { Rocket, Target, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const pillars = [
    { icon: <Zap size={24} />, title: "Velocity", desc: "Rapid deployment without compromising quality." },
    { icon: <Target size={24} />, title: "Precision", desc: "Pixel-perfect engineering across all stacks." },
    { icon: <Rocket size={24} />, title: "Innovation", desc: "Leveraging cutting-edge AI and modern frameworks." },
    { icon: <Shield size={24} />, title: "Integrity", desc: "Secure, scalable, and transparent processes." },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title font-serif">
            Where <span className="text-gradient">Innovation</span> <br/>
            Meets Execution.
          </h2>
          <p className="about-text">
            At <strong>cloudyai</strong>, we don't just build websites; we engineer comprehensive digital ecosystems. As a premium service-based technology company, we specialize in bridging the gap between complex business requirements and elegant software solutions.
          </p>
          <p className="about-text">
            From bespoke AI Agents powered by Python & Node.js, to robust Laravel ERPs and lightning-fast React applications, our team of seasoned architects delivers excellence at every layer of the stack.
          </p>
          
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
  <br/>  mission: <span className="code-string">"Empower through tech"</span>,
  <br/>  stacks: [<span className="code-string">"Python"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"PHP"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Flutter"</span>],
  <br/>  quality: <span className="code-keyword">true</span>,
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
