import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";
import { VIDEOS } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Videos",
  description: "Music videos and visuals.",
};

export default function VideosPage() {
  return (
    <PageShell title="Videos">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {VIDEOS.map((v) => (
          <div key={v.title}>
            <div className="relative aspect-video overflow-hidden rounded-lg border border-line bg-ink2">
              {v.youtubeId ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="tile-gradient-purple flex h-full items-center justify-center text-xs uppercase tracking-[0.3em] text-muted">
                  Coming soon
                </div>
              )}
            </div>
            <p className="mt-3 text-bone">{v.title}</p>
            {v.year && (
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {v.year}
              </p>
            )}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
