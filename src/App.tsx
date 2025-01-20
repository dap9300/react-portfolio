import React, { useState, useEffect } from "react"; // Aggiunto useEffect
import { BarChart2, Target, Users, Layout, X } from "lucide-react";

// Definizione delle interfacce TypeScript
interface Overview {
  description: string;
  objectives: string[];
  channels: string[];
  budget: string;
}

interface CampaignContent {
  type: string;
  description: string;
  placeholder: string;
  contentText?: string; // Nuovo campo per il contenuto personalizzato della campagna
}

interface Campaign {
  title: string;
  type: string;
  description: string;
  content: CampaignContent[];
}

interface Metrics {
  [key: string]: {
    [key: string]: string | number;
  };
}

interface Skills {
  tools: string[];
  expertise: string[];
}

interface Project {
  id: string;
  title: string;
  period: string;
  overview: Overview;
  campaigns: Campaign[];
  metrics: Metrics;
  skills: Skills;
  modalImage: string; // Campo per l'immagine della modale
  modalText: string; // Campo per il testo della modale
}

const SocialMediaPortfolio = () => {
  const [activeProject, setActiveProject] =
    useState<string>("ecommerce-fashion");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedOverview, setSelectedOverview] = useState<Overview | null>(
    null
  );

  // Funzione per chiudere il modale
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOverview(null);
  };

  // Gestione del tasto Esc
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    // Aggiungi l'event listener
    window.addEventListener("keydown", handleKeyDown);

    // Rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // L'array vuoto [] garantisce che l'effetto venga eseguito solo al montaggio e smontaggio

  const projects: Project[] = [
    {
      id: "ecommerce-fashion",
      title: "E-commerce Fashion Brand",
      period: "Gen 2024 - Present",
      overview: {
        description:
          "Gestione completa della presenza social per un brand di moda sostenibile",
        objectives: [
          "Lancio brand su nuovi mercati europei",
          "Aumento awareness e conversioni",
          "Creazione community engaged",
        ],
        channels: ["Instagram", "TikTok", "Facebook"],
        budget: "€15,000/mese",
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
      modalImage: "/ecommerce-fashion.jpg", // Immagine personalizzata per la modale
      modalText: `
        <img src="/analytics_maga3.png" alt="Analytics Image" className="w-full rounded-lg mb-4" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum orci, blandit eget augue in, malesuada scelerisque velit. Fusce venenatis nisl dapibus, consequat arcu ac, sollicitudin metus. Quisque dapibus egestas velit nec molestie. Donec dignissim commodo tellus. Duis lorem neque, auctor at orci pulvinar, finibus tincidunt nisi. Sed vitae ipsum elit. Nunc blandit eros quis massa pellentesque, et eleifend mi sollicitudin. Nam facilisis mattis mauris, at sollicitudin nisl varius vel. Morbi ultrices ut neque a placerat. Quisque quis orci urna. Praesent at eros risus. Nunc placerat, turpis sed egestas consequat, diam justo pellentesque lorem, ut tincidunt enim nisl sed felis. Quisque et erat at nunc ultricies porta. Vivamus id ante luctus urna vestibulum porta eu a nisl.</p>
        <img src="/analytics_maga3.png" alt="Analytics Image" className="w-full rounded-lg mb-4" />
        <p>Nam facilisis mattis mauris, at sollicitudin nisl varius vel. Morbi ultrices ut neque a placerat. Quisque quis orci urna. Praesent at eros risus. Nunc placerat, turpis sed egestas consequat, diam justo pellentesque lorem, ut tincidunt enim nisl sed felis. Quisque et erat at nunc ultricies porta. Vivamus id ante luctus urna vestibulum porta eu a nisl.</p>
      `, // Testo personalizzato per il modale
    },
    {
      id: "food-beverage",
      title: "Catena Ristoranti F&B",
      period: "Set 2023 - Present",
      overview: {
        description:
          "Strategia social per catena di ristoranti con 12 location",
        objectives: [
          "Incremento prenotazioni online",
          "Brand awareness locale",
          "Engagement con clienti esistenti",
        ],
        channels: ["Instagram", "Facebook", "Google Business"],
        budget: "€8,000/mese",
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
      modalImage: "/food-beverage.jpg", // Immagine personalizzata per la modale
      modalText: "Testo personalizzato per il progetto Catena Ristoranti F&B.", // Testo personalizzato
    },
    {
      id: "tech-startup",
      title: "Tech Startup B2B",
      period: "Mar 2023 - Dec 2023",
      overview: {
        description: "Lancio startup SaaS nel mercato italiano",
        objectives: [
          "Posizionamento come thought leader",
          "Generazione lead qualificati",
          "Educazione del mercato",
        ],
        channels: ["LinkedIn", "Twitter", "Medium"],
        budget: "€12,000/mese",
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
      modalImage: "/tech-startup.jpg", // Immagine personalizzata per la modale
      modalText: "Testo personalizzato per il progetto Tech Startup B2B.", // Testo personalizzato
    },
  ];

  const handleOverviewClick = (overview: Overview) => {
    setSelectedOverview(overview);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Portfolio Social Media Manager
        </h1>
        <p className="text-xl text-gray-600">Progetti e Risultati</p>
      </div>

      {/* Project Selector */}
      <div className="flex gap-2 border-b">
        {projects.map((project: Project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project.id)}
            className={`px-4 py-2 font-medium ${
              activeProject === project.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Project Content */}
      {projects.map(
        (project: Project) =>
          project.id === activeProject && (
            <div key={project.id} className="grid gap-6">
              {/* Overview */}
              <div
                className="bg-white rounded-lg shadow p-6 cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                onClick={() => handleOverviewClick(project.overview)}
              >
                {/* Effetto hover con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <Target className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Overview</h2>
                </div>
                <div className="space-y-6 relative z-10">
                  <p className="text-lg">{project.overview.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-2xl font-bold">Obiettivi:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {project.overview.objectives.map(
                          (obj: string, i: number) => (
                            <li key={i}>{obj}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">Canali:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.overview.channels.map(
                          (channel: string, i: number) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 rounded-full"
                            >
                              {channel}
                            </span>
                          )
                        )}
                      </div>
                      <p className="mt-4">
                        <span className="text-2xl font-bold">Budget: </span>
                        {project.overview.budget}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campaigns */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Layout className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Campagne</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.campaigns.map((campaign: Campaign, i: number) => (
                    <div key={i} className="space-y-4">
                      <h3 className="text-xl bold">{campaign.title}</h3>
                      <p className="text-gray-600">{campaign.description}</p>
                      <div className="grid grid-cols-1 gap-4">
                        {campaign.content.map(
                          (content: CampaignContent, j: number) => (
                            <div key={j}>
                              <img
                                src={`/api/placeholder/${content.placeholder}`}
                                alt={content.type}
                                className="w-full rounded-lg mb-2"
                              />
                              <h4 className="text-2xl font-bold">
                                {content.type}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {content.description}
                              </p>
                              {/* Contenuto personalizzato della campagna */}
                              {content.contentText && (
                                <div
                                  className="text-gray-600"
                                  dangerouslySetInnerHTML={{
                                    __html: content.contentText,
                                  }}
                                />
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center gap-2 mb-6">
                  <BarChart2 className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Metriche</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(project.metrics).map(
                    ([category, metrics]) => (
                      <div key={category} className="space-y-4">
                        <h3 className="text-lg bold capitalize">
                          {category.replace(/([A-Z])/g, " $1").trim()}
                        </h3>
                        <div className="space-y-2">
                          {Object.entries(metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}:
                              </span>
                              <span className="text-lg bold capitalize">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Users className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Skills & Tools</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg bold mb-4">Tools Utilizzati</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.tools.map((tool: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg bold mb-4">Competenze Specifiche</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.expertise.map(
                        (skill: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 rounded-full"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}

      {/* Modal */}
      {isModalOpen && selectedOverview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto z-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90vw] max-w-[800px] min-w-[300px] relative max-h-[90vh] overflow-y-auto">
            {/* Pulsante di chiusura in alto a destra */}
            <div className="sticky top-0 right-0 w-full flex justify-end z-20">
              <button
                onClick={closeModal}
                className="bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:scale-105"
              >
                <X className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              </button>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="text-lg">{selectedOverview.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-2xl font-bold">Obiettivi:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedOverview.objectives.map(
                      (obj: string, i: number) => (
                        <li key={i}>{obj}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Canali:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedOverview.channels.map(
                      (channel: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 rounded-full"
                        >
                          {channel}
                        </span>
                      )
                    )}
                  </div>
                  <p className="mt-4">
                    <span className="text-2xl font-bold">Budget: </span>
                    {selectedOverview.budget}
                  </p>
                </div>
              </div>
              {/* Immagine e testo personalizzati per il modale */}
              <div className="mt-6">
                <img
                  src={projects.find((p) => p.id === activeProject)?.modalImage}
                  alt="Project Image"
                  className="w-full rounded-lg mb-4"
                />
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html:
                      projects.find((p) => p.id === activeProject)?.modalText ||
                      "",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaPortfolio;
