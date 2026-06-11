import type { Metadata } from "next";
import styles from "./about.module.css";
import WordTicker from "@/components/WordTicker";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us — Studio UNDO/REDO",
  description:
    "We are the innovators, disruptors and storytellers. Meet the do-ers behind Studio UNDO/REDO.",
};

export default function AboutPage() {
  return (
    <main>
      {/* ============ TEAL HERO ============ */}
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.kicker}>we are the</p>
          <span className={styles.heroTicker}>
            <WordTicker
              words={["innovators", "disruptors", "storytellers"]}
              interval={2200}
            />
          </span>
        </div>
      </section>

      <div className="container">
        {/* ============ WE DID A LIL' THING ============ */}
        <section className={styles.story}>
          <Reveal>
            <div className={styles.storyPhoto}>
              <img
                src="/assets/founders/both.png"
                alt="Vedita and Rechael Lakhotia — founders of Studio UNDO/REDO"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={styles.storyText}>
              <p>
                <strong>We did a lil&rsquo; thing!</strong>
              </p>
              <br />
              <p>
                Studio UNDO/REDO was started with a simple objective: Every
                brand deserves its main character moment.
              </p>
              <br />
              <p>
                The 5 year old us dreamed of this. We&rsquo;ve always been
                together to a point people called us twins. Working and
                building our business together has just been an icing on the
                cake. As in every sister relationship, we do have disagreements
                but nothing discussing our family tea can&rsquo;t solve (hehe
                sorry mom &amp; dad).
              </p>
              <br />
              <p>
                But hey, that&rsquo;s the beauty of working together! We
                believe in bouncing ideas off of each other, taking chances,
                and even hitting the &lsquo;undo&rsquo; button when needed.
                Don&rsquo;t worry, we always come back stronger, with a
                &lsquo;redo&rsquo; that&rsquo;ll blow your mind (and maybe make
                you a little envious of our brainstorming sessions — just so
                you know they&rsquo;re epic!). After 22 years of knowing each
                other inside and out, we&rsquo;re more than just compatible —
                we&rsquo;re a creative powerhouse!
              </p>
            </div>
          </Reveal>
        </section>

        {/* ============ THE DO-ERS ============ */}
        <Reveal>
          <h2 className={styles.doersHeading}>
            <span>the</span>
            <WordTicker
              words={["un", "re"]}
              interval={1800}
              className={styles.doersHeading}
            />
            <span>do-ers</span>
          </h2>
        </Reveal>

        <Reveal>
          <article className={styles.founderCard}>
            <div className={styles.founderPhoto}>
              <img src="/assets/founders/vedita.png" alt="Vedita Lakhotia" />
            </div>
            <div>
              <p className={styles.founderName}>VEDITA LAKHOTIA</p>
              <p className={styles.founderRole}>Co Founder//The Undo</p>
              <div className={styles.founderBio}>
                <p>
                  A year ago, I graduated from Hansraj with a lot of
                  &lsquo;what ifs&rsquo;. Fast forward to experiences at Nykaa
                  and WPP, I&rsquo;m now chasing the exhilarating chaos of the
                  marketing world — which is the perfect blend of adrenaline
                  and strategy!
                </p>
                <br />
                <p>
                  As the marketing head, I bring the strategic thinking,
                  problem solving skills, a dash of humor, witty writing and a
                  relentless passion for turning ideas into reality.
                  (Don&rsquo;t worry, Rechael keeps me grounded... most of the
                  time) I believe that strong brands are built on strong
                  narratives and I&rsquo;m here to help your brand tell its
                  story in a way that resonates with your audience. If your
                  marketing strategy needs a &ldquo;undo,&rdquo; I&rsquo;m your
                  gal.
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal>
          <article className={`${styles.founderCard} ${styles.founderReverse}`}>
            <div>
              <p className={styles.founderName}>RECHAEL LAKHOTIA</p>
              <p className={styles.founderRole}>Co Founder//The Redo</p>
              <div className={styles.founderBio}>
                <p>
                  I discovered my love for design during the lockdown and
                  haven&rsquo;t looked back since. So, I traded my degree in
                  Commerce for an iPad to become the Creative Head at
                  UNDO/REDO.
                </p>
                <br />
                <p>
                  I add innovative ideas, visual direction, technical finesse
                  and some more humour to the mix, ensuring that we meet all
                  the crazy deadlines while having fun. (And yes, I do keep
                  Vedita from floating away on a cloud of ideas sometimes.)
                  After a successful stint as a Senior Designer, crafting
                  digital campaigns and multiple visual identities for
                  homegrown brands, I&rsquo;m now ready to take on the world,
                  one design &ldquo;redo&rdquo; at a time. Oh, and I know how
                  to make it pop!
                </p>
              </div>
            </div>
            <div className={styles.founderPhoto}>
              <img src="/assets/founders/rechael.png" alt="Rechael Lakhotia" />
            </div>
          </article>
        </Reveal>

        {/* ============ WE'RE DIFFERENT ============ */}
        <Reveal>
          <h2 className={styles.diffHeading}>
            <span>here&rsquo;s why we&rsquo;re</span>
            <WordTicker
              words={["different", "different", "different"]}
              interval={1400}
              className={styles.diffTicker}
            />
          </h2>
        </Reveal>

        <div className={styles.diffRow}>
          <Reveal>
            <div className={styles.diffCard}>
              <div className={styles.diffIllo}>
                <img src="/assets/illustrations/finger-heart.png" alt="" aria-hidden />
              </div>
              <p className={styles.diffTitle}>
                We speak fluent Gen Z (&amp; can translate it for everyone
                else)
              </p>
              <p className={styles.diffBody}>
                We understand the ever-evolving digital landscape and can craft
                content that resonates with your target audience, no matter how
                many emojis they use.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className={styles.diffCard}>
              <div className={styles.diffIllo}>
                <img src="/assets/illustrations/handshake.png" alt="" aria-hidden />
              </div>
              <p className={styles.diffTitle}>
                We&rsquo;re brutally honest (but in the nicest way possible)
              </p>
              <p className={styles.diffBody}>
                We&rsquo;ll tell you straight up if your idea needs a little
                work, but we&rsquo;ll also work tirelessly with you to bring
                your vision to life.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className={styles.diffCard}>
              <div className={styles.diffIllo}>
                <img src="/assets/illustrations/heart-hands.png" alt="" aria-hidden />
              </div>
              <p className={styles.diffTitle}>
                We&rsquo;re obsessed with results (and having fun while we get
                them)
              </p>
              <p className={styles.diffBody}>
                We don&rsquo;t just create good work — we track, analyze, and
                optimize to make sure your campaigns deliver real value and
                still have a blast in the process.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
