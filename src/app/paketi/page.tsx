import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import { FaqJsonLd } from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BLUR_DATA_URL } from '@/lib/image';

export const metadata: Metadata = {
  title: 'Paketi i cijene – StayMira | Transparentno upravljanje smještajem',
  description:
    'Transparentni paketi za upravljanje smještajem: Starter (18%), Standard (22%), Premium (26%). Bez fiksnih naknada — plaćate samo postotak od ostvarenog prihoda.',
  keywords:
    'cijene property management Hrvatska, koliko košta upravljanje apartmanom, property management provizija, paketi kratkoročni najam',
  alternates: { canonical: 'https://staymira.hr/paketi' },
  openGraph: {
    title: 'Paketi i cijene – StayMira',
    description: 'Bez fiksnih troškova. Plaćate postotak od prihoda. Zarađujemo zajedno.',
    type: 'website',
    url: 'https://staymira.hr/paketi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paketi i cijene – StayMira',
    description: 'Transparentni paketi upravljanja smještajem bez fiksnih troškova.',
  },
};

type Plan = {
  name: string;
  fee: string;
  popular?: boolean;
  description: string;
  bestFor: string;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    fee: '18%',
    description: 'Osnovno upravljanje za vlasnike koji žele više rezervacija bez velikog angažmana.',
    bestFor: 'Apartmani i sobe s manjim brojem jedinica',
  },
  {
    name: 'Standard',
    fee: '22%',
    popular: true,
    description: 'Kompletno upravljanje s profesionalnom prezentacijom i direktnim rezervacijama.',
    bestFor: 'Apartmani, kuće za odmor, manji smještaji',
  },
  {
    name: 'Premium',
    fee: '26%',
    description: 'Vrhunska prezentacija i maksimizacija prihoda za luksuzni i premium smještaj.',
    bestFor: 'Vile, premium apartmani, ekskluzivni smještaji',
  },
];

type FeatureRow = {
  category: string;
  feature: string;
  starter: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
};

const featureRows: FeatureRow[] = [
  // Oglašavanje
  { category: 'Oglašavanje', feature: 'Booking.com profil', starter: true, standard: true, premium: true },
  { category: 'Oglašavanje', feature: 'Airbnb profil', starter: true, standard: true, premium: true },
  { category: 'Oglašavanje', feature: 'Vrbo, Expedia, TripAdvisor', starter: false, standard: '3 kanala', premium: '6+ kanala' },
  { category: 'Oglašavanje', feature: 'Profesionalni opisi (HR/EN)', starter: 'Osnovno', standard: true, premium: true },
  { category: 'Oglašavanje', feature: 'Višejezični opisi (DE/IT/FR)', starter: false, standard: false, premium: true },
  // Cijene
  { category: 'Upravljanje cijenama', feature: 'Dinamično upravljanje cijenama', starter: 'Osnovno', standard: 'Napredno', premium: 'Premium' },
  { category: 'Upravljanje cijenama', feature: 'Sezonska strategija cijena', starter: false, standard: true, premium: true },
  { category: 'Upravljanje cijenama', feature: 'Analiza konkurencije', starter: false, standard: true, premium: true },
  { category: 'Upravljanje cijenama', feature: 'Last-minute strategija', starter: false, standard: true, premium: true },
  // Komunikacija
  { category: 'Komunikacija', feature: 'Odgovor na upite gostiju', starter: true, standard: true, premium: true },
  { category: 'Komunikacija', feature: 'Dostupnost 24/7', starter: false, standard: true, premium: true },
  { category: 'Komunikacija', feature: 'Check-in koordinacija', starter: 'Osnovno', standard: true, premium: true },
  { category: 'Komunikacija', feature: 'Provjera gostiju (screening)', starter: false, standard: true, premium: true },
  // Prezentacija
  { category: 'Prezentacija', feature: 'Profesionalne fotografije', starter: false, standard: true, premium: true },
  { category: 'Prezentacija', feature: 'Video tour', starter: false, standard: false, premium: true },
  { category: 'Prezentacija', feature: 'Booking web stranica', starter: false, standard: true, premium: true },
  { category: 'Prezentacija', feature: 'SEO optimizacija web stranice', starter: false, standard: 'Osnovno', premium: true },
  // Operativa
  { category: 'Operativa', feature: 'Organizacija čišćenja', starter: false, standard: true, premium: true },
  { category: 'Operativa', feature: 'Vlastiti tim čišćenja (Osijek)', starter: false, standard: true, premium: true },
  { category: 'Operativa', feature: 'Koordinacija popravaka', starter: false, standard: true, premium: true },
  { category: 'Operativa', feature: 'Nabava potrošnih materijala', starter: false, standard: true, premium: true },
  // Izvještaji
  { category: 'Izvještaji i prihodi', feature: 'Mjesečni izvještaj', starter: 'Osnovno', standard: 'Detaljan', premium: 'Napredni + analiza' },
  { category: 'Izvještaji i prihodi', feature: 'Usporedba s prethodnim periodom', starter: false, standard: true, premium: true },
  { category: 'Izvještaji i prihodi', feature: 'Isplata prihoda', starter: 'Jednom/mj.', standard: 'Jednom/mj.', premium: '2× /mj.' },
  { category: 'Izvještaji i prihodi', feature: 'Konzultacije i strategija', starter: false, standard: 'Kvartalno', premium: 'Mjesečno' },
];

