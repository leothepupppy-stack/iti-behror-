import DemoBadge from './DemoBadge.jsx';

// `items`: [{ title, date, tag }]. Pass `limit` to show only the first N.
// Stage 4 will feed this from the database; the markup stays the same.
export default function NoticeList({ items, limit }) {
  const list = typeof limit === 'number' ? items.slice(0, limit) : items;
  return (
    <ul className="notice-list">
      {list.map((item) => (
        <li key={item.title} className="notice">
          <div className="notice__date">{item.date}</div>
          <div className="notice__body">
            <p className="notice__title">{item.title}</p>
            <DemoBadge label={item.tag} />
          </div>
        </li>
      ))}
    </ul>
  );
}
