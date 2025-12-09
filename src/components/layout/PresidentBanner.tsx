import React from 'react';

export default function PresidentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg4di04aC04djh6bTAtOGg4di04aC04djh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      <div className="relative mx-auto flex max-w-7xl items-center gap-3 sm:gap-4 px-4 sm:px-6 py-6">
        <div className="flex-shrink-0">
          <img
            src="/assets/republique.png"
            alt="Repoblikan'i Madagasikara"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </div>
        <div>
          <div className="text-xs sm:text-sm text-white tracking-widest mb-1 uppercase font-semibold">
            Repoblikan'i
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight uppercase leading-tight">
            Madagasikara
          </h1>
        </div>
      </div>
    </div>
  );
}
