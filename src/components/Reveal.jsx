import { useEffect, useRef, useState } from 'react';

// Fades/slides content in once when it scrolls into view.
// - Falls back to "visible" if IntersectionObserver is missing.
// - Reduced-motion users get no movement: see `.reveal` in index.css.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal${shown ? ' is-visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
