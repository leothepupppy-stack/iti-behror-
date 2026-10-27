import { useLanguage } from '../context/LanguageContext.jsx';

// Always-visible header control to switch between English and Hindi.
export default function LanguageSwitcher() {
  const { lang, chooseLanguage, t } = useLanguage();
  return (
    <div className="lang-switch" role="group" aria-label={t('lang.switcherLabel')}>
      <button
        type="button"
        lang="en"
        aria-pressed={lang === 'en'}
        aria-label="English"
        onClick={() => chooseLanguage('en')}
      >
        <span aria-hidden="true">EN</span>
      </button>
      <button
        type="button"
        lang="hi"
        aria-pressed={lang === 'hi'}
        aria-label="हिंदी"
        onClick={() => chooseLanguage('hi')}
      >
        <span aria-hidden="true">हिं</span>
      </button>
    </div>
  );
}
