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
    name: 'Google Cybersecurity Certificate',
    issuer: 'Google / Coursera',
    year: '2024',
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    year: '2024',
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    year: '2023',
  },
  {
    name: 'The Complete JavaScript Course',
    issuer: 'Udemy — Jonas Schmedtmann',
    year: '2023',
  },
  {
    name: 'Python for Data Science & ML Bootcamp',
    issuer: 'Udemy — Jose Portilla',
    year: '2023',
  },
  {
    name: 'Cloud Computing — NPTEL',
    issuer: 'IIT Kharagpur / NPTEL',
    year: '2023',
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
