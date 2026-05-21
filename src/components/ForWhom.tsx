const propertyTypes = [
  {
    emoji: '🏢',
    title: 'Apartmani',
    description:
      'Gradski i primorski apartmani koji žele maksimalnu popunjenost i visoke ocjene gostiju.',
    features: ['Kratkoročni najam', 'Upravljanje kalendarom', 'Provjera gostiju'],
  },
  {
    emoji: '🏡',
    title: 'Kuće za odmor',
    description:
      'Obiteljske kuće i ruralni objekti koji trebaju kompletnu organizaciju od dolaska do odlaska.',
    features: ['Dočekivanje gostiju', 'Organizacija čišćenja', 'Sezonska optimizacija'],
    highlight: true,
  },
  {
    emoji: '🏊',
    title: 'Vile s bazenom',
    description:
      'Premium vile s bazenom za koje je prezentacija i iskustvo gostiju na prvom mjestu.',
    features: ['Luksuzna prezentacija', 'Concierge usluge', 'Dinamične premium cijene'],
  },
];

export default function ForWhom() {
  return (
    <section className="py-24 bg-[#e8dcc8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <div>
            <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
              Za koga je StayMira?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742] mb-6 leading-tight">
              Za vlasnike koji žele
              <br />
              <span className="text-[#c9a86a]">više, uz manje posla</span>
            </h2>
            <p className="text-[#0f2742]/70 text-lg leading-relaxed mb-8">
              Za vlasnike koji nemaju vremena svakodnevno odgovarati gostima, pratiti cijene,
              ažurirati kalendare, organizirati čišćenje i brinuti o oglasima.
            </p>

            {/* Pain points */}
            <ul className="flex flex-col gap-3">
              {[
                'Nema vremena za svakodnevnu komunikaciju s gostima',
                'Ne zna kako optimizirati cijene po sezoni',
                'Teško organizira čišćenje i zamjenu posteljine',
                'Želi veći prihod, ali ne zna odakle početi',
                'Živi daleko od smještaja ili često putuje',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a86a]/15 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2 2 4-4"
                        stroke="#c9a86a"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[#0f2742]/70 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – property type cards */}
          <div className="flex flex-col gap-4">
            {propertyTypes.map((pt) => (
              <div
                key={pt.title}
                className={`relative flex gap-5 p-6 rounded-2xl border transition-all duration-200 ${
                  pt.highlight
                    ? 'bg-[#0f2742] border-[#0f2742] shadow-xl'
                    : 'bg-white border-[#e8dcc8] hover:border-[#c9a86a]/40 hover:shadow-md'
                }`}
              >
                {pt.highlight && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-[#c9a86a] text-white px-2.5 py-1 rounded-full">
                    Najpopularnije
                  </span>
                )}

                <span className="text-3xl flex-shrink-0 mt-0.5">{pt.emoji}</span>

                <div className="flex-1">
                  <h3
                    className={`text-lg font-semibold mb-1.5 ${
                      pt.highlight ? 'text-white' : 'text-[#0f2742]'
                    }`}
                  >
                    {pt.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-3 ${
                      pt.highlight ? 'text-[#e8dcc8]/70' : 'text-[#0f2742]/60'
                    }`}
                  >
                    {pt.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pt.features.map((f) => (
                      <span
                        key={f}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          pt.highlight
                            ? 'bg-white/10 text-[#e8dcc8]'
                            : 'bg-[#e8dcc8]/60 text-[#0f2742]'
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
