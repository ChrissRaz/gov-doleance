import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

interface SidebarItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const menuItems: SidebarItem[] = [
  {
    label: 'Vue d\'ensemble',
    path: '/dashboard',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    label: 'Doléances',
    path: '/dashboard/complaints',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    label: 'Secteurs',
    path: '/dashboard/sectors',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    label: 'Paramètres',
    path: '/dashboard/settings',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex lg:flex-col w-72 bg-white border-r-2 border-gray-200 min-h-screen shadow-sm">
      <div className="p-6">
        {/* Logo et titre */}
        <div className="mb-8 pb-6 border-b-2 border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="font-bold text-base text-text">Tableau de Bord</h1>
              <p className="text-xs text-gray-600">Pilotage Présidentiel</p>
            </div>
          </div>
        </div>

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
      </div>
    </aside>
  );
}
