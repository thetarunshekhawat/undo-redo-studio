"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./services.module.css";
import WordTicker from "@/components/WordTicker";
import Reveal from "@/components/Reveal";
import ServicesAccordion from "@/components/ServicesAccordion";

/* Floating pill positions: % of the mint board, from the Figma "Group 20" */
const PILLS: { label: string; x: number; y: number }[] = [
  { label: "research", x: 8, y: 36 },
  { label: "influencer", x: 3, y: 56 },
  { label: "strategy", x: 1, y: 76 },
  { label: "branding", x: 26, y: 44 },
  { label: "shoots", x: 22.5, y: 82 },
  { label: "mood boards", x: 47, y: 24 },
  { label: "packaging", x: 39, y: 64 },
  { label: "inspiration", x: 48, y: 84 },
  { label: "content", x: 71, y: 56 },
  { label: "mock ups", x: 75, y: 32 },
  { label: "ugc", x: 89, y: 78 },
];

export default function ServicesPage() {
  return (
    <main>
      <div className="container">
        {/* ============ HERO — trust the process ============ */}
        <section className={styles.hero}>
          <Reveal>
            <h1 className={styles.heroTitle}>
              They say to trust the process*
            </h1>
          </Reveal>

          <div className={styles.processWrap}>
            <Reveal>
              <span className={styles.processTag}>the process</span>
            </Reveal>
            <Reveal delay={0.1}>
              <div className={styles.processBoard}>
                {PILLS.map((p, i) => (
                  <motion.span
                    key={p.label}
                    className={styles.floatPill}
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    animate={{ y: [0, -9, 0], rotate: [0, i % 2 ? 1.2 : -1.2, 0] }}
                    transition={{
                      duration: 3 + (i % 5) * 0.45,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.18,
                    }}
                  >
                    {p.label}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <p className={styles.simplify}>
              We help simplify this process, so you don&rsquo;t have to.
              <br />
              But successful brands are not built by accident.
            </p>
          </Reveal>
        </section>
      </div>

      {/* ============ HOW THINGS GO DOWN ============ */}
      <section className={styles.creamBand}>
        <div className="container">
          <Reveal>
            <h2 className={styles.howTitle}>this is how things go down at</h2>
            <img
              src="/assets/brand/logo-teal.png"
              alt="Studio UNDO/REDO"
              className={styles.howLogo}
            />
          </Reveal>

          <div className={styles.howCards}>
            <Reveal>
              <div className={styles.howCard}>
                <p className={styles.howCardTitle}>School-ing it up!</p>
                <p className={styles.howCardBody}>
                  We analyse your brand and your problems like it&rsquo;s our
                  exam the next day, we study the target audience, build our
                  notes and get back to you with our questions.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className={styles.howCard}>
                <p className={styles.howCardTitle}>No more Strategy crisis</p>
                <p className={styles.howCardBody}>
                  We&rsquo;re not afraid to experiment and explore different
                  directions, even seemingly crazy ideas. This is where the
                  &ldquo;undo-ing&rdquo; comes in — no idea is off-limits, and
                  we can easily discard ideas that don&rsquo;t work.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className={styles.howCard}>
                <p className={styles.howCardTitle}>
                  Results that speak for themselves
                </p>
                <p className={styles.howCardBody}>
                  As ideas become more concrete, we start to refine them. This
                  is where the &ldquo;redo-ing&rdquo; happens. We take a
                  promising concept and iterate on it, till we get those
                  kickass designs that perfectly capture your brand.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE UN/RE-DO — accordion ============ */}
      <div className="container">
        <Reveal>
          <h2 className={styles.menuHeading}>
            <span>what we</span>
            <WordTicker
              words={["un", "re"]}
              interval={1800}
              className={`${styles.menuHeading} ${styles.menuHeadingTicker}`}
            />
            <span>do</span>
          </h2>
        </Reveal>
      </div>
      <ServicesAccordion />

      {/* ============ CTA ============ */}
      <section className={styles.cta}>
        <Reveal>
          <p className={styles.ctaTitle}>
            Your main character moment begins here.
          </p>
          <div className={styles.ctaBtn}>
            <Link href="/contact" className="btn-pill">
              let&rsquo;s get started!
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
