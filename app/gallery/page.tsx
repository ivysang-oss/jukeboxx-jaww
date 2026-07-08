import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/app/components/PageShell";
import { PHOTOS } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from shows, the studio, and the road.",
};

export default function GalleryPage() {
  return (
    <PageShell title="Gallery">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {PHOTOS.map((photo, i) => (
          <figure
            key={i}
            className="group relative aspect-square overflow-hidden rounded-lg border border-line bg-ink2"
          >
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="tile-gradient flex h-full items-center justify-center text-[10px] uppercase tracking-[0.25em] text-muted">
                Photo
              </div>
            )}
            {photo.caption && (
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-3 text-xs text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </PageShell>
  );
}
