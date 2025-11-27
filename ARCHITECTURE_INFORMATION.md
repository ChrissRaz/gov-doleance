# Architecture de l'Information - Tableau de Bord Présidentiel

## Vision Globale Repensée

### Problème identifié
- ❌ Statuts affichés mais pas d'actions pour les changer
- ❌ Bouton "Analyser secteur" qui ne mène nulle part
- ❌ Pas de parcours clair après le dashboard
- ❌ Confusion entre vue consolidée (IA) et doléances individuelles

### Solution proposée

## 1. Architecture à 3 Niveaux

### Niveau 1: Dashboard (Vue Synthétique) - ACTUEL
**Rôle**: Vision d'ensemble pour décisions stratégiques
**Utilisateur**: Président
**Contenu**:
- 4 KPI globaux (Total, En cours, Résolues, Urgentes)
- 4 synthèses sectorielles IA (Santé, Infrastructure, Éducation, Agriculture)
- **Actions possibles**:
  - ✅ Cliquer sur un secteur → Niveau 2
  - ✅ Voir tendances et régions principales
  - ❌ PAS de changement de statut ici (trop haut niveau)

### Niveau 2: Page Secteur (Vue Détaillée) - À CRÉER
**Rôle**: Analyse approfondie d'un secteur spécifique
**Utilisateur**: Président + Équipe
**URL**: `/dashboard/sector/:sectorName`
**Contenu**:
- Synthèse IA détaillée du secteur
- **Liste des problèmes consolidés** (non pas les doléances individuelles!)
  - Exemple: "Pénurie de médicaments" = 45 doléances similaires
  - Exemple: "Manque de personnel médical" = 28 doléances similaires
- Carte géographique des zones affectées
- Timeline d'évolution
- **Actions possibles**:
  - ✅ Assigner à un ministère
  - ✅ Changer le statut global du problème
  - ✅ Voir les doléances sources → Niveau 3
  - ✅ Créer une directive présidentielle

### Niveau 3: Détail Problème (Doléances Sources) - À CRÉER
**Rôle**: Voir les doléances individuelles qui composent un problème consolidé
**Utilisateur**: Équipe technique / Ministères
**URL**: `/dashboard/problem/:problemId`
**Contenu**:
- Liste des doléances individuelles regroupées
- Détails par doléance (nom, localisation, message complet)
- Possibilité de marquer individuellement comme traitée
- **Actions possibles**:
  - ✅ Contacter le citoyen
  - ✅ Marquer comme résolu
  - ✅ Demander plus d'informations

## 2. Workflow de Traitement

### Phase 1: Collecte (Citoyen)
```
Citoyen → Formulaire → IA Classifie → Base de données
```

### Phase 2: Consolidation (IA - Automatique)
```
IA analyse toutes les doléances
    ↓
Regroupe par similarité
    ↓
Génère synthèses par secteur
    ↓
Identifie problèmes récurrents
    ↓
Calcule urgence et tendances
```

### Phase 3: Décision (Président)
```
Dashboard → Synthèses sectorielles
    ↓
Clique sur secteur → Page secteur détaillée
    ↓
Voit problèmes consolidés → Priorise
    ↓
Assigne au ministère → Change statut
    ↓
Crée directive si nécessaire
```

### Phase 4: Action (Ministère)
```
Reçoit assignation → Consulte détails
    ↓
Planifie actions → Execute
    ↓
Met à jour statut → Marque résolu
    ↓
Citoyen reçoit notification
```

## 3. États et Transitions

### Statuts Possibles
1. **En attente** (pending)
   - Nouvelle doléance consolidée
   - Pas encore assignée
   - Couleur: Orange/Jaune

2. **En cours** (in_progress)
   - Assignée à un ministère
   - Actions en cours
   - Couleur: Bleu

3. **Résolue** (resolved)
   - Problème traité
   - Solution implémentée
   - Couleur: Vert

4. **Urgente** (urgent) - Tag additionnel
   - Peut être combiné avec les autres
   - Priorité haute
   - Couleur: Rouge

### Transitions de Statut

```
[En attente]
    ↓ (Président assigne)
[En cours]
    ↓ (Ministère résout)
[Résolue]

À tout moment: Marquer comme [Urgente]
```

## 4. Actions par Rôle

### Président (Dashboard Niveau 1-2)
- ✅ Voir synthèses sectorielles
- ✅ Identifier secteurs en crise
- ✅ Assigner problèmes aux ministères
- ✅ Marquer comme urgent
- ✅ Créer directives présidentielles
- ✅ Suivre progression globale
- ❌ Ne traite PAS les doléances individuelles

### Ministère (Niveau 2-3)
- ✅ Recevoir assignations
- ✅ Consulter détails problèmes
- ✅ Voir doléances sources
- ✅ Planifier actions
- ✅ Mettre à jour statut
- ✅ Marquer comme résolu
- ✅ Contacter citoyens si besoin

### IA (Automatique)
- ✅ Classifier doléances
- ✅ Détecter similarités
- ✅ Générer synthèses
- ✅ Calculer urgence
- ✅ Identifier tendances
- ✅ Alerter anomalies

## 5. Nouvelles Pages à Créer

### Page: Détail Secteur
**Fichier**: `src/features/president/SectorDetail.tsx`
**Route**: `/dashboard/sector/:sectorName`
**Composants**:
- Header avec nom secteur et stats
- Liste problèmes consolidés (cards cliquables)
- Carte géographique interactive
- Timeline d'évolution
- Actions rapides (Assigner, Urgent, Directive)

