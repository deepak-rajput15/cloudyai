import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Smartphone, Globe, Monitor, Search, ArrowRight, Plus, Minus, Bot } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: '01',
    key: 'ai-agents',
    icon: <Bot size={80} strokeWidth={1} />,
    title: 'AI Agents & Automation',
    desc: 'Intelligent automation and bespoke AI agent setups tailored for your workflows, similar to our enterprise success with laiqa.ai. We build smart, self-operating systems using advanced Python and Node.js architectures.',
    tags: ['Python', 'Node.js', 'LLMs', 'Automation']
  },
  {
    id: '02',
    key: 'php',
    icon: <Server size={80} strokeWidth={1} />,
    title: 'Enterprise PHP & Laravel',
    desc: 'We architect robust ERP systems and highly secure backend architectures built to process millions of requests effortlessly. Our Laravel and CodeIgniter solutions grow seamlessly with your enterprise.',
    tags: ['Laravel', 'CodeIgniter', 'PostgreSQL', 'MySQL']
  },
  {
    id: '03',
    key: 'node',
    icon: <Globe size={80} strokeWidth={1} />,
    title: 'Modern Web Apps',
    desc: 'Lightning-fast, highly scalable Single Page Applications. We leverage the full power of Node.js and React to build real-time, data-intensive platforms that users love.',
    tags: ['Node.js', 'React', 'MongoDB', 'PostgreSQL']
  },
  {
    id: '04',
    key: 'mobile',
    icon: <Smartphone size={80} strokeWidth={1} />,
    title: 'Mobile Engineering',
    desc: 'Native-like iOS and Android applications developed with uncompromised performance. We build fluid, engaging mobile experiences using industry-leading frameworks.',
    tags: ['Flutter', 'React Native', 'iOS', 'Android']
  },
  {
    id: '05',
    key: 'frontend',
    icon: <Monitor size={80} strokeWidth={1} />,
    title: 'Frontend UI/UX',
    desc: 'Pixel-perfect, accessible, and breathtaking interfaces. We turn complex data into intuitive, beautiful interactive experiences that drive engagement.',
    tags: ['React', 'HTML5', 'CSS3', 'Framer Motion']
  },
  {
    id: '06',
    key: 'seo',
    icon: <Search size={80} strokeWidth={1} />,
    title: 'SEO & Growth',
    desc: 'Advanced technical optimization. We audit, restructure, and optimize your platforms to achieve perfect lighthouse scores and dominate search engine rankings.',
    tags: ['Technical SEO', 'Performance Audits', 'Analytics']
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(servicesData[0].key);

  return (
    <section id="services" className="services-section">
      <div className="section-header align-left">
        <h2 className="section-title">
          Engineering <span className="text-gradient">Capabilities</span>
        </h2>
        <p className="section-subtitle">
          A sleek, minimalist approach to solving complex architectural challenges.
        </p>
      </div>

      <div className="services-list-container">
        {servicesData.map((service) => {
          const isActive = activeService === service.key;
          
          return (
            <div 
              key={service.key} 
              className={`service-list-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveService(isActive ? null : service.key)}
            >
              <div className="service-list-header">
                <div className="service-id font-mono">{service.id}</div>
                <h3 className="service-list-title">{service.title}</h3>
                <div className="service-toggle">
                  {isActive ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="service-list-content-wrapper"
                  >
                    <div className="service-list-content">
                      <div className="service-content-left">
                        <p className="service-list-desc">{service.desc}</p>
                        <div className="service-list-tags">
                          {service.tags.map(tag => (
                            <span key={tag} className="tag font-mono">{tag}</span>
                          ))}
                        </div>
                        <button className="service-list-btn">
                          Discuss Project <ArrowRight size={18} />
                        </button>
                      </div>
                      <div className="service-content-right">
                         <div className="service-huge-icon">
                            {service.icon}
                         </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
