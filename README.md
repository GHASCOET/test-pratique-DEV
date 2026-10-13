# Test technique — Développeur front React (Trilogy)

Petit projet d'évaluation : une liste d'**offres mobiles** construite avec le
design system **Trilogy** (`@trilogy-ds/react`), alimentée par un **appel REST**
vers une API mockée en local (MSW).

L'exercice porte sur la manipulation de données côté front : liste unique et
triée à partir d'un champ tableau (`categories`), filtre au clic et remise à zéro,
avec un état React correctement dérivé.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) : l'énoncé de l'exercice
s'affiche directement dans l'application, au-dessus de la liste des offres.

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
| `public/swagger.yaml` | Documentation OpenAPI de l'API (`GET /api/offers`) |
| `src/app.tsx` | Compose `Statement` (énoncé) + `Exercise` (liste des offres) dans le `Layout` |
| `src/layout.tsx` | En-tête de la page |
| `src/components/statement.tsx` | Énoncé (catégories en boutons, filtre, reset, bonus multi-sélection) |
| `src/components/exercise.tsx` | Liste des offres mobiles à compléter |
| `src/services/offer.ts` | `OfferService` : appel REST `GET /api/offers` |
| `src/types/` | Type `Offer` |
| `src/mocks/handlers.ts` | Le mock REST (données renvoyées par l'API) |
| `src/mocks/data/categories.ts` | Couleur d'affichage de chaque catégorie |

Alias de chemins disponibles (voir `vite.config.ts` / `tsconfig.paths.json`) :
`@assets`, `@components`, `@services`, `@types`.

## Pour l'évaluateur

Durée annoncée : 30 minutes. Points d'attention :

- liste unique et triée depuis un champ tableau (`flatMap` + `Set` + `sort`),
- comptage par catégorie (`reduce` ou `filter().length`) sans doublon,
- filtre dérivé de l'état (`useMemo` ou calcul au rendu) plutôt qu'une copie filtrée
  stockée dans un `useState`, ce qui rend le Reset trivial,
- bouton actif mis en évidence, couleur appliquée depuis `categoryColors`,
- bonus multi-sélection : état en tableau, bascule non mutante, choix argumenté
  entre `every` (toutes les catégories) et `some` (au moins une).
