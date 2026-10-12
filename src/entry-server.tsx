import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { ShowcasePage } from "./views/layouts";
import { site, templates } from "./content";

export function render() {
  return renderToString(<StrictMode><ShowcasePage /></StrictMode>);
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": "https://antl.fr/#organization",
      name: site.brand, url: `${site.companyUrl}/`, logo: "https://showcase.antl.fr/brand/antl-logo.png",
    },
    {
      "@type": "WebSite", "@id": "https://showcase.antl.fr/#website",
      url: "https://showcase.antl.fr/", name: "antl · Création de sites web",
      inLanguage: "fr-FR", publisher: { "@id": "https://antl.fr/#organization" },
    },
    {
      "@type": "CollectionPage", "@id": "https://showcase.antl.fr/#webpage",
      url: "https://showcase.antl.fr/", name: "Création de sites web à Rochefort : nos démos | antl",
      description: "Sites vitrines, boutiques en ligne et réservation pour les commerçants, artisans et PME de Rochefort et Charente-Maritime. Découvrez les démos antl.",
      inLanguage: "fr-FR", isPartOf: { "@id": "https://showcase.antl.fr/#website" },
      about: { "@id": "https://showcase.antl.fr/#service" }, mainEntity: { "@id": "https://showcase.antl.fr/#catalogue" },
    },
    {
      "@type": "Service", "@id": "https://showcase.antl.fr/#service",
      name: "Création de sites web personnalisés", serviceType: "Sites vitrines, e-commerce et réservation",
      provider: { "@id": "https://antl.fr/#organization" },
      areaServed: ["Rochefort", "Charente-Maritime"], url: site.contactUrl,
    },
    {
      "@type": "ItemList", "@id": "https://showcase.antl.fr/#catalogue",
      name: "Démonstrations de sites personnalisables antl", numberOfItems: templates.length,
      itemListElement: templates.map((template, index) => ({
        "@type": "ListItem", position: index + 1,
        item: { "@type": "WebPage", name: `${template.name} — démo ${template.business}`,
          url: template.demoUrl, description: template.description },
      })),
    },
  ],
};
