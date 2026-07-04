import { GlassCard } from '../components/GlassCard';
import { RevealSection } from '../components/RevealSection';
import { SectionHeader } from '../components/SectionHeader';

const SKILL_CATEGORIES = [
  {
    label: 'Frontend',
    icon: '◈',
    skills: ['React', 'Next.js', 'Three.js / R3F', 'Framer Motion', 'Tailwind CSS', 'HTML5 / CSS3', 'JavaScript ES2024', 'TypeScript'],
  },
  {
    label: 'Backend',
    icon: '⬡',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'WebSocket', 'Python'],
  },
  {
    label: 'AI / ML',
    icon: '⬢',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV', 'HuggingFace', 'XGBoost', 'Grad-CAM', 'SHAP'],
  },
  {
    label: 'Databases',
    icon: '▣',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose', 'Prisma'],
  },
  {
    label: 'DevOps & Tools',
    icon: '⬟',
    skills: ['Git / GitHub', 'Docker', 'Linux', 'Vite', 'Postman', 'Jupyter', 'VS Code'],
  },
  {
    label: 'Cybersecurity',
    icon: '◉',
    skills: ['Penetration Testing', 'Burp Suite', 'Nmap', 'Metasploit', 'OWASP Top 10', 'Network Analysis', 'CTF Challenges'],
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
