import React, { useState, useEffect } from "react";
import { projects, skillsAndCompetencies, formazione } from "./content";
import { Project } from "./types";
import CampaignsSection from "./components/CampaignsSection";
import MetricsSection from "./components/MetricsSection";
import ModalContent from "./components/ModalContent";
import SkillsAndToolsSection from "./components/SkillsAndToolsSection";
import FormazioneSection from "./components/FormazioneSection";
import Menu from "./components/Menu";
import PanoramicaSection from "./components/PanoramicaSection";
import ContattiSection from "./components/ContattiSection";
import HomeSection from "./components/HomeSection"; // Importa il nuovo componente

const SocialMediaPortfolio = () => {
  const [activeProject, setActiveProject] = useState<string>("home"); // Imposta "home" come valore predefinito
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleOverviewClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const activeProjectData = projects.find((p) => p.id === activeProject);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 bg-white">
      <div className={isModalOpen ? "blur-background" : ""}>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Portfolio Alessandro d'Apolito
          </h1>
          <p className="text-xl text-gray-600">Progetti e Risultati</p>
        </div>
        <Menu
          activeProject={activeProject}
          setActiveProject={setActiveProject}
          isProjectsMenuOpen={isProjectsMenuOpen}
          setIsProjectsMenuOpen={setIsProjectsMenuOpen}
          projects={projects}
        />

        {/* Sezione Home */}
        {activeProject === "home" && (
          <HomeSection
            projects={projects}
            handleOverviewClick={handleOverviewClick}
          />
        )}

        {/* Sezione Panoramica Generale */}
        {activeProject === "panoramica-generale" && (
          <PanoramicaSection
            projects={projects}
            handleOverviewClick={handleOverviewClick}
          />
        )}

        {/* Sezione Skills */}
        {activeProject === "skills" && (
          <SkillsAndToolsSection sections={skillsAndCompetencies.sections} />
        )}

        {/* Sezione Formazione */}
        {activeProject === "formazione" && (
          <FormazioneSection formazione={formazione} />
        )}

        {/* Sezione Contatti */}
        {activeProject === "contatti" && <ContattiSection />}

        {/* Sezione Progetti specifici */}
        {activeProjectData &&
          activeProject !== "home" &&
          activeProject !== "panoramica-generale" &&
          activeProject !== "skills" &&
          activeProject !== "formazione" &&
          activeProject !== "contatti" && (
            <div className="grid gap-6">
              <PanoramicaSection
                projects={[activeProjectData]}
                handleOverviewClick={handleOverviewClick}
              />
              <CampaignsSection campaigns={activeProjectData.campaigns} />
              <MetricsSection metrics={activeProjectData.metrics} />
            </div>
          )}
      </div>

      {/* Modal per i dettagli del progetto */}
      {isModalOpen && selectedProject && (
        <ModalContent
          selectedProject={selectedProject}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default SocialMediaPortfolio;
