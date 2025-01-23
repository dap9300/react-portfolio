import React from "react";
import { GraduationCap, School } from "lucide-react"; // Importa le nuove icone

interface FormazioneSectionProps {
  formazione: {
    title: string;
    sections: {
      title: string;
      institution: string;
      grade: string;
      year: string;
      subjects: string[];
      thesis: {
        title: string;
        content: string;
      };
    }[];
  };
}

const FormazioneSection: React.FC<FormazioneSectionProps> = ({
  formazione,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Titolo con icona */}
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="h-6 w-6" /> {/* Icona cappellino di laurea */}
        <h2 className="text-2xl font-bold">{formazione.title}</h2>
      </div>

      {formazione.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-bold mb-2">{section.title}</h3>

          {/* Istituzione con icona */}
          <div className="flex items-center gap-2 text-gray-600">
            <School className="h-5 w-5" /> {/* Icona università */}
            <p>{section.institution}</p>
          </div>

          <p className="text-gray-600">{section.grade}</p>
          <p className="text-gray-600">{section.year}</p>

          {section.subjects.length > 0 && (
            <div className="mt-4">
              <h4 className="text-lg font-bold">Materie principali:</h4>
              <ul className="list-disc pl-5 space-y-2">
                {section.subjects.map((subject, i) => (
                  <li key={i} className="text-gray-600">
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4">
            <h4 className="text-lg font-bold">{section.thesis.title}</h4>
            <p className="text-gray-600">{section.thesis.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormazioneSection;
