"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import GradientBlobs from "@/components/GradientBlobs";
import WordTicker from "@/components/WordTicker";
import ArrowHeading, { Arrow } from "@/components/ArrowHeading";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { projects } from "@/data/projects";

/* Minimal geometric card icons, after the Figma "Layer_1" glyphs */
function IconBranding({ color = "#F4E8D9" }) {
  return (
    <svg width="76" height="79" viewBox="0 0 76 79" fill="none" aria-hidden>
      <circle cx="38" cy="26" r="24" stroke={color} strokeWidth="9" />
      <path d="M8 78 38 48 68 78" stroke={color} strokeWidth="9" />
    </svg>
  );
}
function IconPackaging({ color = "#1A1A1A" }) {
  return (
    <svg width="58" height="79" viewBox="0 0 58 79" fill="none" aria-hidden>
      <path d="M0 29 29 0 58 29" stroke={color} strokeWidth="9" />
      <path d="M0 79 29 50 58 79" stroke={color} strokeWidth="9" />
      <rect x="22" y="33" width="13" height="13" transform="rotate(45 28.5 39.5)" fill={color} />
    </svg>
  );
}
function IconSocial({ color = "#1A1A1A" }) {
  return (
    <svg width="90" height="79" viewBox="0 0 90 79" fill="none" aria-hidden>
      <rect x="0" y="0" width="38" height="79" rx="19" fill={color} />
      <rect x="52" y="0" width="38" height="79" rx="19" fill={color} />
    </svg>
  );
}
function IconStrategy({ color = "#1A1A1A" }) {
  return (
    <svg width="79" height="79" viewBox="0 0 79 79" fill="none" aria-hidden>
      <path d="M39.5 0A39.5 39.5 0 0 0 0 39.5H39.5V0Z" fill={color} />
      <path d="M39.5 79A39.5 39.5 0 0 0 79 39.5H39.5V79Z" fill={color} />
      <circle cx="59" cy="20" r="14" fill={color} />
    </svg>
  );
}
function IconArt({ color = "#1A1A1A" }) {
  return (
    <svg width="97" height="79" viewBox="0 0 97 79" fill="none" aria-hidden>
      <path d="M18 30C18 13.4 31.4 0 48 0s31 13.4 31 30H18Z" fill={color} />
      <rect x="0" y="30" width="97" height="49" rx="24" fill={color} />
    </svg>
  );
}

export default function Home() {
  const teaser = projects[0];

  return (
    <main>
      {/* ============ HERO — "we are the shift that you need" ============ */}
      <section className={styles.hero}>
        <GradientBlobs />
        <div className={styles.heroInner}>
          <p className={styles.heroKicker}>
            we are the &lsquo;shift&rsquo; that you need
          </p>
          <div className={styles.heroTicker}>
            <WordTicker
              words={["ctrl + z", "ctrl + shift + z"]}
              interval={2400}
              align="center"
            />
          </div>
        </div>
        <span className={`${styles.heroCorner} ${styles.cornerLeft}`}>
          ctrl + z//undo
        </span>
        <span className={`${styles.heroCorner} ${styles.cornerRight}`}>
          ctrl + shift + z//redo
        </span>
      </section>

      {/* ============ TEAL INTRO BAND ============ */}
      <section className={styles.tealBand}>
        <div className={styles.tealBlob} aria-hidden />
        <Reveal>
          <p className={`container ${styles.tealCopy}`}>
            At Studio Undo/Redo, we hit CTRL+Z on the ordinary and
            CTRL+SHIFT+Z into a world of groundbreaking ideas and captivating
            narratives. We challenge the norm with innovative thinking and
            craft compelling stories that bring your brand to life.
            <br />
            <br />
            Our design philosophy? Undo the doubts, redo the results.
          </p>
        </Reveal>
      </section>

      {/* ============ FEATURED PROJECTS TEASER ============ */}
      <section className={styles.featured}>
        <div className="container">
          <Reveal>
            <ArrowHeading href="/work" className="h-50">
              Featured Projects
            </ArrowHeading>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={styles.featuredCard}>
              <div className={styles.picRow}>
                {[
                  { img: teaser.intro!, word: "Undo" },
                  { img: teaser.hero, word: "Redo" },
                ].map((p) => (
                  <Link href="/work" key={p.word}>
                    <motion.div
                      className={styles.pic}
                      initial="rest"
                      whileHover="hover"
                    >
                      <img src={p.img} alt={`${teaser.title} — ${p.word}`} />
                      <motion.div
                        className={styles.picOverlay}
                        variants={{
                          rest: { opacity: 0 },
                          hover: { opacity: 1 },
                        }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {p.word} <Arrow size={48} />
                      </motion.div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <div className={styles.featuredMeta}>
            <p className={styles.featuredName}>{teaser.title}</p>
            <p className={styles.featuredServices}>
              Branding//Packaging Design
            </p>
          </div>

          <div className={styles.exploreWrap}>
            <Link href="/work" className="btn-pill">
              explore all
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE UN/RE-DO — services cards ============ */}
      <section className={styles.black}>
        <div className="container">
          <Reveal>
            <Link href="/services" className={styles.whatWeDo}>
              <span>what we</span>
              <span style={{ color: "var(--orange)" }}>
                <WordTicker
                  words={["un", "re"]}
                  interval={1800}
                  className={styles.whatWeDo}
                />
              </span>
              <span>do</span>
              <Arrow size={32} />
            </Link>
          </Reveal>

          <div className={styles.cardsRow1}>
            <Reveal>
              <Link href="/services">
                <div className={styles.svcCard} style={{ background: "var(--teal)", color: "var(--cream)" }}>
                  <IconBranding />
                  <span className={styles.svcTitleDisplay}>branding</span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/services">
                <div className={styles.svcCard} style={{ background: "var(--mint)" }}>
                  <IconPackaging />
                  <span className={styles.svcTitle}>packaging</span>
                </div>
              </Link>
            </Reveal>
          </div>

          <div className={styles.cardsRow2}>
            <Reveal>
              <Link href="/services">
                <div className={`${styles.svcCard} ${styles.svcSmall}`} style={{ background: "var(--cream)" }}>
                  <IconSocial />
                  <span className={styles.svcTitle}>
                    social
                    <br />
                    media
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/services">
                <div className={`${styles.svcCard} ${styles.svcSmall}`} style={{ background: "var(--orange)" }}>
                  <IconStrategy />
                  <span className={styles.svcTitle}>
                    brand
                    <br />
                    strategy
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={0.16}>
              <Link href="/services">
                <div className={`${styles.svcCard} ${styles.svcSmall}`} style={{ background: "var(--pink)" }}>
                  <IconArt />
                  <span className={styles.svcTitle}>
                    art
                    <br />
                    direction
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ COLLABORATORS ============ */}
      <section className={styles.collab}>
        <div className="container">
          <Reveal>
            <ArrowHeading href="/work" className="h-40">
              our collaborators
            </ArrowHeading>
          </Reveal>
        </div>
        <div className={styles.collabStrip}>
          <Marquee>
            {projects.map((p) => (
              <span key={p.slug} className={styles.collabLogo}>
                {p.title}
              </span>
            ))}
          </Marquee>
        </div>
      </section>
    </main>
  );
}
