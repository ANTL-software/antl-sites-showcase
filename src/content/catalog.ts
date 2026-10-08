import type { Template } from "../types";
const previews = (id: string, detail: string) => [
  { file: `${id}-desktop-home.jpg`, label: "Accueil", device: "desktop" as const, width: 1440, height: 1000 },
  { file: `${id}-desktop-detail.jpg`, label: detail, device: "desktop" as const, width: 1440, height: 1000 },
  { file: `${id}-mobile-home.jpg`, label: "Accueil", device: "mobile" as const, width: 390, height: 844 },
  { file: `${id}-mobile-detail.jpg`, label: detail, device: "mobile" as const, width: 390, height: 844 },
];
const demo = (id: string) => `https://antl-software.github.io/antl-landing-page-template-${id}/`;
export const templates: readonly Template[] = [
  { id: "01", name: "Horizon", business: "Services & entreprises", description: "Une vitrine claire et rassurante pour expliquer votre savoir-faire, valoriser votre offre et ouvrir la conversation.", categories: ["showcase"], features: ["Présentation de l’offre", "Bénéfices & témoignage", "Prise de contact"], demoUrl: demo("01"), accent: "#dce3cb", previews: previews("01", "Fonctionnalités") },
  { id: "02", name: "Mouvement Studio", business: "Clubs & studios de danse", description: "Un univers expressif, des cours à découvrir et un espace adhérent pour organiser la vie du club.", categories: ["showcase", "booking"], features: ["Réservation de cours", "Espace adhérent", "Formules & crédits"], demoUrl: demo("02"), accent: "#e4e5ff", previews: previews("02", "Espace adhérent") },
  { id: "03", name: "Véloce", business: "Boutiques & marques", description: "Une boutique au caractère affirmé : collection, fiches produits et panier pour donner envie de passer commande.", categories: ["commerce"], features: ["Catalogue produits", "Panier interactif", "Paiement intégrable"], demoUrl: demo("03"), accent: "#f1dfc3", previews: previews("03", "La collection") },
  { id: "04", name: "Garage Élan", business: "Garages & concessionnaires", description: "Mettre vos véhicules, votre atelier et votre accompagnement en valeur, avec une présentation soignée et accessible.", categories: ["showcase"], features: ["Sélection de véhicules", "Services de l’atelier", "Contact local"], demoUrl: demo("04"), accent: "#e7eccd", previews: previews("04", "Les véhicules") },
  { id: "05", name: "Maison Levain", business: "Boulangeries & pâtisseries", description: "Une vitrine chaleureuse qui fait la part belle aux produits et au geste artisanal, avec des demandes de précommande.", categories: ["showcase", "commerce"], features: ["Vitrine des produits", "Demandes de précommande", "Retrait & horaires"], demoUrl: demo("05"), accent: "#f3ded2", previews: previews("05", "La vitrine du jour") },
  { id: "06", name: "Studio Parallèle", business: "Salons de coiffure", description: "Une identité contemporaine pour présenter vos prestations et permettre à vos clients de choisir leur prochain rendez-vous.", categories: ["showcase", "booking"], features: ["Prestations & tarifs", "Prise de rendez-vous", "Présentation du salon"], demoUrl: demo("06"), accent: "#e9e3fb", previews: previews("06", "La réservation") },
];
