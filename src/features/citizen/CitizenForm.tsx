import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, Input } from '../../components/ui';
import Select from '../../components/ui/Select';

const heroBackground = '/assets/hero-palace.jpeg';
const seal = '/assets/republique.png';

// Régions de Madagascar pour auto-complétion
const regions = [
  'Analamanga', 'Vakinankaratra', 'Itasy', 'Bongolava',
  'Haute Matsiatra', 'Amoron i Mania', 'Vatovavy Fitovinany', 'Atsimo Atsinanana', 'Ihorombe', 'Atsimo Andrefana',
  'Androy', 'Anosy', 'Menabe', 'Diana', 'Sava', 'Sofia', 'Boeny', 'Betsiboka', 'Melaky', 'Alaotra Mangoro', 'Atsinanana', 'Analanjirofo'
];

const categories = [
  { value: 'autre', label: 'Autre' },
  { value: 'sante', label: 'Santé' },
  { value: 'education', label: 'Éducation' },
  { value: 'eau', label: 'Eau et assainissement' },
  { value: 'securite', label: 'Sécurité' },
  { value: 'routes', label: 'Infrastructures et routes' },
  { value: 'energie', label: 'Énergie' },
  { value: 'etat-civil', label: 'Administration / état civil' },
];

export default function CitizenForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    companyName: '',
    country: '',
    regionProvince: '',
    cityCommune: '',
    category: '',
    type: 'non-juridique' as string,
    subject: '',
    message: '',
    file: null as File | null,
    consent: false,
  });
  const [applicantType, setApplicantType] = useState<'particulier' | 'entreprise'>('particulier');
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [language, setLanguage] = useState('fr');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    navigate('/citoyens/success');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files, type, checked } = e.target as HTMLInputElement;
    if (files) {
      setFormData({ ...formData, [name]: files[0] ?? null });
    } else if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('La géolocalisation n’est pas supportée par ce navigateur.');
      return;
    }
    setLocationError(null);
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setFormData((prev) => ({
          ...prev,
          regionProvince: `Position détectée (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`,
        }));
        setLocationLoading(false);
      },
      (err) => {
        setLocationError('Impossible de récupérer la position. Vérifiez les permissions.');
        console.error(err);
        setLocationLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <div className="relative isolate overflow-hidden bg-[#0d2545]">
        <div className="absolute right-6 top-5 z-10 flex items-center gap-3">
          <label htmlFor="citizen-language-select" className="sr-only">
            Changer de langue
          </label>
          <select
            id="citizen-language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-sm font-semibold text-white border border-white/40 rounded-lg px-3 py-2 bg-white/10 backdrop-blur-sm hover:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <option className="text-gray-900" value="mg">MG</option>
            <option className="text-gray-900" value="fr">FR</option>
            <option className="text-gray-900" value="en">EN</option>
          </select>
          <Link
            to="/portail"
            className="text-sm font-semibold text-white border border-white/40 rounded-lg px-3 py-2 bg-white/10 backdrop-blur-sm hover:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            Aide
          </Link>
        </div>
        <img src={heroBackground} alt="Palais" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2545]/92 via-[#0d2545]/88 to-[#0b8a65]/75" />
        <div className="relative mx-auto flex max-w-6xl items-center gap-4 px-6 py-10 text-white">
          <img src={seal} alt="Armoirie" className="h-16 w-16 object-contain" />
          <div>
            <p className="text-sm font-semibold tracking-[0.25em]">REPOBLIKAN’I</p>
            <p className="text-2xl font-bold">MADAGASCARA</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 pt-10">
        <div className="-mt-6 mb-6 inline-flex rounded-2xl bg-white px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <Link to="/" className="flex items-center gap-3 text-base font-semibold text-gray-800">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
            Retour
          </Link>
        </div>

        <Card className="border border-gray-200 bg-white shadow-[0_24px_60px_rgba(12,33,67,0.08)]" padding="lg">
          <div className="mb-6 space-y-2">
            <p className="text-xs font-semibold text-gray-800">Doléance Citoyen</p>
            <p className="text-sm text-gray-600">
              Partagez votre doléance en quelques minutes. Tous les champs marqués d’un * sont obligatoires.
            </p>
          </div>

          <div className="mb-6 flex gap-2">
            {(['particulier', 'entreprise'] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setApplicantType(type)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                  applicantType === type
                    ? 'bg-[#e8eef7] text-[#0d2545]'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {type === 'particulier' ? 'Particulier' : 'Entreprise'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {applicantType === 'entreprise' && (
              <Input
                label="Nom de l'entreprise *"
                name="companyName"
                type="text"
                placeholder="Nom de l'entreprise"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            )}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                label="Nom *"
                name="lastName"
                type="text"
                placeholder="Nom"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <Input
                label="Prénom *"
                name="firstName"
                type="text"
                placeholder="Prénom"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                label="Email *"
                name="email"
                type="email"
                placeholder="adresse@mail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                label="Téléphone (facultatif)"
                name="phone"
                type="tel"
                placeholder="+261 ..."
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-800">Localisation</p>
                <button
                  type="button"
                  onClick={handleUseLocation}
                  disabled={locationLoading}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-600 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  {locationLoading ? 'Localisation en cours...' : 'Utiliser ma position'}
                </button>
              </div>
              {locationError && <p className="text-xs text-red-600">{locationError}</p>}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr,1fr,1fr]">
                <Input
                  label="Pays"
                  name="country"
                  type="text"
                  placeholder="Pays"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
                <Select
                  label="Région / Province / État"
                  name="regionProvince"
                  options={[{ value: '', label: 'Région / Province / État' }, ...regions.map((r) => ({ value: r, label: r }))]}
                  value={formData.regionProvince}
                  onChange={handleChange}
                />
                <Input
                  label="Ville / Commune"
                  name="cityCommune"
                  type="text"
                  placeholder="Ville / Commune"
                  value={formData.cityCommune}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Select
                label="Type de doléance"
                name="type"
                options={[
                  { value: 'juridique', label: 'Juridique' },
                  { value: 'non-juridique', label: 'Non juridique' },
                  { value: 'conseille', label: 'Conseille' },
                  { value: 'autre', label: 'Autre' },
                ]}
                value={formData.type}
                onChange={handleChange}
              />
              <Select
                label="Catégorie"
                name="category"
                options={[{ value: '', label: 'Catégorie' }, ...categories]}
                value={formData.category}
                onChange={handleChange}
              />
            </div>

            <Input
              label="Sujet"
              name="subject"
              type="text"
              placeholder="Ohatra: Tsy ampy ny tetezana aty aminay"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800">
                Message *
              </label>
              <textarea
                name="message"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#0d2545] focus:ring-2 focus:ring-[#0d2545]/15"
                placeholder="Hazavao fohifohy ny olana na fangatahana..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800">Pièce jointe</label>
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 hover:border-[#0d2545]">
                <svg className="h-5 w-5 text-[#0d2545]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span>Photo ou PDF (max 10 Mo)</span>
                <input
                  type="file"
                  name="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>

            <div className="space-y-3 rounded-lg bg-gray-50 px-4 py-3 text-xs text-gray-700">
              <label className="flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                  required
                />
                <span>
                  J’accepte que mes données personnelles soient utilisées pour traiter ma doléance conformément à la politique de confidentialité.
                  Mes informations resteront confidentielles et ne seront utilisées qu’à des fins de traitement de ma demande.*
                </span>
              </label>
              <p className="text-xs text-gray-500">* Champs obligatoires</p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-[#273445] px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1f2a38] focus:outline-none focus:ring-2 focus:ring-[#0d2545]/50"
              >
                Envoyer
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
