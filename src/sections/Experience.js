import { GlassCard } from '../components/GlassCard';
import { RevealSection } from '../components/RevealSection';
import { SectionHeader } from '../components/SectionHeader';

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const EXPERIENCES = [
  {
    icon: <CodeIcon />,
    company: 'Softmusk Info Pvt. Ltd.',
    role: 'Full-Stack Development & Web Security Intern',
    duration: 'Sep 2022 – Apr 2024',
    description:
      'Completed three progressive internship terms totalling 844 hours, spanning Web Development, Python full-stack development, and MERN Stack & Web Security. The most recent term (640 hrs) focused on the MERN stack and applied web security practices in a live company project environment.',
    tags: ['MERN Stack', 'React', 'Node.js', 'Python', 'Web Security', 'REST APIs', 'OWASP Top 10'],
  },
];

export function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <SectionHeader
          tag="// where I've worked"
          title="Experience"
          subtitle="Practical experience across cybersecurity, full-stack engineering, and community-driven development."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {EXPERIENCES.map((exp, i) => (
            <RevealSection key={exp.company} delay={i * 0.1}>
              <GlassCard className="exp-card">
                <div className="exp-icon">{exp.icon}</div>
                <div>
                  <div className="exp-top">
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                  <div className="exp-role">{exp.role}</div>
                  <p className="exp-desc">{exp.description}</p>
                  <div className="exp-tags">
                    {exp.tags.map((t) => (
                      <span className="tech-badge" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
