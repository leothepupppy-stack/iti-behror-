import { useLanguage } from '../context/LanguageContext.jsx';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import ContactInfo from '../components/ContactInfo.jsx';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <Seo page="contact" />
      <PageHero title={t('pages.contact.title')} intro={t('pages.contact.intro')} />

      <section className="section">
        <div className="container narrow">
          <Reveal>
            <ContactInfo />
          </Reveal>
        </div>
      </section>
    </>
  );
}
