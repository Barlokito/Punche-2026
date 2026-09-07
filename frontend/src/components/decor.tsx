import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Starburst({
  points = 14,
  className,
}: {
  points?: number;
  className?: string;
}) {
  const pts = Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 === 0 ? 50 : 36;
    const a = (Math.PI * i) / points;
    return `${50 + r * Math.sin(a)},${50 - r * Math.cos(a)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon points={pts} fill="currentColor" stroke="#121212" strokeWidth="3" />
    </svg>
  );
}

export function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 2 L60 40 L98 50 L60 60 L50 98 L40 60 L2 50 L40 40 Z"
        fill="currentColor"
        stroke="#121212"
        strokeWidth="3"
      />
    </svg>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Overline({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-xs font-semibold uppercase tracking-[0.22em] ${className}`}
    >
      {children}
    </p>
  );
}
