import { motion } from 'framer-motion';
import { Globe, Code2, Zap, Database, Shield, TrendingUp, Layers, RefreshCw } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  ServiceHero, ServiceFeatures, ServiceTechStack,
  ServiceBenefits, ServiceFAQ, ServiceCTA
} from '../components/ServicePageLayout';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development",
  "provider": { "@type": "Organization", "name": "CloudyAI", "url": "https://cloudyai.in" },
  "name": "Web Development Company – Custom Web Apps | CloudyAI",
  "description": "CloudyAI is a top web development company building custom web applications, SPAs, enterprise portals & e-commerce platforms using React, Node.js, Laravel, and Next.js.",
  "url": "https://cloudyai.in/services/web-development",
  "areaServed": "Worldwide"
};

const features = [
  { icon: <Globe size={24} />, title: "Custom Web Applications", desc: "Tailor-made web platforms built to your exact business logic — from MVPs to enterprise-grade portals with millions of users." },
  { icon: <Code2 size={24} />, title: "React & Next.js SPAs", desc: "Lightning-fast Single Page Applications and server-side-rendered sites that deliver peak performance and perfect Core Web Vitals scores." },
  { icon: <Zap size={24} />, title: "High-Performance Backends", desc: "Robust Node.js and Laravel APIs capable of handling thousands of concurrent requests with sub-100ms response times." },
  { icon: <Database size={24} />, title: "Database Architecture", desc: "Optimized PostgreSQL, MySQL, and MongoDB schemas engineered for scalability, data integrity, and lightning-fast queries." },
  { icon: <Shield size={24} />, title: "Security-First Engineering", desc: "OWASP-compliant security practices: input validation, JWT authentication, rate limiting, and encrypted data storage built in from day one." },
  { icon: <TrendingUp size={24} />, title: "SEO & Performance Tuning", desc: "Perfect Lighthouse scores, Core Web Vitals optimization, semantic HTML structure, and structured data — built to rank on Google." },
  { icon: <Layers size={24} />, title: "E-Commerce Platforms", desc: "High-converting online stores with custom checkout flows, payment gateway integrations (Stripe, Razorpay), and inventory management." },
  { icon: <RefreshCw size={24} />, title: "CMS & Headless Solutions", desc: "Headless WordPress, Sanity, and Contentful integrations giving your team full content control without touching code." },
];

const stacks = [
  "React", "Next.js", "TypeScript", "Node.js", "Express.js", "Laravel",
  "PHP", "Python (Django/FastAPI)", "PostgreSQL", "MySQL", "MongoDB",
  "Redis", "REST APIs", "GraphQL", "AWS", "Vercel", "Docker", "Nginx",
  "Tailwind CSS", "Framer Motion", "Webpack", "Vite"
];

const benefits = [
  "Dedicated team of senior full-stack engineers with 5+ years experience",
  "Agile delivery with weekly sprint reviews and transparent communication",
  "100% custom code — no drag-and-drop builders or bloated templates",
  "Mobile-first, responsive design across all device breakpoints",
  "Production-grade CI/CD pipelines and automated testing suites",
  "Post-launch 90-day support & maintenance guarantee",
  "NDA-protected engagements for full IP ownership",
  "Proven track record scaling SaaS products from 0 to 100K+ users",
];

