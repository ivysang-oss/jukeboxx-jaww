// ────────────────────────────────────────────────────────────────────────
// Music videos. Paste the YouTube ID (the part after "watch?v=") into youtubeId.
// Leave youtubeId empty to show a "coming soon" placeholder tile.
// ────────────────────────────────────────────────────────────────────────

export type Video = {
  title: string;
  youtubeId?: string; // e.g. "abc123XYZ"
  year?: string;
};

// PLACEHOLDER videos — paste real YouTube IDs to make them play.
export const VIDEOS: Video[] = [
  { title: "Bloom in the Dark", youtubeId: "", year: "2026" },
  { title: "Dead Star Waltz", youtubeId: "", year: "2025" },
  { title: "Skeleton Garden", youtubeId: "", year: "2025" },
];
