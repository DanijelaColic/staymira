'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Usluge', href: '#usluge' },
  { label: 'Kako radimo', href: '#kako-radimo' },
  { label: 'Zašto mi', href: '#zasto-mi' },
  { label: 'Destinacije', href: '#destinacije' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy — tracks which nav section is currently visible
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="StayMira – početna">
            {/* Minimalist icon: house with a wave */}
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0f2742] group-hover:bg-[#c9a86a] transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                {/* small wave at bottom */}
                <path
                  d="M7 17c0-1.657 1.343-3 3-3s3 1.343 3 3"
                  stroke="#c9a86a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-[#0f2742]' : 'text-white'
              }`}
            >
              Stay<span className="text-[#c9a86a]">Mira</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200 hover:text-[#c9a86a] ${
                    isActive
                      ? 'text-[#c9a86a]'
                      : scrolled
                        ? 'text-[#0f2742]'
                        : 'text-white/90'
                  }`}
                >
                  {link.label}
                  {/* Active underline dot */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#c9a86a]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#analiza"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#c9a86a] hover:bg-[#b8924f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Besplatna analiza
            </a>

            {/* Hamburger – mobile */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-[#0f2742] hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Otvori navigacijski izbornik"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#0f2742] text-base font-medium py-2.5 px-3 rounded-lg hover:bg-[#e8dcc8]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#analiza"
              onClick={() => setMenuOpen(false)}
              className="mt-3 bg-[#c9a86a] text-white text-sm font-semibold py-3 px-4 rounded-full text-center hover:bg-[#b8924f] transition-colors"
            >
              Besplatna analiza smještaja
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
