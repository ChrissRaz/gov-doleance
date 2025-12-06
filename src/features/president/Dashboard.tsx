import React from 'react';

const MuiPerson = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
  </svg>
);

const MuiSearch = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5L20.49 19l-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const overview = [
  {
    label: 'Total plaintes',
    value: '12 847',
    trend: '+12%',
    trendColor: 'text-[#1db67f]',
    iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-500',
    icon: (
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: 'Cas urgents',
    value: '342',
    trend: '-4%',
    trendColor: 'text-[#e74c3c]',
    iconBg: 'bg-gradient-to-br from-red-400 to-rose-500',
    icon: (
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    label: 'Santé',
    value: '3 245',
    subtitle: 'Plaintes #1',
    trend: '+8%',
    trendColor: 'text-[#1db67f]',
    iconBg: 'bg-gradient-to-br from-pink-400 to-rose-500',
    icon: (
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: 'Éducation',
    value: '2 891',
    subtitle: 'Plaintes #2',
    trend: '-8%',
    trendColor: 'text-[#e74c3c]',
    iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    icon: (
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    label: 'Infrastructure',
    value: '2 456',
    subtitle: 'Plaintes #3',
    trend: '-15%',
    trendColor: 'text-[#e74c3c]',
    iconBg: 'bg-gradient-to-br from-orange-400 to-amber-500',
    icon: (
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: 'Antananarivo',
    value: '4 532',
    subtitle: 'Région active #1',
    trend: '+12%',
    trendColor: 'text-[#1db67f]',
    iconBg: 'bg-gradient-to-br from-purple-400 to-violet-500',
    icon: (
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const alerts = [
  {
    level: 'Urgent',
    color: '#b02d2f',
    icon: (
      <svg className="h-5 w-5 text-[#b02d2f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Pic de plaintes - Antananarivo',
    subtitle: 'Augmentation de 45% des plaintes santé cette semaine',
  },
  {
    level: 'Elevé',
    color: '#f3a63c',
    icon: (
      <svg className="h-5 w-5 text-[#f3a63c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 13h16M4 9h16M4 17h16" />
      </svg>
    ),
    title: 'Infrastructure - Toamasina',
    subtitle: 'Route nationale 2 : 234 signalements en 3 jours',
  },
  {
    level: 'Info',
    color: '#3b82f6',
    icon: (
      <svg className="h-5 w-5 text-[#3b82f6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0-8h.01M12 5a7 7 0 100 14 7 7 0 000-14z" />
      </svg>
    ),
    title: 'Tendance positive - Fianarantsoa',
    subtitle: 'Réduction de 18% des plaintes éducation',
  },
];

const actions = [
  {
    level: 'Haute',
    color: '#f97316',
    title: 'Renforcer centres de santé - Antananarivo',
    sector: 'Santé',
    text: 'Déployer 15 médecins supplémentaires et 500 kits médicaux dans les CSB les plus sollicités. Budget estimé: 450M Ar.',
  },
  {
    level: 'Urgent',
    color: '#b02d2f',
    title: 'Programme urgence routes - Toamasina',
    sector: 'Infrastructure',
    text: 'Lancer travaux réparation RN2 avec 3 équipes simultanées. Priorité aux tronçons les plus critiques identifiés.',
  },
  {
    level: 'Moyenne',
    color: '#3b82f6',
    title: 'Recrutement enseignants - Zones rurales',
    sector: 'Éducation',
    text: 'Ouvrir 250 postes d\'enseignants avec incitations financières pour zones reculées. Formation accélérée 3 mois.',
  },
  {
    level: 'Moyenne',
    color: '#3b82f6',
    title: 'Aide agricole - Fianarantsoa',
    sector: 'Agriculture',
    text: 'Distribuer semences résistantes et former 1000 agriculteurs aux techniques irrigation économes.',
  },
];

const sectors = [
  {
    title: 'Santé',
    value: '3 245',
    trend: '-12%',
    trendColor: '#b02d2f',
    desc: 'Manque de médicaments et équipements dans les centres de santé de base. Principaux problèmes: accès limité aux soins, personnel insuffisant.',
    evo: '+12%',
    icon: (
      <svg className="h-6 w-6 text-[#b02d2f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-4.5-8-10a8 8 0 0116 0c0 5.5-8 10-8 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v6" />
      </svg>
    ),
  },
  {
    title: 'Éducation',
    value: '2 891',
    trend: '-8%',
    trendColor: '#b02d2f',
    desc: 'Infrastructure scolaire défaillante et manque d\'enseignants qualifiés. Focus sur zones rurales avec classes surchargées.',
    evo: '+8%',
    icon: (
      <svg className="h-6 w-6 text-[#1f2937]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5 12.083 12.083 0 015.84 10.578L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Infrastructure',
    value: '2 456',
    trend: '-15%',
    trendColor: '#b02d2f',
    desc: 'Routes dégradées et ponts dangereux. Problèmes d\'accès dans 12 régions, impact sur transport et commerce.',
    evo: '+15%',
    icon: (
      <svg className="h-6 w-6 text-[#b02d2f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16M7 21h10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3h8" />
      </svg>
    ),
  },
  {
    title: 'Agriculture',
    value: '1 872',
    trend: '+5%',
    trendColor: '#0a9b7a',
    desc: 'Sécheresse et ravageurs affectent récoltes. Demandes d\'aide semencière et irrigation en hausse.',
    evo: '-5%',
    icon: (
      <svg className="h-6 w-6 text-[#0a9b7a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0-4 2-8 6-10a8 8 0 00-12 0c4 2 6 6 6 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 014-4 4 4 0 00-4-4 4 4 0 00-4 4 4 4 0 014 4z" />
      </svg>
    ),
  },
  {
    title: 'Sécurité',
    value: '1 234',
    trend: '-3%',
    trendColor: '#0a9b7a',
    desc: 'Vols de bétail et insécurité dans zones reculées. Demande de renforcement des forces de l\'ordre.',
    evo: '+3%',
    icon: (
      <svg className="h-6 w-6 text-[#0a9b7a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a6.5 6.5 0 0113 0" />
      </svg>
    ),
  },
  {
    title: 'Administration',
    value: '1 149',
    trend: '-2%',
    trendColor: '#b02d2f',
    desc: 'Lenteurs administratives et corruption dans services publics. Focus sur délivrance documents officiels.',
    evo: '+2%',
    icon: (
      <svg className="h-6 w-6 text-[#0f172a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 16h4" />
      </svg>
    ),
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg4di04aC04djh6bTAtOGg4di04aC04djh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Tableau Présidentiel</h1>
            <p className="text-sm text-emerald-200 mt-1 flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a7 7 0 00-7 7c0 5.67 7 11 7 11s7-5.33 7-11a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              République de Madagascar
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-105">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Personnaliser
            </button>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500 text-white shadow-lg ring-2 ring-white/20">
              <MuiPerson className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12">
        <div className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Vue d'ensemble</h2>
            <div className="text-sm text-slate-500">Dernière mise à jour: il y a 5 min</div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {overview.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm border border-slate-200/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-100/50 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`${item.iconBg} rounded-xl p-2.5 shadow-lg`}>
                      {item.icon}
                    </div>
                    <span className={`text-sm font-bold ${item.trendColor} bg-gradient-to-r ${item.trendColor === 'text-[#1db67f]' ? 'from-emerald-50 to-green-50' : 'from-red-50 to-orange-50'} px-2.5 py-1 rounded-lg`}>
                      {item.trend}
                    </span>
                  </div>
                  <p className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">{item.value}</p>
                  <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                  {item.subtitle && <p className="text-xs text-slate-500 mt-1">{item.subtitle}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Alertes */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Alertes prioritaires</h3>
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
                <MuiSearch className="h-4 w-4" /> Filtre
              </button>
            </div>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div
                  key={alert.title}
                  className="group relative overflow-hidden flex items-start justify-between rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start gap-4">
                    <div
                      className="rounded-xl p-2.5 shadow-sm"
                      style={{ backgroundColor: `${alert.color}15` }}
                    >
                      {alert.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-1">{alert.title}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{alert.subtitle}</p>
                    </div>
                  </div>
                  <span
                    className="relative shrink-0 inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold"
                    style={{ background: `${alert.color}15`, color: alert.color, border: `1.5px solid ${alert.color}40` }}
                  >
                    {alert.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Suggestions d'actions</h3>
              <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1">
                Voir plus
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              {actions.map((action, index) => (
                <div
                  key={action.title}
                  className="group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: `${action.color}40`,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b" style={{ background: `linear-gradient(to bottom, ${action.color}, ${action.color}80)` }} />
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold"
                      style={{ background: `${action.color}15`, color: action.color, border: `1.5px solid ${action.color}40` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: action.color }} />
                      {action.level}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                      </svg>
                      IA
                    </span>
                  </div>
                  <p className="text-base font-bold text-slate-900 mb-1">{action.title}</p>
                  <p className="text-xs font-semibold text-slate-500 mb-3">{action.sector}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{action.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plaintes par secteur */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Plaintes par secteur</h3>
            <button className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M3 12h18M3 20h18" />
              </svg>
              Tout voir
            </button>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <div
                key={sector.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-100/40 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-2.5 shadow-sm">
                        {sector.icon}
                      </div>
                      <p className="text-base font-bold text-slate-900">{sector.title}</p>
                    </div>
                    <span
                      className="text-sm font-bold px-2.5 py-1 rounded-lg"
                      style={{
                        color: sector.trendColor,
                        backgroundColor: `${sector.trendColor}15`
                      }}
                    >
                      {sector.trend}
                    </span>
                  </div>
                  <p className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">{sector.value}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{sector.desc}</p>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2.5">
                    <span>Évolution 30j</span>
                    <span className="text-slate-700">{sector.evo}</span>
                  </div>
                  <div className="relative h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: '65%',
                        background: `linear-gradient(to right, ${sector.trendColor}, ${sector.trendColor}cc)`
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDEzNGg4di04aC04djh6bTAtOGg4di04aC04djh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
        <div className="relative px-6 py-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <p className="text-sm font-bold text-emerald-100">Informations générées par IA</p>
          </div>
          <p className="text-xs text-emerald-200 max-w-3xl mx-auto leading-relaxed">
            Ces suggestions sont informatives et basées sur l'analyse automatique des données. Elles nécessitent une validation approfondie avant toute mise en œuvre.
          </p>
        </div>
      </div>
    </div>
  );
}
