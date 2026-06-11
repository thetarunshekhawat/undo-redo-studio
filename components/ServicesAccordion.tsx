"use client";

/**
 * Services accordion — Figma "Services Accordian" component.
 * Rows alternate mint/teal; click expands with the file's 0.3 s IN_CUBIC
 * smart-animate. One row open at a time.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ServicesAccordion.module.css";

const ITEMS = [
  {
    title: "branding",
    items: [
      "Brand Strategy",
      "Discovery & Research",
      "Logo Design",
      "Brand Style Guides",
      "Brand Extensions",
      "Rebranding",
      "Brand Refresh",
      "3D Mock-ups",
      "Brochures",
    ],
  },
  {
    title: "social media",
    items: [
      "Social Media Management",
      "Strategy Development",
      "Monthly Calendars",
      "Content Creation & Curation",
      "Digital Campaigns",
      "Social Media Advertising",
      "Community Management",
      "Analytics & Reporting",
      "Emailers & Banners",
    ],
  },
  {
    title: "art direction",
    items: [
      "Creative Direction",
      "Product Shoots",
      "Video Shoots",
      "Set Design",
      "Mood Boarding",
      "Prop Sourcing",
      "Script Writing",
    ],
  },
  {
    title: "packaging",
    items: [
      "Packaging Design",
      "Catalogue Design",
      "Label Design",
      "Unboxing Experience",
      "E-Commerce / Retail",
      "Product Mock Ups",
      "Inner & Outer Box Design",
    ],
  },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {ITEMS.map((item, i) => {
        const mint = i % 2 === 0;
        const isOpen = open === i;
        return (
          <div
            key={item.title}
            className={`${styles.row} ${mint ? styles.mint : styles.teal}`}
          >
            <button
              className={styles.heading}
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <motion.svg
                width="40"
                height="40"
                viewBox="0 0 51 50"
                fill="none"
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
              >
                <path
                  d="M10 40 38 12 M16 10 H40 V34"
                  stroke="currentColor"
                  strokeWidth={6}
                  strokeLinecap="square"
                />
              </motion.svg>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
                  className={styles.panel}
                >
                  <div className={styles.panelInner}>
                    <hr className={styles.rule} />
                    <ul className={styles.list}>
                      {item.items.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
