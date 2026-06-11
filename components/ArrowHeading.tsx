"use client";

/**
 * Section heading with the diagonal arrow glyph from the Figma file
 * ("Featured Projects ↗", "our collaborators ↗", "the do-ers ↗" …).
 * The arrow springs diagonally on hover (Figma GENTLE_SPRING smart-animate).
 */
import Link from "next/link";
import { motion } from "framer-motion";

export function Arrow({ size = 40, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 51 50"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <path
        d="M10 40 38 12 M16 10 H40 V34"
        stroke={color}
        strokeWidth={6}
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function ArrowHeading({
  children,
  href,
  className = "",
  color,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  color?: string;
}) {
  const inner = (
    <motion.span
      initial="rest"
      whileHover="hover"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "16px",
        color,
      }}
    >
      <span className={`display ${className}`}>{children}</span>
      <motion.span
        variants={{
          rest: { x: 0, y: 0 },
          hover: { x: 10, y: -10 },
        }}
        transition={{ type: "spring", stiffness: 220, damping: 12 }}
        style={{ display: "inline-flex" }}
      >
        <Arrow size={36} />
      </motion.span>
    </motion.span>
  );

  return href ? <Link href={href}>{inner}</Link> : inner;
}
