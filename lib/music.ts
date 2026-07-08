// ────────────────────────────────────────────────────────────────────────
// "Listen" links — streaming platforms and releases. Set each url ("" hides it).
// ────────────────────────────────────────────────────────────────────────

export type Platform = {
  name: string;
  url: string;
};

// PLACEHOLDER links — paste your real profile URLs.
export const PLATFORMS: Platform[] = [
  { name: "Spotify", url: "#" },
  { name: "Apple Music", url: "#" },
  { name: "Bandcamp", url: "#" },
  { name: "YouTube", url: "#" },
  { name: "SoundCloud", url: "#" },
];

export type Release = {
  title: string;
  year: string;
  type: "album" | "EP" | "single";
  cover?: string; // "/images/releases/<file>" — empty shows a gradient
  link?: string;
};

// PLACEHOLDER releases.
export const RELEASES: Release[] = [
  { title: "Nocturne", year: "2026", type: "album", link: "#" },
  { title: "Dead Star", year: "2025", type: "single", link: "#" },
];
