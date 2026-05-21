function Shimmer({ className }: { className: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#e8dcc8]/50 rounded-lg ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl border border-[#e8dcc8] overflow-hidden">
      <Shimmer className="h-44" />
      <div className="flex flex-col gap-3 p-6">
        <div className="flex gap-2">
          <Shimmer className="h-5 w-16 rounded-full" />
          <Shimmer className="h-5 w-20" />
        </div>
        <Shimmer className="h-5 w-full" />
        <Shimmer className="h-5 w-4/5" />
        <Shimmer className="h-4 w-full" />
        <Shimmer className="h-4 w-3/4" />
        <Shimmer className="h-4 w-full" />
      </div>
    </div>
  );
}

export function BlogGridSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function BlogPostSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-6">
      <div className="flex gap-2">
        <Shimmer className="h-6 w-20 rounded-full" />
        <Shimmer className="h-6 w-16" />
      </div>
      <Shimmer className="h-10 w-3/4" />
      <Shimmer className="h-10 w-1/2" />
      <Shimmer className="h-6 w-40" />
      <Shimmer className="h-52 w-full rounded-2xl" />
      {Array.from({ length: 6 }).map((_, i) => (
        <Shimmer key={i} className={`h-4 w-${i % 3 === 2 ? '3/4' : 'full'}`} />
      ))}
    </div>
  );
}
