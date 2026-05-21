import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import { destinations } from '@/lib/destinations';

export const metadata: Metadata = {
  title: 'Destinacije – StayMira | Upravljanje smještajem diljem Hrvatske',
  description:
    'StayMira profesionalno upravlja smještajem u Osijeku, Splitu, Zadru, Dubrovniku, Istri, Kvarneru, Plitvičkim jezerima i Zagrebu. Odaberite svoju destinaciju.',
  openGraph: {
    title: 'Destinacije – StayMira',
    description:
      'Profesionalno upravljanje smještajem diljem Hrvatske — od Osijeka do Dubrovnika.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://staymira.hr/destinacije',
  },
};

export default function DestinacijePage() {
  const fullService = destinations.filter((d) => d.fullService);
  const popular = destinations.filter((d) => d.popular && !d.fullService);
  const rest = destinations.filter((d) => !d.fullService && !d.popular);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f2742] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c9a86a]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
                Gdje djelujemo
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                Destinacije
              </h1>
              <p className="text-[#e8dcc8]/70 text-lg leading-relaxed max-w-2xl">
                Profesionalno upravljamo smještajem diljem Hrvatske — od Slavonije do Dubrovnika.
                Svaka destinacija ima svoju strategiju, sezonu i tip gosta.
              </p>
            </FadeIn>
          </div>
          <div style={{ position: 'relative' }} aria-hidden="true">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-white">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Legend */}
        <section className="py-6 bg-white border-b border-[#e8dcc8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#c9a86a]" />
                <span className="text-xs text-[#0f2742]/60">Puni servis — upravljanje + čišćenje (vlastiti tim)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0f2742]/80" />
                <span className="text-xs text-[#0f2742]/60">Popularna destinacija</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#e8dcc8]" />
                <span className="text-xs text-[#0f2742]/60">Property management + koordinirano čišćenje</span>
              </div>
            </div>
          </div>
        </section>

        {/* Full service */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-xl font-bold text-[#0f2742] mb-2">Puni servis</h2>
              <p className="text-[#0f2742]/50 text-sm mb-6">
                Upravljanje + vlastiti tim za čišćenje
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {fullService.map((dest) => (
                  <DestCard key={dest.slug} dest={dest} featured />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Popular */}
        <section className="py-14 bg-[#f4efe6] border-t border-[#e8dcc8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-xl font-bold text-[#0f2742] mb-2">Najpopularnije destinacije</h2>
              <p className="text-[#0f2742]/50 text-sm mb-6">
                Visoka potražnja, optimizirana sezonska strategija
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {popular.map((dest) => (
                  <DestCard key={dest.slug} dest={dest} />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Rest */}
        <section className="py-14 bg-white border-t border-[#e8dcc8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-xl font-bold text-[#0f2742] mb-2">Ostale destinacije</h2>
              <p className="text-[#0f2742]/50 text-sm mb-6">
                Property management i koordinacija čišćenja
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((dest) => (
                  <DestCard key={dest.slug} dest={dest} />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Other locations note */}
        <section className="py-12 bg-[#f4efe6] border-t border-[#e8dcc8]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <FadeIn>
              <p className="text-[#0f2742] font-semibold mb-2">
                Vaš smještaj nije na ovoj listi?
              </p>
              <p className="text-[#0f2742]/55 text-sm mb-6">
                Proširujemo se na nove lokacije — kontaktirajte nas i zajedno procijenimo
                potencijal vašeg smještaja.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-7 py-3.5 rounded-full transition-all shadow-md"
              >
                Pitajte za svoju lokaciju
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingUI />
    </>
  );
}

function DestCard({
  dest,
  featured,
}: {
  dest: (typeof destinations)[0];
  featured?: boolean;
}) {
  return (
    <Link
      href={`/destinacije/${dest.slug}`}
      className={`group flex flex-col rounded-2xl border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
        featured
          ? 'border-[#c9a86a]/40 bg-[#0f2742] text-white'
          : 'border-[#e8dcc8] bg-white'
      }`}
    >
      {/* Card header */}
      <div
        className={`h-32 flex items-center justify-center relative ${
          featured
            ? 'bg-gradient-to-br from-[#0f2742] to-[#1a3a5c]'
            : 'bg-gradient-to-br from-[#f4efe6] to-[#e8dcc8]'
        }`}
      >
        <span className="text-5xl">{dest.emoji}</span>
        {featured && (
          <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider bg-[#c9a86a] text-white px-2 py-0.5 rounded-full">
            Puni servis
          </span>
        )}
        {dest.popular && !featured && (
          <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider bg-[#0f2742] text-white px-2 py-0.5 rounded-full">
            Popularno
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
              featured ? 'text-[#c9a86a]' : 'text-[#c9a86a]'
            }`}
          >
            {dest.region}
          </p>
          <h3
            className={`font-bold text-lg group-hover:text-[#c9a86a] transition-colors ${
              featured ? 'text-white' : 'text-[#0f2742]'
            }`}
          >
            {dest.name}
          </h3>
        </div>

        <p
          className={`text-sm leading-relaxed line-clamp-2 flex-1 ${
            featured ? 'text-[#e8dcc8]/60' : 'text-[#0f2742]/55'
          }`}
        >
          {dest.heroTagline}
        </p>

        {/* Income preview */}
        <div
          className={`text-xs mt-1 pt-3 border-t ${
            featured ? 'border-white/10 text-[#e8dcc8]/50' : 'border-[#e8dcc8] text-[#0f2742]/40'
          }`}
        >
          {dest.incomeExample.low.toLocaleString('hr-HR')}–
          {dest.incomeExample.high.toLocaleString('hr-HR')} € / god. procjena
        </div>

        <div className="flex items-center justify-between mt-1">
          <span
            className={`text-xs font-medium ${
              featured ? 'text-[#c9a86a]' : 'text-[#0f2742]'
            } group-hover:text-[#c9a86a] transition-colors`}
          >
            Saznajte više →
          </span>
        </div>
      </div>
    </Link>
  );
}
