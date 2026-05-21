type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://staymira.hr${c.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap">
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[#e8dcc8]/40 flex-shrink-0">
                <path d="M3 2l4 3-4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {crumb.href && i < crumbs.length - 1 ? (
              <a
                href={crumb.href}
                className="text-xs text-[#e8dcc8]/50 hover:text-[#c9a86a] transition-colors"
              >
                {crumb.label}
              </a>
            ) : (
              <span className="text-xs text-[#e8dcc8]/80 font-medium">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
