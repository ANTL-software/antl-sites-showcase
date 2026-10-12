# antl · Sites showcase

Vitrine des six modèles de sites antl. React + Vite + TypeScript strict, SASS et react-icons. Catalogue commercial, filtres par besoin, carrousels desktop/mobile, aperçu agrandi accessible via dialogue natif, liens vers les démos et le contact antl.

## Développement

`npm ci`, puis `npm run dev`. Vérification : `npm run verify`.

## Personnalisation

- `src/content/site.ts` : tous les textes éditoriaux, liens, filtres et ordre des sections.
- `src/content/catalog.ts` : modèles, descriptions, fonctionnalités, catégories, URLs et captures.
- `src/types` : contrats stricts.
- `src/hooks` : filtrage et logique de carrousel.
- `src/views/components` : composants de présentation ; `src/views/layouts` : composition de la page.
- `src/utils/styles/_variables.scss` : palette et polices ; `_mixins.scss` : responsive et focus.
- `public/previews` : captures JPEG des démos publiées, réalisées le 8 octobre 2026. Deux écrans par appareil et par modèle : 1440 × 1000 et 390 × 844. Les captures sont statiques ; les renouveler après une évolution des démos.
- Logo copié du dépôt `external_website`, sans modification. Identité dérivée de antl.fr : violet #8b5cf6, graphite #2d3748, Playfair Display et fonds quadrillés.

Chaque capture est référencée par son nom de fichier dans le catalogue. Pour ajouter un modèle, ajouter sa configuration et ses captures : aucune modification des composants nécessaire. Le nom antl reste toujours en minuscules.

## Déploiement

Production : **https://showcase.antl.fr/**, projet Vercel `antl-sites-showcase`, connecté au dépôt GitHub sur la branche `main`. Aucun nouveau domaine à acheter : `showcase` est un sous-domaine de `antl.fr`.

`vercel.json` configure Vite, `npm ci`, `npm run verify` et le dossier `dist`. Le build génère le HTML du catalogue avec React côté serveur, puis le navigateur hydrate la page pour activer filtres, carrousels et dialogues. Aucun serveur applicatif n'est nécessaire en production. Les fichiers absents retournent une vraie 404, sans réécriture globale vers l'accueil.

Dans Cloudflare, zone `antl.fr`, ajouter le CNAME `showcase` vers la cible **indiquée par Vercel dans Settings → Domains**, en mode **DNS only** et TTL automatique. Conserver les serveurs de noms Cloudflare et les enregistrements existants. Vercel gère le certificat HTTPS. Vérifier ensuite le domaine dans Vercel et l'ouverture de l'URL publique.

GitHub Pages reste compatible via Actions : le workflow passe `DEPLOY_TARGET=github-pages`, ce qui restaure la base `/antl-sites-showcase/`. L'URL canonique reste celle de production pour éviter de présenter la copie Pages comme un site distinct.

## Référencement

Le titre et la description ciblent la création de sites web à Rochefort et en Charente-Maritime. L'URL canonique, les aperçus Open Graph/X, `robots.txt` et `sitemap.xml` utilisent `showcase.antl.fr`. Les données structurées décrivent antl, le service de création web et les six démonstrations ; elles ne présentent pas ces modèles comme des références clients.

Après activation du DNS, soumettre `https://showcase.antl.fr/sitemap.xml` dans Google Search Console (une propriété Domaine `antl.fr` couvre également les sous-domaines). Une soumission n'est pas une garantie d'indexation ou de classement. Ajouter un lien visible depuis antl.fr vers le catalogue facilite sa découverte.

Les ancres restent sur la page unique : pas de router ni de redirection SPA à configurer. Les liens externes des démos s'ouvrent dans un nouvel onglet avec noopener noreferrer.

## Démonstrations

Ces sites sont des bases fictives, pas des références clients. Les modules de réservation/adhésion/paiement sont des démos ou intégrations configurables, pas des promesses de services actifs. Aucun prix, témoignage ou client réel n'est inventé. Les appels de contact pointent sur antl.fr/contact_us.

Les polices Google sont demandées au chargement, comme sur le site d'entreprise. Aucun outil d'analytics ni iframe tierce intégré. Les captures sont servies localement, sans charger six sites dans des iframes.

## Recette

Contrôler filtres, desktop/mobile, passage des slides, ouverture/fermeture de dialogue (y compris Échap), focus clavier, démos, contact, assets à la racine Vercel et sous le chemin GitHub Pages et absence de débordement. Validation de viewport simulé à compléter sur des appareils physiques.
