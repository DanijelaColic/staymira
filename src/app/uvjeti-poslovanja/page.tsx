import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Uvjeti poslovanja – StayMira',
  description:
    'Opći uvjeti poslovanja StayMira za usluge upravljanja smještajem. Prava i obveze vlasnika smještaja i pružatelja usluga.',
  robots: { index: true, follow: true },
};

const lastUpdated = '22. svibnja 2026.';

const sections = [
  {
    title: '1. Uvodne odredbe',
    content: `Ovi Opći uvjeti poslovanja (dalje: "Uvjeti") uređuju odnos između StayMira (dalje: "StayMira", "Pružatelj usluge") i vlasnika smještaja (dalje: "Vlasnik", "Korisnik") koji koristi usluge upravljanja kratkoročnim najmom.

StayMira je tvrtka registrirana u Republici Hrvatskoj koja pruža profesionalne usluge upravljanja smještajem za kratkoročni najam putem platformi kao što su Booking.com, Airbnb, Vrbo i ostalih, te putem direktnih rezervacija.

Prihvaćanjem ovih Uvjeta ili potpisivanjem ugovora o suradnji, Vlasnik izražava suglasnost s ovim Uvjetima u cijelosti.`,
  },
  {
    title: '2. Predmet usluge',
    content: `StayMira pruža usluge upravljanja smještajem koje uključuju, ovisno o odabranom paketu:

• Postavljanje i optimizaciju oglasa na digitalnim platformama za kratkoročni najam
• Dinamično upravljanje cijenama i strategijom prihoda
• Komunikaciju s gostima (upiti, rezervacije, check-in, check-out, reklamacije)
• Koordinaciju čišćenja i održavanja smještaja između boravaka gostiju
• Izradu i upravljanje booking web stranicom za direktne rezervacije
• Redovne financijske izvještaje i isplate prihoda Vlasniku

Detaljan popis usluga prema paketu naveden je u dokumentu "Pregled paketa" koji je sastavni dio ugovora o suradnji.`,
  },
  {
    title: '3. Naknada i plaćanje',
    content: `StayMira naplaćuje naknadu isključivo kao postotak od neto prihoda od rezervacija ostvarenih u upravljanom smještaju, kako je definirano ugovorom o suradnji:

• Starter paket: 18% neto prihoda od rezervacija
• Standard paket: 22% neto prihoda od rezervacija  
• Premium paket: 26% neto prihoda od rezervacija

Neto prihod od rezervacija definira se kao iznos koji gost plaća za smještaj, isključujući turističku pristojbu i naknadu za čišćenje koja se direktno naplaćuje gostu.

StayMira nema fiksnih naknada niti naknada za postavljanje. StayMira zarađuje isključivo kad zarađuje i Vlasnik.

Isplata prihoda Vlasniku vrši se jednom ili dva puta mjesečno (prema dogovorenom paketu), uz priloženi detaljan izvještaj o svim rezervacijama, prihodima i odbijenim naknadama.`,
  },
  {
    title: '4. Obveze StayMire',
    content: `StayMira se obvezuje:

• Profesionalno upravljati oglasima Vlasnikovog smještaja u skladu s dogovorenim paketom
• Odgovarati na upite i poruke gostiju u razumnom roku (načelno do 1 sat)
• Obavještavati Vlasnika o svim bitnim pitanjima u vezi s upravljanjem smještaja
• Dostavljati točne i pravovremene financijske izvještaje
• Čuvati povjerljivost svih poslovnih informacija Vlasnika
• Upravljati smještajem u skladu s važećim zakonima i propisima RH`,
  },
  {
    title: '5. Obveze Vlasnika',
    content: `Vlasnik se obvezuje:

• Osigurati da je smještaj u odgovarajućem stanju za primanje gostiju
• Posjedovati svu potrebnu dokumentaciju za kratkoročni najam (rješenje o kategorizaciji, registracija turističke djelatnosti i sl.)
• Obavijestiti StayMiru o svim planiranim privatnim boravcima u smještaju s dovoljnim prethodnim otkazom
• Ne mijenjati podatke oglasa, cijene ili dostupnost bez prethodne konzultacije sa StayMirom
• Pravovremeno podmiriti svoje eventualne obveze prema platformama (Booking.com, Airbnb i sl.)
• Odmah obavijestiti StayMiru o svim kvarovima ili problemima u smještaju`,
  },
  {
    title: '6. Trajanje i raskid ugovora',
    content: `Minimalni period suradnje je 3 (tri) kalendarska mjeseca od dana potpisivanja ugovora o suradnji.

Nakon isteka minimalnog perioda, ugovor se automatski produžuje na neodređeno vrijeme, a svaka strana ga može raskinuti uz pisanu obavijest od 30 (trideset) dana.

StayMira može raskinuti ugovor bez otkaznog roka u slučaju:
• Grubog kršenja ovih Uvjeta od strane Vlasnika
• Pravnih ili regulatornih problema vezanih uz smještaj
• Nemogućnosti pristupa smještaju za obavljanje ugovorenih usluga`,
  },
  {
    title: '7. Platforme za oglašavanje',
    content: `Oglasi se postavljaju u ime Vlasnika ili u ime StayMire, ovisno o dogovoru. Prihodi se usmjeravaju prema dogovorenom modelu.

Vlasnik je suglasan da StayMira postupa kao ovlašteni predstavnik u komunikaciji s platformama (Booking.com, Airbnb, Vrbo, Expedia i sl.) za potrebe upravljanja oglasom.

StayMira ne jamči određenu razinu prihoda ni popunjenosti — rezultati ovise o kvaliteti smještaja, lokaciji, sezoni i tržišnim uvjetima. StayMira se obvezuje primjenjivati sve profesionalne metode za maksimizaciju prihoda.`,
  },
  {
    title: '8. Čišćenje i održavanje',
    content: `Za smještaje u Osijeku, StayMira pruža uslugu čišćenja putem vlastitog tima. Za smještaje na ostalim lokacijama, StayMira koordinira provjerene lokalne partnere za čišćenje.

Troškovi čišćenja pokrivaju se naplatom naknade za čišćenje gostima (cleaning fee) koja se unaprijed dogovara i prikazuje u oglasu. Cleaning fee nije uključen u neto prihod koji je osnova za obračun naknade StayMiri.

StayMira nije odgovorna za štete nastale uslijed normalnog trošenja smještaja. Za štete uzrokovane gostima, StayMira pokreće postupak naknade štete prema pravilima relevantne platforme.`,
  },
  {
    title: '9. Odgovornost i ograničenja',
    content: `StayMira je odgovorna za profesionalno pružanje ugovorenih usluga, ali ne može garantirati određenu razinu rezervacija, prihoda ili ocjena gostiju.

StayMira nije odgovorna za:
• Štete uzrokovane višom silom (elementarne nepogode, pandemije, regulatorne promjene)
• Gubitak prihoda zbog tehničkih problema platformi (Booking.com, Airbnb i sl.)
• Štete nastale krivnjom gostiju, uz napomenu da StayMira aktivno radi na naplati naknade štete

Ukupna odgovornost StayMire prema Vlasniku ne može premašiti iznos naknada primljenih od Vlasnika u posljednjih 3 (tri) kalendarska mjeseca.`,
  },
  {
    title: '10. Povjerljivost',
    content: `Obje strane obvezuju se čuvati povjerljivost svih poslovnih informacija, poslovnih tajni i osobnih podataka do kojih dođu u okviru suradnje.

StayMira obrađuje osobne podatke u skladu s Politikom privatnosti dostupnom na staymira.hr/privatnost, koja je usklađena s GDPR-om i relevantnim zakonodavstvom RH.`,
  },
  {
    title: '11. Izmjene uvjeta',
    content: `StayMira zadržava pravo izmjene ovih Uvjeta. O svim bitnim izmjenama Vlasnik će biti obaviješten pisanim putem (emailom) najmanje 14 dana unaprijed.

Nastavak suradnje nakon stupanja izmjena na snagu smatra se prihvaćanjem izmijenjenih Uvjeta.`,
  },
  {
    title: '12. Mjerodavno pravo i nadležnost',
    content: `Na ove Uvjete i sve odnose između StayMire i Vlasnika primjenjuje se pravo Republike Hrvatske.

Za sporove koji ne mogu biti riješeni sporazumno, nadležan je stvarno nadležni sud u Zagrebu, Republika Hrvatska.

StayMira i Vlasnik će sve sporove nastojati riješiti mirnim putem, sukladno načelu dobre vjere i poštenja.`,
  },
];

