import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Sidebar, PageWrapper } from '../../components/layout';
import { PageTitle, Card } from '../../components/ui';

const stats = [
  {
    label: 'Doléances totales',
    value: '1,234',
    trend: '+12%',
    trendPositive: true,
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    bgGradient: 'from-blue-500 to-blue-600'
  },
  {
    label: 'Urgentes',
    value: '45',
    trend: '-3%',
    trendPositive: false,
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    bgGradient: 'from-red-500 to-red-600'
  },
];

// Synthèses consolidées par l'IA, regroupées par secteur
const sectorInsights = [
  {
    id: 1,
    sector: 'Santé',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    complaintsCount: 87,
    topRegion: 'Analamanga',
    summary: 'Pénurie de médicaments essentiels dans 15 centres de santé. Manque de personnel médical dans les zones rurales. Équipements obsolètes nécessitant remplacement.',
    urgency: 'high',
    trend: '+23%',
    trendPositive: false,
  },
  {
    id: 2,
    sector: 'Infrastructure',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    complaintsCount: 134,
    topRegion: 'Vakinankaratra',
    summary: 'Routes nationales 7 et 34 en état critique. 8 ponts nécessitant réparation urgente. Problèmes d\'accès à l\'eau potable dans 22 communes.',
    urgency: 'high',
    trend: '+15%',
    trendPositive: false,
  },
  {
    id: 3,
    sector: 'Éducation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    complaintsCount: 56,
    topRegion: 'Haute Matsiatra',
    summary: 'Manque de tables-bancs dans 34 écoles primaires. Pénurie d\'enseignants qualifiés en mathématiques et sciences. Infrastructures scolaires vétustes.',
    urgency: 'medium',
    trend: '+8%',
    trendPositive: false,
  },
  {
    id: 4,
    sector: 'Agriculture',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    complaintsCount: 43,
    topRegion: 'Alaotra Mangoro',
    summary: 'Difficulté d\'accès aux semences améliorées. Systèmes d\'irrigation défaillants affectant 12 périmètres rizicoles. Besoin de formation technique moderne.',
    urgency: 'medium',
    trend: '-5%',
    trendPositive: true,
  },
];

const urgencyColors: Record<string, string> = {
  high: 'text-red-700 bg-red-50 border-red-200',
  medium: 'text-yellow-700 bg-yellow-50 border-yellow-200',
  low: 'text-blue-700 bg-blue-50 border-blue-200',
};

const urgencyLabels: Record<string, string> = {
  high: 'Urgence élevée',
  medium: 'Urgence moyenne',
  low: 'Urgence faible',
};

const topRegions = [
  { name: 'Analamanga', complaints: 640, urgent: 210, trend: '+9%' },
  { name: 'Vakinankaratra', complaints: 420, urgent: 155, trend: '+12%' },
  { name: 'Haute Matsiatra', complaints: 310, urgent: 98, trend: '+6%' },
  { name: 'Androy', complaints: 260, urgent: 120, trend: '+14%' },
  { name: 'SAVA', complaints: 190, urgent: 65, trend: '+4%' },
];

const topSectors = [
  { name: 'Infrastructure', total: 980, critical: 320, variation: '+15%' },
  { name: 'Santé', total: 870, critical: 240, variation: '+12%' },
  { name: 'Éducation', total: 540, critical: 110, variation: '+8%' },
  { name: 'Énergie', total: 410, critical: 95, variation: '+6%' },
  { name: 'Eau', total: 360, critical: 140, variation: '+10%' },
];

