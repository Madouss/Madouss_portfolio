# Portfolio — Madoussou Ninan Fofana

Portfolio personnel de développeur fullstack (Angular · TypeScript · Node.js), construit avec Angular 22.

## Stack

- Angular 22 (standalone, zoneless, signals)
- TypeScript 6
- CSS natif (design system sombre et technique)

## Développement

```bash
npm install
npm start        # http://localhost:4200
```

## Build de production

```bash
npm run build    # génère le site statique dans ./docs
```

## Publication sur GitHub Pages

Le build est configuré pour produire le site statique dans `docs/`, avec des
chemins relatifs (`baseHref: "./"`) et un fichier `.nojekyll`. Le site est publié
depuis le dossier `docs/` de la branche `main`.

- Dépôt : https://github.com/Madouss/Madouss_portfolio
- Site : https://madouss.github.io/Madouss_portfolio/

Réglage GitHub Pages : **Settings → Pages → Deploy from a branch → `main` / `/docs`**.

Après chaque modification : `npm run build`, puis commit/push du dossier `docs` mis à jour.

## Structure

```
src/app/
  data/portfolio.data.ts      # contenu (profil, expériences, projets, compétences…)
  components/                 # header, hero, profile, experience, projects,
                              # skills, education, contact, footer
  app.ts / app.html           # composition de la page
src/styles.css                # design system et styles globaux
public/                       # CV PDF, favicon, .nojekyll
```
