'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/lib/image';

type Property = {
  id: number;
  name: string;
  location: string;
  type: 'apartment' | 'house' | 'villa';
  beds: number;
  rating: number;
  occupancy: number;
  revenueBoost: string;
  // Unsplash photo ID for placeholder; replace with real photos in production
  photoId: string;
  tags: string[];
};

// All photos from Unsplash — free to use. Replace with actual property photos in production.
const properties: Property[] = [
  {
    id: 1,
    name: 'Vila Sunce',
    location: 'Split',
    type: 'villa',
    beds: 6,
    rating: 4.97,
    occupancy: 91,
    revenueBoost: '+52%',
    photoId: 'photo-1564013799919-ab600027ffc6', // Pool villa
    tags: ['Bazen', 'Pogled na more', 'Vila'],
  },
  {
    id: 2,
    name: 'Apartman Stari grad',
    location: 'Zadar',
    type: 'apartment',
    beds: 4,
    rating: 4.92,
    occupancy: 88,
    revenueBoost: '+38%',
    photoId: 'photo-1502672260266-1c1ef2d93688', // Modern apartment
    tags: ['Centar', 'Pogled na more', 'Apartman'],
  },
  {
    id: 3,
    name: 'Kuća Masline',
    location: 'Istra',
    type: 'house',
    beds: 8,
    rating: 4.95,
    occupancy: 85,
    revenueBoost: '+44%',
    photoId: 'photo-1570129477492-45c003edd2be', // Country house
    tags: ['Privatnost', 'Vrt', 'Kuća'],
  },
  {
    id: 4,
    name: 'Lux Apartman',
    location: 'Dubrovnik',
    type: 'apartment',
    beds: 2,
    rating: 4.98,
    occupancy: 94,
    revenueBoost: '+61%',
    photoId: 'photo-1512917774080-9991f1c4c750', // Luxury apartment exterior
    tags: ['Stari grad', 'Premium', 'Apartman'],
  },
  {
    id: 5,
    name: 'Vila Kvarner',
    location: 'Opatija',
    type: 'villa',
    beds: 10,
    rating: 4.93,
    occupancy: 82,
    revenueBoost: '+47%',
    photoId: 'photo-1613490493576-7fde63acd811', // Pool villa sea view
    tags: ['Bazen', 'Jacuzzi', 'Vila'],
  },
  {
    id: 6,
    name: 'Kuća Slavonija',
    location: 'Osijek',
    type: 'house',
    beds: 6,
    rating: 4.88,
    occupancy: 79,
    revenueBoost: '+35%',
    photoId: 'photo-1600585154340-be6161a56a0c', // Nice house with garden
    tags: ['Puni servis', 'Vrt', 'Kuća'],
  },
];

const typeLabels: Record<string, string> = {
  all: 'Sve',
  villa: 'Vile',
  house: 'Kuće',
  apartment: 'Apartmani',
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered =
    activeFilter === 'all'
      ? properties
      : properties.filter((p) => p.type === activeFilter);

  return (
    <section className="py-24 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742]">
              Smještaji kojima upravljamo
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 bg-white border border-[#e8dcc8] rounded-xl p-1">
            {Object.entries(typeLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeFilter === key
                    ? 'bg-[#0f2742] text-white shadow-sm'
                    : 'text-[#0f2742]/60 hover:text-[#0f2742]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl border border-[#e8dcc8] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Property photo */}
              <div className="h-48 relative overflow-hidden bg-[#0f2742]">
                <Image
                  src={`https://images.unsplash.com/${p.photoId}?auto=format&fit=crop&w=600&q=75`}
                  alt={`${p.name} - ${p.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Revenue boost badge */}
                <div className="absolute top-3 right-3 bg-[#c9a86a] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                  {p.revenueBoost} prihoda
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-[#0f2742]">{p.name}</h3>
                    <p className="text-[#0f2742]/50 text-xs mt-0.5">
                      📍 {p.location} · {p.beds} kreveta
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#0f2742]">★ {p.rating}</p>
                    <p className="text-xs text-[#0f2742]/40">{p.occupancy}% popunjeno</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-[#0f2742]/60 bg-[#0f2742]/5 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-[#0f2742]/40 mt-10">
          Prikazani podaci su primjeri rezultata upravljanja StayMira tima.
        </p>
      </div>
    </section>
  );
}
