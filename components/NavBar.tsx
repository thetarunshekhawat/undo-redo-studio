"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./NavBar.module.css";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Studio Undo/Redo — home">
          {/* exact wordmark extracted from the brand assets */}
          <img src="/assets/brand/logo-white.png" alt="Studio UNDO/REDO" />
        </Link>
        <button
          className={styles.burger}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`${styles.links} ${open ? styles.open : ""}`}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`${styles.link} ${
                pathname.startsWith(l.href) ? styles.active : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
