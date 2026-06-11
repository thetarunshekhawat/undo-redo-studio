"use client";

/**
 * Vertical word ticker — the signature animation pattern of the Figma file
 * (Hero Text Animation / "un|re" / "innovators|DISRUPTORS|STORYTELLERS" /
 * "different ×4"). Words slide up with the file's INOUT_BACK_CUBIC easing,
 * 0.6 s transition, swapping on a timer.
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WordTicker({
  words,
  interval = 2200,
  className = "",
  align = "left",
}: {
  words: string[];
  interval?: number;
  className?: string;
  align?: "left" | "center";
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        overflow: "hidden",
        verticalAlign: "bottom",
        height: "1.05em",
        lineHeight: 1.05,
      }}
    >
      <motion.span
        animate={{ y: `-${index * 1.05}em` }}
        transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: align === "center" ? "center" : "flex-start",
        }}
      >
        {words.map((w, i) => (
          <span key={`${w}-${i}`} style={{ height: "1.05em", whiteSpace: "nowrap" }}>
            {w}
          </span>
        ))}
      </motion.span>
    </span>
  );
}
