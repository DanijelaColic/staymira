const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10l5 5 9-9"
          stroke="#c9a86a"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'Više rezervacija',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 3v2M10 15v2M3 10h2M15 10h2M5.05 5.05l1.41 1.41M13.54 13.54l1.41 1.41M5.05 14.95l1.41-1.41M13.54 6.46l1.41-1.41"
          stroke="#c9a86a"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="10" cy="10" r="3" stroke="#c9a86a" strokeWidth="1.8" />
      </svg>
    ),
    label: 'Dinamične cijene',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M2 4h16v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
          stroke="#c9a86a"
          strokeWidth="1.8"
        />
        <path d="M2 4l8 7 8-7" stroke="#c9a86a" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    label: 'Komunikacija s gostima',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 16V9M10 16V4M16 16V11"
          stroke="#c9a86a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: 'Transparentna izvješća',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 15s1.5-4 7-4 7 4 7 4"
          stroke="#c9a86a"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="10" cy="7" r="3" stroke="#c9a86a" strokeWidth="1.8" />
      </svg>
    ),
    label: 'Čišćenje i održavanje',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f2742]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e33] via-[#0f2742] to-[#1a3a5c]" />

      {/* Decorative shapes */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #c9a86a 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #e8dcc8 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – copy */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#c9a86a]/30 rounded-full px-4 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] animate-pulse" />
              <span className="text-[#e8dcc8] text-xs font-medium tracking-wide uppercase">
                Profesionalno upravljanje smještajem
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight">
              Vaš smještaj.{' '}
              <span className="text-[#c9a86a]">Naša briga.</span>
              <br />
              Veći prihod bez stresa.
            </h1>

            <p className="text-lg text-[#e8dcc8]/80 leading-relaxed max-w-lg">
              Preuzimamo kompletno upravljanje vašim apartmanom, kućom za odmor ili vilom — od
              oglašavanja i komunikacije s gostima do čišćenja, cijena i rezervacija.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#analiza"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Zatraži besplatnu analizu
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#kako-radimo"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-3.5 rounded-full border border-white/20 hover:border-white/30 transition-all duration-200"
              >
                Kako suradnja funkcionira
              </a>
            </div>

            {/* Social proof stat strip */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold text-white">95%</p>
                <p className="text-xs text-[#e8dcc8]/60">prosječna popunjenost</p>
              </div>
              <div className="w-px bg-white/10 self-stretch" />
              <div>
                <p className="text-2xl font-bold text-white">4.9★</p>
                <p className="text-xs text-[#e8dcc8]/60">prosječna ocjena gostiju</p>
              </div>
              <div className="w-px bg-white/10 self-stretch" />
              <div>
                <p className="text-2xl font-bold text-white">100+</p>
                <p className="text-xs text-[#e8dcc8]/60">zadovoljnih vlasnika</p>
              </div>
            </div>
          </div>

          {/* Right – image placeholder + benefit pills */}
          <div className="relative">
            {/* Property image placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1a3a5c] to-[#0a1e33] aspect-[4/3]">
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-20">
                  <path
                    d="M10 40L40 12l30 28V68a4 4 0 01-4 4H14a4 4 0 01-4-4V40z"
                    stroke="#e8dcc8"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <rect x="28" y="44" width="24" height="28" rx="2" stroke="#c9a86a" strokeWidth="2.5" />
                  <path
                    d="M10 55c5-3 10 3 15 0s10-3 15 0 10 3 15 0 10-3 15 0"
                    stroke="#c9a86a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="opacity-60"
                  />
                </svg>
                <p className="text-[#e8dcc8]/40 text-sm text-center">
                  Fotografija vile / apartmana
                  <br />
                  <span className="text-xs opacity-60">Zamijenite s pravom slikom</span>
                </p>
              </div>

              {/* Floating badge – top left */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-xl px-3.5 py-2.5 shadow-lg flex items-center gap-2">
                <span className="text-lg">🏆</span>
                <div>
                  <p className="text-[10px] text-gray-500 leading-none">Prosječno povećanje</p>
                  <p className="text-sm font-bold text-[#0f2742] leading-tight">+40% prihoda</p>
                </div>
              </div>

              {/* Floating badge – bottom right */}
              <div className="absolute bottom-4 right-4 bg-[#0f2742]/90 backdrop-blur rounded-xl px-3.5 py-2.5 shadow-lg flex items-center gap-2">
                <span className="text-[#c9a86a] text-lg">★</span>
                <div>
                  <p className="text-[10px] text-[#e8dcc8]/60 leading-none">Ocjena gostiju</p>
                  <p className="text-sm font-bold text-white leading-tight">4.9 / 5.0</p>
                </div>
              </div>
            </div>

            {/* Benefit pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4">
              {benefits.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 hover:bg-white/10 transition-colors"
                >
                  <span className="flex-shrink-0">{b.icon}</span>
                  <span className="text-[#e8dcc8] text-xs font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px] fill-white">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
