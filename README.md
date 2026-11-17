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

Le build est configuré pour produire directement les fichiers à la racine de `docs/`
(avec `baseHref: "/"` et un fichier `.nojekyll`).

1. Créer un dépôt public nommé `<nom-utilisateur>.github.io`.
2. Pousser le projet sur la branche `main`.
3. Dans **Settings → Pages** :
   - **Source** : *Deploy from a branch*
   - **Branch** : `main` / dossier `/docs`
   - Enregistrer.
4. Le site est publié sur `https://<nom-utilisateur>.github.io/`.

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
