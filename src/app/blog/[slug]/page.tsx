import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import ReadingProgress from '@/components/ReadingProgress';
import Breadcrumbs from '@/components/Breadcrumbs';
import { hasBlogContent, getBlogContent, extractToc } from '@/lib/blog';
import { BLUR_DATA_URL } from '@/lib/image';
import { BlogPostingJsonLd } from '@/components/JsonLd';
import { posts } from '../page';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const ogImageUrl = `https://staymira.hr/blog/${slug}/opengraph-image`;
  return {
    title: `${post.title} – StayMira Blog`,
    description: post.excerpt,
    keywords: `${post.tag}, kratkoročni najam, upravljanje smještajem, property management Hrvatska, StayMira blog`,
    alternates: {
      canonical: `https://staymira.hr/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.tag],
      url: `https://staymira.hr/blog/${slug}`,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Extract TOC from MDX content
  const rawContent = getBlogContent(slug);
  const tocItems = rawContent ? extractToc(rawContent) : [];
  const wordCount = rawContent
    ? rawContent.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length
    : undefined;

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
      <BlogPostingJsonLd
        slug={slug}
        title={post.title}
        excerpt={post.excerpt}
        author={post.author}
        datePublished={post.date}
        photoId={post.photoId}
        wordCount={wordCount}
      />
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
                {/* Cover image */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-10 bg-[#0f2742]">
                  <Image
                    src={`https://images.unsplash.com/${post.photoId}?auto=format&fit=crop&w=900&q=80`}
                    alt={post.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-3xl">{post.emoji}</span>
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
                {tocItems.length > 0 ? (
                  <nav className="flex flex-col gap-0.5">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`text-sm text-[#0f2742]/60 hover:text-[#c9a86a] transition-all duration-200 py-1 border-l-2 border-[#e8dcc8] hover:border-[#c9a86a] ${
                          item.level === 2 ? 'pl-3 font-medium' : 'pl-5 text-xs text-[#0f2742]/45'
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                ) : (
                  <nav className="flex flex-col gap-1">
                    <a href="#" className="text-sm text-[#0f2742]/60 hover:text-[#c9a86a] py-1 border-l-2 border-[#e8dcc8] hover:border-[#c9a86a] pl-3">
                      Uvod
                    </a>
                  </nav>
                )}

                {/* Share */}
                <div className="mt-4 pt-4 border-t border-[#e8dcc8]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#0f2742]/40 mb-2">
                    Podijeli
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      {
                        label: 'Facebook',
                        href: `https://www.facebook.com/sharer/sharer.php?u=https://staymira.hr/blog/${slug}`,
                        color: '#1877F2',
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                        ),
                      },
                      {
                        label: 'WhatsApp',
                        href: `https://wa.me/?text=${encodeURIComponent(`${post.title} — https://staymira.hr/blog/${slug}`)}`,
                        color: '#25D366',
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 1C5.03 1 1 5.03 1 10c0 1.6.42 3.1 1.14 4.4L1 19l4.72-1.12A9 9 0 1010 1zm4.07 10.88c-.22-.11-1.32-.65-1.52-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.17-.48.06-.22-.12-.94-.35-1.79-1.1-.66-.6-1.11-1.33-1.24-1.55-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.4.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.4-.06-.11-.5-1.2-.68-1.65-.18-.43-.37-.37-.5-.38h-.43c-.15 0-.4.06-.6.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.57 2.4 3.8 3.36.53.23.95.37 1.27.47.53.17 1.02.14 1.4.09.43-.06 1.32-.54 1.51-1.06.19-.52.19-.97.13-1.06-.06-.09-.21-.15-.43-.26z" />
                          </svg>
                        ),
                      },
                      {
                        label: 'LinkedIn',
                        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://staymira.hr/blog/${slug}`)}`,
                        color: '#0A66C2',
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        ),
                      },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Podijeli na ${s.label}`}
                        className="flex items-center gap-2.5 text-xs font-medium text-[#0f2742]/60 hover:text-[#0f2742] border border-[#e8dcc8] hover:border-[#0f2742]/20 rounded-lg px-3 py-2 transition-all hover:bg-[#f4efe6]"
                        style={{ ['--share-color' as string]: s.color }}
                      >
                        <span style={{ color: s.color }}>{s.icon}</span>
                        {s.label}
                      </a>
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
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-[#0f2742]">
                      <Image
                        src={`https://images.unsplash.com/${p.photoId}?auto=format&fit=crop&w=100&q=60`}
                        alt={p.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                      />
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
