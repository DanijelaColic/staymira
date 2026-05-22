'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Post = {
  slug: string;
  tag: string;
  readTime: string;
  title: string;
  excerpt: string;
  emoji: string;
  photoId: string;
  date: string;
  author: string;
};

type Props = {
  posts: Post[];
};

export default function BlogFilter({ posts }: Props) {
  const tags = ['Sve', ...Array.from(new Set(posts.map((p) => p.tag)))];
  const [active, setActive] = useState('Sve');

  const filtered = active === 'Sve' ? posts : posts.filter((p) => p.tag === active);

  return (
    <>
      {/* Tag filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
              active === tag
                ? 'bg-[#0f2742] text-white border-[#0f2742]'
                : 'bg-white text-[#0f2742]/60 border-[#e8dcc8] hover:border-[#c9a86a]/40 hover:text-[#0f2742]'
            }`}
          >
            {tag}
            {tag !== 'Sve' && (
              <span
                className={`ml-1.5 text-xs ${
                  active === tag ? 'text-[#c9a86a]' : 'text-[#0f2742]/30'
                }`}
              >
                {posts.filter((p) => p.tag === tag).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-[#e8dcc8] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-44 relative overflow-hidden bg-[#0f2742]">
              <Image
                src={`https://images.unsplash.com/${post.photoId}?auto=format&fit=crop&w=600&q=70`}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col flex-1 gap-3 p-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#c9a86a] bg-[#c9a86a]/10 px-2.5 py-1 rounded-full">
                  {post.tag}
                </span>
                <span className="text-xs text-[#0f2742]/40">{post.readTime} čitanja</span>
              </div>
              <h2 className="font-bold text-[#0f2742] text-base leading-snug group-hover:text-[#c9a86a] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#0f2742]/55 text-sm leading-relaxed line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#e8dcc8] mt-auto">
                <span className="text-xs text-[#0f2742]/40">{post.date}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#0f2742] group-hover:text-[#c9a86a] transition-colors">
                  Pročitaj
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#0f2742]/40">
          <p className="text-lg mb-2">Nema postova u ovoj kategoriji</p>
          <button
            onClick={() => setActive('Sve')}
            className="text-sm text-[#c9a86a] underline underline-offset-2"
          >
            Prikaži sve postove
          </button>
        </div>
      )}
    </>
  );
}
