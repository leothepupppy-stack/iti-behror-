import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../i18n/translations.js';
import Logo from './Logo.jsx';

const FOCUSABLE = 'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

// Full-screen welcome / language-selection dialog.
//  - First visit (no saved choice): the rest of the site is NOT rendered at all
//    (see App.jsx), and the dialog cannot be dismissed without choosing.
//  - Reopened from the footer: can also be closed with the X button or Escape.
// Both languages are always shown here, so the visitor can read it whichever they prefer.
export default function LanguageGate() {
  const { lang, gateVisible, chooseLanguage, closeGate } = useLanguage();
  const panelRef = useRef(null);
  const firstButtonRef = useRef(null);
  const secondButtonRef = useRef(null);
  const returnFocusRef = useRef(null);
  const canDismiss = lang !== null;

  useEffect(() => {
    if (!gateVisible) return undefined;
    returnFocusRef.current = document.activeElement;
    document.body.classList.add('no-scroll');
    // Start on the current language if there is one, otherwise on English.
    (lang === 'hi' ? secondButtonRef : firstButtonRef).current?.focus();
    return () => {
      document.body.classList.remove('no-scroll');
      const target = returnFocusRef.current;
      if (target && typeof target.focus === 'function' && document.contains(target)) {
        target.focus();
      }
    };
    // Only re-run when the dialog opens/closes, not when the language changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gateVisible]);

  if (!gateVisible) return null;

  const en = translations.en.gate;
  const hi = translations.hi.gate;

  // Keep keyboard focus inside the dialog and support Escape when dismissible.
  function onKeyDown(event) {
    if (event.key === 'Escape' && canDismiss) {
      event.preventDefault();
      closeGate();
      return;
    }
    if (event.key !== 'Tab' || !panelRef.current) return;
    const items = Array.from(panelRef.current.querySelectorAll(FOCUSABLE));
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div className="gate">
      <div
        ref={panelRef}
        className="gate__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gate-title-en gate-title-hi"
        aria-describedby="gate-desc"
        onKeyDown={onKeyDown}
      >
        {canDismiss ? (
          <button
            type="button"
            className="gate__close"
            onClick={closeGate}
            aria-label={`${en.close} / ${hi.close}`}
          >
            <span aria-hidden="true">×</span>
          </button>
        ) : null}

        <Logo className="gate__logo" size={72} />

        <h1 id="gate-title-en" lang="en">
          {en.title}
        </h1>
        <h2 id="gate-title-hi" lang="hi">
          {hi.title}
        </h2>

        <p id="gate-desc" className="gate__desc">
          <span lang="en">{en.subtitle}</span>
          <br />
          <span lang="hi">{hi.subtitle}</span>
        </p>

        <div className="gate__actions">
          <button
            ref={firstButtonRef}
            type="button"
            lang="en"
            className={`gate-btn gate-btn--en${lang === 'en' ? ' is-current' : ''}`}
            onClick={() => chooseLanguage('en')}
          >
            {en.button}
            {lang === 'en' ? <span className="sr-only"> {en.current}</span> : null}
          </button>
          <button
            ref={secondButtonRef}
            type="button"
            lang="hi"
            className={`gate-btn gate-btn--hi${lang === 'hi' ? ' is-current' : ''}`}
            onClick={() => chooseLanguage('hi')}
          >
            {hi.button}
            {lang === 'hi' ? <span className="sr-only"> {hi.current}</span> : null}
          </button>
        </div>

        <p className="gate__note">
          <span lang="en">{en.note}</span>
          <br />
          <span lang="hi">{hi.note}</span>
        </p>
      </div>
    </div>
  );
}
