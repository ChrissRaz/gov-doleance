import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, PageWrapper } from '../../components/layout';
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
  PageTitle,
} from '../../components/ui';

export default function DesignSystemPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authView, setAuthView] = useState<'signup' | 'login' | 'recover'>('signup');

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <>
      <Header showNav />
      <PageWrapper maxWidth="full">
        <PageTitle subtitle="Explorez tous les composants disponibles">
          Design System Preview
        </PageTitle>

        <div className="space-y-8">
          {/* Parcours Auth */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-text">Parcours Auth (design)</h2>
              <div className="flex items-center gap-2">
                {[
                  { key: 'signup', label: 'Créer un compte' },
                  { key: 'login', label: 'Connexion' },
                  { key: 'recover', label: 'Récupération' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setAuthView(tab.key as typeof authView)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition border ${
                      authView === tab.key
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-white text-text border-gray-200 hover:border-primary/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
                <Link
                  to="/login"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Voir la page Connexion
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[2fr,1fr]">
              <div className="space-y-4">
                {authView === 'signup' && (
                  <>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Input label="Nom" placeholder="Nom" />
                      <Input label="Prénom" placeholder="Prénom" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Input label="Email" type="email" placeholder="adresse@mail.com" />
                      <Input label="Téléphone" type="tel" placeholder="+261 ..." />
                    </div>
                    <Input label="Mot de passe" type="password" placeholder="••••••••" />
                    <div className="flex gap-3">
                      <Button>Créer mon compte</Button>
                      <Button variant="outline" onClick={() => setAuthView('login')}>
                        J’ai déjà un compte
                      </Button>
                    </div>
                  </>
                )}

                {authView === 'login' && (
                  <>
                    <Input label="Email" type="email" placeholder="adresse@mail.com" />
                    <Input label="Mot de passe" type="password" placeholder="••••••••" />
                    <div className="flex flex-wrap gap-3 items-center">
                      <Button>Se connecter</Button>
                      <button
                        type="button"
                        className="text-sm font-semibold text-primary hover:underline"
                        onClick={() => setAuthView('recover')}
                      >
                        Mot de passe oublié ?
                      </button>
                    </div>
                  </>
                )}

                {authView === 'recover' && (
                  <>
                    <Input label="Email" type="email" placeholder="adresse@mail.com" />
                    <Button>Envoyer un lien de récupération</Button>
                    <button
                      type="button"
                      className="text-sm font-semibold text-primary hover:underline"
                      onClick={() => setAuthView('login')}
                    >
                      Retour à la connexion
                    </button>
                  </>
                )}
              </div>

              <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-4 text-sm text-gray-600 space-y-2">
                <p className="font-semibold text-text">Notes design</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Structure simple en card, boutons pill pour naviguer entre les étapes.</li>
                  <li>Champs communs : nom, prénom, email, téléphone, mot de passe.</li>
                  <li>Actions secondaires : lien vers connexion ou récupération.</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Buttons */}
          <Card>
            <h2 className="text-xl font-bold text-text mb-4">Boutons</h2>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </Card>

          {/* Badges */}
          <Card>
            <h2 className="text-xl font-bold text-text mb-4">Badges</h2>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
            </div>
          </Card>

          {/* Form Inputs */}
          <Card>
            <h2 className="text-xl font-bold text-text mb-4">Formulaires</h2>
            <FormGroup className="max-w-md">
              <Input label="Input standard" placeholder="Entrez du texte" />
              <Input
                label="Input avec erreur"
                placeholder="Entrez du texte"
                error="Ce champ est requis"
              />
              <Select
                label="Select"
                options={selectOptions}
                defaultValue="option1"
              />
              <Textarea
                label="Textarea"
                placeholder="Entrez votre message"
                rows={4}
              />
            </FormGroup>
          </Card>

          {/* Cards */}
          <Card>
            <h2 className="text-xl font-bold text-text mb-4">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card padding="sm">
                <h3 className="font-semibold mb-2">Small Padding</h3>
                <p className="text-sm text-gray-600">
                  Une card avec un padding réduit
                </p>
              </Card>
              <Card padding="md" hover>
                <h3 className="font-semibold mb-2">Medium Padding + Hover</h3>
                <p className="text-sm text-gray-600">
                  Une card avec effet au survol
                </p>
              </Card>
              <Card padding="lg">
                <h3 className="font-semibold mb-2">Large Padding</h3>
                <p className="text-sm text-gray-600">
                  Une card avec un padding large
                </p>
              </Card>
            </div>
          </Card>

          {/* Modal */}
          <Card>
            <h2 className="text-xl font-bold text-text mb-4">Modal</h2>
            <Button onClick={() => setIsModalOpen(true)}>Ouvrir la modal</Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Exemple de Modal"
              size="md"
            >
              <p className="text-gray-600 mb-4">
                Ceci est un exemple de modal. Vous pouvez y placer n'importe
                quel contenu.
              </p>
              <FormGroup>
                <Input label="Nom" placeholder="Votre nom" />
                <Input label="Email" type="email" placeholder="votre@email.com" />
              </FormGroup>
              <div className="flex gap-3 mt-6">
                <Button onClick={() => setIsModalOpen(false)}>Valider</Button>
                <Button
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Annuler
                </Button>
              </div>
            </Modal>
          </Card>

          {/* Spinner */}
          <Card>
            <h2 className="text-xl font-bold text-text mb-4">Spinners</h2>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Spinner size="sm" />
                <span className="text-xs text-gray-600">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner size="md" />
                <span className="text-xs text-gray-600">Medium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Spinner size="lg" />
                <span className="text-xs text-gray-600">Large</span>
              </div>
            </div>
          </Card>

          {/* Colors */}
          <Card>
            <h2 className="text-xl font-bold text-text mb-4">Palette de couleurs</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="w-full h-20 bg-primary rounded-lg mb-2" />
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-gray-500">#25B099</p>
              </div>
              <div>
                <div className="w-full h-20 bg-secondary rounded-lg mb-2" />
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs text-gray-500">#FFCD05</p>
              </div>
              <div>
                <div className="w-full h-20 bg-background rounded-lg mb-2 border" />
                <p className="text-sm font-medium">Background</p>
                <p className="text-xs text-gray-500">#F5F6F8</p>
              </div>
              <div>
                <div className="w-full h-20 bg-text rounded-lg mb-2" />
                <p className="text-sm font-medium">Text</p>
                <p className="text-xs text-gray-500">#1F2937</p>
              </div>
            </div>
          </Card>

          {/* Typography */}
          <Card>
            <h2 className="text-xl font-bold text-text mb-4">Typographie</h2>
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold">Heading 1</h1>
                <p className="text-sm text-gray-500">text-3xl font-bold</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Heading 2</h2>
                <p className="text-sm text-gray-500">text-2xl font-bold</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Heading 3</h3>
                <p className="text-sm text-gray-500">text-xl font-bold</p>
              </div>
              <div>
                <p className="text-base">Paragraph - Plus Jakarta Sans</p>
                <p className="text-sm text-gray-500">text-base</p>
              </div>
              <div>
                <p className="text-sm">Small text</p>
                <p className="text-sm text-gray-500">text-sm</p>
              </div>
            </div>
          </Card>
        </div>
      </PageWrapper>
    </>
  );
}
