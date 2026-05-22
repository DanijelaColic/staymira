import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BLUR_DATA_URL } from '@/lib/image';

export const metadata: Metadata = {
  title: 'O nama – StayMira | Tko smo i što radimo',
  description:
    'Upoznajte tim iza StayMira. Profesionalno upravljanje smještajem s osobnim pristupom, lokalnim znanjem i transparentnim uvjetima.',
  keywords:
    'StayMira tim, property management agencija Hrvatska, upravljanje smještajem tko smo, kratkoročni najam agencija',
  alternates: {
    canonical: 'https://staymira.hr/o-nama',
  },
  openGraph: {
    title: 'O nama – StayMira',
    description:
      'Upoznajte tim iza StayMira. Profesionalno upravljanje smještajem s osobnim pristupom.',
    type: 'website',
    url: 'https://staymira.hr/o-nama',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O nama – StayMira',
    description: 'Profesionalno upravljanje smještajem s osobnim pristupom i lokalnim znanjem.',
  },
};

const values = [
  {
    emoji: '🤝',
    title: 'Osobni pristup',
    desc: 'Svaki smještaj i vlasnik su jedinstveni. Ne koristimo predloške — svaku suradnju gradimo od nule, prema vašim potrebama i ciljevima.',
  },
  {
    emoji: '📊',
    title: 'Transparentnost',
    desc: 'Nema skrivenih naknada. Svaki euro prihoda je vidljiv — detaljno mjesečno izvješće s rezervacijama, prihodima i troškovima.',
  },
  {
    emoji: '📍',
    title: 'Lokalno znanje',
    desc: 'Poznajemo tržišta na kojima radimo — sezonske trendove, lokalne goste, konkurenciju i što točno gosti traže u vašoj destinaciji.',
  },
  {
    emoji: '🚀',
    title: 'Fokus na rezultat',
    desc: 'Naš prihod ovisi o vašem. Što bolje vadimo iz vašeg smještaja, više zarađujemo i mi. To je jedini pravi alignment interesa.',
  },
  {
    emoji: '⚡',
    title: 'Brzina i dostupnost',
    desc: 'Gosti ne čekaju — ni mi. Odgovaramo na sve upite u roku od sata, 7 dana u tjednu, 365 dana u godini.',
  },
  {
    emoji: '🔒',
    title: 'Briga o imovini',
    desc: 'Vaš smještaj tretiramo kao svoju imovinu. Redovita kontrola, brzo rješavanje kvarova i suradnja s provjerenim lokalnim servisima.',
  },
];

const team = [
  {
    name: 'Danijelа Colić',
    role: 'Osnivačica & CEO',
    bio: 'Iskustvo u turizmu i property managementu. Posvećena profesionalnoj prezentaciji smještaja i maksimizaciji prihoda za vlasnike diljem Hrvatske.',
    photoId: 'photo-1580489944761-15a19d654956',
  },
  {
    name: 'Operativni tim',
    role: 'Upravljanje rezervacijama',
    bio: 'Brza komunikacija s gostima, upravljanje kalendarima i cijenama, koordinacija čišćenja i check-inova za sve smještaje u portfoliu.',
    photoId: 'photo-1522202176988-66273c2fd55f',
  },
  {
    name: 'Lokalni partneri',
    role: 'Čišćenje & Tehničke usluge',
    bio: 'Provjerena mreža lokalnih partnera za čišćenje, održavanje i tehničke intervencije — brzo i pouzdano, na svim našim lokacijama.',
    photoId: 'photo-1542744094-3a31f272c490',
  },
];

