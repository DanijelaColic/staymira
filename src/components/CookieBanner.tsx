'use client';

import { useEffect, useState } from 'react';

const COOKIE_KEY = 'staymira_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't flash immediately on load
    const timer = setTimeout(() => {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) setVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm animate-in slide-in-from-bottom-4 duration-300"
      role="dialog"
      aria-label="Obavijest o kolačićima"
    >
      <div className="bg-[#0a1e33] border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl p-5">
        {/* Icon + title */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-xl">🍪</span>
          <h3 className="text-white font-bold text-sm">Koristimo kolačiće</h3>
        </div>

        <p className="text-[#e8dcc8]/60 text-xs leading-relaxed mb-4">
          Koristimo kolačiće kako bismo poboljšali iskustvo na stranici, analizirali promet i
          prikazali relevantne sadržaje. Vaši podaci ne dijele se s trećim stranama.{' '}
          <a href="#" className="text-[#c9a86a] hover:underline">
            Politika privatnosti
          </a>
        </p>

        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 bg-[#c9a86a] hover:bg-[#b8924f] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
          >
            Prihvati sve
          </button>
          <button
            onClick={decline}
            className="flex-1 bg-white/5 hover:bg-white/10 text-[#e8dcc8]/70 text-xs font-medium py-2.5 rounded-xl border border-white/10 transition-colors"
          >
            Samo nužni
          </button>
        </div>
      </div>
    </div>
  );
}
