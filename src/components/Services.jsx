import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Smartphone, Globe, Search, ArrowRight, Plus, Minus, Bot, GraduationCap, HeartPulse, Receipt, Rocket, LayoutDashboard, ShoppingCart } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: '01',
    key: 'ai-agents',
    icon: <Bot size={80} strokeWidth={1} />,
    title: 'AI Agents & Automation',
    desc: 'Intelligent automation and bespoke AI agent systems tailored for your workflows. We build self-operating platforms using advanced Python, Node.js, and LLM integrations (OpenAI, Gemini, Mistral) — cutting operational costs by 40–60%.',
    tags: ['Python', 'Node.js', 'LLMs', 'OpenAI', 'Automation'],
    link: null,
    linkLabel: null,
  },
  {
    id: '02',
    key: 'web',
    icon: <Globe size={80} strokeWidth={1} />,
    title: 'Website Development',
    desc: 'Custom web applications, enterprise portals, business sites, and high-converting landing pages. Built with React, Next.js, and Node.js for lightning-fast speeds and scalable architecture.',
    tags: ['React', 'Next.js', 'Landing Pages', 'Business Sites'],
    link: null,
    linkLabel: null,
  },
  {
    id: '03',
    key: 'mobile',
    icon: <Smartphone size={80} strokeWidth={1} />,
    title: 'Mobile App Development',
    desc: 'Native-grade iOS and Android applications via Flutter and React Native. One codebase, two platforms, zero performance compromise — from MVP to App Store.',
    tags: ['Flutter', 'React Native', 'iOS', 'Android', 'Cross-Platform'],
    link: null,
    linkLabel: null,
  },
  {
    id: '04',
    key: 'devops',
    icon: <Server size={80} strokeWidth={1} />,
    title: 'Cloud & DevOps',
    desc: 'End-to-end cloud architecture, CI/CD pipelines, Kubernetes orchestration, and infrastructure automation on AWS, GCP, and Azure. Ship 10x faster.',
    tags: ['AWS', 'Kubernetes', 'Docker', 'CI/CD'],
    link: null,
    linkLabel: null,
  },
  {
    id: '05',
    key: 'school-erp',
    icon: <GraduationCap size={80} strokeWidth={1} />,
    title: 'School ERP',
    desc: 'Comprehensive management software for educational institutions. Handle fees, attendance records, scheduling, and provide a seamless parent app experience.',
    tags: ['Fees Management', 'Attendance', 'Parent App', 'EdTech'],
    link: null,
    linkLabel: null,
  },
  {
    id: '06',
    key: 'clinic-management',
    icon: <HeartPulse size={80} strokeWidth={1} />,
    title: 'Clinic Management',
    desc: 'Modern healthcare solutions for clinics and hospitals. Streamline appointments, billing, digital prescriptions, and patient records securely.',
    tags: ['Appointments', 'Billing', 'Records', 'HealthTech'],
    link: null,
    linkLabel: null,
  },
  {
    id: '07',
    key: 'restaurant-billing',
    icon: <Receipt size={80} strokeWidth={1} />,
    title: 'Restaurant Billing',
    desc: 'Advanced POS systems designed for the food industry. Manage real-time inventory, handle complex reports, and streamline the checkout process.',
    tags: ['POS', 'Inventory', 'Reports', 'FoodTech'],
    link: null,
    linkLabel: null,
  },
  {
    id: '08',
    key: 'startup-mvp',
    icon: <Rocket size={80} strokeWidth={1} />,
    title: 'Startup MVP',
    desc: 'Launch your product fast. We help brands move from idea to scalable products with modern UI, robust architectures, and rapid development cycles.',
    tags: ['Launch Fast', 'Agile', 'Scalable', 'Modern UI'],
    link: null,
    linkLabel: null,
  },
  {
    id: '09',
    key: 'erp-dashboards',
    icon: <LayoutDashboard size={80} strokeWidth={1} />,
    title: 'ERP Dashboards',
    desc: 'Custom CRM and admin panels to manage your entire business. Get crystal-clear data visualization and granular access control tools.',
    tags: ['CRM', 'Admin Tools', 'Analytics', 'Enterprise'],
    link: null,
    linkLabel: null,
  },
  {
    id: '10',
    key: 'ecommerce',
    icon: <ShoppingCart size={80} strokeWidth={1} />,
    title: 'eCommerce',
    desc: 'End-to-end online shopping platforms with dynamic catalogs, frictionless cart experiences, and highly secure payment gateway checkouts.',
    tags: ['Catalog', 'Cart', 'Checkout', 'Retail'],
    link: null,
    linkLabel: null,
  },
  {
    id: '11',
    key: 'seo',
    icon: <Search size={80} strokeWidth={1} />,
    title: 'Digital Marketing',
    desc: 'Advanced technical SEO, Core Web Vitals optimization, and growth strategies to dominate Google rankings and increase your inbound lead flow.',
    tags: ['SEO', 'Growth', 'Marketing', 'Analytics'],
    link: null,
    linkLabel: null,
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(servicesData[0].key);

  return (
    <section id="services" className="services-section" aria-label="Services">
      <div className="section-header align-left">
        <h2 className="section-title">
          IT &amp; Software <span className="text-gradient">Services</span>
        </h2>
        <p className="section-subtitle">
          End-to-end technology services — web development, app development, DevOps, AI, and SEO — all under one roof.
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
                        <div className="service-list-actions">
                          <a href="#contact" className="service-list-btn">
                            Discuss Project <ArrowRight size={18} />
                          </a>
                          {service.link && (
                            <Link to={service.link} className="service-detail-link" onClick={(e) => e.stopPropagation()}>
                              {service.linkLabel} →
                            </Link>
                          )}
                        </div>
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



