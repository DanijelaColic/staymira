import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import { FaqJsonLd } from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';

const uslugestFaq = [
  { q: 'Mogu li koristiti samo neke usluge, a ne sve?', a: 'Da, možemo prilagoditi suradnju vašim potrebama. Neki vlasnici žele samo upravljanje cijenama i oglasima, dok drugi prepuštaju sve. Kontaktirajte nas i zajedno dogovorimo što ima smisla za vaš smještaj.' },
  { q: 'Koliko košta upravljanje smještajem?', a: 'Naknada se kreće između 18% i 26% prihoda od rezervacija, ovisno o paketu i tipu smještaja. Nema fiksnih troškova ni skrivenih naknada — zarađujemo samo kad zarađujete vi.' },
  { q: 'Što ako već imam oglase na Booking.com i Airbnbu?', a: 'Bez problema — optimiziramo vaše postojeće oglase ili otvaramo nove pod vašim računom, ovisno o dogovoru. Sinkroniziramo kalendare i preuzimamo komunikaciju.' },
  { q: 'Koliko brzo mogu početi?', a: 'Nakon dogovora, potrebno je 3–7 dana za postavljanje svega: fotografije, opisi, kanali, cijene. Obično primamo prve rezervacije unutar prvog tjedna aktivacije.' },
  { q: 'Kada i kako dobivam isplatu?', a: 'Isplata dolazi jednom ili dva puta mjesečno, s detaljnim izvještajem svih rezervacija, prihoda i naknada. Puna transparentnost — uvijek znate koji novac i za koje noći.' },
  { q: 'Radite li samo za Osijek?', a: 'Ne — radimo za smještaje diljem Hrvatske. Za Osijek imamo vlastiti tim za čišćenje. Za ostatak HR koordiniramo lokalne provjeren partnere za čišćenje, a upravljanje, oglašavanje i cijene vodimo centralno.' },
];

export const metadata: Metadata = {
  title: 'Usluge – StayMira | Profesionalno upravljanje smještajem',
  description:
    'Kompletno upravljanje kratkoročnim najmom: oglašavanje, dinamične cijene, komunikacija s gostima, čišćenje, fotografije i booking web stranica.',
  openGraph: {
    title: 'Usluge – StayMira',
    description:
      'Sve što trebate za uspješan kratkoročni najam — od oglašavanja do čišćenja i izvještaja.',
    type: 'website',
  },
};

type Service = {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  result: string;
  highlight?: boolean;
};

