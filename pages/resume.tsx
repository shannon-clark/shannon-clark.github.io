import Head from "next/head";
import { getCollectionStats } from "../lib/legoUtils";
import styles from "../styles/LegoTracker.module.css";

const stats = getCollectionStats();

export default function Resume() {
  return (
    <>
      <Head>
        <title>Brick Journal | Stats</title>
        <meta
          name="description"
          content="Collection insights including piece totals, build status, and theme distribution."
        />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <p className={styles.heroKicker}>Stats</p>
            <h1 className={styles.heroTitle}>Collection Snapshot</h1>
            <div className={styles.metrics}>
              <div className={styles.metricTile}>
                <p className={styles.metricLabel}>Owned Sets</p>
                <p className={styles.metricValue}>{stats.ownedCount}</p>
              </div>
              <div className={styles.metricTile}>
                <p className={styles.metricLabel}>Total Pieces</p>
                <p className={styles.metricValue}>{stats.totalPieces.toLocaleString()}</p>
              </div>
              <div className={styles.metricTile}>
                <p className={styles.metricLabel}>Built</p>
                <p className={styles.metricValue}>{stats.builtCount}</p>
              </div>
              <div className={styles.metricTile}>
                <p className={styles.metricLabel}>In Progress</p>
                <p className={styles.metricValue}>{stats.inProgressCount}</p>
              </div>
              <div className={styles.metricTile}>
                <p className={styles.metricLabel}>Not Built Yet</p>
                <p className={styles.metricValue}>{stats.notBuiltCount}</p>
              </div>
              <div className={styles.metricTile}>
                <p className={styles.metricLabel}>High Priority Wishlist</p>
                <p className={styles.metricValue}>{stats.highPriorityWishlistCount}</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Themes Represented</h2>
            <article className={styles.aboutPanel}>
              <ul className={styles.themeList}>
                {stats.themeBreakdown.map((entry) => (
                  <li key={entry.theme}>
                    {entry.theme}: {entry.count} set{entry.count > 1 ? "s" : ""}
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
