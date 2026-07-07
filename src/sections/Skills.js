import { GlassCard } from '../components/GlassCard';
import { RevealSection } from '../components/RevealSection';
import { SectionHeader } from '../components/SectionHeader';

const SKILL_CATEGORIES = [
  {
    label: 'Languages',
    icon: '◈',
    skills: ['Python', 'Java', 'JavaScript', 'C', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frontend',
    icon: '⬡',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite'],
  },
  {
    label: 'Backend',
    icon: '⬢',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django', 'REST APIs'],
  },
  {
    label: 'AI / ML',
    icon: '▣',
    skills: ['TensorFlow', 'scikit-learn', 'OpenCV', 'NumPy', 'Pandas', 'Google Gemini API', 'NLP'],
  },
  {
    label: 'Databases & Tools',
    icon: '⬟',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Git / GitHub', 'Docker', 'Postman', 'Figma', 'Vercel', 'Render'],
  },
  {
    label: 'Cybersecurity',
    icon: '◉',
    skills: ['Applied Ethical Hacking', 'Web Security', 'OWASP Top 10', 'Burp Suite', 'Nmap', 'JWT Auth'],
  },
];

export function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <SectionHeader
          tag="// what I use"
          title="Skills"
          subtitle="Technologies I work with across the full stack — from pixels to packets."
        />

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <RevealSection key={cat.label} delay={i * 0.07}>
              <GlassCard className="skill-category">
                <div className="skill-cat-title">
                  <span style={{ fontSize: '1rem' }} aria-hidden="true">{cat.icon}</span>
                  {cat.label}
                </div>
                <div className="skill-badges">
                  {cat.skills.map((s) => (
                    <span className="skill-badge" key={s}>
                      <span className="skill-dot" />
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
