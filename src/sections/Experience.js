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
    icon: <ShieldIcon />,
    company: 'Cybersecurity Internship',
    role: 'Cybersecurity Intern',
    duration: '2024',
    description:
      'Performed vulnerability assessments and penetration testing on web applications in a supervised lab environment. Analyzed network traffic, identified security misconfigurations, and documented findings with remediation recommendations. Worked hands-on with industry-standard tools and developed a deeper understanding of the OWASP Top 10 threat landscape.',
    tags: ['Penetration Testing', 'Burp Suite', 'Nmap', 'OWASP Top 10', 'Network Analysis', 'Linux', 'Metasploit'],
  },
  {
    icon: <CodeIcon />,
    company: 'MVJ College of Engineering — SDC',
    role: 'Student Developer & Technical Lead',
    duration: '2022 – Present',
    description:
      'Active member and technical lead of the Student Development Club. Built the club\'s full-stack registration and event management system, now handling 500+ student records. Mentor junior students on web development fundamentals and machine learning concepts. Organize workshops and hackathons promoting applied engineering skills.',
    tags: ['React', 'Node.js', 'MongoDB', 'Leadership', 'Mentoring', 'Event Management'],
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
