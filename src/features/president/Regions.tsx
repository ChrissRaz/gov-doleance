import React from 'react';

export default function Regions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Synthèse par région</h1>
          <p className="text-gray-600">Visualisation géographique des doléances à Madagascar</p>
        </div>

        {/* Placeholder Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
          <div className="flex flex-col items-center justify-center py-16">
            <svg className="w-24 h-24 text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Carte interactive de Madagascar</h2>
            <p className="text-gray-600 text-center max-w-md mb-6">
              Cette section affichera une carte interactive de Madagascar avec la distribution des doléances par région.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mt-8">
              {[
                { region: 'Antananarivo', count: 1245, trend: '+12%', color: 'bg-red-500' },
                { region: 'Fianarantsoa', count: 892, trend: '-5%', color: 'bg-orange-500' },
                { region: 'Toamasina', count: 756, trend: '+8%', color: 'bg-yellow-500' },
                { region: 'Mahajanga', count: 634, trend: '+3%', color: 'bg-green-500' },
                { region: 'Toliara', count: 521, trend: '-2%', color: 'bg-blue-500' },
                { region: 'Antsiranana', count: 412, trend: '+15%', color: 'bg-purple-500' },
              ].map((item) => (
                <div key={item.region} className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border-2 border-gray-200 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <h3 className="font-bold text-gray-900">{item.region}</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{item.count.toLocaleString()}</p>
                  <p className={`text-sm font-medium ${item.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                    {item.trend} ce mois
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
