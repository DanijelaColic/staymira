import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import Analytics from '@/components/Analytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://staymira.hr'),
  title: 'StayMira – Profesionalno upravljanje smještajem u Hrvatskoj',
  description:
    'StayMira preuzima kompletno upravljanje vašim apartmanom, kućom za odmor ili vilom. Više rezervacija, veći prihod, manje stresa. Besplatna analiza smještaja.',
  keywords:
    'upravljanje apartmanima Hrvatska, property management, kratkoročni najam, Airbnb upravljanje, Booking.com upravljanje, upravljanje vilom, StayMira',
  authors: [{ name: 'StayMira' }],
  creator: 'StayMira',
  publisher: 'StayMira',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://staymira.hr',
    languages: { 'hr-HR': 'https://staymira.hr' },
  },
  openGraph: {
    title: 'StayMira – Profesionalno upravljanje smještajem u Hrvatskoj',
    description:
      'Preuzimamo kompletno upravljanje vašim smještajem. Više rezervacija, veći prihod, manje stresa.',
    url: 'https://staymira.hr',
    siteName: 'StayMira',
    locale: 'hr_HR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StayMira – Profesionalno upravljanje smještajem',
    description: 'Profesionalno upravljanje apartmanima, vilama i kućama za odmor u Hrvatskoj.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={inter.variable}>
      <head>
        <Analytics />
        <JsonLd />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
