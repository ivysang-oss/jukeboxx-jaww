import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <h1 className="text-4xl font-bold tracking-tight">404</h1>
      <p className="mt-3 text-muted">This page could not be found.</p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Back home
      </Link>
    </section>
  );
}
