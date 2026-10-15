# Recette — 8 octobre 2026

- `npm run verify` : trois tests passent, compilation TypeScript stricte et build Vite réussis.
- 24 captures JPEG : dimensions vérifiées automatiquement, 1440 × 1000 pour desktop et 390 × 844 pour mobile. Captures des démos publiques, pas des versions locales non publiées.
- Filtres : réservation affiche Mouvement Studio et Studio Parallèle ; vente/précommande affiche Véloce et Maison Levain ; tous réaffiche les six cartes.
- Les six carrousels : choix Mobile, capture suivante, aperçu agrandi et fermeture vérifiés ; assets chargés sans image cassée.
- Ouverture et fermeture au clavier : Échap ferme le dialogue et rend le défilement de la page. Navigation par flèches disponible ; focus du dialogue natif.
- Viewports : 320, 375, 390, 430, 768, 1024 et 1440 px, sans débordement horizontal ni texte débordant. Contrôles principaux ≥ 44 px.
- Identité : logo issu de `external_website`, palette et grille inspirées de antl.fr, antl en minuscules y compris dans les titres visuels.
- Aucune transaction ni réservation réelle, pas de collecte de données sur ce catalogue.

Cette recette simule les dimensions des appareils ; elle ne remplace pas un essai tactile sur Safari iOS et Android. Les captures sont statiques : actualiser le catalogue après une modification des démos.

## Actualisation du template 06 — 15 octobre 2026

- Quatre captures renouvelées depuis GitHub Pages après le déploiement réussi du commit `7a67909` : accueil et réservation, desktop 1440 × 1000 et mobile 390 × 844.
- Cadrage des quatre images contrôlé ; carrousel Studio Parallèle vérifié en local sur les deux formats, passage à la seconde capture et aperçu agrandi.
- `npm run verify` : 7 tests de catalogue/consentement et 3 tests du build passent ; TypeScript, Vite et prérendu réussis.

## Ajout des templates 07 et 08 — 15 octobre 2026

- Catalogue de huit démos, 32 captures JPEG au total. Huit nouvelles captures des versions GitHub Pages publiques : accueil et module, en 1440 × 1000 et 390 × 844.
- Template 07 « Les Échappées » : sélection d’une escapade, choix du créneau et confirmation locale vérifiés. Module `booking` identique au template 06, avec barrel public ajouté.
- Template 08 « Atelier Solide » : formulaire nom/email/objet/message testé jusqu’au retour de démonstration, sans transmission ni stockage des coordonnées.
- Les deux nouveaux sites ont été contrôlés en 320, 390, 768 et 1440 px sans débordement horizontal ; sept tests d’architecture et de comportement passent dans leurs dépôts.
- Carrousels des deux nouvelles fiches : format desktop/mobile, seconde capture, dimensions et chargement des images, ouverture et fermeture de l’aperçu vérifiés. Le filtre réservation conserve trois modèles dont Les Échappées ; le catalogue complet en affiche huit.
- `npm run verify` et `DEPLOY_TARGET=github-pages npm run verify` passent : 7 tests catalogue/consentement et 3 tests du build par cible, HTML prérendu et données structurées contenant les huit démos.
