import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'StayMira – Upravljanje smještajem',
    short_name: 'StayMira',
    description:
      'Profesionalno upravljanje kratkoročnim najmom u Hrvatskoj. Više prihoda, manje brige.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f2742',
    theme_color: '#0f2742',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['business', 'travel'],
    lang: 'hr',
    dir: 'ltr',
    shortcuts: [
      {
        name: 'Besplatna analiza',
        short_name: 'Analiza',
        description: 'Zatražite besplatnu analizu smještaja',
        url: '/#analiza',
      },
      {
        name: 'Blog',
        short_name: 'Blog',
        description: 'Savjeti za vlasnike smještaja',
        url: '/blog',
      },
    ],
  };
}
