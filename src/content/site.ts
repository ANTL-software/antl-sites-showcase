import type { Filter, SectionId } from "../types";
export const site = {
  brand: "antl", logo: "brand/antl-logo.png", companyUrl: "https://antl.fr", contactUrl: "https://antl.fr/contact_us",
  navigation: [{ label: "Nos sites", href: "#catalogue" }, { label: "Notre approche", href: "#approche" }],
  hero: { eyebrow: "Création de sites web · Rochefort & Charente-Maritime", title: "Votre prochain site", emphasis: "commence ici.", text: "Des sites qui donnent envie de vous choisir. Explorez nos univers, testez les démos et imaginons ensemble celui qui vous ressemble.", primary: "Explorer nos sites", secondary: "Parlons de votre projet" },
  filters: [{ id: "all", label: "Tous les sites" }, { id: "showcase", label: "Vitrine" }, { id: "booking", label: "Réservation" }, { id: "commerce", label: "Vente & précommande" }] satisfies Filter[],
  catalog: { eyebrow: "La collection antl", title: "À chaque activité, son univers.", text: "Une sélection de bases personnalisables. Les textes, les couleurs, les images et les fonctionnalités s’adaptent à votre entreprise.", demoNotice: "Ces sites sont des démonstrations fictives, pas des références clients. Réservations, adhésions et paiements sont illustratifs ; les services réels sont configurés pour chaque projet." },
  approach: { eyebrow: "Une base. Votre identité.", title: "Pas un site de plus. Le vôtre.", text: "Le modèle est un point de départ, pas une limite. Nous le travaillons autour de votre métier, de vos clients et de vos objectifs.", steps: [{ title: "Choisir votre direction", text: "Une esthétique et une expérience adaptées à votre activité, sans partir d’une page blanche." }, { title: "Faire place à votre marque", text: "Vos contenus, votre palette, vos photos : une présentation qui vous appartient." }, { title: "Brancher les bons outils", text: "Réservation, adhésion ou paiement : nous définissons les modules utiles et leur configuration avant la mise en ligne." }] },
  contact: { eyebrow: "Et si on en parlait ?", title: "Vous avez le métier.", text: "Nous avons les outils pour le faire rayonner en ligne. Discutons de votre activité et du site dont vous avez réellement besoin.", emphasis: "Donnons-lui une vitrine.", cta: "Échanger avec antl" },
  footer: "Des sites pensés pour les commerçants, les artisans et les PME.",
  sections: ["hero", "catalog", "approach", "contact"] satisfies SectionId[],
};
