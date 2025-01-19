import React, { useState } from "react";
import { BarChart2, Target, Users, Layout } from "lucide-react";

const SocialMediaPortfolio = () => {
  const [activeProject, setActiveProject] = useState("ecommerce-fashion");

  const projects = [
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
            },
            {
              type: "Influencer Content",
              description: "Collaborazioni con 10 micro-influencer",
              placeholder: "400/300",
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
            },
            {
              type: "Food Photography",
              description: "Servizi fotografici piatti signature",
              placeholder: "400/300",
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
            },
            {
              type: "Expert Interviews",
              description: "Video interviste con esperti",
              placeholder: "400/300",
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
    },
  ];

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
        {projects.map((project) => (
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
        (project) =>
          project.id === activeProject && (
            <div key={project.id} className="grid gap-6">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Overview</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-lg">{project.overview.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-2xl font-bold">Obiettivi:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {project.overview.objectives.map((obj, i) => (
                          <li key={i}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">Canali:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.overview.channels.map((channel, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 rounded-full"
                          >
                            {channel}
                          </span>
                        ))}
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
                  {project.campaigns.map((campaign, i) => (
                    <div key={i} className="space-y-4">
                      <h3 className="text-xl bold">
                        {campaign.title}
                      </h3>
                      <p className="text-gray-600">{campaign.description}</p>
                      <div className="grid grid-cols-1 gap-4">
                        {campaign.content.map((content, j) => (
                          <div key={j}>
                            <img
                              src={`/api/placeholder/${content.placeholder}`}
                              alt={content.type}
                              className="w-full rounded-lg mb-2"
                            />
                            <h4 className="text-2xl font-bold">{content.type}</h4>
                            <p className="text-sm text-gray-600">
                              {content.description}
                            </p>
                          </div>
                        ))}
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
                  {Object.entries(project.metrics).map(([category, metrics]) => (
  <div key={category} className="space-y-4">
    <h3 className="text-lg bold capitalize">
      {category.replace(/([A-Z])/g, " $1").trim()}
    </h3>
    <div className="space-y-2">
      {Object.entries(project.metrics).map(([category, metrics]) => (
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
          <span className="bold">
            {typeof value === 'string' || typeof value === 'number' ? value : null}
          </span> {/* Correzione qui */}
        </div>
      ))}
    </div>
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
                    <h3 className="text-lg bold mb-4">
                      Tools Utilizzati
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.tools.map((tool, i) => (
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
                    <h3 className="text-lg bold mb-4">
                      Competenze Specifiche
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default SocialMediaPortfolio;
ay-100 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default SocialMediaPortfolio;
