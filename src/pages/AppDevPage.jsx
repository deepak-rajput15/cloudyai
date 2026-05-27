import { motion } from 'framer-motion';
import { Smartphone, Cpu, Zap, Shield, RefreshCw, Globe, Star, BarChart3 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  ServiceHero, ServiceFeatures, ServiceTechStack,
  ServiceBenefits, ServiceFAQ, ServiceCTA
} from '../components/ServicePageLayout';

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mobile App Development",
  "provider": { "@type": "Organization", "name": "CloudyAI", "url": "https://cloudyai.in" },
  "name": "App Development Company – iOS & Android | CloudyAI",
  "description": "CloudyAI is a leading app development company building native-like iOS and Android apps using Flutter and React Native. Custom mobile solutions that deliver results.",
  "url": "https://cloudyai.in/services/app-development",
  "areaServed": "Worldwide"
};

const features = [
  { icon: <Smartphone size={24} />, title: "Cross-Platform Flutter Apps", desc: "A single codebase delivering a native-grade iOS and Android experience. 60fps rendering, pixel-perfect UI — indistinguishable from fully native apps." },
  { icon: <Globe size={24} />, title: "React Native Development", desc: "Battle-tested React Native apps leveraged by companies like Meta and Microsoft. Maximize code reuse while maintaining full access to native device APIs." },
  { icon: <Cpu size={24} />, title: "Native iOS (Swift/SwiftUI)", desc: "Pure Swift and SwiftUI development for apps that demand the highest performance, complex animations, and deep Apple ecosystem integration (ARKit, CoreML, HealthKit)." },
  { icon: <Zap size={24} />, title: "Native Android (Kotlin)", desc: "Modern Kotlin-first Android development with Jetpack Compose UI, Material 3 design, and deep Android system-level integrations for robust, scalable apps." },
  { icon: <BarChart3 size={24} />, title: "App Store Optimization (ASO)", desc: "Strategic keyword optimization for Google Play and Apple App Store to maximize organic downloads and improve your app's discoverability." },
  { icon: <Shield size={24} />, title: "Secure Mobile Architecture", desc: "Certificate pinning, biometric authentication, encrypted local storage, and OWASP Mobile Top 10 compliance — security built into every layer." },
  { icon: <RefreshCw size={24} />, title: "API Integration & Backend", desc: "Seamless integration with REST APIs, GraphQL, Firebase, and custom Node.js/Laravel backends with real-time sync using WebSockets." },
  { icon: <Star size={24} />, title: "UI/UX & Prototyping", desc: "Interactive Figma prototypes and intuitive UX flows designed with conversion psychology — before a single line of code is written." },
];

const stacks = [
  "Flutter", "React Native", "Swift", "SwiftUI", "Kotlin", "Jetpack Compose",
  "Dart", "TypeScript", "Firebase", "Node.js (Backend)", "GraphQL",
  "REST APIs", "SQLite", "Hive", "Redux / Riverpod", "Xcode", "Android Studio",
  "App Store Connect", "Google Play Console", "Stripe SDK", "Razorpay SDK", "WebSockets"
];

const benefits = [
  "Cross-platform expertise: one team delivers both iOS and Android",
  "App Store and Google Play submission handled end-to-end",
  "Rigorous QA on 15+ real devices before launch",
  "Performance profiling for 60fps animations and <2s load times",
  "Push notification, deep linking & analytics integration",
  "Scalable backend architecture that grows with your user base",
  "GDPR and data privacy compliant by design",
  "Ongoing update & crash monitoring via Sentry and Firebase Crashlytics",
];

