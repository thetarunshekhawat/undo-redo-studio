"use client";

/** Infinite horizontal marquee (collaborators strip). */
import { motion } from "framer-motion";

export default function Marquee({
  children,
  duration = 28,
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <motion.div
        style={{ display: "flex", width: "max-content", gap: "clamp(60px, 9vw, 130px)" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div style={{ display: "flex", gap: "clamp(60px, 9vw, 130px)", alignItems: "center" }}>
          {children}
        </div>
        <div style={{ display: "flex", gap: "clamp(60px, 9vw, 130px)", alignItems: "center" }} aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
