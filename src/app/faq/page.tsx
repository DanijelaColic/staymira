import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Česta pitanja (FAQ) – StayMira | Property Management Hrvatska',
  description:
    'Odgovori na najčešća pitanja o profesionalnom upravljanju smještajem u Hrvatskoj: usluge, cijene, suradnja, pravni okvir, prihodi od kratkoročnog najma.',
  keywords:
    'faq property management Hrvatska, pitanja kratkoročni najam, kako funkcionira upravljanje smještajem, cijene property managementa, Airbnb Booking upravljanje',
  alternates: { canonical: 'https://staymira.hr/faq' },
  openGraph: {
    title: 'Česta pitanja – StayMira | Property Management Hrvatska',
    description: 'Sve što trebate znati o profesionalnom upravljanju smještajem — na jednom mjestu.',
    type: 'website',
    url: 'https://staymira.hr/faq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Česta pitanja – StayMira',
    description: 'Najčešća pitanja o property managementu u Hrvatskoj.',
  },
};

type FaqItem = { q: string; a: string; cta?: { label: string; href: string } };
type FaqCategory = { id: string; title: string; icon: string; questions: FaqItem[] };

const categories: FaqCategory[] = [
  {
    id: 'usluge',
    title: 'O usluzi',
    icon: '🏠',
    questions: [
      {
        q: 'Što točno radi StayMira za mene kao vlasnika?',
        a: 'StayMira preuzima potpuno operativno upravljanje vašim kratkoročnim najmom: kreiranje i optimizaciju oglasa, dinamično određivanje cijena, komunikaciju s gostima 24/7, koordinaciju čišćenja i dostave posteljine, check-in i check-out, te redovito izvještavanje. Vi dobivate prihod bez operativnog posla.',
        cta: { label: 'Pogledaj sve usluge', href: '/usluge' },
      },
      {
        q: 'Radite li s vlasnicima izvan Osijeka?',
        a: 'Da. Upravljamo smještajima u cijeloj Hrvatskoj — od Dalmacije (Split, Zadar, Dubrovnik) i Istre do Kvarnera, Zagreba i Osijeka. Za Osijek nudimo i uslugu čišćenja unutar naše mreže; za ostale destinacije koordiniramo provjerene lokalne partnere.',
        cta: { label: 'Destinacije', href: '/destinacije' },
      },
      {
        q: 'Upravljate li i vilama s bazenom?',
        a: 'Da — upravljamo studiom, apartmanima, kućama za odmor i vilama s bazenom. Za veće objekte nudimo i izradu personaliziranog web mjesta s direktnim rezervacijama (booking stranica), što smanjuje ovisnost o platformama i provizijama.',
      },
      {
        q: 'Radite li i booking web stranice za smještaj?',
        a: 'Da. Za svakog klijenta koji to želi gradimo personaliziranu booking web stranicu s direktnim rezervacijama, integracijom kalendara i online plaćanjem. Direktne rezervacije znače nula provizije platformama i bolji brending vašeg smještaja.',
        cta: { label: 'Saznaj više o booking stranicama', href: '/usluge#booking-web' },
      },
    ],
  },
  {
    id: 'cijene',
    title: 'Cijene i naknada',
    icon: '💰',
    questions: [
      {
        q: 'Koliko košta StayMira upravljanje?',
        a: 'Naplatujemo proviziju od 15–20% neto prihoda, bez skrivenih troškova ili fiksnih mjesečnih naknada. Točan postotak ovisi o tipu ugovora (Starter, Professional ili Elite) i broju jedinica. Ako sa StayMirom zarađujete više, obje strane profitiraju.',
        cta: { label: 'Transparentni paketi i cijene', href: '/paketi' },
      },
      {
        q: 'Ima li skrivenih troškova?',
        a: 'Nema. Naša naknada je postotna i naplaćuje se isključivo na ostvareni prihod. Troškovi potrošnih materijala, popravaka ili posebnih servisa (npr. pool servis) fakturiraju se odvojeno i transparentno uz prethodnu suglasnost vlasnika.',
      },
      {
        q: 'Kad i kako primam prihod?',
        a: 'Prihod se isplaćuje jednom ili dvaput mjesečno direktno na vaš račun, zajedno s detaljnim izvještajem o rezervacijama, prihodima i troškovima. Svaki vlasnik ima pristup dashboardu u realnom vremenu.',
      },
      {
        q: 'Postoji li minimalni rok ugovora?',
        a: 'Minimalni rok je 3 mjeseca. Nakon toga ugovor se automatski nastavlja uz otkazni rok od 30 dana. Nema penala za prijevremeni raskid — jer vjerujemo da ćete ostati zadovoljni.',
      },
    ],
  },
  {
    id: 'prihodi',
    title: 'Prihodi i popunjenost',
    icon: '📈',
    questions: [
      {
        q: 'Koliko može zaraditi moj apartman godišnje?',
        a: 'Ovisi o lokaciji, tipu i stanju objekta. Tipični apartman u Splitu zarađuje 12 000–25 000 € godišnje uz profesionalno upravljanje; u Dubrovniku i više. Koristite naš kalkulator za okvirnu procjenu za vaš smještaj.',
        cta: { label: 'Otvori kalkulator prihoda', href: '/kalkulator' },
      },
      {
        q: 'Kako povećavate popunjenost?',
        a: 'Kombinacijom višeplatformskog oglašavanja (Airbnb, Booking.com, VRBO, direktne rezervacije), profesionalnih fotografija, optimiziranog opisa i dinamičnih cijena. Naši vlasnici u prosjeku bilježe 25–35% veću popunjenost u usporedbi s samostalnim upravljanjem.',
      },
      {
        q: 'Što su dinamične cijene i zašto su važne?',
        a: 'Dinamično određivanje cijena znači da se cijena po noći automatski prilagođava prema potražnji, lokalnim događanjima, konkurenciji i sezonalnosti — svaki dan. Rezultat: viša cijena kad je potražnja velika, bolja popunjenost kad je manja. To je jedan od najvećih izvora dodatnog prihoda.',
      },
      {
        q: 'Isplati li se kratkoročni najam u kontinentalnoj Hrvatskoj?',
        a: 'Da, sve više. Zagreb, Osijek i destinacije poput Plitvičkih jezera bilježe rast poslovnih putnika i turista koji izbjegavaju hotele. Popunjenost je niža nego na obali, ali troškovi su manji, a sezonalnost ravnomjernija — što znači predvidljiviji prihod.',
        cta: { label: 'Destinacije u kontinentalnoj Hrvatskoj', href: '/destinacije' },
      },
    ],
  },
  {
    id: 'suradnja',
    title: 'Početak suradnje',
    icon: '🤝',
    questions: [
      {
        q: 'Kako izgleda proces početka suradnje?',
        a: 'Proces ima 4 koraka: 1) Besplatna analiza — pošaljete upit, mi procjenjujemo potencijal vašeg smještaja. 2) Prijedlog — šaljemo konkretan prijedlog s procjenom prihoda. 3) Onboarding — fotografiramo, kreiramo/optimiziramo oglase, postavljamo pricing. 4) Go-live — smještaj je aktivan i vi počinjete zarađivati.',
        cta: { label: 'Zatraži besplatnu analizu', href: '/kontakt' },
      },
      {
        q: 'Trebam li biti prisutan za check-in gostiju?',
        a: 'Ne. StayMira organizira cijeli check-in i check-out proces — ključevi, welcomebook, upute za gosta. Možemo koristiti key box, elektroničku bravu ili osobni doček, ovisno o vašim preferencijama i tipu smještaja.',
      },
      {
        q: 'Mogu li zadržati dio datuma za vlastito korištenje?',
        a: 'Naravno. Vi uvijek upravljate kalendarom i možete blokirati željene datume za osobno korištenje, prijatelje ili obitelj — u bilo koje doba, bez naplate.',
      },
      {
        q: 'Što se događa s oštećenjima koje prouzroče gosti?',
        a: 'Sve platforme imaju AirCover / zaštitni depozit za oštećenja. Naš tim dokumentira stanje smještaja prije i poslije svakog boravka i aktivno podnosi zahtjeve za naknadu štete. U slučaju problema koji nije pokriven platformom, zajedno tražimo rješenje.',
      },
    ],
  },
  {
    id: 'pravni',
    title: 'Pravni i porezni okvir',
    icon: '⚖️',
    questions: [
      {
        q: 'Trebam li licencu za kratkoročni najam u Hrvatskoj?',
        a: 'Da. Kratkoročni najam u Hrvatskoj zahtijeva rješenje o kategorizaciji turističke agencije za iznajmljivanje ili rješenje nadležnog tijela za fizičke osobe. StayMira vam može pomoći u navigaciji administrativnih koraka — kontaktirajte nas za detalje.',
        cta: { label: 'Pročitaj o zakonskom okviru', href: '/blog/pravna-regulativa-kratkorocni-najam-hrvatska' },
      },
      {
        q: 'Kako se oporezuju prihodi od kratkoročnog najma?',
        a: 'Fizičke osobe plaćaju porez na dohodak od imovine (30% + prirez) ili porez na dodanu vrijednost ako prihod prelazi prag za PDV. Postoje različiti modeli oporezivanja — preporučamo konzultaciju s poreznim savjetnikom za optimizaciju. StayMira isporučuje detaljne izvještaje o prihodima za potrebe porezne prijave.',
      },
      {
        q: 'Je li kratkoročni najam legalan u svim zgradama?',
        a: 'Ne uvijek. Neke zgrade ili etažni vlasnici imaju ograničenja u kućnom redu. Preporučamo provjeru statusa zgrade i suglasnost suvlasnika ako je potrebna. Za kuće i vile ovaj problem u pravilu ne postoji.',
      },
    ],
  },
];

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: categories.flatMap((cat) =>
      cat.questions.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    ),
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
        <section className="pt-32 pb-14 bg-[#0f2742]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Breadcrumbs
                crumbs={[
                  { label: 'Početna', href: '/' },
                  { label: 'Česta pitanja' },
                ]}
              />
            </div>
            <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
              Sve odjednom
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Česta pitanja
            </h1>
            <p className="text-[#e8dcc8]/70 text-lg leading-relaxed max-w-2xl">
              Odgovori na sve što vlasnici smještaja pitaju prije nego što počnu
              surađivati s nama. Ne nađete odgovor?{' '}
              <Link href="/kontakt" className="text-[#c9a86a] hover:underline">
                Pišite nam.
              </Link>
            </p>

            {/* Category jump links */}
            <div className="flex flex-wrap gap-2 mt-8">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all"
                >
                  <span>{cat.icon}</span>
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
          <div aria-hidden="true">
            <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="w-full h-8 fill-[#f4efe6]">
              <path d="M0,32 C360,0 1080,0 1440,32 L1440,32 L0,32 Z" />
            </svg>
          </div>
        </section>

        {/* FAQ categories */}
        <section className="py-16 bg-[#f4efe6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="text-2xl font-bold text-[#0f2742]">{cat.title}</h2>
                </div>
                <div className="space-y-3">
                  {cat.questions.map((faq, i) => (
                    <details
                      key={i}
                      className="group bg-white border border-[#e8dcc8] rounded-2xl overflow-hidden"
                    >
                      <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-[#faf8f4] transition-colors">
                        <span className="font-semibold text-[#0f2742] text-sm leading-snug pt-0.5">
                          {faq.q}
                        </span>
                        <svg
                          className="w-5 h-5 text-[#c9a86a] flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 20 20"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-5 pt-1 text-sm text-[#0f2742]/65 leading-relaxed border-t border-[#f4efe6]">
                        <p className="mt-3">{faq.a}</p>
                        {faq.cta && (
                          <Link
                            href={faq.cta.href}
                            className="inline-flex items-center gap-1.5 mt-4 text-[#c9a86a] font-semibold text-xs hover:underline"
                          >
                            {faq.cta.label}
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0f2742] rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(ellipse at top right, #c9a86a 0%, transparent 60%)' }} />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Niste pronašli odgovor?
                </h2>
                <p className="text-[#e8dcc8]/70 mb-8 leading-relaxed">
                  Naš tim odgovara u prosjeku unutar 2 sata. Bez obveza, bez prodajnog pritiska.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-bold px-7 py-3.5 rounded-full transition-all"
                  >
                    Pošaljite upit
                  </Link>
                  <a
                    href="https://wa.me/385912345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-all"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
