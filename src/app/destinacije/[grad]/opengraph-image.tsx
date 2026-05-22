import { ImageResponse } from 'next/og';
import { getDestination, destinations } from '@/lib/destinations';

export const alt = 'StayMira Destinacije';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return destinations.map((d) => ({ grad: d.slug }));
}

export default async function Image({ params }: { params: Promise<{ grad: string }> }) {
  const { grad } = await params;
  const dest = getDestination(grad);

  const city = dest?.name ?? grad;
  const subtitle = dest
    ? `${dest.incomeExample.type} · do ${dest.incomeExample.high.toLocaleString('hr')} € godišnje`
    : 'Upravljanje smještajem';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f2742 0%, #1a3a5c 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '6px',
            background: 'linear-gradient(90deg, #c9a86a, #e8c87d)',
          }}
        />

        {/* Background glow bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,106,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <span style={{ color: 'white', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.5px' }}>
            Stay<span style={{ color: '#c9a86a' }}>Mira</span>
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '18px' }}>·</span>
          <span style={{ color: 'rgba(232,220,200,0.5)', fontSize: '15px' }}>Destinacije</span>
        </div>

        {/* Location badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(201,168,106,0.15)',
            border: '1px solid rgba(201,168,106,0.35)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '32px',
          }}
        >
          <span style={{ color: '#c9a86a', fontSize: '15px', fontWeight: 600 }}>Destinacija</span>
        </div>

        {/* City name */}
        <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: '80px',
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-2px',
            marginBottom: '20px',
          }}
        >
          {city}
        </div>

        {/* Subtitle stats */}
        <div
          style={{
            display: 'flex',
            color: 'rgba(232,220,200,0.7)',
            fontSize: '22px',
            fontWeight: 400,
            flex: 1,
          }}
        >
          {subtitle}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
          }}
        >
          <span style={{ color: 'rgba(232,220,200,0.5)', fontSize: '16px' }}>
            staymira.hr/destinacije/{grad}
          </span>
          <div
            style={{
              display: 'flex',
              background: '#c9a86a',
              color: 'white',
              fontSize: '15px',
              fontWeight: 700,
              padding: '10px 24px',
              borderRadius: '100px',
            }}
          >
            Besplatna analiza
          </div>
        </div>
      </div>
    ),
    size,
  );
}
