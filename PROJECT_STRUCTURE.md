# Structure du Projet - Tableau de Bord Présidentiel

## Vue d'ensemble

Projet ReactJS TypeScript avec architecture modulaire pour le pilotage présidentiel.

## Architecture

```
president-dashboard/
├── public/                          # Fichiers statiques
├── src/
│   ├── components/                  # Composants réutilisables
│   │   ├── ui/                      # Design System
│   │   │   ├── Button.tsx           # Bouton avec variantes
│   │   │   ├── Input.tsx            # Input avec label/erreur
│   │   │   ├── Select.tsx           # Select dropdown
│   │   │   ├── Textarea.tsx         # Zone de texte
│   │   │   ├── Card.tsx             # Conteneur avec ombre
│   │   │   ├── Badge.tsx            # Badge de statut
│   │   │   ├── Modal.tsx            # Fenêtre modale
│   │   │   ├── Spinner.tsx          # Indicateur chargement
│   │   │   ├── FormGroup.tsx        # Groupe de champs
│   │   │   ├── PageTitle.tsx        # Titre de page
│   │   │   └── index.ts             # Exports centralisés
│   │   │
│   │   └── layout/                  # Composants de layout
│   │       ├── Header.tsx           # En-tête avec navigation
│   │       ├── Sidebar.tsx          # Menu latéral (dashboard)
│   │       ├── PageWrapper.tsx      # Conteneur de page
│   │       └── index.ts             # Exports centralisés
│   │
│   ├── features/                    # Modules métier
│   │   ├── citizen/                 # Module citoyen
│   │   │   ├── CitizenForm.tsx      # Formulaire doléance
│   │   │   └── CitizenSuccess.tsx   # Page de confirmation
│   │   │
│   │   ├── president/               # Module dashboard
│   │   │   ├── Dashboard.tsx        # Vue d'ensemble
│   │   │   └── SectorView.tsx       # Analyse par secteur
│   │   │
│   │   ├── auth/                    # Module authentification
│   │   │   └── Login.tsx            # Page de connexion
│   │   │
│   │   └── design/                  # Preview design system
│   │       └── DesignSystemPreview.tsx
│   │
│   ├── routes/                      # Configuration routing
│   │   └── index.tsx                # Définition des routes
│   │
│   ├── utils/                       # Utilitaires
│   │   ├── api.ts                   # Instance Axios
│   │   └── formatter.ts             # Fonctions de formatage
│   │
│   ├── hooks/                       # Custom hooks (à venir)
│   ├── lib/                         # Librairies (à venir)
│   ├── assets/                      # Images, icônes
│   ├── App.tsx                      # Composant racine
│   ├── main.tsx                     # Point d'entrée
│   └── index.css                    # Styles globaux + Tailwind
│
├── tailwind.config.js               # Configuration Tailwind
├── postcss.config.js                # Configuration PostCSS
├── vite.config.ts                   # Configuration Vite
├── tsconfig.json                    # Configuration TypeScript
├── package.json                     # Dépendances
├── .env.example                     # Variables d'environnement
├── README.md                        # Documentation principale
└── PROJECT_STRUCTURE.md             # Ce fichier

```

## Modules

### 1. Design System (`/components/ui`)

Composants de base réutilisables :

**Formulaires**
- Input, Select, Textarea
- FormGroup pour grouper les champs

**Affichage**
- Button (4 variantes)
- Card (conteneur)
- Badge (statuts)
- PageTitle (titres de page)

**Interaction**
- Modal (fenêtre modale)
- Spinner (chargement)

### 2. Layout (`/components/layout`)

**Header** - En-tête avec logo et navigation
**Sidebar** - Menu latéral pour le dashboard
**PageWrapper** - Conteneur responsive pour les pages

### 3. Features (Modules métier)

#### Citizen (`/features/citizen`)
- **CitizenForm** : Formulaire de soumission de doléance
- **CitizenSuccess** : Page de confirmation

#### President (`/features/president`)
- **Dashboard** : Vue d'ensemble avec statistiques
- **SectorView** : Analyse détaillée par secteur

#### Auth (`/features/auth`)
- **Login** : Connexion administrateur

#### Design (`/features/design`)
- **DesignSystemPreview** : Documentation visuelle du design system

## Routes disponibles

| Route | Composant | Description |
|-------|-----------|-------------|
| `/` | CitizenForm | Formulaire citoyen |
| `/success` | CitizenSuccess | Confirmation |
| `/login` | Login | Connexion admin |
| `/dashboard` | Dashboard | Vue d'ensemble |
| `/dashboard/sectors` | SectorView | Analyse secteurs |
| `/design-system` | DesignSystemPreview | Design system |

## Palette de couleurs

```css
Primary:    #25B099  /* Vert principal */
Secondary:  #FFCD05  /* Jaune */
Background: #F5F6F8  /* Gris clair */
Text:       #1F2937  /* Gris foncé */
```

## Typographie

**Police** : Plus Jakarta Sans (Google Fonts)
**Poids** : 400 (Regular), 500 (Medium), 700 (Bold)

## Technologies Stack

- **React 18** avec TypeScript
- **Vite** pour le build
- **React Router v6** pour le routing
- **Tailwind CSS** pour le styling
- **Axios** pour les appels API
- **ClassNames** pour les classes conditionnelles

## Conventions de code

### Naming
- Composants : PascalCase (`Button.tsx`)
- Fichiers utils : camelCase (`formatter.ts`)
- Dossiers : kebab-case ou camelCase

### Structure composant
```typescript
import React from 'react';
import classNames from 'classnames';

interface ComponentProps {
  // Props
}

export default function Component({ ...props }: ComponentProps) {
  return (
    // JSX
  );
}
```

### Imports
```typescript
// 1. React & libs
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 2. Components
import { Button, Card } from '../../components/ui';
import { Header } from '../../components/layout';

// 3. Utils
import api from '../../utils/api';

// 4. Types
import type { User } from '../../types';
```

## Prochaines étapes recommandées

1. Connecter à une API backend réelle
2. Ajouter la gestion d'état (Context API ou Zustand)
3. Implémenter l'authentification JWT
4. Ajouter des tests (Vitest + React Testing Library)
5. Configurer CI/CD
6. Ajouter l'internationalisation (i18n)

## Pages à créer (suggestions)

- `/dashboard/stats` - Statistiques détaillées
- `/dashboard/complaints` - Liste des doléances
- `/dashboard/settings` - Paramètres
- `/profile` - Profil utilisateur
- `/notifications` - Notifications

## Notes importantes

- Tous les composants sont **mobile-first**
- Design system accessible via `/design-system`
- API configurée mais non connectée (voir `utils/api.ts`)
- Variables d'environnement dans `.env` (voir `.env.example`)
