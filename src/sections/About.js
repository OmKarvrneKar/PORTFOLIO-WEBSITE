import { GlassCard } from '../components/GlassCard';
import { RevealSection } from '../components/RevealSection';
import { SectionHeader } from '../components/SectionHeader';

const META = [
  { icon: '📍', label: 'Bangalore, Karnataka' },
  { icon: '🎓', label: 'MVJ College of Engineering' },
  { icon: '💼', label: 'Open to Opportunities' },
  { icon: '🤖', label: 'AI/ML & Backend Dev' },
];

const EDUCATION = [
  {
    school: 'MVJ College of Engineering, Bangalore',
    degree: 'B.E. Computer Science & Engineering · CGPA 7.89',
    year: '2024 – Present',
  },
  {
    school: 'Maratha Mandal Polytechnic, Belagavi',
    degree: 'Diploma, Computer Science Engineering · CGPA 9.09',
    year: '2021 – 2023',
  },
];

const PersonIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <circle cx="40" cy="28" r="18" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="4 2" />
    <path d="M10 72c0-16.569 13.431-30 30-30s30 13.431 30 30" stroke="#00d4ff" strokeWidth="1.5" />
    <circle cx="40" cy="28" r="10" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1" />
  </svg>
);

const EduIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <SectionHeader tag="// who I am" title="About Me" />

        <div className="about-grid">
          {/* Left column */}
          <RevealSection delay={0.1}>
            <GlassCard style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="about-photo">
                <PersonIcon />
              </div>
              <div className="about-badge">Available for Hire</div>

              <div className="about-meta" style={{ marginTop: '1.5rem', justifyContent: 'center' }}>
                {META.map((m) => (
                  <span className="meta-chip" key={m.label}>
                    <span role="img" aria-hidden="true">{m.icon}</span>
                    {m.label}
                  </span>
                ))}
              </div>
            </GlassCard>
          </RevealSection>

          {/* Right column */}
          <div>
            <RevealSection delay={0.15}>
              <div className="about-text">
                <h3>Hello, I'm Omkar</h3>
                <p>
                  Computer Science undergraduate specializing in AI/ML and full-stack development,
                  with four independently built and deployed applications spanning healthcare AI,
                  fintech AI, and document intelligence.
                </p>
                <p>
                  I completed a full-stack development and web security internship (844 hrs) at
                  Softmusk Info Pvt. Ltd., where I worked across web development, Python full-stack,
                  and MERN stack with applied security practices in a live company environment.
                  Seeking an internship in AI/ML or Backend Engineering.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={0.25}>
              <GlassCard style={{ padding: '1.5rem', marginTop: '1.5rem' }}>
                <div className="edu-timeline-label">
                  <EduIcon />
                  Education
                </div>
                {EDUCATION.map((e, i) => (
                  <div className="edu-item" key={i}>
                    <div className="edu-dot-col">
                      <div className="edu-dot" />
                      <div className="edu-line" />
                    </div>
                    <div>
                      <div className="edu-school">{e.school}</div>
                      <div className="edu-degree">{e.degree}</div>
                      <div className="edu-year">{e.year}</div>
                    </div>
                  </div>
                ))}
              </GlassCard>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
