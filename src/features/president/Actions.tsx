import React from 'react';

export default function Actions() {
  const suggestions = [
    {
      id: 1,
      priority: 'Haute',
      color: 'bg-red-500',
      borderColor: 'border-red-200',
      bgColor: 'bg-red-50',
      title: 'Programme d\'urgence - Infrastructure routière',
      sector: 'Infrastructure',
      impact: 'Très élevé',
      cost: '15M Ar',
      duration: '6 mois',
      description: 'Lancer immédiatement les travaux de réparation sur la RN2 avec 3 équipes simultanées. Priorité aux tronçons critiques identifiés dans les rapports.',
      kpis: ['2 456 doléances résolues', '12 régions impactées', 'Commerce +23%']
    },
    {
      id: 2,
      priority: 'Haute',
      color: 'bg-orange-500',
      borderColor: 'border-orange-200',
      bgColor: 'bg-orange-50',
      title: 'Recrutement massif enseignants zones rurales',
      sector: 'Éducation',
      impact: 'Élevé',
      cost: '8M Ar',
      duration: '3 mois',
      description: 'Ouvrir 250 postes d\'enseignants avec incitations financières pour zones reculées. Formation accélérée sur 3 mois.',
      kpis: ['2 891 doléances éducation', '45 écoles concernées', 'Taux scolarisation +15%']
    },
    {
      id: 3,
      priority: 'Moyenne',
      color: 'bg-blue-500',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      title: 'Programme d\'aide agricole - Fianarantsoa',
      sector: 'Agriculture',
      impact: 'Moyen',
      cost: '5M Ar',
      duration: '4 mois',
      description: 'Distribuer semences résistantes et former 1000 agriculteurs aux techniques d\'irrigation économes en eau.',
      kpis: ['1 872 doléances agriculture', '1000 agriculteurs formés', 'Rendement +20%']
    },
    {
      id: 4,
      priority: 'Moyenne',
      color: 'bg-green-500',
      borderColor: 'border-green-200',
      bgColor: 'bg-green-50',
      title: 'Renforcement sécurité zones reculées',
      sector: 'Sécurité',
      impact: 'Moyen',
      cost: '6M Ar',
      duration: '6 mois',
      description: 'Déployer 120 agents supplémentaires dans les zones touchées par les vols de bétail. Installation de postes de surveillance.',
      kpis: ['1 234 doléances sécurité', '8 régions couvertes', 'Criminalité -30%']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Suggestions d\'actions</h1>
          <p className="text-gray-600">Plans d\'action recommandés basés sur l\'analyse des doléances</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-100">
            <div className="text-sm font-medium text-gray-600 mb-1">Actions proposées</div>
            <div className="text-3xl font-bold text-gray-900">24</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-100">
            <div className="text-sm font-medium text-gray-600 mb-1">Haute priorité</div>
            <div className="text-3xl font-bold text-red-600">8</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-100">
            <div className="text-sm font-medium text-gray-600 mb-1">Budget estimé</div>
            <div className="text-3xl font-bold text-gray-900">42M Ar</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-100">
            <div className="text-sm font-medium text-gray-600 mb-1">Impact potentiel</div>
            <div className="text-3xl font-bold text-green-600">8 453</div>
          </div>
        </div>

        {/* Actions List */}
        <div className="space-y-6">
          {suggestions.map((action) => (
            <div key={action.id} className={`bg-white rounded-2xl shadow-lg border-2 ${action.borderColor} hover:shadow-xl transition-all overflow-hidden`}>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`${action.color} text-white px-3 py-1 rounded-lg text-sm font-bold`}>
                      {action.priority}
                    </div>
                    <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
                      {action.sector}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Impact estimé</div>
                    <div className="text-lg font-bold text-gray-900">{action.impact}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{action.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{action.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className={`${action.bgColor} rounded-xl p-4 border ${action.borderColor}`}>
                    <div className="text-xs font-medium text-gray-600 mb-1">Budget</div>
                    <div className="text-lg font-bold text-gray-900">{action.cost}</div>
                  </div>
                  <div className={`${action.bgColor} rounded-xl p-4 border ${action.borderColor}`}>
                    <div className="text-xs font-medium text-gray-600 mb-1">Durée</div>
                    <div className="text-lg font-bold text-gray-900">{action.duration}</div>
                  </div>
                  <div className={`${action.bgColor} rounded-xl p-4 border ${action.borderColor}`}>
                    <div className="text-xs font-medium text-gray-600 mb-1">Secteur</div>
                    <div className="text-lg font-bold text-gray-900">{action.sector}</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border-2 border-gray-100">
                  <div className="text-sm font-bold text-gray-900 mb-2">Indicateurs clés (KPIs)</div>
                  <div className="flex flex-wrap gap-2">
                    {action.kpis.map((kpi, idx) => (
                      <span key={idx} className="bg-white border-2 border-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 font-medium">
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
