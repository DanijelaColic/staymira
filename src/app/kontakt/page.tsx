import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import { FaqJsonLd } from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Kontakt – StayMira | Besplatna analiza smještaja',
  description:
    'Kontaktirajte StayMira za besplatnu analizu vašeg smještaja. Odgovaramo unutar 24h. Email, telefon, WhatsApp.',
  openGraph: {
    title: 'Kontakt – StayMira',
    description: 'Besplatna analiza smještaja. Odgovaramo unutar 24h.',
    type: 'website',
  },
};

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'info@staymira.hr',
    href: 'mailto:info@staymira.hr',
    desc: 'Odgovaramo unutar 24h',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Telefon',
    value: '+385 1 234 5678',
    href: 'tel:+38512345678',
    desc: 'Pon–Pet, 8:00–18:00',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1C5.03 1 1 5.03 1 10c0 1.6.42 3.1 1.14 4.4L1 19l4.72-1.12A9 9 0 1010 1zm0 16.4a7.4 7.4 0 01-3.76-1.02l-.27-.16-2.8.66.68-2.72-.18-.28A7.4 7.4 0 1110 17.4zm4.07-5.52c-.22-.11-1.32-.65-1.52-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.17-.48.06-.22-.12-.94-.35-1.79-1.1-.66-.6-1.11-1.33-1.24-1.55-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.4.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.4-.06-.11-.5-1.2-.68-1.65-.18-.43-.37-.37-.5-.38h-.43c-.15 0-.4.06-.6.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.57 2.4 3.8 3.36.53.23.95.37 1.27.47.53.17 1.02.14 1.4.09.43-.06 1.32-.54 1.51-1.06.19-.52.19-.97.13-1.06-.06-.09-.21-.15-.43-.26z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+385 91 234 5678',
    href: 'https://wa.me/385912345678?text=Pozdrav%2C%20zainteresiran%2Fa%20sam%20za%20besplatnu%20analizu%20smje%C5%A1taja.',
    desc: 'Brzi odgovor',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Adresa',
    value: 'Zagreb, Hrvatska',
    href: null,
    desc: 'Centralna uredska lokacija',
  },
];

const trustItems = [
  { value: '100+', label: 'vlasnika smještaja' },
  { value: '4.9★', label: 'prosječna ocjena gostiju' },
  { value: '24h', label: 'maksimalno čekanje odgovora' },
  { value: '5 god', label: 'iskustva u property managementu' },
];

const faqItems = [
  {
    q: 'Koliko dugo traje proces analize smještaja?',
    a: 'Nakon što ispunite formu ili nas kontaktirate, javit ćemo se unutar 24 sata s prvim prijedlogom. Kompletna analiza s procjenom prihoda i strategijom priprema se unutar 48–72 sata.',
  },
  {
    q: 'Je li analiza smještaja stvarno besplatna?',
    a: 'Da, 100% besplatna i bez ikakve obveze. Ne trebate potpisivati ništa niti se obvezivati na suradnju. Analiza je naša investicija u potencijalnu dugoročnu suradnju.',
  },
  {
    q: 'Što trebam pripremiti za prvi razgovor?',
    a: 'Ništa posebno — dovoljno je da znate lokaciju, tip i otprilike veličinu smještaja. Sve ostalo saznajemo zajedno. Ako imate pristup podacima o dosadašnjim prihodima, to pomaže za preciznije usporedbe.',
  },
  {
    q: 'Mogu li me kontaktirati ako nisam vlasnik, nego tražim smještaj za najam?',
    a: 'StayMira pruža usluge isključivo vlasnicima smještaja koji žele profesionalno upravljanje. Za najam smještaja posjetite Booking.com, Airbnb ili direktne booking stranice naših klijenata.',
  },
  {
    q: 'Kako brzo možemo početi sa suradnjom?',
    a: 'Nakon dogovora o uvjetima i potpisivanja ugovora, setup traje 3–7 radnih dana: fotografije, opisi, postavljanje na platforme, booking stranica. Prve rezervacije dolaze obično unutar prvog tjedna.',
  },
];

