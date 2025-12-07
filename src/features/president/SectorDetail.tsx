import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Header, PageWrapper } from '../../components/layout';
import { Badge } from '../../components/ui';

// Données simulées - à remplacer par API
const sectorData: Record<string, any> = {
  'sante': {
    name: 'Santé',
    complaintsCount: 87,
    problemsCount: 3,
    topRegion: 'Analamanga',
    urgency: 'high',
    trend: '+23%',
    trendPositive: false,
    summary: 'Le secteur de la santé fait face à plusieurs défis majeurs nécessitant une intervention urgente. Les zones rurales sont particulièrement affectées.',
    problems: [
      {
        id: '1',
        title: 'Pénurie de médicaments essentiels',
        complaintsCount: 45,
        regions: ['Analamanga', 'Vakinankaratra', 'Haute Matsiatra'],
        urgency: 'high',
        status: 'pending',
        summary: '15 centres de santé rapportent des ruptures de stock de médicaments essentiels (antibiotiques, antidiabétiques, antipaludéens). Impact sur 12,000 patients estimés.',
        trend: '+35%',
      },
      {
        id: '2',
        title: 'Manque de personnel médical qualifié',
        complaintsCount: 28,
        regions: ['Alaotra Mangoro', 'Diana', 'Atsimo Andrefana'],
        urgency: 'high',
        status: 'in_progress',
        summary: 'Zones rurales avec ratio 1 médecin pour 15,000 habitants (vs norme OMS 1/1,000). 8 postes de santé sans médecin depuis 6+ mois.',
        trend: '+18%',
        assignedTo: 'Ministère de la Santé',
      },
      {
        id: '3',
        title: 'Équipements médicaux obsolètes',
        complaintsCount: 14,
        regions: ['Vatovavy Fitovinany', 'Menabe'],
        urgency: 'medium',
        status: 'pending',
        summary: '6 hôpitaux avec équipements radiologie/échographie non fonctionnels. Patients référés vers capitale avec coûts transport prohibitifs.',
        trend: '+12%',
      },
    ],
  },
  'infrastructure': {
    name: 'Infrastructure',
    complaintsCount: 134,
    problemsCount: 4,
    topRegion: 'Vakinankaratra',
    urgency: 'high',
    trend: '+15%',
    trendPositive: false,
    summary: 'Les infrastructures routières et d\'accès à l\'eau nécessitent des interventions urgentes dans plusieurs régions.',
    problems: [
      {
        id: '4',
        title: 'Routes nationales en état critique',
        complaintsCount: 56,
        regions: ['Vakinankaratra', 'Haute Matsiatra', 'Amoron i Mania'],
        urgency: 'high',
        status: 'in_progress',
        summary: 'RN7 et RN34 avec 45km de tronçons dangereusement dégradés. 12 accidents graves en 3 mois. Commerce et transport scolaire perturbés.',
        trend: '+28%',
        assignedTo: 'Ministère des Travaux Publics',
      },
      {
        id: '5',
        title: 'Ponts nécessitant réparation urgente',
        complaintsCount: 34,
        regions: ['Vakinankaratra', 'Alaotra Mangoro'],
        urgency: 'high',
        status: 'pending',
        summary: '8 ponts avec structure compromise. 3 fermés à circulation, isolant 15 villages. Saison pluies aggrave risques.',
        trend: '+42%',
      },
      {
        id: '6',
        title: 'Accès à l\'eau potable déficient',
        complaintsCount: 32,
        regions: ['Androy', 'Anosy', 'Atsimo Andrefana'],
        urgency: 'high',
        status: 'pending',
        summary: '22 communes sans point d\'eau potable fonctionnel. Population dépend de sources non sécurisées. Risques sanitaires élevés.',
        trend: '+15%',
      },
      {
        id: '7',
        title: 'Électrification zones rurales',
        complaintsCount: 12,
        regions: ['Diana', 'Sava'],
        urgency: 'medium',
        status: 'pending',
        summary: '18 villages sans accès électricité. Impact sur éducation (pas d\'éclairage nocturne) et économie locale.',
        trend: '+8%',
      },
    ],
  },
  'education': {
    name: 'Éducation',
    complaintsCount: 56,
    problemsCount: 3,
    topRegion: 'Haute Matsiatra',
    urgency: 'medium',
    trend: '+8%',
    trendPositive: false,
    summary: 'Le secteur éducatif fait face à des défis d\'infrastructure et de ressources humaines qui affectent la qualité de l\'enseignement.',
    problems: [
      {
        id: '8',
        title: 'Manque de tables-bancs dans les écoles primaires',
        complaintsCount: 28,
        regions: ['Haute Matsiatra', 'Vakinankaratra', 'Analamanga'],
        urgency: 'medium',
        status: 'in_progress',
        summary: '34 écoles primaires signalent un manque critique de mobilier scolaire. Élèves contraints d\'étudier par terre ou debout.',
        trend: '+12%',
        assignedTo: 'Ministère de l\'Éducation Nationale',
      },
      {
        id: '9',
        title: 'Pénurie d\'enseignants qualifiés',
        complaintsCount: 18,
        regions: ['Atsimo Andrefana', 'Melaky', 'Menabe'],
        urgency: 'medium',
        status: 'pending',
        summary: 'Manque d\'enseignants qualifiés en mathématiques et sciences. Ratio élèves/enseignant dépasse 60/1 dans certaines zones.',
        trend: '+15%',
      },
      {
        id: '10',
        title: 'Infrastructures scolaires vétustes',
        complaintsCount: 10,
        regions: ['Boeny', 'Sofia', 'Betsiboka'],
        urgency: 'medium',
        status: 'pending',
        summary: '12 établissements avec bâtiments dangereux (toitures percées, murs fissurés). Risques pendant saison des pluies.',
        trend: '+5%',
      },
    ],
  },
  'agriculture': {
    name: 'Agriculture',
    complaintsCount: 43,
    problemsCount: 3,
    topRegion: 'Alaotra Mangoro',
    urgency: 'medium',
    trend: '-5%',
    trendPositive: true,
    summary: 'Le secteur agricole nécessite un appui technique et des investissements dans les infrastructures d\'irrigation.',
    problems: [
      {
        id: '11',
        title: 'Difficulté d\'accès aux semences améliorées',
        complaintsCount: 18,
        regions: ['Alaotra Mangoro', 'Vakinankaratra', 'Itasy'],
        urgency: 'medium',
        status: 'pending',
        summary: 'Distribution de semences améliorées insuffisante. Agriculteurs utilisent semences traditionnelles avec rendements faibles.',
        trend: '-8%',
      },
      {
        id: '12',
        title: 'Systèmes d\'irrigation défaillants',
        complaintsCount: 17,
        regions: ['Alaotra Mangoro', 'Vakinankaratra', 'Amoron i Mania'],
        urgency: 'high',
        status: 'in_progress',
        summary: '12 périmètres rizicoles avec canaux d\'irrigation non fonctionnels. Baisse de production de 40% estimée.',
        trend: '-2%',
        assignedTo: 'Ministère de l\'Agriculture',
      },
      {
        id: '13',
        title: 'Besoin de formation technique moderne',
        complaintsCount: 8,
        regions: ['Analamanga', 'Diana', 'Sava'],
        urgency: 'low',
        status: 'pending',
        summary: 'Agriculteurs demandent formations sur techniques modernes, gestion post-récolte, et accès au marché.',
        trend: '-3%',
      },
    ],
  },
};

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

