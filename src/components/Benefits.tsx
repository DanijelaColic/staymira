const benefits = [
  {
    icon: '📍',
    title: 'Lokalno znanje',
    description:
      'Poznajemo tržište kratkoročnog najma u Hrvatskoj — sezonu, navike gostiju, konkurenciju i regionalne posebnosti koje utječu na popunjenost.',
  },
  {
    icon: '🤝',
    title: 'Osobni pristup',
    description:
      'Niste samo broj u sustavu. Svaki vlasnik ima svog zaduženog menadžera koji poznaje vaš smještaj i vaše ciljeve.',
  },
  {
    icon: '📋',
    title: 'Transparentni uvjeti',
    description:
      'Jasni ugovorni uvjeti, bez skrivenih naknada. Znate točno što plaćate, što dobivate i kako se formira vaš prihod.',
  },
  {
    icon: '📈',
    title: 'Fokus na prihod i recenzije',
    description:
      'Naš cilj je maksimizirati vaš prihod i ocjene gostiju — jer naša zarada ovisi o vašem uspjehu. Interesi su nam usklađeni.',
  },
  {
    icon: '😌',
    title: 'Manje stresa za vlasnika',
    description:
      'Telefon ne zvoni noću zbog problema s gostima, ne brinete o kalendaru ni o čišćenju. Mi smo tu umjesto vas.',
  },
  {
    icon: '📸',
    title: 'Profesionalna prezentacija',
    description:
      'Profesionalne fotografije, privlačni opisi i optimizirani profili na platformama koji vaš smještaj ističu među konkurencijom.',
  },
  {
    icon: '🌐',
    title: 'Vaša vlastita booking stranica',
    description:
      'Svaki klijent dobiva profesionalnu web stranicu s direktnim rezervacijama — bez provizije Bookinga ili Airbnba. Vaš brand, vaši gosti, vaš prihod.',
  },
];

export default function Benefits() {
  return (
    <section id="zasto-mi" className="py-24 bg-[#0f2742]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
            Zašto StayMira
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Razlozi zbog kojih nas biraju vlasnici
          </h2>
          <p className="text-[#e8dcc8]/60 text-lg leading-relaxed">
            Više od 100 vlasnika u Hrvatskoj vjeruje nam upravljanje svojim smještajem. Evo zašto.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#c9a86a]/30 transition-all duration-300"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{b.icon}</span>
              <div>
                <h3 className="text-white font-semibold mb-2">{b.title}</h3>
                <p className="text-[#e8dcc8]/60 text-sm leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial strip */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {[
            {
              quote:
                '"Prihod mi se povećao za 45% u prvoj sezoni. StayMira je preuzela sve — ja samo primam uplatu."',
              name: 'Marija K.',
              role: 'Vlasnica apartmana u Splitu',
            },
            {
              quote:
                '"Konačno mogu uživati u ljetu bez da stalno gledam telefon. Gosti su uvijek zbrinuti."',
              name: 'Tomislav B.',
              role: 'Vlasnik kuće za odmor, Istra',
            },
            {
              quote:
                '"Transparentni izvještaji svaki mjesec. Znam točno što se događa s mojom vilom."',
              name: 'Ana R.',
              role: 'Vlasnica vile s bazenom, Zadar',
            },
          ].map((t) => (
            <div key={t.name} className="flex flex-col gap-4 p-6 rounded-2xl bg-[#1a3a5c]/50 border border-white/10">
              <div className="flex gap-0.5 text-[#c9a86a] text-sm">★★★★★</div>
              <p className="text-[#e8dcc8]/80 text-sm leading-relaxed italic">{t.quote}</p>
              <div className="mt-auto">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-[#e8dcc8]/50 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
