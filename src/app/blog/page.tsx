import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import BlogFilter from '@/components/BlogFilter';

export const metadata: Metadata = {
  title: 'Blog – StayMira | Savjeti za vlasnike smještaja',
  description:
    'Praktični savjeti za vlasnike apartmana, vila i kuća za odmor. Kako povećati prihod, optimizirati cijene i upravljati recenzijama.',
};

// Static blog posts — replace with CMS/MDX data source when ready
export const posts = [
  {
    slug: 'kako-povecati-prihod-apartmana',
    tag: 'Strategija',
    readTime: '5 min',
    title: 'Kako povećati prihod od apartmana bez spuštanja cijene',
    excerpt:
      'Mnogi vlasnici misle da je jedini način za više rezervacija niža cijena. U stvarnosti, ključ je u optimizaciji oglasa, profesionalnoj prezentaciji i dinamičnoj cjenovnoj strategiji koja prati potražnju.',
    emoji: '📈',
    date: '15. svibnja 2026.',
    author: 'StayMira tim',
  },
  {
    slug: 'booking-vs-airbnb',
    tag: 'Platforme',
    readTime: '7 min',
    title: 'Booking.com ili Airbnb: gdje se više isplati oglašavati?',
    excerpt:
      'Oba kanala imaju prednosti — Booking donosi veći volumen rezervacija, Airbnb bolji profil gosta. Saznajte koja kombinacija odgovara vašem tipu smještaja i destinaciji.',
    emoji: '⚖️',
    date: '3. svibnja 2026.',
    author: 'StayMira tim',
  },
  {
    slug: 'greske-kratkorocni-najam',
    tag: 'Savjeti',
    readTime: '6 min',
    title: 'Što vlasnici najčešće griješe kod kratkoročnog najma',
    excerpt:
      'Od loših fotografija i nestandardnih opisa do nefleksibilnih uvjeta otkazivanja — ove pogreške koštaju vas rezervacija i novca, a lako ih je ispraviti s pravim pristupom.',
    emoji: '🔍',
    date: '22. travnja 2026.',
    author: 'StayMira tim',
  },
  {
    slug: 'dinamicne-cijene-sezona',
    tag: 'Cijene',
    readTime: '6 min',
    title: 'Dinamične cijene: kako zarađivati više u svakom dijelu sezone',
    excerpt:
      'Statična cijena po noći ostavlja novac na stolu. Saznajte kako automatsko prilagođavanje cijena prema sezoni, događajima i dostupnosti može povećati prihod i do 40%.',
    emoji: '💰',
    date: '10. travnja 2026.',
    author: 'StayMira tim',
  },
  {
    slug: 'profesionalne-fotografije',
    tag: 'Prezentacija',
    readTime: '4 min',
    title: 'Zašto profesionalne fotografije smještaja vrijede svaki cent',
    excerpt:
      'Gosti odlučuju za manje od 10 sekundi. Kvalitetne fotografije povećavaju broj klikova za 40% i direktno utječu na ostvarenu cijenu po noći.',
    emoji: '📸',
    date: '28. ožujka 2026.',
    author: 'StayMira tim',
  },
  {
    slug: 'recenzije-upravljanje',
    tag: 'Gosti',
    readTime: '5 min',
    title: 'Kako upravljati recenzijama i pretvoriti loše ocjene u prednost',
    excerpt:
      'Svaka loša recenzija je prilika. Profesionalan odgovor i brzo rješavanje problema povećavaju povjerenje novih gostiju više nego savršena ocjena bez odgovora.',
    emoji: '⭐',
    date: '15. ožujka 2026.',
    author: 'StayMira tim',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f2742]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
                Blog
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Savjeti za vlasnike smještaja
              </h1>
              <p className="text-[#e8dcc8]/70 text-lg max-w-xl">
                Praktični vodič za vlasnike apartmana, vila i kuća za odmor koji žele zaraditi više.
              </p>
            </FadeIn>
          </div>
          <div style={{ position: 'relative' }} aria-hidden="true">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-white">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Posts grid with tag filter */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <BlogFilter posts={posts} />
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingUI />
    </>
  );
}
