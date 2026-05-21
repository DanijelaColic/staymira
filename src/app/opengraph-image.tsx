import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'StayMira – Profesionalno upravljanje smještajem u Hrvatskoj';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0a1e33 0%, #0f2742 50%, #1a3a5c 100%)',
          padding: '72px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gold glow circle top-right */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,106,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Icon */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
            }}
          >
            🏠
          </div>
          {/* Brand name */}
          <div style={{ display: 'flex', gap: 0 }}>
            <span style={{ fontSize: 36, fontWeight: 800, color: '#ffffff', letterSpacing: '-1px' }}>
              Stay
            </span>
            <span style={{ fontSize: 36, fontWeight: 800, color: '#c9a86a', letterSpacing: '-1px' }}>
              Mira
            </span>
          </div>
        </div>

        {/* Main copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(201,168,106,0.12)',
              border: '1px solid rgba(201,168,106,0.3)',
              borderRadius: 50,
              padding: '8px 20px',
              width: 'fit-content',
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#c9a86a' }} />
            <span style={{ color: '#e8dcc8', fontSize: 16, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' }}>
              Profesionalno upravljanje smještajem
            </span>
          </div>

          <h1
            style={{
              fontSize: 62,
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: '-2px',
              maxWidth: 760,
            }}
          >
            Vaš smještaj.{' '}
            <span style={{ color: '#c9a86a' }}>Naša briga.</span>
            <br />
            Veći prihod bez stresa.
          </h1>

          <p style={{ fontSize: 22, color: 'rgba(232,220,200,0.65)', margin: 0, maxWidth: 620, lineHeight: 1.5 }}>
            Upravljanje apartmanima, vilama i kućama za odmor diljem Hrvatske.
          </p>
        </div>

        {/* Bottom stats strip */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 32,
            width: '100%',
          }}
        >
          {[
            { value: '100+', label: 'zadovoljnih vlasnika' },
            { value: '95%', label: 'prosječna popunjenost' },
            { value: '+40%', label: 'više prihoda' },
            { value: '4.9★', label: 'ocjena gostiju' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: '#ffffff' }}>{stat.value}</span>
              <span style={{ fontSize: 14, color: 'rgba(232,220,200,0.5)' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
