import { SITE } from '../config.js';

// Decorative: the institute name is always rendered as text next to the logo,
// so the image uses an empty alt to avoid duplicate announcements.
export default function Logo({ size = 48, className = '' }) {
  return (
    <img
      className={className}
      src={SITE.logoSrc}
      alt=""
      width={size}
      height={size}
      decoding="async"
    />
  );
}
