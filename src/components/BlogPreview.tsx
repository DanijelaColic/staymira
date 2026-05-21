const posts = [
  {
    tag: 'Strategija',
    readTime: '5 min čitanja',
    title: 'Kako povećati prihod od apartmana bez spuštanja cijene',
    excerpt:
      'Mnogi vlasnici misle da jedini način za više rezervacija jest niža cijena. U stvarnosti, ključ je u optimizaciji oglasa, prezentaciji i dinamičnoj cjenovnoj strategiji.',
    emoji: '📈',
    date: '15. svibnja 2026.',
  },
  {
    tag: 'Platforme',
    readTime: '7 min čitanja',
    title: 'Booking.com ili Airbnb: gdje se više isplati oglašavati?',
    excerpt:
      'Oba kanala imaju prednosti — Booking donosi veći volumen rezervacija, Airbnb bolji profil gosta. Saznajte koja kombinacija odgovara vašem tipu smještaja.',
    emoji: '⚖️',
    date: '3. svibnja 2026.',
  },
  {
    tag: 'Savjeti',
    readTime: '6 min čitanja',
    title: 'Što vlasnici najčešće griješe kod kratkoročnog najma',
    excerpt:
      'Od loših fotografija i nestandardnih opisa do nefleksibilnih uvjeta otkazivanja — ove pogreške koštaju vas rezervacija i novca, a lako ih je ispraviti.',
    emoji: '🔍',
    date: '22. travnja 2026.',
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742]">
              Savjeti za vlasnike
            </h2>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-1.5 text-[#0f2742] text-sm font-medium hover:text-[#c9a86a] transition-colors group"
          >
            Svi članci
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Post cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col rounded-2xl border border-[#e8dcc8] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Placeholder image */}
              <div className="h-44 bg-gradient-to-br from-[#0f2742] to-[#1a3a5c] flex items-center justify-center">
                <span className="text-5xl opacity-60">{post.emoji}</span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-3 p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#c9a86a] bg-[#c9a86a]/10 px-2.5 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-xs text-[#0f2742]/40">{post.readTime}</span>
                </div>

                <h3 className="font-bold text-[#0f2742] text-base leading-snug group-hover:text-[#c9a86a] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[#0f2742]/55 text-sm leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[#e8dcc8] mt-auto">
                  <span className="text-xs text-[#0f2742]/40">{post.date}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#0f2742] group-hover:text-[#c9a86a] transition-colors">
                    Pročitaj
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
