import type { Metadata } from "next";
import styles from "./work.module.css";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Studio UNDO/REDO",
  description:
    "Featured projects: branding, packaging, social media and art direction by Studio UNDO/REDO.",
};

/* curved undo / redo arrows used in the hero lockup */
function UndoArrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 68 68"
      fill="none"
      aria-hidden
      className={styles.arrowGlyph}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M14 30C18 16 32 8 46 12c14 4 22 18 18 32-3 11-12 18-23 19"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path d="M22 14 12 32 32 36" fill="currentColor" />
    </svg>
  );
}

export default function WorkPage() {
  return (
    <main>
      {/* ============ MINT HERO — undo doubts / redo results ============ */}
      <section className={styles.hero}>
        <Reveal y={50}>
          <div className={styles.lockup}>
            <div className={styles.lockupRow}>
              <span className={styles["word-orange"]}>undo</span>
              <UndoArrow />
              <span className={styles["word-teal"]}>doubts</span>
            </div>
            <div className={styles.lockupRow}>
              <span className={styles["word-orange"]}>redo</span>
              <UndoArrow flip />
              <span className={`${styles["word-teal"]} ${styles.bely}`}>
                results
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ CASE STUDIES (edit data/projects.ts to update) ============ */}
      {projects.map((p, i) => (
        <article key={p.slug} id={p.slug} className={styles.case}>
          <Reveal>
            <h2 className={`display h-65 ${styles.caseTitle}`}>{p.title}</h2>
            <p className={styles.caseTagline}>{p.tagline}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className={styles.caseImage}>
              <img src={p.hero} alt={`${p.title} — ${p.tagline}`} />
            </div>
          </Reveal>
          <div className={styles.caseMeta}>
            <Reveal>
              <div className={styles.metaList}>
                <span>Services: {p.services}</span>
                <span>Industry: {p.industry}</span>
                <span>Year: {p.year}</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p>{p.description}</p>
            </Reveal>
          </div>
          {i < projects.length - 1 && <div className={styles.divider} />}
        </article>
      ))}
    </main>
  );
}
