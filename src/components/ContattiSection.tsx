// ContattiSection.tsx
import React from "react";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const ContattiSection = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-36 h-36 rounded-full overflow-hidden border-1 border-blue-100">
          <img
            src=".webp" // Sostituisci con il percorso della tua foto
            alt="placeholder"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold">Contatti</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="h-6 w-6 text-blue-600" />
          <a
            href="tel:+393406143529"
            className="text-gray-700 hover:text-blue-600 text-lg"
          >
            +39 3406143529
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-6 w-6 text-blue-600" />
          <a
            href="mailto:aledap93@gmail.com"
            className="text-gray-700 hover:text-blue-600 text-lg"
          >
            aledap93@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-6 w-6 text-blue-600" />
          <span className="text-gray-700 text-lg">Torino (TO), Italia</span>
        </div>

        <div className="flex items-center gap-3">
          <Linkedin className="h-6 w-6 text-blue-600" />
          <a
            href="https://www.linkedin.com/in/alessandrodapolito" // Sostituisci con il tuo link LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 text-lg"
          >
            Visita il mio profilo LinkedIn
          </a>
        </div>

        {/* Aggiunta dei pulsanti dei social */}
        <div className="flex items-center gap-3 mt-6">
          <a
            href="https://www.facebook.com" // Sostituisci con il tuo link Facebook
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com" // Sostituisci con il tuo link Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/alessandrodapolito" // Sostituisci con il tuo link LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContattiSection;
