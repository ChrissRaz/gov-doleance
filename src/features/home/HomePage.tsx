import React from 'react';
import { Link } from 'react-router-dom';
const heroBackground = '/assets/hero-palace.jpeg';
const seal = '/assets/republique.png';

const pillars = [
  {
    title: 'Fiable & Sécurisée',
    description: 'Vos données sont protégées.',
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4l8 4v5c0 5-3.58 8-8 8s-8-3-8-8V8l8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Transparente',
    description: 'Suivi clair de vos envois.',
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Écoute active',
    description: 'Chaque message est lu et classé.',
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
  },
];

const steps = [
  {
    title: 'Accédez au formulaire',
    description: 'Remplissez directement le formulaire en ligne, sans inscription préalable.',
    tag: 'Étape 01',
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4l-2 4h4l-2 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
      </svg>
    ),
  },
  {
    title: 'Exprimez vos besoins ou problèmes',
    description: 'Partagez votre message en toute liberté et confidentialité.',
    tag: 'Étape 02',
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8m-8 4h5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Votre doléance est traitée avec attention',
    description: 'Nos équipes analysent et classent chaque doléance par thème et priorité.',
    tag: 'Étape 03',
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Suivi des priorités et retour d’information',
    description: 'Recevez un email de confirmation avec les détails de votre doléance.',
    tag: 'Étape 04',
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
      </svg>
    ),
  },
];

const commitments = [
  {
    title: 'Confirmation par email',
    description: 'Recevez un email de confirmation avec les détails de votre doléance.',
  },
  {
    title: 'Participation citoyenne active',
    description: 'Contribuez directement aux décisions qui façonnent l’avenir de votre communauté.',
  },
  {
    title: 'Voix directe vers la Présidence',
    description: 'Vos préoccupations remontent aux plus hautes instances de l’État.',
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <div className="relative isolate overflow-hidden">
        <img
          src={heroBackground}
          alt="Palais de la Présidence"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c2143]/95 via-[#0c2143]/88 to-[#0b8a65]/75" />

        <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-28">
          <div className="mb-10 flex items-center gap-4">
            <img src={seal} alt="Armoiries de Madagascar" className="h-16 w-16 object-contain" />
            <div className="text-white">
              <p className="text-xs font-semibold tracking-[0.25em]">REPOBLIKAN’I</p>
              <p className="text-xl font-bold">MADAGASCARA</p>
            </div>
          </div>

          <div className="max-w-3xl space-y-6 text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Écrire au Président de la République de Madagascar
            </h1>
            <p className="text-lg leading-relaxed text-white/80 md:text-xl">
              Votre message peut changer les choses. Grâce à cette plateforme officielle, chaque citoyen
              peut désormais faire entendre sa voix, en toute sécurité.
            </p>
            <Link to="/citoyens" className="inline-flex">
              <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 font-semibold text-white shadow-xl shadow-emerald-900/30 transition duration-200 hover:-translate-y-0.5">
                Partager maintenant
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition duration-200 group-hover:bg-white/25">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Valeurs */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-10">
        <div className="mb-10 space-y-3 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Cette initiative renforce le lien direct entre le peuple et le sommet de l’État.
          </h2>
          <p className="text-base text-gray-600 md:text-lg">
            Elle garantit que chaque doléance reçue est analysée, catégorisée et prise en compte dans les décisions
            de gouvernance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_25px_60px_rgba(12,33,67,0.08)]"
            >
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.color}`}>
                {pillar.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Étapes */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 md:text-3xl">Comment ça marche ?</h2>
        <div className="relative z-0 mt-12">
          <div className="absolute left-9 top-0 z-0 h-full w-[3px] rounded-full bg-gradient-to-b from-emerald-500 via-emerald-400 to-teal-500 shadow-[0_0_24px_rgba(16,185,129,0.35)] md:left-1/2 md:w-[4px] md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={step.title} className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
                  {isLeft ? (
                    <>
                      <div className="relative md:pr-16">
                        <div className="mb-4 flex justify-center md:hidden">
                          <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-[0_18px_45px_rgba(16,185,129,0.3)]">
                            {step.icon}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_25px_60px_rgba(12,33,67,0.08)]">
                          <div className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                            {step.tag}
                          </div>
                          <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                          <p className="leading-relaxed text-gray-600">{step.description}</p>
                        </div>
                      </div>

                      <div className="hidden md:flex md:justify-center">
                        <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-[0_18px_45px_rgba(16,185,129,0.3)]">
                          {step.icon}
                        </div>
                      </div>

                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />

                      <div className="hidden md:flex md:justify-center">
                        <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-[0_18px_45px_rgba(16,185,129,0.3)]">
                          {step.icon}
                        </div>
                      </div>

                      <div className="relative md:pl-16 md:text-right">
                        <div className="mb-4 flex justify-center md:hidden">
                          <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-[0_18px_45px_rgba(16,185,129,0.3)]">
                            {step.icon}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_25px_60px_rgba(12,33,67,0.08)]">
                          <div className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                            {step.tag}
                          </div>
                          <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                          <p className="leading-relaxed text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-gradient-to-r from-[#0b8a65] to-[#0c2143] text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Cette initiative renforce le lien direct entre le peuple et le sommet de l’État.
            </h2>
            <p className="text-base text-white/80 md:text-lg">
              Elle garantit que chaque doléance reçue est analysée, catégorisée et prise en compte dans les décisions
              de gouvernance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {commitments.map((commitment) => (
              <div
                key={commitment.title}
                className="rounded-2xl bg-white p-6 text-gray-900 shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{commitment.title}</h3>
                <p className="text-gray-600">{commitment.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <img src={seal} alt="Armoiries de Madagascar" className="h-16 w-16 object-contain" />
            <div>
              <p className="text-xs font-semibold tracking-[0.25em]">REPOBLIKAN’I</p>
              <p className="text-xl font-bold">MADAGASCARA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
