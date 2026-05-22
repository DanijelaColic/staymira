import { ImageResponse } from 'next/og';
import { posts } from '../page';

export const alt = 'StayMira Blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  const title = post?.title ?? 'StayMira Blog';
  const tag = post?.tag ?? 'Blog';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f2742',
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
            background: '#c9a86a',
          }}
        />

        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,106,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
          <span style={{ color: 'white', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.5px' }}>
            Stay<span style={{ color: '#c9a86a' }}>Mira</span>
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '18px' }}>·</span>
          <span style={{ color: 'rgba(232,220,200,0.5)', fontSize: '15px' }}>Blog</span>
        </div>

        {/* Tag badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(201,168,106,0.15)',
            border: '1px solid rgba(201,168,106,0.35)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '24px',
          }}
        >
          <span style={{ color: '#c9a86a', fontSize: '15px', fontWeight: 600 }}>{tag}</span>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            color: 'white',
            fontSize: title.length > 60 ? '42px' : '52px',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-1px',
            maxWidth: '900px',
            flex: 1,
          }}
        >
          {title}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
          }}
        >
          <span style={{ color: 'rgba(232,220,200,0.6)', fontSize: '16px' }}>
            staymira.hr/blog/{slug}
          </span>
          <span style={{ color: 'rgba(232,220,200,0.6)', fontSize: '16px' }}>
            Savjeti za vlasnike smještaja
          </span>
        </div>
      </div>
    ),
    size,
  );
}
