// ────────────────────────────────────────────────────────────────────────
// Photo gallery. Drop images in public/images/gallery/ and set `src` to
// "/images/gallery/<file>". Leave src empty to show a gradient placeholder.
// ────────────────────────────────────────────────────────────────────────

export type Photo = {
  src?: string; // e.g. "/images/gallery/live-01.jpg"
  alt: string;
  caption?: string;
};

// PLACEHOLDER photos — swap in real images.
export const PHOTOS: Photo[] = [
  { src: "", alt: "Live show 1", caption: "The Crypt, 2026" },
  { src: "", alt: "Live show 2", caption: "Backstage" },
  { src: "", alt: "Live show 3", caption: "Neon Cathedral" },
  { src: "", alt: "Live show 4", caption: "On the road" },
  { src: "", alt: "Live show 5", caption: "Studio" },
  { src: "", alt: "Live show 6", caption: "Velvet Void" },
];
