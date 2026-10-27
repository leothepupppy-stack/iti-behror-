import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';

// Title band shown at the top of every inner page (with breadcrumb).
export default function PageHero({ title, intro }) {
  const { t } = useLanguage();
  return (
    <section className="page-hero">
      <div className="container">
        <nav aria-label={t('common.breadcrumb')} className="breadcrumb">
          <ol>
            <li>
              <Link to="/">{t('nav.home')}</Link>
            </li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1>{title}</h1>
        {intro ? <p className="page-hero__intro">{intro}</p> : null}
      </div>
    </section>
  );
}
