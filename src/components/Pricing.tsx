const plans = [
  {
    name: 'Starter',
    fee: '18%',
    feeLabel: 'od prihoda',
    description: 'Za vlasnike koji žele osnovno upravljanje i više rezervacija bez velikih troškova.',
    color: 'light',
    features: [
      { label: 'Profili na Booking.com i Airbnb', included: true },
      { label: 'Kalendar i upravljanje rezervacijama', included: true },
      { label: 'Komunikacija s gostima', included: true },
      { label: 'Dinamične cijene (osnovno)', included: true },
      { label: 'Mjesečni izvještaj', included: true },
      { label: 'Profesionalne fotografije', included: false },
      { label: 'Web stranica za direktne rezervacije', included: false },
      { label: 'Organizacija čišćenja', included: false },
      { label: 'Višekanalno oglašavanje (6+ kanala)', included: false },
    ],
  },
  {
    name: 'Standard',
    fee: '22%',
    feeLabel: 'od prihoda',
    description: 'Najpopularniji paket. Kompletno upravljanje s profesionalnom prezentacijom.',
    color: 'dark',
    popular: true,
    features: [
      { label: 'Profili na Booking.com, Airbnb i više', included: true },
      { label: 'Kalendar i upravljanje rezervacijama', included: true },
      { label: 'Komunikacija s gostima 24/7', included: true },
      { label: 'Napredno dinamičko upravljanje cijenama', included: true },
      { label: 'Detaljan mjesečni izvještaj', included: true },
      { label: 'Profesionalne fotografije i opisi', included: true },
      { label: 'Web stranica za direktne rezervacije', included: true },
      { label: 'Organizacija čišćenja (Osijek / partneri)', included: true },
      { label: 'Višekanalno oglašavanje (6+ kanala)', included: false },
    ],
  },
  {
    name: 'Premium',
    fee: '26%',
    feeLabel: 'od prihoda',
    description: 'Za vile i premium objekte koji zahtijevaju vrhunsku prezentaciju i maksimalan prihod.',
    color: 'light',
    features: [
      { label: 'Profili na svim relevantnim kanalima', included: true },
      { label: 'Kalendar i upravljanje rezervacijama', included: true },
      { label: 'Komunikacija s gostima 24/7', included: true },
      { label: 'Premium dinamičko upravljanje cijenama', included: true },
      { label: 'Napredni mjesečni izvještaj s analizom', included: true },
      { label: 'Profesionalne fotografije i video', included: true },
      { label: 'Web stranica za direktne rezervacije', included: true },
      { label: 'Organizacija čišćenja (Osijek / partneri)', included: true },
      { label: 'Višekanalno oglašavanje (6+ kanala)', included: true },
    ],
  },
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
    <path d="M2.5 7l3 3 6-6" stroke="#c9a86a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
    <path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export default function Pricing() {
  return (
    <section id="paketi" className="py-24 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
            Paketi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742] mb-4">
            Transparentni uvjeti suradnje
          </h2>
          <p className="text-[#0f2742]/60 text-lg leading-relaxed">
            Bez fiksnih naknada — plaćate postotak od ostvarenog prihoda. Zarađujemo zajedno.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-200 ${
                plan.popular
                  ? 'bg-[#0f2742] border-[#0f2742] shadow-2xl scale-[1.02]'
                  : 'bg-white border-[#e8dcc8] hover:shadow-lg hover:border-[#c9a86a]/30'
              }`}
            >
              {plan.popular && (
                <div className="bg-[#c9a86a] text-white text-xs font-bold uppercase tracking-widest text-center py-2">
                  Najpopularnije
                </div>
              )}

              {/* Plan header */}
              <div className="p-7 pb-5">
                <h3
                  className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-[#0f2742]'}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    plan.popular ? 'text-[#e8dcc8]/60' : 'text-[#0f2742]/55'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Fee */}
                <div className="flex items-end gap-1.5">
                  <span
                    className={`text-5xl font-black leading-none ${
                      plan.popular ? 'text-white' : 'text-[#0f2742]'
                    }`}
                  >
                    {plan.fee}
                  </span>
                  <span
                    className={`text-sm mb-1.5 ${plan.popular ? 'text-[#e8dcc8]/50' : 'text-[#0f2742]/40'}`}
                  >
                    {plan.feeLabel}
                  </span>
                </div>
                <p
                  className={`text-xs mt-1 ${plan.popular ? 'text-[#e8dcc8]/40' : 'text-[#0f2742]/35'}`}
                >
                  Bez fiksnih naknada · bez startnog troška
                </p>
              </div>

              {/* Divider */}
              <div
                className={`mx-7 h-px ${plan.popular ? 'bg-white/10' : 'bg-[#e8dcc8]'}`}
              />

              {/* Feature list */}
              <div className="flex flex-col gap-3 p-7 flex-1">
                {plan.features.map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    {f.included ? (
                      <CheckIcon />
                    ) : (
                      <span className={plan.popular ? 'text-white/20' : 'text-[#0f2742]/20'}>
                        <XIcon />
                      </span>
                    )}
                    <span
                      className={`text-sm ${
                        f.included
                          ? plan.popular
                            ? 'text-[#e8dcc8]/80'
                            : 'text-[#0f2742]/80'
                          : plan.popular
                            ? 'text-white/25 line-through'
                            : 'text-[#0f2742]/25 line-through'
                      }`}
                    >
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-7 pb-7">
                <a
                  href="#analiza"
                  className={`w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-all duration-200 text-sm ${
                    plan.popular
                      ? 'bg-[#c9a86a] hover:bg-[#b8924f] text-white shadow-lg'
                      : 'bg-[#0f2742]/5 hover:bg-[#0f2742] hover:text-white text-[#0f2742] border border-[#0f2742]/10'
                  }`}
                >
                  Zatraži ovaj paket
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-[#0f2742]/45 mt-10 max-w-lg mx-auto">
          Niste sigurni koji paket odgovara vama?{' '}
          <a href="#analiza" className="text-[#c9a86a] font-medium hover:underline">
            Kontaktirajte nas
          </a>{' '}
          — zajedno ćemo odabrati najpovoljniji model suradnje za vaš smještaj.
        </p>
      </div>
    </section>
  );
}
