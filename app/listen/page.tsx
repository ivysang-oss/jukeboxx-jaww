import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";
import { PLATFORMS, RELEASES } from "@/lib/music";
import { Star } from "@/app/components/icons";

export const metadata: Metadata = {
  title: "Listen",
  description: "Stream our music.",
};

export default function ListenPage() {
  const platforms = PLATFORMS.filter((p) => p.url);

  return (
    <PageShell title="Listen">
      {/* Streaming platforms */}
      <div className="flex flex-wrap gap-3">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-5 py-2.5 text-sm uppercase tracking-[0.2em] text-bone transition-colors hover:border-toxic hover:text-toxic"
          >
            {p.name}
          </a>
        ))}
      </div>

      {/* Releases */}
      {RELEASES.length > 0 && (
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RELEASES.map((r) => (
            <a
              key={r.title}
              href={r.link || "#"}
              target={r.link ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg border border-line bg-ink2"
            >
              <div className="tile-gradient relative flex aspect-square items-center justify-center">
                <span className="h-14 w-14 text-haze transition-transform duration-300 group-hover:scale-110">
                  <Star className="h-full w-full" />
                </span>
              </div>
              <div className="p-4">
                <p className="text-bone">{r.title}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {r.type} · {r.year}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </PageShell>
  );
}
