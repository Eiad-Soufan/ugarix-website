import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Check,
  Coffee,
  ExternalLink,
  Luggage,
  Mail,
  MapPin,
  Phone,
  Scale,
  Sprout,
} from 'lucide-react';
import Header from './components/Header';
import HeroVisual from './components/HeroVisual';
import { Reveal, SectionHeading } from './components/Reveal';
import { content } from './i18n/content';

const serviceVisuals = [
  '/services/enterprise-systems.webp',
  '/services/digital-products.webp',
  '/services/ai-automation.webp',
  '/services/web-mobile-platforms.webp',
];

const disciplineVisuals = [
  '/disciplines/engineering.webp',
  '/disciplines/legal.webp',
  '/disciplines/business.webp',
  '/disciplines/design.webp',
];

const projectIcons = [Scale, Coffee, Sprout, Luggage];

function TrustCard({ item, index, clone = false }) {
  const card = (
    <article>
      <div className="trust-card-top">
        <span className="mono">UG / {item.number}</span>
        <span className="trust-live"><i />VERIFIED</span>
      </div>
      <div className="trust-logo-stage">
        <span className="trust-orbit" aria-hidden="true" />
        <div className="trust-logo-crop"><img src={item.logo} alt={clone ? '' : `${item.name} logo`} /></div>
      </div>
      <div className="trust-card-bottom">
        <div><span>{item.sector}</span><h3>{item.name}</h3></div>
        <span className="mono">0{index + 1} / 05</span>
      </div>
    </article>
  );

  if (clone) {
    return <div className={`trust-card trust-card--${item.tone} trust-card--clone`} aria-hidden="true">{card}</div>;
  }

  return (
    <Reveal className={`trust-card trust-card--${item.tone}`} delay={index * 0.06}>
      {card}
    </Reveal>
  );
}

