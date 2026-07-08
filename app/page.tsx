"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Skull, Star } from "@/app/components/icons";
import StarField from "@/app/components/StarField";

type Portal = {
  href: string;
  label: string;
  icon: "skull" | "star";
  color: string; // tailwind text color class
  position: string; // md+ absolute placement
  delay: string;
};

const PORTALS: Portal[] = [
  {
    href: "/shows",
    label: "Shows",
    icon: "skull",
    color: "text-toxic",
    position: "md:absolute md:left-[10%] md:top-[18%]",
    delay: "0s",
  },
  {
    href: "/listen",
    label: "Listen",
    icon: "star",
    color: "text-haze",
    position: "md:absolute md:right-[10%] md:top-[18%]",
    delay: "0.8s",
  },
  {
    href: "/videos",
    label: "Videos",
    icon: "skull",
    color: "text-haze",
    position: "md:absolute md:left-[14%] md:bottom-[14%]",
    delay: "1.4s",
  },
  {
    href: "/gallery",
    label: "Gallery",
    icon: "star",
    color: "text-toxic",
    position: "md:absolute md:right-[14%] md:bottom-[14%]",
    delay: "0.4s",
  },
];

export default function Landing() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    function onMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      stage!.style.setProperty("--px", x.toFixed(3));
      stage!.style.setProperty("--py", y.toFixed(3));
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative flex min-h-[100svh] flex-col items-center justify-center gap-10 overflow-hidden px-6 py-24 text-center"
      style={{ "--px": "0", "--py": "0" } as React.CSSProperties}
    >
      {/* Rotating hypnotic spiral */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220vmax] w-[220vmax] -translate-x-1/2 -translate-y-1/2 animate-spin-slow spiral-bg opacity-70" />
      {/* Darkening veil so the title and skulls stay readable */}
      <div className="spiral-veil pointer-events-none absolute inset-0" />

      {/* Parallax starfield */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          transform:
            "translate3d(calc(var(--px) * 18px), calc(var(--py) * 18px), 0)",
        }}
      >
        <StarField />
      </div>

      {/* Title */}
      <div
        className="relative z-10"
        style={{
          transform:
            "translate3d(calc(var(--px) * -10px), calc(var(--py) * -10px), 0)",
        }}
      >
        <h1
          className="animate-title-glow font-display text-6xl leading-none tracking-wide text-bone sm:text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {SITE.name}
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-muted">
          {SITE.tagline}
        </p>
      </div>

      {/* Portals */}
      {PORTALS.map((p) => (
        <Link
          key={p.href}
          href={p.href}
          className={`group relative z-10 flex flex-col items-center gap-3 ${p.position}`}
        >
          <span
            className={`animate-float ${p.color} block h-20 w-20 transition-transform duration-300 group-hover:scale-125 md:h-24 md:w-24`}
            style={{ animationDelay: p.delay }}
          >
            <span className="animate-glow block h-full w-full">
              {p.icon === "skull" ? (
                <Skull className="h-full w-full" />
              ) : (
                <Star className="h-full w-full" />
              )}
            </span>
          </span>
          <span className="text-sm uppercase tracking-[0.25em] text-muted transition-colors duration-300 group-hover:text-bone">
            {p.label}
          </span>
        </Link>
      ))}

      {/* Footer line */}
      <p className="absolute bottom-4 left-0 right-0 z-10 text-center text-[11px] uppercase tracking-[0.3em] text-muted/60">
        Step inside
      </p>
    </div>
  );
}
