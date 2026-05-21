'use client';

import { useEffect, useState } from 'react';

// Replace this phone number with the real WhatsApp business number
const WHATSAPP_NUMBER = '385912345678';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Pozdrav! Zainteresiran/a sam za besplatnu analizu mog smještaja.',
);

export default function FloatingUI() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {/* Floating CTA – mobile only, appears after scrolling past hero */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-all duration-300 ${
          scrolled ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="bg-white border-t border-[#e8dcc8] px-4 py-3 flex items-center gap-3 shadow-2xl">
          {/* WhatsApp on mobile */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 1C5.03 1 1 5.03 1 10c0 1.6.42 3.1 1.14 4.4L1 19l4.72-1.12A9 9 0 1010 1zm0 16.4a7.4 7.4 0 01-3.76-1.02l-.27-.16-2.8.66.68-2.72-.18-.28A7.4 7.4 0 1110 17.4zm4.07-5.52c-.22-.11-1.32-.65-1.52-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.17-.48.06-.22-.12-.94-.35-1.79-1.1-.66-.6-1.11-1.33-1.24-1.55-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.4.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.4-.06-.11-.5-1.2-.68-1.65-.18-.43-.37-.37-.5-.38h-.43c-.15 0-.4.06-.6.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.57 2.4 3.8 3.36.53.23.95.37 1.27.47.53.17 1.02.14 1.4.09.43-.06 1.32-.54 1.51-1.06.19-.52.19-.97.13-1.06-.06-.09-.21-.15-.43-.26z" />
            </svg>
          </a>
          <div className="flex-1">
            <p className="text-[10px] text-[#0f2742]/50 leading-none mb-0.5">Bez naplate</p>
            <p className="text-xs font-bold text-[#0f2742]">Besplatna analiza smještaja</p>
          </div>
          <a
            href="/#analiza"
            className="flex-shrink-0 bg-[#c9a86a] hover:bg-[#b8924f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Zatraži →
          </a>
        </div>
      </div>

      {/* Desktop floating buttons column – right side */}
      <div
        className={`fixed bottom-8 right-6 z-40 hidden sm:flex flex-col items-center gap-3 transition-all duration-300 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kontaktirajte nas na WhatsAppu"
          title="WhatsApp"
          className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:-translate-y-0.5"
        >
          {/* WhatsApp icon */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 1C5.03 1 1 5.03 1 10c0 1.6.42 3.1 1.14 4.4L1 19l4.72-1.12A9 9 0 1010 1zm0 16.4a7.4 7.4 0 01-3.76-1.02l-.27-.16-2.8.66.68-2.72-.18-.28A7.4 7.4 0 1110 17.4zm4.07-5.52c-.22-.11-1.32-.65-1.52-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.17-.48.06-.22-.12-.94-.35-1.79-1.1-.66-.6-1.11-1.33-1.24-1.55-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.4.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.4-.06-.11-.5-1.2-.68-1.65-.18-.43-.37-.37-.5-.38h-.43c-.15 0-.4.06-.6.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.57 2.4 3.8 3.36.53.23.95.37 1.27.47.53.17 1.02.14 1.4.09.43-.06 1.32-.54 1.51-1.06.19-.52.19-.97.13-1.06-.06-.09-.21-.15-.43-.26z" />
          </svg>
        </a>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          aria-label="Natrag na vrh"
          className="w-11 h-11 rounded-full bg-[#0f2742] hover:bg-[#1a3a5c] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:-translate-y-0.5"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </>
  );
}
