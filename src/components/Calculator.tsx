'use client';

import { useState, useMemo } from 'react';

// Seasonal occupancy rates and avg ADR multipliers per region
const regionData: Record<string, { name: string; occupancy: number; adrMultiplier: number }> = {
  split: { name: 'Split / Dalmacija', occupancy: 0.82, adrMultiplier: 1.0 },
  zadar: { name: 'Zadar', occupancy: 0.78, adrMultiplier: 0.92 },
  dubrovnik: { name: 'Dubrovnik', occupancy: 0.88, adrMultiplier: 1.25 },
  istra: { name: 'Istra', occupancy: 0.76, adrMultiplier: 0.95 },
  kvarner: { name: 'Kvarner', occupancy: 0.74, adrMultiplier: 0.9 },
  zagreb: { name: 'Zagreb', occupancy: 0.72, adrMultiplier: 0.85 },
  osijek: { name: 'Osijek', occupancy: 0.65, adrMultiplier: 0.7 },
  other: { name: 'Ostalo', occupancy: 0.68, adrMultiplier: 0.8 },
};

const propertyData: Record<string, { name: string; adrBase: number; stayMiraBoost: number }> = {
  studio: { name: 'Studio / garsonijera', adrBase: 65, stayMiraBoost: 0.3 },
  apartment: { name: 'Apartman (1–3 sobe)', adrBase: 95, stayMiraBoost: 0.32 },
  house: { name: 'Kuća za odmor', adrBase: 160, stayMiraBoost: 0.35 },
  villa: { name: 'Vila s bazenom', adrBase: 380, stayMiraBoost: 0.38 },
};

function formatEur(value: number) {
  return new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

export default function Calculator() {
  const [region, setRegion] = useState('split');
  const [propertyType, setPropertyType] = useState('apartment');
  const [nightsPerYear, setNightsPerYear] = useState(120);

  const result = useMemo(() => {
    const r = regionData[region];
    const p = propertyData[propertyType];

    const adrCurrent = Math.round(p.adrBase * r.adrMultiplier);
    const incomeDiy = adrCurrent * nightsPerYear;

    // With StayMira: better ADR + more nights (occupancy boost)
    const adrStayMira = Math.round(adrCurrent * (1 + p.stayMiraBoost * 0.4));
    const occupancyBoostNights = Math.round(nightsPerYear * (1 + p.stayMiraBoost * 0.25));
    const grossStayMira = adrStayMira * occupancyBoostNights;
    // StayMira fee ~20%
    const feeStayMira = Math.round(grossStayMira * 0.2);
    const netStayMira = grossStayMira - feeStayMira;

    const gain = netStayMira - incomeDiy;
    const gainPercent = Math.round((gain / incomeDiy) * 100);

    return { adrCurrent, incomeDiy, adrStayMira, grossStayMira, feeStayMira, netStayMira, gain, gainPercent };
  }, [region, propertyType, nightsPerYear]);

  const selectClass =
    'w-full bg-white border border-[#e8dcc8] rounded-xl px-4 py-3 text-sm text-[#0f2742] focus:outline-none focus:border-[#c9a86a] focus:ring-2 focus:ring-[#c9a86a]/15 transition-all';

  return (
    <section className="py-24 bg-[#f4efe6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
            Kalkulator prihoda
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742] mb-4">
            Koliko vaš smještaj može zaraditi?
          </h2>
          <p className="text-[#0f2742]/60 text-lg leading-relaxed">
            Unesite podatke o smještaju i odmah vidite procjenu — s i bez StayMira upravljanja.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left – inputs */}
          <div className="flex flex-col gap-5 bg-white rounded-2xl border border-[#e8dcc8] p-7">
            <h3 className="font-bold text-[#0f2742] text-base">Podaci o smještaju</h3>

            <div>
              <label className="block text-xs font-medium text-[#0f2742]/70 mb-1.5">Lokacija</label>
              <select value={region} onChange={(e) => setRegion(e.target.value)} className={selectClass}>
                {Object.entries(regionData).map(([key, r]) => (
                  <option key={key} value={key}>{r.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#0f2742]/70 mb-1.5">Tip objekta</label>
              <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className={selectClass}>
                {Object.entries(propertyData).map(([key, p]) => (
                  <option key={key} value={key}>{p.name}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-medium text-[#0f2742]/70">
                  Broj noćenja godišnje
                </label>
                <span className="text-sm font-bold text-[#0f2742]">{nightsPerYear} noćenja</span>
              </div>
              <input
                type="range"
                min={30}
                max={300}
                step={5}
                value={nightsPerYear}
                onChange={(e) => setNightsPerYear(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #0f2742 0%, #0f2742 ${((nightsPerYear - 30) / 270) * 100}%, #e8dcc8 ${((nightsPerYear - 30) / 270) * 100}%, #e8dcc8 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[#0f2742]/40 mt-1">
                <span>30 noćenja</span>
                <span>300 noćenja</span>
              </div>
            </div>

            {/* Current ADR indicator */}
            <div className="flex items-center justify-between bg-[#f4efe6] rounded-xl px-4 py-3">
              <span className="text-xs text-[#0f2742]/60">Procjenjena cijena po noći (tržišna)</span>
              <span className="text-sm font-bold text-[#0f2742]">{result.adrCurrent} €</span>
            </div>

            <p className="text-[10px] text-[#0f2742]/35 leading-relaxed">
              * Procjene su okvirne i temeljene na tržišnim prosjekima za odabranu lokaciju i tip
              smještaja. Stvarni prihodi ovise o stanju smještaja, sadržajima i sezonalnosti.
            </p>
          </div>

          {/* Right – results */}
          <div className="flex flex-col gap-4">
            {/* DIY result */}
            <div className="flex flex-col gap-2 bg-white rounded-2xl border border-[#e8dcc8] p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0f2742]/20" />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0f2742]/50">
                  Samostalno upravljanje
                </p>
              </div>
              <p className="text-4xl font-black text-[#0f2742]">
                {formatEur(result.incomeDiy)}
                <span className="text-base font-normal text-[#0f2742]/40"> / god.</span>
              </p>
              <p className="text-xs text-[#0f2742]/50">
                {result.adrCurrent} € po noći × {nightsPerYear} noćenja
              </p>
            </div>

            {/* StayMira result */}
            <div className="flex flex-col gap-2 bg-[#0f2742] rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c9a86a]" />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#c9a86a]">
                  S StayMira upravljanjem
                </p>
              </div>
              <p className="text-4xl font-black text-white">
                {formatEur(result.netStayMira)}
                <span className="text-base font-normal text-[#e8dcc8]/50"> / god.</span>
              </p>
              <p className="text-xs text-[#e8dcc8]/60">
                {result.adrStayMira} € po noći · naknada {formatEur(result.feeStayMira)}
              </p>

              {/* Gain badge */}
              <div className="mt-3 flex items-center gap-3 bg-[#c9a86a]/15 border border-[#c9a86a]/30 rounded-xl px-4 py-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="text-[#c9a86a] font-bold text-base">
                    +{formatEur(result.gain)} više godišnje
                  </p>
                  <p className="text-[#e8dcc8]/60 text-xs">
                    To je {result.gainPercent}% veći neto prihod — i bez ikakvog vašeg truda
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#analiza"
              className="w-full flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Zatraži točnu analizu za vaš smještaj
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
