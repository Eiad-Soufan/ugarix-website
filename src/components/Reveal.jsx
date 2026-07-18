import { motion as Motion } from 'framer-motion';

export function Reveal({ children, className = '', delay = 0, y = 28 }) {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = 'start' }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}
