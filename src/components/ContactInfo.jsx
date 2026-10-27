import { useLanguage } from '../context/LanguageContext.jsx';
import { SITE } from '../config.js';
import { PhoneIcon, PinIcon } from './Icons.jsx';

export default function ContactInfo() {
  const { lang } = useLanguage();
  const hi = lang === 'hi';
  return <section className="contact-section" aria-label={hi ? 'संपर्क विवरण' : 'Contact details'}>
    <div className="contact-grid">
      <article className="card contact-card">
        <span className="contact-card__icon"><PinIcon /></span>
        <div><p className="contact-card__label">{hi ? 'संस्थान' : 'Institute'}</p><p className="contact-card__value">{SITE.nameEn}</p></div>
      </article>
      <article className="card contact-card">
        <span className="contact-card__icon"><PinIcon /></span>
        <div><p className="contact-card__label">{hi ? 'पता' : 'Address'}</p><p className="contact-card__value">{SITE.address}</p></div>
      </article>
      <article className="card contact-card">
        <span className="contact-card__icon"><PhoneIcon /></span>
        <div><p className="contact-card__label">{hi ? 'मोबाइल नंबर' : 'Mobile number'}</p><p className="contact-card__value">{SITE.phone}</p></div>
      </article>
    </div>
    <div className="contact-actions">
      <a className="btn btn--primary" href={SITE.mapsSearchUrl} target="_blank" rel="noopener noreferrer">{hi ? 'Google Maps पर देखें' : 'View on Google Maps'}</a>
      <a className="btn btn--outline" href={SITE.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">{hi ? 'दिशा-निर्देश प्राप्त करें' : 'Get Directions'}</a>
    </div>
    <div className="map-embed">
      <iframe
        title={hi ? 'सरकारी आईटीआई ढिंढोर का Google Maps स्थान' : 'Google Maps location of Government ITI Dhindhor'}
        src={SITE.mapsEmbedUrl}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  </section>;
}
