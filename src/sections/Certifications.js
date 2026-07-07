import { GlassCard } from '../components/GlassCard';
import { RevealSection } from '../components/RevealSection';
import { SectionHeader } from '../components/SectionHeader';

const CertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const CERTS = [
  {
    name: 'Artificial Intelligence and Machine Learning',
    issuer: 'CODEXINTERN',
    year: '2025',
  },
  {
    name: 'Database Management Systems: Fundamentals to Advanced Concepts',
    issuer: 'Online Certification',
    year: '2025',
  },
  {
    name: 'Applied Ethical Hacking — Cybersecurity',
    issuer: 'InfyspringBoard',
    year: '2024',
  },
];

export function Certifications() {
  return (
    <section id="certifications">
      <div className="section-inner">
        <SectionHeader
          tag="// credentials"
          title="Certifications"
          subtitle="Verified learning across cloud, AI, security, and web development."
        />

        <div className="cert-grid">
          {CERTS.map((c, i) => (
            <RevealSection key={c.name} delay={i * 0.07}>
              <GlassCard className="cert-card">
                <div className="cert-icon"><CertIcon /></div>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                  <span className="cert-year">{c.year}</span>
                </div>
              </GlassCard>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
