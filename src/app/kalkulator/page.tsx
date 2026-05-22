import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Calculator from '@/components/Calculator';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BLUR_DATA_URL } from '@/lib/image';

export const metadata: Metadata = {
  title: 'Kalkulator prihoda od smještaja – StayMira | Izračunaj zaradu',
  description:
    'Besplatni kalkulator prihoda od kratkoročnog najma. Unesite lokaciju i tip objekta — odmah vidite procjenu godišnje zarade s i bez profesionalnog upravljanja.',
  keywords:
    'kalkulator prihoda kratkoročni najam, zarada Airbnb Hrvatska, koliko može zaraditi apartman, prihod od iznajmljivanja, kalkulator najam Split Dubrovnik Zagreb',
  alternates: { canonical: 'https://staymira.hr/kalkulator' },
  openGraph: {
    title: 'Kalkulator prihoda od smještaja – StayMira',
    description:
      'Izračunaj koliko vaš apartman, kuća ili vila može zaraditi na kratkoročnom najmu. Besplatno, bez registracije.',
    type: 'website',
    url: 'https://staymira.hr/kalkulator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalkulator prihoda od smještaja – StayMira',
    description: 'Besplatni kalkulator zarade od kratkoročnog najma za sve destinacije u Hrvatskoj.',
  },
};

const faqs = [
  {
    q: 'Koliko može zaraditi apartman na moru?',
    a: 'Prosječni apartman u Splitu ili Zadru (2–3 sobe) može zaraditi između 12 000 i 25 000 € godišnje uz profesionalno upravljanje — ovisno o lokaciji, sezoni i popunjenosti. Naš kalkulator daje personaliziranu procjenu za vaš smještaj.',
  },
  {
    q: 'Koliko košta profesionalno upravljanje smještajem?',
    a: 'StayMira naplaćuje proviziju od 15–20% neto prihoda, bez skrivenih troškova. U tu cijenu ulaze: dinamično određivanje cijena, komunikacija s gostima, check-in/out, čišćenje (koordinacija) i 24/7 podrška. Detalje pogledajte na stranici Paketi.',
  },
  {
    q: 'Je li prihod prikazan u kalkulatoru točan?',
    a: 'Kalkulator pokazuje statističku procjenu temeljenu na tržišnim podacima za odabranu destinaciju i tip objekta. Stvarni prihodi ovise o konkretnom stanju smještaja, opremi, lokaciji unutar grada i sezonalnosti. Kontaktirajte nas za besplatnu točniju analizu.',
  },
  {
    q: 'Isplati li se kratkoročni najam u kontinentalnoj Hrvatskoj?',
    a: 'Da — tržišta poput Zagreba, Osijeka i Plitvičkih jezera rastu brže nego obalni gradovi jer imaju jači posestonski posjetilački turizam. Popunjenost je niža nego na obali, ali troškovi upravljanja su manji, pa je neto prihod konkurentan.',
  },
  {
    q: 'Kako povećati prihod bez spuštanja cijene?',
    a: 'Ključ je dinamično određivanje cijena (viša cijena u periodu visoke potražnje), optimizacija oglasa, brzi odgovori na upite i visoke ocjene gostiju. StayMira koristi profesionalni pricing softver koji automatski prilagođava cijene tjednim i dnevnim trendovima.',
  },
];

const regionStats = [
  { city: 'Dubrovnik', range: '20 000 – 45 000 €', occupancy: '88%', label: 'apartman (2 sobe)' },
  { city: 'Split', range: '12 000 – 28 000 €', occupancy: '82%', label: 'apartman (2–3 sobe)' },
  { city: 'Zadar', range: '10 000 – 22 000 €', occupancy: '78%', label: 'apartman (2 sobe)' },
  { city: 'Istra', range: '9 000 – 18 000 €', occupancy: '76%', label: 'kuća za odmor' },
  { city: 'Zagreb', range: '8 000 – 15 000 €', occupancy: '72%', label: 'apartman (studio–2 sobe)' },
  { city: 'Osijek', range: '5 000 – 10 000 €', occupancy: '65%', label: 'apartman (2 sobe)' },
];

