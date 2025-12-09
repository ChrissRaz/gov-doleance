import React from 'react';
import Sidebar from './Sidebar';
import PresidentBanner from './PresidentBanner';

interface PresidentLayoutProps {
  children: React.ReactNode;
}

export default function PresidentLayout({ children }: PresidentLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main
        className="relative flex-1 overflow-x-hidden flex flex-col"
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          paddingLeft: 'env(safe-area-inset-left, 0px)',
          paddingRight: 'env(safe-area-inset-right, 0px)',
        }}
      >
        <PresidentBanner />
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
