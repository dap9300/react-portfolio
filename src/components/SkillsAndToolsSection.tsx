import React, { useState } from "react";
import { Users, BarChart2, Film, Code, Globe, Heart } from "lucide-react";

type IconKey = "BarChart2" | "Film" | "Code" | "Users" | "Globe" | "Heart";

interface Section {
  title: string;
  icon: IconKey;
  skills: (string | string[])[];
}

interface SkillsAndToolsSectionProps {
  sections: Section[];
}

const iconComponents: Record<IconKey, React.ComponentType<any>> = {
  BarChart2: BarChart2,
  Film: Film,
  Code: Code,
  Users: Users,
  Globe: Globe,
  Heart: Heart,
};

const SkillsAndToolsSection: React.FC<SkillsAndToolsSectionProps> = ({
  sections,
}) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    "Digital Marketing & Analytics": false,
    "Soft Skill": false,
    Lingue: false,
    "Content Creation & Media Editing": false,
    "IT & Web": false,
    "Hobby & Interessi": false,
  });

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-6">
        <Users className="h-6 w-6" />
        <h2 className="text-2xl font-bold">Skills & Competenze</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Colonna sinistra */}
        <div>
          {/* Sezione Digital Marketing & Analytics */}
          <div className="mb-8">
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => toggleSection("Digital Marketing & Analytics")}
            >
              <BarChart2 className="h-6 w-6" />
              <h3 className="text-xl font-bold">
                Digital Marketing & Analytics
              </h3>
            </div>
            {expandedSections["Digital Marketing & Analytics"] && (
              <ul className="list-disc pl-5 space-y-2">
                {sections[0].skills.map((skill, i) => {
                  if (Array.isArray(skill)) {
                    const [mainSkill, subSkills] = skill;
                    return (
                      <li key={i}>
                        <strong>{mainSkill}</strong>
                        <br />
                        {subSkills}
                      </li>
                    );
                  } else {
                    const [mainSkill, subSkills] = skill.split("(");
                    return (
                      <li key={i}>
                        <strong>{mainSkill}</strong>
                        {subSkills && ` (${subSkills}`}
                      </li>
                    );
                  }
                })}
              </ul>
            )}
          </div>

          {/* Sezione Soft Skill */}
          <div className="mb-8">
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => toggleSection("Soft Skill")}
            >
              <Users className="h-6 w-6" />
              <h3 className="text-xl font-bold">Soft Skill</h3>
            </div>
            {expandedSections["Soft Skill"] && (
              <ul className="list-disc pl-5 space-y-2">
                {sections[3].skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Sezione Lingue */}
          <div className="mb-8">
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => toggleSection("Lingue")}
            >
              <Globe className="h-6 w-6" />
              <h3 className="text-xl font-bold">Lingue</h3>
            </div>
            {expandedSections["Lingue"] && (
              <ul className="list-disc pl-5 space-y-2">
                {sections[4].skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Colonna destra */}
        <div>
          {/* Sezione Content Creation & Media Editing */}
          <div className="mb-8">
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => toggleSection("Content Creation & Media Editing")}
            >
              <Film className="h-6 w-6" />
              <h3 className="text-xl font-bold">
                Content Creation & Media Editing
              </h3>
            </div>
            {expandedSections["Content Creation & Media Editing"] && (
              <ul className="list-disc pl-5 space-y-2">
                {sections[1].skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Sezione IT & Web */}
          <div className="mb-8">
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => toggleSection("IT & Web")}
            >
              <Code className="h-6 w-6" />
              <h3 className="text-xl font-bold">IT & Web</h3>
            </div>
            {expandedSections["IT & Web"] && (
              <ul className="list-disc pl-5 space-y-2">
                {sections[2].skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Sezione Hobby & Interessi */}
          <div className="mb-8">
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => toggleSection("Hobby & Interessi")}
            >
              <Heart className="h-6 w-6" />
              <h3 className="text-xl font-bold">Hobby & Interessi</h3>
            </div>
            {expandedSections["Hobby & Interessi"] && (
              <ul className="list-disc pl-5 space-y-2">
                {sections[5].skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndToolsSection;
