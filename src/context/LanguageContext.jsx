import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../i18n/translations.js';
import { safeGet, safeSet } from '../lib/storage.js';
import { LANG_STORAGE_KEY, SUPPORTED_LANGS } from '../config.js';

export const LanguageContext = createContext(null);

function readSavedLanguage() {
  const saved = safeGet(LANG_STORAGE_KEY);
  return SUPPORTED_LANGS.includes(saved) ? saved : null;
}

// Safe "a.b.c" lookup. Returns undefined when any part is missing.
function lookup(source, path) {
  return path.split('.').reduce((acc, part) => (acc == null ? undefined : acc[part]), source);
}

export function LanguageProvider({ children }) {
  // null => the visitor has not chosen yet, so the welcome screen is shown first.
  const [lang, setLang] = useState(readSavedLanguage);
  // Lets the visitor reopen the language-selection screen later (footer button).
  const [reopened, setReopened] = useState(false);

  // Keep <html lang="..."> in sync (screen readers, hyphenation, fonts, SEO).
  useEffect(() => {
    document.documentElement.lang = lang ?? 'en';
  }, [lang]);

  const chooseLanguage = useCallback((next) => {
    if (!SUPPORTED_LANGS.includes(next)) return;
    setLang(next);
    safeSet(LANG_STORAGE_KEY, next); // silently ignored if storage is unavailable
    setReopened(false);
  }, []);

  const openGate = useCallback(() => setReopened(true), []);
  const closeGate = useCallback(() => setReopened(false), []);

  const t = useCallback(
    (key) => {
      const active = lookup(translations[lang ?? 'en'], key);
      if (active !== undefined) return active;
      const fallback = lookup(translations.en, key); // never show a blank string
      return fallback !== undefined ? fallback : key;
    },
    [lang],
  );

  const value = useMemo(
    () => ({
      lang,
      t,
      chooseLanguage,
      openGate,
      closeGate,
      gateVisible: lang === null || reopened,
    }),
    [lang, t, chooseLanguage, openGate, closeGate, reopened],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
