const rows = [
  {
    category: 'Oglašavanje i vidljivost',
    items: [
      {
        label: 'Booking.com, Airbnb, Vrbo i ostali kanali',
        staymira: { value: 'Svi kanali, optimizirani profili', positive: true },
        solo: { value: 'Obično 1–2 kanala, bez optimizacije', positive: false },
      },
      {
        label: 'Profesionalne fotografije i opisi',
        staymira: { value: 'Uključeno', positive: true },
        solo: { value: 'Na vlastiti trošak i trud', positive: false },
      },
      {
        label: 'Web stranica s direktnim rezervacijama',
        staymira: { value: 'Izrađujemo za svakog klijenta', positive: true },
        solo: { value: 'Nema / skupo za naručiti', positive: false },
      },
    ],
  },
  {
    category: 'Upravljanje rezervacijama',
    items: [
      {
        label: 'Dinamične cijene prema sezoni i potražnji',
        staymira: { value: 'Automatski, svaki dan', positive: true },
        solo: { value: 'Ručno, rijetko, neprecizno', positive: false },
      },
      {
        label: 'Komunikacija s gostima 24/7',
        staymira: { value: 'Naš tim odgovara u roku 1h', positive: true },
        solo: { value: 'Vi osobno, i noću i vikendom', positive: false },
      },
      {
        label: 'Provjera i odabir gostiju',
        staymira: { value: 'Protokol provjere za svaku rezervaciju', positive: true },
        solo: { value: 'Bez provjere ili nasumično', positive: false },
      },
    ],
  },
  {
    category: 'Operativa i održavanje',
    items: [
      {
        label: 'Organizacija čišćenja između gostiju',
        staymira: { value: 'Koordiniramo sve, bez vašeg angažmana', positive: true },
        solo: { value: 'Vi organizirate, tražite ekipu, plaćate', positive: false },
      },
      {
        label: 'Dočekivanje gostiju i check-in',
        staymira: { value: 'Organiziramo ili automatiziramo', positive: true },
        solo: { value: 'Vi osobno ili plaćate nekoga', positive: false },
      },
      {
        label: 'Upravljanje kvarovima i hitnim situacijama',
        staymira: { value: 'Rješavamo bez uznemiravanja vlasnika', positive: true },
        solo: { value: 'Zovu vas gosti, vi tražite majstora', positive: false },
      },
    ],
  },
  {
    category: 'Transparentnost i prihod',
    items: [
      {
        label: 'Mjesečni izvještaj prihoda i troškova',
        staymira: { value: 'Detaljan PDF svaki mjesec', positive: true },
        solo: { value: 'Nema izvještaja, improvizacija', positive: false },
      },
      {
        label: 'Optimiziran prihod u sezoni i van sezone',
        staymira: { value: 'Prosječno +30–40% više od DIY pristupa', positive: true },
        solo: { value: 'Fiksne cijene, propušteni prihod', positive: false },
      },
      {
        label: 'Vaše slobodno vrijeme',
        staymira: { value: 'Potpuno slobodni, mi brinemo o svemu', positive: true },
        solo: { value: 'Sati rada tjedno, dostupnost 24/7', positive: false },
      },
    ],
  },
];

export default function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
            Usporedba
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742] mb-4">
            StayMira vs. Samostalno upravljanje
          </h2>
          <p className="text-[#0f2742]/60 text-lg leading-relaxed">
            Pogledajte što dobivate s profesionalnim upravljanjem — i što gubite bez njega.
          </p>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_220px_220px] gap-x-3 mb-4 px-1">
          <div />
          <div className="flex items-center justify-center gap-2 bg-[#0f2742] text-white text-sm font-bold py-3 px-4 rounded-xl text-center">
            <span className="text-[#c9a86a]">✦</span>
            StayMira
          </div>
          <div className="flex items-center justify-center bg-[#0f2742]/5 text-[#0f2742]/50 text-sm font-semibold py-3 px-4 rounded-xl text-center">
            Sam/a upravljam
          </div>
        </div>

        {/* Rows by category */}
        <div className="flex flex-col gap-6">
          {rows.map((group) => (
            <div key={group.category}>
              {/* Category label */}
              <p className="text-xs font-bold uppercase tracking-widest text-[#c9a86a] mb-2 pl-1">
                {group.category}
              </p>

              <div className="flex flex-col gap-1.5">
                {group.items.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_220px_220px] gap-x-3 items-stretch"
                  >
                    {/* Row label */}
                    <div className="flex items-center bg-[#f4efe6] rounded-xl px-4 py-3">
                      <span className="text-[#0f2742] text-sm font-medium">{row.label}</span>
                    </div>

                    {/* StayMira cell */}
                    <div className="flex items-center gap-2 bg-[#0f2742]/5 border border-[#0f2742]/10 rounded-xl px-3 py-3">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#0f2742] flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l2 2 3-3" stroke="#c9a86a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[#0f2742] text-xs font-medium leading-snug hidden sm:block">
                        {row.staymira.value}
                      </span>
                      <span className="text-[#0f2742] text-xs font-medium leading-snug sm:hidden">✓</span>
                    </div>

                    {/* Solo cell */}
                    <div className="flex items-center gap-2 bg-white border border-[#e8dcc8] rounded-xl px-3 py-3">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M2 2l4 4M6 2L2 6" stroke="#ef4444" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </span>
                      <span className="text-[#0f2742]/50 text-xs leading-snug hidden sm:block">
                        {row.solo.value}
                      </span>
                      <span className="text-[#0f2742]/50 text-xs leading-snug sm:hidden">✗</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#0f2742] rounded-2xl px-8 py-8 text-center">
          <div className="flex-1 text-left">
            <p className="text-white font-bold text-lg mb-1">
              Prestanite raditi posao koji mi možemo raditi umjesto vas.
            </p>
            <p className="text-[#e8dcc8]/60 text-sm">
              Besplatna analiza smještaja — bez obveza, odgovaramo u 24h.
            </p>
          </div>
          <a
            href="#analiza"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Zatraži analizu
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
