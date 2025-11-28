import React from 'react';
import { Link } from 'react-router-dom';
import { Header, PageWrapper } from '../../components/layout';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header showNav variant="citizen" />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-green-500/10" />

        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

        <PageWrapper maxWidth="xl" className="relative">
          <div className="py-12 md:py-20">
            {/* En-tête principale */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white border-2 border-primary/30 rounded-full px-6 py-3 mb-8 shadow-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-green-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">🇲🇬</span>
                </div>
                <span className="text-sm font-bold text-primary uppercase tracking-wide">Fandraisana feo ho an’ny vahoaka</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 leading-tight">
                Miresaha mivantana amin’ny Fiadidian’ny Repoblika
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                Zava-dehibe ny feonao amin’ny fanorenana <span className="font-bold text-green-600">Madagasikara tsara kokoa</span>.
                Ampitapeo mivantana ny olana sy ny soso-kevitrao.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/citoyens">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Mametraka fitarainana
                  </button>
                </Link>
              </div>
            </div>

            {/* Statistiques d'impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  number: '1,234',
                  label: 'Fitarainana voaray',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  gradient: 'from-blue-500 to-blue-600',
                  bgGradient: 'from-blue-50 to-blue-100/50'
                },
                {
                  number: '678',
                  label: 'Olana voavaha',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  gradient: 'from-green-500 to-green-600',
                  bgGradient: 'from-green-50 to-green-100/50'
                },
                {
                  number: '22',
                  label: 'Faritra voarakotra',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  gradient: 'from-purple-500 to-purple-600',
                  bgGradient: 'from-purple-50 to-purple-100/50'
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${stat.bgGradient} border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center text-white shadow-md`}>
                      {stat.icon}
                    </div>
                  </div>
                  <p className="text-4xl font-bold text-text mb-2">{stat.number}</p>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Comment ça marche */}
            <div className="bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 border-2 border-gray-200 rounded-2xl p-8 md:p-12 shadow-xl mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
                  Ahoana no fiasan’izany ?
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Dingana tsotra sy mangarahara ahafahan’ny feonao tonga any amin’ny tompon’andraikitra
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: '1',
                    title: 'Alefaso ny fitarainana',
                    description: 'Fenoy ny taratasy amin’ny antsipiriany fohy. Tsotra sy haingana.',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    ),
                    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
                    iconColor: 'text-blue-600'
                  },
                  {
                    step: '2',
                    title: 'Famakafakana mandeha ho azy',
                    description: 'Rafitra IA manasokajy araka ny sehatra sy ny haavon’ny filàna maika.',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ),
                    color: 'bg-gradient-to-br from-yellow-500 to-orange-500',
                    iconColor: 'text-orange-600'
                  },
                  {
                    step: '3',
                    title: 'Fandraisana andraikitra',
                    description: 'Ny sampan-draharaha voakasika no mandinika sy mandrafitra hetsika.',
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ),
                    color: 'bg-gradient-to-br from-green-500 to-green-600',
                    iconColor: 'text-green-600'
                  }
                ].map((item) => (
                  <div key={item.step} className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-4`}>
                        {item.step}
                      </div>
                      <div className={`mb-3 ${item.iconColor}`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secteurs couverts */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  Sehatra rehetra raisina
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Na inona na inona olana taterinao dia henoinay
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Fahasalamana', icon: '🏥' },
                  { name: 'Rafitra fototra', icon: '🏗️' },
                  { name: 'Fanabeazana', icon: '📚' },
                  { name: 'Fambolena', icon: '🌾' },
                  { name: 'Herinaratra', icon: '⚡' },
                  { name: 'Rano', icon: '💧' },
                  { name: 'Fiarovana', icon: '🛡️' },
                  { name: 'Tontolo iainana', icon: '🌱' }
                ].map((sector) => (
                  <div
                    key={sector.name}
                    className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center hover:border-primary/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-3xl mb-2">{sector.icon}</div>
                    <p className="font-semibold text-text">{sector.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center mt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Prêt à faire entendre votre voix ?
              </h2>
              <Link to="/citoyens">
                <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 text-white font-bold text-lg py-5 px-10 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 mx-auto">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Déposer votre doléance maintenant
                </button>
              </Link>
            </div>
          </div>
        </PageWrapper>
      </div>
    </div>
  );
}
