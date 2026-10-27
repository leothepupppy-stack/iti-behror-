import { useLanguage } from '../context/LanguageContext.jsx';

// `trade`: { name, text }. `detailed` adds duration / eligibility / seats rows
// (all shown as "to be supplied" until the institute provides verified data).
export default function TradeCard({ trade, detailed = false }) {
  const { t } = useLanguage();
  const fields = t('pages.trades.fields');
  return (
    <article className="card trade-card">
      <h3>{trade.name}</h3>
      <p>{trade.text}</p>
      {detailed ? (
        <dl className="trade-card__facts">
          {Object.keys(fields).map((key) => (
            <div key={key}>
              <dt>{fields[key]}</dt>
              <dd>{t('common.pendingInfo')}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </article>
  );
}
