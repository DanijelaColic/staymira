import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import BlogFilter from '@/components/BlogFilter';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Blog – StayMira | Savjeti za vlasnike smještaja',
  description:
    'Praktični savjeti za vlasnike apartmana, vila i kuća za odmor. Kako povećati prihod, optimizirati cijene i upravljati recenzijama.',
};

export type BlogPost = {
  slug: string;
  tag: string;
  readTime: string;
  title: string;
  excerpt: string;
  emoji: string;
  // Unsplash photo ID — replace with real photos in production
  photoId: string;
  date: string;
  author: string;
};

// Static blog posts — replace with CMS/MDX data source when ready
export const posts: BlogPost[] = [
  {
    slug: 'kako-povecati-prihod-apartmana',
    tag: 'Strategija',
    readTime: '5 min',
    title: 'Kako povećati prihod od apartmana bez spuštanja cijene',
    excerpt:
      'Mnogi vlasnici misle da je jedini način za više rezervacija niža cijena. U stvarnosti, ključ je u optimizaciji oglasa, profesionalnoj prezentaciji i dinamičnoj cjenovnoj strategiji koja prati potražnju.',
    emoji: '📈',
    photoId: 'photo-1566073771259-6a8506099945', // apartment sea view
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
    photoId: 'photo-1512917774080-9991f1c4c750', // modern building
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
    photoId: 'photo-1560448204-e02f11c3d0e2', // living room
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
    photoId: 'photo-1504701954957-2010ec3bcec1', // beach resort
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
    photoId: 'photo-1493809842364-78817add7ffb', // beautiful bedroom
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
    photoId: 'photo-1600585154340-be6161a56a0c', // luxury villa exterior
    date: '15. ožujka 2026.',
    author: 'StayMira tim',
  },
  {
    slug: 'check-in-iskustvo-gostiju',
    tag: 'Gosti',
    readTime: '5 min',
    title: 'Check-in iskustvo koje donosi 5 zvjezdica — korak po korak',
    excerpt:
      'Prve 30 minuta boravka određuju kakvu ocjenu ćete dobiti. Evo kako postaviti check-in proces koji oduševljava goste i smanjuje vaše intervencije na minimum.',
    emoji: '🗝️',
    photoId: 'photo-1587829741301-dc798b83add3', // hotel key / welcome
    date: '5. svibnja 2026.',
    author: 'StayMira tim',
  },
  {
    slug: 'vrbo-expedia-alternativne-platforme',
    tag: 'Platforme',
    readTime: '6 min',
    title: 'Vrbo, Expedia i direktne rezervacije: diversifikacija kanala za veći prihod',
    excerpt:
      'Osloniti se samo na Booking i Airbnb je rizik. Saznajte koje alternativne platforme donose različite profile gostiju i kako direktne rezervacije eliminiraju provizije.',
    emoji: '🌐',
    photoId: 'photo-1613490493576-7fde63acd811', // villa pool
    date: '28. travnja 2026.',
    author: 'StayMira tim',
  },
  {
    slug: 'priprema-smjestaja-za-sezonu',
    tag: 'Savjeti',
    readTime: '7 min',
    title: 'Kompletna priprema smještaja za sezonu: checklista za vlasnike',
    excerpt:
      'Vlasnici koji se ozbiljno pripreme za sezonu ostvaruju 20–30% bolje ocjene. Kompletna checklista: popravci, tekstil, digitalni profili, logistika i vremenski plan.',
    emoji: '📋',
    photoId: 'photo-1556742049-0cfed4f6a45d', // cleaning/preparing
    date: '20. travnja 2026.',
    author: 'StayMira tim',
  },
  {
    slug: 'pravna-regulativa-kratkorocni-najam-hrvatska',
    tag: 'Pravni okvir',
    readTime: '8 min',
    title: 'Zakonski okvir kratkoročnog najma u Hrvatskoj: što vlasnici moraju znati',
    excerpt:
      'Registracija djelatnosti, PDV, porez na dohodak, prijava boravišta i HTZ kategorije — sve što trebate znati o legalnoj strani iznajmljivanja apartmana u 2026. godini.',
    emoji: '⚖️',
    photoId: 'photo-1589829545856-d10d557cf95f', // legal/documents
    date: '18. svibnja 2026.',
    author: 'StayMira tim',
  },
  {
    slug: 'apartmani-osijek-trendovi',
    tag: 'Destinacije',
    readTime: '6 min',
    title: 'Kratkoročni najam u Osijeku 2026.: trendovi, prilike i realni prihodi',
    excerpt:
      'Osijek više nije samo studentski grad. Poslovni putnici, sportske ekipe i Erdutski vinogorje donose nove prilike vlasnicima smještaja. Evo što podaci govore o tržištu u 2026.',
    emoji: '🏙️',
    photoId: 'photo-1486325212027-8081e485255e', // city apartment view
    date: '12. svibnja 2026.',
    author: 'StayMira tim',
  },
  {
    slug: 'koliko-kosta-property-management',
    tag: 'Cijene',
    readTime: '5 min',
    title: 'Koliko zapravo košta property management? Provizija vs. cijela slika',
    excerpt:
      'Mnogi vlasnici gledaju samo postotak provizije. Realan izračun pokazuje da profesionalno upravljanje najčešće donosi više neto prihoda od samostalnog vođenja — i to uz nultu investiciju vremena.',
    emoji: '🧮',
    photoId: 'photo-1554224155-6726b3ff858f', // finance/calculator
    date: '8. svibnja 2026.',
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
              <div className="mb-6">
                <Breadcrumbs
                  crumbs={[
                    { label: 'Početna', href: '/' },
                    { label: 'Blog' },
                  ]}
                />
              </div>
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
