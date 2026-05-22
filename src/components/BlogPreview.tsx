import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/app/blog/page';

// Show 3 most recent posts on homepage
const previewPosts = posts.slice(0, 3);

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
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[#0f2742] text-sm font-medium hover:text-[#c9a86a] transition-colors group"
          >
            Svi članci ({posts.length})
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Post cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-[#e8dcc8] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Cover image */}
              <div className="relative h-44 overflow-hidden bg-[#0f2742]">
                <Image
                  src={`https://images.unsplash.com/${post.photoId}?auto=format&fit=crop&w=600&q=70`}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-3 p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#c9a86a] bg-[#c9a86a]/10 px-2.5 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-xs text-[#0f2742]/40">{post.readTime} čitanja</span>
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
            </Link>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-[#e8dcc8] hover:border-[#c9a86a]/40 text-[#0f2742] hover:text-[#c9a86a] text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200"
          >
            Pogledaj svih {posts.length} članaka →
          </Link>
        </div>
      </div>
    </section>
  );
}
