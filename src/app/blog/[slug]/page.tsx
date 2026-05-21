import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';
import { posts } from '../page';

type Props = { params: Promise<{ slug: string }> };

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
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>
        {/* Article hero */}
        <section className="pt-32 pb-12 bg-[#0f2742]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
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

        {/* Article body */}
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Cover emoji */}
            <div className="h-52 bg-gradient-to-br from-[#0f2742] to-[#1a3a5c] rounded-2xl flex items-center justify-center mb-10">
              <span className="text-7xl opacity-60">{post.emoji}</span>
            </div>

            {/* Placeholder article content */}
            <FadeIn>
              <div className="prose prose-lg max-w-none text-[#0f2742]/75 leading-relaxed">
                <p className="text-xl font-medium text-[#0f2742] leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="bg-[#f4efe6] border border-[#e8dcc8] rounded-xl p-5 mb-8 text-sm">
                  <p className="text-[#0f2742]/60 italic">
                    📝 <strong>Napomena:</strong> Ovo je placeholder za pravi sadržaj članka.
                    Zamijenite ovaj blok s pravim tekstom ili integrirajte MDX/CMS sustav za
                    upravljanje sadržajem.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-[#0f2742] mt-8 mb-4">Zašto je ovo važno?</h2>
                <p>
                  Kratkoročni najam u Hrvatskoj nastavlja rasti, a vlasnici koji se prilagode
                  modernim standardima upravljanja bilježe značajno bolje rezultate od onih koji se
                  oslanjaju na stare metode.
                </p>

                <h2 className="text-2xl font-bold text-[#0f2742] mt-8 mb-4">Ključne preporuke</h2>
                <ul className="flex flex-col gap-2 list-disc pl-5">
                  <li>Redovito ažurirajte kalendar dostupnosti</li>
                  <li>Odgovarajte na upite unutar jednog sata</li>
                  <li>Prilagođavajte cijene prema potražnji i sezoni</li>
                  <li>Investirajte u profesionalne fotografije</li>
                  <li>Tražite recenzije od svakog gosta</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </article>

        {/* CTA */}
        <section className="py-14 bg-[#f4efe6] border-t border-[#e8dcc8]">
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
