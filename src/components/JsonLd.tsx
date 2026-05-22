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

// ── BlogPosting schema for individual blog posts ──────────────────────────
type BlogPostingProps = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  datePublished: string;
  photoId?: string;
  wordCount?: number;
};

export function BlogPostingJsonLd({
  slug,
  title,
  excerpt,
  author,
  datePublished,
  photoId,
  wordCount,
}: BlogPostingProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    url: `https://staymira.hr/blog/${slug}`,
    image: photoId
      ? `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`
      : `https://staymira.hr/blog/${slug}/opengraph-image`,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://staymira.hr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'StayMira',
      logo: {
        '@type': 'ImageObject',
        url: 'https://staymira.hr/og-image.png',
      },
    },
    datePublished,
    dateModified: datePublished,
    ...(wordCount ? { wordCount } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://staymira.hr/blog/${slug}`,
    },
    inLanguage: 'hr',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── CaseStudy / ItemList + Reviews schema for /studije-slucaja ────────────
type CaseStudyReview = {
  name: string;
  author: string;
  location: string;
  reviewBody: string;
  ratingValue: number;
  datePublished?: string;
};

export function CaseStudiesJsonLd({ reviews }: { reviews: CaseStudyReview[] }) {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Studije slučaja – StayMira',
    description: 'Primjeri uspješnog upravljanja kratkoročnim smještajem u Hrvatskoj',
    url: 'https://staymira.hr/studije-slucaja',
    numberOfItems: reviews.length,
    itemListElement: reviews.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Review',
        name: r.name,
        reviewBody: r.reviewBody,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: r.ratingValue,
          bestRating: 5,
          worstRating: 1,
        },
        author: {
          '@type': 'Person',
          name: r.author,
        },
        locationCreated: {
          '@type': 'Place',
          name: r.location,
        },
        itemReviewed: {
          '@type': 'LocalBusiness',
          name: 'StayMira',
          url: 'https://staymira.hr',
        },
        ...(r.datePublished ? { datePublished: r.datePublished } : {}),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
    />
  );
}

// ── FAQPage schema for pages with FAQ sections ─────────────────────────────
type FaqItem = { q: string; a: string };

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── LocalBusiness JSON-LD (default export) ─────────────────────────────────
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