const urgencyFilterOptions = [
  { value: 'all', label: 'Toutes urgences' },
  { value: 'high', label: 'Urgence élevée' },
  { value: 'medium', label: 'Urgence moyenne' },
  { value: 'low', label: 'Urgence faible' },
] as const;

const statusColors: Record<string, 'warning' | 'info' | 'success'> = {
  pending: 'warning',
  in_progress: 'info',
  resolved: 'success',
};

const statusLabels: Record<string, string> = {
  pending: 'En attente',
  in_progress: 'En cours',
  resolved: 'Résolue',
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');

export default function SectorDetail() {
  const { sectorName } = useParams<{ sectorName: string }>();
  const navigate = useNavigate();
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [urgencyFilter, setUrgencyFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [statusFilter] = useState<'all'>('all');
  const [menuOpenFor, setMenuOpenFor] = useState<string | null>(null);

  const sector = sectorData[slugify(sectorName || '')];

  if (!sector) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-background via-white to-background">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <PageWrapper maxWidth="md">
            <div className="text-center mt-20">
              <h1 className="text-2xl font-bold text-text mb-4">Secteur non trouvé</h1>
              <Link to="/dashboard" className="text-primary hover:underline">
                Retour au dashboard
              </Link>
            </div>
          </PageWrapper>
        </div>
      </div>
    );
  }

  const handleAssignProblem = (problemId: string) => {
    setSelectedProblem(problemId);
    setShowAssignModal(true);
  };

  const filteredProblems = sector.problems.filter((p: any) => {
    const matchUrgency = urgencyFilter === 'all' || p.urgency === urgencyFilter;
    return matchUrgency;
  });

  const sortedPriorities = [...sector.problems]
    .sort((a: any, b: any) => {
      const urgencyScore = { high: 3, medium: 2, low: 1 } as Record<string, number>;
      return urgencyScore[b.urgency] - urgencyScore[a.urgency] || b.complaintsCount - a.complaintsCount;
    })
    .slice(0, 3);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
    setMenuOpenFor(null);
  };

  const renderSummary = (text: string, isOpen: boolean) => {
    if (isOpen) return text;
    if (text.length <= 180) return text;
    return `${text.slice(0, 180)}…`;
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-white to-background">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <PageWrapper maxWidth="full">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-600">
            <Link to="/dashboard" className="hover:text-primary transition-colors">
              Dashboard
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-semibold text-text">{sector.name}</span>
          </nav>

          {/* Bouton retour au-dessus de la carte */}
          <div className="mb-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-5 py-2.5 bg-white text-text font-semibold rounded-lg border-2 border-gray-300 hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour
            </button>
          </div>

          {/* Header du secteur */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">
                  Secteur: {sector.name}
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {sector.summary}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Doléances</p>
                    <p className="text-3xl font-bold text-blue-900">{sector.complaintsCount}</p>
                  </div>
                  <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1">Problèmes</p>
                    <p className="text-3xl font-bold text-purple-900">{sector.problemsCount}</p>
                  </div>
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">Région principale</p>
                    <p className="text-lg font-bold text-green-900">{sector.topRegion}</p>
                  </div>
                  <div className={`border-2 rounded-xl p-4 ${sector.trendPositive ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${sector.trendPositive ? 'text-green-600' : 'text-red-600'}`}>
                      Tendance
                    </p>
                    <p className={`text-3xl font-bold ${sector.trendPositive ? 'text-green-900' : 'text-red-900'}`}>
                      {sector.trend}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Niveau 2 : Priorités critiques (IA) */}
          <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 md:p-7 shadow-lg mb-8">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                <h2 className="text-xl font-bold text-text">Priorités critiques</h2>
              </div>
              <p className="text-sm text-gray-500">Classement automatique par urgence et impact</p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {sortedPriorities.map((p: any, idx: number) => (
                <div
                  key={p.id}
                  className="rounded-xl border-2 border-gray-100 bg-gradient-to-br from-white to-orange-50/60 p-4 flex flex-col gap-2 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Priorité {idx + 1}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${urgencyColors[p.urgency]}`}>
                      {urgencyLabels[p.urgency]}
                    </span>
                  </div>
                  <p className="font-semibold text-text leading-snug">{p.title}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{renderSummary(p.summary, false)}</p>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{p.complaintsCount} doléances</span>
                    <span>{p.trend} ce mois</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filtres rapides */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-5 shadow-sm mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold text-gray-700">Filtrer par urgence :</p>
              {urgencyFilterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setUrgencyFilter(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition ${
                    urgencyFilter === option.value
                      ? 'bg-primary/10 text-primary border-primary ring-2 ring-primary/20'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary/60'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Liste des problèmes consolidés */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Problèmes consolidés ({sector.problems.length})
            </h2>

            <div className="space-y-4">
              {filteredProblems.map((problem: any) => {
                const isOpen = expanded === problem.id;
                return (
                <div
                  key={problem.id}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-start gap-3 justify-between">
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleExpand(problem.id)}
                          className="flex items-start gap-2 text-left"
                        >
                          <span className="mt-1 text-gray-500">{isOpen ? '▾' : '▸'}</span>
                          <span className="text-lg font-bold text-text">{problem.title}</span>
                        </button>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center rounded-full border-2 border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
                            {problem.complaintsCount} doléances
                          </span>
                          <span className={`inline-flex items-center rounded-full border-2 px-3 py-1.5 text-xs font-bold ${urgencyColors[problem.urgency]}`}>
                            {urgencyLabels[problem.urgency]}
                          </span>
                          {problem.assignedTo && (
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full border-2 border-green-200 flex items-center gap-1">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {problem.assignedTo}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`px-3 py-1 rounded-lg text-sm font-bold ${problem.trend.startsWith('+') ? 'text-red-700 bg-red-50' : 'text-green-700 bg-green-50'}`}>
                          {problem.trend} ce mois
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => setMenuOpenFor((prev) => (prev === problem.id ? null : problem.id))}
                            className="h-9 w-9 rounded-lg border border-gray-200 bg-white text-gray-700 hover:border-primary/60 hover:text-primary flex items-center justify-center"
                            aria-label="Actions"
                          >
                            ⋯
                          </button>
                          {menuOpenFor === problem.id && (
                            <div className="absolute right-0 z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white shadow-lg">
                              <div className="flex flex-col divide-y divide-gray-100 text-sm text-text">
                                <button
                                  className="px-4 py-3 text-left hover:bg-gray-50 text-red-700 flex items-center gap-2"
                                  onClick={() => setMenuOpenFor(null)}
                                >
                                  <span>Marquer urgent</span>
                                </button>
                                {problem.status === 'pending' && (
                                  <button
                                    className="px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-2"
                                    onClick={() => {
                                      handleAssignProblem(problem.id);
                                      setMenuOpenFor(null);
                                    }}
                                  >
                                    <span>Assigner</span>
                                  </button>
                                )}
                                {problem.status === 'in_progress' && (
                                  <button
                                    className="px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-2 text-green-700"
                                    onClick={() => setMenuOpenFor(null)}
                                  >
                                    <span>Marquer résolu</span>
                                  </button>
                                )}
                                <button
                                  className="px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-2"
                                  onClick={() => setMenuOpenFor(null)}
                                >
                                  <span>Voir doléances</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Contenu de l'accordéon - affiché seulement si isOpen */}
                    {isOpen && (
                      <>
                        {/* Synthèse automatique */}
                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-200 rounded-lg p-4">
                          <div className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <div className="flex-1">
                              <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Synthèse automatique</p>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {problem.summary}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Régions affectées */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-semibold">Régions:</span>
                          <span>{problem.regions.join(', ')}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
})}
            </div>
          </div>
        </PageWrapper>
      </div>

      {/* Modal Assignation (placeholder pour l'instant) */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-text mb-4">Assigner au ministère</h3>
            <p className="text-gray-600 mb-4">Fonctionnalité à implémenter</p>
            <button
              onClick={() => setShowAssignModal(false)}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
