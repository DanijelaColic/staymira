import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Politika privatnosti – StayMira',
  description: 'Informacije o prikupljanju i obradi osobnih podataka na StayMira web stranici.',
};

const sections = [
  {
    title: '1. Tko smo',
    content:
      'StayMira je tvrtka za profesionalno upravljanje smještajem sa sjedištem u Hrvatskoj. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše osobne podatke u skladu s Uredbom (EU) 2016/679 (GDPR) i Zakonom o provedbi Opće uredbe o zaštiti podataka.',
  },
  {
    title: '2. Koje podatke prikupljamo',
    content:
      'Prikupljamo podatke koje nam dobrovoljno dostavljate putem kontakt forme: ime i prezime, email adresu, broj telefona, lokaciju i tip smještaja. Automatski prikupljamo tehničke podatke kao što su IP adresa, vrsta preglednika i stranice koje posjećujete, korištenjem kolačića i analitičkih alata.',
  },
  {
    title: '3. Svrha obrade podataka',
    content:
      'Vaše podatke koristimo isključivo za: (1) odgovaranje na vaše upite i pružanje traženih informacija, (2) slanje ponuda i prijedloga suradnje koje ste zatražili, (3) poboljšanje naše web stranice i korisničkog iskustva, (4) ispunjavanje zakonskih obveza.',
  },
  {
    title: '4. Pravna osnova obrade',
    content:
      'Obrada vaših podataka temelji se na: pristanku koji ste dali ispunjavanjem forme (članak 6(1)(a) GDPR-a), legitimnom interesu za odgovaranje na poslovne upite (članak 6(1)(f) GDPR-a) ili ispunjenju ugovora (članak 6(1)(b) GDPR-a) kada je to primjenjivo.',
  },
  {
    title: '5. Dijeljenje podataka s trećim stranama',
    content:
      'Ne prodajemo niti iznajmljujemo vaše osobne podatke. Podatke možemo dijeliti s povjerenicima za obradu podataka koji pružaju tehničke usluge (hosting, analitika) isključivo radi izvršavanja naše usluge i u skladu s ovom politikom.',
  },
  {
    title: '6. Čuvanje podataka',
    content:
      'Osobne podatke čuvamo onoliko dugo koliko je potrebno za ostvarivanje svrhe prikupljanja ili dok ne povučete suglasnost. Podatke iz kontakt formi čuvamo najviše 2 godine od posljednjeg kontakta.',
  },
  {
    title: '7. Vaša prava',
    content:
      'Imate pravo pristupa, ispravka, brisanja i prenosivosti vaših osobnih podataka. Imate pravo prigovora na obradu i pravo ograničenja obrade. Za ostvarivanje ovih prava kontaktirajte nas na privatnost@staymira.hr. Imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP).',
  },
  {
    title: '8. Kolačići',
    content:
      'Koristimo nužne kolačiće za funkcioniranje stranice te analitičke kolačiće uz vašu suglasnost. Možete upravljati kolačićima putem postavki preglednika. Opoziv suglasnosti ne utječe na zakonitost prethodne obrade.',
  },
  {
    title: '9. Sigurnost podataka',
    content:
      'Primjenjujemo tehničke i organizacijske mjere zaštite podataka sukladne standardima industrije. Svi podaci prenose se šifriranom HTTPS vezom.',
  },
  {
    title: '10. Izmjene politike',
    content:
      'Ovu politiku možemo ažurirati. O značajnim izmjenama obavijestit ćemo vas putem vidljive obavijesti na stranici. Datum zadnje izmjene naveden je na dnu dokumenta.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <div className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-10">
              <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
                Pravne informacije
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#0f2742] mb-3">
                Politika privatnosti
              </h1>
              <p className="text-[#0f2742]/50 text-sm">
                Zadnja izmjena: {new Date().toLocaleDateString('hr-HR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            {/* Intro */}
            <div className="bg-[#0f2742] rounded-2xl p-6 mb-10">
              <p className="text-[#e8dcc8]/80 text-sm leading-relaxed">
                StayMira ozbiljno shvaća zaštitu vaše privatnosti. Ova politika objašnjava na
                razumljiv način koje podatke prikupljamo, zašto ih prikupljamo i kako ih štitimo.
                Ako imate pitanja, uvijek nas možete kontaktirati na{' '}
                <a href="mailto:privatnost@staymira.hr" className="text-[#c9a86a] hover:underline">
                  privatnost@staymira.hr
                </a>
                .
              </p>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-8">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-[#0f2742] mb-2">{s.title}</h2>
                  <p className="text-[#0f2742]/65 text-sm leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-12 p-6 rounded-2xl bg-[#f4efe6] border border-[#e8dcc8]">
              <p className="text-sm text-[#0f2742]/70">
                <strong className="text-[#0f2742]">Kontakt za pitanja o privatnosti:</strong>
                <br />
                Email:{' '}
                <a href="mailto:privatnost@staymira.hr" className="text-[#c9a86a] hover:underline">
                  privatnost@staymira.hr
                </a>
                <br />
                Adresa: StayMira, Zagreb, Hrvatska
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
