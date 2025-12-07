import React from 'react';
import Sidebar from './Sidebar';

interface PresidentLayoutProps {
  children: React.ReactNode;
}

export default function PresidentLayout({ children }: PresidentLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
