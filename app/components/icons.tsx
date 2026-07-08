// Stylized inline SVGs. Color is set via `currentColor`, so the parent's
// text color (e.g. text-toxic / text-haze) tints them and the glow.

export function Skull({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 8C28 8 14 24 14 45c0 13 7 23 15 29v9c0 3 3 6 6 6h3v-8h6v8h12v-8h6v8h3c3 0 6-3 6-6v-9c8-6 15-16 15-29C86 24 72 8 50 8Z"
        fill="currentColor"
      />
      <circle cx="36" cy="45" r="9" fill="#0a0710" />
      <circle cx="64" cy="45" r="9" fill="#0a0710" />
      <path d="M50 52l-5 11h10l-5-11Z" fill="#0a0710" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 4c3 26 20 43 46 46-26 3-43 20-46 46-3-26-20-43-46-46 26-3 43-20 46-46Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 0c1 6 5 10 12 12-7 2-11 6-12 12-1-6-5-10-12-12 7-2 11-6 12-12Z"
        fill="currentColor"
      />
    </svg>
  );
}