const faqs = [
  {
    q: "How long does it take to build a custom web application?",
    a: "A typical MVP takes 6–10 weeks. Enterprise-grade platforms with complex integrations range from 3–6 months. We define exact timelines during the discovery phase so there are no surprises."
  },
  {
    q: "What is the cost of web development services from CloudyAI?",
    a: "Projects start from ₹50,000 for simple landing sites. Full-stack web applications typically range from ₹2L–₹15L depending on complexity, integrations, and team size. Contact us for a detailed quote."
  },
  {
    q: "Do you offer web development for startups?",
    a: "Absolutely. We specialize in rapid MVP development for startups — validating your idea with clean, scalable code in the shortest time possible, ready to pitch to investors."
  },
  {
    q: "Which web technologies do you use?",
    a: "We use modern stacks: React/Next.js for frontend, Node.js/Laravel for backend, PostgreSQL/MongoDB for databases, and AWS/Vercel for hosting. We choose the best tool for your specific requirements."
  },
  {
    q: "Will my website rank on Google after development?",
    a: "Yes. All our web apps are built with technical SEO baked in: semantic HTML5, structured data, meta tags, sitemap.xml, robots.txt, Core Web Vitals optimization, and mobile-first indexing readiness."
  },
  {
    q: "Do you provide website maintenance after launch?",
    a: "Yes. We offer ongoing maintenance retainers covering security patches, performance monitoring, feature additions, and 24/7 uptime monitoring — so your platform never goes dark."
  },
  {
    q: "Can you rebuild or migrate my existing website?",
    a: "Absolutely. We perform full-stack migrations from legacy PHP/WordPress sites to modern React/Next.js architectures with zero data loss and improved performance."
  },
];

const WebDevPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
    <SEOHead
      title="Web Development Company – Custom Web Apps | CloudyAI"
      description="CloudyAI is a top-rated web development company building custom web apps, SPAs & enterprise portals with React, Node.js & Laravel. Get a free quote."
      keywords="web development company, custom web application development, React development company, Next.js development, Node.js web development, Laravel web development, full stack development company, enterprise web development, SaaS development, web app development India, hire web developers, e-commerce development, headless CMS development"
      canonical="https://cloudyai.in/services/web-development"
      schema={schema}
    />

    <main>
      <ServiceHero
        badge="WEB DEVELOPMENT COMPANY"
        h1={<>Custom Web Applications That <span className="text-gradient">Scale Your Business</span></>}
        subtitle="As a premier web development company, CloudyAI engineers high-performance web applications — from SaaS platforms to enterprise portals — built for speed, security, and search engine dominance."
      />

      <ServiceFeatures
        title="Full-Stack Web"
        subtitle="Every web development engagement is delivered by senior engineers using production-grade architecture."
        features={features}
      />

      <ServiceTechStack stacks={stacks} />

      <ServiceBenefits benefits={benefits} />

      {/* Case Study Placeholder */}
      <section className="svc-features-section">
        <div className="section-header">
          <h2 className="section-title">Web Development <span className="text-gradient">Case Studies</span></h2>
          <p className="section-subtitle">Real results for real businesses.</p>
        </div>
        <div className="svc-features-grid">
          {[
            { title: "laiqa.ai — AI SaaS Platform", desc: "Built a full-stack AI SaaS platform with real-time agent orchestration, reducing client workflow time by 60% and scaling to 10,000+ daily active users.", stack: "React · Node.js · Python · PostgreSQL" },
            { title: "Enterprise ERP Portal", desc: "Architected a multi-tenant ERP system processing 2M+ daily transactions with 99.99% uptime across 12 international offices.", stack: "Laravel · Vue.js · MySQL · Redis" },
            { title: "E-Commerce Platform", desc: "Built a high-converting online marketplace with custom recommendation engine, resulting in 40% uplift in average order value.", stack: "Next.js · Stripe · PostgreSQL · AWS" },
          ].map((cs) => (
            <div key={cs.title} className="svc-feature-card glass-panel">
              <h3 className="svc-feature-title">{cs.title}</h3>
              <p className="svc-feature-desc">{cs.desc}</p>
              <div style={{ marginTop: '1rem' }}>
                <span className="tag font-mono" style={{ fontSize: '0.75rem' }}>{cs.stack}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA
        heading="Ready to Build Your Web Application?"
        sub="Tell us your vision — we'll engineer it with precision. Free discovery call, no commitment."
      />
    </main>
  </motion.div>
);

export default WebDevPage;