const observationsIA = [
  'Infrastructure reste la source principale de critiques (+15% ce mois).',
  'Santé : tension sur les stocks médicamenteux en Analamanga et Androy.',
  'Énergie : coupures prolongées affectent 60k personnes, hausse des doléances.',
  'Risque pluvieux : prévoyez un pic infrastructure/électricité les 2 prochaines semaines.',
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');

export default function Dashboard() {
  const navigate = useNavigate();

  const handleSectorClick = (sectorName: string) => {
    navigate(`/dashboard/sector/${slugify(sectorName)}`);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-white to-background">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <PageWrapper maxWidth="full">
          {/* Header avec gradient et meilleure hiérarchie */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">
              Vue d'ensemble
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Suivez l'évolution des doléances en temps réel
            </p>
          </div>

          {/* Statistiques avec cartes améliorées */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      {stat.label}
                    </p>
                    <p className="text-4xl font-bold text-text mb-2">
                      {stat.value}
                    </p>
                    <div className="flex items-center gap-1">
                      <svg
                        className={`w-4 h-4 ${stat.trendPositive ? 'text-green-600' : 'text-red-600'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={stat.trendPositive ? 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' : 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6'}
                        />
                      </svg>
                      <span className={`text-sm font-bold ${stat.trendPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.trend}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">ce mois</span>
                    </div>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.bgGradient} rounded-xl flex items-center justify-center shadow-md`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Synthèses par secteur générées par IA */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-text mb-1 flex items-center gap-3">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Synthèse par secteur
                </h2>
                <p className="text-sm text-gray-600">
                  Analyse consolidée et automatisée des doléances
                </p>
              </div>
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Tous les secteurs
              </button>
            </div>

            <div className="space-y-4">
              {sectorInsights.map((insight) => (
                <div
                  key={insight.id}
                  onClick={() => handleSectorClick(insight.sector)}
                  className="border-2 border-gray-200 rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-5">
                    {/* En-tête du secteur */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white shadow-md">
                            {insight.icon}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="font-bold text-xl text-text">
                                {insight.sector}
                              </h3>
                              <span className="inline-flex items-center rounded-full border-2 border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
                                {insight.complaintsCount} doléances
                              </span>
                              <span className={`inline-flex items-center rounded-full border-2 px-3 py-1 text-xs font-bold ${urgencyColors[insight.urgency]}`}>
                                {urgencyLabels[insight.urgency]}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="font-medium">Région principale: {insight.topRegion}</span>
                              </div>
                              <span className="text-gray-400">•</span>
                              <div className="flex items-center gap-1">
                                <svg
                                  className={`w-4 h-4 ${insight.trendPositive ? 'text-green-600' : 'text-red-600'}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={insight.trendPositive ? 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6' : 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'}
                                  />
                                </svg>
                                <span className={`font-bold ${insight.trendPositive ? 'text-green-600' : 'text-red-600'}`}>
                                  {insight.trend} ce mois
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Synthèse automatique */}
                      <div className="w-full bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-200 rounded-lg p-4 mb-4">
                        <div className="flex items-start gap-2 mb-2">
                          <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <div className="flex-1">
                            <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Synthèse automatique</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {insight.summary}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Action button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSectorClick(insight.sector);
                      }}
                      className="lg:self-center px-5 py-2.5 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Analyser secteur
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistiques régionales et sectorielles (intégrées) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            <Card className="border-2 border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-text">Top régions (volume & urgences)</h3>
                <span className="text-xs text-gray-500">Mise à jour: il y a 1h</span>
              </div>
              <div className="divide-y divide-gray-100">
                {topRegions.map((r) => (
                  <div key={r.name} className="py-3 flex items-center justify-between text-sm">
                    <div>
                      <p className="font-semibold text-text">{r.name}</p>
                      <p className="text-xs text-gray-500">{r.urgent} urgences</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-bold text-text">{r.complaints}</span>
                      <span className="text-sm font-semibold text-emerald-600">{r.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-2 border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-text">Top secteurs (critiques & tendance)</h3>
                <span className="text-xs text-gray-500">Source: IA + consolidation</span>
              </div>
              <div className="divide-y divide-gray-100">
                {topSectors.map((s) => (
                  <div key={s.name} className="py-3 flex items-center justify-between text-sm">
                    <div>
                      <p className="font-semibold text-text">{s.name}</p>
                      <p className="text-xs text-gray-500">{s.critical} critiques</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-bold text-text">{s.total}</span>
                      <span className="text-sm font-semibold text-emerald-600">{s.variation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="border-2 border-gray-200 mt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-text">Observations IA</h3>
                <p className="text-sm text-gray-600">Synthèse rapide des tendances à surveiller</p>
              </div>
              <span className="text-xs text-gray-500">Automatique</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              {observationsIA.map((o, idx) => (
                <li key={idx}>• {o}</li>
              ))}
            </ul>
          </Card>
        </PageWrapper>
      </div>
    </div>
  );
}
