type ModalContentType = {
  [key: string]: {
    columns: {
      title: string;
      content: string;
      icon: string; // Nome dell'icona
    }[];
  };
};

export const modalContent: ModalContentType = {
  "hrx-motorsport": {
    columns: [
      {
        title: "Social Media",
        content: `
            <p>Ho gestito strategie di marketing digitale nel settore automotive, con focus sulla vendita diretta tramite campagne Facebook, Instagram, Google Ads ed email marketing.</p>
            <img src="" />
          `,
        icon: "SocialMediaIcon", // Icona per Social Media
      },
      {
        title: "Advertising",
        content: `
            <p>Gestione di campagne pubblicitarie su Facebook, Instagram e Google Ads per massimizzare il ROI.</p>
            <img src="" />
          `,
        icon: "AdvertisingIcon", // Icona per Advertising
      },
      {
        title: "E-commerce Optimization",
        content: `
            <p>Ottimizzazione dell'e-commerce per migliorare il posizionamento organico e le conversioni.</p>
            <img src="" />
          `,
        icon: "ShoppingCart", // Icona per E-commerce
      },
      {
        title: "Analytics",
        content: `
            <p>Monitoraggio e analisi delle performance delle campagne tramite strumenti di analytics avanzati.</p>
            <img src="" />
          `,
        icon: "LineChart", // Icona per Analytics
      },
    ],
  },
  "magazzino-sul-po": {
    columns: [
      {
        title: "Social Media",
        content: `
            <p>Strategia social per Associazione Culturale, con focus su Instagram e Facebook.</p>
            <img src="/social-media.jpg" alt="Social Media" className="w-full rounded-lg mb-4" />
          `,
        icon: "SocialMediaIcon", // Icona per Social Media
      },
      {
        title: "Event Management",
        content: `
            <p>Organizzazione e promozione di eventi culturali e gastronomici.</p>
            <img src="/event-management.jpg" alt="Event Management" className="w-full rounded-lg mb-4" />
          `,
        icon: "Calendar", // Icona per Event Management
      },
      {
        title: "Local Marketing",
        content: `
            <p>Campagne di marketing locale per aumentare la visibilità dell'associazione.</p>
            <img src="/local-marketing.jpg" alt="Local Marketing" className="w-full rounded-lg mb-4" />
          `,
        icon: "MapPin", // Icona per Local Marketing
      },
      {
        title: "Analytics",
        content: `
            <p>Analisi delle performance delle campagne e dei risultati ottenuti.</p>
            <img src="/analytics.jpg" alt="Analytics" className="w-full rounded-lg mb-4" />
          `,
        icon: "LineChart", // Icona per Analytics
      },
    ],
  },
  "tech-startup": {
    columns: [
      {
        title: "Content Marketing",
        content: `
            <p>Creazione di contenuti educativi e tecnici per il lancio della startup SaaS.</p>
            <img src="/content-marketing.jpg" alt="Content Marketing" className="w-full rounded-lg mb-4" />
          `,
        icon: "FileText", // Icona per Content Marketing
      },
      {
        title: "Lead Generation",
        content: `
            <p>Strategie di generazione lead qualificati tramite LinkedIn e Twitter.</p>
            <img src="/lead-generation.jpg" alt="Lead Generation" className="w-full rounded-lg mb-4" />
          `,
        icon: "Users", // Icona per Lead Generation
      },
      {
        title: "SEO & Web Development",
        content: `
            <p>Ottimizzazione SEO e sviluppo del portale SaaS per migliorare l'engagement e la generazione di lead.</p>
            <img src="/seo-web-dev.jpg" alt="SEO & Web Development" className="w-full rounded-lg mb-4" />
          `,
        icon: "Code", // Icona per SEO & Web Development
      },
      {
        title: "Analytics",
        content: `
            <p>Monitoraggio delle metriche chiave e analisi dei dati per ottimizzare le strategie.</p>
            <img src="/analytics.jpg" alt="Analytics" className="w-full rounded-lg mb-4" />
          `,
        icon: "LineChart", // Icona per Analytics
      },
    ],
  },
  "studi-fisioterapici-manunta": {
    columns: [
      {
        title: "Social Media",
        content: `
            <p>Gestione delle strategie di marketing digitale per uno studio di fisioterapia, con focus su Facebook e Instagram.</p>
            <img src="/social-media.jpg" alt="Social Media" className="w-full rounded-lg mb-4" />
          `,
        icon: "SocialMediaIcon", // Icona per Social Media
      },
      {
        title: "Patient Engagement",
        content: `
            <p>Creazione di contenuti per migliorare l'engagement con i pazienti e promuovere i servizi di fisioterapia.</p>
            <img src="/patient-engagement.jpg" alt="Patient Engagement" className="w-full rounded-lg mb-4" />
          `,
        icon: "Heart", // Icona per Patient Engagement
      },
      {
        title: "Local Advertising",
        content: `
            <p>Campagne pubblicitarie locali su Facebook, Instagram e Google Ads per aumentare le prenotazioni online.</p>
            <img src="/local-advertising.jpg" alt="Local Advertising" className="w-full rounded-lg mb-4" />
          `,
        icon: "Megaphone", // Icona per Local Advertising
      },
      {
        title: "Analytics",
        content: `
            <p>Analisi delle performance delle campagne e dei risultati ottenuti.</p>
            <img src="/analytics.jpg" alt="Analytics" className="w-full rounded-lg mb-4" />
          `,
        icon: "LineChart", // Icona per Analytics
      },
    ],
  },
};
