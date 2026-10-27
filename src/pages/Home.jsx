import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { SHOW_DEMO_CONTENT } from '../config.js';
import { GALLERY_IMAGES } from '../data/gallery.js';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import NoticeList from '../components/NoticeList.jsx';
import TradeCard from '../components/TradeCard.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';
import ContactInfo from '../components/ContactInfo.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { ArrowIcon } from '../components/Icons.jsx';

const QUICK_LINKS = [
  { to: '/notices', key: 'notices' },
  { to: '/gallery', key: 'gallery' },
  { to: '/contact', key: 'contact' },
];

export default function Home() {
  const { t } = useLanguage();

  const notices = SHOW_DEMO_CONTENT ? t('demo.notices') : [];
  const trades = SHOW_DEMO_CONTENT ? t('demo.trades') : [];

  return (
    <>
      <Seo page="home" />

      {/* 3. Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__eyebrow">{t('hero.eyebrow')}</p>
            <h1 id="hero-title">{t('hero.title')}</h1>
            <p className="hero__text">{t('hero.text')}</p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/trades">
                {t('hero.ctaTrades')}
              </Link>
              <Link className="btn btn--outline-light" to="/notices">
                {t('hero.ctaNotices')}
              </Link>
            </div>
          </div>

          <nav className="hero-panel" aria-label={t('hero.quickTitle')}>
            <h2 className="hero-panel__title">{t('hero.quickTitle')}</h2>
            <ul>
              {QUICK_LINKS.map((item) => (
                <li key={item.key}>
                  <Link to={item.to}>
                    <span>{t(`nav.${item.key}`)}</span>
                    <ArrowIcon size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* 4. Institute introduction */}
      <Reveal as="section" className="section" aria-labelledby="intro-title">
        <div className="container">
          <SectionHeading
            id="intro-title"
            eyebrow={t('intro.eyebrow')}
            title={t('intro.title')}
            subtitle={t('intro.body')}
          />
          <div className="grid grid--3">
            {t('intro.items').map((item) => (
              <Link key={item.to} to={item.to} className="card card--link">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="link-arrow link-arrow--static" aria-hidden="true">
                  <ArrowIcon size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 5. Latest notices */}
      <Reveal as="section" className="section section--alt" aria-labelledby="notices-title">
        <div className="container">
          <SectionHeading
            id="notices-title"
            eyebrow={t('notices.eyebrow')}
            title={t('notices.title')}
            subtitle={SHOW_DEMO_CONTENT ? t('notices.subtitle') : undefined}
            viewAllTo="/notices"
          />
          {notices.length > 0 ? (
            <NoticeList items={notices} limit={3} />
          ) : (
            <EmptyState title={t('notices.emptyTitle')} text={t('notices.emptyText')} />
          )}
        </div>
      </Reveal>

      {/* 6. Trades and vocational learning */}
      <Reveal as="section" className="section" aria-labelledby="trades-title">
        <div className="container">
          <SectionHeading
            id="trades-title"
            eyebrow={t('trades.eyebrow')}
            title={t('trades.title')}
            subtitle={t('trades.subtitle')}
            viewAllTo="/trades"
          />
          {trades.length > 0 ? (
            <div className="grid grid--4">
              {trades.map((trade) => (
                <TradeCard key={trade.name} trade={trade} />
              ))}
            </div>
          ) : null}

          <div className="themes">
            <h3 className="themes__title">
              {t('trades.themesTitle')} <span className="themes__note">{t('trades.themesNote')}</span>
            </h3>
            <ul className="themes__list">
              {t('trades.themes').map((theme) => (
                <li key={theme.title}>
                  <strong>{theme.title}</strong>
                  <span>{theme.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Image gallery */}
      <Reveal as="section" className="section" aria-labelledby="gallery-title">
        <div className="container">
          <SectionHeading
            id="gallery-title"
            eyebrow={t('gallery.eyebrow')}
            title={t('gallery.title')}
            subtitle={GALLERY_IMAGES.length > 0 ? t('gallery.subtitle') : undefined}
            viewAllTo="/gallery"
          />
          {GALLERY_IMAGES.length > 0 ? (
            <GalleryGrid limit={6} />
          ) : (
            <EmptyState title={t('gallery.emptyTitle')} text={t('gallery.emptyText')} />
          )}
        </div>
      </Reveal>

      {/* 9-11. About the institute / trades (summary cards) */}
      <Reveal as="section" className="section section--alt" aria-labelledby="about-title">
        <div className="container">
          <SectionHeading
            id="about-title"
            eyebrow={t('aboutSummary.eyebrow')}
            title={t('aboutSummary.title')}
          />
          <div className="grid grid--3">
            {t('aboutSummary.cards').map((card) => (
              <article key={card.to} className="card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link className="link-arrow" to={card.to}>
                  {t('aboutSummary.cta')}
                  <span className="sr-only"> — {card.title}</span>
                  <ArrowIcon size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 12. Contact */}
      <Reveal as="section" className="section" aria-labelledby="contact-title">
        <div className="container">
          <SectionHeading
            id="contact-title"
            eyebrow={t('contact.eyebrow')}
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
            viewAllTo="/contact"
          />
          <ContactInfo />
        </div>
      </Reveal>
    </>
  );
}
