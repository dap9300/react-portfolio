// Importa il file JSON
import dataIcon from "./data-icon.json";
import eCommerceIconJson from "./e-commerce.json"; // Importa l'icona JSON per e-commerce
import socialMediaIconJson from "./social-media.json"; // Importa l'icona JSON per Social Media
import advertisingIconJson from "./advertising-icon.json"; // Importa l'icona JSON per Social Media

// Esporta l'icona con il contenuto del file JSON
export const placeholderIcon = {
  // Questo è un placeholder JSON per simulare un'icona Lordicon
  // Puoi sostituirlo con un file JSON reale in seguito
  layers: [
    {
      shapes: [
        {
          type: "path",
          d: "M5.25 20.25H6.75C7.30228 20.25 7.75 19.8023 7.75 19.25L7.75 13.75C7.75 13.1977 7.30228 12.75 6.75 12.75H5.25C4.69772 12.75 4.25 13.1977 4.25 13.75L4.25 19.25C4.25 19.8023 4.69772 20.25 5.25 20.25Z", // percorso SVG Icona Analytics
        },
        {
          type: "path",
          d: "M9 14.75H17.2414C18.1343 14.75 18.9191 14.158 19.1644 13.2994L20.7498 7.75H7.82031", // percorso SVG Icona Social Media
        },
        {
          type: "path",
          d: "M4.5 8.75H20.5", // percorso SVG Icona Shopping ecommerce
        },
        {
          type: "path",
          d: "M21.75 10.5H14V2.75C18.2735 2.75 21.75 6.22654 21.75 10.5Z", // percorso SVG Icona Advertising
        },
      ],
    },
  ],
};

// Esporta anche il contenuto del file JSON come una nuova costante
export const analyticsIcon = dataIcon;
export const eCommerceIcon = eCommerceIconJson;
export const socialMediaIcon = socialMediaIconJson;
export const advertisingIcon = advertisingIconJson;