const milestones = [
  { year: '2021.', event: 'StayMira osnovana u Osijeku, prvi 3 smještaja.' },
  { year: '2022.', event: 'Ekspanzija na Split i Zadar. Portfelj: 20+ smještaja.' },
  { year: '2023.', event: 'Pokrenuta booking stranica usluga za klijente. Portfelj: 50+.' },
  { year: '2024.', event: 'Proširenje na Dubrovnik, Istru i Kvarner.' },
  { year: '2025.', event: 'Više od 100 smještaja. Prosječna ocjena gostiju: 4.9.' },
  { year: '2026.', event: 'Nastavak rasta. Fokus na premium segment i direktni booking.' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0f2742]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="flex justify-center mb-6">
                <Breadcrumbs
                  crumbs={[
                    { label: 'Početna', href: '/' },
                    { label: 'O nama' },
                  ]}
                />
              </div>
              <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
                O nama
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Iza svake rezervacije<br />stoji pravi tim
              </h1>
              <p className="text-[#e8dcc8]/70 text-xl max-w-2xl mx-auto leading-relaxed">
                StayMira nije softver ni platforma — to su ljudi koji svakodnevno rade za bolji
                prihod i bezbrižnost vaše imovine.
              </p>
            </FadeIn>
          </div>
          <div style={{ position: 'relative' }} aria-hidden="true">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-[#f4efe6]">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-[#f4efe6]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
                    Naša priča
                  </span>
                  <h2 className="text-3xl font-bold text-[#0f2742] mb-5">
                    Zašto smo osnovali StayMira
                  </h2>
                  <div className="space-y-4 text-[#0f2742]/65 leading-relaxed">
                    <p>
                      Vidjeli smo sve previše vlasnika koji su ušli u kratkoročni najam s
                      entuzijazmom — i brzo se suočili s realnošću. Sati odgovaranja na poruke
                      u ponoć, dogovaranje čišćenja, problemi s gostima, nepredvidivi prihodi.
                    </p>
                    <p>
                      StayMira je nastala s jasnom idejom: da vlasnik smještaja može imati
                      <strong className="text-[#0f2742]"> profesionalni prihod bez profesionalnog angažmana</strong>.
                      Mi preuzimamo sve — vi ubirete plodove.
                    </p>
                    <p>
                      Od prvog smještaja u Osijeku do više od 100 objekata diljem Hrvatske,
                      princip ostaje isti: vaš smještaj, naša briga.
                    </p>
                  </div>

                  {/* Stats below text */}
                  <div className="grid grid-cols-2 gap-3 mt-8">
                    {[
                      { metric: '100+', label: 'smještaja u upravljanju' },
                      { metric: '4.9★', label: 'prosječna ocjena gostiju' },
                      { metric: '5+', label: 'destinacija u HR' },
                      { metric: '0h', label: 'vlasnikov trud tjedno' },
                    ].map(({ metric, label }) => (
                      <div
                        key={label}
                        className="bg-white border border-[#e8dcc8] rounded-2xl p-4 text-center"
                      >
                        <p className="text-2xl font-black text-[#0f2742]">{metric}</p>
                        <p className="text-[#0f2742]/50 text-xs mt-1 leading-snug">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Property photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=75"
                    alt="Luksuzna vila s bazenom — StayMira upravljanje smještajem"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#c9a86a] mb-1">
                        Rezultat suradnje
                      </p>
                      <p className="text-[#0f2742] font-bold text-sm">
                        Vila Split · +86% prihoda · 4.97★
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
                  Naše vrijednosti
                </span>
                <h2 className="text-3xl font-bold text-[#0f2742]">
                  Po čemu se razlikujemo
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="flex gap-4 p-5 rounded-2xl border border-[#e8dcc8] hover:shadow-md transition-shadow"
                  >
                    <span className="text-2xl flex-shrink-0">{v.emoji}</span>
                    <div>
                      <h3 className="font-bold text-[#0f2742] mb-1">{v.title}</h3>
                      <p className="text-[#0f2742]/55 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-[#f4efe6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
                  Tim
                </span>
                <h2 className="text-3xl font-bold text-[#0f2742]">
                  Ljudi koji brinu o vašem smještaju
                </h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="bg-white rounded-2xl border border-[#e8dcc8] overflow-hidden"
                  >
                    {/* Photo */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/${member.photoId}?auto=format&fit=crop&w=400&q=70`}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover object-top"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                      />
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="font-bold text-[#0f2742]">{member.name}</h3>
                      <p className="text-[#c9a86a] text-xs font-semibold uppercase tracking-wider mb-3">
                        {member.role}
                      </p>
                      <p className="text-[#0f2742]/55 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-[#0f2742]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
                  Naš put
                </span>
                <h2 className="text-3xl font-bold text-white">Kako smo rasli</h2>
              </div>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[68px] top-2 bottom-2 w-px bg-white/10" />

                <div className="flex flex-col gap-6">
                  {milestones.map(({ year, event }) => (
                    <div key={year} className="flex items-start gap-4">
                      <div className="w-20 flex-shrink-0 text-right">
                        <span className="text-[#c9a86a] text-sm font-bold">{year}</span>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-[#c9a86a] flex-shrink-0 mt-0.5 relative z-10" />
                      <p className="text-[#e8dcc8]/70 text-sm leading-relaxed">{event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#f4efe6]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-[#0f2742] mb-4">
                Postanite dio naše zajednice vlasnika
              </h2>
              <p className="text-[#0f2742]/60 mb-8 leading-relaxed">
                Besplatna analiza vašeg smještaja — bez obveze. Zajedno ćemo procijeniti
                potencijal i predložiti strategiju rasta.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/#analiza"
                  className="inline-flex items-center justify-center gap-2 bg-[#0f2742] hover:bg-[#1a3a5c] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
                >
                  Zatražite besplatnu analizu
                </a>
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-[#e8dcc8] hover:border-[#c9a86a]/40 text-[#0f2742] font-semibold px-8 py-4 rounded-full transition-all duration-200"
                >
                  Kontaktirajte nas
                </a>
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
