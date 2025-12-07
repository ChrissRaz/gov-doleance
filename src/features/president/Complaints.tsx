import React, { useMemo, useState } from 'react';
import { Header, PageWrapper } from '../../components/layout';
import { Input, Select, Badge } from '../../components/ui';

type Urgency = 'high' | 'medium' | 'low';

const urgencyLabels: Record<Urgency, string> = {
  high: 'Urgence élevée',
  medium: 'Urgence moyenne',
  low: 'Urgence faible',
};

const urgencyColors: Record<Urgency, string> = {
  high: 'bg-red-50 text-red-700 border-red-200',
  medium: 'bg-amber-50 text-amber-700 border-amber-200',
  low: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const complaints = [
  {
    id: 'DL-2024-1087',
    title: 'Tronçons RN7 dangereux après fortes pluies',
    sector: 'Infrastructure',
    region: 'Haute Matsiatra',
    urgency: 'high' as Urgency,
    date: '2024-11-02',
    population: '120k',
    summary: 'Glissements de terrain, routes coupées entre Fianarantsoa et Ihosy, évacuations scolaires retardées.',
  },
  {
    id: 'DL-2024-1042',
    title: 'Manque d’eau potable dans 3 communes',
    sector: 'Eau',
    region: 'Androy',
    urgency: 'high' as Urgency,
    date: '2024-11-01',
    population: '45k',
    summary: 'Forages à sec, camions-citernes insuffisants, risque sanitaire choléra.',
  },
  {
    id: 'DL-2024-0998',
    title: 'Pénurie d’enseignants de mathématiques',
    sector: 'Éducation',
    region: 'Analamanga',
    urgency: 'medium' as Urgency,
    date: '2024-10-29',
    population: '18k',
    summary: 'Taux d’absentéisme élevé, classes doublées, baisse des résultats au brevet blanc.',
  },
  {
    id: 'DL-2024-0951',
    title: 'Coupures d’électricité prolongées',
    sector: 'Énergie',
    region: 'Vakinankaratra',
    urgency: 'medium' as Urgency,
    date: '2024-10-27',
    population: '60k',
    summary: 'Micro-réseaux instables, pertes pour les petites entreprises, hôpitaux sur groupes électrogènes.',
  },
  {
    id: 'DL-2024-0910',
    title: 'Retards d’état civil',
    sector: 'Administration',
    region: 'Boeny',
    urgency: 'low' as Urgency,
    date: '2024-10-25',
    population: '8k',
    summary: 'Files d’attente >4h, manque d’agents, retards de délivrance d’actes de naissance.',
  },
];

const sectorOptions = [
  { value: 'all', label: 'Tous secteurs' },
  { value: 'Infrastructure', label: 'Infrastructure' },
  { value: 'Eau', label: 'Eau' },
  { value: 'Éducation', label: 'Éducation' },
  { value: 'Énergie', label: 'Énergie' },
  { value: 'Administration', label: 'Administration' },
];

const regionOptions = [
  { value: 'all', label: 'Toutes régions' },
  { value: 'Haute Matsiatra', label: 'Haute Matsiatra' },
  { value: 'Androy', label: 'Androy' },
  { value: 'Analamanga', label: 'Analamanga' },
  { value: 'Vakinankaratra', label: 'Vakinankaratra' },
  { value: 'Boeny', label: 'Boeny' },
];

const urgencyFilters: { value: Urgency | 'all'; label: string }[] = [
  { value: 'all', label: 'Toutes urgences' },
  { value: 'high', label: 'Urgence élevée' },
  { value: 'medium', label: 'Urgence moyenne' },
  { value: 'low', label: 'Urgence faible' },
];

export default function Complaints() {
  const [search, setSearch] = useState('');
  const [sector, setSector] = useState('all');
  const [region, setRegion] = useState('all');
  const [urgency, setUrgency] = useState<Urgency | 'all'>('all');

  const filtered = useMemo(() => {
    return complaints.filter((item) => {
      const matchesSearch =
        search.trim().length === 0 ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase());
      const matchesSector = sector === 'all' || item.sector === sector;
      const matchesRegion = region === 'all' || item.region === region;
      const matchesUrgency = urgency === 'all' || item.urgency === urgency;
      return matchesSearch && matchesSector && matchesRegion && matchesUrgency;
    });
  }, [search, sector, region, urgency]);

  return (
    <div className="flex-1 bg-gradient-to-b from-background to-white">
      <Header />
      <PageWrapper maxWidth="full">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-text">Doléances consolidées</h1>
            <p className="text-gray-600">
              Filtrez par urgence, secteur, région pour isoler les cas critiques à arbitrer.
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[220px]">
              <Input
                placeholder="Rechercher (id, titre, résumé)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select
              options={sectorOptions}
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              fullWidth={false}
              className="w-full md:w-48"
            />
            <Select
              options={regionOptions}
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              fullWidth={false}
              className="w-full md:w-48"
            />
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-5 shadow-sm mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold text-gray-700">Filtrer par urgence :</p>
              {urgencyFilters.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setUrgency(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition ${
                    urgency === option.value
                      ? 'bg-primary/10 text-primary border-primary ring-2 ring-primary/20'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary/60'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white border-2 border-gray-200 rounded-2xl p-5 shadow-sm hover:border-primary/30 hover:shadow-md transition"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-gray-500">{item.id}</p>
                    <h3 className="text-lg font-bold text-text">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold">{item.sector}</span>
                      <span className="text-gray-400">•</span>
                      <span>{item.region}</span>
                      <span className="text-gray-400">•</span>
                      <span>{item.population} pers. touchées</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-3 py-1 text-xs font-bold ${urgencyColors[item.urgency]}`}>
                      {urgencyLabels[item.urgency]}
                    </span>
                    <Badge>{item.date}</Badge>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.summary}</p>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="text-center text-gray-500 border-2 border-dashed border-gray-200 rounded-2xl py-10">
                Aucune doléance ne correspond aux filtres sélectionnés.
              </div>
            )}
          </div>
        </PageWrapper>
    </div>
  );
}
