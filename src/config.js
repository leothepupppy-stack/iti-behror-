// Central, non-secret site configuration.

export const SITE = {
  url: 'https://iti-behror.vercel.app',
  nameEn: 'Government ITI Behror',
  nameHi: 'सरकारी आईटीआई बहरोड़',
  // Logo supplied for this institute website.
  logoSrc: '/iti-logo.png',
  address: 'Dhindor, Behror, Rajasthan, India',
  phone: '+91XXXXXXXXXX',
  // Verified Google Maps place: "Gov. ITI Dhindhor".
  mapsSearchUrl: 'https://www.google.com/maps?ftid=0x396d4fc83129ec63:0x9d295db08cc8a972',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Gov.+ITI+Dhindhor',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112876.53410537048!2d76.04937089726563!3d27.859235800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d4fc83129ec63%3A0x9d295db08cc8a972!2sGov.%20ITI%20Dhindhor!5e0!3m2!1sen!2sin!4v1792739226671!5m2!1sen!2sin',
};

// Key used to remember the visitor's language on this device.
export const LANG_STORAGE_KEY = 'iti-behror-lang';
export const SUPPORTED_LANGS = ['en', 'hi'];

// Public-launch mode: never display fabricated/demo content. This project has no CMS backend.
export const SHOW_DEMO_CONTENT = false;
