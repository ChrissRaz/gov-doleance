# Tableau de Bord Présidentiel

Application ReactJS modulaire et scalable pour le pilotage présidentiel des doléances citoyennes.

## Table des matières

- [Aperçu](#aperçu)
- [Technologies](#technologies)
- [Installation](#installation)
- [Démarrage rapide](#démarrage-rapide)
- [Structure du projet](#structure-du-projet)
- [Design System](#design-system)
- [Modules disponibles](#modules-disponibles)
- [Routing](#routing)
- [Comment ajouter un module](#comment-ajouter-un-module)
- [Comment intégrer une maquette](#comment-intégrer-une-maquette)
- [Comment styliser un composant](#comment-styliser-un-composant)
- [Scripts disponibles](#scripts-disponibles)

## Aperçu

Cette application permet :
- Aux citoyens de soumettre des doléances par secteur
- Au président et son équipe de visualiser, suivre et analyser les doléances
- Une navigation intuitive entre les différentes vues (citoyen / administrateur)
- Un design system complet et réutilisable

## Technologies

- **React 18** + **TypeScript** - Framework et typage
- **Vite** - Build tool ultra-rapide
- **React Router v6** - Routing côté client
- **Tailwind CSS** - Styling utility-first
- **Axios** - Client HTTP
- **ClassNames** - Gestion conditionnelle des classes CSS

## Installation

```bash
# Installer les dépendances
npm install
```

## Démarrage rapide

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir dans le navigateur
# http://localhost:5173
```

L'application est maintenant accessible. Vous pouvez :
- Accéder au formulaire citoyen : `/`
- Voir le design system : `/design-system`
- Accéder à la page de connexion : `/login`
- Voir le tableau de bord : `/dashboard`

## Structure du projet

```
/src
  /assets                 # Images, icônes, médias
  /components
    /ui                   # Composants design system
      Button.tsx
      Input.tsx
      Select.tsx
      Textarea.tsx
      Card.tsx
      Badge.tsx
      Modal.tsx
      Spinner.tsx
      FormGroup.tsx
      PageTitle.tsx
      index.ts            # Exports centralisés
    /layout               # Composants de mise en page
      Header.tsx
      Sidebar.tsx
      PageWrapper.tsx
      index.ts
  /features               # Modules métier
    /citizen              # Module doléances citoyennes
      CitizenForm.tsx
      CitizenSuccess.tsx
    /president            # Module tableau de bord président
      Dashboard.tsx
      SectorView.tsx
    /auth                 # Module authentification
      Login.tsx
    /design               # Preview du design system
      DesignSystemPreview.tsx
  /hooks                  # Hooks React personnalisés
  /lib                    # Librairies et configurations
  /routes                 # Configuration routing
    index.tsx
  /styles                 # Styles globaux
    index.css
  /utils                  # Utilitaires
    api.ts                # Instance Axios configurée
    formatter.ts          # Fonctions de formatage
  App.tsx                 # Composant racine
  main.tsx                # Point d'entrée
```

## Design System

Le projet intègre un design system complet accessible via `/design-system`.

### Palette de couleurs

```javascript
colors: {
  primary: '#25B099',      // Vert principal
  secondary: '#FFCD05',    // Jaune secondaire
  background: '#F5F6F8',   // Fond gris clair
  text: '#1F2937',         // Texte principal
}
```

### Typographie

Police principale : **Plus Jakarta Sans** (Google Fonts)

### Composants UI disponibles

- **Button** - Bouton avec variantes (primary, secondary, outline, ghost)
- **Input** - Champ de saisie avec label et gestion d'erreurs
- **Select** - Menu déroulant
- **Textarea** - Zone de texte multiligne
- **Card** - Conteneur avec ombre et bordures
- **Badge** - Étiquette de statut
- **Modal** - Fenêtre modale
- **Spinner** - Indicateur de chargement
- **FormGroup** - Groupe de champs de formulaire
- **PageTitle** - Titre de page avec sous-titre

## Modules disponibles

### 1. Module Citoyen (`/features/citizen`)
- Formulaire de soumission de doléances
- Page de confirmation

### 2. Module Président (`/features/president`)
- Dashboard avec statistiques globales
- Vue par secteur

### 3. Module Authentification (`/features/auth`)
- Page de connexion administrateur

## Routing

Les routes sont centralisées dans [src/routes/index.tsx](src/routes/index.tsx) :

```typescript
<Route path="/" element={<CitizenForm />} />
<Route path="/success" element={<CitizenSuccess />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/dashboard/sectors" element={<SectorView />} />
<Route path="/design-system" element={<DesignSystemPreview />} />
```

## Comment ajouter un module

### Étape 1 : Créer le dossier du module

```bash
mkdir src/features/mon-module
```

### Étape 2 : Créer les composants

```typescript
// src/features/mon-module/MonComposant.tsx
import React from 'react';
import { Header, PageWrapper } from '../../components/layout';
import { Card, PageTitle } from '../../components/ui';

export default function MonComposant() {
  return (
    <>
      <Header showNav />
      <PageWrapper>
        <PageTitle>Mon nouveau module</PageTitle>
        <Card>
          {/* Contenu */}
        </Card>
      </PageWrapper>
    </>
  );
}
```

### Étape 3 : Ajouter la route

Dans [src/routes/index.tsx](src/routes/index.tsx) :

```typescript
import MonComposant from '../features/mon-module/MonComposant';

// Dans le Router
<Route path="/mon-chemin" element={<MonComposant />} />
```

## Comment intégrer une maquette

### Méthodologie

1. **Analyser la maquette** - Identifier les composants réutilisables
2. **Utiliser le design system** - Privilégier les composants existants
3. **Créer des variantes si nécessaire** - Étendre les composants existants
4. **Structurer en sous-composants** - Découper en petites unités

### Exemple pratique

```typescript
import { Card, Button, Input, FormGroup } from '../../components/ui';

function MaMaquette() {
  return (
    <PageWrapper>
      {/* Utiliser les composants du design system */}
      <Card>
        <FormGroup>
          <Input label="Champ 1" />
          <Input label="Champ 2" />
          <Button>Valider</Button>
        </FormGroup>
      </Card>
    </PageWrapper>
  );
}
```

## Comment styliser un composant

### Avec Tailwind CSS

Le projet utilise Tailwind CSS. Classes disponibles :

```typescript
// Exemple de stylisation
<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-text">Titre</h1>
  <p className="text-gray-600">Paragraphe</p>
</div>
```

### Avec le package classNames

Pour des styles conditionnels :

```typescript
import classNames from 'classnames';

<button
  className={classNames(
    'px-4 py-2 rounded',
    isActive ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700',
    isDisabled && 'opacity-50 cursor-not-allowed'
  )}
>
  Bouton
</button>
```

### Classes Tailwind personnalisées

Configurées dans [tailwind.config.js](tailwind.config.js) :

- `bg-primary` → #25B099
- `bg-secondary` → #FFCD05
- `bg-background` → #F5F6F8
- `text-text` → #1F2937
- `font-jakarta` → Plus Jakarta Sans

## Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Compile pour la production
npm run preview      # Prévisualise le build de production

# Qualité de code
npm run lint         # Vérifie le code avec ESLint
```

## Configuration API

Le fichier [src/utils/api.ts](src/utils/api.ts) configure Axios avec :
- Base URL configurable via variable d'environnement `VITE_API_URL`
- Intercepteurs pour l'authentification (token JWT)
- Gestion automatique des erreurs 401

### Utilisation

```typescript
import api from '../utils/api';

// GET
const response = await api.get('/doleances');

// POST
await api.post('/doleances', { name, email, message });
```

## Variables d'environnement

Créez un fichier `.env` à la racine :

```env
VITE_API_URL=http://localhost:3000/api
```

## Responsive Design

Tous les composants sont **mobile-first** avec breakpoints :
- `sm:` → 640px
- `md:` → 768px
- `lg:` → 1024px
- `xl:` → 1280px

## Prochaines étapes

- Ajouter des tests unitaires (Vitest + React Testing Library)
- Implémenter la gestion d'état globale (Zustand ou Context API)
- Connecter à une vraie API backend
- Ajouter l'internationalisation (i18n)
- Configurer CI/CD

## Support

Pour toute question ou problème, consultez :
- La page `/design-system` pour voir tous les composants
- La structure dans `/src` pour comprendre l'organisation
- Les exemples dans `/features` pour des cas d'usage concrets

---

Développé avec React + TypeScript + Vite + Tailwind CSS
