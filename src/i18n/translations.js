// All interface text for the site, in English (en) and Hindi (hi).
// Access with t('section.key') from useLanguage(). Arrays/objects are returned as-is.
//
// IMPORTANT: Everything under "demo" is demonstration content only.
// It is not a real notice, article, trade or person. Remove/replace in Stage 4.

export const translations = {
  /* ===================================================================== */
  en: {
    common: {
      skip: 'Skip to main content',
      demo: 'Demo content',
      placeholder: 'Placeholder',
      viewAll: 'View all',
      loading: 'Loading…',
      breadcrumb: 'Breadcrumb',
      pendingInfo: 'To be supplied',
    },

    banner: {
      text: 'This website is under development. Notices, articles, images and institute details shown here are demonstration placeholders until verified information is supplied.',
    },

    nav: {
      label: 'Main navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home: 'Home',
      about: 'About Us',
      trades: 'Trades',
      management: 'Management',
      notices: 'Notices',
      gallery: 'Gallery',
      contact: 'Contact Us',
    },

    lang: {
      switcherLabel: 'Language',
      english: 'English',
      hindi: 'हिंदी',
    },

    gate: {
      title: 'Welcome to Government ITI Behror',
      subtitle: 'Please choose your preferred language.',
      button: 'Continue in English',
      note: 'You can change the language at any time from the website header.',
      close: 'Close',
      current: '(current language)',
    },

    hero: {
      eyebrow: 'Industrial Training Institute · Behror',
      title: 'Skills that build confident careers',
      text: 'Explore vocational trades, read the latest notices and learn about the institute, in English and Hindi.',
      ctaTrades: 'Explore Trades',
      ctaNotices: 'View Notices',
      quickTitle: 'Quick links',
    },

    intro: {
      eyebrow: 'Institute introduction',
      title: 'Welcome to the Institute',
      body: 'Explore institute trades, available notices and contact information.',
      items: [
        {
          title: 'Notices & Announcements',
          text: 'Stay informed with the latest updates once the institute publishes them.',
          to: '/notices',
        },
        {
          title: 'Trades',
          text: 'Learn about vocational trades once their details have been verified.',
          to: '/trades',
        },
      ],
    },

    notices: {
      eyebrow: 'Notices',
      title: 'Latest Notices & Announcements',
      subtitle: 'Only available institute-related information is shown here.',
      emptyTitle: 'No notices have been published yet',
      emptyText: 'Please check back later.',
    },

    trades: {
      eyebrow: 'Trades',
      title: 'Trades & Vocational Learning',
      subtitle: 'Trade details will be added after verification by the institute.',
      themesTitle: 'General vocational-learning themes',
      themesNote: '(to be confirmed by the institute)',
      themes: [
        { title: 'Hands-on workshop practice', text: 'Direct practice with tools and equipment.' },
        { title: 'Technical theory', text: 'Understanding the core concepts behind each trade.' },
        { title: 'Workplace safety & discipline', text: 'Safe and responsible working habits.' },
      ],
    },

    articles: {
      eyebrow: 'Knowledge Library',
      title: 'Articles & Knowledge Library',
      subtitle: 'Educational reading for learners. The articles below are demonstrations.',
      emptyTitle: 'No articles have been published yet',
      emptyText: 'New articles will appear here once they are published.',
    },

    gallery: {
      eyebrow: 'Gallery',
      title: 'Image Gallery',
      subtitle: 'A look at the institute campus.',
      emptyTitle: 'No images have been published yet',
      emptyText: 'Photographs will appear here once they are added.',
      caption: 'Placeholder image',
    },

    aboutSummary: {
      eyebrow: 'About',
      title: 'The Institute and Trades',
      cta: 'Learn more',
      cards: [
        {
          title: 'About the Institute',
          text: 'Know about Government ITI Behror, its training and location.',
          to: '/about',
        },
        {
          title: 'About Trades',
          text: 'See the trades offered, their duration, eligibility and required documents.',
          to: '/trades',
        },
      ],
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Get in Touch',
      subtitle: 'Institute contact information.',
      labels: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Office hours',
      },
      values: {
        address: 'Behror, Rajasthan (Dhindor village area) — see map',
        phone: 'Not published',
        email: 'iti_behror@yahoo.com',
        hours: 'Please contact the institute to confirm',
      },
    },

    footer: {
      about:
        'Government ITI Behror provides vocational training information for students and prospective applicants.',
      linksTitle: 'Useful links',
      languageTitle: 'Language',
      languageText: 'Use the button below to reopen the language selection.',
      changeLanguage: 'Change language',
      disclaimer:
        'Admission dates and notices are subject to the latest official instructions. Please verify before applying.',
      credit: 'Developed by CHNM\nTrade with help of Instructor Vishav Kumar',
    },

    pages: {
      about: {
        title: 'About Us',
        intro:
          'Verified institute profile information will be published here when available.',
        sections: [
          {
            title: 'About the Institute',
            text: 'The institute’s approved introduction, history and purpose will be added here.',
          },
          {
            title: 'Vision and Mission',
            text: 'The institute’s approved vision and mission statements will be added here.',
          },
          {
            title: 'Facilities',
            text: 'Verified information about workshops, laboratories and other facilities will be added here.',
          },
        ],
        pendingTitle: 'Information awaiting verification',
        pendingItems: [
          'Institute history and profile',
          'Location and how to reach the institute',
          'Affiliation and approvals (only as documented by the institute)',
          'Facilities and infrastructure',
        ],
      },
      trades: {
        title: 'About Trades',
        intro:
          'Trade information is shown on the Trades page where available.',
        fields: {
          duration: 'Duration',
          eligibility: 'Eligibility',
          seats: 'Seats',
        },
      },
      management: {
        title: 'About Management',
        intro:
          'Available staff information is listed on this page.',
        photo: 'Photo placeholder',
        emptyTitle: 'Management information has not been published yet',
        emptyText: 'Please check back later.',
      },
      articles: {
        title: 'Articles & Knowledge Library',
        intro:
          'Educational articles for learners. Articles shown below are demonstrations, not published institute content.',
      },
      notices: {
        title: 'Notices & Announcements',
        intro:
          'Official notices will appear here when published by the institute. Items shown below are demonstrations only.',
      },
      gallery: {
        title: 'Gallery',
        intro: 'Photographs of the institute and its campus.',
      },
      contact: {
        title: 'Contact Us',
        intro:
          'Contact the institute using the details and map below.',
      },
    },

    seo: {
      home: {
        title: 'Government ITI Behror',
        desc: 'Official website information for Government ITI Behror, Dhindor, Behror, Rajasthan.',
      },
      about: {
        title: 'About Us',
        desc: 'Learn about Government ITI Behror, its profile, vision and facilities.',
      },
      trades: {
        title: 'About Trades',
        desc: 'Vocational trades and learning at Government ITI Behror.',
      },
      management: {
        title: 'About Management',
        desc: 'Management information for Government ITI Behror.',
      },
      articles: {
        title: 'Articles & Knowledge Library',
        desc: 'Educational articles and learning resources from Government ITI Behror.',
      },
      notices: {
        title: 'Notices & Announcements',
        desc: 'Latest notices and announcements from Government ITI Behror.',
      },
      gallery: {
        title: 'Gallery',
        desc: 'Image gallery of Government ITI Behror.',
      },
      contact: {
        title: 'Contact Us',
        desc: 'Contact information for Government ITI Behror.',
      },
      notFound: {
        title: 'Page not found',
        desc: 'The page you are looking for does not exist.',
      },
    },

    notFound: {
      title: 'Page not found',
      text: 'The page you are looking for does not exist or has been moved.',
      button: 'Back to home',
    },

    error: {
      title: 'Something went wrong',
      text: 'An unexpected error occurred while loading this page. Please try again.',
      reload: 'Reload page',
    },

    // ---- DEMONSTRATION CONTENT (not real) ----
    demo: {
      notices: [
        { title: 'Demo notice 1 — the title of an announcement appears here', date: 'Date TBA', tag: 'Demo' },
        { title: 'Demo notice 2 — a short heading for another announcement', date: 'Date TBA', tag: 'Demo' },
        { title: 'Demo notice 3 — notices will be published via the admin dashboard', date: 'Date TBA', tag: 'Demo' },
      ],
      articles: [
        {
          title: 'Demo article: Workshop safety basics',
          excerpt:
            'This is a demonstration card. Real articles will be written and published by the institute through the admin dashboard.',
          category: 'Demo',
        },
        {
          title: 'Demo article: Understanding tools and measurement',
          excerpt:
            'This is a demonstration card. Its text is placeholder content and is not published institute material.',
          category: 'Demo',
        },
        {
          title: 'Demo article: Choosing a trade that suits you',
          excerpt:
            'This is a demonstration card showing how an article summary will look once content is published.',
          category: 'Demo',
        },
      ],
      trades: [
        { name: 'Trade name 1', text: 'Placeholder. Description to be supplied by the institute.' },
        { name: 'Trade name 2', text: 'Placeholder. Description to be supplied by the institute.' },
        { name: 'Trade name 3', text: 'Placeholder. Description to be supplied by the institute.' },
        { name: 'Trade name 4', text: 'Placeholder. Description to be supplied by the institute.' },
      ],
      management: [
        { role: 'Position 1', name: 'Name to be supplied', note: 'Role description to be supplied by the institute.' },
        { role: 'Position 2', name: 'Name to be supplied', note: 'Role description to be supplied by the institute.' },
        { role: 'Position 3', name: 'Name to be supplied', note: 'Role description to be supplied by the institute.' },
      ],
    },
  },

  /* ===================================================================== */
  hi: {
    common: {
      skip: 'मुख्य सामग्री पर जाएँ',
      demo: 'डेमो सामग्री',
      placeholder: 'प्लेसहोल्डर',
      viewAll: 'सभी देखें',
      loading: 'लोड हो रहा है…',
      breadcrumb: 'नेविगेशन पथ',
      pendingInfo: 'जानकारी जोड़ी जाएगी',
    },

    banner: {
      text: 'यह वेबसाइट निर्माणाधीन है। यहाँ दिखाई गई सूचनाएँ, लेख, चित्र और संस्थान की जानकारी सत्यापित जानकारी मिलने तक केवल डेमो प्लेसहोल्डर हैं।',
    },

    nav: {
      label: 'मुख्य नेविगेशन',
      openMenu: 'मेन्यू खोलें',
      closeMenu: 'मेन्यू बंद करें',
      home: 'होम',
      about: 'हमारे बारे में',
      trades: 'ट्रेड्स',
      management: 'प्रबंधन',
      notices: 'सूचनाएँ',
      gallery: 'गैलरी',
      contact: 'संपर्क करें',
    },

    lang: {
      switcherLabel: 'भाषा',
      english: 'English',
      hindi: 'हिंदी',
    },

    gate: {
      title: 'Government ITI Behror में आपका स्वागत है',
      subtitle: 'कृपया अपनी पसंदीदा भाषा चुनें।',
      button: 'हिंदी में आगे बढ़ें',
      note: 'आप वेबसाइट के हेडर से किसी भी समय भाषा बदल सकते हैं।',
      close: 'बंद करें',
      current: '(वर्तमान भाषा)',
    },

    hero: {
      eyebrow: 'औद्योगिक प्रशिक्षण संस्थान · बहरोड़',
      title: 'कौशल, जो आत्मविश्वास से भरा करियर बनाए',
      text: 'व्यावसायिक ट्रेड्स देखें, नवीनतम सूचनाएँ पढ़ें और संस्थान के बारे में जानें, हिंदी और अंग्रेज़ी दोनों में।',
      ctaTrades: 'ट्रेड्स देखें',
      ctaNotices: 'सूचनाएँ देखें',
      quickTitle: 'त्वरित लिंक',
    },

    intro: {
      eyebrow: 'संस्थान का परिचय',
      title: 'संस्थान में आपका स्वागत है',
      body: 'ट्रेड, उपलब्ध सूचनाओं और संपर्क जानकारी को देखें।',
      items: [
        {
          title: 'सूचनाएँ एवं घोषणाएँ',
          text: 'संस्थान द्वारा प्रकाशित किए जाने पर नवीनतम अपडेट यहाँ देखें।',
          to: '/notices',
        },
        {
          title: 'ट्रेड्स',
          text: 'विवरण सत्यापित होने के बाद व्यावसायिक ट्रेड्स के बारे में जानें।',
          to: '/trades',
        },
      ],
    },

    notices: {
      eyebrow: 'सूचनाएँ',
      title: 'नवीनतम सूचनाएँ एवं घोषणाएँ',
      subtitle: 'यहाँ उपलब्ध संस्थान-संबंधी जानकारी दिखाई जाती है।',
      emptyTitle: 'अभी कोई सूचना प्रकाशित नहीं हुई है',
      emptyText: 'कृपया बाद में दोबारा देखें।',
    },

    trades: {
      eyebrow: 'ट्रेड्स',
      title: 'ट्रेड्स एवं व्यावसायिक शिक्षा',
      subtitle: 'ट्रेड्स का विवरण संस्थान द्वारा सत्यापन के बाद जोड़ा जाएगा।',
      themesTitle: 'व्यावसायिक शिक्षा के सामान्य विषय',
      themesNote: '(संस्थान द्वारा पुष्टि की जानी शेष)',
      themes: [
        { title: 'कार्यशाला में व्यावहारिक अभ्यास', text: 'औज़ारों और उपकरणों के साथ प्रत्यक्ष अभ्यास।' },
        { title: 'तकनीकी सैद्धांतिक ज्ञान', text: 'प्रत्येक ट्रेड की मूल अवधारणाओं की समझ।' },
        { title: 'कार्यस्थल सुरक्षा एवं अनुशासन', text: 'सुरक्षित और ज़िम्मेदार कार्य-आदतें।' },
      ],
    },

    articles: {
      eyebrow: 'ज्ञान भंडार',
      title: 'लेख एवं ज्ञान भंडार',
      subtitle: 'सीखने वालों के लिए शैक्षिक सामग्री। नीचे दिए गए लेख डेमो हैं।',
      emptyTitle: 'अभी कोई लेख प्रकाशित नहीं हुआ है',
      emptyText: 'नए लेख प्रकाशित होने पर यहाँ दिखाई देंगे।',
    },

    gallery: {
      eyebrow: 'गैलरी',
      title: 'चित्र दीर्घा',
      subtitle: 'संस्थान परिसर की एक झलक।',
      emptyTitle: 'अभी कोई चित्र प्रकाशित नहीं हुआ है',
      emptyText: 'चित्र जोड़े जाने पर यहाँ दिखाई देंगे।',
      caption: 'प्लेसहोल्डर चित्र',
    },

    aboutSummary: {
      eyebrow: 'हमारे बारे में',
      title: 'संस्थान और ट्रेड्स',
      cta: 'और जानें',
      cards: [
        {
          title: 'संस्थान के बारे में',
          text: 'सरकारी आईटीआई बहरोड़, उसके प्रशिक्षण और स्थान के बारे में जानें।',
          to: '/about',
        },
        {
          title: 'ट्रेड्स के बारे में',
          text: 'उपलब्ध ट्रेड, उनकी अवधि, पात्रता और आवश्यक दस्तावेज़ देखें।',
          to: '/trades',
        },
      ],
    },

    contact: {
      eyebrow: 'संपर्क',
      title: 'हमसे संपर्क करें',
      subtitle: 'संस्थान की संपर्क जानकारी।',
      labels: {
        address: 'पता',
        phone: 'फ़ोन',
        email: 'ईमेल',
        hours: 'कार्यालय समय',
      },
      values: {
        address: 'बहरोड़, राजस्थान (ढिंढोर गाँव क्षेत्र) — मानचित्र देखें',
        phone: 'प्रकाशित नहीं',
        email: 'iti_behror@yahoo.com',
        hours: 'समय की पुष्टि संस्थान से करें',
      },
    },

    footer: {
      about:
        'राजकीय आईटीआई बहरोड़ विद्यार्थियों को व्यावसायिक प्रशिक्षण और प्रवेश संबंधी जानकारी उपलब्ध कराने के लिए।',
      linksTitle: 'उपयोगी लिंक',
      languageTitle: 'भाषा',
      languageText: 'भाषा चयन दोबारा खोलने के लिए नीचे दिया गया बटन दबाएँ।',
      changeLanguage: 'भाषा बदलें',
      disclaimer:
        'प्रवेश तिथियों और सूचनाओं के लिए नवीनतम आधिकारिक निर्देशों की पुष्टि अवश्य करें।',
      // The credit line is intentionally kept in English in both languages.
      credit: 'Developed by CHNM\nTrade with help of Instructor Vishav Kumar',
    },

    pages: {
      about: {
        title: 'हमारे बारे में',
        intro:
          'संस्थान का सत्यापित परिचय उपलब्ध होने पर यहाँ प्रकाशित किया जाएगा।',
        sections: [
          {
            title: 'संस्थान के बारे में',
            text: 'संस्थान का स्वीकृत परिचय, इतिहास और उद्देश्य यहाँ जोड़े जाएँगे।',
          },
          {
            title: 'दृष्टि एवं लक्ष्य',
            text: 'संस्थान की स्वीकृत दृष्टि और लक्ष्य यहाँ जोड़े जाएँगे।',
          },
          {
            title: 'सुविधाएँ',
            text: 'कार्यशालाओं, प्रयोगशालाओं और अन्य सुविधाओं की सत्यापित जानकारी यहाँ जोड़ी जाएगी।',
          },
        ],
        pendingTitle: 'सत्यापन की प्रतीक्षा में जानकारी',
        pendingItems: [
          'संस्थान का इतिहास और परिचय',
          'स्थान और संस्थान तक पहुँचने की जानकारी',
          'संबद्धता और अनुमोदन (केवल संस्थान के दस्तावेज़ों के अनुसार)',
          'सुविधाएँ और बुनियादी ढाँचा',
        ],
      },
      trades: {
        title: 'ट्रेड्स के बारे में',
        intro:
          'उपलब्ध ट्रेड जानकारी ट्रेड्स पृष्ठ पर देखें।',
        fields: {
          duration: 'अवधि',
          eligibility: 'पात्रता',
          seats: 'सीटें',
        },
      },
      management: {
        title: 'प्रबंधन के बारे में',
        intro:
          'उपलब्ध स्टाफ जानकारी इस पृष्ठ पर दी गई है।',
        photo: 'फ़ोटो प्लेसहोल्डर',
        emptyTitle: 'प्रबंधन की जानकारी अभी प्रकाशित नहीं हुई है',
        emptyText: 'कृपया बाद में दोबारा देखें।',
      },
      articles: {
        title: 'लेख एवं ज्ञान भंडार',
        intro:
          'सीखने वालों के लिए शैक्षिक लेख। नीचे दिखाए गए लेख डेमो हैं, संस्थान की प्रकाशित सामग्री नहीं।',
      },
      notices: {
        title: 'सूचनाएँ एवं घोषणाएँ',
        intro:
          'संस्थान द्वारा प्रकाशित किए जाने पर आधिकारिक सूचनाएँ यहाँ दिखाई देंगी। नीचे दिखाई गई प्रविष्टियाँ केवल डेमो हैं।',
      },
      gallery: {
        title: 'गैलरी',
        intro: 'संस्थान और उसके परिसर के चित्र।',
      },
      contact: {
        title: 'संपर्क करें',
        intro:
          'संस्थान से संपर्क के लिए नीचे दिए गए विवरण और मानचित्र का उपयोग करें।',
      },
    },

    seo: {
      home: {
        title: 'Government ITI Behror',
        desc: 'राजकीय आईटीआई बहरोड़, ढिंढोर, बहरोड़, राजस्थान की वेबसाइट।',
      },
      about: {
        title: 'हमारे बारे में',
        desc: 'Government ITI Behror, उसके परिचय, दृष्टि और सुविधाओं के बारे में जानें।',
      },
      trades: {
        title: 'ट्रेड्स के बारे में',
        desc: 'Government ITI Behror में व्यावसायिक ट्रेड्स और शिक्षा।',
      },
      management: {
        title: 'प्रबंधन के बारे में',
        desc: 'Government ITI Behror की प्रबंधन संबंधी जानकारी।',
      },
      articles: {
        title: 'लेख एवं ज्ञान भंडार',
        desc: 'Government ITI Behror के शैक्षिक लेख और सीखने की सामग्री।',
      },
      notices: {
        title: 'सूचनाएँ एवं घोषणाएँ',
        desc: 'Government ITI Behror की नवीनतम सूचनाएँ और घोषणाएँ।',
      },
      gallery: {
        title: 'गैलरी',
        desc: 'Government ITI Behror की चित्र दीर्घा।',
      },
      contact: {
        title: 'संपर्क करें',
        desc: 'Government ITI Behror की संपर्क जानकारी।',
      },
      notFound: {
        title: 'पृष्ठ नहीं मिला',
        desc: 'आप जिस पृष्ठ को खोज रहे हैं वह मौजूद नहीं है।',
      },
    },

    notFound: {
      title: 'पृष्ठ नहीं मिला',
      text: 'आप जिस पृष्ठ को खोज रहे हैं वह मौजूद नहीं है या हटा दिया गया है।',
      button: 'होम पर लौटें',
    },

    error: {
      title: 'कुछ गड़बड़ हो गई',
      text: 'इस पृष्ठ को लोड करते समय एक अप्रत्याशित त्रुटि हुई। कृपया दोबारा प्रयास करें।',
      reload: 'पृष्ठ पुनः लोड करें',
    },

    // ---- डेमो सामग्री (वास्तविक नहीं) ----
    demo: {
      notices: [
        { title: 'डेमो सूचना 1 — यहाँ किसी घोषणा का शीर्षक दिखाई देगा', date: 'तिथि जोड़ी जाएगी', tag: 'डेमो' },
        { title: 'डेमो सूचना 2 — किसी अन्य घोषणा का संक्षिप्त शीर्षक', date: 'तिथि जोड़ी जाएगी', tag: 'डेमो' },
        { title: 'डेमो सूचना 3 — सूचनाएँ एडमिन डैशबोर्ड से प्रकाशित की जाएँगी', date: 'तिथि जोड़ी जाएगी', tag: 'डेमो' },
      ],
      articles: [
        {
          title: 'डेमो लेख: कार्यशाला सुरक्षा की मूल बातें',
          excerpt:
            'यह एक डेमो कार्ड है। वास्तविक लेख संस्थान द्वारा एडमिन डैशबोर्ड के माध्यम से लिखे और प्रकाशित किए जाएँगे।',
          category: 'डेमो',
        },
        {
          title: 'डेमो लेख: औज़ार और माप को समझना',
          excerpt:
            'यह एक डेमो कार्ड है। इसका पाठ प्लेसहोल्डर है और संस्थान की प्रकाशित सामग्री नहीं है।',
          category: 'डेमो',
        },
        {
          title: 'डेमो लेख: अपने अनुकूल ट्रेड कैसे चुनें',
          excerpt:
            'यह डेमो कार्ड दिखाता है कि सामग्री प्रकाशित होने पर लेख का सारांश कैसा दिखाई देगा।',
          category: 'डेमो',
        },
      ],
      trades: [
        { name: 'ट्रेड का नाम 1', text: 'प्लेसहोल्डर। विवरण संस्थान द्वारा उपलब्ध कराया जाएगा।' },
        { name: 'ट्रेड का नाम 2', text: 'प्लेसहोल्डर। विवरण संस्थान द्वारा उपलब्ध कराया जाएगा।' },
        { name: 'ट्रेड का नाम 3', text: 'प्लेसहोल्डर। विवरण संस्थान द्वारा उपलब्ध कराया जाएगा।' },
        { name: 'ट्रेड का नाम 4', text: 'प्लेसहोल्डर। विवरण संस्थान द्वारा उपलब्ध कराया जाएगा।' },
      ],
      management: [
        { role: 'पद 1', name: 'नाम जोड़ा जाएगा', note: 'भूमिका का विवरण संस्थान द्वारा उपलब्ध कराया जाएगा।' },
        { role: 'पद 2', name: 'नाम जोड़ा जाएगा', note: 'भूमिका का विवरण संस्थान द्वारा उपलब्ध कराया जाएगा।' },
        { role: 'पद 3', name: 'नाम जोड़ा जाएगा', note: 'भूमिका का विवरण संस्थान द्वारा उपलब्ध कराया जाएगा।' },
      ],
    },
  },
};
