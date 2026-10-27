import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { NAV_ITEMS } from '../data/navigation.js';
import { SITE } from '../config.js';
import Logo from './Logo.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the mobile menu and returns focus to the hamburger button.
  useEffect(() => {
    if (!open) return undefined;
    function onKey(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container header-top__inner">
          <Link to="/" className="brand">
            <Logo className="brand__logo" size={48} />
            <span className="brand__text">
              <span className="brand__name">{SITE.nameEn}</span>
              <span className="brand__sub" lang="hi">
                {SITE.nameHi}
              </span>
            </span>
          </Link>

          <div className="header-actions">
            <LanguageSwitcher />
            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="primary-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="menu-toggle__bars" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="sr-only">{open ? t('nav.closeMenu') : t('nav.openMenu')}</span>
            </button>
          </div>
        </div>
      </div>

      <nav id="primary-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label={t('nav.label')}>
        <div className="container">
          <ul className="site-nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <NavLink to={item.to} end={item.end}>
                  {t(`nav.${item.key}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
