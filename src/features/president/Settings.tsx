import React from 'react';
import { Header, PageWrapper } from '../../components/layout';
import { Card, PageTitle, Input, Button, FormGroup, Select } from '../../components/ui';

const sectorOptions = [
  { value: 'all', label: 'Tous secteurs' },
  { value: 'sante', label: 'Santé' },
  { value: 'infrastructure', label: 'Infrastructure' },
  { value: 'education', label: 'Éducation' },
  { value: 'energie', label: 'Énergie' },
  { value: 'eau', label: 'Eau' },
  { value: 'securite', label: 'Sécurité' },
];

const priorityOptions = [
  { value: 'high', label: 'Priorité élevée' },
  { value: 'medium', label: 'Priorité normale' },
  { value: 'low', label: 'Priorité basse' },
];

const languageOptions = [
  { value: 'mg', label: 'Malagasy (par défaut)' },
  { value: 'fr', label: 'Français' },
];

export default function Settings() {
  return (
    <div className="flex-1 bg-gradient-to-b from-background to-white">
      <Header />
      <PageWrapper maxWidth="lg">
          <PageTitle subtitle="Réglages généraux du portail et préférences d’alertes.">
            Paramètres
          </PageTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-200">
              <h3 className="text-lg font-bold text-text mb-4">Profil</h3>
              <FormGroup>
                <Input label="Nom complet" placeholder="Nom Prénom" />
                <Input label="Email de contact" type="email" placeholder="contact@gouv.mg" />
                <Input label="Téléphone (optionnel)" placeholder="+261 ..." />
                <Button variant="primary">Mettre à jour le profil</Button>
              </FormGroup>
            </Card>

            <Card className="border-2 border-gray-200">
              <h3 className="text-lg font-bold text-text mb-4">Notifications</h3>
              <FormGroup>
                <label className="flex items-center gap-3 text-sm text-gray-700">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                  Alerte email pour les urgences critiques
                </label>
                <label className="flex items-center gap-3 text-sm text-gray-700">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                  Rapport quotidien des doléances reçues
                </label>
                <label className="flex items-center gap-3 text-sm text-gray-700">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                  Rapports hebdomadaires par secteur
                </label>
                <Button variant="primary">Enregistrer</Button>
              </FormGroup>
            </Card>
          </div>

          <Card className="border-2 border-gray-200 mt-6">
            <h3 className="text-lg font-bold text-text mb-2">Priorités personnalisées</h3>
            <p className="text-sm text-gray-600 mb-4">
              Définissez un niveau de priorité par défaut pour un secteur ou un sujet spécifique.
            </p>
            <FormGroup>
              <Select label="Secteur" options={sectorOptions} defaultValue="all" />
              <Input label="Sujet (optionnel)" placeholder="Ex: Rupture de médicaments, RN7, cyberattaque..." />
              <Select label="Niveau de priorité" options={priorityOptions} defaultValue="medium" />
              <Button variant="primary">Appliquer la priorité</Button>
            </FormGroup>
          </Card>

          <Card className="border-2 border-gray-200 mt-6">
            <h3 className="text-lg font-bold text-text mb-2">Langue du portail</h3>
            <p className="text-sm text-gray-600 mb-4">
              Choisissez la langue par défaut pour l’interface publique et les notifications.
            </p>
            <FormGroup>
              <Select label="Langue" options={languageOptions} defaultValue="mg" />
              <Button variant="primary">Enregistrer la langue</Button>
            </FormGroup>
          </Card>

          <Card className="border-2 border-gray-200 mt-6">
            <h3 className="text-lg font-bold text-text mb-2">Sécurité</h3>
            <p className="text-sm text-gray-600 mb-4">Gestion du mot de passe et des sessions.</p>
            <FormGroup>
              <Input label="Nouveau mot de passe" type="password" placeholder="••••••••" />
              <Input label="Confirmer le mot de passe" type="password" placeholder="••••••••" />
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Mettre à jour le mot de passe</Button>
                <Button variant="secondary">Se déconnecter de tous les appareils</Button>
              </div>
            </FormGroup>
          </Card>
        </PageWrapper>
    </div>
  );
}
