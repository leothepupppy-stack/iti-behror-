import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';

const TRADES = [
  { name: 'Computer Hardware and Network Maintenance (CHNM)', short: 'CHNM', duration: '1 year', instructor: 'Vishav' },
  { name: 'Electronics Mechanic (EM)', short: 'EM', duration: '2 years', instructor: 'Akansha' },
  { name: 'Electrician', short: 'Electrician', duration: '2 years', instructor: 'To be confirmed' },
  { name: 'Welder', short: 'Welder', duration: '1 year', instructor: 'Satveer / Sunita' },
  { name: 'Fitter', short: 'Fitter', duration: '2 years', instructor: 'To be confirmed' },
  { name: 'Refrigeration and Air Conditioning (R&AC)', short: 'R&AC', duration: '2 years', instructor: 'Gurmeet' },
];
const APPLY_URL = 'https://hteapp.hte.rajasthan.gov.in/iti_admission';
export default function Trades() {
  const { lang } = useLanguage();
  const hi = lang === 'hi';
  const [selected, setSelected] = useState(null);
  const [showEligibility, setShowEligibility] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const labels = hi ? { title: 'ट्रेड एवं प्रवेश', intro: 'अपनी पसंद का ट्रेड चुनें और पात्रता देखें।', duration: 'अवधि', instructor: 'ट्रेड अनुदेशक', choose: 'ट्रेड चुनें', eligibility: 'पात्रता', eligible: 'न्यूनतम आयु 16 वर्ष और 10वीं उत्तीर्ण। अंतिम पात्रता संबंधित आधिकारिक नियमों के अनुसार होगी।', apply: 'ऑनलाइन आवेदन पोर्टल खोलें', docs: 'आवश्यक दस्तावेज़', docsList: ['आधार कार्ड', '10वीं की अंकतालिका', 'मूल निवास प्रमाण पत्र', 'जाति प्रमाण पत्र (यदि लागू हो)', '2 पासपोर्ट आकार के फोटो', 'भरा हुआ फॉर्म — 2 प्रतियाँ'], status: 'प्रवेश सूचना', statusText: 'सत्र 2026–27/28 की सूचना के अनुसार Direct Admission आवेदन की तारीख 10–15 अक्टूबर 2026 थी। यह समयसीमा बीत चुकी है। संस्थान स्तर पर रिक्त सीटों/ऑफलाइन प्रवेश की उपलब्धता सीधे संस्थान से पुष्टि करें।' } : { title: 'Trades & Admissions', intro: 'Choose a trade to review its duration and eligibility.', duration: 'Duration', instructor: 'Trade instructor', choose: 'Select trade', eligibility: 'Eligibility', eligible: 'Minimum age 16 years and Class 10 pass. Final eligibility is subject to the applicable official rules.', apply: 'Open online admission portal', docs: 'Required documents', docsList: ['Aadhaar card', 'Class 10 marksheet', 'Domicile certificate', 'Caste certificate (if applicable)', '2 passport-size photographs', 'Pre-filled form — 2 copies'], status: 'Admission information', statusText: 'The supplied session 2026–27/28 notice lists Direct Admission applications from 10–15 October 2026. That window has passed. Contact the institute directly to confirm whether any institute-level/offline vacancies remain.' };
  return <><Seo page="trades" /><PageHero title={labels.title} intro={labels.intro} />
    <section className="section"><div className="container">
      <div className="card" style={{ marginBottom: 24, borderLeft: '5px solid #f28c00' }}><h2>{labels.status}</h2><p>{labels.statusText}</p><a className="btn btn--outline" href="https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/30717" target="_blank" rel="noreferrer">{hi ? 'आधिकारिक विभागीय वेबसाइट' : 'Official department website'}</a></div>
      <div className="grid grid--3">{TRADES.map((trade) => <button type="button" key={trade.short} className="card trade-card" onClick={() => { setSelected(trade); setShowEligibility(true); }} style={{ textAlign: 'left', cursor: 'pointer', color: 'inherit', background: 'white', border: selected?.short === trade.short ? '2px solid #172654' : undefined }}><span className="badge">{labels.choose}</span><h3>{trade.name}</h3><p><strong>{labels.duration}:</strong> {trade.duration}</p><p><strong>{labels.instructor}:</strong> {trade.instructor}</p></button>)}</div>
      {showEligibility && selected && <div className="card" style={{ marginTop: 24 }}><h2>{selected.name} — {labels.eligibility}</h2><p>{labels.eligible}</p><p><strong>{labels.duration}:</strong> {selected.duration}</p><a className="btn btn--primary" href={APPLY_URL} target="_blank" rel="noreferrer">{labels.apply}</a><p style={{ marginTop: 12, fontSize: 14 }}>{hi ? 'पोर्टल खुलने पर उपलब्ध विकल्प और वर्तमान प्रवेश स्थिति जाँचें।' : 'Check available options and current admission status on the portal.'}</p></div>}
      <div className="card" style={{ marginTop: 24 }}><button type="button" className="btn btn--outline" onClick={() => setDocsOpen(!docsOpen)}>{labels.docs} {docsOpen ? '−' : '+'}</button>{docsOpen && <ul style={{ marginTop: 16 }}>{labels.docsList.map(d => <li key={d}>{d}</li>)}</ul>}</div>
    </div></section></>;
}
