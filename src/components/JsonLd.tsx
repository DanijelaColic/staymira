// JSON-LD structured data for Google rich results
// LocalBusiness + Organization schemas

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://staymira.hr/#business',
  name: 'StayMira',
  description:
    'Profesionalno upravljanje apartmanima, vilama i kućama za odmor za kratkoročni najam u Hrvatskoj.',
  url: 'https://staymira.hr',
  logo: 'https://staymira.hr/og-image.png',
  image: 'https://staymira.hr/og-image.png',
  telephone: '+38512345678',
  email: 'info@staymira.hr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Zagreb',
    addressCountry: 'HR',
  },
  areaServed: [
    { '@type': 'City', name: 'Zagreb' },
    { '@type': 'City', name: 'Split' },
    { '@type': 'City', name: 'Zadar' },
    { '@type': 'City', name: 'Dubrovnik' },
    { '@type': 'City', name: 'Osijek' },
    { '@type': 'Country', name: 'Croatia' },
  ],
  serviceType: 'Property Management',
  priceRange: '18%–26% od prihoda',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://facebook.com/staymira',
    'https://instagram.com/staymira',
    'https://linkedin.com/company/staymira',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '100',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'StayMira',
  url: 'https://staymira.hr',
  logo: 'https://staymira.hr/og-image.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+38512345678',
    contactType: 'customer service',
    availableLanguage: ['Croatian', 'English'],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'StayMira',
  url: 'https://staymira.hr',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://staymira.hr/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
