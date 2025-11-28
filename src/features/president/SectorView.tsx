import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Sidebar, PageWrapper } from '../../components/layout';
import { PageTitle, Select } from '../../components/ui';

type Severity = 'critique' | 'elevee' | 'moyenne';

const sectors = [
  { value: 'all', label: 'Tous les secteurs' },
  { value: 'sante', label: 'Santé' },
  { value: 'education', label: 'Éducation' },
  { value: 'infrastructure', label: 'Infrastructure' },
  { value: 'energie', label: 'Énergie' },
  { value: 'eau', label: 'Eau' },
];

const sectorCards = [
  {
    key: 'sante',
    name: 'Santé',
    total: 345,
    urgentes: 112,
    topRegion: 'Analamanga',
    population: '120k',
    trend: '+23%',
    severity: 'critique' as Severity,
    bullets: [
      'Rupture médocs vitaux dans 15 centres (120k pers.)',
      'Manque personnel médical zones rurales',
      'Équipements obsolètes, examens différés',
    ],
  },
  {
    key: 'infrastructure',
    name: 'Infrastructure',
    total: 412,
    urgentes: 138,
    topRegion: 'Vakinankaratra',
    population: '95k',
    trend: '+15%',
    severity: 'critique' as Severity,
    bullets: [
      'RN7/RN34 : 45km dangereux, 12 accidents graves',
      '8 ponts fragiles, 15 villages isolés',
      'Eau potable déficiente dans 22 communes',
    ],
  },
  {
    key: 'education',
    name: 'Éducation',
    total: 289,
    urgentes: 54,
    topRegion: 'Haute Matsiatra',
    population: '48k',
    trend: '+8%',
    severity: 'elevee' as Severity,
    bullets: [
      'Manque d’enseignants de sciences (classes 60+)',
      'Mobilier insuffisant dans 34 écoles',
      'Bâtiments vétustes, risques saison pluvieuse',
    ],
  },
  {
    key: 'energie',
    name: 'Énergie',
    total: 188,
    urgentes: 32,
    topRegion: 'Vakinankaratra',
    population: '60k',
    trend: '+6%',
    severity: 'moyenne' as Severity,
    bullets: [
      'Coupures prolongées, hôpitaux sur groupes électrogènes',
      'Micro-réseaux instables, pertes économiques locales',
      'Zones rurales non électrifiées (18 villages)',
    ],
  },
];

const severityStyles: Record<Severity, string> = {
  critique: 'bg-red-50 text-red-700 border-red-200',
  elevee: 'bg-amber-50 text-amber-700 border-amber-200',
  moyenne: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const severityLabels: Record<Severity, string> = {
  critique: 'Critique',
  elevee: 'Urgence élevée',
  moyenne: 'Urgence moyenne',
};

export default function SectorView() {
  const [selectedSector, setSelectedSector] = React.useState('all');

  const list = sectorCards.filter(
    (s) => selectedSector === 'all' || s.key === selectedSector,
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-background to-white">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <PageWrapper maxWidth="full">
          <PageTitle subtitle="Synthèses IA par secteur, classées par gravité et impact population.">
            Vue par secteur
          </PageTitle>

          <div className="mb-6">
            <Select
              options={sectors}
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              fullWidth={false}
              className="w-full md:w-64"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {list.map((sector) => (
              <div
                key={sector.key}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-text">{sector.name}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <span className={`px-3 py-1 rounded-full border text-xs font-bold ${severityStyles[sector.severity]}`}>
                        {severityLabels[sector.severity]}
                      </span>
                      <span className="text-gray-500">Région clé : {sector.topRegion}</span>
                      <span className="text-gray-500">Population impactée : {sector.population}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-text">{sector.total}</p>
                    <p className="text-xs text-gray-500">Total doléances</p>
                    <p className="text-sm font-semibold text-red-600">{sector.trend} ce mois</p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                  <span className="px-3 py-1 rounded-full border-2 border-blue-200 bg-blue-50 text-blue-800 font-semibold">
                    {sector.urgentes} urgences
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  {sector.bullets.map((b, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
                  <span className="px-3 py-2 rounded-lg border border-gray-200 hover:border-primary/50 cursor-pointer">
                    Arbitrer / Escalader
                  </span>
                  <Link
                    to={`/dashboard/sector/${sector.key}`}
                    className="px-3 py-2 rounded-lg border border-gray-200 hover:border-primary/50 cursor-pointer inline-block"
                  >
                    Voir fiche secteur
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </PageWrapper>
      </div>
    </div>
  );
}
