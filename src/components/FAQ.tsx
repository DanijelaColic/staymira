'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Koliko košta upravljanje smještajem?',
    a: 'Naknada se kreće od 18% do 26% od ostvarenog prihoda, ovisno o odabranom paketu i tipu smještaja. Ne postoje fiksne naknade ni startni troškovi — zarađujemo zajedno s vama. Što više prihoda ostvarite, više zarađujemo i mi.',
  },
  {
    q: 'Moram li potpisati dugoročni ugovor?',
    a: 'Ne. Naša suradnja temelji se na povjerenju i rezultatima. Ugovor ima otkazni rok od 30 dana bez penala — ako nismo zadovoljili vaša očekivanja, slobodni ste krenuti dalje. Naš cilj je da vi nikada ne budete u situaciji u kojoj to trebate koristiti.',
  },
  {
    q: 'Što se dogodi s mojim postojećim profilima na Bookingu i Airbnbu?',
    a: 'Preuzimamo upravljanje vašim postojećim profilima ili ih optimiziramo od nule. Pristup ostaje na vašem računu — vi imate uvid u sve rezervacije i poruke u svakom trenutku. Transparentnost je za nas temeljni uvjet suradnje.',
  },
  {
    q: 'Nudite li uslugu čišćenja na svim lokacijama?',
    a: 'Direktno organiziramo čišćenje u Osijeku gdje imamo vlastitu ekipu. Za ostale destinacije surađujemo s pouzdanim lokalnim partnerima koje mi koordiniramo — vlasnik ne mora ništa organizirati ni pratiti.',
  },
  {
    q: 'Kako funkcionira web stranica za direktne rezervacije?',
    a: 'Za svaki objekt izrađujemo profesionalnu booking web stranicu s kalendarom dostupnosti, online rezervacijom i plaćanjem. Gosti mogu rezervirati direktno bez provizije platformama (15–25%). Stranica je na HR/EN/DE/IT jeziku, mobilno optimizirana i sinkronizirana s Airbnb i Booking kalendarom kako bi se izbjegle dvostruke rezervacije.',
  },
  {
    q: 'Koliko brzo mogu početi s upravljanjem?',
    a: 'Nakon potpisivanja ugovora, obično smo operativni u roku 7–14 dana. Taj period koristimo za profesionalne fotografije, postavljanje profila, optimizaciju opisa i sinkronizaciju kalendara. Hitni slučajevi su moguć uz dogovor.',
  },
  {
    q: 'Kako se isplaćuje prihod?',
    a: 'Prihod se isplaćuje jednom mjesečno, uz detaljan izvještaj svih rezervacija i troškova. Naknada se automatski oduzima, a vi na račun dobivate neto iznos. Isplate idu izravno na vaš bankovni račun.',
  },
  {
    q: 'Što ako gost napravi štetu?',
    a: 'Obavljamo protokol provjere gostiju i naplaćujemo kauciju tamo gdje je to moguće. U slučaju štete, odmah vas obavještavamo, dokumentiramo stanje i pomažemo u pokretanju zahtjeva za naknadu prema platformi ili gostu.',
  },
  {
    q: 'Mogu li pratiti što se događa s mojim smještajem?',
    a: 'Svaki vlasnik dobiva pristup portalu ili redovne izvještaje s pregledom rezervacija, prihoda, ocjena i troškova. Nismo crna kutija — sve što se događa s vašim smještajem možete pratiti u realnom vremenu.',
  },
  {
    q: 'Radite li samo s novim vlasnicima ili i s onima koji već iznajmljuju?',
    a: 'Radimo s oba. Vlasnike koji tek počinju vodimo kroz cijeli proces postavljanja, a onima koji već iznajmljuju preuzimamo profil, optimiziramo ga i povećavamo prihode. Kod preuzimanja aktivnog smještaja tranzicija je bezbolna i bez prekida rezervacija.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
            Česta pitanja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742] mb-4">
            Imate pitanja? Imamo odgovore.
          </h2>
          <p className="text-[#0f2742]/60 text-lg leading-relaxed">
            Odgovaramo na najčešće nedoumice vlasnika smještaja koji razmatraju profesionalno
            upravljanje.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-[#c9a86a]/40 shadow-md' : 'border-[#e8dcc8] hover:border-[#c9a86a]/20'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#f4efe6]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm leading-snug ${isOpen ? 'text-[#0f2742]' : 'text-[#0f2742]/80'}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#0f2742] rotate-45' : 'bg-[#e8dcc8]'
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 2v8M2 6h8"
                        stroke={isOpen ? '#c9a86a' : '#0f2742'}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 bg-[#f4efe6]/30">
                    <p className="text-[#0f2742]/65 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#0f2742]/50 text-sm mb-4">
            Niste pronašli odgovor koji tražite?
          </p>
          <a
            href="#analiza"
            className="inline-flex items-center gap-2 bg-[#0f2742] hover:bg-[#1a3a5c] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-sm"
          >
            Pošaljite nam pitanje
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
