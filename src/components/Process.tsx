const steps = [
  {
    number: '01',
    title: 'Besplatna analiza smještaja',
    description:
      'Kontaktirate nas, a mi analiziramo potencijal vašeg smještaja — lokaciju, stanje, sezonalnost i trenutne prihode. Bez troškova i obveza.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
        <path d="M17 17l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Prijedlog strategije i cijena',
    description:
      'Pripremamo personaliziranu strategiju upravljanja: cjenovni model, kanale prodaje, plan komunikacije i procijenjen potencijalni prihod.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Priprema oglasa i kanala prodaje',
    description:
      'Organiziramo profesionalne fotografije, pišemo atraktivne opise i postavljamo smještaj na sve dogovorene platforme. Vaš objekt je spreman za rezervacije.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 9l2 2 4-4 2 2" stroke="#c9a86a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Aktivno upravljanje rezervacijama',
    description:
      'Preuzimamo sve: odgovaranje na upite, potvrdu rezervacija, komunikaciju s gostima, organizaciju čišćenja i praćenje kalendarasvakodnevno.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 6v6l4 2" stroke="#c9a86a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Mjesečni izvještaj i isplata',
    description:
      'Svaki mjesec dobivate jasan izvještaj sa svim rezervacijama, prihodima i troškovima. Vaš prihod se isplaćuje prema dogovorenom rasporedu.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 9h20" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="15" r="2" stroke="#c9a86a" strokeWidth="1.8" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="kako-radimo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
            Proces suradnje
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742] mb-4">
            Kako funkcionira suradnja
          </h2>
          <p className="text-[#0f2742]/60 text-lg leading-relaxed">
            Pet jednostavnih koraka koji vaš smještaj pretvaraju u siguran i rastuć izvor prihoda.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line – desktop */}
          <div className="hidden lg:block absolute top-10 left-[calc(10%+24px)] right-[calc(10%+24px)] h-px bg-gradient-to-r from-transparent via-[#e8dcc8] to-transparent" aria-hidden="true" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center gap-4">
                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-[#0f2742] flex flex-col items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-[#c9a86a] text-xs font-bold tracking-wider">{step.number}</span>
                  <span className="text-white mt-0.5">{step.icon}</span>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0f2742] text-sm leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#0f2742]/55 text-xs leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow between steps – desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-10 z-20 text-[#c9a86a]" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#analiza"
            className="inline-flex items-center gap-2 bg-[#0f2742] hover:bg-[#1a3a5c] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Počnite danas – besplatna analiza
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
