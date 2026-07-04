/**
 * Consistent section header: tag line / title / accent line.
 */
import { RevealSection } from './RevealSection';

export function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="section-header">
      <RevealSection delay={0}>
        <span className="section-tag">{tag}</span>
      </RevealSection>

      <RevealSection delay={0.08}>
        <h2 className="section-title">{title}</h2>
      </RevealSection>

      {subtitle && (
        <RevealSection delay={0.15}>
          <p className="section-subtitle" style={{ margin: '0.75rem auto 0' }}>{subtitle}</p>
        </RevealSection>
      )}

      <RevealSection delay={0.2}>
        <div className="section-line" />
      </RevealSection>
    </div>
  );
}