function App() {
  const [locale, setLocale] = useState(() => localStorage.getItem('ugarix-locale') || 'ar');
  const t = content[locale];

  useEffect(() => {
    localStorage.setItem('ugarix-locale', locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.title = t.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription);
  }, [locale, t.metaDescription, t.metaTitle]);

  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div className={`app locale-${locale}`}>
      <a className="skip-link" href="#main">{t.skip}</a>
      <div className="site-noise" aria-hidden="true" />
      <div className="cursor-light" aria-hidden="true" />
      <Header t={t} locale={locale} setLocale={setLocale} />

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="hero-aurora" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <Motion.span
                className="eyebrow"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              ><i />{t.hero.eyebrow}</Motion.span>
              <Motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>{t.hero.titleStart}</span>
                <em>{t.hero.titleAccent}</em>
              </Motion.h1>
              <Motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.75 }}
              >{t.hero.description}</Motion.p>
              <Motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.7 }}
              >
                <a href="#contact" className="button button--primary"><span>{t.hero.primary}</span><ArrowUpRight /></a>
                <a href="#process" className="button button--ghost"><span>{t.hero.secondary}</span><ArrowDown /></a>
              </Motion.div>
              <Motion.div
                className="hero-footnote mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              ><span>UGARIX / 2026</span><span>35.0000° N · 38.0000° E</span></Motion.div>
            </div>
            <HeroVisual t={t.hero} />
          </div>
          <a href="#story" className="scroll-cue" aria-label={t.hero.scroll}><span>{t.hero.scroll}</span><i><ArrowDown /></i></a>
        </section>

        <section className="stats-section" aria-label="Company facts">
          <div className="container stats-grid">
            {t.stats.map((stat, index) => (
              <Reveal className="stat-card" delay={index * 0.06} key={stat.label}>
                <span className="stat-value mono">{stat.value}</span>
                <div><strong>{stat.label}</strong><small>{stat.detail}</small></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="story section" id="story">
          <div className="story-rune story-rune--one" aria-hidden="true">𐎜</div>
          <div className="story-rune story-rune--two" aria-hidden="true">𐎀</div>
          <div className="container story-grid">
            <div className="story-copy">
              <SectionHeading eyebrow={t.story.eyebrow} title={t.story.title} />
              <Reveal className="story-text" delay={0.12}>
                <p className="story-lead">{t.story.lead}</p>
                <p>{t.story.body}</p>
              </Reveal>
              <Reveal className="story-quote" delay={0.18}>
                <span className="quote-mark">“</span><p>{t.story.quote}</p>
              </Reveal>
            </div>
            <Reveal className="story-art" delay={0.12} y={10}>
              <div className="tablet-card">
                <div className="tablet-top"><span className="mono">UG / ORIGIN / 3000 BC</span><i /></div>
                <div className="tablet-glyphs" aria-hidden="true">
                  <span>𐎀 𐎁 𐎂 𐎃 𐎄</span><span>𐎅 𐎆 𐎇 𐎈 𐎉</span><span>𐎊 𐎋 𐎌 𐎍 𐎎</span><span>𐎏 𐎐 𐎑 𐎒 𐎓</span>
                </div>
                <div className="tablet-axis"><span>{t.story.sideLabel}</span><b>3000+</b></div>
                <div className="tablet-scan" />
              </div>
              <div className="story-timeline">
                {t.story.timeline.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
            <div className="services-grid">
              {t.services.items.map((service, index) => (
                <Reveal className={`service-card service-card--${index + 1}`} delay={index * 0.07} key={service.title}>
                  <article>
                    <div className="service-card-head">
                      <span className="service-status mono"><i />UG / SERVICE / {service.number}</span>
                      <span className="service-number mono">{service.number}</span>
                    </div>
                    <span className="service-ghost-number mono" aria-hidden="true">{service.number}</span>
                    <div className="service-card-layout">
                      <div className="service-visual" aria-hidden="true">
                        <span className="service-orbit" />
                        <img src={serviceVisuals[index]} alt="" loading="lazy" decoding="async" />
                      </div>
                      <div className="service-copy">
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                        <div className="tag-row">{service.tags.map(tag => <span className="mono" key={tag}>{tag}</span>)}</div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="container">
            <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} intro={t.work.intro} />
            <div className="work-list">
              {t.work.items.map((project, index) => {
                const ProjectIcon = projectIcons[index];
                return (
                  <Reveal className={`project-card project-card--${project.color}`} delay={index * 0.06} key={project.name}>
                    <a href={project.url} target="_blank" rel="noreferrer" aria-label={`${t.work.view}: ${project.name}`}>
                      <span className="project-ghost-number mono" aria-hidden="true">{project.number}</span>
                      <div className="project-card-head">
                        <span className="project-number mono">UG / {project.number}</span>
                        <span className="project-icon" aria-hidden="true"><ProjectIcon /></span>
                      </div>
                      <div className="project-main">
                        <span className="project-type mono">{project.type}</span>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                      </div>
                      <ul className="project-features">
                        {project.features.map(feature => <li key={feature}><Check />{feature}</li>)}
                      </ul>
                      <div className="project-tags">{project.tags.map(tag => <span className="mono" key={tag}>{tag}</span>)}</div>
                      <div className="project-link"><span>{t.work.view}</span><ExternalLink /></div>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="trusted section">
          <div className="trust-atmosphere" aria-hidden="true"><i /><i /><i /></div>
          <div className="container">
            <Reveal className="trusted-heading">
              <div>
                <span className="eyebrow"><i />{t.trusted.eyebrow}</span>
                <h2>{t.trusted.title}</h2>
                <p>{t.trusted.intro}</p>
              </div>
              <span className="trust-signal mono"><i />{t.trusted.signal}<b>05</b></span>
            </Reveal>

            <div className="trust-marquee">
              <div className="trust-grid">
                {t.trusted.items.map((item, index) => (
                  <TrustCard item={item} index={index} key={item.name} />
                ))}
                {t.trusted.items.map((item, index) => (
                  <TrustCard item={item} index={index} clone key={`clone-${item.name}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="container">
            <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} intro={t.process.intro} />
            <div className="process-rail">
              <div className="process-line" aria-hidden="true"><Motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} /></div>
              {t.process.steps.map((step, index) => (
                <Reveal className="process-step" delay={index * 0.08} key={step.number}>
                  <span className="step-dot"><i /></span><span className="step-number mono">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="principles section">
          <div className="container principles-grid">
            <div className="principles-intro">
              <SectionHeading eyebrow={t.principles.eyebrow} title={t.principles.title} />
              <div className="principles-mark"><img src="/brand/ugarix-mark.svg" alt="" /><span className="mono">UG / STANDARD / 05</span></div>
            </div>
            <div className="principles-list">
              {t.principles.items.map((item, index) => (
                <Reveal className="principle-row" delay={index * 0.05} key={item.number}>
                  <span className="mono">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="disciplines section">
          <div className="disciplines-atmosphere" aria-hidden="true"><i /></div>
          <div className="container">
            <div className="disciplines-head">
              <SectionHeading eyebrow={t.disciplines.eyebrow} title={t.disciplines.title} intro={t.disciplines.intro} />
              <Reveal className="disciplines-readout" delay={0.08} y={12}>
                <span className="mono"><i />UG / QUAD-LENS</span>
                <b className="mono">04</b>
              </Reveal>
            </div>
            <div className="discipline-grid">
              {t.disciplines.items.map((item, index) => (
                <Reveal className={`discipline-card discipline-card--${index + 1}`} delay={index * 0.07} key={item.title}>
                  <article>
                    <div className="discipline-card-top">
                      <span className="discipline-index mono">0{index + 1}</span>
                      <span className="discipline-lens mono"><i />LENS / 0{index + 1}</span>
                    </div>
                    <div className="discipline-visual" aria-hidden="true">
                      <span className="discipline-orbit" />
                      <img src={disciplineVisuals[index]} alt="" />
                    </div>
                    <div className="discipline-card-copy">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <span className="discipline-corner mono" aria-hidden="true">UG / 0{index + 1}</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-orb" aria-hidden="true" />
          <div className="container contact-grid">
            <div className="contact-copy">
              <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.text} />
              <Reveal className="direct-contact" delay={0.12}>
                <span>{t.contact.direct}</span>
                <a href="mailto:ugarixsystems@gmail.com">
                  <span className="direct-contact-icon"><Mail /></span>
                  <span className="direct-contact-value" dir="ltr">ugarixsystems@gmail.com</span>
                </a>
                <a href="tel:+963938688397">
                  <span className="direct-contact-icon"><Phone /></span>
                  <span className="direct-contact-value" dir="ltr">+963 938 688 397</span>
                </a>
                <p>
                  <span className="direct-contact-icon"><MapPin /></span>
                  <span className="direct-contact-value">{t.contact.location}</span>
                </p>
              </Reveal>
            </div>
            <Reveal className="form-wrap" delay={0.12} y={18}>
              <form name="project-inquiry" method="POST" data-netlify="true" action="/?sent=1#contact">
                <input type="hidden" name="form-name" value="project-inquiry" />
                <p className="honeypot"><label>Do not fill: <input name="bot-field" /></label></p>
                <div className="form-row">
                  <label><span>{t.contact.name}</span><input name="name" type="text" required autoComplete="name" /></label>
                  <label><span>{t.contact.email}</span><input name="email" type="email" required autoComplete="email" /></label>
                </div>
                <label><span>{t.contact.company}</span><input name="company" type="text" autoComplete="organization" /></label>
                <label><span>{t.contact.service}</span><select name="service" required defaultValue=""><option value="" disabled>{t.contact.select}</option>{t.contact.options.map(option => <option key={option} value={option}>{option}</option>)}</select></label>
                <label><span>{t.contact.message}</span><textarea name="message" rows="4" required /></label>
                <button className="button button--primary submit-button" type="submit"><span>{t.contact.submit}</span><ArrowUpRight /></button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <img src="/brand/ugarix-logo-light.png" alt="Ugarix Systems" />
          <p>{t.footer.statement}</p>
          <a href="#home"><span>{t.footer.back}</span><ArrowUp /></a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} UGARIX SYSTEMS. {t.footer.rights}</span>
          <span className="mono">SYRIA · TÜRKİYE · MALAYSIA · UAE</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
