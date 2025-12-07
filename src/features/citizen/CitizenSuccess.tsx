import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper } from '../../components/layout';

const heroBackground = '/assets/hero-palace.jpeg';
const seal = '/assets/republique.png';

export default function CitizenSuccess() {
  // Génère un numéro de référence simulé
  const referenceNumber = `DL-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const [language, setLanguage] = useState('fr');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      <div className="relative isolate overflow-hidden bg-[#0d2545]">
        <div className="absolute right-6 top-5 z-10 flex items-center gap-3">
          <label htmlFor="success-language-select" className="sr-only">
            Changer de langue
          </label>
          <select
            id="success-language-select"
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
              Votre voix compte. Nous avons bien reçu votre message et il a été transmis. Vous êtes en copie du mail envoyé.
            </p>
          </div>

          {/* Statistiques d'impact */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5 shadow-md mb-6">
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

          {/* Actions principales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/citoyens" className="block">
              <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 text-white font-bold text-base py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3">
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
            <Link to="/signup" className="block">
              <button className="w-full bg-primary text-white font-bold text-base py-4 px-6 rounded-xl shadow-md hover:shadow-lg border-2 border-primary/70 hover:border-primary transition-all duration-200 flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                S'inscrire
              </button>
            </Link>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
