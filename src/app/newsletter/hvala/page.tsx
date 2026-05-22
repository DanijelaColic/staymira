import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pretplata potvrđena – StayMira Newsletter',
  description: 'Uspješno ste se pretplatili na StayMira newsletter. Uskoro stižu savjeti za veći prihod od vašeg smještaja.',
  robots: 'noindex',
};

const firstReads = [
  {
    slug: 'kako-povecati-prihod-apartmana',
    tag: 'Strategija',
    title: 'Kako povećati prihod bez spuštanja cijene',
  },
  {
    slug: 'dinamicne-cijene-sezona',
    tag: 'Cijene',
    title: 'Dinamične cijene: zarađujte više u svakom dijelu sezone',
  },
  {
    slug: 'booking-vs-airbnb',
    tag: 'Platforme',
    title: 'Booking.com ili Airbnb: gdje se više isplati oglašavati?',
  },
];

export default function NewsletterHvalaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f4efe6]">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0f2742]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Success icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#c9a86a]/15 border-2 border-[#c9a86a]/30 mb-8">
              <svg className="w-10 h-10 text-[#c9a86a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
              </svg>
            </div>

            <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
              Pretplata potvrđena
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Uskoro stižu savjeti!
            </h1>
            <p className="text-[#e8dcc8]/70 text-lg leading-relaxed">
              Uspješno ste se pretplatili. Provjerite inbox za dobrodošlicu —
              a zatim jednom tjedno, praktični savjeti za veći prihod od vašeg smještaja.
            </p>
          </div>

          {/* Wave */}
          <div style={{ position: 'relative' }} aria-hidden="true">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-[#f4efe6]">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* What to expect */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0f2742] mb-8 text-center">
              Što dobivate u newsletteru
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '📈', title: 'Taktike za veći prihod', desc: 'Konkretni koraci koji vlasnici odmah mogu primijeniti.' },
                { icon: '🔔', title: 'Novosti s platformi', desc: 'Promjene na Booking.com i Airbnbu na jednom mjestu.' },
                { icon: '📊', title: 'Sezonski trendovi', desc: 'Kada podići cijene i kad popuniti kalendar.' },
                { icon: '⭐', title: 'Savjeti za recenzije', desc: 'Kako dobiti 5 zvjezdica i upravljati negativnim ocjenama.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-[#e8dcc8] rounded-2xl p-5 flex gap-4"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-[#0f2742] text-sm mb-1">{item.title}</p>
                    <p className="text-[#0f2742]/60 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* First reads */}
        <section className="py-8 pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0f2742]/40 mb-6 text-center">
              Počnite čitati odmah
            </p>
            <div className="space-y-3">
              {firstReads.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="flex items-center gap-4 bg-white border border-[#e8dcc8] rounded-xl px-5 py-4 hover:border-[#c9a86a]/40 hover:shadow-sm transition-all group"
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c9a86a]">
                      {article.tag}
                    </span>
                    <p className="text-sm font-semibold text-[#0f2742] group-hover:text-[#c9a86a] transition-colors mt-0.5">
                      {article.title}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-[#0f2742]/30 group-hover:text-[#c9a86a] transition-colors flex-shrink-0" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 bg-[#0f2742] text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:bg-[#1a3a5c]"
              >
                Svi članci
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#e8dcc8] text-[#0f2742] font-semibold px-7 py-3.5 rounded-full transition-all hover:border-[#c9a86a]/40"
              >
                Natrag na početnu
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
