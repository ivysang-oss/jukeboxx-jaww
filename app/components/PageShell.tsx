import Link from "next/link";
import { SITE } from "@/lib/site";

// Wraps interior (non-landing) pages with a header nav + footer.
export default function PageShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[100svh] flex-col">
      {/* Faint spiral texture behind interior pages (kept dark for readability) */}
      <div className="spiral-bg pointer-events-none fixed inset-0 opacity-20" />
      <div className="pointer-events-none fixed inset-0 bg-ink/85" />

      <header className="sticky top-0 z-20 border-b border-line bg-ink/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-display text-2xl tracking-wide text-bone transition-colors hover:text-toxic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {SITE.name}
          </Link>
          <ul className="flex items-center gap-5 text-xs uppercase tracking-[0.2em]">
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-toxic"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-6 py-14">
        <h1
          className="mb-10 font-display text-5xl tracking-wide text-bone sm:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>
        {children}
      </main>

      <footer className="relative z-10 border-t border-line bg-ink2">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-xs uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <span className="flex flex-wrap gap-4">
            {Object.entries(SITE.socials)
              .filter(([, url]) => url)
              .map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-haze"
                >
                  {name}
                </a>
              ))}
            {SITE.email && (
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-haze"
              >
                {SITE.email}
              </a>
            )}
          </span>
        </div>
      </footer>
    </div>
  );
}
