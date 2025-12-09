import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const MuiPerson = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
  </svg>
);

interface SidebarItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  badge?: string;
}

const menuItems: SidebarItem[] = [
  {
    label: 'Vue d\'ensemble',
    path: '/president/dashboard',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    label: 'Liste des doléances',
    path: '/president/complaints',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    label: 'Suggestions d\'actions',
    path: '/president/actions',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    label: 'Synthèse par région',
    path: '/president/regions',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    label: 'Synthèse par secteur',
    path: '/president/sectors',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  },
  {
    label: 'Paramètres',
    path: '/president/settings',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed z-50 p-3 bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-primary/30 transition-all"
        style={{
          top: 'calc(1rem + env(safe-area-inset-top, 0px))',
          right: 'calc(1rem + env(safe-area-inset-right, 0px))',
        }}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <aside className={classNames(
        'fixed lg:sticky inset-y-0 lg:top-0 left-0 z-40 w-72 bg-white border-r-2 border-gray-200 h-screen shadow-lg transform transition-transform duration-300 ease-in-out',
        'lg:flex lg:flex-col lg:translate-x-0',
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="h-full overflow-y-auto p-6 flex flex-col">
          {/* Navigation */}
          <div>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">
              Navigation
            </h2>
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={classNames(
                      'flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 border-2',
                      isActive
                        ? 'bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-bold border-primary/30 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-text border-transparent hover:border-gray-200 font-medium'
                    )}
                  >
                    <div className={classNames(
                      'flex-shrink-0',
                      isActive ? 'text-primary' : 'text-gray-500'
                    )}>
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Actions rapides - Mobile */}
          <div className="mt-8 lg:mt-auto">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">
              Actions rapides
            </h2>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white shadow-sm hover:border-primary/40 transition-all duration-200">
                <div className="w-5 h-5 text-gray-700">
                  <MuiPerson className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
