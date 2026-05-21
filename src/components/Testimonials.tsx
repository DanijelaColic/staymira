'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote:
      'Prva sezona s StayMirom donijela mi je više novca nego dvije prethodne zajedno. I nisam jednom morala otvoriti telefon zbog gostiju. Konačno imam slobodno ljeto.',
    name: 'Marija Kovačević',
    role: 'Vlasnica vile, Split',
    rating: 5,
    avatar: 'MK',
    result: '+52% prihoda',
  },
  {
    quote:
      'Živim u Zagrebu, apartman je u Dubrovniku. StayMira je za mene kao imati menadžera na licu mjesta — uvijek dostupni, uvijek profesionalni. Ocjena gostiju je s 4.3 skočila na 4.98.',
    name: 'Tomislav Radović',
    role: 'Vlasnik apartmana, Dubrovnik',
    rating: 5,
    avatar: 'TR',
    result: '4.98★ ocjena',
  },
  {
    quote:
      'Nikad nisam mislila da kuća može zarađivati i u travnju. StayMira je otvorila sezonu koja mi je donijela neočekivani prihod. Organizacija je savršena, gosti su oduševljeni.',
    name: 'Ana Petrović',
    role: 'Vlasnica kuće za odmor, Istra',
    rating: 5,
    avatar: 'AP',
    result: 'Sezona 7 mj',
  },
  {
    quote:
      'Nakon 3 godine samostalnog upravljanja bila sam iscrpljena. StayMira mi je preuzela sve — od rezervacija do čišćenja. Prihod je veći, a stres ne postoji.',
    name: 'Ivana Blažević',
    role: 'Vlasnica 2 apartmana, Zadar',
    rating: 5,
    avatar: 'IB',
    result: '+38% prihoda',
  },
  {
    quote:
      'Posebno sam zadovoljan transparentnošću — svaki mjesec dobivam detaljno izvješće s prihodima, brojem noćenja i recenzijama. Točno znam što se događa s mojom imovinom.',
    name: 'Petar Jurić',
    role: 'Vlasnik vile, Opatija',
    rating: 5,
    avatar: 'PJ',
    result: '91% popunjenost',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#c9a86a">
          <path d="M7 1l1.8 3.6L13 5.4l-3 2.9.7 4.1L7 10.4l-3.7 2 .7-4.1-3-2.9 4.2-.8L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay every 5s
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-[#0f2742] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
            Iskustva vlasnika
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Što kažu vlasnici
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div
            key={current}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 relative"
            style={{ animation: 'fadeSlideIn 0.4s ease' }}
          >
            {/* Large quote mark */}
            <div
              className="absolute top-6 right-8 text-[#c9a86a]/15 font-serif leading-none select-none"
              style={{ fontSize: '8rem', lineHeight: 1 }}
              aria-hidden="true"
            >
              "
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-[#c9a86a]/20 border-2 border-[#c9a86a]/40 flex items-center justify-center flex-shrink-0">
                <span className="text-[#c9a86a] font-bold text-sm">{t.avatar}</span>
              </div>

              <div className="flex-1">
                <StarRating count={t.rating} />
                <blockquote className="text-[#e8dcc8]/85 text-lg leading-relaxed mt-3 mb-5 italic">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-[#e8dcc8]/45 text-sm">{t.role}</p>
                  </div>
                  <div className="bg-[#c9a86a]/15 border border-[#c9a86a]/30 text-[#c9a86a] text-sm font-bold px-4 py-1.5 rounded-full">
                    {t.result}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-[#c9a86a]'
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Recenzija ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                aria-label="Prethodna recenzija"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                aria-label="Sljedeća recenzija"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/10 text-center">
          {[
            { metric: '100+', label: 'zadovoljnih vlasnika' },
            { metric: '4.9★', label: 'prosječna ocjena gostiju' },
            { metric: '0h', label: 'vremena vlasnika tjedno' },
          ].map(({ metric, label }) => (
            <div key={label}>
              <p className="text-2xl font-black text-white">{metric}</p>
              <p className="text-[#e8dcc8]/45 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
