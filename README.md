# Test technique — Chargé d'étude (React + Trilogy)

Petit projet d'évaluation : un formulaire **« Mes informations personnelles »**
construit avec le design system **Trilogy** (`@trilogy-ds/react`), alimenté par un
**appel REST** vers une API mockée en local (MSW).

L'objectif est d'évaluer la capacité à structurer une solution front avancée :
transformations de données, fonctions pures, et raisonnement algorithmique.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) : l'énoncé de l'exercice
s'affiche directement dans l'application, au-dessus du formulaire.

## Scripts disponibles

```bash
npm run dev       # Démarre le serveur de dev
npm run build     # Vérifie les types (tsc) puis build (vite)
npm run lint      # ESLint
npm run format    # Prettier (tri des imports inclus)
npm run preview   # Prévisualise le build de prod
```

## Structure

| Fichier / dossier | Rôle |
| --- | --- |
| `public/swagger.yaml` | Documentation OpenAPI de l'API (tous les champs disponibles) |
| `src/app.tsx` | Compose `Statement` (énoncé) + `Exercise` (formulaire) dans le `Layout` |
| `src/layout.tsx` | En-tête + `TrilogyProvider` |
| `src/components/statement.tsx` | Énoncé de l'exercice 1 (comptage par catégorie, recherche, tri) |
| `src/components/exercise.tsx` | Liste des offres mobiles à compléter |
| `src/services/offer.ts` | `OfferService` : appel REST `GET /api/offers` |
| `src/services/client.ts` | `ClientService` : appels REST (`GET` / `PUT /api/clients/:id`) |
| `src/types/` | Types `Client`, `ClientUpdate`, `Adresse`, `Preferences` |
| `src/mocks/handlers.ts` | Le mock REST (données renvoyées par l'API) |

Alias de chemins disponibles (voir `vite.config.ts` / `tsconfig.paths.json`) :
`@assets`, `@components`, `@services`, `@types`.

## Pour l'évaluateur

Le niveau attendu est confirmé/senior :

- conception de logique déclarative pilotée par configuration,
- usage pertinent de `map` / `filter` / `reduce` / `sort`,
- normalisation de payload et gestion des champs optionnels,
- traçabilité des modifications avec ordre déterministe.

A reference solution is available in `ANSWERS_EXERCISE_1.md`.