const services: Service[] = [
  {
    id: 'oglasavanje',
    icon: '📢',
    title: 'Višekanalno oglašavanje',
    tagline: 'Vaš smještaj vidljiv svuda gdje gosti pretražuju',
    description:
      'Postavljamo i optimiziramo vaš smještaj na svim ključnim platformama — Booking.com, Airbnb, Vrbo, Expedia i TripAdvisor. Pišemo profesionalne opise na hrvatskom, engleskom i njemakom, biramo naslovne fotografije koje povećavaju klikove i upravljamo kalendarima i dostupnošću u realnom vremenu.',
    features: [
      'Listing na 5+ platformi (Booking, Airbnb, Vrbo, Expedia, TripAdvisor)',
      'Profesionalni opisi na HR / EN / DE / IT',
      'Optimizacija naslova i highlight-a za veći CTR',
      'Sinkronizacija kalendara — nema dvostrukih rezervacija',
      'Praćenje pozicija u pretraživanju i konkurencije',
      'Redovito ažuriranje i A/B testiranje sadržaja',
    ],
    result: 'Prosječno +30% vidljivosti u prvih 30 dana',
  },
  {
    id: 'cijene',
    icon: '💰',
    title: 'Dinamično upravljanje cijenama',
    tagline: 'Prava cijena u pravo vrijeme — automatski',
    description:
      'Koristimo algoritam koji svakodnevno analizira potražnju, sezonske trendove, lokalne događaje i cijene konkurencije. Cijena se automatski prilagođava — više u vrhuncu sezone i oko vikenda, niže u zadnji tren za ispunjavanje slobodnih noći. Ni jedan dan bez optimalne cijene.',
    features: [
      'Dnevna automatska prilagodba cijena',
      'Sezonska strategija i weekday/weekend razlike',
      'Analiza lokalnih događaja koji dižu potražnju',
      'Minimum / maksimum cijena prema vašem preferansama',
      'Posljednji tren popusti za pražnjenje slobodnih noći',
      'Transparentni izvještaj o promjenama cijena',
    ],
    result: 'U prosjeku +25–40% prihoda vs. statična cijena',
  },
  {
    id: 'gosti',
    icon: '💬',
    title: 'Komunikacija s gostima',
    tagline: '24/7 odgovor na svaki upit — vi ne morate ništa',
    description:
      'Preuzimamo svu komunikaciju s gostima od prvog upita do odjave. Odgovaramo u roku 30 minuta, šaljemo automatske instrukcije za dolazak, check-in vodič i povratne informacije. Profesionalan odnos prema gostima direktno utječe na ocjene i budućnost rezervacija.',
    features: [
      'Odgovor na upite unutar 30 minuta (24/7)',
      'Predputna komunikacija: instrukcije, check-in vodič',
      'Koordinacija check-in i check-out procedura',
      'Rješavanje pritužbi i hitnih situacija',
      'Poticanje gostiju na ostavaljanje recenzija',
      'Filtriranje nepouzdanih gostiju',
    ],
    result: 'Prosječna ocjena naših smještaja: 4.9★',
  },
  {
    id: 'ciscenje',
    icon: '🧹',
    title: 'Čišćenje i održavanje',
    tagline: 'Svaki dolazak gostiju — kao prvi',
    description:
      'Za smještaje u Osijeku nudimo kompletnu uslugu čišćenja vlastitim timom. Za ostale destinacije koordiniramo provjeren lokalni tim. Standardiziran protokol čišćenja, hotelski slaganje posteljine, kontrola kvalitete fotografijama — garantiramo konzistentnost na svakoj rotaciji.',
    features: [
      'Čišćenje po hotelskim standardima',
      'Zamjena posteljine i ručnika na svakom odlasku',
      'Kontrola kvalitete — foto dokumentacija',
      'Dopuna potrošnih materijala (sapun, WC papir, kava…)',
      'Prijava oštećenja i koordinacija popravaka',
      'Priprema smještaja za fotografiranje',
    ],
    result: 'Osijek: vlastiti tim | Ostatak HR: koordinirani partneri',
    highlight: true,
  },
  {
    id: 'fotografije',
    icon: '📸',
    title: 'Profesionalne fotografije i opis',
    tagline: 'Gosti biraju očima — ne prepustite to slučaju',
    description:
      'Organiziramo profesionalno fotografiranje vašeg smještaja i pišemo opise koji prodaju. Studije pokazuju da kvalitetne fotografije povećavaju broj klikova za 40% i omogućuju višu noćnu cijenu. Jednom snimljene, fotografije vrijede godinama.',
    features: [
      'Organizacija profesionalnog fotografiranja',
      'Priprema smještaja za snimanje',
      'HDR obrada i retuš fotografija',
      'Copywriting opisa na više jezika',
      'Highlight reel za Instagram i direktni marketing',
      'Savjeti za poboljšanje vizualne prezentacije',
    ],
    result: '+40% klikova na listing, +15% ostvarena cijena/noći',
  },
  {
    id: 'izvjestaji',
    icon: '📊',
    title: 'Praćenje rezervacija i izvještaji',
    tagline: 'Uvijek znate što se događa s vašim smještajem',
    description:
      'Svaki vlasnik ima pristup transparentnim mjesečnim izvještajima: sve rezervacije, prihodi, troškovi, popunjenost i usporedba s prethodnim periodom. Isplata prihoda jednom mjesečno, bez iznenađenja i skrivenih naknada.',
    features: [
      'Månačni izvještaj: rezervacije, prihodi, troškovi',
      'Usporedba s prethodnim periodom i konkurencijom',
      'Analiza sezona i preporuke za naredni period',
      'Transparentni prikaz svih naknada i odbitaka',
      'Isplata jednom/dva puta mjesečno',
      'Dostupnost za pitanja i konzultacije',
    ],
    result: '100% transparentnost — uvijek znate gdje je vaš novac',
  },
  {
    id: 'web',
    icon: '🌐',
    title: 'Booking web stranica',
    tagline: 'Direktne rezervacije bez 15–25% provizije platforma',
    description:
      'Za svakog klijenta izrađujemo personaliziranu booking web stranicu s online kalendarom, plaćanjem i automatskim potvrđivanjem rezervacija. Direktne rezervacije donose 15–25% više prihoda jer nema provizije Booking.com-u ili Airbnb-u. Stranica se sinkronizira s kalendarima svih platformi.',
    features: [
      'Dizajnirana prema brandu vašeg smještaja',
      'Online booking kalendar 24/7',
      'Plaćanje karticom (Stripe) i predautorizacija',
      'Automatski emailovi i SMS podsjetnici',
      'iCal sinkronizacija s Airbnb i Booking.com',
      'Višejezičnost (HR, EN, DE, IT)',
      'SEO optimizacija za Google pretraživanje',
      '0% provizije na direktne rezervacije',
    ],
    result: 'Ušteda 15–25% provizije na svakoj direktnoj rezervaciji',
    highlight: true,
  },
];

