// ────────────────────────────────────────────────────────────────────────
// Live shows / tour dates. Add one object per show.
// `ticketUrl` empty = no ticket button. Past dates auto-sort to the bottom.
// ────────────────────────────────────────────────────────────────────────

export type Show = {
  date: string; // ISO, e.g. "2026-08-14"
  venue: string;
  city: string;
  ticketUrl?: string;
  soldOut?: boolean;
};

// PLACEHOLDER shows — replace with your real dates.
export const SHOWS: Show[] = [
  { date: "2026-08-14", venue: "The Crypt", city: "Portland, OR", ticketUrl: "#" },
  { date: "2026-09-05", venue: "Neon Cathedral", city: "Seattle, WA", ticketUrl: "#", soldOut: true },
  { date: "2026-09-27", venue: "Velvet Void", city: "San Francisco, CA", ticketUrl: "#" },
  { date: "2026-10-31", venue: "Graveyard Hall", city: "Los Angeles, CA", ticketUrl: "#" },
];

export const upcomingShows = () => {
  const today = new Date().toISOString().slice(0, 10);
  return [...SHOWS]
    .filter((s) => s.date >= today)
    .sort((a, b) => (a.date < b.date ? -1 : 1));
};

export const pastShows = () => {
  const today = new Date().toISOString().slice(0, 10);
  return [...SHOWS]
    .filter((s) => s.date < today)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};
