import { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { ArrowUpRight, Languages, Menu, X } from 'lucide-react';

export default function Header({ t, locale, setLocale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-shell">
        <a className="brand" href="#home" aria-label="Ugarix Systems" onClick={close}>
          <img src="/brand/ugarix-logo-light.png" alt="Ugarix Systems" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {t.nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <button
            className="language-button"
            type="button"
            onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
            aria-label={t.languageLabel}
          >
            <Languages size={16} />
            <span>{locale === 'ar' ? 'EN' : 'AR'}</span>
          </button>
          <a className="header-cta" href="#contact">
            <span>{t.contactCta}</span><ArrowUpRight size={16} />
          </a>
          <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? t.closeMenuLabel : t.menuLabel} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <Motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile navigation">
              {t.nav.map(([label, id], index) => (
                <Motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={close}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + index * 0.05 }}
                >
                  <span className="mono">0{index + 1}</span><b>{label}</b><ArrowUpRight />
                </Motion.a>
              ))}
              <a href="#contact" onClick={close}><span className="mono">06</span><b>{t.contactCta}</b><ArrowUpRight /></a>
            </nav>
            <div className="mobile-menu-footer"><span>UGARIX SYSTEMS</span><span>SY · MY · TR · UAE</span></div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
