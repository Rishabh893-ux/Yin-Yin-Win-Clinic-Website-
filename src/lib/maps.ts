/**
 * Builds a Google Maps embed URL that doesn't require an API key.
 *
 * Uses the direct www.google.com/maps/embed endpoint rather than the legacy
 * maps.google.com/maps?...&output=embed redirect, whose intermediate 301
 * response sends `X-Frame-Options: SAMEORIGIN` and can cause some browsers
 * to refuse to render it inside an iframe.
 */
export function buildMapEmbedSrc(query: string, zoom = 16) {
  return `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${encodeURIComponent(query)}!6i${zoom}`
}
