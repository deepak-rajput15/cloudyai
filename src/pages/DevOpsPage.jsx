import { motion } from 'framer-motion';
import { Server, GitBranch, Cloud, Shield, Activity, Zap, Box, BarChart3 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  ServiceHero, ServiceFeatures, ServiceTechStack,
  ServiceBenefits, ServiceFAQ, ServiceCTA
} from '../components/ServicePageLayout';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "DevOps Consulting",
  "provider": { "@type": "Organization", "name": "CloudyAI", "url": "https://cloudyai.in" },
  "name": "DevOps Company – Cloud Architecture & Automation | CloudyAI",
  "description": "CloudyAI is a leading DevOps company offering CI/CD pipeline setup, cloud architecture, Kubernetes orchestration, and infrastructure automation on AWS, GCP & Azure.",
  "url": "https://cloudyai.in/services/devops-consulting",
  "areaServed": "Worldwide"
};

const features = [
  { icon: <GitBranch size={24} />, title: "CI/CD Pipeline Automation", desc: "End-to-end GitHub Actions, GitLab CI, and Jenkins pipelines with automated testing, build caching, and zero-downtime blue-green deployments." },
  { icon: <Cloud size={24} />, title: "Cloud Architecture (AWS/GCP/Azure)", desc: "Multi-region, fault-tolerant cloud architectures designed on AWS, Google Cloud, and Azure — optimized for cost, latency, and compliance." },
  { icon: <Box size={24} />, title: "Containerization & Kubernetes", desc: "Full Docker containerization and Kubernetes (EKS/GKE/AKS) orchestration for microservices — auto-scaling from 10 to 10 million users without a config change." },
  { icon: <Server size={24} />, title: "Infrastructure as Code (IaC)", desc: "Reproducible, auditable infrastructure using Terraform and Pulumi. Every server, database, and network rule version-controlled and peer-reviewed." },
  { icon: <Shield size={24} />, title: "DevSecOps & Compliance", desc: "Security integrated into every pipeline stage: vulnerability scanning (Snyk), SAST/DAST testing, secrets management (Vault, AWS Secrets Manager), and SOC2/ISO27001 readiness." },
  { icon: <Activity size={24} />, title: "Observability & Monitoring", desc: "Full-stack observability with Prometheus, Grafana, ELK Stack, and Datadog. Mean Time to Detect (MTTD) under 2 minutes, with automated incident response." },
  { icon: <Zap size={24} />, title: "Performance & Cost Optimization", desc: "Infrastructure audits identifying 20–40% cost savings on average. Right-sizing, spot instance strategies, CDN configuration, and database query tuning." },
  { icon: <BarChart3 size={24} />, title: "SRE & 99.99% Uptime SLA", desc: "Site Reliability Engineering practices: SLOs, error budgets, chaos engineering, and runbooks that keep your platform available even during peak traffic surges." },
];

const stacks = [
  "Docker", "Kubernetes (K8s)", "Helm", "Terraform", "Pulumi", "Ansible",
  "AWS (EC2, ECS, EKS, RDS, S3, CloudFront)", "Google Cloud Platform (GKE, Cloud Run)",
  "Microsoft Azure (AKS, Functions)", "GitHub Actions", "GitLab CI/CD", "Jenkins",
  "ArgoCD", "Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic",
  "Nginx", "Traefik", "Vault (HashiCorp)", "Snyk", "Linux (Ubuntu/CentOS)", "Bash / Python scripting"
];

const benefits = [
  "Reduce deployment time from weeks to minutes with automated CI/CD",
  "Cut cloud infrastructure costs by 20–40% through right-sizing and reserved instances",
  "Achieve 99.99% uptime SLA with proactive monitoring and automated failover",
  "Zero-downtime deployments with blue-green and canary release strategies",
  "Compliance-ready infrastructure for SOC2, ISO 27001, GDPR, and HIPAA",
  "Full infrastructure ownership — no vendor lock-in, all IaC code delivered to you",
  "On-call incident response and runbook creation for your engineering team",
  "Developer experience improvements: faster local setups, staging environments, and feature flags",
];

