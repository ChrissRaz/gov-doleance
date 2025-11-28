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
    contact: '',
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
    <div className="min-h-screen bg-gradient-to-b from-white via-primary/10 to-emerald-50/40">
      <Header showNav />

      {/* Hero public */}
      <div className="bg-gradient-to-r from-white via-primary/8 to-emerald-50 border-b border-gray-100/80">
        <PageWrapper maxWidth="md" className="py-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Portail de doléances citoyennes
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text leading-tight tracking-tight">
              Parlez au Président
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Votre voix compte pour construire un Madagascar meilleur. Partagez vos préoccupations en quelques minutes, nous les classons et les acheminons aux décideurs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { text: 'Classement IA en -30 sec', color: 'text-primary border-primary/30' },
                { text: 'Données hébergées en souverain', color: 'text-emerald-700 border-emerald-200' },
                { text: 'Urgences priorisées', color: 'text-amber-700 border-amber-200' },
              ].map((badge) => (
                <span
                  key={badge.text}
                  className={`rounded-full bg-white/95 px-4 py-2 text-sm font-semibold shadow-sm border ${badge.color}`}
                >
                  {badge.text}
                </span>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                variant="primary"
                className="px-6 py-3 text-base font-semibold shadow-lg"
                onClick={() => document.getElementById('form-dol')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Déposer une doléance maintenant
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm">
                <p className="text-sm font-semibold text-blue-700">Doléances reçues</p>
                <p className="text-2xl font-bold text-text">1 234</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 shadow-sm">
                <p className="text-sm font-semibold text-emerald-700">Problèmes résolus</p>
                <p className="text-2xl font-bold text-text">678</p>
              </div>
              <div className="rounded-2xl border border-purple-200 bg-purple-50/70 p-4 shadow-sm">
                <p className="text-sm font-semibold text-purple-700">Régions couvertes</p>
                <p className="text-2xl font-bold text-text">22</p>
              </div>
            </div>
          </div>
        </PageWrapper>
      </div>

      <PageWrapper maxWidth="md" id="form-dol">
        <Card className="mt-8 shadow-xl border-2 border-gray-100" padding="lg">
          {/* En-tête avec meilleur contraste visuel */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4 leading-tight">
              Faites entendre votre voix
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Exprimez votre doléance en quelques mots. Nous la classons automatiquement (secteur, urgence, localisation) pour la transmettre au tableau de bord présidentiel en moins de 30 secondes.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3 text-sm text-gray-600">
              <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                📍 Localisation prioritaire
              </div>
              <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                🤖 Tri et résumé automatique
              </div>
              <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                🔒 Données hébergées de façon souveraine
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Section infos personnelles avec séparateur visuel */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Vos coordonnées</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <Input
                label="Nom complet (facultatif)"
                name="name"
                type="text"
                placeholder="Ex: Rakoto Jean"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                label="Email ou Téléphone (facultatif mais recommandé pour le suivi)"
                name="contact"
                type="text"
                placeholder="Ex: rakoto@email.com ou +261 34 12 345 67"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            {/* Section localisation et secteur */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Localisation & secteur</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  📍 Région, District ou Commune <span className="text-red-500">*</span>
                </label>
                <input
                  list="regions"
                  name="location"
                  className="w-full px-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl outline-none transition-all duration-200 focus:ring-4 focus:ring-primary/20 focus:border-primary hover:border-gray-400 text-base"
                  placeholder="Ex: Analamanga, Antananarivo..."
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                <datalist id="regions">
                  {regions.map((region) => (
                    <option key={region} value={region} />
                  ))}
                </datalist>
                <p className="mt-2 text-sm text-gray-500">💡 Tapez les premières lettres pour voir les suggestions</p>
              </div>

              <Select
                label="Secteur concerné"
                name="sector"
                options={sectors}
                value={formData.sector}
                onChange={handleChange}
              />
            </div>

            {/* Section doléance */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Votre doléance</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  📝 Objet (résumez en une phrase) <span className="text-red-500">*</span>
                </label>
                <input
                  name="subject"
                  type="text"
                  className="w-full px-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl outline-none transition-all duration-200 focus:ring-4 focus:ring-primary/20 focus:border-primary hover:border-gray-400 text-base"
                  placeholder="Ex: Manque d'eau potable dans notre village"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  💬 Votre message (décrivez librement) <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  className="w-full px-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl outline-none transition-all duration-200 focus:ring-4 focus:ring-primary/20 focus:border-primary hover:border-gray-400 resize-none text-base leading-relaxed"
                  placeholder="Décrivez votre problème, suggestion ou préoccupation. Notre intelligence artificielle analysera votre message pour le classer automatiquement."
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  required
                />
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    {formData.message.length} caractères
                  </span>
                  <span className="text-gray-400">Min. 20 caractères recommandés</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  📎 Ajouter une pièce jointe (photo, PDF, audio)
                </label>
                <input
                  type="file"
                  name="file"
                  accept=".pdf,.jpg,.jpeg,.png,.mp3,.wav"
                  onChange={handleChange}
                  className="w-full cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 transition hover:border-primary"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Optionnel : aide à la preuve (max ~5MB). Non partagé publiquement.
                </p>
              </div>
            </div>

            {/* Note de confidentialité avec meilleur contraste */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 shadow-sm">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">🔒 Confidentialité & Sécurité</h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Votre message est chiffré, traité automatiquement (secteur, urgence, sentiment) puis transmis au tableau de bord national. Les données restent hébergées de façon souveraine.
                  </p>
                </div>
              </div>
            </div>

            {/* Bouton avec FORT contraste et affordance claire */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold text-lg py-5 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 border-2 border-primary/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </PageWrapper>
    </div>
  );
}
