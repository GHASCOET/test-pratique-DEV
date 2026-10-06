# Test technique — Chargé d'étude (React + Trilogy)

Petit projet d'évaluation : un formulaire **« Mes informations personnelles »**
construit avec le design system **Trilogy** (`@trilogy-ds/react`), alimenté par un
**appel REST** vers une API mockée en local (MSW).

L'objectif n'est **pas** de produire du code parfait, mais d'évaluer votre
capacité à **analyser un existant**, à **lire une documentation d'API (swagger)**
et à **reproduire un pattern** de code existant.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) : l'énoncé complet
(Partie A — Analyse / Partie B — Code) s'affiche directement dans l'application,
au-dessus du formulaire.

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
|---|---|
| `public/swagger.yaml` | Documentation OpenAPI de l'API (tous les champs disponibles) |
| `src/app.tsx` | Compose `Statement` (énoncé) + `Exercise` (formulaire) dans le `Layout` |
| `src/layout.tsx` | En-tête + `TrilogyProvider` |
| `src/components/statement.tsx` | L'énoncé du test (Parties A & B) |
| `src/components/exercise.tsx` | Le formulaire Trilogy à compléter (3 TODOs) |
| `src/services/client.ts` | `ClientService` : appels REST (`GET` / `PUT /api/clients/:id`) |
| `src/types/` | Types `Client`, `ClientUpdate`, `Adresse`, `Preferences` |
| `src/mocks/handlers.ts` | Le mock REST (données renvoyées par l'API) |

Alias de chemins disponibles (voir `vite.config.ts` / `tsconfig.paths.json`) :
`@assets`, `@components`, `@services`, `@types`.

## Pour l'évaluateur

Le formulaire n'expose volontairement que 4 champs (civilité, prénom, nom, e-mail)
alors que l'API en renvoie beaucoup plus (téléphone, date de naissance, adresse,
préférences newsletter/SMS, etc.). Le candidat doit **lire le swagger**, repérer
les champs non exploités, juger leur pertinence (Partie A, à répondre dans un
fichier `REPONSES.md` à créer), puis brancher 2 à 3 champs dans
`src/components/exercise.tsx` en suivant le pattern déjà en place (Partie B).

Point d'analyse clé : certains champs du schéma `Client` (ex. `segment`,
`dateCreationCompte`, `emailVerifie`, `telephoneFixe`) n'apparaissent **pas**
dans `ClientUpdate` → ils ne doivent pas être rendus modifiables.
