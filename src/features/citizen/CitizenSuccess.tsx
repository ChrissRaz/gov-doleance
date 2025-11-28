import React from 'react';
import { Link } from 'react-router-dom';
import { Header, PageWrapper } from '../../components/layout';

export default function CitizenSuccess() {
  // Génère un numéro de référence simulé
  const referenceNumber = `DL-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      <Header showNav />
      <PageWrapper maxWidth="md">
        <div className="mt-8 mb-12">
          {/* Animation de succès */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4 leading-tight">
              Doléance envoyée avec succès !
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              Votre voix compte. Nous avons bien reçu votre message et notre système l'analyse en ce moment même.
            </p>
          </div>

          {/* Carte d'information principale */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl mb-6">
            {/* Numéro de référence */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 mb-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Numéro de référence</p>
                    <p className="text-xl font-bold text-blue-900">{referenceNumber}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Copier
                </button>
              </div>
              <p className="text-sm text-blue-800 mt-3">
                Conservez ce numéro pour suivre l'évolution de votre doléance
              </p>
            </div>

            {/* Prochaines étapes */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Que se passe-t-il maintenant ?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Analyse automatique',
                    description: 'Notre système classe votre doléance par secteur et niveau d\'urgence',
                    time: 'En cours',
                    color: 'bg-blue-500'
                  },
                  {
                    step: '2',
                    title: 'Transmission au ministère',
                    description: 'Votre message est transmis au ministère concerné pour traitement',
                    time: '24-48h',
                    color: 'bg-yellow-500'
                  },
                  {
                    step: '3',
                    title: 'Suivi et action',
                    description: 'Le ministère examine votre doléance et planifie les actions nécessaires',
                    time: '3-7 jours',
                    color: 'bg-green-500'
                  }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary/30 transition-colors">
                    <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold shadow-md flex-shrink-0`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-text">{item.title}</h3>
                        <span className="text-xs font-semibold text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistiques d'impact */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="font-bold text-green-900">Votre contribution fait la différence</h3>
              </div>
              <p className="text-sm text-green-800 leading-relaxed">
                Ce mois-ci, <span className="font-bold">678 doléances</span> ont déjà été résolues grâce à l'engagement de citoyens comme vous. Ensemble, nous construisons un Madagascar meilleur.
              </p>
            </div>
          </div>

          {/* Actions principales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/citoyens" className="block">
              <button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold text-base py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 border-2 border-primary/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Nouvelle doléance
              </button>
            </Link>
            <Link to="/" className="block">
              <button className="w-full bg-white text-text font-bold text-base py-4 px-6 rounded-xl shadow-md hover:shadow-lg border-2 border-gray-300 hover:border-primary/50 transition-all duration-200 flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Retour à l'accueil
              </button>
            </Link>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
