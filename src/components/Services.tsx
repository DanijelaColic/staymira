import type { ReactNode } from 'react';

type Service = {
  icon: ReactNode;
  title: string;
  description: string;
  serviceNote?: string;
  features?: string[];
  // highlight = renders as a full-width featured card
  highlight?: boolean;
};

const services: Service[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 10h24" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 7V4M20 7V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M8 16l2 2 4-4"
          stroke="#c9a86a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Višekanalno oglašavanje',
    description:
      'Vaš smještaj postavljamo i optimiziramo na Booking.com, Airbnb i svim relevantnim kanalima prodaje kako biste dosegnuli što više gostiju.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 10l5 7 4-5 5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="6" r="3" stroke="#c9a86a" strokeWidth="1.8" />
        <path d="M22 3v2M22 7v2M19 6h2M23 6h2" stroke="#c9a86a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Optimizacija cijena i prihoda',
    description:
      'Koristimo dinamičku cjenovnu strategiju koja prilagođava cijene prema sezoni, potražnji i lokalnoj konkurenciji — da uvijek naplatite pravu cijenu.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 6h20v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 6l10 9 10-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Komunikacija s gostima',
    description:
      'Brzi i profesionalni odgovori na sve upite i poruke gostiju — od prvog kontakta do odjave. Vaši gosti uvijek su zbrinuti.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22l2-6h12l2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 16V12a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 22h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 10h4" stroke="#c9a86a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Čišćenje i održavanje',
    description:
      'Organiziramo profesionalno čišćenje između svakog gosta i redovno održavanje smještaja, tako da uvijek izgleda besprijekorno.',
    serviceNote: 'Direktno u Osijeku · Partnerski servis za ostale lokacije',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="14" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 8v1M14 15v1M10 12h1M17 12h1" stroke="#c9a86a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Profesionalne fotografije i opisi',
    description:
      'Vaš smještaj prezentiramo na najatraktivniji način — profesionalne fotografije i privlačni opisi koji povećavaju broj klikova i rezervacija.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22V8l10-4 10 4v14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="10" y="14" width="8" height="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 14v8" stroke="#c9a86a" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Izvještaji i transparentna isplata',
    description:
      'Svaki mjesec dobivate jasan pregled rezervacija, prihoda i troškova. Bez skrivenih naknada, samo transparentni uvjeti suradnje.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 9h24" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="6" cy="6.5" r="1" fill="currentColor" />
        <circle cx="9.5" cy="6.5" r="1" fill="currentColor" />
        <circle cx="13" cy="6.5" r="1" fill="currentColor" />
        <rect x="7" y="13" width="6" height="5" rx="1" stroke="#c9a86a" strokeWidth="1.5" />
        <path d="M16 15h4M16 18h3" stroke="#c9a86a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Web stranica za direktne rezervacije',
    description:
      'Za svakog klijenta izrađujemo profesionalnu booking web stranicu smještaja — s kalendarom dostupnosti, online rezervacijom i direktnom naplatom. Gosti rezerviraju direktno kod vas, vi ne plaćate proviziju platformama.',
    features: [
      '🗓️ Online booking 24/7',
      '📱 Mobilna optimizacija',
      '📧 Automatski email/SMS podsjetnici',
      '🔄 iCal sync s Airbnb i Booking.com',
      '💳 Online plaćanje (Stripe)',
      '🌍 Višejezičnost (HR, EN, DE, IT)',
      '📸 Galerija i recenzije',
      '🔍 SEO optimizacija',
      '📅 Google Calendar sinkronizacija',
      '0% provizije na direktne rezervacije',
    ],
    serviceNote: 'Uštedite 15–25% provizije na svakoj direktnoj rezervaciji',
    highlight: true,
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
            Naše usluge
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742] mb-4">
            Što radimo za vas
          </h2>
          <p className="text-[#0f2742]/60 text-lg leading-relaxed">
            Preuzimamo sve obveze koje dolaze s kratkoročnim najmom — vi ubirate prihod, a mi
            brinemo o svemu ostalom.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) =>
            s.highlight ? (
              /* ── Featured full-width card: Web stranica ── */
              <div
                key={s.title}
                className="sm:col-span-2 lg:col-span-3 relative rounded-2xl border border-[#0f2742] bg-[#0f2742] overflow-hidden shadow-xl"
              >
                {/* Top badge */}
                <div className="absolute top-5 right-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#c9a86a] text-white px-3 py-1 rounded-full">
                    Uključeno za sve klijente
                  </span>
                </div>

                <div className="p-7 sm:p-8 grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left – title + description */}
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                      <p className="text-[#e8dcc8]/70 text-sm leading-relaxed">{s.description}</p>
                    </div>
                    {/* Savings callout */}
                    {s.serviceNote && (
                      <div className="inline-flex items-center gap-2 bg-[#c9a86a]/15 border border-[#c9a86a]/30 rounded-xl px-4 py-3 w-fit">
                        <span className="text-[#c9a86a] text-lg">💰</span>
                        <span className="text-[#c9a86a] text-sm font-semibold">{s.serviceNote}</span>
                      </div>
                    )}
                  </div>

                  {/* Right – feature grid */}
                  {s.features && (
                    <div className="grid grid-cols-2 gap-2.5">
                      {s.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5"
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                            <path
                              d="M2 6l3 3 5-5"
                              stroke="#c9a86a"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#e8dcc8]/80 text-xs">{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* ── Regular card ── */
              <div
                key={s.title}
                className="group relative flex flex-col gap-4 p-7 rounded-2xl border border-[#e8dcc8] bg-white hover:bg-[#f4efe6] hover:border-[#c9a86a]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0f2742]/5 group-hover:bg-[#0f2742] flex items-center justify-center text-[#0f2742] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  {s.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0f2742] mb-2">{s.title}</h3>
                  <p className="text-[#0f2742]/60 text-sm leading-relaxed">{s.description}</p>
                  {s.serviceNote && (
                    <p className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-medium text-[#0f2742]/40 bg-[#0f2742]/5 px-2.5 py-1 rounded-full">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M5 4v3M5 3v.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      {s.serviceNote}
                    </p>
                  )}
                </div>

                <div className="mt-auto pt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#c9a86a] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Saznaj više
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
