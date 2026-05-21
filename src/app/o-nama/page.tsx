import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';

export const metadata: Metadata = {
  title: 'O nama – StayMira',
  description:
    'Upoznajte tim iza StayMira. Lokalni stručnjaci za kratkoročni najam u Hrvatskoj s fokusom na prihod, recenzije i povjerenje vlasnika.',
};

const values = [
  { icon: '🎯', title: 'Rezultati na prvom mjestu', desc: 'Naša naknada ovisi o vašem prihodu. Što više zaradite, više zarađujemo i mi. Interesi su nam usklađeni.' },
  { icon: '🔍', title: 'Transparentnost uvijek', desc: 'Bez skrivenih naknada, bez nejasnih izvještaja. Svaki euro koji prođe kroz vaš smještaj vidljiv je u mjesečnom pregledu.' },
  { icon: '🤝', title: 'Partnerstvo, ne usluga', desc: 'Nismo agencija koja uzima postotak i nestaje. Aktivno upravljamo, pratimo trendove i predlažemo poboljšanja.' },
  { icon: '📍', title: 'Lokalno znanje', desc: 'Poznajemo HR tržište izbliza — sezonu, navike gostiju, regulativu i regionalne posebnosti koje utječu na prihod.' },
];

const teamMembers = [
  {
    name: 'Ime Prezime',
    role: 'Osnivač i direktor',
    bio: 'Više od 10 godina iskustva u turizmu i kratkoročnom najmu. Upravljao portfeljem od 50+ objekata diljem Dalmacije i Istre.',
    emoji: '👨‍💼',
  },
  {
    name: 'Ime Prezime',
    role: 'Voditeljica operativa',
    bio: 'Koordinira sve operativne procese — od dočeka gostiju do organizacije čišćenja i rješavanja hitnih situacija.',
    emoji: '👩‍💼',
  },
  {
    name: 'Ime Prezime',
    role: 'Stručnjak za prihode',
    bio: 'Specijalist za dinamično upravljanje cijenama i optimizaciju profila na platformama. Povećao je prihode klijenata prosječno za 38%.',
    emoji: '📊',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0f2742] relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #c9a86a 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
                O nama
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Stručnjaci za kratkoročni
                <br />
                <span className="text-[#c9a86a]">najam u Hrvatskoj</span>
              </h1>
              <p className="text-[#e8dcc8]/70 text-xl leading-relaxed max-w-2xl">
                StayMira je nastala iz jednostavnog uvjerenja: vlasnici smještaja zaslužuju
                profesionalnog partnera koji brine o svemu — dok oni mirno ubiru prihod.
              </p>
            </FadeIn>
          </div>
          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-[50px] fill-white">
              <path d="M0,50 C360,0 1080,0 1440,50 L1440,50 L0,50 Z" />
            </svg>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
                    Naša priča
                  </span>
                  <h2 className="text-3xl font-bold text-[#0f2742] mb-5">
                    Zašto smo osnovali StayMira
                  </h2>
                  <div className="flex flex-col gap-4 text-[#0f2742]/65 leading-relaxed">
                    <p>
                      Vidjeli smo previše vlasnika koji su imali sjajan smještaj, ali su gubili
                      rezervacije zbog loših fotografija, neodgovorenih poruka i fiksnih cijena koje
                      ne prate potražnju.
                    </p>
                    <p>
                      Osnovali smo StayMira kako bismo vlasnicima dali pristup profesionalnom
                      upravljanju koje su do tada mogle priuštiti samo hotelske kompanije.
                    </p>
                    <p>
                      Danas upravljamo smještajima od Osijeka do Dubrovnika, od gradskih apartmana
                      do luksuznih vila s bazenom.
                    </p>
                  </div>
                </div>
                {/* Visual placeholder */}
                <div className="bg-[#0f2742]/5 border border-[#e8dcc8] rounded-2xl aspect-square flex items-center justify-center">
                  <div className="text-center flex flex-col items-center gap-3 p-8">
                    <span className="text-6xl opacity-30">🏡</span>
                    <p className="text-[#0f2742]/30 text-sm">Fotografija tima / ureda</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#f4efe6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
                  Naše vrijednosti
                </span>
                <h2 className="text-3xl font-bold text-[#0f2742]">Po čemu nas prepoznaju klijenti</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4 bg-white rounded-2xl border border-[#e8dcc8] p-6">
                    <span className="text-2xl flex-shrink-0">{v.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#0f2742] mb-1.5">{v.title}</h3>
                      <p className="text-[#0f2742]/60 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
                  Tim
                </span>
                <h2 className="text-3xl font-bold text-[#0f2742] mb-3">Upoznajte nas</h2>
                <p className="text-[#0f2742]/55">
                  Zamijenite ove kartice s pravim profilima članova vašeg tima.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {teamMembers.map((m) => (
                  <div key={m.name} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-[#e8dcc8] bg-[#f4efe6]/50">
                    <div className="w-20 h-20 rounded-full bg-[#0f2742]/5 flex items-center justify-center text-4xl">
                      {m.emoji}
                    </div>
                    <div>
                      <p className="font-bold text-[#0f2742]">{m.name}</p>
                      <p className="text-[#c9a86a] text-xs font-medium mt-0.5">{m.role}</p>
                    </div>
                    <p className="text-[#0f2742]/55 text-sm leading-relaxed">{m.bio}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0f2742]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Razgovarajmo o vašem smještaju</h2>
            <p className="text-[#e8dcc8]/60 mb-6">Besplatna analiza — bez naplate i bez obveza.</p>
            <a
              href="/#analiza"
              className="inline-flex items-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
            >
              Zatraži besplatnu analizu
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingUI />
    </>
  );
}
