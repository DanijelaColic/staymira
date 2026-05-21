import type { MDXComponents } from 'mdx/types';

// Custom MDX component overrides — match StayMira brand
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => (
      <h2
        {...props}
        className="text-2xl font-bold text-[#0f2742] mt-10 mb-4 scroll-mt-28"
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        {...props}
        className="text-xl font-bold text-[#0f2742] mt-8 mb-3 scroll-mt-28"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-[#0f2742]/75 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="flex flex-col gap-2 mb-4 pl-0">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="flex flex-col gap-2 mb-4 pl-0 list-decimal list-inside">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="flex items-start gap-2.5 text-[#0f2742]/75">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
          <path d="M3 8l4 4 6-6" stroke="#c9a86a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{children}</span>
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#c9a86a] pl-5 my-6 italic text-[#0f2742]/65 bg-[#f4efe6] rounded-r-xl py-4 pr-4">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-[#0f2742]">{children}</strong>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[#c9a86a] font-medium underline underline-offset-2 hover:text-[#b8924f] transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    hr: () => <hr className="my-8 border-[#e8dcc8]" />,
    code: ({ children }) => (
      <code className="bg-[#0f2742]/5 text-[#0f2742] px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    // Tip / info callout — use with > **Savjet:** text
    ...components,
  };
}
