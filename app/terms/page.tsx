import type { Metadata } from "next";
import styles from "./terms.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions — Studio UNDO/REDO",
};

export default function TermsPage() {
  return (
    <main>
      <div className="container">
        <h1 className={`display h-85 ${styles.title}`}>
          terms &amp; conditions
        </h1>
        <p className={styles.updated}>Last Updated: 15th April, 2024</p>
      </div>

      <div className={styles.band}>
        <div className={styles.bandInner}>General Site Usage</div>
      </div>
      <div className="container">
        <p className={styles.body}>
          Welcome to www.studioundoredo.com. This site is provided as a service
          to our visitors and may be used for informational purposes only.
          Because the Terms and Conditions contain legal obligations, please
          read them carefully.
        </p>
        <p className={styles.body}>
          <strong>PLEASE NOTE:</strong> We reserve the right, at our sole
          discretion, to change, modify or otherwise alter these Terms and
          Conditions at any time. Unless otherwise indicated, amendments will
          become effective immediately. Please review these Terms and
          Conditions periodically. Your continued use of the Site following
          the posting of changes and/or modifications will constitute your
          acceptance of the revised Terms and Conditions and the
          reasonableness of these standards for notice of changes. For your
          information, this page was last updated as of the date at the top of
          these terms and conditions.
        </p>
      </div>

      <div className={styles.band}>
        <div className={styles.bandInner}>privacy policy</div>
      </div>
      <div className="container">
        <p className={styles.body}>
          By using this Site, you agree to be bound by, and to comply with,
          these Terms and Conditions. If you do not agree to these Terms and
          Conditions, please do not use this site.
        </p>
      </div>

      <div className={styles.band}>
        <div className={styles.bandInner}>Linked sites</div>
      </div>
      <div className="container">
        <p className={styles.body}>
          This Site may contain links to other independent third-party Web
          sites (&ldquo;Linked Sites&rdquo;). These Linked Sites are provided
          solely as a convenience to our visitors. Such Linked Sites are not
          under our control, and we are not responsible for and does not
          endorse the content of such Linked Sites, including any information
          or materials contained on such Linked Sites. You will need to make
          your own independent judgment regarding your interaction with these
          Linked Sites.
        </p>
      </div>
    </main>
  );
}
