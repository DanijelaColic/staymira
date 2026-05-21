import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog');

/** Returns raw MDX string for a given slug, or null if not found */
export function getBlogContent(slug: string): string | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

/** Returns true if an MDX file exists for the given slug */
export function hasBlogContent(slug: string): boolean {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  return fs.existsSync(filePath);
}

export type TocItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

/**
 * Parses h2 and h3 headings from raw MDX/markdown content.
 * Converts heading text to a URL-safe id (same logic as rehype-slug).
 */
export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = match[2].trim();
    // Generate slug: lowercase, remove non-alphanumeric (except spaces/hyphens), replace spaces with -
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    toc.push({ id, label: text, level });
  }

  return toc;
}
