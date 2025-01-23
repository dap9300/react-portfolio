import React from "react";
import { Target } from "lucide-react";
import { Project } from "../types";

interface HomeSectionProps {
  projects: Project[];
  handleOverviewClick: (project: Project) => void;
}

const getChannelClass = (channel: string) => {
  switch (channel.toLowerCase()) {
    case "facebook":
      return "channel-facebook";
    case "instagram":
      return "channel-instagram";
    case "shopify":
      return "channel-shopify";
    case "google ads":
      return "channel-google-ads";
    default:
      return "bg-gray-100";
  }
};

const OverviewBlock = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => {
  const { overview, modalImage, companyName, collaborationPeriod } = project;

  return (
    <div className="overview-block" onClick={onClick}>
      <div className="overlay-gradient"></div>
      <div className="space-y-6 relative z-10">
        {/* Sezione logo, nome azienda e periodo di collaborazione */}
        <div className="flex items-center gap-4">
          <img
            src={modalImage}
            alt="Company Logo"
            className="company-logo" // Applica la classe CSS qui
          />
          <div>
            <h3 className="text-xl font-bold">{companyName}</h3>
            <p className="text-gray-600">{collaborationPeriod}</p>
          </div>
        </div>
        <p className="text-lg">{overview.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-2xl font-bold">Risultati:</h4>
            <ul className="list-disc pl-5 space-y-2">
              {overview.objectives.map((obj: string, i: number) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Canali:</h4>
            <div className="flex flex-wrap gap-2">
              {overview.channels.map((channel: string, i: number) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full ${getChannelClass(channel)}`}
                >
                  {channel}
                </span>
              ))}
            </div>
            <p className="mt-4">
              <span className="text-2xl font-bold">Ruoli: </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {overview.ruoli.map((ruolo: string, i: number) => (
                  <button
                    key={i}
                    className={`px-3 py-1 rounded-full ${
                      ruolo === "Digital Marketing"
                        ? "role-digital-marketing"
                        : "role-communications-specialist"
                    }`}
                  >
                    {ruolo}
                  </button>
                ))}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeSection: React.FC<HomeSectionProps> = ({
  projects,
  handleOverviewClick,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-6">
        <Target className="h-6 w-6" />
        <h2 className="text-2xl font-bold">Home Section</h2>
      </div>
      <div className="space-y-6">
        {projects.map((project: Project) => (
          <OverviewBlock
            key={project.id}
            project={project}
            onClick={() => handleOverviewClick(project)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSection;