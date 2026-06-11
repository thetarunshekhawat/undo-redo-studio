"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // mailto handoff keeps the static site backend-free; swap for an API
    // route or form service (Formspree etc.) when one is available.
    const subject = encodeURIComponent(
      `Project enquiry from ${data.get("name") || "the website"}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nContact no.: ${data.get(
        "phone"
      )}\nEmail: ${data.get("email")}\n\nProject:\n${data.get("project")}`
    );
    window.location.href = `mailto:work@studioundoredo.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main>
      <div className="container">
        <Reveal>
          <h1 className={styles.title}>
            your idea + our skills
            <br />
            makes the dream team.
          </h1>
        </Reveal>

        {/* ============ FORM (fields per the Figma contact frame) ============ */}
        <Reveal delay={0.1}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <input
                className="line-field"
                name="name"
                placeholder="what do we call you?"
                required
              />
            </div>
            <div className={styles.row2}>
              <div>
                <input
                  className="line-field"
                  name="phone"
                  placeholder="how do we contact you?"
                />
                <span className={styles.fieldNote}>*Contact no.</span>
              </div>
              <div>
                <input
                  className="line-field"
                  type="email"
                  name="email"
                  placeholder="how do we contact you?"
                  required
                />
                <span className={styles.fieldNote}>*email id</span>
              </div>
            </div>
            <div>
              <input
                className="line-field"
                name="project"
                placeholder="tell us about the project. we're excited already!"
                required
              />
            </div>
            <div className={styles.submitWrap}>
              {sent ? (
                <span className={styles.sent}>
                  Opening your mail app… see you in the inbox!
                </span>
              ) : (
                <button type="submit" className="btn-pill">
                  let&rsquo;s chat!
                </button>
              )}
            </div>
          </form>
        </Reveal>

        {/* ============ ILLUSTRATION ============ */}
        <Reveal>
          <div className={styles.collabBlock}>
            <img
              src="/assets/illustrations/twins.png"
              alt="Illustration of the two founders"
              className={styles.illo}
            />
            <p className={styles.collabCopy}>
              We maybe fueled with caffeine and memes but we make killer
              collaborators!
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
