import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { ABOUT } from '../data/about.js';
import { GALLERY_IMAGES } from '../data/gallery.js';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import GalleryGrid from '../components/GalleryGrid.jsx';

export default function About() {
  const { lang } = useLanguage();
  const a = lang === 'hi' ? ABOUT.hi : ABOUT.en;

  return (
    <>
      <Seo page="about" />
      <PageHero title={a.title} intro={a.intro} />

      <section className="section">
        <div className="container narrow about">
          <Reveal>
            <h2>{a.aboutTitle}</h2>
            {a.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal>
            <h2>{a.tradesTitle}</h2>
            <p>{a.tradesText}</p>
            <ul className="about__list">
              {a.trades.map((trade) => (
                <li key={trade}>{trade}</li>
              ))}
            </ul>
            <Link className="btn btn--primary" to="/trades">
              {a.tradesCta}
            </Link>
          </Reveal>

          <Reveal>
            <h2>{a.admissionTitle}</h2>
            <p>{a.admission}</p>
            <Link className="btn btn--outline" to="/notices">
              {a.admissionCta}
            </Link>
          </Reveal>

          <Reveal>
            <h2>{a.locationTitle}</h2>
            <p>{a.location}</p>
            <Link className="btn btn--outline" to="/contact">
              {a.locationCta}
            </Link>
          </Reveal>
        </div>

        {GALLERY_IMAGES.length > 0 && (
          <div className="container about__photos">
            <Reveal>
              <h2>{a.photosTitle}</h2>
              <GalleryGrid limit={3} />
              <p>
                <Link className="link-arrow" to="/gallery">
                  {a.photosCta}
                </Link>
              </p>
            </Reveal>
          </div>
        )}
      </section>
    </>
  );
}
