import { GlassCard } from '../components/GlassCard';
import { RevealSection } from '../components/RevealSection';
import { SectionHeader } from '../components/SectionHeader';

/* ── Icons ────────────────────────────────────────────── */
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const FinanceIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const MedicalIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const InvoiceIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4M9 8l2 2 4-4" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const OpenSourceIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
  </svg>
);

/* ── Project data (ranked by impact) ─────────────────── */
const PROJECTS = [
  // ── FEATURED (live + AI + full-stack) ─────────────────
  {
    priority: true,
    icon: <FinanceIcon />,
    badge: 'AI Agent / FinTech',
    title: 'AI Finance Agent',
    bullets: [
      'Upload CSV bank statements → Gemini AI auto-categorizes every transaction and detects recurring subscriptions',
      'Natural language query engine: ask "How much did I spend on food?" and get SQL-driven answers in plain English',
      'Full-stack: React + Recharts dashboard, FastAPI + SQLAlchemy backend, deployed live on Vercel + Render',
    ],
    tech: ['Gemini AI', 'FastAPI', 'Python', 'Pandas', 'React', 'Recharts', 'SQLite', 'SQLAlchemy'],
    github: 'https://github.com/OmKarvrneKar/finance_agent',
    live: 'https://financeagent-sigma.vercel.app',
  },
  {
    priority: true,
    icon: <MedicalIcon />,
    badge: 'AI / Healthcare',
    title: 'Medical Report Explainer',
    bullets: [
      'Upload lab report PDFs/images → Tesseract OCR extracts text, Gemini AI maps values against normal ranges with risk levels',
      'Plain-language summaries in 6 languages: English, Hindi, Marathi, Kannada, Tamil, Telugu + built-in text-to-speech',
      'Tracks health history over time, exports formatted PDF reports — live on Vercel + Render',
    ],
    tech: ['Gemini AI', 'FastAPI', 'Python', 'Tesseract', 'React', 'Vite', 'SQLite', 'Docker'],
    github: 'https://github.com/OmKarvrneKar/medical-report-explainer',
    live: 'https://medical-report-explainer-rust.vercel.app',
  },
  {
    priority: true,
    icon: <InvoiceIcon />,
    badge: 'ML / FinTech',
    title: 'Smart Invoice — Fraud Detection Platform',
    bullets: [
      '87% field extraction accuracy (vendor, date, amount) across 20–35 test invoices via confidence-weighted OCR parsing',
      'Rule-based and anomaly-driven fraud risk scoring with duplicate detection and field confidence metrics for explainable review decisions',
      'Secure human-in-the-loop review system with JWT authentication and audit logging, exposed via REST APIs backed by PostgreSQL',
    ],
    tech: ['FastAPI', 'Python', 'Tesseract', 'PostgreSQL', 'JWT', 'React'],
    github: 'https://github.com/OmKarvrneKar/Smart_Invoice',
    live: null,
  },

  // ── SECONDARY ──────────────────────────────────────────
  {
    priority: false,
    icon: <ShieldIcon />,
    badge: 'CV / Hackathon',
    title: 'Deepfake Detection & Auto-Watermarking System',
    bullets: [
      'Built at Presidency College Hackathon (team of 4) — advanced from ~50 teams to top 25, finishing 7th overall (top 14%)',
      'OpenCV-based face/frame analysis pipeline to detect manipulated video content',
      'Automatically applies a "Deepfake" watermark to flagged uploads via ffmpeg processing',
    ],
    tech: ['Python', 'OpenCV', 'Flask', 'ffmpeg'],
    github: 'https://github.com/OmKarvrneKar/Deep-fake-detection',
    live: null,
  },
];

/* ── Component ────────────────────────────────────────── */
export function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <SectionHeader
          tag="// what I've built"
          title="Projects"
          subtitle="Live deployed apps, AI agents, and full-stack systems — built and shipped, not just described."
        />

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <RevealSection key={p.title} delay={i * 0.07}>
              <GlassCard
                className="project-card"
                style={p.priority ? { borderColor: 'rgba(0,212,255,0.28)' } : {}}
              >
                <div className="project-card-head">
                  <div className="project-icon">{p.icon}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {p.priority && (
                      <span style={{
                        fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase',
                        letterSpacing: '0.08em', background: 'rgba(0,212,255,0.12)',
                        border: '1px solid rgba(0,212,255,0.4)', color: 'var(--accent)',
                        padding: '0.18rem 0.45rem', borderRadius: '6px',
                      }}>
                        Featured
                      </span>
                    )}
                    <span className="project-badge">{p.badge}</span>
                    <div className="project-links">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View on GitHub"
                      >
                        <GithubIcon />
                      </a>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="Live demo"
                        >
                          <ExternalIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-title">
                  {p.title}
                  {p.live && (
                    <span style={{
                      display: 'inline-block', marginLeft: '0.5rem',
                      fontSize: '0.58rem', fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.08em', background: 'rgba(0,255,136,0.1)',
                      border: '1px solid rgba(0,255,136,0.35)', color: '#00ff88',
                      padding: '0.15rem 0.42rem', borderRadius: '5px',
                      verticalAlign: 'middle',
                    }}>
                      Live
                    </span>
                  )}
                </div>

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
