"use client";

/**
 * Hero background — recreates the Figma "Gradient 1" component:
 * four soft mint/teal blobs that drift between three states on a
 * 2.5 s OUT_CUBIC loop (positions taken from the decoded variants).
 */
import { motion } from "framer-motion";

// Keyframe positions as % of a 1440×600 frame (from design-spec.json)
const BLOBS = [
  {
    color: "var(--mint)",
    w: 57, h: 90,
    x: [-12, -6, 6, -12],
    y: [-16, 60, 80, -16],
  },
  {
    color: "var(--teal)",
    w: 88, h: 110,
    x: [6, 15, 24, 6],
    y: [28, 18, 8, 28],
  },
  {
    color: "var(--mint)",
    w: 57, h: 90,
    x: [55, 69, 86, 55],
    y: [34, 70, 65, 34],
  },
  {
    color: "var(--teal)",
    w: 62, h: 79,
    x: [40, 16, -6, 40],
    y: [-24, -25, -30, -24],
  },
];

export default function GradientBlobs() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        filter: "blur(70px) saturate(1.05)",
      }}
    >
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          animate={{
            left: b.x.map((v) => `${v}%`),
            top: b.y.map((v) => `${v}%`),
          }}
          transition={{
            duration: 7.5,
            times: [0, 0.33, 0.66, 1],
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            width: `${b.w}%`,
            height: `${b.h}%`,
            background: b.color,
            borderRadius: "48% 52% 55% 45% / 55% 48% 52% 45%",
          }}
        />
      ))}
    </div>
  );
}
