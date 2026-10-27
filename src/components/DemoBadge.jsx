import { useLanguage } from '../context/LanguageContext.jsx';

// Marks demonstration content so it can never be mistaken for a real announcement.
export default function DemoBadge({ label }) {
  const { t } = useLanguage();
  return <span className="badge badge--demo">{label ?? t('common.demo')}</span>;
}