const faqItems = [
  {
    q: 'Postoje li ikakvi fiksni troškovi uz postotak?',
    a: 'Ne. Naknada se obračunava isključivo kao postotak od ostvarenog prihoda od rezervacija. Nema fiksnih mjesečnih troškova, naknada za postavljanje ili skrivenih iznosa. Zarađujemo samo kad zarađujete vi.',
  },
  {
    q: 'Što sve ulazi u "prihod" od kojeg se obračunava postotak?',
    a: 'Postotak se obračunava od neto prihoda od rezervacija — tj. iznos koji gost plaća za smještaj, bez turističke pristojbe i bez naknade za čišćenje (cleaning fee) koja ide direktno na pokriće troška čišćenja.',
  },
  {
    q: 'Mogu li promijeniti paket nakon početka suradnje?',
    a: 'Da, uvijek možete prijeći na viši ili niži paket. Promjena stupa na snagu od prvog sljedećeg obračunskog perioda. Preporučamo početi s nižim paketom i nadograditi kad vidite rezultate.',
  },
  {
    q: 'Je li Starter paket dovoljno dobar za početak?',
    a: 'Za jednostavni apartman bez posebnih zahtjeva — da. Ako imate smještaj koji bi mogao profitirati od profesionalnih fotografija i booking web stranice, Standard paket tipično donosi dovoljno povećanje prihoda da pokrije razliku u postotku.',
  },
  {
    q: 'Što znači "puni servis" za Osijek?',
    a: 'Za smještaje u Osijeku imamo vlastiti tim za čišćenje — dolazimo na svaki okret bez posrednika. Za ostale destinacije koordiniramo provjerene lokalne partnere za čišćenje. U oba slučaja, kvaliteta i konzistentnost su iste.',
  },
  {
    q: 'Koliko dugo traje ugovor o suradnji?',
    a: 'Minimalni period suradnje je 3 mjeseca (da bismo imali dovoljno vremena za setup i prve rezultate). Nakon toga, suradnju možete prekinuti uz 30 dana obavijesti.',
  },
];

const categories = Array.from(new Set(featureRows.map((r) => r.category)));

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-[#c9a86a]">
          <path d="M4.5 12.75l6 6 9-13.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#0f2742]/20">
          <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  return (
    <span className="text-xs text-[#0f2742]/70 font-medium text-center block">{value}</span>
  );
}

