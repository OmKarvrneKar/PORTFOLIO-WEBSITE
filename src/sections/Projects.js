import { GlassCard } from '../components/GlassCard';
import { RevealSection } from '../components/RevealSection';
import { SectionHeader } from '../components/SectionHeader';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const InvoiceIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4M9 8l2 2 4-4" />
  </svg>
);

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const FruitIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="14" r="8" />
    <path d="M12 6V2" />
    <path d="M9 3c0 2.4 3 3 3 3s3-.6 3-3" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="m9 16 2 2 4-4" />
  </svg>
);

const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PROJECTS = [
  {
    icon: <ShieldIcon />,
    badge: 'AI / CV',
    title: 'Deepfake Detection & Auto-Watermarking',
    bullets: [
      'Binary classifier on EfficientNet backbone achieving 96%+ accuracy on FaceForensics++ dataset',
      'Auto-watermarks flagged media with an imperceptible steganographic signature for traceability',
      'REST API served via Flask; React dashboard for batch uploads & real-time results',
    ],
    tech: ['Python', 'PyTorch', 'EfficientNet', 'OpenCV', 'Flask', 'React'],
    github: 'https://github.com/OmKarvrneKar',
  },
  {
    icon: <InvoiceIcon />,
    badge: 'ML / FinTech',
    title: 'Intelligent Invoice Fraud Detection',
    bullets: [
      'Ensemble model (XGBoost + Isolation Forest) detecting invoice anomalies with high precision',
      'Interactive review dashboard with SHAP-powered explainability for auditors',
      'FastAPI backend + MongoDB; role-based access control for analysts and admins',
    ],
    tech: ['Python', 'XGBoost', 'SHAP', 'FastAPI', 'React', 'MongoDB'],
    github: 'https://github.com/OmKarvrneKar',
  },
  {
    icon: <FruitIcon />,
    badge: 'AI / Mobile',
    title: 'Smart Fruit & Vegetable Quality Detection',
    bullets: [
      'CNN trained on 15k+ images classifying freshness across 30 produce categories',
      'Real-time inference under 200 ms on mobile via TensorFlow Lite quantization',
      'Cross-platform React Native app with live camera and gallery input',
    ],
    tech: ['Python', 'TensorFlow', 'CNN', 'TFLite', 'React Native'],
    github: 'https://github.com/OmKarvrneKar',
  },
  {
    icon: <LeafIcon />,
    badge: 'Deep Learning',
    title: 'Plant Leaf Disease Detection',
    bullets: [
      'ResNet50 transfer-learned on PlantVillage dataset — 38 disease classes, 94% top-1 accuracy',
      'Grad-CAM heat-map overlays highlight infected leaf regions for interpretability',
      'Flask API for image upload and diagnosis; deployed with Docker',
    ],
    tech: ['Python', 'TensorFlow', 'ResNet50', 'Grad-CAM', 'Flask', 'Docker'],
    github: 'https://github.com/OmKarvrneKar',
  },
  {
    icon: <CalendarIcon />,
    badge: 'Full Stack',
    title: 'SDC Register System',
    bullets: [
      'MERN stack portal for student development club registrations and event management',
      'JWT authentication with role-based dashboards for admins and members; email notifications',
      'Analytics panel tracking attendance and event participation trends',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/OmKarvrneKar',
  },
  {
    icon: <UsersIcon />,
    badge: 'Full Stack',
    title: 'Zakapo AGM',
    bullets: [
      'Annual General Meeting platform for scheduling, agenda management, and voting',
      'Real-time notifications via WebSocket; live vote tallying with instant results',
      'PostgreSQL backend with Node.js/Express REST API; responsive React frontend',
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'WebSocket'],
    github: 'https://github.com/OmKarvrneKar',
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <SectionHeader
          tag="// what I've built"
          title="Projects"
          subtitle="AI/ML models and full-stack applications — from research-grade systems to production-ready web apps."
        />

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <RevealSection key={p.title} delay={i * 0.07}>
              <GlassCard className="project-card">
                <div className="project-card-head">
                  <div className="project-icon">{p.icon}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="project-badge">{p.badge}</span>
                    <div className="project-links">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`${p.title} on GitHub`}
                      >
                        <GithubIcon />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-title">{p.title}</div>

                <ul className="project-bullets">
                  {p.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>

                <div className="project-tech">
                  {p.tech.map((t) => <span className="tech-badge" key={t}>{t}</span>)}
                </div>
              </GlassCard>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
