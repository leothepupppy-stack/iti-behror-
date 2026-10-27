import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <Seo page="notFound" />
      <section className="section">
        <div className="container">
          <div className="empty-state">
            <p className="empty-state__code" aria-hidden="true">
              404
            </p>
            <h1>{t('notFound.title')}</h1>
            <p>{t('notFound.text')}</p>
            <Link className="btn btn--primary" to="/">
              {t('notFound.button')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
