import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "hrx-motorsport",
    title: "Azienda Automotive",
    period: "Gen 2024 - Present",
    companyName: "HRX Motorsport",
    collaborationPeriod: "Nov 2020 - Apr 2021",
    overview: {
      description:
        "Ho gestito strategie di marketing digitale nel settore automotive, con focus sulla vendita diretta tramite campagne Facebook, Instagram, Google Ads ed email marketing. Ho ottimizzato l’ e-commerce dell’azienda in ottica SEO per migliorare posizionamento organico e conversioni.",
      objectives: [
        "Incrementare vendite su Shopify",
        "Traffico Social",
        "Gestione Budget",
      ],
      channels: ["Facebook", "Instagram", "Shopify", "Google Ads"],
      ruoli: ["Digital Marketing", "Communications Specialist"],
    },
    campaigns: [
      {
        title: "Lancio Collezione Primavera",
        type: "Campagna Integrata",
        description: "Campagna multi-canale con focus su sostenibilità",
        content: [
          {
            type: "Video Storytelling",
            description: "Serie di video sul processo produttivo sostenibile",
            placeholder: "400/300",
            contentText: `
              <p>Contenuto personalizzato per la campagna "Lancio Collezione Primavera".</p>
              <img src="/spring-collection.jpg" alt="Spring Collection" className="w-full rounded-lg mb-4" />
            `,
          },
          {
            type: "Influencer Content",
            description: "Collaborazioni con 10 micro-influencer",
            placeholder: "400/300",
            contentText: `
              <p>Contenuto personalizzato per la collaborazione con influencer.</p>
              <img src="/influencer-collab.jpg" alt="Influencer Collaboration" className="w-full rounded-lg mb-4" />
            `,
          },
        ],
      },
      {
        title: "Community Challenge",
        type: "UGC Campaign",
        description: "Contest #MyEcoStyle per la community",
        content: [
          {
            type: "Challenge Guidelines",
            description: "Regole e esempi per la partecipazione",
            placeholder: "400/300",
            contentText: `
              <p>Contenuto personalizzato per la campagna "Community Challenge".</p>
              <img src="/community-challenge.jpg" alt="Community Challenge" className="w-full rounded-lg mb-4" />
            `,
          },
        ],
      },
    ],
    metrics: {
      socialGrowth: {
        followers: "+25k in 3 mesi",
        engagement: "5.2% rate medio",
        reach: "500k utenti unici",
      },
      sales: {
        revenue: "€120k incrementali",
        conversion: "3.8% da social",
        ROAS: "380%",
      },
      brand: {
        mentions: "+180% menzioni",
        sentiment: "92% positivo",
      },
    },
    skills: {
      tools: ["Shopify", "Meta Ads", "Later", "Canva Pro"],
      expertise: ["E-commerce", "Fashion Marketing", "Influencer Management"],
    },
    modalImage: "/logo_hrx_465x110.webp",
  },
  {
    id: "magazzino-sul-po",
    title: "Associazione Culturale",
    period: "Set 2023 - Present",
    companyName: "Magazzino sul Po",
    collaborationPeriod: "Mag 2022 - Ago 2023",
    overview: {
      description: "Strategia social per Associazione Culturale",
      objectives: [
        "Incremento prenotazioni online",
        "Brand awareness locale",
        "Engagement con clienti esistenti",
      ],
      channels: ["Instagram", "Facebook", "Google Business"],
      ruoli: ["Digital Marketing", "Communications Specialist"],
    },
    campaigns: [
      {
        title: "Local Food Stories",
        type: "Content Series",
        description: "Serie di contenuti sui prodotti locali e chef",
        content: [
          {
            type: "Chef Stories",
            description: "Interviste video agli chef",
            placeholder: "400/300",
            contentText: `
              <p>Contenuto personalizzato per la campagna "Local Food Stories".</p>
              <img src="/chef-stories.jpg" alt="Chef Stories" className="w-full rounded-lg mb-4" />
            `,
          },
          {
            type: "Food Photography",
            description: "Servizi fotografici piatti signature",
            placeholder: "400/300",
            contentText: `
              <p>Contenuto personalizzato per la fotografia dei piatti.</p>
              <img src="/food-photography.jpg" alt="Food Photography" className="w-full rounded-lg mb-4" />
            `,
          },
        ],
      },
      {
        title: "Restaurant Week",
        type: "Promo Campaign",
        description: "Settimana di promozioni speciali",
        content: [
          {
            type: "Promo Assets",
            description: "Materiali promozionali per la campagna",
            placeholder: "400/300",
            contentText: `
              <p>Contenuto personalizzato per la campagna "Restaurant Week".</p>
              <img src="/promo-assets.jpg" alt="Promo Assets" className="w-full rounded-lg mb-4" />
            `,
          },
        ],
      },
    ],
    metrics: {
      socialGrowth: {
        followers: "+15k followers",
        engagement: "4.8% rate medio",
        reach: "300k utenti locali",
      },
      business: {
        bookings: "+45% prenotazioni online",
        revenue: "+28% revenue per location",
        customerRetention: "+35%",
      },
      local: {
        googleRating: "4.8/5 media",
        localMentions: "+120%",
      },
    },
    skills: {
      tools: ["HubSpot", "OpenTable", "Hootsuite", "Adobe Lightroom"],
      expertise: ["Local Marketing", "F&B Industry", "Customer Experience"],
    },
    modalImage: "logo-magazzino.webp",
  },
  {
    id: "tech-startup",
    title: "Tech Startup B2B",
    period: "Mar 2023 - Dec 2023",
    companyName: "Tech Startup B2B",
    collaborationPeriod: "Set 2021 - Feb 2023",
    overview: {
      description: "Lancio startup SaaS nel mercato italiano",
      objectives: [
        "Lancio del portale",
        "Generazione di lead qualificati",
        "Lead nurturing",
        "Posizionamento SEO",
      ],
      channels: ["LinkedIn", "Twitter", "Medium"],
      ruoli: ["Digital Marketing", "Project Coordinator"],
    },
    campaigns: [
      {
        title: "Tech Insights Series",
        type: "Content Marketing",
        description: "Serie di contenuti educativi sul settore",
        content: [
          {
            type: "Whitepaper",
            description: "Report di settore con dati originali",
            placeholder: "400/300",
            contentText: `
              <p>Contenuto personalizzato per la campagna "Tech Insights Series".</p>
              <img src="/whitepaper.jpg" alt="Whitepaper" className="w-full rounded-lg mb-4" />
            `,
          },
          {
            type: "Expert Interviews",
            description: "Video interviste con esperti",
            placeholder: "400/300",
            contentText: `
              <p>Contenuto personalizzato per le interviste con esperti.</p>
              <img src="/expert-interviews.jpg" alt="Expert Interviews" className="w-full rounded-lg mb-4" />
            `,
          },
        ],
      },
    ],
    metrics: {
      socialGrowth: {
        connections: "+8k LinkedIn",
        engagement: "3.5% rate medio",
        reach: "200k professionisti",
      },
      leads: {
        generated: "450 MQL",
        conversion: "12% to SQL",
        CAC: "€180",
      },
      content: {
        downloads: "2.5k whitepaper",
        webinarAttendees: "800+",
      },
    },
    skills: {
      tools: ["LinkedIn Sales Navigator", "Salesforce", "Zoom", "Notion"],
      expertise: ["B2B Marketing", "Tech Industry", "Lead Generation"],
    },
    modalImage: "/logo-dtc.webp",
  },
  {
    id: "studi-fisioterapici-manunta",
    title: "Studi Fisioterapici Manunta",
    period: "Gen 2023 - Ongoing",
    companyName: "Studi Fisioterapici Manunta",
    collaborationPeriod: "Gen 2023 - Ongoing",
    overview: {
      description:
        "Gestione delle strategie di marketing digitale per uno studio di fisioterapia, con focus su campagne Facebook, Instagram e Google Ads per aumentare le prenotazioni online e la brand awareness locale.",
      objectives: [
        "Aumentare le prenotazioni online",
        "Migliorare la brand awareness locale",
        "Engagement con i pazienti esistenti",
      ],
      channels: ["Facebook", "Instagram", "Google Ads"],
      ruoli: ["Digital Marketing", "Communications Specialist"],
    },
    campaigns: [
      {
        title: "Campagna Benessere",
        type: "Campagna Integrata",
        description:
          "Campagna multi-canale per promuovere i servizi di fisioterapia",
        content: [
          {
            type: "Video Educativi",
            description: "Serie di video sui benefici della fisioterapia",
            placeholder: "400/300",
            contentText: `
              <p>Contenuto personalizzato per la campagna "Campagna Benessere".</p>
              <img src="/fisioterapia-video.jpg" alt="Video Educativi" className="w-full rounded-lg mb-4" />
            `,
          },
          {
            type: "Testimonianze Pazienti",
            description: "Video testimonianze di pazienti soddisfatti",
            placeholder: "400/300",
            contentText: `
              <p>Contenuto personalizzato per le testimonianze dei pazienti.</p>
              <img src="/testimonianze-pazienti.jpg" alt="Testimonianze Pazienti" className="w-full rounded-lg mb-4" />
            `,
          },
        ],
      },
    ],
    metrics: {
      socialGrowth: {
        followers: "+10k followers",
        engagement: "4.5% rate medio",
        reach: "150k utenti locali",
      },
      business: {
        bookings: "+30% prenotazioni online",
        revenue: "+20% revenue",
        customerRetention: "+25%",
      },
    },
    skills: {
      tools: ["Meta Ads", "Google Ads", "Canva", "Mailchimp"],
      expertise: [
        "Local Marketing",
        "Healthcare Marketing",
        "Customer Engagement",
      ],
    },
    modalImage: "/logo-manunta.png",
  },
];

