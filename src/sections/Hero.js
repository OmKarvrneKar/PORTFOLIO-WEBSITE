import { TypedText } from '../components/TypedText';
import { RevealSection } from '../components/RevealSection';

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <RevealSection delay={0}>
          <span className="hero-tag">// available for opportunities</span>
        </RevealSection>

        <RevealSection delay={0.1}>
          <h1 className="hero-name">Omkar Vernekar</h1>
        </RevealSection>

        <RevealSection delay={0.2}>
          <TypedText />
        </RevealSection>

        <RevealSection delay={0.3}>
          <p className="hero-tagline">
            CS undergraduate specializing in AI/ML and full-stack development,
            building and deploying intelligent applications — from Bangalore, India.
          </p>
        </RevealSection>

        <RevealSection delay={0.4}>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </RevealSection>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="2" fill="currentColor">
            <animate attributeName="cy" values="8;14;8" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  );
}
