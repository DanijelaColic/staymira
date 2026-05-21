import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  destinations,
  getDestination,
  LEVEL_COLORS,
  LEVEL_LABELS,
} from '@/lib/destinations';
import { FaqJsonLd } from '@/components/JsonLd';

type Props = { params: Promise<{ grad: string }> };

export async function generateStaticParams() {
  return destinations.map((d) => ({ grad: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { grad } = await params;
  const dest = getDestination(grad);
  if (!dest) return {};
  return {
    title: dest.metaTitle,
    description: dest.metaDesc,
    openGraph: {
      title: dest.metaTitle,
      description: dest.metaDesc,
      type: 'website',
    },
    alternates: {
      canonical: `https://staymira.hr/destinacije/${dest.slug}`,
    },
  };
}

export default async function DestinacijaPage({ params }: Props) {
  const { grad } = await params;
  const dest = getDestination(grad);
  if (!dest) notFound();

  const otherDests = destinations.filter((d) => d.slug !== dest.slug).slice(0, 4);

  return (
    <>
      <FaqJsonLd items={dest.faq} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f2742] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c9a86a]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-5">
                <Breadcrumbs
                  crumbs={[
                    { label: 'Početna', href: '/' },
                    { label: 'Destinacije', href: '/destinacije' },
                    { label: dest.name },
                  ]}
                />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{dest.emoji}</span>
                <div>
                  {dest.fullService && (
                    <span className="inline-block text-xs font-bold uppercase tracking-wider bg-[#c9a86a] text-white px-3 py-1 rounded-full mb-2">
                      Puni servis
                    </span>
                  )}
                  <p className="text-[#e8dcc8]/50 text-sm">{dest.region}</p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                {dest.heroTagline}
              </h1>
              <p className="text-[#e8dcc8]/70 text-lg leading-relaxed max-w-2xl mb-8">
                {dest.heroDesc}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                {dest.stats.map(({ value, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-2xl font-bold text-[#c9a86a]">{value}</span>
                    <span className="text-[#e8dcc8]/50 text-xs mt-0.5">{label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div style={{ position: 'relative' }} aria-hidden="true">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-white">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* About + Local features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* About */}
                <div>
                  <h2 className="text-2xl font-bold text-[#0f2742] mb-4">{dest.aboutTitle}</h2>
                  <p className="text-[#0f2742]/65 leading-relaxed text-base">{dest.about}</p>

                  {/* Income example */}
                  <div className="mt-8 bg-[#f4efe6] border border-[#e8dcc8] rounded-2xl p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0f2742]/40 mb-3">
                      Procjena prihoda
                    </p>
                    <p className="text-sm text-[#0f2742]/60 mb-2">{dest.incomeExample.type}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[#0f2742]">
                        {dest.incomeExample.low.toLocaleString('hr-HR')} –{' '}
                        {dest.incomeExample.high.toLocaleString('hr-HR')} €
                      </span>
                      <span className="text-[#0f2742]/50 text-sm">/ god.</span>
                    </div>
                    <p className="text-xs text-[#0f2742]/40 mt-2">
                      * Uz profesionalno upravljanje StayMirom. Stvarni prihod ovisi o specifičnostima smještaja.
                    </p>
                    <Link
                      href="/#analiza"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c9a86a] hover:text-[#b8924f] transition-colors"
                    >
                      Zatražite preciznu procjenu →
                    </Link>
                  </div>
                </div>

                {/* Local features */}
                <div>
                  <h3 className="text-lg font-bold text-[#0f2742] mb-4">
                    Što nudimo u {dest.name === 'Plitvička jezera' ? 'destinaciji' : dest.name === 'Istra' || dest.name === 'Kvarner' ? 'regiji' : 'gradu'}
                  </h3>
                  <ul className="space-y-3">
                    {dest.localFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#c9a86a]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#c9a86a" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-[#0f2742]/70 text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {dest.fullService && (
                    <div className="mt-6 flex items-start gap-3 bg-[#0f2742] rounded-xl p-4">
                      <span className="text-2xl flex-shrink-0">🧹</span>
                      <div>
                        <p className="text-white font-semibold text-sm">Vlastiti tim za čišćenje</p>
                        <p className="text-[#e8dcc8]/60 text-xs mt-1 leading-relaxed">
                          Jedini puni servis u {dest.name}u — upravljanje i čišćenje u jednom paketu, bez posrednika.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Seasons */}
        <section className="py-16 bg-[#f4efe6] border-t border-[#e8dcc8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-[#0f2742] mb-2">
                  Sezonalnost u {dest.name === 'Plitvička jezera' ? 'destinaciji' : dest.name}
                </h2>
                <p className="text-[#0f2742]/55 text-sm">
                  Prilagođavamo strategiju svakom dijelu godine
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {dest.seasons.map((season) => (
                  <div
                    key={season.name}
                    className="bg-white rounded-2xl border border-[#e8dcc8] p-5 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-[#0f2742]">{season.name}</p>
                        <p className="text-xs text-[#0f2742]/40">{season.months}</p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${LEVEL_COLORS[season.level]}`}
                      >
                        {LEVEL_LABELS[season.level]}
                      </span>
                    </div>
                    <p className="text-sm text-[#0f2742]/60 leading-relaxed">{season.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white border-t border-[#e8dcc8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-[#0f2742] mb-2">
                  Česta pitanja — {dest.name}
                </h2>
              </div>

              <div className="space-y-4">
                {dest.faq.map(({ q, a }) => (
                  <details
                    key={q}
                    className="group border border-[#e8dcc8] rounded-2xl overflow-hidden"
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

        {/* Other destinations */}
        <section className="py-14 bg-[#f4efe6] border-t border-[#e8dcc8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-xl font-bold text-[#0f2742] mb-6">Ostale destinacije</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {otherDests.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/destinacije/${d.slug}`}
                    className="group flex items-center gap-3 bg-white rounded-xl border border-[#e8dcc8] p-4 hover:shadow-md hover:border-[#c9a86a]/30 transition-all duration-200"
                  >
                    <span className="text-2xl">{d.emoji}</span>
                    <div>
                      <p className="font-semibold text-[#0f2742] text-sm group-hover:text-[#c9a86a] transition-colors">
                        {d.name}
                      </p>
                      <p className="text-xs text-[#0f2742]/40">{d.region}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/destinacije"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f2742]/60 hover:text-[#c9a86a] transition-colors"
                >
                  Sve destinacije →
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0f2742]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <FadeIn>
              <span className="inline-block text-[#c9a86a] text-xs font-bold uppercase tracking-widest mb-3">
                Besplatno i bez obveze
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Imate smještaj u{' '}
                {dest.name === 'Plitvička jezera' ? 'blizini Plitvičkih jezera'
                  : dest.name === 'Istra' || dest.name === 'Kvarner'
                  ? dest.name
                  : dest.name + 'u'}?
              </h2>
              <p className="text-[#e8dcc8]/60 mb-8 leading-relaxed">
                Zatražite besplatnu analizu i doznajte koliko može zaraditi vaš smještaj uz
                profesionalno upravljanje.
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
                  Kontaktirajte nas
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
