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
