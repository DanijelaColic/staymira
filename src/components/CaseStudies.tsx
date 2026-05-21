const cases = [
  {
    emoji: '🏊',
    label: 'Vila · Split',
    title: 'Vila Sunce, Split',
    challenge:
      'Vlasnica je samostalno upravljala vilom 2 sezone — loše fotografije, fiksna cijena cijele godine, čišćenje organizirala telefonom.',
    solution:
      'Profesionalne fotografije, dinamično upravljanje cijenama s 3× višom cijenom u peak sezoni, automatiziran check-in i stalna ekipa za čišćenje.',
    results: [
      { metric: '+52%', label: 'neto prihod' },
      { metric: '4.97★', label: 'ocjena gostiju' },
      { metric: '91%', label: 'popunjenost' },
    ],
    quote:
      '"Prva sezona s StayMira donijela mi je više novca nego dvije prethodne zajedno. I nisam jednom morala otvoriti telefon zbog gostiju."',
    author: 'Marija K., vlasnica vile',
    duration: '1 sezona',
  },
  {
    emoji: '🏛️',
    label: 'Apartman · Dubrovnik',
    title: '2-sobni apartman, Dubrovnik',
    challenge:
      'Apartman je bio oglašen samo na Bookingu s prosječnom ocjenom 4.3. Vlasnik je živio u Zagrebu i nije mogao pratiti operativu.',
    solution:
      'Postavili smo profil na Airbnb, Vrbo i direktnu booking stranicu. Dogovorena lokalna ekipa za sve i potpuna automatizacija komunikacije.',
    results: [
      { metric: '+61%', label: 'prihod u godini' },
      { metric: '4.98★', label: 'nova ocjena' },
      { metric: '0h/tjedan', label: 'vlasnikov trud' },
    ],
    quote:
      '"Živim u Zagrebu, apartman je u Dubrovniku — i funkcionira savršeno bez mog angažmana. StayMira je za mene kao imati menadžera na licu mjesta."',
    author: 'Tomislav R., vlasnik apartmana',
    duration: '8 mjeseci',
  },
  {
    emoji: '🫒',
    label: 'Kuća · Istra',
    title: 'Kuća za odmor, Istra',
    challenge:
      'Kuća je iznajmljivana samo u srpnju i kolovozu. Vlasnici nisu znali kako privući goste van sezone i prihod je bio nepredvidiv.',
    solution:
      'Proširili smo sezonu na travanj–listopad targetiranjem gostiju koji traže mir i prirodu. Novi opisi, van-sezonske cijene i promotivne kampanje.',
    results: [
      { metric: '+35%', label: 'godišnji prihod' },
      { metric: '7 mj', label: 'aktivna sezona' },
      { metric: '4.95★', label: 'ocjena gostiju' },
    ],
    quote:
      '"Nikad nisam mislila da kuća može zarađivati i u travnju. StayMira je otvorila sezonu koja mi je donijela neočekivani prihod."',
    author: 'Ana P., vlasnica kuće',
    duration: '2 sezone',
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
            Rezultati
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742] mb-4">
            Što kažu brojevi
          </h2>
          <p className="text-[#0f2742]/60 text-lg leading-relaxed">
            Stvarni primjeri vlasnika koji su povjerili smještaj StayMira upravljanju.
          </p>
        </div>

        {/* Cases */}
        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl border border-[#e8dcc8] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Top bar */}
              <div className="flex items-center gap-3 bg-[#0f2742] px-5 py-4">
                <span className="text-2xl">{c.emoji}</span>
                <div>
                  <p className="text-white font-bold text-sm">{c.title}</p>
                  <p className="text-[#c9a86a] text-xs">{c.label} · {c.duration}</p>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-4 p-5 flex-1">
                {/* Challenge */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#0f2742]/40 mb-1">
                    Izazov
                  </p>
                  <p className="text-[#0f2742]/70 text-xs leading-relaxed">{c.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#0f2742]/40 mb-1">
                    Što smo napravili
                  </p>
                  <p className="text-[#0f2742]/70 text-xs leading-relaxed">{c.solution}</p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 bg-[#0f2742]/5 rounded-xl p-3">
                  {c.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <p className="text-lg font-black text-[#0f2742] leading-none">{r.metric}</p>
                      <p className="text-[9px] text-[#0f2742]/50 mt-0.5">{r.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-auto pt-4 border-t border-[#e8dcc8]">
                  <p className="text-[#0f2742]/65 text-xs leading-relaxed italic mb-2">
                    {c.quote}
                  </p>
                  <p className="text-[10px] font-semibold text-[#c9a86a]">{c.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#analiza"
            className="inline-flex items-center gap-2 bg-[#0f2742] hover:bg-[#1a3a5c] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
          >
            Želim ovakve rezultate za moj smještaj
          </a>
        </div>
      </div>
    </section>
  );
}