type IconKey = "BarChart2" | "Film" | "Code" | "Users" | "Globe" | "Heart";

export const skillsAndCompetencies = {
  title: "Skills & Competenze",
  sections: [
    {
      title: "Digital Marketing & Analytics",
      icon: "BarChart2" as IconKey,
      skills: [
        ["Performance Marketing", "(Meta Ads, Google Ads, Amazon Ads)"],
        "Web & Marketing Analytics (Meta Business Suite, Google Analytics, Google Search Console, Google Tag Manager, Looker Studio)",
        "Email Marketing & Marketing Automation (Mailchimp, MailUp, ConvertKit, MailerLite, Drip)",
        "SEO & Optimization (SEO on-page, SEO on-site, Technical SEO, Screaming Frog, Semrush, Rank Math)",
        "Social Media (Meta Business Suite, Editorial Strategy & Planning, Community Management)",
      ],
    },
    {
      title: "Content Creation & Media Editing",
      icon: "Film" as IconKey,
      skills: [
        "Graphic Design (Adobe Creative Suite, Canva)",
        "Video/Audio Editing (DaVinci Resolve, CapCut, Audacity)",
        "AI Tools (ChatGPT, Claude, MidJourney, Cursor, ElevenLabs)",
      ],
    },
    {
      title: "IT & Web",
      icon: "Code" as IconKey,
      skills: [
        "Programming & CMS (HTML5, CSS, WordPress, WooCommerce, Shopify)",
        "Sistemi Operativi (Windows, MacOS)",
        "Office Productivity (Office Suite, Google Workspace, Slack, Asana, Trello)",
      ],
    },
    {
      title: "Soft Skill",
      icon: "Users" as IconKey,
      skills: [
        "Pensiero analitico e data-driven",
        "Gestione priorità e deadline",
        "Cross-functional collaboration",
        "Customer-centric approach",
        "Capacità di tradurre concetti tecnici per audience non tecniche",
        "Capacità di apprendimento rapido",
      ],
    },
    {
      title: "Lingue",
      icon: "Globe" as IconKey,
      skills: ["Italiano: Madrelingua", "Inglese: Fluente"],
    },
    {
      title: "Hobby & Interessi",
      icon: "Heart" as IconKey,
      skills: [
        "Sperimentazione con AI Tools e nuove tecnologie",
        "Arrampicata Sportiva",
        "Scacchi",
        "Chitarra",
      ],
    },
  ],
};

export const formazione = {
  title: "Formazione",
  sections: [
    {
      title: "Laurea Magistrale in Comunicazione ICT e Media",
      institution: "Università degli Studi di Torino, Torino (TO)",
      grade: "Voto: 103/110",
      year: "A.A. di conseguimento: 2018",
      subjects: [
        "Marketing",
        "Economia",
        "Tecnologie web",
        "Sistemi mediali e ICT",
        "Analisi del media",
        "Innovazione sociale",
        "Sociologia",
      ],
      thesis: {
        title: "Titolo tesi:",
        content:
          "Bitcoin e blockchain tra economia, regolamentazione e informazione",
      },
    },
    {
      title: "Laurea Triennale in Filosofia",
      institution: "Università degli Studi di Torino, Torino (TO)",
      grade: "Voto: 104/110",
      year: "A.A. di conseguimento: 2015",
      subjects: [],
      thesis: {
        title: "Titolo tesi:",
        content:
          "La coscienza: dal problema mente-corpo alla teoria dell'informazione integrata",
      },
    },
  ],
};
