import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { GALLERY_IMAGES } from '../data/gallery.js';

// Real photo grid. Click/tap a photo to view it larger; Esc, the close button
// or a click outside closes it. Arrow keys move between photos.
export default function GalleryGrid({ limit }) {
  const { lang } = useLanguage();
  const hi = lang === 'hi';
  const items = typeof limit === 'number' ? GALLERY_IMAGES.slice(0, limit) : GALLERY_IMAGES;
  const [open, setOpen] = useState(null); // index of the photo shown large

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % items.length);
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + items.length) % items.length);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, items.length]);

  const current = open !== null ? items[open] : null;

  return (
    <>
      <ul className="gallery">
        {items.map((img, i) => (
          <li key={img.src}>
            <figure className="tile">
              <button
                type="button"
                className="tile__btn"
                onClick={() => setOpen(i)}
                aria-label={`${hi ? 'बड़ा देखें' : 'View larger'}: ${hi ? img.captionHi : img.captionEn}`}
              >
                <img
                  className="tile__photo"
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={hi ? img.altHi : img.altEn}
                  loading="lazy"
                  decoding="async"
                />
              </button>
              <figcaption>{hi ? img.captionHi : img.captionEn}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={hi ? current.captionHi : current.captionEn}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setOpen(null)}
            aria-label={hi ? 'बंद करें' : 'Close'}
          >
            ×
          </button>
          {items.length > 1 && (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((i) => (i - 1 + items.length) % items.length);
              }}
              aria-label={hi ? 'पिछला चित्र' : 'Previous photo'}
            >
              ‹
            </button>
          )}
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={hi ? current.altHi : current.altEn} />
            <figcaption>{hi ? current.captionHi : current.captionEn}</figcaption>
          </figure>
          {items.length > 1 && (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((i) => (i + 1) % items.length);
              }}
              aria-label={hi ? 'अगला चित्र' : 'Next photo'}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