export default function UvjetiPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-[#0f2742]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
              Pravni dokumenti
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">
              Uvjeti poslovanja
            </h1>
            <p className="text-[#e8dcc8]/60 text-sm">
              Zadnja izmjena: {lastUpdated}
            </p>
          </div>
          <div style={{ position: 'relative' }} aria-hidden="true">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-white">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* TOC sidebar */}
              <aside className="hidden lg:block w-52 flex-shrink-0">
                <div className="sticky top-28">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#0f2742]/40 mb-3">
                    Sadržaj
                  </p>
                  <nav className="flex flex-col gap-1">
                    {sections.map((s) => (
                      <a
                        key={s.title}
                        href={`#${s.title.replace(/\s+/g, '-').toLowerCase()}`}
                        className="text-xs text-[#0f2742]/55 hover:text-[#c9a86a] py-1 pl-3 border-l-2 border-[#e8dcc8] hover:border-[#c9a86a] transition-all duration-200"
                      >
                        {s.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Sections */}
              <div className="flex-1 min-w-0">
                <div className="prose-sm max-w-none text-[#0f2742]/70 leading-relaxed space-y-10">
                  {sections.map((section) => (
                    <div
                      key={section.title}
                      id={section.title.replace(/\s+/g, '-').toLowerCase()}
                    >
                      <h2 className="text-lg font-bold text-[#0f2742] mb-3 scroll-mt-28">
                        {section.title}
                      </h2>
                      <div className="text-sm leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Kontakt box */}
                <div className="mt-12 bg-[#f4efe6] border border-[#e8dcc8] rounded-2xl p-6">
                  <h3 className="font-bold text-[#0f2742] mb-2">Pitanja o uvjetima poslovanja?</h3>
                  <p className="text-sm text-[#0f2742]/60 mb-4 leading-relaxed">
                    Ako imate pitanja o ovim uvjetima ili o suradnji s StayMirom, slobodno
                    nas kontaktirajte.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-5 py-2.5 rounded-full transition-all text-sm"
                    >
                      Kontaktirajte nas
                    </Link>
                    <a
                      href="mailto:info@staymira.hr"
                      className="inline-flex items-center justify-center gap-2 bg-white border border-[#e8dcc8] hover:border-[#c9a86a]/40 text-[#0f2742] font-semibold px-5 py-2.5 rounded-full transition-all text-sm"
                    >
                      info@staymira.hr
                    </a>
                  </div>
                </div>

                {/* Links to other legal */}
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <Link href="/privatnost" className="text-[#c9a86a] hover:underline">
                    Politika privatnosti
                  </Link>
                  <span className="text-[#0f2742]/20">·</span>
                  <Link href="/" className="text-[#0f2742]/50 hover:text-[#c9a86a] transition-colors">
                    Povratak na početnu
                  </Link>
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
