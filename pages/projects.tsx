import Head from "next/head";
import { sortedWishlistSets } from "../lib/legoUtils";
import styles from "../styles/LegoTracker.module.css";
import { WishlistSetCard } from "../components/WishlistSetCard";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Brick Journal | Wishlist</title>
        <meta
          name="description"
          content="LEGO wishlist prioritized by what I hope to add to the collection next."
        />
      </Head>
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <p className={styles.heroKicker}>Wishlist</p>
            <h1 className={styles.heroTitle}>Future Builds</h1>
            <p className={styles.heroSubtitle}>
              Prioritized list of sets I am actively tracking for my next additions.
            </p>
          </section>

          <section className={styles.section}>
            <div className={styles.cardGrid}>
              {sortedWishlistSets.map((set) => (
                <WishlistSetCard key={set.setNumber} set={set} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
