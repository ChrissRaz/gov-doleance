import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  showNav?: boolean;
}

export default function Header({ showNav = false }: HeaderProps) {
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
                <h1 className="font-bold text-lg text-text">Tableau de Bord</h1>
                <p className="text-xs text-gray-500">Pilotage Présidentiel</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {showNav && (
            <nav className="flex items-center gap-4">
              <Link
                to="/dashboard"
                className="text-sm font-medium text-text hover:text-primary transition-colors"
              >
                Dashboard
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
