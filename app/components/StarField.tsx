import { Sparkle } from "@/app/components/icons";

// A fixed (deterministic) set of twinkling background stars.
// Hardcoded positions avoid server/client hydration mismatches.
const STARS = [
  { top: "8%", left: "12%", size: 14, delay: "0s", color: "text-toxic" },
  { top: "16%", left: "78%", size: 10, delay: "0.6s", color: "text-haze" },
  { top: "24%", left: "40%", size: 8, delay: "1.2s", color: "text-toxic" },
  { top: "34%", left: "88%", size: 16, delay: "0.3s", color: "text-haze" },
  { top: "44%", left: "6%", size: 9, delay: "1.8s", color: "text-haze" },
  { top: "52%", left: "60%", size: 12, delay: "0.9s", color: "text-toxic" },
  { top: "63%", left: "22%", size: 15, delay: "1.5s", color: "text-haze" },
  { top: "70%", left: "82%", size: 9, delay: "0.2s", color: "text-toxic" },
  { top: "78%", left: "48%", size: 12, delay: "1.1s", color: "text-haze" },
  { top: "86%", left: "14%", size: 8, delay: "0.7s", color: "text-toxic" },
  { top: "90%", left: "70%", size: 13, delay: "1.9s", color: "text-haze" },
  { top: "12%", left: "54%", size: 9, delay: "2.3s", color: "text-toxic" },
];

export default function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((s, i) => (
        <span
          key={i}
          className={`absolute block animate-twinkle ${s.color}`}
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        >
          <Sparkle className="h-full w-full drop-shadow-[0_0_6px_currentColor]" />
        </span>
      ))}
    </div>
  );
}