export default function ContactPage() {
  return (
    <>
      <FaqJsonLd items={faqItems} />
      <Header />
      <main>
        {/* Page hero */}
        <section className="pt-32 pb-12 bg-[#0f2742] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c9a86a]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-6">
                <Breadcrumbs
                  crumbs={[
                    { label: 'Početna', href: '/' },
                    { label: 'Kontakt' },
                  ]}
                />
              </div>
              <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
                Kontakt
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Razgovarajmo o vašem{' '}
                <span className="text-[#c9a86a]">smještaju</span>
              </h1>
              <p className="text-[#e8dcc8]/70 text-lg max-w-xl">
                Besplatna analiza, bez obveza. Odgovaramo unutar 24 sata —{' '}
                emailom, telefonom ili WhatsAppom.
              </p>
            </FadeIn>
          </div>
          <div style={{ position: 'relative' }} aria-hidden="true">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-white">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-8 bg-[#f4efe6] border-b border-[#e8dcc8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {trustItems.map(({ value, label }) => (
                <div key={label} className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#0f2742]">{value}</span>
                  <span className="text-xs text-[#0f2742]/50">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact info + form */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="grid lg:grid-cols-3 gap-10">
                {/* Left – contact details */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#0f2742] mb-1">Direktan kontakt</h2>
                    <p className="text-[#0f2742]/55 text-sm">
                      Dostupni smo svim kanalima — odaberite onaj koji vam odgovara.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {contactItems.map((c) => (
                      <div
                        key={c.label}
                        className="flex items-start gap-3 p-4 rounded-xl border border-[#e8dcc8] bg-[#f4efe6]/40 hover:bg-[#f4efe6] transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#0f2742]/5 flex items-center justify-center flex-shrink-0 text-[#0f2742]">
                          {c.icon}
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold text-[#0f2742]/40 uppercase tracking-wider">
                            {c.label}
                          </p>
                          {c.href ? (
                            <a
                              href={c.href}
                              target={c.href.startsWith('http') ? '_blank' : undefined}
                              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-sm font-semibold text-[#0f2742] hover:text-[#c9a86a] transition-colors"
                            >
                              {c.value}
                            </a>
                          ) : (
                            <p className="text-sm font-semibold text-[#0f2742]">{c.value}</p>
                          )}
                          <p className="text-xs text-[#0f2742]/40 mt-0.5">{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Radno vrijeme */}
                  <div className="bg-[#0f2742] rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#c9a86a] mb-2">
                      Radno vrijeme
                    </p>
                    <div className="space-y-1 text-sm text-[#e8dcc8]/70">
                      <div className="flex justify-between">
                        <span>Ponedjeljak – Petak</span>
                        <span className="text-white font-medium">8:00 – 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Subota</span>
                        <span className="text-white font-medium">9:00 – 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Nedjelja</span>
                        <span className="text-[#e8dcc8]/40">Hitne situacije</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick links */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0f2742]/40 mb-3">
                      Korisni linkovi
                    </p>
                    <div className="flex flex-col gap-2">
                      {[
                        { label: 'Paketi i cijene', href: '/paketi' },
                        { label: 'Naše usluge', href: '/usluge' },
                        { label: 'O nama', href: '/o-nama' },
                        { label: 'Destinacije', href: '/destinacije' },
                      ].map(({ label, href }) => (
                        <Link
                          key={label}
                          href={href}
                          className="text-sm text-[#0f2742]/60 hover:text-[#c9a86a] transition-colors flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#c9a86a]" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right – lead form spans 2 cols */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-[#0f2742] mb-1">Besplatna analiza smještaja</h2>
                    <p className="text-[#0f2742]/55 text-sm">
                      Ispunite formu i javit ćemo vam se u roku od 24 sata s procjenom prihoda.
                    </p>
                  </div>
                  <LeadForm />
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
                  Česta pitanja
                </h2>
                <p className="text-[#0f2742]/55 text-sm">Odgovori na najčešća pitanja o procesu suradnje</p>
              </div>
              <div className="space-y-4">
                {faqItems.map(({ q, a }) => (
                  <details
                    key={q}
                    className="group border border-[#e8dcc8] rounded-2xl overflow-hidden bg-white"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-[#0f2742] font-semibold text-sm hover:bg-[#f4efe6] transition-colors">
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

        {/* Destination quick links */}
        <section className="py-14 bg-white border-t border-[#e8dcc8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-8">
                <h2 className="text-lg font-bold text-[#0f2742] mb-1">Upravljamo smještajem u</h2>
                <p className="text-[#0f2742]/50 text-sm">Kliknite na vašu destinaciju za više detalja</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'Osijek', slug: 'osijek', emoji: '🌻', badge: 'Puni servis' },
                  { name: 'Split', slug: 'split', emoji: '⚓' },
                  { name: 'Zadar', slug: 'zadar', emoji: '🌅' },
                  { name: 'Dubrovnik', slug: 'dubrovnik', emoji: '🏰' },
                  { name: 'Istra', slug: 'istra', emoji: '🫒' },
                  { name: 'Kvarner', slug: 'kvarner', emoji: '⛵' },
                  { name: 'Zagreb', slug: 'zagreb', emoji: '🏙️' },
                  { name: 'Plitvička jezera', slug: 'plitvicka-jezera', emoji: '🏞️' },
                ].map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/destinacije/${dest.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#0f2742] bg-[#f4efe6] border border-[#e8dcc8] hover:border-[#c9a86a]/40 hover:text-[#c9a86a] px-4 py-2.5 rounded-full transition-all"
                  >
                    <span>{dest.emoji}</span>
                    {dest.name}
                    {dest.badge && (
                      <span className="text-[9px] font-bold bg-[#c9a86a] text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                        {dest.badge}
                      </span>
                    )}
                  </Link>
                ))}
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
