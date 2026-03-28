import Head from "next/head";
import { sortedOwnedSets } from "../lib/legoUtils";
import styles from "../styles/LegoTracker.module.css";
import { LegoSetCard } from "../components/LegoSetCard";

export default function About() {
  return (
    <>
      <Head>
        <title>Brick Journal | Collection</title>
        <meta
          name="description"
          content="Owned LEGO collection including set numbers, themes, pieces, and build progress."
        />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <p className={styles.heroKicker}>Collection</p>
            <h1 className={styles.heroTitle}>Owned LEGO Sets</h1>
            <p className={styles.heroSubtitle}>
              My active collection with build status and notes from each project.
            </p>
          </section>

          <section className={styles.section}>
            <div className={styles.cardGrid}>
              {sortedOwnedSets.map((set) => (
                <LegoSetCard key={set.setNumber} set={set} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
