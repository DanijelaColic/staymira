import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stranica nije pronađena – StayMira',
  description: 'Ova stranica ne postoji. Vratite se na početnu ili nas kontaktirajte.',
  robots: 'noindex',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f2742] flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #c9a86a 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Logo */}
      <a href="/" className="flex items-center gap-2.5 mb-12 group">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#c9a86a]/40 transition-colors">
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M7 17c0-1.657 1.343-3 3-3s3 1.343 3 3"
              stroke="#c9a86a"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="text-xl font-bold text-white tracking-tight">
          Stay<span className="text-[#c9a86a]">Mira</span>
        </span>
      </a>

      {/* 404 number */}
      <p
        className="text-[10rem] sm:text-[14rem] font-black leading-none select-none pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        aria-hidden="true"
      >
        404
      </p>

      {/* Copy */}
      <div className="-mt-8 sm:-mt-16 flex flex-col items-center gap-4 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-2">
          🏖️
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Čini se da ste zalutali
        </h1>
        <p className="text-[#e8dcc8]/60 text-base max-w-sm leading-relaxed">
          Stranica koju tražite ne postoji ili je premještena. Nema razloga za brigu — vratite
          se na početnu i pronađite sve što vam treba.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M2 8L6 4M2 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Natrag na početnu
          </a>
          <a
            href="/#analiza"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-all duration-200"
          >
            Kontaktirajte nas
          </a>
        </div>

        {/* Quick links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            { label: 'Usluge', href: '/#usluge' },
            { label: 'Kako radimo', href: '/#kako-radimo' },
            { label: 'Destinacije', href: '/#destinacije' },
            { label: 'Blog', href: '/#blog' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#e8dcc8]/40 text-sm hover:text-[#c9a86a] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
