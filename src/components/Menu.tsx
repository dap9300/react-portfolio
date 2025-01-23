import React from "react";
import {
  Home, // Aggiunto l'icona per la Home
  Target,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Award,
  Contact,
} from "lucide-react";

interface MenuProps {
  activeProject: string;
  setActiveProject: (project: string) => void;
  isProjectsMenuOpen: boolean;
  setIsProjectsMenuOpen: (isOpen: boolean) => void;
  projects: any[];
}

const Menu: React.FC<MenuProps> = ({
  activeProject,
  setActiveProject,
  isProjectsMenuOpen,
  setIsProjectsMenuOpen,
  projects,
}) => {
  return (
    <div className="flex gap-4 border-b">
      {/* Voce "Home" */}
      <button
        key="home"
        onClick={() => {
          setActiveProject("home");
          setIsProjectsMenuOpen(false);
        }}
        className={`px-4 py-2 font-medium menu-item ${
          activeProject === "home"
            ? "text-blue-600 border-b-2 border-blue-600 active-menu-item"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        <Home className="inline-block h-5 w-5 mr-2" />
        Home
      </button>

      {/* Voce "Panoramica Generale" */}
      <button
        key="panoramica-generale"
        onClick={() => {
          setActiveProject("panoramica-generale");
          setIsProjectsMenuOpen(false);
        }}
        className={`px-4 py-2 font-medium menu-item ${
          activeProject === "panoramica-generale"
            ? "text-blue-600 border-b-2 border-blue-600 active-menu-item"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        <Target className="inline-block h-5 w-5 mr-2" />
        Panoramica Generale
      </button>

      {/* Voce "Progetti" (menu a tendina) */}
      <div className="relative projects-menu">
        <button
          className={`px-4 py-2 font-medium flex items-center gap-2 menu-item ${
            activeProject !== "home" &&
            activeProject !== "panoramica-generale" &&
            activeProject !== "skills" &&
            activeProject !== "formazione" &&
            activeProject !== "contatti"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onMouseEnter={() => setIsProjectsMenuOpen(true)}
          onMouseLeave={() => setIsProjectsMenuOpen(false)}
        >
          <Briefcase className="inline-block h-5 w-5 mr-2" />
          Progetti
          <ChevronDown className="h-5 w-5" />
        </button>

        {isProjectsMenuOpen && (
          <div
            className="projects-submenu"
            onMouseEnter={() => setIsProjectsMenuOpen(true)}
            onMouseLeave={() => setIsProjectsMenuOpen(false)}
          >
            {projects.map((project: any) => (
              <button
                key={project.id}
                onClick={() => {
                  setActiveProject(project.id);
                  setIsProjectsMenuOpen(false);
                }}
                className={`px-4 py-2 text-left w-full ${
                  activeProject === project.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Voce "Skills & Competenze" */}
      <button
        key="skills"
        onClick={() => {
          setActiveProject("skills");
          setIsProjectsMenuOpen(false);
        }}
        className={`px-4 py-2 font-medium menu-item ${
          activeProject === "skills"
            ? "text-blue-600 border-b-2 border-blue-600 active-menu-item"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        <Award className="inline-block h-5 w-5 mr-2" />
        Skills & Competenze
      </button>

      {/* Voce "Formazione" */}
      <button
        key="formazione"
        onClick={() => {
          setActiveProject("formazione");
          setIsProjectsMenuOpen(false);
        }}
        className={`px-4 py-2 font-medium menu-item ${
          activeProject === "formazione"
            ? "text-blue-600 border-b-2 border-blue-600 active-menu-item"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        <GraduationCap className="inline-block h-5 w-5 mr-2" />
        Formazione
      </button>

      {/* Voce "Contatti" */}
      <button
        key="contatti"
        onClick={() => {
          setActiveProject("contatti");
          setIsProjectsMenuOpen(false);
        }}
        className={`px-4 py-2 font-medium menu-item ${
          activeProject === "contatti"
            ? "text-blue-600 border-b-2 border-blue-600 active-menu-item"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        <Contact className="inline-block h-5 w-5 mr-2" />
        Contatti
      </button>
    </div>
  );
};

export default Menu;
