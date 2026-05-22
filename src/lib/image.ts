/**
 * Returns a base64-encoded 1x1 SVG in the brand dark navy colour.
 * Used as `blurDataURL` for all Unsplash images so browsers render
 * a solid placeholder instead of a blank space during load.
 */
export const BLUR_DATA_URL =
  'data:image/svg+xml;base64,' +
  Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect fill="#0f2742"/></svg>',
  ).toString('base64');

/**
 * Builds an Unsplash CDN URL with sensible defaults.
 */
export function unsplashUrl(
  photoId: string,
  opts: { w?: number; h?: number; q?: number } = {},
) {
  const { w = 800, q = 75 } = opts;
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=${q}`;
}
