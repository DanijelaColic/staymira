import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import ReadingProgress from '@/components/ReadingProgress';
import Breadcrumbs from '@/components/Breadcrumbs';
import { hasBlogContent } from '@/lib/blog';
import { posts } from '../page';

type Props = { params: Promise<{ slug: string }> };

// Table of contents — static per post (extend when using MDX)
const tocItems = [
  { id: 'uvod', label: 'Uvod' },
  { id: 'zasto-vazno', label: 'Zašto je ovo važno?' },
  { id: 'preporuke', label: 'Ključne preporuke' },
];

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} – StayMira Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.tag],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Related posts = same tag, exclude current
  // Dynamically import MDX content if available
  let MdxContent: React.ComponentType | null = null;
  if (hasBlogContent(slug)) {
    try {
      const mod = await import(`@/content/blog/${slug}.mdx`);
      MdxContent = mod.default;
    } catch {
      // MDX not found, fall back to placeholder
    }
  }

  const related = posts.filter((p) => p.slug !== slug && p.tag === post.tag).slice(0, 3);
  // Fill with other posts if not enough
  if (related.length < 2) {
    const others = posts.filter((p) => p.slug !== slug && !related.includes(p));
    related.push(...others.slice(0, 2 - related.length));
  }

  return (
    <>
      <ReadingProgress />
      <Header />
      <main>
        {/* Article hero */}
        <section className="pt-32 pb-12 bg-[#0f2742]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              {/* Breadcrumbs */}
              <div className="mb-5">
                <Breadcrumbs
                  crumbs={[
                    { label: 'Početna', href: '/' },
                    { label: 'Blog', href: '/blog' },
                    { label: post.title },
                  ]}
                />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-[#c9a86a] bg-[#c9a86a]/15 border border-[#c9a86a]/30 px-3 py-1 rounded-full">
                  {post.tag}
                </span>
                <span className="text-[#e8dcc8]/40 text-xs">{post.readTime} čitanja</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-3 text-[#e8dcc8]/50 text-sm">
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
            </FadeIn>
          </div>
          <div style={{ position: 'relative' }} aria-hidden="true">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-white">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Article body + TOC sidebar */}
        <div className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-12 items-start">
              {/* Main content */}
              <article className="flex-1 min-w-0">
                {/* Cover */}
                <div className="h-52 bg-gradient-to-br from-[#0f2742] to-[#1a3a5c] rounded-2xl flex items-center justify-center mb-10">
                  <span className="text-7xl opacity-60">{post.emoji}</span>
                </div>

                <FadeIn>
                  <div id="uvod" className="mdx-content">
                    {MdxContent ? (
                      <MdxContent />
                    ) : (
                      // Fallback placeholder if no MDX file exists
                      <div className="space-y-6 text-[#0f2742]/75 leading-relaxed">
                        <p className="text-xl font-medium text-[#0f2742]">{post.excerpt}</p>
                        <div className="bg-[#f4efe6] border border-[#e8dcc8] rounded-xl p-5 text-sm">
                          <p className="text-[#0f2742]/60 italic">
                            📝 <strong>Napomena:</strong> Dodajte MDX datoteku u{' '}
                            <code>src/content/blog/{slug}.mdx</code> za pravi sadržaj.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              </article>

              {/* TOC sidebar – desktop only */}
              <aside className="hidden lg:flex flex-col gap-3 w-56 flex-shrink-0 sticky top-28">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0f2742]/40">
                  Sadržaj
                </p>
                <nav className="flex flex-col gap-1">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-sm text-[#0f2742]/60 hover:text-[#c9a86a] hover:pl-2 transition-all duration-200 py-1 border-l-2 border-[#e8dcc8] hover:border-[#c9a86a] pl-3"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Share */}
                <div className="mt-4 pt-4 border-t border-[#e8dcc8]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#0f2742]/40 mb-2">
                    Podijeli
                  </p>
                  <div className="flex gap-2">
                    {[
                      { label: 'Facebook', icon: '👤' },
                      { label: 'WhatsApp', icon: '💬' },
                      { label: 'LinkedIn', icon: '💼' },
                    ].map((s) => (
                      <button
                        key={s.label}
                        className="w-8 h-8 rounded-lg bg-[#0f2742]/5 border border-[#e8dcc8] flex items-center justify-center text-xs hover:bg-[#0f2742] hover:border-[#0f2742] hover:text-white transition-all"
                        title={`Podijeli na ${s.label}`}
                      >
                        {s.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="py-14 bg-[#f4efe6] border-t border-[#e8dcc8]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-[#0f2742] mb-6">Možda vas zanima i</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((p) => (
                  <a
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex gap-4 bg-white rounded-xl border border-[#e8dcc8] p-4 hover:shadow-md hover:border-[#c9a86a]/30 transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f2742] to-[#1a3a5c] flex items-center justify-center text-2xl flex-shrink-0">
                      <span className="opacity-60">{p.emoji}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-[#c9a86a] uppercase tracking-wider">
                        {p.tag}
                      </span>
                      <p className="text-[#0f2742] text-sm font-semibold leading-snug mt-0.5 group-hover:text-[#c9a86a] transition-colors line-clamp-2">
                        {p.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-14 bg-white border-t border-[#e8dcc8]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p className="text-[#0f2742]/50 text-sm mb-2">Trebate profesionalnu pomoć?</p>
            <h2 className="text-2xl font-bold text-[#0f2742] mb-4">
              Prepustite upravljanje nama
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#analiza"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md"
              >
                Besplatna analiza smještaja
              </a>
              <a
                href="/blog"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#e8dcc8] hover:border-[#c9a86a]/40 text-[#0f2742] font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                ← Natrag na blog
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingUI />
    </>
  );
}
