'use client';

import { useEffect, useRef, useState } from 'react';

type StatItem = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: string;
};

const stats: StatItem[] = [
  {
    value: 100,
    suffix: '+',
    label: 'Zadovoljnih vlasnika',
    sublabel: 'diljem Hrvatske',
    icon: '🏠',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Prosječna popunjenost',
    sublabel: 'u sezoni',
    icon: '📅',
  },
  {
    value: 40,
    suffix: '%',
    prefix: '+',
    label: 'Više prihoda',
    sublabel: 'u usporedbi s DIY pristupom',
    icon: '📈',
  },
  {
    value: 4.9,
    suffix: '★',
    label: 'Prosječna ocjena gostiju',
    sublabel: 'na svim platformama',
    icon: '⭐',
  },
  {
    value: 24,
    suffix: 'h',
    label: 'Vrijeme odgovora',
    sublabel: 'na upite i probleme',
    icon: '⚡',
  },
  {
    value: 0,
    suffix: '%',
    label: 'Skrivenih naknada',
    sublabel: 'potpuno transparentni uvjeti',
    icon: '🔒',
  },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (target === 0) { setCount(0); return; }

    const isDecimal = target % 1 !== 0;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, target);
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.value, 1600, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const displayed = stat.value === 0 ? '0' : count.toString();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
    >
      <span className="text-3xl mb-1">{stat.icon}</span>
      <div className="text-4xl sm:text-5xl font-black text-white tabular-nums leading-none">
        {stat.prefix && <span className="text-[#c9a86a]">{stat.prefix}</span>}
        {displayed}
        <span className="text-[#c9a86a]">{stat.suffix}</span>
      </div>
      <p className="text-white font-semibold text-sm">{stat.label}</p>
      <p className="text-[#e8dcc8]/50 text-xs">{stat.sublabel}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#0f2742]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#e8dcc8]/50 text-sm font-medium uppercase tracking-widest">
            StayMira u brojevima
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