const faqs = [
  {
    q: "How much does it cost to develop a mobile app in India?",
    a: "Basic apps start from ₹80,000–₹2,00,000. Feature-rich apps with custom backend, payment gateways, and real-time features range from ₹3L–₹20L. We provide detailed estimates after a free discovery call."
  },
  {
    q: "Flutter or React Native — which is better for my app?",
    a: "Flutter offers superior UI performance and pixel-perfect design. React Native is ideal if you already have a React web team. Both deliver near-native experiences. We recommend Flutter for most new projects due to its maturity and single-codebase efficiency."
  },
  {
    q: "How long does it take to develop an iOS and Android app?",
    a: "An MVP with core features typically takes 8–12 weeks. Full-featured apps with custom CMS, admin panels, and advanced integrations take 4–6 months. Timeline is set during the discovery phase."
  },
  {
    q: "Do you build AI-powered mobile applications?",
    a: "Yes. We build apps with on-device ML (CoreML, TFLite), LLM-powered chat interfaces, AI-based recommendation systems, and image recognition features — including integration with OpenAI, Gemini, and custom Python AI agents."
  },
  {
    q: "Can you update or redesign my existing mobile app?",
    a: "Absolutely. We perform full UI/UX overhauls, codebase migrations (e.g. old Java Android → Kotlin/Compose), and feature additions while ensuring backward compatibility and zero downtime."
  },
  {
    q: "Do you handle App Store and Google Play submission?",
    a: "Yes, end-to-end. We prepare all required metadata, screenshots, privacy policies, and review guidelines compliance. We handle the full submission and monitor the review process until your app is live."
  },
  {
    q: "What kind of mobile apps does CloudyAI specialize in?",
    a: "We build SaaS mobile apps, e-commerce apps, on-demand delivery apps, health & fitness apps, fintech apps, social platforms, enterprise tools, and AI-powered consumer apps."
  },
];

const AppDevPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
    <SEOHead
      title="App Development Company – iOS & Android | CloudyAI"
      description="CloudyAI is a leading app development company building iOS & Android apps with Flutter & React Native. Native-grade performance, any platform. Free quote."
      keywords="app development company, mobile app development company, iOS app development, Android app development, Flutter app development, React Native development, cross-platform app development, mobile app development India, hire app developers, on-demand app development, SaaS mobile app, AI mobile app development, app development cost, app development company India"
      canonical="https://cloudyai.in/services/app-development"
      schema={schema}
    />

    <main>
      <ServiceHero
        badge="APP DEVELOPMENT COMPANY"
        h1={<>Native-Grade iOS & Android Apps That <span className="text-gradient">Users Love</span></>}
        subtitle="CloudyAI is an elite app development company crafting high-performance iOS and Android applications using Flutter and React Native — delivered faster, with a single unified codebase."
      />

      <ServiceFeatures
        title="Mobile App"
        subtitle="From concept to App Store — we build mobile apps that drive engagement, retention, and revenue."
        features={features}
      />

      <ServiceTechStack stacks={stacks} />

      {/* Process Section */}
      <section className="svc-features-section">
        <div className="section-header">
          <h2 className="section-title">Our App Development <span className="text-gradient">Process</span></h2>
          <p className="section-subtitle">A battle-tested delivery framework that ships apps on time and on budget.</p>
        </div>
        <div className="svc-features-grid">
          {[
            { title: "01 — Discovery & Wireframing", desc: "Deep-dive into your users, market, and business goals. We map user journeys and build clickable Figma prototypes for stakeholder sign-off before development begins." },
            { title: "02 — Agile Development Sprints", desc: "Two-week sprints with working software demos. Full source code access, daily standup updates, and a shared project board — total transparency." },
            { title: "03 — QA on Real Devices", desc: "Functional, regression, and performance testing on 15+ real iOS and Android devices. Crash reports, memory profiling, and battery usage audits included." },
            { title: "04 — Launch & Growth", desc: "Full App Store/Play Store submission, ASO, push notification setup, analytics (Firebase/Mixpanel), and a 90-day post-launch support window." },
          ].map((step) => (
            <div key={step.title} className="svc-feature-card glass-panel">
              <h3 className="svc-feature-title">{step.title}</h3>
              <p className="svc-feature-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceBenefits benefits={benefits} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA
        heading="Ready to Launch Your Mobile App?"
        sub="From idea to App Store in as little as 8 weeks. Book your free strategy call today."
      />
    </main>
  </motion.div>
);

export default AppDevPage;
