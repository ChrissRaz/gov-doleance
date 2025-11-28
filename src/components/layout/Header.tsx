import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  showNav?: boolean;
  variant?: 'admin' | 'citizen';
}

export default function Header({ showNav = false, variant = 'admin' }: HeaderProps) {
  if (variant === 'citizen' && showNav) {
    return (
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 space-y-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Link to="/portail" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                MG
              </div>
              <div>
                <h1 className="font-bold text-lg text-text">Portail Citoyen Madagascar</h1>
                <p className="text-xs text-gray-500">Services publics simplifiés</p>
              </div>
            </Link>

            <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-text">
              <Link to="/portail" className="hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/portail" className="hover:text-primary transition-colors">
                Aide
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <select
                defaultValue="fr"
                className="text-sm font-medium border border-gray-200 rounded-lg px-3 py-2 bg-white hover:border-primary/60 focus:outline-none"
                aria-label="Changer de langue"
              >
                <option value="mg">MG</option>
                <option value="fr">FR</option>
              </select>
              <Link
                to="/login"
                className="text-sm font-semibold text-text px-4 py-2 rounded-lg border border-gray-200 hover:border-primary/60 hover:text-primary transition-colors"
              >
                Connexion
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  const showBrand = showNav;

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {showBrand ? (
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-lg text-text">Présidence</h1>
                <p className="text-xs text-gray-500">Portail citoyen</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {showNav && (
            <nav className="flex items-center gap-4">
              <select
                defaultValue="mg"
                className="text-sm font-medium border border-gray-200 rounded-lg px-3 py-2 bg-white hover:border-primary/60 focus:outline-none"
                aria-label="Changer de langue"
              >
                <option value="mg">MG</option>
                <option value="fr">FR</option>
              </select>
              <Link
                to="/portail"
                className="text-sm font-medium text-text hover:text-primary transition-colors"
              >
                Portail
              </Link>
              <Link
                to="/dashboard"
                className="text-sm font-medium text-text hover:text-primary transition-colors"
              >
                Espace suivi
              </Link>
              <Link
                to="/login"
                className="text-sm font-medium text-text hover:text-primary transition-colors"
              >
                Connexion
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
