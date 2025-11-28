import React from 'react';
import { Link } from 'react-router-dom';
import { Header, PageWrapper } from '../../components/layout';

const popularServices = [
  { title: 'Demande de passeport', tag: 'Citoyenneté' },
  { title: 'Pharmacies de garde', tag: 'Santé' },
  { title: 'Créer sa Société', tag: 'Entreprises et industries' },
  { title: 'Les maladies non transmissibles', tag: 'Santé' },
  { title: 'Équivalence administrative de titres et diplômes', tag: 'Fonction Publique' },
];

const categories = [
  { title: 'Éducation', icon: '🏫' },
  { title: 'Fonction Publique', icon: '👥' },
  { title: 'Agriculture et Elevage', icon: '🚜' },
  { title: 'Doléances', icon: '🧭' },
  { title: 'Fiscalité', icon: '💼' },
  { title: 'Conduite et transport', icon: '🚌' },
  { title: 'État civil', icon: '🪪' },
  { title: 'Tourisme et voyage', icon: '✈️' },
  { title: 'Découverte de Madagascar', icon: '🌴' },
  { title: 'Études supérieures', icon: '🎓' },
  { title: 'Sécurité et justice', icon: '🛡️' },
  { title: 'Habitat et Foncier', icon: '🏠' },
];

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-[#e9f1f8]">
      <Header showNav />

      <PageWrapper maxWidth="xl" className="pb-16">
        {/* Barre de recherche */}
        <div className="mt-10 mb-12">
          <div className="bg-white/80 rounded-full shadow-xl px-4 py-2 flex items-center gap-3 border border-white/60">
            <input
              type="text"
              placeholder="Exemple : Obtenir son passeport..."
              className="flex-1 bg-transparent px-4 py-3 text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
            <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="7" strokeWidth="2" />
                <path d="m16 16 3.5 3.5" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Services populaires */}
        <section className="mb-14">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-text">Les services les plus populaires</h2>
            <p className="text-sm text-gray-600">Les services publics les plus recherchés par les citoyens</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {popularServices.map((service) => (
              <div
                key={service.title}
                className="bg-[#81c6f7] text-[#0b2942] rounded-2xl px-5 py-4 shadow-md min-w-[230px] flex-1 sm:flex-initial hover:translate-y-[-2px] transition-transform"
              >
                <p className="font-semibold mb-3">{service.title}</p>
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#c8efe1] text-[#0a5c46] border border-[#a6e0cf]">
                  {service.tag}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Catégories */}
        <section>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-text">Parcourir par catégorie</h2>
            <p className="text-sm text-gray-600">
              Trouver les services publics que vous souhaitez parmi les catégories ci-dessous.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-5 shadow-md flex items-center gap-4 border border-transparent hover:border-primary/30 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-full bg-[#c8efe1] flex items-center justify-center text-xl">
                  <span aria-hidden>{category.icon}</span>
                </div>
                <p className="font-semibold text-text">{category.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-14 text-center">
          <h3 className="text-xl font-semibold text-text mb-3">
            Vous avez une doléance urgente ou un suivi à effectuer ?
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/citoyens"
              className="px-5 py-3 rounded-xl bg-primary text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              Soumettre une doléance
            </Link>
            <Link
              to="/dashboard"
              className="px-5 py-3 rounded-xl bg-white text-text font-semibold shadow-md border border-gray-200 hover:border-primary/40"
            >
              Suivre les actions de l&apos;État
            </Link>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