### Page: Détail Problème
**Fichier**: `src/features/president/ProblemDetail.tsx`
**Route**: `/dashboard/problem/:problemId`
**Composants**:
- Synthèse IA du problème
- Liste doléances sources
- Historique actions
- Formulaire assignation ministère
- Boutons changement statut

### Modal: Assignation Ministère
**Fichier**: `src/components/modals/AssignMinistryModal.tsx`
**Contenu**:
- Liste ministères
- Champ notes/instructions
- Priorité
- Deadline suggérée
- Bouton confirmer

### Modal: Directive Présidentielle
**Fichier**: `src/components/modals/DirectiveModal.tsx`
**Contenu**:
- Titre directive
- Description
- Secteurs concernés
- Ministères impliqués
- Timeline implémentation
- Bouton publier

## 6. Données et API (pour Phase 2)

### Structure Données

```typescript
// Doléance individuelle (niveau le plus bas)
interface Complaint {
  id: string;
  citizenName?: string;
  location: string;
  sector: string; // Assigné par IA
  message: string;
  urgency: 'low' | 'medium' | 'high'; // Calculé par IA
  status: 'pending' | 'in_progress' | 'resolved';
  createdAt: Date;
  problemId?: string; // Référence au problème consolidé
}

// Problème consolidé (niveau intermédiaire)
interface ConsolidatedProblem {
  id: string;
  sector: string;
  title: string; // Ex: "Pénurie de médicaments"
  summary: string; // Généré par IA
  complaintsCount: number; // Nombre de doléances similaires
  topRegions: string[]; // Régions les plus affectées
  urgency: 'low' | 'medium' | 'high';
  status: 'pending' | 'in_progress' | 'resolved';
  assignedTo?: string; // Ministère assigné
  trend: string; // "+23%", "-5%"
  createdAt: Date;
  updatedAt: Date;
}

// Synthèse sectorielle (niveau le plus haut)
interface SectorInsight {
  sector: string;
  problemsCount: number;
  complaintsCount: number;
  topProblems: ConsolidatedProblem[]; // Top 5
  topRegion: string;
  urgency: 'low' | 'medium' | 'high';
  trend: string;
  summary: string; // Généré par IA
}
```

## 7. Priorités d'Implémentation

### Phase 1 (MVP - Actuel)
- ✅ Formulaire citoyen
- ✅ Dashboard synthétique
- ✅ Page confirmation
- ❌ **MANQUE**: Actions et navigation

### Phase 2 (Prochain Sprint)
1. **Créer Page Détail Secteur** (priorité haute)
   - Liste problèmes consolidés
   - Actions: Assigner, Marquer urgent
   - Navigation vers Dashboard

2. **Ajouter Modal Assignation**
   - Sélection ministère
   - Notes et deadline
   - Changement statut automatique

3. **Améliorer Dashboard**
   - Rendre secteurs cliquables
   - Lien vers page détail
   - Meilleur indicateur d'action possible

### Phase 3 (Futur)
- Page détail problème
- Gestion ministères
- Notifications
- Carte interactive complète
- Directives présidentielles
- Statistiques avancées

## 8. Principes de Design

### Hiérarchie Visuelle
- **Niveau 1 (Dashboard)**: Vue d'oiseau, indicateurs macro
- **Niveau 2 (Secteur)**: Vue détaillée, actions possibles
- **Niveau 3 (Problème)**: Vue granulaire, doléances sources

### Couleurs Sémantiques
- 🔴 Rouge: Urgent, attention requise
- 🟡 Jaune: En attente, pas encore traité
- 🔵 Bleu: En cours, actions en cours
- 🟢 Vert: Résolu, succès

### Actions Claires
- Chaque carte doit avoir un call-to-action visible
- Boutons avec verbes d'action: "Analyser", "Assigner", "Résoudre"
- États disabled si action non disponible
- Confirmation avant actions critiques

## 9. Flux Utilisateur Principal

```
PRÉSIDENT arrive sur Dashboard
    ↓
Voit 4 secteurs avec synthèses IA
    ↓
Clique sur "Santé" (87 doléances, urgence haute)
    ↓
PAGE SECTEUR SANTÉ
    ↓
Voit 3 problèmes consolidés:
  1. "Pénurie médicaments" (45 doléances) - EN ATTENTE
  2. "Manque personnel" (28 doléances) - EN COURS
  3. "Équipements obsolètes" (14 doléances) - EN ATTENTE
    ↓
Clique sur "Pénurie médicaments"
    ↓
MODAL ou PAGE PROBLÈME
    ↓
Lit synthèse IA + voit régions affectées
    ↓
Clique "Assigner au ministère"
    ↓
MODAL ASSIGNATION
    ↓
Sélectionne "Ministère de la Santé"
    ↓
Ajoute note: "Priorité absolue, budget d'urgence disponible"
    ↓
Statut change automatiquement: EN ATTENTE → EN COURS
    ↓
Retour page secteur
    ↓
Voit mise à jour en temps réel
```

## 10. Métriques de Succès

- Temps moyen d'assignation d'un problème: < 2 minutes
- Nombre de clics pour assigner: < 4 clics
- Taux d'utilisation des synthèses IA: > 80%
- Satisfaction utilisateur: > 4/5
- Problèmes résolus par mois: évolution positive

---

## Conclusion

L'architecture repensée crée une **hiérarchie claire à 3 niveaux**:
1. **Dashboard**: Vision stratégique (Président)
2. **Secteur**: Analyse tactique (Président + Équipe)
3. **Problème**: Détails opérationnels (Ministères)

Chaque niveau a des **actions claires** adaptées au rôle, avec des **transitions de statut logiques** et un **workflow complet** de la doléance à la résolution.
