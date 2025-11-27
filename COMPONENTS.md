# Guide des Composants - Design System

## Table des matières

- [Composants UI](#composants-ui)
- [Composants Layout](#composants-layout)
- [Exemples d'utilisation](#exemples-dutilisation)

---

## Composants UI

### Button

Bouton avec plusieurs variantes et tailles.

**Props:**
```typescript
variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
size?: 'sm' | 'md' | 'lg'
```

**Exemple:**
```tsx
import { Button } from '../../components/ui';

<Button variant="primary" size="md">
  Envoyer
</Button>
```

---

### Input

Champ de saisie avec label et gestion d'erreurs.

**Props:**
```typescript
label?: string
error?: string
fullWidth?: boolean  // default: true
```

**Exemple:**
```tsx
import { Input } from '../../components/ui';

<Input
  label="Email"
  type="email"
  placeholder="vous@example.com"
  error="Email invalide"
/>
```

---

### Select

Menu déroulant stylisé.

**Props:**
```typescript
label?: string
error?: string
fullWidth?: boolean  // default: true
options: { value: string; label: string }[]
```

**Exemple:**
```tsx
import { Select } from '../../components/ui';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' }
];

<Select
  label="Choisissez"
  options={options}
  defaultValue="option1"
/>
```

---

### Textarea

Zone de texte multiligne.

**Props:**
```typescript
label?: string
error?: string
fullWidth?: boolean  // default: true
rows?: number  // default: 4
```

**Exemple:**
```tsx
import { Textarea } from '../../components/ui';

<Textarea
  label="Message"
  placeholder="Votre message..."
  rows={6}
/>
```

---

### Card

Conteneur avec ombre et bordures arrondies.

**Props:**
```typescript
padding?: 'none' | 'sm' | 'md' | 'lg'  // default: 'md'
hover?: boolean  // default: false
```

**Exemple:**
```tsx
import { Card } from '../../components/ui';

<Card padding="lg" hover>
  <h2>Titre</h2>
  <p>Contenu de la card</p>
</Card>
```

---

### Badge

Étiquette de statut colorée.

**Props:**
```typescript
variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
size?: 'sm' | 'md'  // default: 'md'
```

**Exemple:**
```tsx
import { Badge } from '../../components/ui';

<Badge variant="success">Actif</Badge>
<Badge variant="warning" size="sm">En attente</Badge>
```

---

### Modal

Fenêtre modale avec overlay.

**Props:**
```typescript
isOpen: boolean
onClose: () => void
title?: string
size?: 'sm' | 'md' | 'lg' | 'xl'  // default: 'md'
```

**Exemple:**
```tsx
import { Modal } from '../../components/ui';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Titre de la modal"
  size="lg"
>
  <p>Contenu de la modal</p>
</Modal>
```

---

### Spinner

Indicateur de chargement animé.

**Props:**
```typescript
size?: 'sm' | 'md' | 'lg'  // default: 'md'
```

**Exemple:**
```tsx
import { Spinner } from '../../components/ui';

<Spinner size="lg" />
```

---

### FormGroup

Groupe de champs de formulaire avec espacement.

**Props:**
```typescript
spacing?: 'sm' | 'md' | 'lg'  // default: 'md'
```

**Exemple:**
```tsx
import { FormGroup, Input, Button } from '../../components/ui';

<FormGroup spacing="lg">
  <Input label="Nom" />
  <Input label="Email" />
  <Button>Envoyer</Button>
</FormGroup>
```

---

### PageTitle

Titre de page avec sous-titre optionnel.

**Props:**
```typescript
subtitle?: string
```

**Exemple:**
```tsx
import { PageTitle } from '../../components/ui';

<PageTitle subtitle="Description de la page">
  Titre de la page
</PageTitle>
```

---

## Composants Layout

### Header

En-tête avec logo et navigation.

**Props:**
```typescript
showNav?: boolean  // default: false
```

**Exemple:**
```tsx
import { Header } from '../../components/layout';

<Header showNav />
```

---

### Sidebar

Menu latéral pour le tableau de bord.

**Exemple:**
```tsx
import { Sidebar } from '../../components/layout';

<div className="flex">
  <Sidebar />
  <main className="flex-1">
    {/* Contenu */}
  </main>
</div>
```

---

### PageWrapper

Conteneur responsive pour les pages.

**Props:**
```typescript
maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'  // default: 'xl'
```

**Exemple:**
```tsx
import { PageWrapper } from '../../components/layout';

<PageWrapper maxWidth="lg">
  {/* Contenu de la page */}
</PageWrapper>
```

---

## Exemples d'utilisation

### Formulaire complet

```tsx
import {
  FormGroup,
  Input,
  Select,
  Textarea,
  Button
} from '../../components/ui';

export default function MonFormulaire() {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          label="Nom"
          name="name"
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          required
        />
        <Select
          label="Catégorie"
          name="category"
          options={options}
          required
        />
        <Textarea
          label="Message"
          name="message"
          rows={5}
        />
        <Button type="submit" size="lg" className="w-full">
          Envoyer
        </Button>
      </FormGroup>
    </form>
  );
}
```

### Page avec layout

```tsx
import { Header, PageWrapper } from '../../components/layout';
import { PageTitle, Card } from '../../components/ui';

export default function MaPage() {
  return (
    <>
      <Header showNav />
      <PageWrapper maxWidth="lg">
        <PageTitle subtitle="Description">
          Ma Page
        </PageTitle>
        <Card>
          <p>Contenu de la page</p>
        </Card>
      </PageWrapper>
    </>
  );
}
```

### Dashboard avec sidebar

```tsx
import { Header, Sidebar, PageWrapper } from '../../components/layout';
import { PageTitle, Card, Badge } from '../../components/ui';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <PageWrapper maxWidth="full">
          <PageTitle>Dashboard</PageTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <h3>Statistique 1</h3>
              <Badge variant="success">Actif</Badge>
            </Card>
            {/* Plus de cards */}
          </div>
        </PageWrapper>
      </div>
    </div>
  );
}
```

### Imports groupés

```tsx
// Importer tous les composants UI d'un coup
import {
  Button,
  Input,
  Select,
  Textarea,
  Card,
  Badge,
  Modal,
  Spinner,
  FormGroup,
  PageTitle
} from '../../components/ui';

// Importer tous les composants layout
import {
  Header,
  Sidebar,
  PageWrapper
} from '../../components/layout';
```

---

## Styling avec Tailwind

Tous les composants acceptent une prop `className` pour personnalisation :

```tsx
<Button className="mt-4 shadow-lg">
  Mon bouton
</Button>

<Card className="border-2 border-primary">
  Ma card personnalisée
</Card>
```

## Classes Tailwind personnalisées

```css
bg-primary      → #25B099
bg-secondary    → #FFCD05
bg-background   → #F5F6F8
text-text       → #1F2937
font-jakarta    → Plus Jakarta Sans
```

---

Pour voir tous ces composants en action, visitez `/design-system` dans l'application.
