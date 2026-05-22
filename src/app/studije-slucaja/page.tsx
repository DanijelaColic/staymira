import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/lib/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FaqJsonLd, CaseStudiesJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Studije slučaja – StayMira | Pravi rezultati vlasnika smještaja',
  description:
    'Pogledajte kako su vlasnici apartmana i vila u Osijeku, Splitu i Zadru ostvarili 30–55% više prihoda uz StayMira upravljanje kratkoročnim najmom.',
  keywords:
    'property management rezultati, povećanje prihoda od najma, studija slučaja apartman, StayMira recenzije, upravljanje smještajem primjeri',
  alternates: {
    canonical: 'https://staymira.hr/studije-slucaja',
  },
  openGraph: {
    title: 'Studije slučaja – StayMira',
    description:
      'Pravi rezultati vlasnika apartmana i vila: više prihoda, bolje ocjene, manje stresa.',
    url: 'https://staymira.hr/studije-slucaja',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studije slučaja – StayMira',
    description: 'Pravi rezultati: +30–55% prihoda uz profesionalno upravljanje smještajem.',
  },
};

const cases = [
  {
    id: 'vila-split',
    name: 'Vila Sunce',
    owner: 'Marija K.',
    location: 'Split, Dalmacija',
    type: 'Vila s bazenom',
    beds: 6,
    photoId: 'photo-1564013799919-ab600027ffc6',
    challenge:
      'Marija je imala vilu s bazenom u Splitu koju je iznajmljivala samo ljeti, uglavnom putem jednog Airbnb profila. Popunjenost je bila 62%, a prihod tek 28.000 €/godišnje — daleko ispod potencijala nekretnine.',
    solution: [
      'Profesionalne fotografije i 360° video prikaz vile',
      'Postavljanje na Booking.com, Vrbo i direktnu web stranicu',
      'Dinamično upravljanje cijenama prema sezoni i događajima',
      'Uvođenje minimalnog boravka 5 noći u srpnju i kolovozu',
      'Kompletno upravljanje gostima i čišćenjem između boravaka',
    ],
    results: {
      before: { occupancy: 62, income: '28.000 €', rating: 4.6 },
      after: { occupancy: 91, income: '52.000 €', rating: 4.97 },
      timeframe: '12 mjeseci',
    },
    quote:
      '"Nisam vjerovala da vila može toliko zaraditi. StayMira je preuzela sve — ja sam samo primala uplate."',
    tag: 'Puni servis',
  },
  {
    id: 'apartman-osijek',
    name: 'Apartman Centar',
    owner: 'Tomislav B.',
    location: 'Osijek, Slavonija',
    type: 'Gradski apartman',
    beds: 2,
    photoId: 'photo-1560448204-e02f11c3d0e2',
    challenge:
      'Tomislav je imao apartman u centru Osijeka koji je iznajmljivao studentima na godišnjoj razini za 400 €/mj. Nakon prijelaza na kratkoročni najam bio je preopterećen komunikacijom, čišćenjem i logistikom.',
    solution: [
      'Kompletna predaja upravljanja — Tomislav ne mora ništa raditi',
      'Optimizacija oglasa za poslovne putnike i sportske ekipe',
      'Postavljanje standardne opreme (ekspres lonac, kava aparat, Wi-Fi 300 Mbps)',
      'Automatiziran check-in putem digitalne brave',
      'Profesionalno čišćenje između svakog boravka',
    ],
    results: {
      before: { occupancy: 100, income: '4.800 € (najam)', rating: null },
      after: { occupancy: 78, income: '9.200 €', rating: 4.85 },
      timeframe: '6 mjeseci',
    },
    quote:
      '"Prihod mi se gotovo udvostručio, a ne moram ni podignuti slušalicu. Jedino žalim što nisam ranije prešao."',
    tag: 'Osijek — puni servis',
  },
  {
    id: 'kuca-zadar',
    name: 'Kuća na otoku',
    owner: 'Ana i Stjepan M.',
    location: 'Otoci kod Zadra',
    type: 'Kuća za odmor',
    beds: 4,
    photoId: 'photo-1613490493576-7fde63acd811',
    challenge:
      'Ana i Stjepan su imali kuću za odmor na otoku blizu Zadra. Upravljali su sami i potrošili bi cijeli godišnji odmor na dočekivanje gostiju, čišćenje i prepiske. Prihod je bio solidan, ali stres previsok.',
    solution: [
      'Preuzimanje kompletne komunikacije s gostima (HR/EN/DE)',
      'Organizacija lokalnih čistačica i opskrbe',
      'Ciljanje njemačkog i austrijskog tržišta kao visokoprofitabilnog segmenta',
      'Implementacija politike kućnih ljubimaca uz dodatnu naknadu',
      'Sezonski raspored renovacija i preventivnog održavanja',
    ],
    results: {
      before: { occupancy: 71, income: '18.500 €', rating: 4.7 },
      after: { occupancy: 88, income: '27.000 €', rating: 4.92 },
      timeframe: '2 sezone',
    },
    quote:
      '"Konačno možemo uživati u našoj kući, a ne raditi za nju. Prihod je porastao, a mi smo mirniji nego ikad."',
    tag: 'Property management',
  },
];

