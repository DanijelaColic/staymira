import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hvala – StayMira',
  description: 'Primili smo vaš upit. Javit ćemo vam se u roku od 24 sata.',
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    step: '01',
    title: 'Analiza smještaja',
    desc: 'Pregledat ćemo vaš smještaj, lokaciju i potencijal te pripremiti okvirnu procjenu prihoda.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Poziv s konzultantom',
    desc: 'U roku 24 sata nazovat ćemo vas ili odgovoriti emailom — odgovorit ćemo na sva vaša pitanja.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Prijedlog strategije',
    desc: 'Dobit ćete konkretan prijedlog: cijene, kanali, prihod — bez obveze.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

export default function HvalaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center justify-center bg-[#0f2742] pt-20 pb-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#c9a86a]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#c9a86a]/5 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center max-w-2xl mx-auto px-4 sm:px-6">
            {/* Checkmark icon */}
            <div className="w-20 h-20 rounded-full bg-[#c9a86a]/15 border-2 border-[#c9a86a]/40 flex items-center justify-center mx-auto mb-8">
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#c9a86a" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
              Upit primljen
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Hvala vam!
            </h1>
            <p className="text-[#e8dcc8]/70 text-lg leading-relaxed mb-2">
              Primili smo vaš upit i javit ćemo vam se{' '}
              <strong className="text-[#e8dcc8]">u roku od 24 sata</strong>.
            </p>
            <p className="text-[#e8dcc8]/50 text-base">
              U međuvremenu, pročitajte korisne savjete na našem blogu.
            </p>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ position: 'absolute' }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1440 40"
              preserveAspectRatio="none"
              className="w-full h-[40px] fill-white"
            >
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Next steps */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[#0f2742] mb-3">Što se događa dalje?</h2>
              <p className="text-[#0f2742]/55">Evo kako izgleda naš proces nakon zaprimanja upita</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {nextSteps.map(({ step, title, desc, icon }) => (
                <div
                  key={step}
                  className="relative flex flex-col gap-4 bg-[#f4efe6] rounded-2xl p-6 border border-[#e8dcc8]"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold text-[#c9a86a]/60 tracking-widest mt-1">
                      {step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0f2742]/5 flex items-center justify-center text-[#0f2742] flex-shrink-0">
                      {icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f2742] mb-1.5">{title}</h3>
                    <p className="text-[#0f2742]/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog CTA */}
        <section className="py-14 bg-[#f4efe6] border-t border-[#e8dcc8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-xl font-bold text-[#0f2742] mb-2">
                Dok čekate odgovor…
              </h2>
              <p className="text-[#0f2742]/55 text-sm">
                Pročitajte naše savjete i saznajte kako povećati prihod od smještaja
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  emoji: '📈',
                  tag: 'Strategija',
                  title: 'Kako povećati prihod od apartmana bez spuštanja cijene',
                  slug: 'kako-povecati-prihod-apartmana',
                },
                {
                  emoji: '💰',
                  tag: 'Cijene',
                  title: 'Dinamične cijene: kako zarađivati više u svakom dijelu sezone',
                  slug: 'dinamicne-cijene-sezona',
                },
                {
                  emoji: '🔍',
                  tag: 'Savjeti',
                  title: 'Što vlasnici najčešće griješe kod kratkoročnog najma',
                  slug: 'greske-kratkorocni-najam',
                },
              ].map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex gap-3 bg-white rounded-xl border border-[#e8dcc8] p-4 hover:shadow-md hover:border-[#c9a86a]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f2742] to-[#1a3a5c] flex items-center justify-center text-xl flex-shrink-0">
                    <span className="opacity-60">{post.emoji}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-[#c9a86a] uppercase tracking-wider">
                      {post.tag}
                    </span>
                    <p className="text-[#0f2742] text-sm font-semibold leading-snug mt-0.5 group-hover:text-[#c9a86a] transition-colors line-clamp-2">
                      {post.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#0f2742]/60 hover:text-[#c9a86a] text-sm font-medium transition-colors"
              >
                Svi blog postovi
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Back home CTA */}
        <section className="py-14 bg-white border-t border-[#e8dcc8]">
          <div className="max-w-xl mx-auto px-4 text-center">
            <p className="text-[#0f2742]/50 text-sm mb-5">
              Imate hitno pitanje? Nazovite nas direktno.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md"
              >
                ← Povratak na početnu
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#e8dcc8] hover:border-[#c9a86a]/40 text-[#0f2742] font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                Kontaktirajte nas
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