export default function KalkulatorPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-[#0f2742]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Breadcrumbs
                crumbs={[
                  { label: 'Početna', href: '/' },
                  { label: 'Kalkulator prihoda' },
                ]}
              />
            </div>
            <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
              Besplatni alat
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Kalkulator prihoda od<br />
              <span className="text-[#c9a86a]">kratkoročnog najma</span>
            </h1>
            <p className="text-[#e8dcc8]/70 text-lg leading-relaxed max-w-2xl">
              Unesite lokaciju i tip smještaja — odmah vidite procjenu godišnjeg prihoda
              i što možete zaraditi s profesionalnim upravljanjem.
            </p>
          </div>
          <div className="mt-8" aria-hidden="true">
            <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="w-full h-8 fill-[#f4efe6]">
              <path d="M0,32 C360,0 1080,0 1440,32 L1440,32 L0,32 Z" />
            </svg>
          </div>
        </section>

        {/* Calculator (existing component) */}
        <Calculator />

        {/* Regional benchmark table */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left — heading + table */}
              <div>
                <div className="mb-8">
                  <span className="text-[#c9a86a] text-xs font-bold uppercase tracking-widest">
                    Tržišni podaci 2026.
                  </span>
                  <h2 className="text-3xl font-bold text-[#0f2742] mt-2 mb-3">
                    Prosječni prihodi po destinaciji
                  </h2>
                  <p className="text-[#0f2742]/60 leading-relaxed">
                    Okvirne godišnje zarade za tipične objekte — s StayMira upravljanjem.
                    Stvarni prihodi variraju prema stanju i lokaciji unutar grada.
                  </p>
                </div>

                <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#f4efe6]">
                    <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0f2742] rounded-tl-xl">
                      Destinacija
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0f2742]">
                      Tip objekta
                    </th>
                    <th className="text-right px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0f2742]">
                      Godišnji prihod
                    </th>
                    <th className="text-right px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0f2742] rounded-tr-xl">
                      Popunjenost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {regionStats.map((row, i) => (
                    <tr
                      key={row.city}
                      className={`border-b border-[#f4efe6] hover:bg-[#faf8f4] transition-colors ${i === regionStats.length - 1 ? 'border-0' : ''}`}
                    >
                      <td className="px-5 py-4 font-semibold text-[#0f2742]">
                        <Link
                          href={`/destinacije/${row.city.toLowerCase()}`}
                          className="hover:text-[#c9a86a] transition-colors"
                        >
                          {row.city}
                        </Link>
                      </td>
                      <td className="px-5 py-4 text-[#0f2742]/60">{row.label}</td>
                      <td className="px-5 py-4 text-right font-bold text-[#0f2742]">{row.range}</td>
                      <td className="px-5 py-4 text-right">
                        <span className="inline-block bg-[#0f2742]/5 text-[#0f2742] font-semibold text-xs px-2.5 py-1 rounded-full">
                          {row.occupancy}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

                <p className="mt-4 text-xs text-[#0f2742]/40">
                  * Procjene temeljene na tržišnim prosjekima 2025.–2026. Stvarne vrijednosti variraju.
                </p>
              </div>

              {/* Right — photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=700&q=75"
                  alt="Vila s bazenom — Hrvatska obala, kratkoročni najam"
                  fill
                  sizes="40vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2742]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#c9a86a]">Primjer iz portfolia</p>
                    <p className="text-[#0f2742] font-bold text-sm">Vila Split · 91% popunjenost · 52.000 €/god</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How we boost income */}
        <section className="py-20 bg-[#f4efe6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f2742] mb-4">
                Kako postižemo veći prihod?
              </h2>
              <p className="text-[#0f2742]/60 leading-relaxed">
                Svaki eur više na kalkulatoru dolazi iz jednog od ova četiri izvora.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: '01',
                  title: 'Dinamične cijene',
                  desc: 'Profesionalni pricing softver koji prilagođava cijenu svaki dan prema potražnji, konkurenciji i lokalnim događanjima.',
                },
                {
                  num: '02',
                  title: 'Optimizacija oglasa',
                  desc: 'Profesionalne fotografije, optimiziran naslov i opis, ključne riječi za bolji organski rang na platformama.',
                },
                {
                  num: '03',
                  title: 'Brži odgovori',
                  desc: 'Odgovaramo na sve upite unutar 1 sata — platforme nagrađuju brzi response rate s boljim pozicijama.',
                },
                {
                  num: '04',
                  title: 'Visoke recenzije',
                  desc: 'Sustavan follow-up nakon boravka. Više recenzija = bolji rang = više rezervacija po višoj cijeni.',
                },
              ].map((item) => (
                <div key={item.num} className="bg-white rounded-2xl border border-[#e8dcc8] p-6">
                  <span className="text-3xl font-black text-[#c9a86a]/30">{item.num}</span>
                  <h3 className="font-bold text-[#0f2742] mt-3 mb-2">{item.title}</h3>
                  <p className="text-sm text-[#0f2742]/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0f2742] mb-10 text-center">
              Često postavljana pitanja o prihodima
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-[#e8dcc8] rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none bg-white hover:bg-[#faf8f4] transition-colors">
                    <span className="font-semibold text-[#0f2742] text-sm leading-snug">{faq.q}</span>
                    <svg
                      className="w-5 h-5 text-[#c9a86a] flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-[#0f2742]/60 leading-relaxed bg-[#faf8f4] border-t border-[#e8dcc8]">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0f2742]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Želite točnu analizu za vaš smještaj?
            </h2>
            <p className="text-[#e8dcc8]/70 mb-8 leading-relaxed">
              Kalkulator je procjena. Za preciznu analizu s konkretnim brojevima za vaš
              objekt — kontaktirajte nas. Besplatno, bez obveze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-bold px-8 py-4 rounded-full transition-all duration-200"
              >
                Zatraži besplatnu analizu
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/paketi"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-8 py-4 rounded-full transition-all"
              >
                Pogledaj pakete i cijene
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