const faqItems = [
  {
    q: 'Koliko vremena treba da vidim rezultate?',
    a: 'Poboljšanja vidljivosti i rezervacija obično se osjete unutar 4–8 tjedana od postavljanja optimiziranih oglasa. Financijski rezultati za cijelu godinu vidljivi su nakon prve pune sezone, no vlasnici najčešće primjete razliku već nakon prvih 2–3 mjeseca.',
  },
  {
    q: 'Vrijede li ovi rezultati samo za top lokacije?',
    a: 'Ne. Naši najbolji rezultati dolaze iz Osijeka, koji nije tipična turistička destinacija. Ključ je u strateškom pozicioniranju, ciljanom tržištu (poslovni putnici, sportske ekipe) i operativnoj izvrsnosti — a to vrijedi za svaki grad.',
  },
  {
    q: 'Mogu li očekivati iste rezultate za moj smještaj?',
    a: 'Svaki smještaj je drugačiji i rezultati variraju ovisno o lokaciji, veličini, stanju i tržištu. Upravo zato nudimo besplatnu analizu — da vam damo realnu procjenu potencijala vašeg smještaja prije nego krenemo.',
  },
];

export default function StudijeSlucajaPage() {
  return (
    <>
      <CaseStudiesJsonLd
        reviews={cases.map((c) => ({
          name: c.name,
          author: c.owner,
          location: c.location,
          reviewBody: c.quote.replace(/^"|"$/g, ''),
          ratingValue: c.results.after.rating,
          datePublished: '2026-01-01',
        }))}
      />
      <FaqJsonLd items={faqItems} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f2742] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a86a]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-6">
                <Breadcrumbs
                  crumbs={[
                    { label: 'Početna', href: '/' },
                    { label: 'Studije slučaja' },
                  ]}
                />
              </div>
              <div className="max-w-3xl">
                <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
                  Pravi rezultati
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                  Studije slučaja —{' '}
                  <span className="text-[#c9a86a]">od problema do prihoda</span>
                </h1>
                <p className="text-[#e8dcc8]/70 text-lg leading-relaxed max-w-2xl">
                  Nisu to izmišljene statistike. Ovo su pravi vlasnici, pravi smještaji i pravi
                  rezultati — s konkretnim brojkama, izazovima i rješenjima.
                </p>
              </div>
            </FadeIn>
          </div>
          {/* Wave */}
          <div style={{ position: 'relative' }} aria-hidden="true">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-[#f4efe6]">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Summary stats */}
        <section className="py-10 bg-[#f4efe6] border-b border-[#e8dcc8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { value: '+46%', label: 'Prosječan rast prihoda', sub: 'u prvoj godini' },
                { value: '4.91', label: 'Prosječna ocjena', sub: 'nakon preuzimanja' },
                { value: '3', label: 'Uspješnih studija', sub: 'različite destinacije' },
                { value: '100%', label: 'Vlasnika zadovoljno', sub: 'preporučuju nastavak' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-3xl font-black text-[#c9a86a]">{s.value}</span>
                  <span className="text-sm font-semibold text-[#0f2742] mt-1">{s.label}</span>
                  <span className="text-xs text-[#0f2742]/50 mt-0.5">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {cases.map((c, i) => (
              <FadeIn key={c.id}>
                <div
                  id={c.id}
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image side */}
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative rounded-2xl overflow-hidden h-72 bg-[#0f2742] shadow-xl">
                      <Image
                        src={`https://images.unsplash.com/${c.photoId}?auto=format&fit=crop&w=800&q=80`}
                        alt={c.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Property info overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div>
                          <p className="text-white font-bold text-lg">{c.name}</p>
                          <p className="text-white/70 text-sm">{c.location}</p>
                        </div>
                        <span className="bg-[#c9a86a] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                          {c.tag}
                        </span>
                      </div>
                    </div>

                    {/* Before / After */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">
                          Prije StayMira
                        </p>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#0f2742]/60">Popunjenost</span>
                            <span className="font-semibold text-[#0f2742]">{c.results.before.occupancy}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#0f2742]/60">Prihod/god.</span>
                            <span className="font-semibold text-[#0f2742]">{c.results.before.income}</span>
                          </div>
                          {c.results.before.rating && (
                            <div className="flex justify-between text-sm">
                              <span className="text-[#0f2742]/60">Ocjena</span>
                              <span className="font-semibold text-[#0f2742]">★ {c.results.before.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">
                          Nakon {c.results.timeframe}
                        </p>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#0f2742]/60">Popunjenost</span>
                            <span className="font-bold text-green-700">{c.results.after.occupancy}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#0f2742]/60">Prihod/god.</span>
                            <span className="font-bold text-green-700">{c.results.after.income}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#0f2742]/60">Ocjena</span>
                            <span className="font-bold text-green-700">★ {c.results.after.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    {/* Meta */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f2742]/60 bg-[#f4efe6] border border-[#e8dcc8] rounded-full px-3 py-1">
                        🏠 {c.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f2742]/60 bg-[#f4efe6] border border-[#e8dcc8] rounded-full px-3 py-1">
                        🛏 {c.beds} spavaće sobe
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f2742]/60 bg-[#f4efe6] border border-[#e8dcc8] rounded-full px-3 py-1">
                        📍 {c.location}
                      </span>
                    </div>

                    {/* Owner */}
                    <p className="text-[#c9a86a] text-sm font-semibold mb-2">Vlasnik: {c.owner}</p>

                    {/* Challenge */}
                    <h2 className="text-2xl font-bold text-[#0f2742] mb-3">{c.name}</h2>
                    <div className="mb-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#0f2742]/40 mb-2">
                        Izazov
                      </p>
                      <p className="text-[#0f2742]/70 leading-relaxed text-sm">{c.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#0f2742]/40 mb-3">
                        Što smo napravili
                      </p>
                      <ul className="space-y-2">
                        {c.solution.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <svg
                              className="w-4 h-4 text-[#c9a86a] flex-shrink-0 mt-0.5"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.5" />
                              <path
                                d="M5 8l2.5 2.5L11 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-sm text-[#0f2742]/75">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-4 border-[#c9a86a] pl-5 py-1 mb-6">
                      <p className="text-[#0f2742] font-medium italic leading-relaxed text-sm">
                        {c.quote}
                      </p>
                      <cite className="text-xs text-[#0f2742]/50 not-italic mt-1 block">
                        — {c.owner}, {c.location}
                      </cite>
                    </blockquote>
                  </div>
                </div>

                {i < cases.length - 1 && (
                  <hr className="border-[#e8dcc8] mt-24" />
                )}
              </FadeIn>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#f4efe6]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-2xl font-bold text-[#0f2742] mb-8 text-center">
                Česta pitanja o rezultatima
              </h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.q}
                    className="bg-white border border-[#e8dcc8] rounded-2xl px-6 py-5"
                  >
                    <p className="font-semibold text-[#0f2742] mb-2">{item.q}</p>
                    <p className="text-[#0f2742]/65 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0f2742]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <p className="text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
                Vaš smještaj
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                Koji bi bio vaš rezultat?
              </h2>
              <p className="text-[#e8dcc8]/70 text-lg mb-8 max-w-xl mx-auto">
                Svaki smještaj ima neiskorišten potencijal. Saznajte konkretnu procjenu za vaš
                apartman, kuću ili vilu — bez obveza, besplatno.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/#analiza"
                  className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg"
                >
                  Zatražite besplatnu analizu
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/paketi"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-full border border-white/20 transition-all"
                >
                  Pogledajte pakete
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
