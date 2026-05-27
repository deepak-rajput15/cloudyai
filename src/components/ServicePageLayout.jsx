import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './ServicePage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' }
  })
};

export const ServiceHero = ({ badge, h1, subtitle, ctaHref = '/#contact' }) => (
  <section className="svc-hero flex-center">
    <motion.div
      className="svc-hero-content"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp} className="badge glass-panel">
        <span className="pulse-dot"></span>
        <span className="font-mono">{badge}</span>
      </motion.div>
      <motion.h1 variants={fadeUp} className="svc-h1 font-serif">{h1}</motion.h1>
      <motion.p variants={fadeUp} className="svc-subtitle">{subtitle}</motion.p>
      <motion.div variants={fadeUp} className="svc-hero-cta">
        <a href={ctaHref} className="btn-primary flex-center gap-2">
          Book Free Consultation <ArrowRight size={18} />
        </a>
        <a href="/#services" className="btn-outline flex-center gap-2">
          All Services
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export const ServiceFeatures = ({ title, subtitle, features }) => (
  <section className="svc-features-section">
    <div className="section-header">
      <h2 className="section-title">{title} <span className="text-gradient">Capabilities</span></h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
    <div className="svc-features-grid">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          className="svc-feature-card glass-panel"
          custom={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="svc-feature-icon">{f.icon}</div>
          <h3 className="svc-feature-title">{f.title}</h3>
          <p className="svc-feature-desc">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export const ServiceTechStack = ({ stacks }) => (
  <section className="svc-stack-section">
    <div className="section-header">
      <h2 className="section-title">Our <span className="text-gradient">Tech Stack</span></h2>
      <p className="section-subtitle">Production-grade tools trusted by leading enterprises worldwide.</p>
    </div>
    <div className="svc-stack-grid">
      {stacks.map((s) => (
        <div key={s} className="svc-stack-tag font-mono">{s}</div>
      ))}
    </div>
  </section>
);

export const ServiceBenefits = ({ benefits }) => (
  <section className="svc-benefits-section">
    <div className="svc-benefits-container glass-panel">
      <h2 className="section-title">Why Choose <span className="text-gradient">CloudyAI</span></h2>
      <ul className="svc-benefits-list">
        {benefits.map((b, i) => (
          <motion.li key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <CheckCircle2 size={20} className="benefit-check" />
            <span>{b}</span>
          </motion.li>
        ))}
      </ul>
      <a href="/#contact" className="btn-primary">Get a Free Quote</a>
    </div>
  </section>
);

export const ServiceFAQ = ({ faqs }) => (
  <section className="svc-faq-section">
    <div className="section-header">
      <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
      <p className="section-subtitle">Clear answers to common questions about our services.</p>
    </div>
    <div className="svc-faq-list">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          className="svc-faq-item glass-panel"
          custom={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <h3 className="svc-faq-q">{faq.q}</h3>
          <p className="svc-faq-a">{faq.a}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export const ServiceCTA = ({ heading, sub }) => (
  <section className="svc-cta-section">
    <motion.div
      className="svc-cta-box glass-panel"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="svc-cta-heading font-serif">{heading}</h2>
      <p className="svc-cta-sub">{sub}</p>
      <div className="svc-cta-btns">
        <a href="/#contact" className="btn-primary">Book Free Consultation</a>
        <a href="tel:+919876543210" className="btn-outline">Call Us Now</a>
      </div>
    </motion.div>
  </section>
);
