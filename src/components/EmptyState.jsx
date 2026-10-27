import { InboxIcon } from './Icons.jsx';

export default function EmptyState({ title, text }) {
  return (
    <div className="empty-state" role="status">
      <span className="empty-state__icon">
        <InboxIcon size={34} />
      </span>
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