const faqs = [
  {
    q: "What does a DevOps company actually do?",
    a: "A DevOps company bridges the gap between software development and IT operations. We automate build, test, and deployment pipelines; architect cloud infrastructure; set up monitoring & alerting; and implement security best practices — so your engineering team ships faster with fewer production incidents."
  },
  {
    q: "How much does DevOps consulting cost?",
    a: "DevOps engagements range from a one-time infrastructure audit (₹40,000–₹1,50,000) to ongoing managed DevOps retainers (₹50,000–₹3,00,000/month depending on scale). Contact us for a tailored quote."
  },
  {
    q: "We're on AWS — can you help optimize our cloud costs?",
    a: "Yes. Our cloud cost optimization audits typically identify 20–40% savings through right-sizing instances, migrating to Graviton processors, implementing S3 lifecycle policies, purchasing reserved instances, and eliminating unused resources."
  },
  {
    q: "Can you set up Kubernetes for our microservices?",
    a: "Absolutely. We provision production-grade Kubernetes clusters on EKS, GKE, or AKS; configure Helm chart deployments, auto-scaling policies, persistent volumes, service meshes, and ingress controllers — with complete documentation and team training."
  },
  {
    q: "What is Infrastructure as Code (IaC) and why does it matter?",
    a: "IaC means your entire infrastructure (servers, databases, networks, firewalls) is defined in version-controlled code (Terraform/Pulumi). This eliminates manual configuration drift, enables one-command environment rebuilds, and creates an auditable history of every infrastructure change."
  },
  {
    q: "How do you handle security in the DevOps pipeline?",
    a: "We implement DevSecOps: automated security scanning (SAST, DAST, dependency vulnerability checks) at every CI/CD stage, secrets management with HashiCorp Vault or AWS Secrets Manager, container image scanning, and network security group hardening — so vulnerabilities are caught before they reach production."
  },
  {
    q: "Do you offer 24/7 infrastructure monitoring and support?",
    a: "Yes. Our managed DevOps retainers include 24/7 alerting via Prometheus/Grafana/Datadog, on-call escalation protocols, and a guaranteed 30-minute initial response SLA for P0 incidents."
  },
];

const DevOpsPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
    <SEOHead
      title="DevOps Company – Cloud Architecture & CI/CD | CloudyAI"
      description="CloudyAI is a top DevOps company offering CI/CD automation, Kubernetes, cloud architecture & DevSecOps on AWS, GCP & Azure. Cut costs, ship faster."
      keywords="devops company, devops consulting, CI/CD pipeline setup, kubernetes consulting, cloud architecture company, AWS consulting, docker containerization, infrastructure as code, terraform consulting, DevSecOps, cloud cost optimization, site reliability engineering, SRE, devops services India, managed devops, cloud migration, Google Cloud consulting, Azure devops, devops automation"
      canonical="https://cloudyai.in/services/devops-consulting"
      schema={schema}
    />

    <main>
      <ServiceHero
        badge="DEVOPS & CLOUD COMPANY"
        h1={<>Ship Faster. Scale Infinitely. <span className="text-gradient">Zero Downtime.</span></>}
        subtitle="CloudyAI is an elite DevOps company automating your infrastructure, CI/CD pipelines, and cloud architecture — so your team deploys with confidence, cuts costs by 30%, and achieves 99.99% uptime."
      />

      <ServiceFeatures
        title="DevOps & Cloud"
        subtitle="From legacy monolith to modern cloud-native microservices — we handle the full DevOps transformation."
        features={features}
      />

      <ServiceTechStack stacks={stacks} />

      {/* Metrics Section */}
      <section className="svc-features-section">
        <div className="section-header">
          <h2 className="section-title">Proven <span className="text-gradient">DevOps Impact</span></h2>
          <p className="section-subtitle">Numbers from real CloudyAI engagements.</p>
        </div>
        <div className="svc-features-grid">
          {[
            { title: "20–40% Cloud Cost Reduction", desc: "Average savings achieved through our cloud optimization audits — right-sizing, reserved instances, and eliminating idle resources." },
            { title: "10x Faster Deployments", desc: "From weekly manual releases to multiple deployments per day with automated pipelines, feature flags, and zero-downtime rollouts." },
            { title: "99.99% Uptime Achieved", desc: "Multi-AZ architectures with automated failover, health checks, and chaos engineering tests ensure your platform stays up during peak traffic." },
            { title: "< 2 Min MTTD", desc: "Mean Time to Detect critical incidents reduced from hours to under 2 minutes with Prometheus alerting and automated runbook execution." },
          ].map((m) => (
            <div key={m.title} className="svc-feature-card glass-panel">
              <h3 className="svc-feature-title" style={{ color: 'var(--primary)' }}>{m.title}</h3>
              <p className="svc-feature-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceBenefits benefits={benefits} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA
        heading="Ready to Modernize Your Infrastructure?"
        sub="Book a free DevOps audit call. We'll identify your top 3 infrastructure risks and cost savings opportunities — no strings attached."
      />
    </main>
  </motion.div>
);

export default DevOpsPage;
