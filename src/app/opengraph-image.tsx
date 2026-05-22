import { ImageResponse } from 'next/og';

export const alt = 'StayMira – Profesionalno upravljanje kratkoročnim najmom u Hrvatskoj';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f2742',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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
            background: '#c9a86a',
          }}
        />

        {/* Glow top */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            width: '700px',
            height: '400px',
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(201,168,106,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <span style={{ color: 'white', fontSize: '40px', fontWeight: 800, letterSpacing: '-1px' }}>
            Stay<span style={{ color: '#c9a86a' }}>Mira</span>
          </span>
        </div>

        {/* Headline line 1 */}
        <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: '58px',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-1.5px',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Vise prihoda. Manje brige.
        </div>

        {/* Headline line 2 accent */}
        <div
          style={{
            display: 'flex',
            color: '#c9a86a',
            fontSize: '58px',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-1.5px',
            textAlign: 'center',
            maxWidth: '900px',
            marginBottom: '24px',
          }}
        >
          Profesionalni property management.
        </div>

        {/* Sub */}
        <div
          style={{
            display: 'flex',
            color: 'rgba(232,220,200,0.65)',
            fontSize: '22px',
            textAlign: 'center',
            maxWidth: '700px',
            marginBottom: '48px',
          }}
        >
          Upravljanje kratkorocnim najmom u Hrvatskoj
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '48px' }}>
          {[
            { value: '+40%', label: 'vise prihoda' },
            { value: '85%', label: 'popunjenost' },
            { value: '4.9 / 5', label: 'prosj. ocjena' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
            >
              <span style={{ color: '#c9a86a', fontSize: '32px', fontWeight: 800 }}>{stat.value}</span>
              <span style={{ color: 'rgba(232,220,200,0.5)', fontSize: '14px' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '28px',
            right: '48px',
            color: 'rgba(232,220,200,0.3)',
            fontSize: '15px',
          }}
        >
          staymira.hr
        </div>
      </div>
    ),
    size,
  );
}