export default function PaketiPage() {
  return (
    <>
      <FaqJsonLd items={faqItems} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-0 bg-[#0f2742] relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left — text */}
                <div>
                  <div className="mb-6">
                    <Breadcrumbs
                      crumbs={[
                        { label: 'Početna', href: '/' },
                        { label: 'Paketi i cijene' },
                      ]}
                    />
                  </div>
                  <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
                    Transparentni uvjeti
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                    Paketi i cijene
                  </h1>
                  <p className="text-[#e8dcc8]/70 text-lg leading-relaxed mb-8">
                    Bez fiksnih troškova. Plaćate postotak od ostvarenog prihoda —{' '}
                    <strong className="text-[#e8dcc8]">zarađujemo zajedno ili ne zarađujemo uopće</strong>.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    {[
                      { icon: '✓', text: '0 fiksnih naknada' },
                      { icon: '✓', text: 'Bez ugovora na godinu dana' },
                      { icon: '✓', text: 'Otkazivanje uz 30 dana najave' },
                    ].map(({ icon, text }) => (
                      <div key={text} className="flex items-center gap-2">
                        <span className="text-[#c9a86a] font-bold">{icon}</span>
                        <span className="text-[#e8dcc8]/70 text-sm">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — property photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] hidden lg:block">
                  <Image
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=75"
                    alt="Premium apartman — StayMira paketi upravljanja"
                    fill
                    sizes="50vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2742]/50 to-transparent" />
                  {/* Badge */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#c9a86a]">Najpopularniji paket</p>
                      <p className="text-[#0f2742] font-bold text-sm">Standard · 22% od prihoda</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <div style={{ position: 'relative' }} aria-hidden="true">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-white">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Plan cards */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-6 items-start">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative flex flex-col rounded-2xl border overflow-hidden ${
                      plan.popular
                        ? 'bg-[#0f2742] border-[#0f2742] shadow-2xl md:scale-[1.03]'
                        : 'bg-white border-[#e8dcc8] hover:shadow-lg hover:border-[#c9a86a]/30 transition-all'
                    }`}
                  >
                    {plan.popular && (
                      <div className="bg-[#c9a86a] text-white text-xs font-bold uppercase tracking-widest text-center py-2">
                        Najpopularniji
                      </div>
                    )}

                    <div className="p-7 flex flex-col gap-4 flex-1">
                      <div>
                        <p
                          className={`text-sm font-semibold uppercase tracking-wider mb-1 ${
                            plan.popular ? 'text-[#c9a86a]' : 'text-[#c9a86a]'
                          }`}
                        >
                          {plan.name}
                        </p>
                        <div className="flex items-baseline gap-1">
                          <span
                            className={`text-4xl font-bold ${
                              plan.popular ? 'text-white' : 'text-[#0f2742]'
                            }`}
                          >
                            {plan.fee}
                          </span>
                          <span
                            className={`text-sm ${
                              plan.popular ? 'text-[#e8dcc8]/50' : 'text-[#0f2742]/50'
                            }`}
                          >
                            od prihoda
                          </span>
                        </div>
                      </div>

                      <p
                        className={`text-sm leading-relaxed ${
                          plan.popular ? 'text-[#e8dcc8]/70' : 'text-[#0f2742]/60'
                        }`}
                      >
                        {plan.description}
                      </p>

                      <div
                        className={`text-xs rounded-lg px-3 py-2 ${
                          plan.popular ? 'bg-white/10 text-[#e8dcc8]/60' : 'bg-[#f4efe6] text-[#0f2742]/55'
                        }`}
                      >
                        <span className="font-semibold">Za koga:</span> {plan.bestFor}
                      </div>

                      <Link
                        href="/#analiza"
                        className={`mt-auto inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm ${
                          plan.popular
                            ? 'bg-[#c9a86a] hover:bg-[#b8924f] text-white shadow-md'
                            : 'bg-[#0f2742] hover:bg-[#1a3a5c] text-white'
                        }`}
                      >
                        Zatraži besplatnu analizu
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Full comparison matrix */}
        <section className="py-16 bg-[#f4efe6] border-t border-[#e8dcc8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-[#0f2742] mb-2">
                  Detaljna usporedba paketa
                </h2>
                <p className="text-[#0f2742]/55 text-sm">
                  Sve uključeno u svaki paket — nema iznenađenja
                </p>
              </div>

              {/* Table — scrollable on mobile */}
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full min-w-[600px] border-collapse">
                  {/* Sticky header */}
                  <thead>
                    <tr>
                      <th className="text-left pb-4 pr-4 w-[45%]">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#0f2742]/40">
                          Feature
                        </span>
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.name} className="pb-4 px-3 text-center w-[18%]">
                          <div
                            className={`rounded-xl py-3 px-2 ${
                              plan.popular
                                ? 'bg-[#0f2742] text-white'
                                : 'bg-white border border-[#e8dcc8] text-[#0f2742]'
                            }`}
                          >
                            <p className="font-bold text-sm">{plan.name}</p>
                            <p
                              className={`text-lg font-bold mt-0.5 ${
                                plan.popular ? 'text-[#c9a86a]' : 'text-[#0f2742]'
                              }`}
                            >
                              {plan.fee}
                            </p>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {categories.map((category) => {
                      const rows = featureRows.filter((r) => r.category === category);
                      return (
                        <>
                          {/* Category header row */}
                          <tr key={`cat-${category}`}>
                            <td
                              colSpan={4}
                              className="pt-6 pb-2 text-[10px] font-bold uppercase tracking-widest text-[#0f2742]/40"
                            >
                              {category}
                            </td>
                          </tr>

                          {rows.map((row, i) => (
                            <tr
                              key={row.feature}
                              className={`border-t ${
                                i % 2 === 0 ? 'bg-white' : 'bg-white/50'
                              }`}
                            >
                              <td className="py-3 pr-4 text-sm text-[#0f2742]/70">
                                {row.feature}
                              </td>
                              <td className="py-3 px-3">
                                <Cell value={row.starter} />
                              </td>
                              <td className="py-3 px-3 bg-[#0f2742]/[0.03]">
                                <Cell value={row.standard} />
                              </td>
                              <td className="py-3 px-3">
                                <Cell value={row.premium} />
                              </td>
                            </tr>
                          ))}
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* How pricing works */}
        <section className="py-16 bg-white border-t border-[#e8dcc8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: how it works */}
                <div>
                  <h2 className="text-2xl font-bold text-[#0f2742] mb-5">
                    Kako funkcionira naplata?
                  </h2>
                  <div className="space-y-5">
                    {[
                      {
                        step: '01',
                        title: 'Gost rezervira i plaća',
                        desc: 'Rezervacija dolazi kroz Booking, Airbnb ili direktno. Prihod od rezervacije je osnova obračuna.',
                      },
                      {
                        step: '02',
                        title: 'Mi upravljamo svim',
                        desc: 'Komunikacija, check-in, čišćenje, cijene — sve je na nama. Vi ništa ne radite.',
                      },
                      {
                        step: '03',
                        title: 'Isplata s izvještajem',
                        desc: 'Jednom (ili dva puta) mjesečno: prihod od rezervacija minus naš postotak = vaša isplata. S detaljnim izvještajem.',
                      },
                    ].map(({ step, title, desc }) => (
                      <div key={step} className="flex gap-4">
                        <span className="text-xs font-bold text-[#c9a86a]/60 tracking-widest mt-1 w-6 flex-shrink-0">
                          {step}
                        </span>
                        <div>
                          <p className="font-semibold text-[#0f2742] mb-1">{title}</p>
                          <p className="text-sm text-[#0f2742]/60 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: example calculation */}
                <div className="bg-[#f4efe6] rounded-2xl border border-[#e8dcc8] p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0f2742]/40 mb-4">
                    Primjer obračuna — Standard paket
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: 'Prihod od rezervacija (mj.)', value: '3.500 €', type: 'base' },
                      { label: 'Naknada za čišćenje (gost plaća)', value: '150 €', type: 'neutral' },
                      { label: 'Neto prihod (osnova)', value: '3.350 €', type: 'base' },
                      { label: 'StayMira naknada (22%)', value: '− 737 €', type: 'deduct' },
                      { label: 'Vaša isplata', value: '2.613 €', type: 'result' },
                    ].map(({ label, value, type }) => (
                      <div
                        key={label}
                        className={`flex items-center justify-between text-sm py-2 ${
                          type === 'result'
                            ? 'border-t border-[#e8dcc8] pt-3 font-bold text-[#0f2742]'
                            : 'text-[#0f2742]/65'
                        }`}
                      >
                        <span>{label}</span>
                        <span
                          className={`font-semibold ${
                            type === 'deduct' ? 'text-[#0f2742]/50' : type === 'result' ? 'text-[#0f2742]' : ''
                          }`}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#0f2742]/40 mt-4 leading-relaxed">
                    * Primjer je ilustrativan. Stvarni prihodi ovise o smještaju, lokaciji i sezoni.
                    Besplatna analiza daje vam preciznu procjenu.
                  </p>
                  <Link
                    href="/#analiza"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a86a] hover:text-[#b8924f] transition-colors"
                  >
                    Zatražite procjenu za vaš smještaj →
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#f4efe6] border-t border-[#e8dcc8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-[#0f2742] mb-2">
                  Pitanja o cijenama i uvjetima
                </h2>
              </div>

              <div className="space-y-4">
                {faqItems.map(({ q, a }) => (
                  <details
                    key={q}
                    className="group border border-[#e8dcc8] rounded-2xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-[#0f2742] font-semibold text-sm hover:bg-white transition-colors">
                      {q}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="flex-shrink-0 transition-transform duration-200 group-open:rotate-180 text-[#c9a86a]"
                      >
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-sm text-[#0f2742]/65 leading-relaxed border-t border-[#e8dcc8] pt-4">
                      {a}
                    </div>
                  </details>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-[#0f2742]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <FadeIn>
              <span className="inline-block text-[#c9a86a] text-xs font-bold uppercase tracking-widest mb-3">
                Besplatno i bez obveze
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ne znate koji paket odabrati?
              </h2>
              <p className="text-[#e8dcc8]/60 mb-8 leading-relaxed">
                Ispunite kratku formu i mi ćemo preporučiti pravi paket za vaš smještaj —
                zajedno s besplatnom procjenom prihoda.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/#analiza"
                  className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-md"
                >
                  Besplatna analiza smještaja
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
                >
                  Pitajte nas
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingUI />
    </>
  );
}
