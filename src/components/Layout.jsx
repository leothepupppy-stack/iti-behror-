import { Suspense, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

// Shared page frame: skip link, header, <main>, footer.
export default function Layout() {
  const { t, gateVisible } = useLanguage();
  const { pathname } = useLocation();
  const shellRef = useRef(null);
  const mainRef = useRef(null);
  const isFirstRender = useRef(true);

  // On route change: scroll to top and move focus to <main> (helps keyboard/screen-reader users).
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  // While the language dialog is open on top of the site, make the site inert
  // (not focusable / not readable by screen readers).
  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    if (gateVisible) shell.setAttribute('inert', '');
    else shell.removeAttribute('inert');
  }, [gateVisible]);

  return (
    <div className="shell" ref={shellRef} aria-hidden={gateVisible ? 'true' : undefined}>
      <a className="skip-link" href="#main">
        {t('common.skip')}
      </a>

      <Header />

      <main id="main" tabIndex={-1} ref={mainRef}>
        <ErrorBoundary key={pathname}>
          <Suspense
            fallback={
              <div className="page-loader" role="status">
                {t('common.loading')}
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}
