import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, PageWrapper } from '../../components/layout';
import { Card, Input, Textarea, Button, FormGroup } from '../../components/ui';
import Select from '../../components/ui/Select';

// Régions de Madagascar pour auto-complétion
const regions = [
  'Analamanga', 'Vakinankaratra', 'Itasy', 'Bongolava',
  'Haute Matsiatra', 'Amoron i Mania', 'Vatovavy Fitovinany', 'Atsimo Atsinanana', 'Ihorombe', 'Atsimo Andrefana',
  'Androy', 'Anosy', 'Menabe', 'Diana', 'Sava', 'Sofia', 'Boeny', 'Betsiboka', 'Melaky', 'Alaotra Mangoro', 'Atsinanana', 'Analanjirofo'
];

const sectors = [
  { value: '', label: 'Sélectionnez un secteur' },
  { value: 'sante', label: 'Santé' },
  { value: 'education', label: 'Éducation' },
  { value: 'eau', label: 'Eau et assainissement' },
  { value: 'securite', label: 'Sécurité' },
  { value: 'routes', label: 'Routes et transports' },
  { value: 'energie', label: 'Énergie' },
  { value: 'etat-civil', label: 'État civil / administration' },
  { value: 'autre', label: 'Autre' },
];

export default function CitizenForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    idNumber: '',
    idType: 'cin' as 'cin' | 'passport',
    location: '',
    sector: '',
    subject: '',
    message: '',
    file: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Doléance soumise:', formData);
    // TODO: Envoyer vers API puis IA
    navigate('/citoyens/success');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData({ ...formData, [name]: files[0] ?? null });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header showNav />

      <PageWrapper maxWidth="lg" className="py-10">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg border border-gray-100/80" padding="lg">
            <div className="text-center mb-10 space-y-3">
              <h1 className="text-3xl md:text-4xl font-extrabold text-text tracking-tight">
                Déposer une doléance
              </h1>
              <p className="text-base md:text-lg text-gray-700">
                Remplissez le formulaire ci-dessous. Traitement automatique en moins de 30 secondes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Section infos personnelles en grille compacte */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Nom complet"
                  name="name"
                  type="text"
                  placeholder="Ex: Rakoto Jean"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-text">Identité (facultatif)</p>
              <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-center gap-3">
                <div className="flex items-center gap-4 text-sm">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="idType"
                      value="cin"
                      checked={formData.idType === 'cin'}
                      onChange={handleChange}
                      className="h-4 w-4 border-gray-300"
                    />
                    <span>CIN</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="idType"
                      value="passport"
                      checked={formData.idType === 'passport'}
                      onChange={handleChange}
                      className="h-4 w-4 border-gray-300"
                    />
                    <span>Passeport</span>
                  </label>
                </div>
                <Input
                  label={formData.idType === 'cin' ? 'Numéro CIN' : 'Numéro de passeport'}
                  name="idNumber"
                  type="text"
                  placeholder={formData.idType === 'cin' ? 'Ex: 101 01 0101 010101' : 'Ex: AB1234567'}
                  value={formData.idNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Ex: rakoto@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Numéro de téléphone"
                name="phone"
                type="tel"
                placeholder="Ex: +261 34 12 345 67"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Localisation et secteur en grille */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  Région / Commune <span className="text-red-500">*</span>
                </label>
                <input
                  list="regions"
                  name="location"
                  className="w-full px-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                  placeholder="Ex: Analamanga"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                <datalist id="regions">
                  {regions.map((region) => (
                    <option key={region} value={region} />
                  ))}
                </datalist>
              </div>

              <Select
                label="Secteur concerné"
                name="sector"
                options={sectors}
                value={formData.sector}
                onChange={handleChange}
              />
            </div>

            {/* Objet et message */}
            <Input
              label="Objet de la doléance"
              name="subject"
              type="text"
              placeholder="Ex: Manque d'eau potable"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <div>
              <label className="block text-sm font-semibold text-text mb-2">
                Votre message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                className="w-full px-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none text-sm"
                placeholder="Décrivez votre préoccupation..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text mb-2">
                Pièce jointe (optionnel)
              </label>
              <input
                type="file"
                name="file"
                accept=".pdf,.jpg,.jpeg,.png,.mp3,.wav"
                onChange={handleChange}
                className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-600 hover:border-primary"
              />
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 text-white font-bold text-base py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Envoyer ma doléance
            </button>
          </form>
        </Card>

        {/* Statistiques avec meilleur contraste */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">
              Plus de <span className="text-primary font-bold">1 000</span> doléances déjà traitées ce mois-ci
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3 text-left text-sm text-gray-600">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="font-semibold text-text">1. Réception sécurisée</p>
              <p>Stockage souverain immédiat et accusé de réception.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="font-semibold text-text">2. Classification automatique</p>
              <p>Tri par secteur, gravité, zone ; regroupement des cas similaires.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="font-semibold text-text">3. Pilotage présidentiel</p>
              <p>Résumé quotidien, carte par région, actions critiques dans le dashboard.</p>
            </div>
          </div>
        </div>
        </div>
      </PageWrapper>
    </div>
  );
}
