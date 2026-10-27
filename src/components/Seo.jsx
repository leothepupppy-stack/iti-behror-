import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { SITE } from '../config.js';

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

// Sets a page-specific <title> and description (plus Open Graph tags) in the
// visitor's language. `page` maps to translations: seo.<page>.title / .desc
//
// Note: these are applied by JavaScript in the browser. Google runs JavaScript,
// but many social-media link previews do not. See README ("Known limitations").
export default function Seo({ page }) {
  const { t, lang } = useLanguage();
  const title = t(`seo.${page}.title`);
  const description = t(`seo.${page}.desc`);

  useEffect(() => {
    const fullTitle = page === 'home' ? title : `${title} | ${SITE.nameEn}`;
    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:locale', lang === 'hi' ? 'hi_IN' : 'en_IN');
    setMeta('property', 'og:url', `${SITE.url}${window.location.pathname}`);
    setMeta('property', 'og:site_name', SITE.nameEn);
    setMeta('name', 'twitter:card', 'summary');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);

    // Keep canonical URLs aligned with the current client-side route.
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE.url}${window.location.pathname}`);

    // Help search engines understand the institute and its location.
    let structuredData = document.head.querySelector('script[data-site-structured-data="true"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      structuredData.setAttribute('data-site-structured-data', 'true');
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: SITE.nameEn,
      alternateName: SITE.nameHi,
      url: SITE.url,
      logo: `${SITE.url}${SITE.logoSrc}`,
      email: 'iti_behror@yahoo.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dhindor, Behror',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN',
      },
      foundingDate: '2019',
    });
  }, [page, title, description, lang]);

  return null;
}
