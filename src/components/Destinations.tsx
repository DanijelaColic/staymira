import { destinations } from '@/lib/destinations';

export default function Destinations() {
  return (
    <section id="destinacije" className="py-24 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
            Gdje djelujemo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742] mb-4">
            Destinacije
          </h2>
          <p className="text-[#0f2742]/60 text-lg leading-relaxed">
            Aktivno upravljamo smještajem diljem Hrvatske, a naša usluga može se prilagoditi i
            drugim lokacijama — kontaktirajte nas.
          </p>
        </div>

        {/* Map placeholder + destination grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left – map visual placeholder */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0f2742]/5 border border-[#e8dcc8] aspect-[4/3] flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-center p-8">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="opacity-20">
                <circle cx="30" cy="30" r="26" stroke="#0f2742" strokeWidth="2" />
                <path
                  d="M10 30c0-11.046 8.954-20 20-20s20 8.954 20 20"
                  stroke="#0f2742"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 30c5 2 9-4 14-2s8 6 12 5 7-5 14-3"
                  stroke="#c9a86a"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="30" cy="22" r="3" fill="#c9a86a" />
                <circle cx="20" cy="35" r="2.5" fill="#0f2742" className="opacity-40" />
                <circle cx="40" cy="32" r="2.5" fill="#0f2742" className="opacity-40" />
                <circle cx="25" cy="42" r="2.5" fill="#0f2742" className="opacity-40" />
              </svg>
              <p className="text-[#0f2742]/40 text-sm">
                Karta destinacija
                <br />
                <span className="text-xs opacity-60">Zamijenite s interaktivnom kartom</span>
              </p>
            </div>
          </div>

          {/* Right – destination cards */}
          <div className="flex flex-col gap-4">
            {/* Legend */}
            <div className="flex flex-wrap gap-3 mb-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c9a86a]" />
                <span className="text-xs text-[#0f2742]/60">Puni servis (upravljanje + čišćenje)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0f2742]/20" />
                <span className="text-xs text-[#0f2742]/60">Property management</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {destinations.map((dest) => (
                <a
                  key={dest.slug}
                  href={`/destinacije/${dest.slug}`}
                  className={`relative flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                    dest.fullService
                      ? 'bg-[#0f2742] border-[#0f2742] text-white shadow-md ring-2 ring-[#c9a86a]/40'
                      : dest.popular
                        ? 'bg-[#0f2742]/90 border-[#0f2742] text-white shadow-md'
                        : 'bg-white border-[#e8dcc8] text-[#0f2742] hover:border-[#c9a86a]/40'
                  }`}
                >
                  {/* Badge: Puni servis ili Top */}
                  {dest.fullService ? (
                    <span className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-wider bg-[#c9a86a] text-white px-1.5 py-0.5 rounded-full">
                      Puni servis
                    </span>
                  ) : dest.popular ? (
                    <span className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-wider bg-white/20 text-white px-1.5 py-0.5 rounded-full">
                      Top
                    </span>
                  ) : null}

                  <span className="text-2xl flex-shrink-0">{dest.emoji}</span>
                  <div>
                    <p
                      className={`font-semibold text-sm ${
                        dest.fullService || dest.popular ? 'text-white' : 'text-[#0f2742]'
                      }`}
                    >
                      {dest.name}
                    </p>
                    <p
                      className={`text-[10px] mt-0.5 ${
                        dest.fullService || dest.popular ? 'text-[#e8dcc8]/60' : 'text-[#0f2742]/45'
                      }`}
                    >
                      {dest.fullService ? 'Upravljanje + čišćenje' : 'Property management'}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Other locations note */}
        <p className="mt-8 text-center text-sm text-[#0f2742]/50 bg-white border border-[#e8dcc8] rounded-xl px-6 py-4 max-w-xl mx-auto">
          Vaš smještaj je na drugoj lokaciji?{' '}
          <a href="#analiza" className="text-[#c9a86a] font-medium hover:underline">
            Kontaktirajte nas
          </a>{' '}
          — uslugu prilagođavamo i novim destinacijama.
        </p>
      </div>
    </section>
  );
}
