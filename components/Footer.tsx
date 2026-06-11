import Link from "next/link";
import styles from "./Footer.module.css";

const ICON_STROKE = { fill: "currentColor" } as const;

function MailIcon() {
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden>
      <rect x="1" y="1" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M2 2.5 12 10 22 2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="17" height="26" viewBox="0 0 17 26" fill="none" aria-hidden>
      <rect x="1" y="1" width="15" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="8.5" cy="21" r="1.4" {...ICON_STROKE} />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="19" height="26" viewBox="0 0 19 26" fill="none" aria-hidden>
      <path
        d="M9.5 1C4.8 1 1 4.8 1 9.4 1 15.6 9.5 25 9.5 25S18 15.6 18 9.4C18 4.8 14.2 1 9.5 1Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="9.5" cy="9.5" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/* Brand mark: the undo/redo double-arrow glyph from the footer (Layer_1) —
   two curved arrows offset diagonally, forming the studio's ↺/↻ cycle. */
function BrandMark({ className }: { className?: string }) {
  const arrow = (
    <g>
      <path
        d="M14 56a34 34 0 1 1 10 24"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M30 92 12 72l30-4z" fill="currentColor" />
    </g>
  );
  return (
    <svg viewBox="0 0 201 170" fill="none" aria-hidden className={className}>
      <g transform="translate(0 0)">{arrow}</g>
      <g transform="translate(200 170) rotate(180)">{arrow}</g>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="1.5" y="1.5" width="21" height="21" rx="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="18.2" cy="5.8" r="1.6" fill="currentColor" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8.5h4V23h-4V8.5ZM8.5 8.5h3.8v2h.06c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V23h-4V8.5Z" />
    </svg>
  );
}
function BehanceIcon() {
  return (
    <svg width="37" height="23" viewBox="0 0 37 23" fill="currentColor" aria-hidden>
      <path d="M10.6 10.4c1.5-.7 2.3-1.9 2.3-3.7 0-3.6-2.7-4.5-5.8-4.5H0v18.4h7.3c3.4 0 6.7-1.6 6.7-5.5 0-2.4-1.1-4.1-3.4-4.7ZM4 5.3h3.1c1.2 0 2.3.3 2.3 1.8 0 1.3-.9 1.9-2.1 1.9H4V5.3Zm3.5 12.2H4v-4.4h3.6c1.4 0 2.4.6 2.4 2.2 0 1.6-1.2 2.2-2.5 2.2ZM29.2 6.4c-4.4 0-7.4 3.3-7.4 7.7 0 4.5 2.8 7.6 7.4 7.6 3.5 0 5.8-1.6 6.9-4.9h-3.5c-.4 1.2-1.9 1.9-3.2 1.9-2.4 0-3.6-1.4-3.6-3.7h10.5c.3-4.7-2.3-8.6-7.1-8.6Zm-3.4 6.1c.1-1.9 1.4-3.1 3.3-3.1 2 0 3 1.2 3.2 3.1h-6.5ZM24.5 2.3h8.7v2.1h-8.7z" />
    </svg>
  );
}
function PinterestIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12c0 5.1 3.2 9.5 7.7 11.2-.1-1-.2-2.4 0-3.5l1.4-6s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.9-2.3 3.9-5.7 0-3-2.1-5-5.2-5-3.5 0-5.6 2.6-5.6 5.4 0 1.1.4 2.2.9 2.9.1.1.1.2.1.3l-.4 1.5c-.1.2-.2.3-.4.2-1.5-.7-2.4-2.9-2.4-4.7 0-3.8 2.8-7.3 8-7.3 4.2 0 7.5 3 7.5 7 0 4.2-2.6 7.6-6.3 7.6-1.2 0-2.4-.6-2.8-1.4l-.7 2.9c-.3 1-1 2.3-1.5 3.1 1.1.3 2.3.5 3.5.5 6.6 0 12-5.4 12-12S18.6 0 12 0Z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 1.2h7.7l5.3 7 5.9-7Zm-1.3 19.4h2L7.1 3.3H4.9l12.7 17.3Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.panel}>
        <div className={styles.inner}>
          <div>
            <p className={styles.lead}>
              We speak fluent creativity (&amp; sarcasm!) Let&rsquo;s chat.
            </p>

            <div className={styles.contactList}>
              <div className={styles.contactRow}>
                <MailIcon />
                <a href="mailto:work@studioundoredo.com">
                  work@studioundoredo.com
                </a>
              </div>
              <div className={styles.contactRow}>
                <PhoneIcon />
                <a href="tel:+918920373342">+91 89203 73342</a>
              </div>
              <div className={styles.contactRow}>
                <PinIcon />
                <span>Tolstoy House, Janpath, Connaught Place, New Delhi</span>
              </div>
            </div>

            <div className={styles.social}>
              <p className={`${styles.socialTitle}`}>
                we&rsquo;re pretty social,
                <br />
                quite literally!
              </p>
              <div className={styles.icons}>
                <a href="https://www.instagram.com/studioundoredo/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
                <a href="https://www.linkedin.com/company/studioundoredo" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
                <a href="https://www.behance.net/" target="_blank" rel="noreferrer" aria-label="Behance"><BehanceIcon /></a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest"><PinterestIcon /></a>
                <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X"><XIcon /></a>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <BrandMark className={styles.mark} />
            <div className={styles.rightLinks}>
              <Link href="/work">Blogs</Link>
              <Link href="/terms">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.end}>
        @ All Rights Reserved by Studio Undo Redo © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
