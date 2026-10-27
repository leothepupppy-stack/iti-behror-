import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { ArrowIcon } from './Icons.jsx';

// Heading block used at the top of each homepage section.
// `viewAllTo` adds a "View all" link whose full meaning is available to screen readers.
export default function SectionHeading({ id, eyebrow, title, subtitle, viewAllTo }) {
  const { t } = useLanguage();
  return (
    <div className="section__head">
      <div className="section__head-text">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id={id}>{title}</h2>
        {subtitle ? <p className="section__sub">{subtitle}</p> : null}
      </div>
      {viewAllTo ? (
        <Link className="link-arrow" to={viewAllTo}>
          {t('common.viewAll')}
          <span className="sr-only"> — {title}</span>
          <ArrowIcon size={18} />
        </Link>
      ) : null}
    </div>
  );
}
