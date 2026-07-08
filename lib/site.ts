// ────────────────────────────────────────────────────────────────────────
// Band-wide settings. Edit this to change the name, tagline, links, socials.
// The band name below is a PLACEHOLDER — tell Claude your real name to swap it.
// ────────────────────────────────────────────────────────────────────────

export type NavItem = { label: string; href: string };

export const SITE = {
  name: "Ivy Sang & Thee Jukeboxx Jaww",
  tagline: "Blues-punk with a ton of soul.",
  domain: "example.com",
  url: "https://example.com",

  email: "booking@example.com",

  // Main sections (used by the interior page header)
  nav: [
    { label: "Shows", href: "/shows" },
    { label: "Listen", href: "/listen" },
    { label: "Videos", href: "/videos" },
    { label: "Gallery", href: "/gallery" },
  ] as NavItem[],

  // Social / streaming handles shown in the footer. Empty = hidden.
  socials: {
    instagram: "",
    tiktok: "",
    youtube: "",
    bandcamp: "",
  } as Record<string, string>,
};
