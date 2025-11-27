import React from 'react';
import { Header, Sidebar, PageWrapper } from '../../components/layout';
import { PageTitle, Card } from '../../components/ui';

const kpis = [
  { label: 'Doléances reçues (30j)', value: '3 420', trend: '+12%', positive: true },
  { label: 'Critiques traitées (24h)', value: '128', trend: '+6%', positive: true },
  { label: 'Temps moyen prise en charge', value: '2h 15m', trend: '-18%', positive: true },
  { label: 'Taux d\'urgence élevée', value: '28%', trend: '+3%', positive: false },
];

const regions = [
  { name: 'Analamanga', complaints: 640, urgent: 210, trend: '+9%' },
  { name: 'Vakinankaratra', complaints: 420, urgent: 155, trend: '+12%' },
  { name: 'Haute Matsiatra', complaints: 310, urgent: 98, trend: '+6%' },
  { name: 'Androy', complaints: 260, urgent: 120, trend: '+14%' },
  { name: 'SAVA', complaints: 190, urgent: 65, trend: '+4%' },
];

const sectors = [
  { name: 'Infrastructure', total: 980, critical: 320, variation: '+15%' },
  { name: 'Santé', total: 870, critical: 240, variation: '+12%' },
  { name: 'Éducation', total: 540, critical: 110, variation: '+8%' },
  { name: 'Énergie', total: 410, critical: 95, variation: '+6%' },
  { name: 'Eau', total: 360, critical: 140, variation: '+10%' },
];

export default function Stats() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-background to-white">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <PageWrapper maxWidth="full">
          <PageTitle subtitle="Synthèse chiffrée des doléances, urgences et volumes par région et par secteur.">
            Statistiques
          </PageTitle>

          {/* KPI cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpis.map((kpi) => (
              <Card key={kpi.label} hover className="border-2 border-gray-200">
                <p className="text-sm font-semibold text-gray-600">{kpi.label}</p>
                <p className="text-3xl font-bold text-text mt-2">{kpi.value}</p>
                <div className="flex items-center gap-1 text-sm font-semibold mt-1">
                  <span className={kpi.positive ? 'text-emerald-600' : 'text-red-600'}>
                    {kpi.trend}
                  </span>
                  <span className="text-gray-500 font-normal">vs 30j</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Regions table */}
            <Card className="border-2 border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-text">Top régions (volume & urgences)</h3>
                <span className="text-xs text-gray-500">Mise à jour: il y a 1h</span>
              </div>
              <div className="divide-y divide-gray-100">
                {regions.map((r) => (
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

            {/* Sectors table */}
            <Card className="border-2 border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-text">Top secteurs (critiques & tendance)</h3>
                <span className="text-xs text-gray-500">Source: IA + consolidation</span>
              </div>
              <div className="divide-y divide-gray-100">
                {sectors.map((s) => (
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

          <Card className="border-2 border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-text">Observations IA</h3>
                <p className="text-sm text-gray-600">Synthèse rapide des tendances à surveiller</p>
              </div>
              <span className="text-xs text-gray-500">Automatique</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Infrastructure reste la source principale de critiques (+15% ce mois).</li>
              <li>• Santé : tension sur les stocks médicamenteux en Analamanga et Androy.</li>
              <li>• Énergie : coupures prolongées affectent 60k personnes, hausse des doléances.</li>
              <li>• Risque pluvieux : prévoyez un pic infrastructure/électricité les 2 prochaines semaines.</li>
            </ul>
          </Card>
        </PageWrapper>
      </div>
    </div>
  );
}