export default function UslugePage() {
  return (
    <>
      <FaqJsonLd items={uslugestFaq} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f2742] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a86a]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a86a]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-6">
                <Breadcrumbs
                  crumbs={[
                    { label: 'Početna', href: '/' },
                    { label: 'Usluge' },
                  ]}
                />
              </div>
              <div className="max-w-3xl">
                <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
                  Što nudimo
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                  Kompletno upravljanje<br />
                  <span className="text-[#c9a86a]">kratkoročnim najmom</span>
                </h1>
                <p className="text-[#e8dcc8]/70 text-lg leading-relaxed max-w-2xl">
                  Preuzimamo sve — od postavljanja oglasa i dinamičnih cijena do komunikacije s
                  gostima, čišćenja i isplate. Vi dobivate prihod, mi vodimo brigu.
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-6 mt-8">
                  {[
                    { value: '7', label: 'usluga u paketu' },
                    { value: '5+', label: 'platformi za oglašavanje' },
                    { value: '0%', label: 'skrivenih naknada' },
                    { value: '24h', label: 'odgovor gostima' },
                  ].map(({ value, label }) => (
                    <div key={label} className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[#c9a86a]">{value}</span>
                      <span className="text-[#e8dcc8]/50 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div style={{ position: 'relative' }} aria-hidden="true">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-white">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Jump links */}
        <section className="sticky top-16 z-30 bg-white border-b border-[#e8dcc8] py-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1 overflow-x-auto scrollbar-none py-3">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex-shrink-0 text-xs font-medium text-[#0f2742]/60 hover:text-[#c9a86a] px-3 py-1.5 rounded-full border border-transparent hover:border-[#c9a86a]/30 hover:bg-[#c9a86a]/5 transition-all"
                >
                  {s.icon} {s.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Services detail */}
        <div className="bg-white">
          {services.map((service, i) => (
            <section
              key={service.id}
              id={service.id}
              className={`py-20 border-b border-[#e8dcc8] ${
                i % 2 === 1 ? 'bg-[#f4efe6]' : 'bg-white'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                  <div className={`flex flex-col lg:flex-row gap-12 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Text column */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#0f2742] flex items-center justify-center text-2xl">
                          <span>{service.icon}</span>
                        </div>
                        {service.highlight && (
                          <span className="text-xs font-bold text-[#c9a86a] bg-[#c9a86a]/10 border border-[#c9a86a]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                            Istaknuto
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2742] mb-2">
                        {service.title}
                      </h2>
                      <p className="text-[#c9a86a] font-medium mb-5">{service.tagline}</p>
                      <p className="text-[#0f2742]/65 leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Result badge */}
                      <div className="inline-flex items-center gap-2 bg-[#0f2742] text-white text-sm font-semibold px-5 py-2.5 rounded-full">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {service.result}
                      </div>
                    </div>

                    {/* Features column */}
                    <div className="lg:w-96 flex-shrink-0">
                      <div className="bg-white rounded-2xl border border-[#e8dcc8] p-6 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#0f2742]/40 mb-5">
                          Što je uključeno
                        </p>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-[#c9a86a]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#c9a86a" strokeWidth="3">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                              </div>
                              <span className="text-sm text-[#0f2742]/70 leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </section>
          ))}
        </div>

        {/* Osijek CTA banner */}
        <section className="py-16 bg-[#0f2742]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                  <span className="inline-block text-[#c9a86a] text-xs font-bold uppercase tracking-widest mb-3">
                    Posebna napomena
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Osijek: komplet usluga <br />
                    <span className="text-[#c9a86a]">upravljanje + čišćenje</span>
                  </h2>
                  <p className="text-[#e8dcc8]/70 leading-relaxed">
                    Za smještaje u Osijeku nudimo kompletnu uslugu s vlastitim timom za čišćenje —
                    bez posrednika, konzistentna kvaliteta na svakom okretaju. Za ostatak Hrvatske,
                    koordiniramo provjeren lokalni tim.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-56">
                  <Link
                    href="/#analiza"
                    className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md text-center"
                  >
                    Besplatna analiza
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-center"
                  >
                    Kontaktirajte nas
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ za usluge */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-[#0f2742] mb-3">
                  Pitanja o uslugama
                </h2>
                <p className="text-[#0f2742]/55">Najčešća pitanja vlasnika o načinu rada</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: 'Mogu li koristiti samo neke usluge, a ne sve?',
                    a: 'Da, možemo prilagoditi suradnju vašim potrebama. Neki vlasnici žele samo upravljanje cijenama i oglasima, dok drugi prepuštaju sve. Kontaktirajte nas i zajedno dogovorimo što ima smisla za vaš smještaj.',
                  },
                  {
                    q: 'Koliko košta upravljanje smještajem?',
                    a: 'Naknada se kreće između 18% i 26% prihoda od rezervacija, ovisno o paketu i tipu smještaja. Nema fiksnih troškova ni skrivenih naknada — zarađujemo samo kad zarađujete vi. Detalje pogledajte u sekciji Paketi na početnoj stranici.',
                  },
                  {
                    q: 'Što ako već imam oglase na Booking.com i Airbnbu?',
                    a: 'Bez problema — optimiziramo vaše postojeće oglase ili otvaramo nove pod vašim računom, ovisno o dogovoru. Sinkroniziramo kalendare i preuzimamo komunikaciju.',
                  },
                  {
                    q: 'Koliko brzo mogu početi?',
                    a: 'Nakon dogovora, potrebno je 3–7 dana za postavljanje svega: fotografije, opisi, kanali, cijene. Obično primamo prve rezervacije unutar prvog tjedna aktivacije.',
                  },
                  {
                    q: 'Kada i kako dobivam isplatu?',
                    a: 'Isplata dolazi jednom ili dva puta mjesečno, s detaljnim izvještajem svih rezervacija, prihoda i naknada. Puna transparentnost — uvijek znate koji novac i za koje noći.',
                  },
                  {
                    q: 'Radite li samo za Osijek?',
                    a: 'Ne — radimo za smještaje diljem Hrvatske. Za Osijek imamo vlastiti tim za čišćenje. Za ostatak HR koordiniramo lokalne provjeren partnere za čišćenje, a upravljanje, oglašavanje i cijene vodimo centralno.',
                  },
                ].map(({ q, a }) => (
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

        {/* Final CTA */}
        <section className="py-16 bg-[#f4efe6] border-t border-[#e8dcc8]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <FadeIn>
              <span className="inline-block text-[#c9a86a] text-xs font-bold uppercase tracking-widest mb-3">
                Besplatno i bez obveze
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2742] mb-4">
                Analiza vašeg smještaja
              </h2>
              <p className="text-[#0f2742]/55 mb-8 leading-relaxed">
                Ispunite kratku formu i unutar 24 sata dobit ćete procjenu potencijalnog prihoda i
                prijedlog strategije za vaš smještaj — bez obveze.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/#analiza"
                  className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-md"
                >
                  Zatraži besplatnu analizu
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-[#e8dcc8] hover:border-[#c9a86a]/40 text-[#0f2742] font-semibold px-8 py-4 rounded-full transition-all duration-200"
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
