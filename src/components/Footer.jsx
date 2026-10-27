import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { NAV_ITEMS } from '../data/navigation.js';
import { SITE } from '../config.js';
import Logo from './Logo.jsx';

// Rendered on every public page (including 404) by <Layout>.
export default function Footer() {
  const { t, openGate } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-col--brand">
          <div className="footer-brand">
            <Logo size={44} />
            <div>
              <p className="footer-brand__name">{SITE.nameEn}</p>
              <p className="footer-brand__sub" lang="hi">
                {SITE.nameHi}
              </p>
            </div>
          </div>
          <p className="footer-text">{t('footer.about')}</p>
        </div>

        <nav className="footer-col" aria-label={t('footer.linksTitle')}>
          <h2 className="footer-heading">{t('footer.linksTitle')}</h2>
          <ul className="footer-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link to={item.to}>{t(`nav.${item.key}`)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">{t('footer.languageTitle')}</h2>
          <p className="footer-text">{t('footer.languageText')}</p>
          <button type="button" className="footer-lang-btn" onClick={openGate}>
            {t('footer.changeLanguage')}
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p className="footer-legal">
            © {year} {SITE.nameEn}. {t('footer.disclaimer')}
          </p>
          <p className="credit"><span>Developed by CHNM</span><span>Trade with help of Instructor Vishav Kumar</span></p>
        </div>
      </div>
    </footer>
  );
}
