import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";
import { upcomingShows, pastShows, type Show } from "@/lib/shows";

export const metadata: Metadata = {
  title: "Shows",
  description: "Upcoming live dates and tour history.",
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function ShowRow({ show }: { show: Show }) {
  return (
    <li className="flex flex-col gap-2 border-b border-line py-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-toxic">
          {formatDate(show.date)}
        </p>
        <p className="mt-1 text-lg text-bone">{show.venue}</p>
        <p className="text-sm text-muted">{show.city}</p>
      </div>
      <div>
        {show.soldOut ? (
          <span className="inline-block rounded border border-line px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted">
            Sold out
          </span>
        ) : show.ticketUrl ? (
          <a
            href={show.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-toxic px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-opacity hover:opacity-90"
          >
            Tickets
          </a>
        ) : null}
      </div>
    </li>
  );
}

export default function ShowsPage() {
  const upcoming = upcomingShows();
  const past = pastShows();

  return (
    <PageShell title="Shows">
      {upcoming.length === 0 ? (
        <p className="text-muted">No dates announced yet. Check back soon.</p>
      ) : (
        <ul>
          {upcoming.map((s) => (
            <ShowRow key={s.date + s.venue} show={s} />
          ))}
        </ul>
      )}

      {past.length > 0 && (
        <>
          <h2 className="mb-4 mt-14 text-sm uppercase tracking-[0.3em] text-haze">
            Past shows
          </h2>
          <ul className="opacity-60">
            {past.map((s) => (
              <ShowRow key={s.date + s.venue} show={s} />
            ))}
          </ul>
        </>
      )}
    </PageShell>
  );
}
