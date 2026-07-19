import { motion as Motion } from 'framer-motion';

const nodes = [
  { x: 300, y: 70, delay: '0s' },
  { x: 498, y: 185, delay: '-1.4s' },
  { x: 500, y: 415, delay: '-2.8s' },
  { x: 300, y: 530, delay: '-4.2s' },
  { x: 102, y: 415, delay: '-5.6s' },
  { x: 102, y: 185, delay: '-7s' },
];

export default function HeroVisual({ t }) {
  return (
    <Motion.div
      className="system-visual"
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <div className="visual-glow" />
      <div className="visual-grid" />
      <div className="orbit orbit--outer"><span /><span /><span /></div>
      <div className="orbit orbit--middle" />
      <div className="orbit orbit--inner"><span /></div>
      <svg className="network-lines" viewBox="0 0 600 600">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#02b3ff" stopOpacity="0.12" />
            <stop offset="0.5" stopColor="#03da97" stopOpacity="0.8" />
            <stop offset="1" stopColor="#02b3ff" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path d="M300 70 L498 185 L500 415 L300 530 L102 415 L102 185 Z" />
        <path d="M300 70 L300 300 L498 185 M300 300 L500 415 M300 300 L300 530 M300 300 L102 415 M300 300 L102 185" />
        <circle cx="300" cy="300" r="170" />
        <g className="network-nodes">
          {nodes.map((node, index) => (
            <g className="network-node" key={index} transform={`translate(${node.x} ${node.y})`} style={{ '--delay': node.delay }}>
              <circle className="network-node-halo" r="19" vectorEffect="non-scaling-stroke" />
              <circle className="network-node-ring" r="10" vectorEffect="non-scaling-stroke" />
              <circle className="network-node-core" r="3.5" />
            </g>
          ))}
        </g>
      </svg>

      <div className="core-shell">
        <div className="core-scan" />
        <div className="core-mark"><img src="/brand/ugarix-mark.svg" alt="" /></div>
      </div>

      {t.signals.map((signal, index) => (
        <span key={signal} className={`signal signal--${index + 1}`}><i>0{index + 1}</i>{signal}</span>
      ))}
      <div className="visual-readout mono"><span>U-CORE / 2026</span><span>99.99%</span></div>
    </Motion.div>
  );
}
